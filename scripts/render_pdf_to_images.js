const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function renderPdfToImages(pdfFilePath, outputDir, prefix) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const pdfBytes = fs.readFileSync(pdfFilePath);
  const base64 = pdfBytes.toString('base64');
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    </head>
    <body style="margin:0;padding:0;background:#fff;">
      <div id="pages"></div>
      <script>
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        async function loadPdf() {
          try {
            const raw = atob('${base64}');
            const uint8 = new Uint8Array(raw.length);
            for (let i = 0; i < raw.length; i++) uint8[i] = raw.charCodeAt(i);
            const pdf = await pdfjsLib.getDocument({ data: uint8 }).promise;
            const container = document.getElementById('pages');
            for (let i = 1; i <= pdf.numPages; i++) {
              const p = await pdf.getPage(i);
              const viewport = p.getViewport({ scale: 2.0 });
              const canvas = document.createElement('canvas');
              canvas.id = 'page-' + i;
              canvas.width = viewport.width;
              canvas.height = viewport.height;
              container.appendChild(canvas);
              const ctx = canvas.getContext('2d');
              await p.render({ canvasContext: ctx, viewport }).promise;
            }
            window.__numPages = pdf.numPages;
            window.__rendered = true;
          } catch(e) {
            window.__error = e.message;
            console.error(e);
          }
        }
        loadPdf();
      </script>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.waitForFunction('window.__rendered === true || window.__error', { timeout: 45000 });
  
  const err = await page.evaluate(() => window.__error);
  if (err) throw new Error('PDF render error: ' + err);

  const numPages = await page.evaluate(() => window.__numPages);
  console.log(`Rendered ${numPages} pages for ${path.basename(pdfFilePath)}`);

  const savedImages = [];
  for (let i = 1; i <= numPages; i++) {
    const canvas = await page.$('#page-' + i);
    const imgPath = path.join(outputDir, `${prefix}-p${i}.png`);
    await canvas.screenshot({ path: imgPath });
    savedImages.push(imgPath);
  }
  await browser.close();
  return savedImages;
}

if (require.main === module) {
  const file = process.argv[2] || 'exports/website-pdf/test-home.pdf';
  const dir = path.join(__dirname, '..', 'exports', 'website-pdf', 'preview');
  renderPdfToImages(file, dir, 'home')
    .then(imgs => console.log('Saved images:', imgs))
    .catch(console.error);
}

module.exports = { renderPdfToImages };

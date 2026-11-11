const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { renderPdfToImages } = require('./render_pdf_to_images');

const POPUP_PRINT_CSS = `
  @media print {
    body::before, .bg-circles, .skip, .header-peek, .scroll-cue {
      display: none !important;
    }
    html, body {
      background: #ffffff !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }
`;

async function testPopups() {
  const browser = await chromium.launch();
  const outDir = path.join(__dirname, '..', 'exports', 'website-pdf', 'popup-states');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // 1. Initial HCP Dialog
  console.log('Capturing HCP Verification Dialog (Initial State)...');
  {
    const page = await browser.newPage({ viewport: { width: 1060, height: 900 }, deviceScaleFactor: 2 });
    // Do not set session storage, so modal dialog opens automatically!
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForSelector('dialog#hcp-dialog[open]', { state: 'visible', timeout: 5000 });
    await page.waitForTimeout(500);

    const pdfPath = path.join(outDir, 'popup-hcp-verification-initial.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' }
    });
    console.log('-> Saved:', pdfPath);
    await page.close();
  }

  // 2. Declined HCP Dialog ("I am not" clicked)
  console.log('Capturing HCP Verification Dialog (Declined State)...');
  {
    const page = await browser.newPage({ viewport: { width: 1060, height: 900 }, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForSelector('dialog#hcp-dialog[open]', { state: 'visible', timeout: 5000 });
    await page.click('#hcp-no');
    await page.waitForSelector('#hcp-not', { state: 'visible', timeout: 5000 });
    await page.waitForTimeout(500);

    const pdfPath = path.join(outDir, 'popup-hcp-verification-declined.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' }
    });
    console.log('-> Saved:', pdfPath);
    await page.close();
  }

  // 3. Mobile Navigation Drawer Overlay
  console.log('Capturing Mobile Navigation Drawer Overlay...');
  {
    const page = await browser.newPage({ viewport: { width: 480, height: 840 }, deviceScaleFactor: 2 });
    await page.addInitScript(() => window.sessionStorage.setItem('zyp-hcp', 'yes'));
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);
    await page.click('#burger');
    await page.waitForSelector('#nav.open', { state: 'visible', timeout: 5000 });
    await page.waitForTimeout(500);

    const pdfPath = path.join(outDir, 'popup-mobile-navigation-drawer.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' }
    });
    console.log('-> Saved:', pdfPath);
    await page.close();
  }

  // 4. Navigation Dropdown Panels
  console.log('Capturing Navigation Dropdown Panels...');
  {
    const page = await browser.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 2 });
    await page.addInitScript(() => window.sessionStorage.setItem('zyp-hcp', 'yes'));
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    // Hover over Overview to trigger dropdown
    const navItem = await page.$('#nav > li:first-child');
    if (navItem) {
      await navItem.hover();
      await page.waitForSelector('.dd.is-visible', { timeout: 3000 });
    }

    const pdfPath = path.join(outDir, 'popup-navigation-dropdowns.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' }
    });
    console.log('-> Saved:', pdfPath);
    await page.close();
  }

  await browser.close();
  console.log('Popup states export completed!');
}

testPopups().catch(console.error);

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const ROUTES = [
  { name: '01-overview', path: '/', title: 'Product Overview' },
  { name: '02-disease-background', path: '/disease-background', title: 'Disease Background' },
  { name: '03-mechanism-of-action', path: '/mechanism-of-action', title: 'Mechanism of Action' },
  { name: '04-dosing-administration', path: '/dosing-administration', title: 'Dosing and Administration' },
  { name: '05-safety-monitoring', path: '/safety-monitoring', title: 'Safety and Monitoring' },
  { name: '06-clinical-evidence', path: '/clinical-evidence', title: 'Clinical Evidence' },
  { name: '07-references', path: '/references', title: 'References & Abbreviations' },
  { name: '08-conditions-of-use', path: '/conditions-of-use', title: 'Conditions of Use' },
  { name: '09-legal', path: '/legal', title: 'Legal & Privacy' },
];

const PRINT_CSS = `
  @media print {
    /* Hide decorative background layers and interactive-only buttons */
    body::before,
    .bg-circles,
    .skip,
    #burger,
    .header-peek,
    .scroll-cue {
      display: none !important;
    }

    html, body {
      background: #ffffff !important;
      color: #1a1533 !important;
      padding: 0 !important;
      margin: 0 !important;
      font-size: 13.5px !important;
      line-height: 1.5 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    /* Fixed header becomes static at top of page 1 */
    header.site-header {
      position: static !important;
      display: block !important;
      width: 100% !important;
      transform: none !important;
      border-bottom: 1.5px solid #e0d8f0 !important;
      padding: 6px 0 10px 0 !important;
      margin-bottom: 14px !important;
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }

    .site-header .nv {
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 12px !important;
      min-height: auto !important;
      width: 100% !important;
    }

    .site-header .logo {
      order: 1 !important;
      flex: 0 0 auto !important;
    }

    .site-header .logo img {
      height: 28px !important;
      width: auto !important;
    }

    #nav {
      order: 2 !important;
      display: flex !important;
      position: static !important;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      list-style: none !important;
      margin: 0 !important;
      padding: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      flex: 1 1 auto !important;
    }

    #nav li a {
      font-size: 11px !important;
      font-weight: 600 !important;
      color: #3b3663 !important;
      padding: 3px 5px !important;
      text-decoration: none !important;
      white-space: nowrap !important;
    }

    #nav li a.on {
      color: #79339e !important;
      font-weight: 700 !important;
    }

    .header-cta {
      order: 3 !important;
      flex: 0 0 auto !important;
    }

    .header-cta .btn {
      font-size: 11px !important;
      padding: 5px 12px !important;
      white-space: nowrap !important;
    }

    /* Page container */
    .w {
      max-width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin: 0 auto !important;
    }

    /* Typography break rules */
    h1, h2, h3, h4, h5, h6 {
      break-after: avoid !important;
      page-break-after: avoid !important;
      color: #2e1065 !important;
    }

    p, li {
      orphans: 3 !important;
      widows: 3 !important;
    }

    /* Hero section sizing for crisp page 1 presentation */
    .hero {
      break-inside: avoid !important;
      page-break-inside: avoid !important;
      padding: 24px 20px !important;
      border-radius: 16px !important;
      margin-bottom: 20px !important;
    }

    .hero-art img {
      max-height: 280px !important;
      object-fit: contain !important;
    }

    /* Prevent awkward splits of cards and content blocks */
    .card,
    .card.stat,
    .ind-cards li,
    .evidence-card,
    .receptor-card,
    .spectrum,
    .rmap,
    .fig-area,
    .fig-col,
    .fig-steps,
    .fig-matrix,
    .fig-rank,
    .fig-pick,
    .tw,
    table,
    tr,
    .pi,
    .page-nav-wrapper,
    .site-footer,
    .acc-item,
    .ref-card,
    .g2,
    .g3,
    .g4,
    section.s {
      break-inside: avoid !important;
      page-break-inside: avoid !important;
    }

    /* Clean spacing between sections */
    section.s {
      margin-top: 22px !important;
      margin-bottom: 22px !important;
    }

    /* Grid layout */
    .g2 {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 16px !important;
    }

    .g3 {
      display: grid !important;
      grid-template-columns: 1fr 1fr 1fr !important;
      gap: 16px !important;
    }

    .g4 {
      display: grid !important;
      grid-template-columns: repeat(4, 1fr) !important;
      gap: 12px !important;
    }

    /* Card styling */
    .card {
      box-shadow: 0 1px 4px rgba(121, 51, 158, 0.08) !important;
      border: 1px solid #e2dbf2 !important;
      border-radius: 12px !important;
    }

    /* Unhide all tabpanels for complete PDF export */
    [role="tabpanel"][hidden] {
      display: block !important;
      margin-top: 24px !important;
      border-top: 1.5px dashed #c4b5fd !important;
      padding-top: 18px !important;
    }

    /* Reference library in print: ensure all references show cleanly */
    .ref-card {
      margin-bottom: 12px !important;
    }
    .ref-detail[hidden] {
      display: block !important;
      margin-top: 8px !important;
      background: #fbf9ff !important;
      border-left: 3px solid #79339e !important;
      padding: 8px 12px !important;
      border-radius: 4px !important;
    }

    /* Details open by default */
    details {
      break-inside: avoid !important;
    }
    details[open] summary {
      margin-bottom: 8px !important;
      font-weight: 600 !important;
    }
  }
`;

async function testAll() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1060, height: 900 },
    deviceScaleFactor: 2
  });

  const outDir = path.join(__dirname, '..', 'exports', 'website-pdf', 'test-pages');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const results = [];

  for (const r of ROUTES) {
    const page = await context.newPage();
    await page.addInitScript(() => window.sessionStorage.setItem('zyp-hcp', 'yes'));

    console.log(`Exporting ${r.name} (${r.path})...`);
    await page.goto('http://localhost:3000' + r.path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    // Expand interactive items:
    await page.evaluate(() => {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
      document.querySelectorAll('details').forEach(d => d.setAttribute('open', ''));
    });

    await page.addStyleTag({ content: PRINT_CSS });

    const pdfPath = path.join(outDir, `${r.name}.pdf`);
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '12mm',
        bottom: '12mm',
        left: '12mm',
        right: '12mm'
      }
    });

    const bytes = fs.readFileSync(pdfPath);
    const doc = await PDFDocument.load(bytes);
    const pages = doc.getPageCount();
    console.log(`-> ${r.name}: ${pages} pages`);
    results.push({ ...r, pdfPath, pages });

    await page.close();
  }

  await browser.close();
  console.log('\nAll test exports finished successfully:');
  console.table(results.map(r => ({ Name: r.name, Route: r.path, Pages: r.pages })));
}

testAll().catch(console.error);

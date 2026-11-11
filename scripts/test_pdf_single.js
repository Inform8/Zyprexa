const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { renderPdfToImages } = require('./render_pdf_to_images');

const PRINT_CSS = `
  @media print {
    /* Hide decorative background layers and interactive-only buttons */
    body::before,
    .bg-circles,
    .skip,
    #burger,
    .header-peek,
    .scroll-cue,
    .more-link {
      /* Keep more-links styled nicely without underline */
    }

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
      align-items: center !important;
      justify-content: space-between !important;
      gap: 12px !important;
      min-height: auto !important;
    }

    .site-header .logo img {
      height: 28px !important;
      width: auto !important;
    }

    #nav {
      display: flex !important;
      position: static !important;
      flex-direction: row !important;
      align-items: center !important;
      gap: 10px !important;
      list-style: none !important;
      margin: 0 !important;
      padding: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
    }

    #nav li a {
      font-size: 11.5px !important;
      font-weight: 600 !important;
      color: #3b3663 !important;
      padding: 4px 6px !important;
      text-decoration: none !important;
      white-space: nowrap !important;
    }

    #nav li a.on {
      color: #79339e !important;
      font-weight: 700 !important;
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
      margin-top: 24px !important;
      margin-bottom: 24px !important;
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

async function testV3() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1060, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();
  
  await page.addInitScript(() => {
    window.sessionStorage.setItem('zyp-hcp', 'yes');
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Trigger IntersectionObserver so all reveals are active
  await page.evaluate(() => {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
    document.querySelectorAll('details').forEach(d => d.setAttribute('open', ''));
  });

  await page.addStyleTag({ content: PRINT_CSS });

  const outDir = path.join(__dirname, '..', 'exports', 'website-pdf');
  const pdfPath = path.join(outDir, 'test-home-v3.pdf');
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

  console.log('PDF saved to:', pdfPath);
  await browser.close();

  const previewDir = path.join(outDir, 'preview-v3');
  await renderPdfToImages(pdfPath, previewDir, 'home-v3');
  console.log('Rendered previews in', previewDir);
}

testV3().catch(console.error);

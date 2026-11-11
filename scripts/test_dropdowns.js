const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function testDropdowns() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  await page.addInitScript(() => window.sessionStorage.setItem('zyp-hcp', 'yes'));
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const outDir = path.join(__dirname, '..', 'exports', 'website-pdf', 'preview-popups', 'dropdowns');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const lis = await page.$$('#nav > li');
  console.log('Found nav items:', lis.length);

  for (let i = 0; i < lis.length; i++) {
    const text = await lis[i].$eval('a', el => el.textContent.trim());
    await lis[i].hover();
    await page.waitForTimeout(300);
    const dd = await lis[i].$('.dd');
    const isVis = dd ? await dd.evaluate(el => el.classList.contains('is-visible')) : false;
    console.log(`Item ${i} (${text}) dropdown visible:`, isVis);

    const shotPath = path.join(outDir, `dropdown-${i}-${text.replace(/[^a-z0-9]/gi, '_')}.png`);
    await page.screenshot({ path: shotPath, clip: { x: 0, y: 0, width: 1440, height: 400 } });
  }

  await browser.close();
  console.log('Finished testing dropdowns!');
}

testDropdowns().catch(console.error);

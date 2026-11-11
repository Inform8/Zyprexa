const { chromium } = require('playwright');

async function check() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.addInitScript(() => window.sessionStorage.setItem('zyp-hcp', 'yes'));
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Emulate print media to see computed styles in print!
  await page.emulateMedia({ media: 'print' });

  const info = await page.evaluate(() => {
    const main = document.querySelector('main');
    const hero = document.querySelector('.hero');
    const body = document.body;
    const header = document.querySelector('header');
    const sections = Array.from(document.querySelectorAll('section')).map(s => ({
      id: s.id,
      rect: s.getBoundingClientRect(),
      display: getComputedStyle(s).display,
      visibility: getComputedStyle(s).visibility,
      opacity: getComputedStyle(s).opacity,
      height: s.offsetHeight
    }));

    return {
      bodyHeight: body.scrollHeight,
      main: main ? {
        display: getComputedStyle(main).display,
        visibility: getComputedStyle(main).visibility,
        opacity: getComputedStyle(main).opacity,
        height: main.offsetHeight,
        rect: main.getBoundingClientRect(),
        overflow: getComputedStyle(main).overflow,
        position: getComputedStyle(main).position
      } : null,
      hero: hero ? {
        display: getComputedStyle(hero).display,
        visibility: getComputedStyle(hero).visibility,
        opacity: getComputedStyle(hero).opacity,
        height: hero.offsetHeight,
        rect: hero.getBoundingClientRect(),
        overflow: getComputedStyle(hero).overflow
      } : null,
      header: header ? {
        display: getComputedStyle(header).display,
        position: getComputedStyle(header).position,
        height: header.offsetHeight
      } : null,
      sections
    };
  });

  console.log('Diagnostic result:', JSON.stringify(info, null, 2));
  await browser.close();
}

check().catch(console.error);

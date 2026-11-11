import { chromium } from "playwright";
import { PDFDocument, PDFName } from "pdf-lib";
import fs from "fs";

const BASE = "https://zyprexa.vercel.app";
const ROUTES = [
    "/", "/disease-background", "/mechanism-of-action",
    "/dosing-administration", "/safety-monitoring",
    "/clinical-evidence", "/references",
];
const WIDTH = 1440;
const MODE = "vector"; // or "image"
const TABLIST = '[role="tablist"]';
const TAB = '[role="tab"]';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: WIDTH, height: 900 } });
const page = await ctx.newPage();
const merged = await PDFDocument.create();

async function capture(label) {
    // scroll to trigger lazy content / animations
    await page.evaluate(async () => {
        const h = document.documentElement.scrollHeight;
        for (let y = 0; y < h; y += 300) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 100));
        }
        window.scrollTo(0, 0);
    });
    await page.waitForTimeout(600);
    await page.emulateMedia({ media: "screen" });
    await page.addStyleTag({
        content: `*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}`,
    });

    const height = await page.evaluate(() =>
        Math.ceil(document.documentElement.scrollHeight)
    );

    let bytes;
    if (MODE === "vector") {
        bytes = await page.pdf({
            width: `${WIDTH}px`, height: `${height}px`,
            printBackground: true, pageRanges: "1",
        });
    } else {
        const png = await page.screenshot({ fullPage: true, type: "png" });
        const tmp = await ctx.newPage();
        await tmp.setContent(
            `<body style="margin:0"><img src="data:image/png;base64,${png.toString("base64")}" style="width:${WIDTH}px;display:block"></body>`
        );
        bytes = await tmp.pdf({
            width: `${WIDTH}px`, height: `${height}px`,
            printBackground: true, pageRanges: "1",
        });
        await tmp.close();
    }

    const doc = await PDFDocument.load(bytes);
    const [p] = await merged.copyPages(doc, [0]);
    merged.addPage(p);
    console.log("captured:", label, height + "px");
}

for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "networkidle" });

    const gate = page.getByText("I am a healthcare professional");
    if (await gate.isVisible().catch(() => false)) {
        await gate.click();
        await page.waitForTimeout(500);
    }

    // 1) default state of the page
    await capture(route + " (default)");

    // 2) every other tab in every visible tab group
    const lists = page.locator(TABLIST);
    const listCount = await lists.count();

    for (let i = 0; i < listCount; i++) {
        const list = lists.nth(i);
        if (!(await list.isVisible())) continue;

        const tabs = list.locator(TAB);
        const tabCount = await tabs.count();

        // remember which tab was originally active
        let original = 0;
        for (let j = 0; j < tabCount; j++) {
            if ((await tabs.nth(j).getAttribute("aria-selected")) === "true") original = j;
        }

        for (let j = 0; j < tabCount; j++) {
            if (j === original) continue;
            await tabs.nth(j).click();
            await page.waitForTimeout(700);
            const name = (await tabs.nth(j).innerText()).trim().replace(/\s+/g, " ");
            await capture(`${route} > group ${i + 1} > tab "${name}"`);
        }

        // put the group back to its default before moving to the next group
        await tabs.nth(original).click();
        await page.waitForTimeout(400);
    }
}

// Remove all clickable link areas from every page
for (const p of merged.getPages()) {
    p.node.delete(PDFName.of("Annots"));
}

fs.writeFileSync("zyprexa-site.pdf", await merged.save()); await browser.close();
console.log("Saved zyprexa-site.pdf");
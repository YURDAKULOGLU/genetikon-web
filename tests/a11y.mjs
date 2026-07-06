// WCAG 2.2 AA axe gate (WEBSITE_PRODUCTION_STANDARD §4.3).
// Kullanım: node tests/a11y.mjs  (dev/preview server localhost:3000 açık olmalı)
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

const BASE = process.env.BASE_URL || "http://localhost:3000";
const PAGES = [
  "/en",
  "/tr",
  "/en/departments/medical-genetics",
  "/en/departments/stem-cell-therapy",
  "/en/departments/ivf-center",
  "/en/about",
  "/en/international-patients",
  "/en/information",
  "/en/contact",
  "/en/privacy",
];

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
let totalCritical = 0;
let totalSerious = 0;

for (const path of PAGES) {
  await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 30000 });
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  const critical = results.violations.filter((v) => v.impact === "critical");
  const serious = results.violations.filter((v) => v.impact === "serious");
  totalCritical += critical.length;
  totalSerious += serious.length;
  const flag = critical.length + serious.length === 0 ? "PASS" : "FAIL";
  console.log(
    `[${flag}] ${path} — critical:${critical.length} serious:${serious.length} ` +
      `(moderate:${results.violations.filter((v) => v.impact === "moderate").length})`,
  );
  for (const v of [...critical, ...serious]) {
    console.log(`    ${v.impact} ${v.id}: ${v.help} (${v.nodes.length} node)`);
  }
}

await browser.close();
console.log(
  `\nGATE: critical=${totalCritical} serious=${totalSerious} => ${
    totalCritical + totalSerious === 0 ? "PASS ✓" : "FAIL ✗"
  }`,
);
process.exit(totalCritical + totalSerious === 0 ? 0 : 1);

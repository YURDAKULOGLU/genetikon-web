import { expect, test } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

const routes = [
  "/en",
  "/tr",
  "/ru",
  "/ka",
  "/az",
  "/en/departments/medical-genetics",
  "/en/departments/stem-cell-therapy",
  "/en/departments/ivf-center",
  "/en/about",
  "/en/international-patients",
  "/en/information",
  "/en/contact",
  "/en/privacy",
] as const;

test.describe("WCAG 2.2 AA accessibility gate", () => {
  for (const route of routes) {
    test(`has no critical or serious axe violations: ${route}`, async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();

      const blockingViolations = results.violations.filter(
        (violation) => violation.impact === "critical" || violation.impact === "serious",
      );

      expect(blockingViolations).toEqual([]);
    });
  }
});

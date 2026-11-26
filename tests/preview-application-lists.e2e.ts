import { expect, test } from "@playwright/test";
import lists from "../src/lib/content/stem-cell-application-lists.json" with { type: "json" };

for (const locale of ["en", "tr", "ru", "ka", "az"] as const) {
  test(`${locale}: complete document cards span the application grid`, async ({ page }) => {
    await page.goto(`/genetikon/${locale}/departments/stem-cell-therapy/`);
    const cards = page.locator("[data-application-list]");
    await expect(cards).toHaveCount(2);
    for (let index = 0; index < 2; index++) {
      const card = cards.nth(index);
      const document = lists[locale][index]!;
      await expect(card.locator("h3")).toHaveText(document.title);
      await expect(card.locator("h4")).toHaveText(document.groups.map(group => group.heading));
      await expect(card.locator("li")).toHaveText(document.groups.flatMap(group => group.items));
      const dimensions = await card.evaluate(element => ({
        width: element.getBoundingClientRect().width,
        grid: element.parentElement!.getBoundingClientRect().width,
      }));
      expect(Math.abs(dimensions.width - dimensions.grid)).toBeLessThan(2);
    }
    const first = await cards.nth(0).boundingBox();
    const second = await cards.nth(1).boundingBox();
    expect(second!.y).toBeGreaterThan(first!.y + first!.height);
    await page.setViewportSize({ width: 320, height: 740 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  });
}

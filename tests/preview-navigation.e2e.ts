import { expect, test } from "@playwright/test";

test("preview language navigation preserves the page and host", async ({ page }) => {
  await page.goto("/genetikon/en/about/");
  await page.getByLabel("Cookie consent").getByRole("button", { name: /necessary only/i }).click();
  await page.evaluate(() => Reflect.set(window, "__languageNavigationProbe", "same-document"));
  for (const locale of ["tr", "ru", "ka", "az", "en"]) {
    await page.getByRole("link", { name: locale.toUpperCase(), exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/genetikon/${locale}/about/$`));
    expect(new URL(page.url()).hostname).toBe("127.0.0.1");
    expect(await page.evaluate(() => Reflect.get(window, "__languageNavigationProbe"))).toBe("same-document");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", `https://yurdakul.net.tr/genetikon/${locale}/about/`);
  }
});

test("all 55 preview documents retain the mount and indexing boundary", async ({ request }) => {
  const paths = ["", "about", "contact", "information", "international-patients", "departments/medical-genetics", "departments/stem-cell-therapy", "departments/ivf-center", "privacy", "terms", "cookie-policy"];
  for (const locale of ["en", "tr", "ru", "ka", "az"]) {
    for (const path of paths) {
      const route = `/genetikon/${locale}/${path ? `${path}/` : ""}`;
      const response = await request.get(route);
      expect(response.status(), route).toBe(200);
      const html = await response.text();
      expect(html, route).toMatch(/name="robots" content="noindex, nofollow"/);
      expect(html, route).toContain(`property="og:url" content="https://yurdakul.net.tr${route}"`);
      expect(html, route).not.toContain("archive / site preview. The former centre is closed.");
      expect(html, route).toContain('property="og:image"');
    }
  }
  const manifest = await (await request.get("/genetikon/manifest.webmanifest")).json();
  expect(manifest.start_url).toBe("/genetikon/en/");
  expect(manifest.icons[0].src).toBe("/genetikon/icon.png");
});

import { expect, test, type Page } from "@playwright/test";

const locales = ["az", "ru", "ka"] as const;
const deepRoutes = [
  "about",
  "information",
  "international-patients",
  "departments/medical-genetics",
  "departments/stem-cell-therapy",
  "departments/ivf-center",
  "privacy",
  "terms",
  "cookie-policy",
] as const;

function previewPath(locale: string, route: string) {
  return `/genetikon/${locale}/${route}/`;
}

async function readPageContent(page: Page) {
  await expect(page.locator("main h1")).toBeVisible();
  const description = page.locator('meta[name="description"]');
  await expect(description).toHaveCount(1);
  const paragraphs = (await page.locator("main p").allInnerTexts()).map((text) => text.trim());
  return {
    heading: (await page.locator("main h1").innerText()).trim(),
    description: (await description.getAttribute("content"))?.trim() ?? "",
    // Compare the introductory body paragraph separately: translated navigation
    // or H1 must not mask an English body fallback.
    // Department heroes contain a short "Genetikon" eyebrow before the intro.
    introduction: paragraphs.find((text) => text.length > 40) ?? "",
    paragraphs,
  };
}

test.describe("preview deep-page translations", () => {
  for (const locale of locales) {
    for (const route of deepRoutes) {
      test(`${locale}/${route} renders localized heading, metadata and body`, async ({ page }) => {
        const englishResponse = await page.goto(previewPath("en", route));
        expect(englishResponse?.status()).toBe(200);
        const english = await readPageContent(page);

        const response = await page.goto(previewPath(locale, route));
        expect(response?.status()).toBe(200);
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        await expect(page.locator('main[lang="en"], main [lang="en"]')).toHaveCount(0);
        const translated = await readPageContent(page);

        for (const key of ["heading", "description", "introduction"] as const) {
          expect(translated[key], `${locale}/${route}: empty ${key}`).not.toBe("");
          expect(translated[key], `${locale}/${route}: English ${key} fallback`).not.toBe(english[key]);
        }

        expect(translated.paragraphs.length, "No body paragraphs rendered").toBeGreaterThan(0);
        // Entire unchanged English paragraphs in the localized page are a
        // regression even if its first paragraph has been translated.
        const englishBody = new Set(english.paragraphs.filter((text) => text.length > 40));
        const untranslatedParagraphs = translated.paragraphs.filter((text) => englishBody.has(text));
        expect(untranslatedParagraphs, `${locale}/${route}: English body paragraphs`).toEqual([]);
      });
    }
  }
});

test.describe("320px preview localization layout", () => {
  test.use({ viewport: { width: 320, height: 800 }, contextOptions: { reducedMotion: "reduce" } });

  const narrowRoutes = [
    { locale: "az", route: "information" },
    { locale: "ru", route: "about" },
    { locale: "ka", route: "departments/stem-cell-therapy" },
  ] as const;

  for (const { locale, route } of narrowRoutes) {
    test(`${locale}/${route}: shared header, navigation and body fit 320px`, async ({ page }) => {
      const response = await page.goto(previewPath(locale, route));
      expect(response?.status()).toBe(200);
      await expect(page.locator("header")).toBeVisible();
      await expect(page.locator("main h1")).toBeVisible();
      await page.evaluate(() => document.fonts.ready);

      const visibleNavigation = page.locator("header nav:visible");
      await expect(visibleNavigation).toHaveCount(1);
      await expect(visibleNavigation.getByRole("link").first()).toBeVisible();
      await expect(page.locator("header").getByRole("link", { name: locale.toUpperCase(), exact: true })).toBeVisible();

      const layout = await page.evaluate(() => {
        const width = document.documentElement.clientWidth;
        const visible = (element: Element) => element.getClientRects().length > 0;
        const outsideViewport = (element: Element) => {
          const bounds = element.getBoundingClientRect();
          return bounds.left < -1 || bounds.right > width + 1;
        };
        const headerControls = Array.from(document.querySelectorAll("header a, header button, header nav"))
          .filter(visible);
        const mainContent = Array.from(document.querySelectorAll("main h1, main h2, main h3, main p, main img"))
          .filter(visible);
        return {
          viewport: width,
          documentOverflow: document.documentElement.scrollWidth - width,
          bodyOverflow: document.body.scrollWidth - width,
          headerOverflow: headerControls.filter(outsideViewport).map((element) => element.textContent?.trim()),
          contentOverflow: mainContent.filter(outsideViewport).map((element) => ({
            tag: element.tagName,
            text: element.textContent?.trim().slice(0, 100),
          })),
        };
      });

      expect(layout.viewport).toBe(320);
      expect(layout.documentOverflow, "Document overflows horizontally").toBeLessThanOrEqual(1);
      expect(layout.bodyOverflow, "Body overflows horizontally").toBeLessThanOrEqual(1);
      expect(layout.headerOverflow, "Header or navigation controls are clipped").toEqual([]);
      expect(layout.contentOverflow, "Translated main content is clipped").toEqual([]);
    });
  }
});

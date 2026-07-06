import { expect, test } from "@playwright/test";

const coreRoutes = [
  "/en",
  "/tr",
  "/en/about",
  "/en/information",
  "/en/international-patients",
  "/en/contact",
  "/en/departments/medical-genetics",
  "/en/departments/stem-cell-therapy",
  "/en/departments/ivf-center",
  "/en/privacy",
  "/en/cookie-policy",
  "/en/terms",
] as const;

test.describe("UI/UX and functional production surface", () => {
  for (const route of coreRoutes) {
    test(`renders without broken assets, runtime errors or horizontal overflow: ${route}`, async ({
      page,
    }) => {
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];

      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });
      page.on("requestfailed", (request) => {
        const failureText = request.failure()?.errorText ?? "unknown";
        failedRequests.push(`${request.method()} ${request.url()} ${failureText}`);
      });

      await page.goto(route, { waitUntil: "networkidle" });
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("h1").first()).toBeVisible();

      await page.evaluate(async () => {
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise((resolve) => window.setTimeout(resolve, 120));
      });

      const layout = await page.evaluate(() => ({
        htmlOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        bodyOverflow: document.body.scrollWidth - document.documentElement.clientWidth,
      }));
      expect(layout.htmlOverflow, `html horizontal overflow on ${route}`).toBeLessThanOrEqual(2);
      expect(layout.bodyOverflow, `body horizontal overflow on ${route}`).toBeLessThanOrEqual(2);

      const brokenImages = await page.locator("img").evaluateAll((images) =>
        images
          .map((img) => img as HTMLImageElement)
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.getAttribute("alt") || img.getAttribute("src") || "[unlabelled image]"),
      );
      expect(brokenImages, `broken images on ${route}`).toEqual([]);
      expect(failedRequests, `failed requests on ${route}`).toEqual([]);
      expect(consoleErrors, `browser console errors on ${route}`).toEqual([]);
    });
  }

  test("root redirect, locale switcher and cookie consent stay coherent", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page).toHaveURL(/\/en\/?$/);

    await expect(page.getByLabel("Cookie consent")).toBeVisible();
    await page.getByRole("button", { name: /necessary only/i }).click();
    await expect(page.getByLabel("Cookie consent")).toBeHidden();
    await page.reload({ waitUntil: "networkidle" });
    await expect(page.getByLabel("Cookie consent")).toBeHidden();

    await page.goto("/en/about", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "TR" }).click();
    await expect(page).toHaveURL(/\/tr\/about$/);
    await page.getByRole("button", { name: "EN" }).click();
    await expect(page).toHaveURL(/\/en\/about$/);
  });

  test("contact surface has safe conversion routes and validates required fields", async ({
    page,
  }) => {
    await page.goto("/en/contact", { waitUntil: "networkidle" });

    await expect(page.getByRole("heading", { name: /request information/i })).toBeVisible();
    const contactDetails = page.locator("main address");
    await expect(contactDetails.getByRole("link", { name: "+995 593 41 21 14" })).toHaveAttribute(
      "href",
      "tel:+995593412114",
    );
    await expect(contactDetails.getByRole("link", { name: "batumi@genetikon.com" })).toHaveAttribute(
      "href",
      "mailto:batumi@genetikon.com",
    );
    await expect(contactDetails.getByRole("link", { name: "WhatsApp" })).toHaveAttribute(
      "href",
      "https://wa.me/+995593412114",
    );

    await page.getByRole("button", { name: /send request/i }).click();
    await expect(page.locator("#name")).toBeFocused();
    await expect(
      page.locator("#name").evaluate((input) => !(input as HTMLInputElement).validity.valid),
    ).resolves.toBe(true);

    await page.locator("#name").fill("Test Patient");
    await page.locator("#contact").fill("test@example.com");
    await page.locator("input[name='consent']").check();
    const validForm = await page.locator("form").evaluate((form) =>
      (form as HTMLFormElement).reportValidity(),
    );
    expect(validForm).toBe(true);
  });

  test("canonical, hreflang and sitemap URLs match always-prefixed locale routing", async ({
    page,
    request,
  }) => {
    await page.goto("/en/about", { waitUntil: "networkidle" });
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.genetikon.com/en/about",
    );
    await expect(page.locator('link[hreflang="en"]')).toHaveAttribute(
      "href",
      "https://www.genetikon.com/en/about",
    );
    await expect(page.locator('link[hreflang="tr"]')).toHaveAttribute(
      "href",
      "https://www.genetikon.com/tr/about",
    );

    await page.goto("/tr/departments/medical-genetics", { waitUntil: "networkidle" });
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.genetikon.com/tr/departments/medical-genetics",
    );

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBe(true);
    const sitemapXml = await sitemap.text();
    expect(sitemapXml).toContain("https://www.genetikon.com/en/about");
    expect(sitemapXml).toContain("https://www.genetikon.com/tr/about");
    expect(sitemapXml).not.toContain("<loc>https://www.genetikon.com/about</loc>");
  });
});

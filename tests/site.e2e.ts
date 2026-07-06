import { expect, test } from "@playwright/test";

test("home page communicates the institution and routes to core surfaces", async ({ page }) => {
  await page.goto("/en");

  await expect(
    page.getByRole("heading", { name: /medical genetics, stem cell therapy and fertility care/i }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /departments/i }).first()).toBeVisible();
  const primaryRequestLink = page.getByRole("link", { name: /request information/i }).first();
  await expect(primaryRequestLink).toBeVisible();

  await primaryRequestLink.click();
  await expect(page).toHaveURL(/\/en\/contact$/);
  await expect(page.getByRole("heading", { name: /request information/i })).toBeVisible();
});

test("medical compliance essentials remain present", async ({ page }) => {
  await page.goto("/en/departments/stem-cell-therapy");

  await expect(page.getByRole("heading", { name: /stem cell therapy laboratory/i })).toBeVisible();
  await expect(page.locator("body")).toContainText(/informational only/i);
  await expect(page.locator("body")).toContainText(/results are not guaranteed/i);
  await expect(page.locator("body")).not.toContainText(/price|discount|testimonial/i);
});

test("localized route, legal pages and cookie consent work", async ({ page }) => {
  await page.goto("/tr");

  await expect(
    page.getByRole("heading", { name: /tıbbi genetik, kök hücre tedavisi ve üreme sağlığı/i }),
  ).toBeVisible();
  await page.getByLabel("Cookie consent").getByRole("link", { name: /çerez politikası/i }).click();
  await expect(page).toHaveURL(/\/tr\/cookie-policy$/);
  await expect(page.getByRole("heading", { name: /çerez politikası/i })).toBeVisible();
});

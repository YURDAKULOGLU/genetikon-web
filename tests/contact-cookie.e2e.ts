import { expect, test } from "@playwright/test";

// Can also target the exported preview using an external server and BASE_URL.
const prefix = process.env.GENETIKON_PREVIEW === "1" ? "/genetikon" : "";
const contactRoute = `${prefix}/en/contact${prefix ? "/" : ""}`;

test("cookie choices persist and can be reopened and withdrawn", async ({ page }) => {
  await page.goto(contactRoute);
  const banner = page.locator("#cookie-consent");
  await expect(banner).toBeVisible();
  await banner.getByRole("button", { name: /necessary only/i }).click();
  await expect(banner).toBeHidden();
  await page.reload();
  await expect(banner).toBeHidden();
  await page.locator('footer button[aria-controls="cookie-consent"]').click();
  await expect(banner).toBeVisible();
  await banner.getByRole("button", { name: /accept/i }).click();
  expect(await page.evaluate(() => localStorage.getItem("genetikon-cookie-consent"))).toBe("accepted");
  await page.reload();
  await expect(banner).toBeHidden();
  await page.locator('footer button[aria-controls="cookie-consent"]').click();
  await banner.getByRole("button", { name: /necessary only/i }).click();
  expect(await page.evaluate(() => localStorage.getItem("genetikon-cookie-consent"))).toBe("necessary");
});

test("cookie controls work when storage is denied", async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new DOMException("Denied", "SecurityError"); };
    Storage.prototype.setItem = () => { throw new DOMException("Denied", "SecurityError"); };
    Storage.prototype.removeItem = () => { throw new DOMException("Denied", "SecurityError"); };
  });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(contactRoute);
  const banner = page.locator("#cookie-consent");
  await banner.getByRole("button", { name: /necessary only/i }).click();
  await expect(banner).toBeHidden();
  await page.locator('footer button[aria-controls="cookie-consent"]').click();
  await expect(banner).toBeVisible();
  expect(errors).toEqual([]);
});

test("cookie choices still dismiss the banner when storage is readable but full", async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => { throw new DOMException("Full", "QuotaExceededError"); };
  });
  await page.goto(contactRoute);
  const banner = page.locator("#cookie-consent");
  await banner.getByRole("button", { name: /necessary only/i }).click();
  await expect(banner).toBeHidden();
  await page.locator('footer button[aria-controls="cookie-consent"]').click();
  await expect(banner).toBeVisible();
});

test("email form exposes its delivery method, privacy link and required consent", async ({ page }) => {
  await page.goto(contactRoute);
  await page.locator("#cookie-consent").getByRole("button", { name: /necessary only/i }).click();
  const form = page.locator("form");
  await expect(form.getByRole("link", { name: /privacy/i })).toHaveAttribute("href", `${prefix}/en/privacy${prefix ? "/" : ""}`);
  await expect(form.locator("#contact-mailto-note")).toContainText(/email app/i);
  await form.getByRole("button", { name: /send request/i }).click();
  await expect(form.locator("#name")).toBeFocused();
  await expect.poll(async () => page.evaluate(() => {
    const input = document.getElementById("name")!.getBoundingClientRect();
    const header = document.querySelector("header")!.getBoundingClientRect();
    return input.top >= header.bottom;
  })).toBe(true);
  await form.locator("#name").fill("Test User");
  await form.locator("#contact").fill("test@example.com");
  expect(await form.evaluate((node) => (node as HTMLFormElement).checkValidity())).toBe(false);
  await form.locator('input[name="consent"]').check();
  expect(await form.evaluate((node) => (node as HTMLFormElement).checkValidity())).toBe(true);
  // No real message is submitted. The form contains no success/delivery claim.
  await expect(form.locator('[role="status"]')).toHaveCount(0);
});

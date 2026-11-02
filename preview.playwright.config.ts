import { defineConfig, devices } from "@playwright/test";

process.env.GENETIKON_PREVIEW = "1";
const port = Number(process.env.PORT || 3017);
export default defineConfig({
  testDir: "./tests",
  testMatch: ["contact-cookie.e2e.ts", "preview-navigation.e2e.ts", "preview-translations.e2e.ts"],
  timeout: 30_000,
  use: { baseURL: `http://127.0.0.1:${port}`, trace: "retain-on-failure" },
  webServer: {
    command: "node scripts/serve-preview.mjs",
    url: `http://127.0.0.1:${port}/genetikon/en/`,
    env: { PORT: String(port) },
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: "preview-desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "preview-mobile", use: { ...devices["Pixel 7"] } },
  ],
});

import { defineConfig, devices } from "@playwright/test";

const port = Number(process.env.PORT ?? 3015);
const baseURL = process.env.BASE_URL ?? `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.e2e.ts",
  testIgnore: "**/preview-*.e2e.ts",
  timeout: 30_000,
  expect: { timeout: 5_000 },
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run build && npm run start:standalone",
    url: `${baseURL}/tr`,
    env: {
      GENETIKON_PUBLIC_RELEASE: "1",
      PORT: String(port),
      HOSTNAME: "127.0.0.1",
    },
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  projects: [
    { name: "chromium-desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "chromium-mobile", use: { ...devices["Pixel 7"] } },
  ],
});

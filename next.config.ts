import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");
const projectRoot = dirname(fileURLToPath(import.meta.url));
const preview = process.env.GENETIKON_PREVIEW === "1";
const sharedHosting = process.env.GENETIKON_SHARED_HOSTING === "1";
const staticExport = preview || sharedHosting;

const nextConfig: NextConfig = {
  // Coolify Docker standalone deploy (WEBSITE_PRODUCTION_STANDARD §1).
  output: staticExport ? "export" : "standalone",
  basePath: preview ? "/genetikon" : "",
  trailingSlash: staticExport,
  distDir: preview ? ".next-preview" : sharedHosting ? ".next-hosting" : ".next",
  turbopack: {
    root: projectRoot,
  },
  reactStrictMode: true,
  images: {
    // Static preview variants are prepared by scripts/prepare-preview-images.mjs.
    deviceSizes: staticExport ? [640, 750, 828, 1080, 1200, 1400, 1920, 2000] : undefined,
    imageSizes: staticExport ? [32, 48, 64, 96, 128, 256, 384] : undefined,
    loader: staticExport ? "custom" : "default",
    loaderFile: preview ? "./src/lib/preview-image-loader.ts" : sharedHosting ? "./src/lib/static-image-loader.ts" : undefined,
    // Performans gate (§4.2): AVIF-first, WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Next 16: özel quality değerleri allowlist gerektirir (logo netliği q=90).
    qualities: [75, 90],
  },
  // Güvenlik header'ları (Faz 5 launch §3): HSTS + hardening.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=15552000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);

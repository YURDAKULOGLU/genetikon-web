import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { localizedPath } from "@/lib/i18n/metadata";
import { routing } from "@/lib/i18n/routing";
export const dynamic = "force-static";

// SEO §4.4: yalnız 200-status canonical route'lar; hreflang alternates.
const ROUTES = [
  "",
  "/departments/medical-genetics",
  "/departments/stem-cell-therapy",
  "/departments/ivf-center",
  "/about",
  "/information",
  "/international-patients",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.GENETIKON_PREVIEW === "1") return [];
  const lastModified = new Date("2026-07-06");
  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}${localizedPath(locale, route || "/")}`,
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((alternateLocale) => [
            alternateLocale,
            `${siteConfig.url}${localizedPath(alternateLocale, route || "/")}`,
          ]),
        ),
      },
    })),
  );
}

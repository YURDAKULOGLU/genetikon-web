import { siteConfig } from "@/site.config";
import type { MetadataRoute } from "next";
import { localizedAlternates, localizedPath } from "@/lib/i18n/metadata";
import { absoluteSiteUrl, isIndexable } from "@/lib/site-environment";
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
  "/privacy",
  "/terms",
  "/cookie-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];
  return ROUTES.flatMap((route) =>
    siteConfig.locales.map((locale) => ({
      url: absoluteSiteUrl(localizedPath(locale, route || "/")),
      alternates: {
        languages: localizedAlternates(route, locale).languages,
      },
    })),
  );
}

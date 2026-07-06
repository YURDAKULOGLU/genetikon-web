import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/site.config";

export const routing = defineRouting({
  locales: siteConfig.locales,
  defaultLocale: siteConfig.defaultLocale,
  // Her locale prefix'li: /en, /tr. SEO/hreflang ve standalone deploy
  // davranışı prefixsiz kök sezgisine bırakılmaz.
  localePrefix: "always",
});

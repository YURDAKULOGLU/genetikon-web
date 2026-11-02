import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { sitePath } from "@/lib/site-environment";
export const dynamic = "force-static";

// PWA manifest (Faz 5 launch: favicon/manifest seti).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Genetikon",
    description: siteConfig.brandLine,
    id: sitePath("/"),
    start_url: sitePath(`/${siteConfig.defaultLocale}/`),
    scope: sitePath("/"),
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00aea6",
    icons: [
      { src: sitePath("/icon.png"), sizes: "any", type: "image/png" },
    ],
  };
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

// PWA manifest (Faz 5 launch: favicon/manifest seti).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Genetikon",
    description: siteConfig.brandLine,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00aea6",
    icons: [
      { src: "/icon.png", sizes: "any", type: "image/png" },
    ],
  };
}

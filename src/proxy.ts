import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // i18n routing dışındaki statik/asset yollarını atla.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

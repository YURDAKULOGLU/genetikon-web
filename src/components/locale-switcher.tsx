"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/lib/i18n/navigation";
import { routing } from "@/lib/i18n/routing";

/** Kalıcı dil seçici (medical trust §5.2 bilingual-parity gate). */
export function LocaleSwitcher({ basePath = "" }: { basePath?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const pagePath = pathname.replace(/\/+$/, "");

  return (
    <div
      className="inline-flex shrink-0 items-center rounded-full border border-divider p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => (
        <a
          key={loc}
          aria-current={loc === locale ? "true" : undefined}
          href={`${basePath}/${loc}${pagePath}${basePath ? "/" : ""}`}
          className={
            "inline-flex min-h-[30px] min-w-[40px] items-center justify-center rounded-full px-3 transition-colors " +
            (loc === locale
              ? "bg-brand-700 text-white"
              : "text-ink-soft hover:text-brand-700")
          }
        >
          {loc.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

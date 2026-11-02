"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "@/lib/i18n/navigation";
import { routing } from "@/lib/i18n/routing";

/** Kalıcı dil seçici (medical trust §5.2 bilingual-parity gate). */
export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("a11y");
  const pathname = usePathname();
  const pagePath = pathname.replace(/\/+$/, "");

  return (
    <div
      className="inline-flex shrink-0 items-center rounded-full border border-divider p-0.5 text-xs font-semibold"
      role="group"
      aria-label={t("language")}
    >
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          aria-current={loc === locale ? "true" : undefined}
          href={`/${loc}${pagePath || "/"}`}
          hrefLang={loc}
          prefetch={false}
          className={
            "inline-flex min-h-[30px] min-w-[40px] items-center justify-center rounded-full px-3 transition-colors " +
            (loc === locale
              ? "bg-brand-700 text-white"
              : "text-ink-soft hover:text-brand-700")
          }
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

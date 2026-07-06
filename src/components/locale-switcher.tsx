"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { routing } from "@/lib/i18n/routing";

/** Kalıcı dil seçici (medical trust §5.2 bilingual-parity gate). */
export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="inline-flex shrink-0 items-center rounded-full border border-divider p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-current={loc === locale ? "true" : undefined}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={
            "inline-flex min-h-[30px] min-w-[40px] items-center justify-center rounded-full px-3 transition-colors " +
            (loc === locale
              ? "bg-brand-700 text-white"
              : "text-ink-soft hover:text-brand-700")
          }
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

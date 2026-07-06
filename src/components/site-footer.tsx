import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { siteConfig } from "@/site.config";

/** Zorunlu künye: son güncelleme + editör iletişimi (Tanıtım Yön. m.5/1-ı). */
export function SiteFooter() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const td = useTranslations("departments");
  // Statik build tarihi (son güncelleme) — deploy'da güncellenir.
  const lastUpdated = "2026-07-06";

  return (
    <footer className="border-t border-brand-100 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-serif text-lg text-white">Genetikon Genetics Center</p>
          <p className="mt-2 text-sm">{siteConfig.brandLine}</p>
        </div>
        <address className="text-sm not-italic">
          {siteConfig.contact.address}
          <br />
          <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="inline-flex min-h-[32px] items-center hover:text-white">
            {siteConfig.contact.phone}
          </a>
          <br />
          <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex min-h-[32px] items-center hover:text-white">
            {siteConfig.contact.email}
          </a>
        </address>
        <nav aria-label={tn("departments")} className="flex flex-col items-start gap-1.5 text-sm">
          <p className="font-medium text-white">{tn("departments")}</p>
          {siteConfig.departments.map((d) => (
            <Link
              key={d.slug}
              href={`/departments/${d.slug}`}
              className="inline-flex min-h-[32px] items-center hover:text-white"
            >
              {td(`${d.key}.name`)}
            </Link>
          ))}
        </nav>
        <nav aria-label="Legal" className="flex flex-col items-start gap-1.5 text-sm">
          <Link href="/privacy" className="inline-flex min-h-[32px] items-center hover:text-white">{t("privacy")}</Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[32px] items-center hover:text-white">{t("cookies")}</Link>
          <Link href="/terms" className="inline-flex min-h-[32px] items-center hover:text-white">{t("terms")}</Link>
        </nav>
      </div>
      <div className="border-t border-brand-800 px-4 py-4 text-center text-xs">
        <p>{t("editor")}</p>
        <p className="mt-1">
          {t("lastUpdated")}: {lastUpdated} · © {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}

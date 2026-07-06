import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { btn } from "@/lib/ui/button";

/** Trust-then-CTA bandı (departman/about sayfa sonu — dead-end önleme). */
export async function ContactCta() {
  const t = await getTranslations("home");
  return (
    <div className="rounded-[var(--radius-card)] bg-brand-800 px-8 py-12 text-white md:px-12">
      <h2 className="font-serif text-2xl leading-[1.15] tracking-[-0.01em] md:text-3xl">
        {t("contactHeading")}
      </h2>
      <p className="mt-3 max-w-md leading-relaxed text-brand-50">{t("contactBody")}</p>
      <Link href="/contact" className={`mt-6 ${btn("inverse", "md")}`}>
        {t("heroCtaPrimary")}
      </Link>
    </div>
  );
}

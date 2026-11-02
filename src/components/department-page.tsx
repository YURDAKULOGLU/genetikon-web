import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { departmentsContent } from "@/lib/content/site-content";

const DEPT_HERO: Record<string, string> = {
  "medical-genetics": "/img/genetics-2.jpg",
  "stem-cell-therapy": "/img/stemcell-2.jpg",
  "ivf-center": "/img/ivf-1.jpg",
};
import { lt, textLocale } from "@/lib/content/localize";
import { localizedPath } from "@/lib/i18n/metadata";
import { siteUrl, absoluteSiteUrl } from "@/lib/site-environment";
import { MedicalDisclaimer } from "./medical-disclaimer";
import { DepartmentSwitcher } from "./department-switcher";
import { ContactCta } from "./contact-cta";

function DepartmentJsonLd({
  slug,
  title,
  description,
  locale,
  homeLabel,
}: {
  slug: string;
  title: string;
  description: string;
  locale: string;
  homeLabel: string;
}) {
  const path = `/departments/${slug}`;
  const url = absoluteSiteUrl(localizedPath(locale, path));
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description: description.slice(0, 300),
    inLanguage: locale,
    url,
    isPartOf: { "@id": `${siteUrl}#website` },
    publisher: { "@id": `${siteUrl}#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: homeLabel, item: absoluteSiteUrl(localizedPath(locale)) },
        { "@type": "ListItem", position: 2, name: title, item: url },
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Ortak departman sayfası şablonu (tekrarlayan departman iskeleti — IA §2).
 * Zengin çift-dilli içerik + disclaimer-proximity + trust-then-CTA (§5.2).
 */
export async function DepartmentPage({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  setRequestLocale(locale);
  const nav = await getTranslations({ locale, namespace: "nav" });
  const content = departmentsContent[slug];
  if (!content) notFound();

  return (
    <article lang={textLocale(content.title, locale)}>
      <DepartmentJsonLd
        slug={slug}
        title={lt(content.title, locale)}
        description={lt(content.intro, locale)}
        locale={locale}
        homeLabel={nav("home")}
      />
      {/* Departman hero banner — gerçek görsel */}
      <div className="relative flex min-h-[42vh] items-end overflow-hidden bg-brand-900 text-white">
        <Image
          src={DEPT_HERO[slug] ?? "/img/hero-1.jpg"}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/70 to-brand-900/30" aria-hidden />
        <div className="relative mx-auto w-full max-w-4xl px-6 pb-12 pt-24">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-100">Genetikon</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.015em] md:text-5xl">
            {lt(content.title, locale)}
          </h1>
        </div>
      </div>

      <div lang={locale}><DepartmentSwitcher current={slug} /></div>

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="measure text-lg leading-[1.6] text-ink-muted">{lt(content.intro, locale)}</p>

      {content.disclaimer === "stemCell" && (
        <div className="mt-6">
          <div lang={locale}><MedicalDisclaimer variant="stemCell" /></div>
        </div>
      )}

      <div className="mt-14 space-y-16">
        {content.sections.map((section) => (
          <section key={lt(section.heading, locale)}>
            <h2 className="font-serif text-2xl leading-[1.15] tracking-[-0.01em] text-ink md:text-3xl">
              {lt(section.heading, locale)}
            </h2>
            {section.intro && (
              <p className="measure mt-4 leading-relaxed text-ink-muted">{lt(section.intro, locale)}</p>
            )}
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {section.items.map((item) => (
                <div
                  key={lt(item.title, locale)}
                  className="flex h-full flex-col rounded-[var(--radius-card)] border border-divider bg-bg p-6 transition-colors hover:border-brand-300"
                >
                  <h3 className="font-serif text-lg text-ink">{lt(item.title, locale)}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-[1.65] text-ink-muted">
                    {lt(item.body, locale)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Trust-then-CTA */}
      <div className="mt-14">
        <div lang={locale}><ContactCta /></div>
      </div>

      <div className="mt-10">
        <div lang={locale}><MedicalDisclaimer variant={content.disclaimer} /></div>
      </div>
      </div>
    </article>
  );
}

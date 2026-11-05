import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { legalContent } from "@/lib/content/site-content";
import { lt, textLocale } from "@/lib/content/localize";

/** Public legal page renderer for privacy, cookie and terms content. */
export async function LegalPage({
  contentKey,
  locale,
}: {
  contentKey: string;
  locale: string;
}) {
  setRequestLocale(locale);
  const c = legalContent[contentKey];
  if (!c) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 lang={textLocale(c.heading, locale)} className="font-serif text-4xl text-brand-800 [overflow-wrap:anywhere]">{lt(c.heading, locale)}</h1>
      {c.intro && <p lang={textLocale(c.intro, locale)} className="mt-6 text-ink-muted">{lt(c.intro, locale)}</p>}
      <div className="mt-8 space-y-6">
        {c.items.map((item) => (
          <section key={lt(item.title, locale)}>
            <h2 lang={textLocale(item.title, locale)} className="text-lg font-medium text-ink">{lt(item.title, locale)}</h2>
            <p lang={textLocale(item.body, locale)} className="mt-2 text-sm leading-relaxed text-ink-muted">
              {lt(item.body, locale)}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { legalContent } from "@/lib/content/site-content";
import { lt } from "@/lib/content/localize";

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
      <h1 className="font-serif text-4xl text-brand-800">{lt(c.heading, locale)}</h1>
      {c.intro && <p className="mt-6 text-ink-muted">{lt(c.intro, locale)}</p>}
      <div className="mt-8 space-y-6">
        {c.items.map((item) => (
          <section key={lt(item.title, locale)}>
            <h2 className="text-lg font-medium text-ink">{lt(item.title, locale)}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {lt(item.body, locale)}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

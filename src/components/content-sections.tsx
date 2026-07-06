import type { ContentSection } from "@/lib/content/site-content";
import { lt } from "@/lib/content/localize";

/** Sections + items renderer (about/information/international/legal ortak). */
export function ContentSections({
  sections,
  locale,
}: {
  sections: ContentSection[];
  locale: string;
}) {
  return (
    <div className="mt-12 space-y-14">
      {sections.map((section) => (
        <section key={lt(section.heading, locale)}>
          <h2 className="font-serif text-2xl leading-[1.15] tracking-[-0.01em] text-ink md:text-3xl">
            {lt(section.heading, locale)}
          </h2>
          {section.intro && (
            <p className="measure mt-4 leading-relaxed text-ink-muted">
              {lt(section.intro, locale)}
            </p>
          )}
          {section.items.length > 0 && (
            <div className="mt-8 space-y-8">
              {section.items.map((item) => (
                <div key={lt(item.title, locale)}>
                  <h3 className="font-serif text-xl text-ink">{lt(item.title, locale)}</h3>
                  <p className="measure mt-2.5 text-[0.95rem] leading-[1.65] text-ink-muted">
                    {lt(item.body, locale)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

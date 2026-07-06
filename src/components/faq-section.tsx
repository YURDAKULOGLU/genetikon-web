import { Link } from "@/lib/i18n/navigation";

type QA = { q: string; a: string };

/**
 * SSS bölümü — görünür native <details> accordion + FAQPage JSON-LD birlikte.
 * <details> JS gerektirmez, erişilebilirdir ve kapalıyken bile içerik DOM'da
 * (crawler + answer-engine okur). Google FAQ rich result'ı yetkili sağlık
 * sitelerine açar; schema her hâlükârda AI/answer-engine için değerlidir.
 *
 * 2-kolon: sol sticky başlık + destek metni + iletişim linki (boşluğu doldurur,
 * UX değeri katar); sağ accordion. Böylece geniş container'da sağ yarı boş kalmaz.
 */
export function FaqSection({
  items,
  heading,
  eyebrow,
  support,
  contactLabel,
}: {
  items: QA[];
  heading: string;
  eyebrow: string;
  support: string;
  contactLabel: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-[1.12] tracking-[-0.01em] text-ink md:text-4xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-ink-muted">
            {support}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 font-medium text-brand-700 transition-colors hover:text-brand-900"
          >
            {contactLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="divide-y divide-divider border-y border-divider">
        {items.map((it) => (
          <details key={it.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-lg text-brand-900 transition-colors hover:text-brand-700 [&::-webkit-details-marker]:hidden">
              <span>{it.q}</span>
              <span
                className="flex-none text-brand-500 transition-transform duration-300 ease-[var(--ease-out)] group-open:rotate-45"
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 3.25v11.5M3.25 9h11.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="measure -mt-1 pb-6 leading-relaxed text-ink-muted">
              {it.a}
            </p>
          </details>
        ))}
        </div>
      </div>
    </section>
  );
}

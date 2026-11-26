import lists from "@/lib/content/stem-cell-application-lists.json";

export function StemCellApplicationLists({ locale }: { locale: string }) {
  const documents = lists[locale as keyof typeof lists] ?? lists.en;

  return documents.map((document, documentIndex) => (
    <section
      key={documentIndex}
      aria-labelledby={`application-list-${documentIndex + 1}`}
      data-application-list={documentIndex + 1}
      className="min-w-0 rounded-[var(--radius-card)] border border-divider bg-bg p-6 sm:col-span-2 sm:p-8"
    >
      <h3
        id={`application-list-${documentIndex + 1}`}
        className="break-words font-serif text-xl leading-snug text-ink md:text-2xl"
      >
        {document.title}
      </h3>
      <div className="mt-7 divide-y divide-divider">
        {document.groups.map((group, groupIndex) => (
          <div key={groupIndex} className="py-5 first:pt-0 last:pb-0">
            <h4 className="font-semibold text-brand-800">{group.heading}</h4>
            <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-ink-muted">
              {group.items.map((item, itemIndex) => (
                <li key={itemIndex} className="break-words">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  ));
}

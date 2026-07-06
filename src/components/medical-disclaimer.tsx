import { useTranslations } from "next-intl";

/**
 * Medikal disclaimer (Safety/SAFETY_POLICY.md G6 + WEBSITE_PRODUCTION_STANDARD
 * §5.2). Her tıbbi sayfada, iddiaya bitişik. variant="stemCell" yüksek-risk.
 */
export function MedicalDisclaimer({
  variant = "medical",
}: {
  variant?: "medical" | "stemCell";
}) {
  const t = useTranslations("disclaimer");
  return (
    <aside
      role="note"
      className="rounded-lg border border-brand-100 bg-bg-soft px-4 py-3 text-sm text-ink-muted"
    >
      {t(variant)}
    </aside>
  );
}

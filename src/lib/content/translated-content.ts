import ru from "./translations/ru.json";
import ka from "./translations/ka.json";
import az from "./translations/az.json";

// Stable source-field paths keep translation coverage auditable. These are
// faithful preview translations, not approval of the clinical/legal claims.
const translations: Record<string, Record<string, string>> = { ru, ka, az };

export function applyContentTranslations(source: Record<string, unknown>) {
  function visit(value: unknown, path: string) {
    if (!value || typeof value !== "object") return;
    const record = value as Record<string, unknown>;
    if (typeof record.en === "string") {
      for (const [locale, dictionary] of Object.entries(translations)) {
        const text = dictionary[path];
        if (text?.trim()) record[locale] = text;
      }
      return;
    }
    for (const [key, child] of Object.entries(record)) {
      visit(child, path ? `${path}.${key}` : key);
    }
  }
  visit(source, "");
}

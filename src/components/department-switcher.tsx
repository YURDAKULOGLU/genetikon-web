import { getTranslations } from "next-intl/server";
import { Link } from "@/lib/i18n/navigation";
import { siteConfig } from "@/site.config";

/**
 * Departmanlar arası yatay geçiş pill'leri (UX: hub'a dönmeden bölüm değiştirme
 * + internal linking). Aktif departman vurgulu, mobilde yatay scroll.
 */
export async function DepartmentSwitcher({ current }: { current: string }) {
  const td = await getTranslations("departments");
  const tn = await getTranslations("nav");
  return (
    <nav aria-label={tn("departments")} className="border-b border-divider bg-bg-soft">
      <div className="mx-auto flex max-w-4xl gap-2 overflow-x-auto px-4 py-3">
        {siteConfig.departments.map((d) => {
          const active = d.slug === current;
          return (
            <Link
              key={d.slug}
              href={`/departments/${d.slug}`}
              aria-current={active ? "page" : undefined}
              className={
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-[var(--duration-fast)] " +
                (active
                  ? "bg-brand-700 text-white"
                  : "border border-divider bg-bg text-brand-800 hover:border-brand-300 hover:text-brand-600")
              }
            >
              {td(`${d.key}.name`)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

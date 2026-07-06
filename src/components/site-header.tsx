import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { NavLink } from "./nav-link";
import { LocaleSwitcher } from "./locale-switcher";

const navItems = [
  { href: "/departments/medical-genetics", match: "/departments", key: "departments" },
  { href: "/about", key: "about" },
  { href: "/information", key: "information" },
  { href: "/international-patients", key: "internationalPatients" },
  { href: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-6">
        <Link href="/" className="flex shrink-0 flex-col leading-none">
          <Image
            src="/brand/wordmark-hd.png"
            alt="Genetikon"
            width={644}
            height={89}
            priority
            unoptimized
            className="h-6 w-auto sm:h-9"
          />
          <span className="mt-1 hidden text-[0.7rem] uppercase tracking-[0.13em] text-ink-soft sm:block">
            Genetics Center · Stem Cell Therapy Laboratory
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium text-brand-900 lg:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              href={item.href}
              match={"match" in item ? item.match : undefined}
              className="py-1 hover:text-brand-700"
              activeClassName="text-brand-700 underline decoration-brand-500 decoration-2 underline-offset-[10px]"
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>
        <LocaleSwitcher />
      </div>
      <nav
        aria-label="Primary mobile"
        className="mx-auto flex max-w-6xl flex-wrap gap-x-2 gap-y-1 border-t border-brand-100 px-4 py-2 text-sm font-medium text-brand-900 lg:hidden"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.key}
            href={item.href}
            match={"match" in item ? item.match : undefined}
            className="rounded-full px-3 py-1 hover:text-brand-700"
            activeClassName="bg-brand-700 text-white hover:text-white"
          >
            {t(item.key)}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

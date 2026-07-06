"use client";

import { Link, usePathname } from "@/lib/i18n/navigation";

/**
 * Aktif-durum farkındalıklı nav linki (UX: "neredeyim" oryantasyonu).
 * `match` verilirse prefix eşleşmesi onunla yapılır (örn. /departments/*).
 */
export function NavLink({
  href,
  match,
  className = "",
  activeClassName = "",
  children,
}: {
  href: string;
  match?: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const prefix = match ?? href;
  const active = prefix === "/" ? pathname === "/" : pathname.startsWith(prefix);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={active ? `${className} ${activeClassName}` : className}
    >
      {children}
    </Link>
  );
}

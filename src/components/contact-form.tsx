"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { siteConfig } from "@/site.config";
import { btn } from "@/lib/ui/button";

/**
 * KVKK-uyumlu bilgi talep formu (Safety G3 + §5.2): minimum veri, SAĞLIK VERİSİ
 * İSTEME, ön-işaretsiz consent. Backend/SMTP yok — submit, prefilled bir e-posta
 * (mailto) açar; owner sonra Server Action + CRM/SMTP'ye yükseltebilir (Faz 3+).
 * Bu, harici servis olmadan ÇALIŞAN bir dönüşüm yoludur.
 */
export function ContactForm() {
  const t = useTranslations("form");
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");

    if (!name || !contact || !consent) {
      setError(t("errorRequired"));
      return;
    }
    setError(null);
    const subject = `Information request — ${name}`;
    const body = `Name: ${name}\nContact: ${contact}\n\n${message}`;
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form ref={formRef} className="mt-8 max-w-xl space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-muted">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-[var(--radius-control)] border border-divider bg-white px-4 py-3 transition-colors focus:border-brand-500"
        />
      </div>
      <div>
        <label htmlFor="contact" className="mb-1.5 block text-sm font-medium text-ink-muted">
          {t("contact")}
        </label>
        <input
          id="contact"
          name="contact"
          required
          className="mt-1.5 w-full rounded-[var(--radius-control)] border border-divider bg-white px-4 py-3 transition-colors focus:border-brand-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-muted">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-[var(--radius-control)] border border-divider bg-white px-4 py-3 transition-colors focus:border-brand-500"
        />
        <p className="mt-1 text-xs text-ink-muted">{t("messageHint")}</p>
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-[18px] w-[18px] flex-none rounded-[4px] accent-[var(--color-brand-600)]"
        />
        <span>{t("consent")}</span>
      </label>
      {error && (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      )}
      <button type="submit" className={btn("primary", "md")}>
        {t("submit")}
      </button>
      <p className="text-xs text-ink-muted">{t("mailtoNote")}</p>
      <p className="text-xs text-ink-muted">{t("responseNote")}</p>
    </form>
  );
}

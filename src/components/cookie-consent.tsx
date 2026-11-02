"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";

const KEY = "genetikon-cookie-consent";
const EVENT = "genetikon-cookie-consent-change";
// Keep controls usable when browser privacy settings deny persistent storage.
let memoryConsent = "unset";
let storageUnavailable = false;

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(EVENT, onStoreChange);
  };
}

function getSnapshot() {
  if (storageUnavailable) return memoryConsent;
  try {
    const saved = localStorage.getItem(KEY);
    return saved === "accepted" || saved === "necessary" ? saved : "unset";
  } catch {
    storageUnavailable = true;
    return memoryConsent;
  }
}

function getServerSnapshot() {
  return "necessary";
}

function saveChoice(value: "accepted" | "necessary" | "unset") {
  memoryConsent = value;
  try {
    if (value === "unset") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, value);
  } catch {
    // Session-memory fallback only; do not claim the preference was persisted.
    storageUnavailable = true;
  }
  window.dispatchEvent(new Event(EVENT));
}

export function CookieSettingsButton() {
  return (
    <button type="button" lang="en" onClick={() => saveChoice("unset")} className="inline-flex min-h-[32px] items-center text-sm underline hover:text-white" aria-controls="cookie-consent">
      Cookie settings
    </button>
  );
}

/**
 * KVKK-uyumlu opt-in çerez banner (Safety G3 + §5.2). Varsayılan: yalnız
 * zorunlu çerezler. Analitik SADECE "accept" ile. Seçim localStorage'da.
 * No analytics or marketing integration is currently installed. This component
 * records a preference only; it does not load trackers after acceptance.
 */
export function CookieConsent() {
  const t = useTranslations("cookie");
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function choose(value: "accepted" | "necessary") {
    saveChoice(value);
  }

  if (consent !== "unset") return null;

  return (
    <div
      id="cookie-consent"
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-200 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">
          {t("text")}{" "}
          <Link href="/cookie-policy" className="underline hover:text-brand-700">
            {t("learnMore")}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="rounded-full border border-brand-300 px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-50"
          >
            {t("reject")}
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-800"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}

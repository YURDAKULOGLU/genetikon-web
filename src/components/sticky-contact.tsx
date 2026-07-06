import { useTranslations } from "next-intl";
import { siteConfig } from "@/site.config";

/**
 * Sticky contact (medical trust §5.2 sticky-contact gate): WhatsApp + call,
 * thumb-reachable, legal metni örtmeden. Mobilde alt bar, desktop'ta sağ-alt.
 */
export function StickyContact() {
  const t = useTranslations("sticky");
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 print:hidden">
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        rel="noopener noreferrer"
        aria-label={t("whatsapp")}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-[var(--shadow-float)] transition-transform duration-[var(--duration-base)] hover:-translate-y-0.5 hover:bg-brand-800"
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.824.74 5.475 2.033 7.773L0 32l8.44-2.208A15.93 15.93 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0Zm0 29.184a13.13 13.13 0 0 1-6.69-1.834l-.48-.285-4.976 1.302 1.328-4.85-.313-.498A13.13 13.13 0 0 1 2.816 16C2.816 8.72 8.72 2.816 16 2.816S29.184 8.72 29.184 16 23.28 29.184 16 29.184Zm7.216-9.86c-.395-.198-2.34-1.155-2.703-1.287-.362-.132-.626-.198-.89.198-.263.395-1.02 1.287-1.25 1.55-.23.264-.462.297-.857.1-.395-.198-1.668-.615-3.177-1.96-1.175-1.048-1.968-2.343-2.198-2.738-.23-.395-.025-.608.173-.805.178-.177.395-.462.593-.692.198-.23.264-.396.396-.66.132-.264.066-.495-.033-.692-.1-.198-.89-2.145-1.22-2.936-.32-.77-.646-.666-.89-.678l-.758-.013c-.264 0-.692.1-1.055.495-.362.395-1.385 1.353-1.385 3.3 0 1.947 1.418 3.828 1.616 4.092.198.264 2.79 4.26 6.76 5.973.944.408 1.68.652 2.255.834.947.3 1.81.258 2.49.156.76-.113 2.34-.957 2.67-1.88.33-.924.33-1.716.23-1.88-.098-.165-.362-.264-.757-.462Z" />
        </svg>
      </a>
      <a
        href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
        aria-label={t("call")}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-[var(--shadow-float)] transition-transform duration-[var(--duration-base)] hover:-translate-y-0.5 hover:bg-brand-50"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
        </svg>
      </a>
    </div>
  );
}

import Image from "next/image";

/**
 * Sayfa hero banner'ı (about/information/international vb.) — departman
 * sayfalarıyla tutarlı görsel dil: gerçek görsel + gradient + eyebrow + serif başlık.
 */
export function PageHeader({
  image,
  eyebrow,
  title,
}: {
  image: string;
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="relative flex min-h-[38vh] items-end overflow-hidden bg-brand-900 text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/70 to-brand-900/30"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 pb-12 pt-24">
        {eyebrow && (
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-100">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.015em] md:text-5xl">
          {title}
        </h1>
      </div>
    </div>
  );
}

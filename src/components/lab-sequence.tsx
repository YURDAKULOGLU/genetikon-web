"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";

export type Lab = {
  slug: string;
  name: string;
  summary: string;
  cta: string;
  img: string;
};

/**
 * İmza sahnesi — "Tek merkez, üç laboratuvar".
 *
 * Masaüstü + motion-ok: sahne pinlenir, 3 laboratuvar scroll'a bağlı (scrub)
 * crossfade ile sinematik olarak sıralanır. Tek imza an (araştırma: blanket
 * animasyon değil, farklılaştırılmış tek moment).
 *
 * Mobil / reduced-motion / no-JS: panel'ler normal dikey yığın olarak akar —
 * içerik her zaman görünür ve erişilebilir (SSR-safe; motion içerikten sonra gelir).
 */
export function LabSequence({
  labs,
  eyebrow,
  heading,
}: {
  labs: Lab[];
  eyebrow: string;
  heading: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cleanup: (() => void) | undefined;
    let disposed = false;

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add(
          "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
          () => {
            root.classList.add("is-enhanced");
            const stage = root.querySelector<HTMLElement>(".lab-stage");
            const panels = gsap.utils.toArray<HTMLElement>(".lab-panel", root);
            const copies = gsap.utils.toArray<HTMLElement>(".lab-copy", root);
            const bars = gsap.utils.toArray<HTMLElement>(".lab-bar", root);
            if (!stage || panels.length < 2) return;

            gsap.set(panels.slice(1), { autoAlpha: 0 });
            gsap.set(bars, { scaleX: 0, transformOrigin: "left center" });
            if (bars[0]) gsap.set(bars[0], { scaleX: 1 });

            // Her panel bir süre "dwell" eder (HOLD), sonra hızlı geçiş (TRANS).
            // Copy bloğu geçerken dikey kayar → çıkan/gelen metin üst üste binmez.
            const HOLD = 1;
            const TRANS = 0.55;
            const tl = gsap.timeline({ defaults: { ease: "none" } });
            for (let i = 1; i < panels.length; i++) {
              const prev = panels[i - 1];
              const cur = panels[i];
              if (!prev || !cur) continue;
              const at = (i - 1) * (HOLD + TRANS) + HOLD;
              const prevCopy = copies[i - 1];
              const curCopy = copies[i];
              const prevBar = bars[i - 1];
              const curBar = bars[i];

              tl.to(prev, { autoAlpha: 0, duration: TRANS }, at).fromTo(
                cur,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: TRANS },
                at,
              );
              if (prevCopy)
                tl.to(prevCopy, { yPercent: -18, duration: TRANS }, at);
              if (curCopy)
                tl.fromTo(
                  curCopy,
                  { yPercent: 18 },
                  { yPercent: 0, duration: TRANS },
                  at,
                );
              const img = cur.querySelector(".lab-media-img");
              if (img)
                tl.fromTo(
                  img,
                  { scale: 1.07 },
                  { scale: 1, duration: TRANS },
                  at,
                );
              if (prevBar) tl.to(prevBar, { scaleX: 0, duration: TRANS }, at);
              if (curBar) tl.to(curBar, { scaleX: 1, duration: TRANS }, at);
            }

            const st = ScrollTrigger.create({
              trigger: stage,
              start: "top top",
              end: "+=" + panels.length * 60 + "%",
              pin: stage,
              pinType: "fixed",
              scrub: 0.6,
              animation: tl,
              invalidateOnRefresh: true,
            });

            // Font + görseller yerleşince pin pozisyonunu tazele — aksi halde
            // ölçüm layout değişmeden önce alınıp pin ofsetli (kayık) başlıyor.
            const refresh = () => ScrollTrigger.refresh();
            if (typeof document !== "undefined" && document.fonts) {
              document.fonts.ready.then(refresh);
            }
            window.addEventListener("load", refresh);
            const imgs = Array.from(root.querySelectorAll("img"));
            let pending = imgs.filter((im) => !im.complete).length;
            imgs.forEach((im) => {
              if (!im.complete)
                im.addEventListener(
                  "load",
                  () => {
                    if (--pending <= 0) refresh();
                  },
                  { once: true },
                );
            });
            const settle = window.setTimeout(refresh, 450);

            return () => {
              window.removeEventListener("load", refresh);
              window.clearTimeout(settle);
              st.kill();
              root.classList.remove("is-enhanced");
            };
          },
        );
      }, root);

      cleanup = () => ctx.revert();
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [labs.length]);

  return (
    <div ref={rootRef} className="lab-seq relative bg-brand-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-16 md:pt-24 lg:pb-12">
        <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brand-200">
          {eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-[1.14] tracking-[-0.01em] md:text-4xl">
          {heading}
        </h2>
      </div>

      <div className="lab-stage relative">
        {labs.map((lab, i) => (
          <article
            key={lab.slug}
            className="lab-panel flex items-center py-12 lg:py-0"
          >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 lg:grid-cols-[7fr_5fr] lg:gap-16">
              <div className="lab-media relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] lg:aspect-[5/4]">
                <Image
                  src={lab.img}
                  alt={lab.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="lab-media-img object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="lab-copy">
                <span className="block font-serif text-5xl leading-none text-brand-400/55 md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-3xl leading-[1.12] tracking-[-0.01em] md:text-4xl">
                  {lab.name}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-brand-50/85">
                  {lab.summary}
                </p>
                <Link
                  href={`/departments/${lab.slug}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-medium text-white transition-colors duration-[var(--duration-base)] hover:border-white/60 hover:bg-white/10"
                >
                  {lab.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}

        <div className="lab-rail pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 gap-3 lg:flex">
          {labs.map((lab) => (
            <span
              key={lab.slug}
              className="relative h-1 w-16 overflow-hidden rounded-full bg-white/20"
            >
              <span className="lab-bar absolute inset-0 origin-left rounded-full bg-brand-300" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

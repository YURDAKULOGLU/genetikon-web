"use client";

import { useEffect } from "react";

/**
 * Lenis smooth scroll + GSAP ScrollTrigger senkronizasyonu.
 *
 * lenis/gsap/ScrollTrigger DİNAMİK import edilir — initial JS bundle'a girmezler
 * (perf: legal/about/contact gibi sayfalar scroll-motion runtime'ı taşımaz;
 * LabSequence ile aynı async chunk'ı paylaşır). prefers-reduced-motion açıksa
 * hiçbiri yüklenmez. Lenis, gsap.ticker'ıyla sürülüp her scroll'da
 * ScrollTrigger.update çağrılır — pin/scrub'ın zıplamadan çalışmasının kanonik yolu.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;
    let disposed = false;

    void (async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return null;
}

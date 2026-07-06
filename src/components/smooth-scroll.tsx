"use client";

import { useEffect } from "react";

/**
 * Lenis smooth scroll — YALNIZCA dokunmatik cihazlarda (telefon/tablet).
 *
 * Karar: PC'de native scroll kullanılır (owner isteği + kurumsal-medikal
 * standardı: masaüstü smooth-wheel bir ajans flourish'i; native scroll daha
 * güvenilir, jank yok). Dokunmatikte Lenis hafif bir momentum verir.
 *
 * - `prefers-reduced-motion` açıksa hiçbir şey yüklenmez.
 * - `pointer: fine` (fare) → bail → PC native scroll.
 * - GSAP/ScrollTrigger YOK (statik layout'ta scroll-driven animasyon kalmadı).
 * - lenis DİNAMİK import — initial bundle'a girmez.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Sadece dokunmatik: fare/trackpad (fine pointer) varsa native scroll.
    if (!window.matchMedia("(pointer: coarse)").matches) return;

    let cleanup: (() => void) | undefined;
    let disposed = false;

    void (async () => {
      const { default: Lenis } = await import("lenis");
      if (disposed) return;

      const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: true });
      let rafId = 0;
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      cleanup = () => {
        cancelAnimationFrame(rafId);
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

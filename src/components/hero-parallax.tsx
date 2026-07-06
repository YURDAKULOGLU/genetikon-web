"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Hero görsel parallax (scroll'da yavaş kayar — premium derinlik hissi).
 * Sadece transform (compositor-safe), rAF throttle, prefers-reduced-motion guard.
 */
export function HeroParallax({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        // yalnız hero görünürken (ilk ~100vh) uygula
        if (y < window.innerHeight * 1.1) {
          el.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.06)`;
        }
      });
    };
    el.style.transform = "scale(1.06)";
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 will-change-transform">
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
}

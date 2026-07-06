/**
 * SSR-safe içerik sarmalayıcı — SERVER component (gereksiz client boundary yok).
 *
 * İçerik varsayılan olarak görünür kalır. Medikal sitede metin/kartların JS
 * veya screenshot davranışına bağlı görünmez kalması kabul edilemez; motion
 * yalnız GSAP/Lenis üzerinden içerikten sonra gelir. delay: geriye-uyumluluk
 * için tutulur (motion katmanı ele alır).
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  return <Tag className={className}>{children}</Tag>;
}

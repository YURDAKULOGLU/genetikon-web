import type { ImageLoaderProps } from "next/image";

/** Pre-generated responsive images for the domain-root hosting package. */
export default function staticImageLoader({ src, width, quality }: ImageLoaderProps): string {
  const photo = /^\/img\/([a-z0-9-]+)\.jpg$/.exec(src);
  return photo
    ? `/img/responsive/${photo[1]}-w${width}-q${quality ?? 75}.webp`
    : src;
}

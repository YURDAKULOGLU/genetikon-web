import type { ImageLoaderProps } from "next/image";

export default function previewImageLoader({ src, width, quality }: ImageLoaderProps): string {
  const path = src.replace(/^\/genetikon\//, "/");
  // These files are generated before the static export, not by an image server.
  const photo = /^\/img\/([a-z0-9-]+)\.jpg$/.exec(path);
  if (photo) {
    return `/genetikon/img/responsive/${photo[1]}-w${width}-q${quality ?? 75}.webp`;
  }
  return path.startsWith("/") ? `/genetikon${path}` : src;
}

import type { ImageLoaderProps } from "next/image";

export default function previewImageLoader({ src }: ImageLoaderProps): string {
  return src.startsWith("/") && !src.startsWith("/genetikon/")
    ? `/genetikon${src}`
    : src;
}

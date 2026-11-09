import Image from "next/image";
import type { HaloImage as HaloImageData } from "@/lib/types";

/**
 * Fills its (relative, sized) parent with an admin-managed image. While a
 * slot has no upload yet, renders a quiet tonal placeholder instead.
 */
export function HaloImage({
  image,
  fallbackAlt,
  sizes,
  priority,
  className = "object-cover",
  tone = "light",
}: {
  image?: Pick<HaloImageData, "url" | "alt">;
  fallbackAlt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  tone?: "light" | "dark";
}) {
  if (image?.url) {
    return (
      <Image
        src={image.url}
        alt={image.alt || fallbackAlt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={fallbackAlt}
      className={`absolute inset-0 ${
        tone === "dark"
          ? "bg-gradient-to-br from-[#3a332d] via-[#2f2924] to-espresso"
          : "bg-gradient-to-br from-[#e9dfd1] via-cream to-[#e4d6c6]"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-serif text-5xl font-light lg:text-6xl ${
            tone === "dark" ? "text-ivory/10" : "text-espresso/10"
          }`}
        >
          H <span className="text-champagne/40">&amp;</span> H
        </span>
      </div>
    </div>
  );
}

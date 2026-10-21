"use client";

import { useState } from "react";
import { ASSETS } from "@/lib/site";

interface Props {
  src: string;
  /** Empty string marks the image as decorative. */
  alt: string;
  fallback?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

/** Image that swaps to a neutral local placeholder if the source fails to load. */
export default function FallbackImage({
  src,
  alt,
  fallback = ASSETS.productPlaceholder,
  className,
  width,
  height,
  loading = "lazy",
}: Props) {
  const [failed, setFailed] = useState(false);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={failed ? fallback : src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

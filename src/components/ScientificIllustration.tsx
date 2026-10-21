import FallbackImage from "./FallbackImage";
import { ASSETS } from "@/lib/site";

interface Props {
  /** Pass an empty string for a purely decorative placement. */
  alt?: string;
  className?: string;
  priority?: boolean;
}

/** The single shared head-and-brain illustration used across the site. */
export default function ScientificIllustration({
  alt = "Stylised illustration of a human head and brain",
  className = "",
  priority = false,
}: Props) {
  return (
    <div className={`illustration ${className}`.trim()}>
      <FallbackImage
        src={ASSETS.illustration}
        alt={alt}
        fallback={ASSETS.productPlaceholder}
        width={800}
        height={800}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}

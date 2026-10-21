import React from "react";
import Link from "next/link";

export type CardVariant = "default" | "alert" | "stat" | "pi" | "table";
export type IconColor = "default" | "k1" | "k2" | "k3" | "k4";
export type TagColor = "default" | "red";

export interface CardProps {
  /** Visual variant of the card */
  variant?: CardVariant;
  /** Optional icon glyph, symbol, or step number (e.g. '01', '◉', '+') */
  icon?: React.ReactNode;
  /** Color theme for the circular icon badge */
  iconColor?: IconColor;
  /** Card title / heading */
  title?: React.ReactNode;
  /** Optional description text */
  description?: React.ReactNode;
  /** If provided, renders the card as an interactive link */
  href?: string;
  /** If href is provided, whether to open in a new tab */
  external?: boolean;
  /** Optional pill tag text displayed below content */
  tag?: string;
  /** Color of the pill tag */
  tagColor?: TagColor;
  /** Large statistic value (for 'stat' variant) */
  stat?: string | number;
  /** Additional CSS class names */
  className?: string;
  /** Inline styles for custom adjustments */
  style?: React.CSSProperties;
  /** Children elements (custom body, charts, tables) */
  children?: React.ReactNode;
}

/**
 * Unified Card Component for ZYPREXA HCP Website
 *
 * Consolidates all card variations (standard text cards, clickable topic cards,
 * alerts, stats, and table containers) into a single reusable structure controlled
 * by global CSS tokens.
 */
export default function Card({
  variant = "default",
  icon,
  iconColor = "default",
  title,
  description,
  href,
  external = false,
  tag,
  tagColor = "default",
  stat,
  className = "",
  style,
  children,
}: CardProps) {
  // Determine variant-specific CSS class
  let variantClass = "card";
  if (variant === "alert") variantClass = "alert";
  else if (variant === "pi") variantClass = "pi";
  else if (variant === "stat") variantClass = "card stat";
  else if (variant === "table") variantClass = "card tw";

  const fullClassName = `${variantClass} ${className}`.trim();

  // Determine icon class
  const iconClass = `ic ${iconColor !== "default" ? iconColor : ""}`.trim();

  // Determine tag class
  const tagClass = `tag ${tagColor === "red" ? "r" : ""}`.trim();

  const content = (
    <>
      {stat && <b>{stat}</b>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
      {tag && <span className={tagClass}>{tag}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={fullClassName}
          style={style}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClassName} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <div className={fullClassName} style={style}>
      {content}
    </div>
  );
}

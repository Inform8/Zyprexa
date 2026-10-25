"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

/** Raised reference number, matching the monograph citations (for example 1 for the EU SmPC). */
export function Cite({ n, section }: { n: number | number[]; section?: string }) {
  const nums = Array.isArray(n) ? n : [n];
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    const prev = node?.previousSibling;
    if (prev?.nodeType === Node.TEXT_NODE && prev.textContent) {
      prev.textContent = prev.textContent.replace(/[\s\u00a0]+$/, "\u2060");
    }
  });

  return (
    <sup className="cites" ref={ref}>
      {nums.map((num, index) => (
        <span key={`${num}-${index}`}>
          {index > 0 ? <span className="cite-sep">,</span> : null}
          <Link
            className="cite"
            href={`/references#ref-${num}`}
            aria-label={section ? `Reference ${num}, section ${section}` : `Reference ${num}`}
          >
            {num}
          </Link>
        </span>
      ))}
    </sup>
  );
}

import Link from "next/link";

/** Raised reference number, matching the monograph citations (for example 1 for the EU SmPC). */
export function Cite({ n, section }: { n: number | number[]; section?: string }) {
  const nums = Array.isArray(n) ? n : [n];
  return (
    <sup className="cites">
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

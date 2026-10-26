"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PageInfo {
  name: string;
  href: string;
}

export const SITE_PAGES: PageInfo[] = [
  { name: "Overview", href: "/" },
  { name: "Disease background", href: "/disease-background" },
  { name: "Mechanism of action", href: "/mechanism-of-action" },
  { name: "Dosing", href: "/dosing-administration" },
  { name: "Safety & monitoring", href: "/safety-monitoring" },
  { name: "Clinical evidence", href: "/clinical-evidence" },
  { name: "References", href: "/references" },
];

export default function PageNav() {
  const pathname = usePathname();
  const normalizedPath = (pathname || "/").replace(/\/$/, "") || "/";

  // Find index of current page
  const currentIndex = SITE_PAGES.findIndex((page) => page.href === normalizedPath);

  let prevPage: PageInfo | null = null;
  let nextPage: PageInfo | null = null;

  if (currentIndex === -1) {
    // For legal or unknown page
    prevPage = { name: "Home", href: "/" };
    nextPage = { name: "Disease background", href: "/disease-background" };
  } else {
    if (currentIndex > 0) {
      prevPage = SITE_PAGES[currentIndex - 1];
    }
    if (currentIndex < SITE_PAGES.length - 1) {
      nextPage = SITE_PAGES[currentIndex + 1];
    } else if (currentIndex === SITE_PAGES.length - 1) {
      // Loop back to Home from the last page
      nextPage = SITE_PAGES[0];
    }
  }

  if (!prevPage && !nextPage) {
    return null;
  }

  return (
    <nav className="page-nav-wrapper" aria-label="Screen navigation">
      <div className="w">
        <div
          className={`page-nav ${!prevPage ? "page-nav--next-only" : ""} ${
            !nextPage ? "page-nav--prev-only" : ""
          }`}
        >
          {prevPage && (
            <Link
              href={prevPage.href}
              className="page-nav-link page-nav-link--prev"
              aria-label={`Previous screen: ${prevPage.name}`}
            >
              <span className="page-nav-arrow" aria-hidden="true">
                ←
              </span>
              <span className="page-nav-label">
                Previous screen: <strong>{prevPage.name}</strong>
              </span>
            </Link>
          )}

          {nextPage && (
            <Link
              href={nextPage.href}
              className="page-nav-link page-nav-link--next"
              aria-label={`Next screen: ${nextPage.name}`}
            >
              <span className="page-nav-label">
                Next screen: <strong>{nextPage.name}</strong>
              </span>
              <span className="page-nav-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

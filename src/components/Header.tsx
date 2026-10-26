"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EXTERNAL } from "@/lib/site";

export interface NavSectionItem {
  id: string;
  title: string;
}

export interface NavItem {
  name: string;
  href: string;
  secs: NavSectionItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Overview",
    href: "/",
    secs: [
      { id: "indications", title: "Indications" },
      { id: "mechanism", title: "Mechanism of action" },
      { id: "evidence", title: "Clinical evidence" },
      { id: "dosing-glance", title: "Dosing" },
      { id: "safety", title: "Safety" },
    ],
  },
  {
    name: "Disease background",
    href: "/disease-background",
    secs: [
      { id: "schizophrenia", title: "Schizophrenia" },
      { id: "bipolar", title: "Bipolar disorder" },
    ],
  },
  {
    name: "Mechanism of action",
    href: "/mechanism-of-action",
    secs: [
      { id: "receptor-profile", title: "Receptor profile" },
      { id: "occupancy", title: "Receptor occupancy" },
      { id: "interpretation", title: "Clinical relevance" },
    ],
  },
  {
    name: "Dosing",
    href: "/dosing-administration",
    secs: [
      { id: "formulations", title: "Formulations" },
      { id: "dosing", title: "Starting doses" },
      { id: "discontinuation", title: "Stopping treatment" },
    ],
  },
  {
    name: "Safety & monitoring",
    href: "/safety-monitoring",
    secs: [
      { id: "contraindications", title: "Contraindications" },
      { id: "warnings", title: "Warnings" },
      { id: "monitoring", title: "Monitoring" },
      { id: "weight", title: "Weight over time" },
      { id: "interactions", title: "Interactions" },
      { id: "pregnancy", title: "Pregnancy" },
      { id: "adverse-reactions", title: "Adverse reactions" },
      { id: "reporting", title: "Reporting" },
    ],
  },
  {
    name: "Clinical evidence",
    href: "/clinical-evidence",
    secs: [
      { id: "schizophrenia", title: "Schizophrenia" },
      { id: "manic-episodes", title: "Bipolar disorder: manic episodes" },
      { id: "recurrence", title: "Bipolar disorder: recurrence prevention" },
      { id: "guidelines", title: "Guidelines" },
    ],
  },
  {
    name: "References",
    href: "/references",
    secs: [
      { id: "literature", title: "References" },
      { id: "medical-information", title: "Medical information" },
      { id: "abbreviations", title: "Abbreviations" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdownIdx, setActiveDropdownIdx] = useState<number | null>(null);
  const [compactNav, setCompactNav] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdownIdx(null);
  }, [pathname]);

  useEffect(() => {
    const apply = () => {
      const burger = document.getElementById("burger");
      const compact = burger ? getComputedStyle(burger).display !== "none" : false;
      setCompactNav(compact);
      if (compact) setActiveDropdownIdx(null);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("header.site-header");
    if (!header) return;
    let last = window.scrollY;

    const apply = (hidden: boolean) => {
      header.classList.toggle("is-hidden", hidden);
      const height = hidden ? 0 : header.offsetHeight;
      document.documentElement.style.setProperty("--header-offset", `${height}px`);
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (mobileMenuOpen) {
        apply(false);
        last = y;
        return;
      }
      if (y > last + 6 && y > header.offsetHeight + 20) apply(true);
      else if (y < last - 6 || y < 12) apply(false);
      last = y;
    };

    apply(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileMenuOpen, pathname]);

  return (
    <>
      <a className="skip" href="#app">
        Skip to content
      </a>
      <header className="site-header">
        <div className="w nv">
          {/* Logo on Left */}
          <Link
            href="/"
            className="logo"
            onClick={() => {
              setMobileMenuOpen(false);
              setActiveDropdownIdx(null);
            }}
            style={{ display: "flex", alignItems: "center", textDecoration: "none", padding: "4px 0" }}
          >
            <img
              src="/assets/zyprexa-logo.png"
              alt="ZYPREXA® (olanzapine)"
              style={{
                height: "36px",
                width: "auto",
                maxWidth: "180px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>

          {/* Mobile Burger Button */}
          <button
            id="burger"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="nav"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

          {/* Center Navigation Bar */}
          <ul id="nav" className={mobileMenuOpen ? "open" : ""}>
            {NAV_ITEMS.map((item, idx) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const isOpen = activeDropdownIdx === idx;

              return (
                <li
                  key={item.href}
                  onMouseEnter={() => {
                    if (!compactNav) setActiveDropdownIdx(idx);
                  }}
                  onMouseLeave={() => setActiveDropdownIdx(null)}
                  onFocus={() => {
                    if (!compactNav) setActiveDropdownIdx(idx);
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      setActiveDropdownIdx(null);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setActiveDropdownIdx(null);
                  }}
                >
                  <Link
                    href={item.href}
                    className={isActive ? "on" : ""}
                    aria-current={isActive ? "page" : undefined}
                    aria-expanded={compactNav ? undefined : isOpen}
                    aria-haspopup={compactNav ? undefined : "true"}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveDropdownIdx(null);
                    }}
                  >
                    {item.name}
                  </Link>

                  {/* Section links for the current page. Hidden on the compact menu so it stays a single list. */}
                  {!compactNav && isOpen && (
                    <div className="dd is-visible">
                      {item.secs.map((sec) => {
                        const linkHref =
                          pathname === item.href
                            ? `#${sec.id}`
                            : `${item.href}#${sec.id}`;
                        return (
                          <Link
                            key={sec.id}
                            href={linkHref}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveDropdownIdx(null);
                            }}
                          >
                            {sec.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="header-cta">
            <a
              className="btn"
              href={EXTERNAL.smpcPdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prescribing information, Zyprexa EU product information PDF, opens in a new tab"
            >
              Prescribing information
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

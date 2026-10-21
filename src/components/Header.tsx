"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    name: "Home",
    href: "/",
    secs: [
      { id: "indications", title: "Approved indications" },
      { id: "topics", title: "Explore key topics" },
      { id: "trusted", title: "Trusted in practice" },
      { id: "pi", title: "Prescribing information" },
      { id: "receptors", title: "Receptor profile" },
    ],
  },
  {
    name: "Schizophrenia",
    href: "/schizophrenia",
    secs: [
      { id: "overview", title: "Overview" },
      { id: "symptoms", title: "Symptoms" },
      { id: "neurobiology", title: "Neurobiology" },
      { id: "phases", title: "Treatment phases" },
      { id: "olz", title: "Role of olanzapine" },
      { id: "care", title: "Care continuity" },
    ],
  },
  {
    name: "Bipolar disorder",
    href: "/bipolar-disorder",
    secs: [
      { id: "overview", title: "Overview" },
      { id: "episodes", title: "Mood episodes" },
      { id: "objectives", title: "Treatment objectives" },
      { id: "indications", title: "Indications vs non-indications" },
      { id: "evidence", title: "Clinical evidence" },
      { id: "guidelines", title: "Guidelines" },
      { id: "safety", title: "Safety" },
    ],
  },
  {
    name: "Clinical evidence",
    href: "/clinical-evidence",
    secs: [
      { id: "explorer", title: "Study explorer" },
      { id: "schizophrenia", title: "Schizophrenia" },
      { id: "mania", title: "Acute mania" },
      { id: "recurrence", title: "Recurrence prevention" },
      { id: "longterm", title: "Long-term" },
      { id: "guidelines", title: "Guidelines" },
    ],
  },
  {
    name: "Mechanism of action",
    href: "/mechanism-of-action",
    secs: [
      { id: "overview", title: "Overview" },
      { id: "profile", title: "Receptor profile" },
      { id: "systems", title: "Receptor systems" },
      { id: "pet", title: "PET occupancy" },
      { id: "relevance", title: "Clinical relevance" },
    ],
  },
  {
    name: "Safety & prescribing",
    href: "/safety-prescribing",
    secs: [
      { id: "overview", title: "Overview" },
      { id: "dosing", title: "Dosing" },
      { id: "formulations", title: "Formulations" },
      { id: "warnings", title: "Warnings" },
      { id: "monitoring", title: "Monitoring" },
      { id: "interactions", title: "Interactions" },
      { id: "special", title: "Pregnancy & discontinuation" },
    ],
  },
  {
    name: "References",
    href: "/references",
    secs: [
      { id: "references", title: "References" },
      { id: "regulatory", title: "Regulatory" },
      { id: "guidelines", title: "Guidelines" },
      { id: "medical", title: "Medical information" },
      { id: "abbreviations", title: "Abbreviations" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdownIdx, setActiveDropdownIdx] = useState<number | null>(null);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdownIdx(null);
  }, [pathname]);

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
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
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
                  onMouseEnter={() => setActiveDropdownIdx(idx)}
                  onMouseLeave={() => setActiveDropdownIdx(null)}
                >
                  <Link
                    href={item.href}
                    className={isActive ? "on" : ""}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveDropdownIdx(null);
                    }}
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown: Exactly ONE dropdown rendered at any given time */}
                  {isOpen && (
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

          {/* Header Action Buttons on Right */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              className="btn btn-outline"
              href="/in.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "var(--pri)",
                border: "1px solid rgba(75, 43, 176, 0.25)",
                whiteSpace: "nowrap",
                fontSize: "13px",
                padding: "8px 14px"
              }}
              title="Open the standalone single-page clinical presentation"
            >
              Interactive SPA ↗
            </a>
            <Link
              className="btn"
              href="/safety-prescribing#dosing"
              style={{ whiteSpace: "nowrap", fontSize: "13px", padding: "8px 16px" }}
            >
              Prescribing info
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

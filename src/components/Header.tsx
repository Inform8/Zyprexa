"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/schizophrenia", label: "Schizophrenia" },
  { href: "/bipolar-disorder", label: "Bipolar disorder" },
  { href: "/clinical-evidence", label: "Clinical evidence" },
  { href: "/mechanism-of-action", label: "Mechanism of action" },
  { href: "/safety-prescribing", label: "Safety & prescribing" },
  { href: "/references", label: "References" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap">
          <Link className="wordmark" href="/" aria-label="ZYPREXA olanzapine, home">
            <b>
              ZYPREXA<sup>®</sup>
            </b>
            <small>olanzapine</small>
          </Link>
          <nav
            className={`primary-nav ${menuOpen ? "open" : ""}`}
            id="primary-nav"
            aria-label="Primary"
          >
            <ul>
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="nav-pi">
                <Link href="/safety-prescribing">Prescribing information</Link>
              </li>
            </ul>
          </nav>
          <Link className="pi-link" href="/safety-prescribing">
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path
                d="M4 1.5h5.5L12.5 4.5V14.5h-8.5z M9.5 1.5v3h3 M6 8h4.5 M6 10.5h4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            Prescribing information
          </Link>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M2 4h12M2 8h12M2 12h12"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            Menu
          </button>
        </div>
      </header>
    </>
  );
}

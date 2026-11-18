"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { COUNTRY_DATA, CountryEntry } from "@/lib/countryData";

export default function CountryInteractive() {
  const [selectedCountryId, setSelectedCountryId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return COUNTRY_DATA;
    const q = searchQuery.toLowerCase();
    return COUNTRY_DATA.filter(
      (c) =>
        c.country.toLowerCase().includes(q) ||
        c.mah.toLowerCase().includes(q) ||
        c.documentType.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const selectedCountry: CountryEntry | null = useMemo(() => {
    if (!selectedCountryId) return null;
    return COUNTRY_DATA.find((c) => c.id === selectedCountryId) || null;
  }, [selectedCountryId]);

  const handleSelectCountry = (id: string) => {
    setSelectedCountryId(id);
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleClear = () => {
    setSelectedCountryId("");
    setSearchQuery("");
  };

  return (
    <section
      className={`s country-section ${isOpen ? "dropdown-is-open" : ""}`}
      id="country-directory"
    >
      <div className="section-head" style={{ marginBottom: 20 }}>
        <p className="eb">Market-Specific Prescribing Reference</p>
        <h2>Regulatory and Prescribing Overview Across All 30 Markets</h2>
        <p>
          Select an approved market from the dropdown below to view its Marketing Authorisation
          Holder, locally approved indication, official SmPC link, and adverse event reporting
          channels.
        </p>
      </div>

      {/* Single Dropdown & Clear Button Toolbar - Centered */}
      <div className="country-single-toolbar">
        <div className="country-selector-group" ref={dropdownRef}>
          <label htmlFor="country-selector-btn" className="country-selector-label">
            Approved Market:
          </label>

          <div className="country-dropdown-wrapper">
            <button
              id="country-selector-btn"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`country-dropdown-btn ${isOpen ? "is-open" : ""}`}
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-label="Select market"
            >
              <div className="country-dropdown-btn-label">
                {selectedCountry ? (
                  <>
                    <span className="country-dot" aria-hidden="true">
                      {selectedCountry.sourceBadge}
                    </span>
                    <span className="country-btn-text">
                      <strong>{selectedCountry.country}</strong>
                      <span className="country-pill-badge">{selectedCountry.documentType}</span>
                    </span>
                  </>
                ) : (
                  <span className="country-placeholder-text">
                    -- Select your country from the list --
                  </span>
                )}
              </div>

              <svg
                className={`country-chevron ${isOpen ? "rotate" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Popover Dropdown Menu */}
            {isOpen && (
              <div className="country-popover" role="dialog" aria-label="Country selection list">
                <div className="country-popover-search">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--mut)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 30 countries..."
                    autoFocus
                    className="country-search-input"
                    aria-label="Search countries"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="country-search-clear"
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <ul className="country-options-list" role="listbox">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((c) => {
                      const isSelected = selectedCountryId === c.id;
                      return (
                        <li key={c.id} role="option" aria-selected={isSelected}>
                          <button
                            type="button"
                            onClick={() => handleSelectCountry(c.id)}
                            className={`country-option-item ${isSelected ? "is-selected" : ""}`}
                          >
                            <div className="country-option-left">
                              <span className="country-source-icon" aria-hidden="true">
                                {c.sourceBadge}
                              </span>
                              <span className="country-option-name">{c.country}</span>
                            </div>
                            <div className="country-option-right">
                              <span className="country-option-doc">{c.documentType}</span>
                              {isSelected && <span className="country-checkmark">✓</span>}
                            </div>
                          </button>
                        </li>
                      );
                    })
                  ) : (
                    <li className="country-no-results">
                      No country found matching &ldquo;{searchQuery}&rdquo;
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Clear Button (only shown when a country is selected) */}
          {selectedCountry && (
            <button
              type="button"
              onClick={handleClear}
              className="country-clear-btn"
              aria-label="Clear country selection"
            >
              ✕ Clear
            </button>
          )}
        </div>
      </div>

      {/* Table Container - Only displayed when a country is selected */}
      {selectedCountry && (
        <div className="country-tw" style={{ marginTop: 16 }}>
          <div className="country-caption-bar">
            Summary of Product Characteristics and adverse event reporting details for {selectedCountry.country}
          </div>
          <table className="country-full-table">
            <thead>
              <tr>
                <th scope="col" style={{ width: "13%" }}>
                  Country
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Marketing Authorisation Holder
                </th>
                <th scope="col" style={{ width: "8%", textAlign: "center" }}>
                  Source
                </th>
                <th scope="col" style={{ width: "29%" }}>
                  Indication Summary
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Product Information Link*
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  AE Reporting
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* Country */}
                <td className="country-td-name">
                  <strong>{selectedCountry.country}</strong>
                  <span className="country-doc-type-label">{selectedCountry.documentType}</span>
                </td>

                {/* Marketing Authorisation Holder */}
                <td className="country-td-mah">
                  <strong className="country-mah-title">{selectedCountry.mah}</strong>
                  <span className="country-mah-addr">{selectedCountry.mahAddress}</span>
                </td>

                {/* Source */}
                <td className="country-td-source" style={{ textAlign: "center" }}>
                  <span
                    className="country-source-badge"
                    title={
                      selectedCountry.sourceType === "eu-smpc"
                        ? "EU SmPC in English and official EU languages"
                        : "National equivalent (non-EU market)"
                    }
                    aria-label={
                      selectedCountry.sourceType === "eu-smpc"
                        ? "EU SmPC (Centralised)"
                        : "National Equivalent"
                    }
                  >
                    {selectedCountry.sourceBadge}
                  </span>
                </td>

                {/* Indication Summary */}
                <td className="country-td-indication">
                  <div className="country-table-indication-text">
                    {selectedCountry.indication.split("\n").map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  {selectedCountry.hasSwissFootnote && (
                    <p className="country-footnote-note">
                      ** Verbatim text from locally approved Fachinformation
                    </p>
                  )}
                </td>

                {/* Product Information Link* */}
                <td className="country-td-links">
                  <div className="country-table-links-list">
                    {selectedCountry.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="country-table-link-btn"
                        aria-label={`View ${link.label} for ${selectedCountry.country} (opens in new tab)`}
                      >
                        <span>{link.label}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </td>

                {/* Adverse Event Reporting */}
                <td className="country-td-ae">
                  <div className="country-table-ae-list">
                    {selectedCountry.aeEmail && (
                      <div className="country-table-ae-item">
                        <span className="country-ae-prefix">E:</span>
                        <a
                          href={`mailto:${selectedCountry.aeEmail}`}
                          className="country-ae-link"
                        >
                          {selectedCountry.aeEmail}
                        </a>
                      </div>
                    )}
                    {selectedCountry.aePhone && (
                      <div className="country-table-ae-item">
                        <span className="country-ae-prefix">T:</span>
                        <a
                          href={`tel:${selectedCountry.aePhone}`}
                          className="country-ae-link"
                        >
                          {selectedCountry.aePhone}
                        </a>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

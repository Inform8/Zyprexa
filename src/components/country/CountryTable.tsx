"use client";

import { useMemo, useState } from "react";
import { COUNTRY_DATA } from "@/lib/countryData";

export default function CountryTable() {
  const [filterQuery, setFilterQuery] = useState("");
  const [sourceFilter, setSourceFilter] = useState<"all" | "eu-smpc" | "national">("all");

  const filteredData = useMemo(() => {
    return COUNTRY_DATA.filter((item) => {
      if (sourceFilter !== "all" && item.sourceType !== sourceFilter) {
        return false;
      }
      if (!filterQuery.trim()) return true;
      const q = filterQuery.toLowerCase();
      return (
        item.country.toLowerCase().includes(q) ||
        item.mah.toLowerCase().includes(q) ||
        item.mahAddress.toLowerCase().includes(q) ||
        item.documentType.toLowerCase().includes(q) ||
        item.indication.toLowerCase().includes(q) ||
        item.links.some((l) => l.label.toLowerCase().includes(q)) ||
        (item.aeEmail && item.aeEmail.toLowerCase().includes(q))
      );
    });
  }, [filterQuery, sourceFilter]);

  return (
    <section className="s" id="full-table">
      <div className="section-head" style={{ marginBottom: 16 }}>
        <p className="eb">Full Country Directory</p>
        <h2>Regulatory and Prescribing Overview Across All 30 Markets</h2>
        <p>
          Comprehensive market-by-market breakdown of Marketing Authorisation Holders, source document
          types, approved indications, Summary of Product Characteristics links, and adverse event
          reporting channels.
        </p>
      </div>

      {/* Toolbar: Search input & filter pills */}
      <div className="country-table-toolbar">
        <div className="country-table-search-box">
          <svg
            width="15"
            height="15"
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
            className="country-table-search-input"
            placeholder="Filter by country, language, MAH or keyword..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            aria-label="Filter country directory table"
          />
          {filterQuery && (
            <button
              type="button"
              className="country-search-clear"
              onClick={() => setFilterQuery("")}
              aria-label="Clear filter"
            >
              ✕
            </button>
          )}
        </div>

        <div className="country-filter-pills" role="radiogroup" aria-label="Filter by regulatory source">
          <button
            type="button"
            className={`country-filter-pill ${sourceFilter === "all" ? "active" : ""}`}
            onClick={() => setSourceFilter("all")}
          >
            All markets ({COUNTRY_DATA.length})
          </button>
          <button
            type="button"
            className={`country-filter-pill ${sourceFilter === "eu-smpc" ? "active" : ""}`}
            onClick={() => setSourceFilter("eu-smpc")}
          >
            🟢 EU SmPC (28)
          </button>
          <button
            type="button"
            className={`country-filter-pill ${sourceFilter === "national" ? "active" : ""}`}
            onClick={() => setSourceFilter("national")}
          >
            🔵 National Equivalent (2)
          </button>
        </div>
      </div>

      <div className="country-table-meta-bar">
        <span>
          Showing <strong>{filteredData.length}</strong> of <strong>{COUNTRY_DATA.length}</strong>{" "}
          markets
        </span>
        {filterQuery && (
          <button
            type="button"
            className="country-reset-text-btn"
            onClick={() => {
              setFilterQuery("");
              setSourceFilter("all");
            }}
          >
            Reset filters
          </button>
        )}
      </div>

      {/* The Full Table */}
      <div className="country-tw">
        <table className="country-full-table">
          <caption className="sr-only">
            Summary of Product Characteristics and adverse event reporting details by country
          </caption>
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
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "36px 16px", color: "var(--mut)" }}>
                  No countries match your search for &ldquo;{filterQuery}&rdquo;.
                </td>
              </tr>
            ) : (
              filteredData.map((row) => (
                <tr key={row.id}>
                  {/* Country */}
                  <td className="country-td-name">
                    <strong>{row.country}</strong>
                    <span className="country-doc-type-label">{row.documentType}</span>
                  </td>

                  {/* MAH */}
                  <td className="country-td-mah">
                    <strong className="country-mah-title">{row.mah}</strong>
                    <span className="country-mah-addr">{row.mahAddress}</span>
                  </td>

                  {/* Source */}
                  <td className="country-td-source" style={{ textAlign: "center" }}>
                    <span
                      className="country-source-badge"
                      title={
                        row.sourceType === "eu-smpc"
                          ? "EU SmPC in English and official EU languages"
                          : "National equivalent (non-EU market)"
                      }
                      aria-label={
                        row.sourceType === "eu-smpc"
                          ? "EU SmPC (Centralised)"
                          : "National Equivalent"
                      }
                    >
                      {row.sourceBadge}
                    </span>
                  </td>

                  {/* Indication Summary */}
                  <td className="country-td-indication">
                    <div className="country-table-indication-text">
                      {row.indication.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </td>

                  {/* Product Information Link* */}
                  <td className="country-td-links">
                    <div className="country-table-links-list">
                      {row.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="country-table-link-btn"
                        >
                          <span>{link.label}</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  </td>

                  {/* AE Reporting */}
                  <td className="country-td-ae">
                    <div className="country-table-ae-list">
                      {row.aeEmail && (
                        <div className="country-table-ae-item">
                          <span className="country-table-ae-type">E:</span>
                          <a href={`mailto:${row.aeEmail}`} className="country-table-ae-link">
                            {row.aeEmail}
                          </a>
                        </div>
                      )}
                      {row.aePhone && (
                        <div className="country-table-ae-item">
                          <span className="country-table-ae-type">T:</span>
                          <a href={`tel:${row.aePhone}`} className="country-table-ae-link">
                            {row.aePhone}
                          </a>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

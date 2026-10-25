"use client";

import { useMemo, useState } from "react";
import { ABBREVIATIONS, REFERENCES, type RefCategory } from "@/lib/references";

export default function ReferencesPage() {
  const [category, setCategory] = useState<"all" | RefCategory>("all");
  const [search, setSearch] = useState("");

  const counts = useMemo(() => {
    return {
      all: REFERENCES.length,
      study: REFERENCES.filter((r) => r.category === "study").length,
      guideline: REFERENCES.filter((r) => r.category === "guideline").length,
      regulatory: REFERENCES.filter((r) => r.category === "regulatory").length,
    };
  }, []);

  const filtered = useMemo(() => {
    return REFERENCES.filter((ref) => {
      const matchCat = category === "all" || ref.category === category;
      if (!matchCat) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        ref.title.toLowerCase().includes(q) ||
        ref.authors.toLowerCase().includes(q) ||
        ref.source.toLowerCase().includes(q) ||
        ref.usedFor.toLowerCase().includes(q) ||
        ref.kind.toLowerCase().includes(q) ||
        ref.topics.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [category, search]);

  const categoryLabels: Record<RefCategory, string> = {
    regulatory: "REGULATORY",
    guideline: "GUIDELINE",
    study: "CLINICAL STUDY",
  };

  return (
    <main id="app">
      <div className="hero hero--text">
        <div className="w">
          <div className="hero-copy">
            <p className="eb">References</p>
            <h1 className="serif">References</h1>
            <p>
              The sources behind the content on this website. Superscript numbers on each page link to the matching
              entry here.
            </p>
            <div className="hero-tabs">
              <a className="btn" href="#literature">
                Literature &amp; documents
              </a>
              <a className="btn g" href="#abbreviations">
                Abbreviations
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true" />
        </div>
      </div>

      <div className="w">
        <section className="s" id="literature">
          <h2>Literature and Product Documents</h2>

          <div className="ref-table-card">
            <div className="ref-toolbar">
              <div className="ref-search-wrap">
                <input
                  type="text"
                  className="ref-search-input"
                  placeholder="Search references, topics or keywords..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search references"
                />
              </div>

              <div className="ref-pills" role="tablist" aria-label="Filter by category">
                <button
                  type="button"
                  className={`ref-pill ${category === "all" ? "active" : ""}`}
                  onClick={() => setCategory("all")}
                >
                  All ({counts.all})
                </button>
                <button
                  type="button"
                  className={`ref-pill ${category === "study" ? "active" : ""}`}
                  onClick={() => setCategory("study")}
                >
                  Clinical studies ({counts.study})
                </button>
                <button
                  type="button"
                  className={`ref-pill ${category === "guideline" ? "active" : ""}`}
                  onClick={() => setCategory("guideline")}
                >
                  Guidelines ({counts.guideline})
                </button>
                <button
                  type="button"
                  className={`ref-pill ${category === "regulatory" ? "active" : ""}`}
                  onClick={() => setCategory("regulatory")}
                >
                  Regulatory ({counts.regulatory})
                </button>
              </div>
            </div>

            <div className="ref-table-wrap">
              <table className="ref-table">
                <thead>
                  <tr>
                    <th style={{ width: "48px" }}>No.</th>
                    <th style={{ width: "160px" }}>Type</th>
                    <th style={{ minWidth: "260px" }}>Reference</th>
                    <th style={{ minWidth: "190px" }}>Source</th>
                    <th style={{ minWidth: "240px" }}>Cited for</th>
                    <th style={{ width: "160px" }}>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="ref-table-empty">
                        No references match &quot;{search}&quot;.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((ref) => {
                      const numStr = String(ref.n).padStart(2, "0");
                      const authorWithDot = ref.authors.endsWith(".") ? ref.authors : `${ref.authors}.`;
                      const sourceText =
                        ref.year && !ref.source.includes(String(ref.year))
                          ? `${ref.source} · ${ref.year}`
                          : ref.source;

                      return (
                        <tr
                          key={ref.n}
                          id={`ref-${ref.n}`}
                          style={{ scrollMarginTop: "calc(var(--header-height, 64px) + 24px)" }}
                        >
                          <td className="ref-table-num">{numStr}</td>
                          <td className="ref-table-type">
                            <span className="ref-table-type-cat">{categoryLabels[ref.category]}</span>
                            <span className="ref-table-type-kind">{ref.kind.toUpperCase()}</span>
                          </td>
                          <td className="ref-table-ref">
                            <strong>{authorWithDot}</strong> {ref.title}
                          </td>
                          <td className="ref-table-source">{sourceText}</td>
                          <td className="ref-table-cited">{ref.usedFor}</td>
                          <td>
                            {ref.links && ref.links.length > 0 ? (
                              ref.links.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ref-table-link"
                                >
                                  {link.label} ↗
                                </a>
                              ))
                            ) : (
                              <span className="ref-table-nolink">No external link</span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="s" id="medical-information">
          <h2>Medical information</h2>
          <div className="card" style={{ padding: "24px 26px" }}>
            <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "var(--ink)", margin: "0 0 10px" }}>
              Inquiries and Market Support
            </h3>
            <p style={{ margin: "0 0 14px", color: "#4a4570", fontSize: "14px", lineHeight: 1.55 }}>
              For questions about ZYPREXA, contact the medical information service for your market. Local representatives
              of the marketing authorisation holder are listed in the patient leaflet.
            </p>
            <div
              style={{
                padding: "14px 18px",
                borderRadius: 12,
                background: "rgba(244, 239, 255, 0.6)",
                border: "1px solid var(--line)",
              }}
            >
              <strong
                style={{
                  display: "block",
                  color: "var(--pri)",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: 4,
                }}
              >
                Marketing Authorisation Holder
              </strong>
              <p style={{ margin: 0, color: "var(--ink)", fontSize: "14px", fontWeight: 500 }}>
                CHEPLAPHARM Registration GmbH, Weiler Straße 5e, 79540 Lörrach, Germany
              </p>
            </div>
          </div>
        </section>

        <section className="s" id="abbreviations">
          <h2>Abbreviations</h2>
          <div className="card tw">
            <table>
              <caption className="source-line" style={{ fontWeight: 600, color: "var(--mut)", marginBottom: 12 }}>
                Clinical and pharmacological abbreviations used across this website
              </caption>
              <thead>
                <tr>
                  <th style={{ width: "220px", color: "var(--pri)", fontWeight: 700 }}>Abbreviation</th>
                  <th style={{ color: "var(--pri)", fontWeight: 700 }}>Full clinical definition</th>
                </tr>
              </thead>
              <tbody>
                {ABBREVIATIONS.map((item) => (
                  <tr key={item.term}>
                    <td>
                      <strong style={{ color: "var(--ink)", fontSize: "14px" }}>
                        {item.term}
                      </strong>
                    </td>
                    <td style={{ color: "#4a4570", fontSize: "14px", lineHeight: 1.5 }}>
                      {item.definition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

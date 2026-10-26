"use client";

import { useMemo, useState } from "react";
import {
  ABBREVIATIONS,
  REFERENCES,
  REF_FILTERS,
  REF_TAGS,
  type RefFilterId,
} from "@/lib/references";

export default function ReferencesPage() {
  const [filter, setFilter] = useState<RefFilterId>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return REFERENCES.filter((ref) => {
      if (filter !== "all") {
        const tags = REF_TAGS[ref.n] || [];
        if (!tags.includes(filter as Exclude<RefFilterId, "all">)) {
          return false;
        }
      }
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
  }, [filter, search]);

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

          <div className="ref-section-container">
            {/* Filter toolbar: Pills matching the requested style */}
            <div className="ref-toolbar">
              <div className="ref-filter-bar" role="tablist" aria-label="Filter references by category">
                {REF_FILTERS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={filter === item.id}
                    className={`ref-filter-btn ${filter === item.id ? "active" : ""}`}
                    onClick={() => setFilter(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="ref-search-wrap">
                <input
                  type="text"
                  className="ref-search-input"
                  placeholder="Search references or keywords..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search references"
                />
              </div>
            </div>

            {/* List of Reference Cards matching the requested style */}
            <div className="ref-cards-list">
              {filtered.length === 0 ? (
                <div className="ref-empty-state">
                  No references found for &quot;{search}&quot;.
                </div>
              ) : (
                filtered.map((ref) => {
                  const authorWithDot = ref.authors.endsWith(".") ? ref.authors : `${ref.authors}.`;
                  const sourceText =
                    ref.year && !ref.source.includes(String(ref.year))
                      ? `${ref.source} · ${ref.year}`
                      : ref.source;
                  const tags = REF_TAGS[ref.n] || [ref.category];

                  return (
                    <article
                      key={ref.n}
                      id={`ref-${ref.n}`}
                      className="ref-card-item"
                    >
                      <div className="ref-card-header">
                        <div className="ref-card-main">
                          <div className="ref-card-badge" aria-label={`Reference ${ref.n}`}>
                            {ref.n}
                          </div>
                          <div className="ref-card-info">
                            <h3 className="ref-card-author">{authorWithDot}</h3>
                            <p className="ref-card-citation">
                              {ref.title} {sourceText}.
                            </p>
                          </div>
                        </div>

                        {tags.length > 0 && (
                          <div className="ref-card-tags" aria-label="Reference categories">
                            {tags.map((t) => (
                              <span key={t} className="ref-tag-pill">
                                {t.toUpperCase()}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {ref.usedFor && (
                        <div className="ref-card-takeaway">
                          <p style={{ margin: 0 }}>{ref.usedFor}</p>

                          {ref.links && ref.links.length > 0 && (
                            <div className="ref-card-links">
                              {ref.links.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ref-card-link-action"
                                >
                                  {link.label} ↗
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })
              )}
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

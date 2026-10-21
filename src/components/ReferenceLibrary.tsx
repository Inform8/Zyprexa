"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ABBREVIATIONS, REFERENCES, TOPICS, type RefCategory, type Reference } from "@/lib/references";

type Tab = "all" | RefCategory;

const TABS: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "study", label: "Clinical studies" },
  { id: "guideline", label: "Guidelines" },
  { id: "regulatory", label: "Regulatory documents" },
];

const HASH_TAB: Record<string, Tab> = {
  "#clinical-studies": "study",
  "#guidelines": "guideline",
  "#regulatory-documents": "regulatory",
};

function ReferenceCard({ r, target, query }: { r: Reference; target: boolean; query: string }) {
  const [open, setOpen] = useState(false);
  const panel = `ref-panel-${r.n}`;
  const hl = (text: string) => {
    const q = query.trim();
    if (!q) return text;
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return text;
    return (
      <>
        {text.slice(0, i)}
        <mark>{text.slice(i, i + q.length)}</mark>
        {text.slice(i + q.length)}
      </>
    );
  };
  return (
    <li id={`ref-${r.n}`} className={`ref-card${target ? " is-target" : ""}`}>
      <span className="ref-num" aria-label={`Reference ${r.n}`}>
        {r.n}
      </span>
      <div className="ref-body">
        <div className="ref-tags">
          <span className={`tag tag--${r.category === "study" ? "primary" : r.category === "guideline" ? "secondary" : "neutral"}`}>
            {r.kind}
          </span>
          {r.year && <span className="ref-year num">{r.year}</span>}
        </div>
        <p className="ref-title">{hl(r.title)}</p>
        <p className="ref-meta">
          {hl(r.authors)}. {hl(r.source)}.
        </p>
        <div className="ref-actions">
          {r.links.length > 0 ? (
            r.links.map((l) => (
              <a key={l.href} className="ext" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))
          ) : (
            <span className="unavailable">No external link available</span>
          )}
          <button
            type="button"
            className="link-btn"
            aria-expanded={open}
            aria-controls={panel}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Hide details" : "Where it is cited"}
          </button>
        </div>
        <div id={panel} className="ref-detail" hidden={!open}>
          <p>{r.usedFor}</p>
          <p className="small muted">Topics: {r.topics.join(" · ")}</p>
        </div>
      </div>
    </li>
  );
}

export function ReferenceLibrary() {
  const [tab, setTab] = useState<Tab>("all");
  const [topic, setTopic] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [target, setTarget] = useState<string>("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const apply = () => {
      const h = window.location.hash;
      if (HASH_TAB[h]) {
        setTab(HASH_TAB[h]);
        setTopic("all");
        setQuery("");
      } else if (h === "#search") {
        searchRef.current?.focus({ preventScroll: true });
      } else if (h.startsWith("#ref-")) {
        setTab("all");
        setTopic("all");
        setQuery("");
        setTarget(h.slice(1));
        requestAnimationFrame(() => document.getElementById(h.slice(1))?.scrollIntoView({ block: "center" }));
        return;
      }
      setTarget("");
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const q = query.trim().toLowerCase();
  const inTab = useMemo(() => REFERENCES.filter((r) => tab === "all" || r.category === tab), [tab]);
  const results = useMemo(
    () =>
      inTab.filter((r) => {
        if (topic !== "all" && !r.topics.includes(topic)) return false;
        if (!q) return true;
        return [r.title, r.authors, r.source, r.kind, r.usedFor, String(r.year ?? ""), String(r.n)]
          .join(" ")
          .toLowerCase()
          .includes(q);
      }),
    [inTab, topic, q],
  );
  const counts = (t: Tab) => REFERENCES.filter((r) => t === "all" || r.category === t).length;
  const filtered = tab !== "all" || topic !== "all" || q !== "";

  return (
    <div className="ref-library">
      <div className="ref-toolbar">
        <div className="search-field">
          <label htmlFor="ref-search" className="sr-only">
            Search references
          </label>
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="m14 14 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            id="ref-search"
            ref={searchRef}
            type="search"
            placeholder="Search by title, author, journal, year or reference number"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="tabs" role="tablist" aria-label="Reference type">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls="ref-results"
              className="tab"
              onClick={() => setTab(t.id)}
            >
              {t.label} <span className="tab-count num">{counts(t.id)}</span>
            </button>
          ))}
        </div>

        <div className="filters" role="group" aria-label="Filter by topic">
          <span className="label">Topic</span>
          <button className="chip" type="button" aria-pressed={topic === "all"} onClick={() => setTopic("all")}>
            All
          </button>
          {TOPICS.map((t) => (
            <button key={t} className="chip" type="button" aria-pressed={topic === t} onClick={() => setTopic(t)}>
              {t}
            </button>
          ))}
        </div>

        <div className="result-bar">
          <p className="small muted" aria-live="polite" role="status">
            Showing {results.length} of {REFERENCES.length} references
            {q && <> matching “{query.trim()}”</>}
          </p>
          <button
            type="button"
            className="link-btn"
            disabled={!filtered}
            onClick={() => {
              setTab("all");
              setTopic("all");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        </div>
      </div>

      <div id="ref-results" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        {results.length ? (
          <ol className="ref-list">
            {results.map((r) => (
              <ReferenceCard key={r.n} r={r} query={query} target={target === `ref-${r.n}`} />
            ))}
          </ol>
        ) : (
          <div className="empty-state">
            <h3>No references match your search</h3>
            <p>Try a different keyword, or clear the filters to see all {REFERENCES.length} references.</p>
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => {
                setTab("all");
                setTopic("all");
                setQuery("");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function AbbreviationList() {
  const [q, setQ] = useState("");
  const list = ABBREVIATIONS.filter(
    (a) => !q.trim() || `${a.term} ${a.definition}`.toLowerCase().includes(q.trim().toLowerCase()),
  );
  return (
    <div>
      <div className="search-field search-field--sm">
        <label htmlFor="abbr-search" className="sr-only">
          Search abbreviations
        </label>
        <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="m14 14 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input id="abbr-search" type="search" placeholder="Search abbreviations" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <p className="small muted" role="status" aria-live="polite" style={{ marginBlock: "0.6rem" }}>
        {list.length} of {ABBREVIATIONS.length} abbreviations
      </p>
      {list.length ? (
        <dl className="abbr">
          {list.map((a) => (
            <div key={a.term} className="abbr-row">
              <dt>{a.term}</dt>
              <dd>{a.definition}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="muted">No abbreviations match “{q}”.</p>
      )}
    </div>
  );
}

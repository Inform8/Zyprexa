"use client";

import { useMemo, useState } from "react";
import { REFERENCES, type RefCategory } from "@/lib/references";

type RefFilter = "all" | RefCategory;

const FILTERS: { id: RefFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "study", label: "Clinical studies" },
  { id: "guideline", label: "Guidelines" },
  { id: "regulatory", label: "Regulatory" },
];

function kicker(category: RefCategory, kind: string) {
  const label =
    category === "study" ? "Clinical study" : category === "guideline" ? "Guideline" : "Regulatory";
  return `${label} · ${kind}`;
}

const ABBREVIATIONS = [
  ["ALT / AST", "Alanine / Aspartate aminotransferase"],
  ["AUC", "Area under the concentration–time curve"],
  ["BPRS", "Brief Psychiatric Rating Scale"],
  ["Cmax", "Maximum observed plasma concentration"],
  ["CNS", "Central nervous system"],
  ["CYP1A2", "Cytochrome P450 1A2 isoenzyme"],
  ["D₂", "Dopamine receptor subtype 2"],
  ["EMA", "European Medicines Agency"],
  ["EPS", "Extrapyramidal symptoms"],
  ["5-HT₂A", "5-hydroxytryptamine (serotonin) receptor subtype 2A"],
  ["Ki", "Receptor inhibition binding constant"],
  ["LOCF", "Last observation carried forward"],
  ["MADRS", "Montgomery–Åsberg Depression Rating Scale"],
  ["NMDA", "N-methyl-D-aspartate glutamate receptor"],
  ["NMS", "Neuroleptic malignant syndrome"],
  ["PET", "Positron emission tomography"],
  ["QTc", "Corrected QT interval on ECG"],
  ["SANS", "Scale for the Assessment of Negative Symptoms"],
  ["SmPC", "Summary of Product Characteristics"],
  ["YMRS", "Young Mania Rating Scale"],
];

export default function ReferencesPage() {
  const [refQuery, setRefQuery] = useState("");
  const [refFilter, setRefFilter] = useState<RefFilter>("all");
  const [abbQuery, setAbbQuery] = useState("");

  const filteredRefs = useMemo(() => {
    const q = refQuery.trim().toLowerCase();
    return REFERENCES.filter((r) => {
      if (refFilter !== "all" && r.category !== refFilter) return false;
      if (!q) return true;
      return [String(r.n), r.title, r.authors, r.source, r.kind, r.usedFor, r.topics.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [refQuery, refFilter]);

  const counts = (id: RefFilter) =>
    REFERENCES.filter((r) => id === "all" || r.category === id).length;

  const filteredAbbs = ABBREVIATIONS.filter(([abbr, def]) => {
    const q = abbQuery.toLowerCase();
    return abbr.toLowerCase().includes(q) || def.toLowerCase().includes(q);
  });

  return (
    <main id="app">
      {/* Editorial Hero */}
      <div className="hero">
        <div className="w">
          <div>
            <p className="eb">Documentation &amp; Evidence Library</p>
            <h1 className="serif">References &amp; Resources</h1>
            <p>Regulatory documents, full references, literature matrix and clinical resources.</p>
            <div className="row">
              <a className="btn" href="#references">
                Search references ↓
              </a>
              <a className="btn g" href="#regulatory">
                Regulatory documents
              </a>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/medical-books-stack.jpg"
              alt="Medical reference books and clinical journal archive"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="w">
        {/* Searchable Bibliography */}
        <section className="s" id="references">
          <h2>References ({REFERENCES.length})</h2>
          <div className="ref-board">
            <div className="ref-toolbar">
              <input
                className="src"
                type="search"
                value={refQuery}
                onChange={(e) => setRefQuery(e.target.value)}
                placeholder="Search references, topics or keywords…"
                aria-label="Search references"
              />
              <div className="ref-filters" role="tablist" aria-label="Filter references">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={refFilter === filter.id}
                    className={refFilter === filter.id ? "is-on" : ""}
                    onClick={() => setRefFilter(filter.id)}
                  >
                    {filter.label} <span>({counts(filter.id)})</span>
                  </button>
                ))}
              </div>
            </div>

            {filteredRefs.length === 0 ? (
              <p className="ref-empty">No references match “{refQuery.trim()}”.</p>
            ) : (
              <ol className="ref-rows">
                {filteredRefs.map((r) => (
                  <li key={r.n} id={`ref-${r.n}`} className="ref-row">
                    <span className="ref-badge" aria-hidden="true">
                      {String(r.n).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="ref-kicker">{kicker(r.category, r.kind)}</p>
                      <h3>
                        {r.authors}. {r.title}
                      </h3>
                      <p>
                        {r.source}
                        {r.year ? ` · ${r.year}` : ""}. {r.usedFor}
                      </p>
                      {r.links[0] ? (
                        <a href={r.links[0].href} target="_blank" rel="noopener noreferrer">
                          {r.links[0].label} ↗
                        </a>
                      ) : (
                        <span className="ref-nolink">No external link available</span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        {/* Literature Matrix by Clinical Topic */}
        <section className="s" id="guidelines">
          <h2>Literature matrix</h2>
          <div className="ref-board ref-board--table">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Clinical topic</th>
                  <th>Supporting references</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Disease background &amp; neurobiology</b>
                  </td>
                  <td>Refs 4, 5</td>
                </tr>
                <tr>
                  <td>
                    <b>Schizophrenia clinical efficacy</b>
                  </td>
                  <td>Ref 1 (Section 5.1), Ref 10 (Beasley 1996)</td>
                </tr>
                <tr>
                  <td>
                    <b>Acute mania clinical efficacy</b>
                  </td>
                  <td>Ref 1 (Section 5.1), Ref 11 (Tohen 1999)</td>
                </tr>
                <tr>
                  <td>
                    <b>Bipolar recurrence prevention</b>
                  </td>
                  <td>Ref 1 (Section 5.1)</td>
                </tr>
                <tr>
                  <td>
                    <b>Guideline and formulary context</b>
                  </td>
                  <td>Refs 6 (APA), 7 (BAP), 8 (WPA), 9 (WHO EML)</td>
                </tr>
                <tr>
                  <td>
                    <b>Pharmacology and receptor binding</b>
                  </td>
                  <td>Ref 1 (Section 5.1), Ref 12 (Kapur 1998). Receptor–adverse-effect links from the US label are not used.</td>
                </tr>
                <tr>
                  <td>
                    <b>Safety, adverse reactions and metabolic monitoring</b>
                  </td>
                  <td>Ref 1 (Sections 4.4, 4.8)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Official Regulatory Product Documents */}
        <section className="s" id="regulatory">
          <h2>Official regulatory product documents</h2>
          <div className="grid g2">
            <a
              className="card"
              href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>ZYPREXA SmPC</h3>
              <p>EMA Annex I official prescribing summary of product characteristics (PDF).</p>
            </a>
            <a
              className="card"
              href="https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Patient Information Leaflet (PIL)</h3>
              <p>EMA Annex III B official instructions and information for patients – EMA product page.</p>
            </a>
            <a
              className="card"
              href="https://www.ema.europa.eu/en/medicines/human/EPAR/zypadhera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>ZYPADHERA SmPC</h3>
              <p>Separate official prescribing document for prolonged-release suspension – EMA page.</p>
            </a>
            <div className="card">
              <h3>ZYPREXA VELOTAB</h3>
              <p>
                Orodispersible tablets are a separate oral formulation. They are mentioned in related product
                literature. A VELOTAB SmPC was not supplied for this site, so dosing and excipients for VELOTAB are
                not described here. Use the SmPC approved for that formulation in the target market.
              </p>
            </div>
          </div>
        </section>

        {/* Medical Information Contact */}
        <section className="s" id="medical">
          <h2>Medical information &amp; marketing authorisation contact</h2>
          <div className="grid g2" style={{ alignItems: "stretch" }}>
            <div className="card">
              <h3>Marketing Authorisation Holder</h3>
              <p style={{ marginTop: "6px" }}>
                CHEPLAPHARM Registration GmbH
                <br />
                Weiler Straße 5e, 79540 Lörrach, Germany
              </p>
            </div>
            <div className="card">
              <h3>Medical enquiries</h3>
              <p style={{ marginTop: "6px" }}>
                A market-specific medical information telephone number, email and web form were not supplied. Until
                they are confirmed, use the local representatives listed in the package leaflet.
              </p>
              <p style={{ marginTop: "10px" }}>
                Telephone: to be confirmed for the target market
                <br />
                Email: to be confirmed for the target market
                <br />
                Enquiry form: to be confirmed for the target market
              </p>
            </div>
          </div>
        </section>

        {/* Abbreviations Glossary */}
        <section className="s" id="abbreviations">
          <h2>Master clinical abbreviations glossary</h2>
          <div className="ref-board ref-board--table">
            <input
              className="src"
              type="search"
              value={abbQuery}
              onChange={(e) => setAbbQuery(e.target.value)}
              placeholder="Search abbreviations or definitions…"
              aria-label="Search abbreviations"
            />
            <table className="ref-table">
              <tbody>
                {filteredAbbs.map(([abbr, def]) => (
                  <tr key={abbr}>
                    <td style={{ width: "25%" }}>
                      <b>{abbr}</b>
                    </td>
                    <td>{def}</td>
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

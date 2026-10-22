"use client";

import { useState } from "react";
import SectionNav from "@/components/SectionNav";
import {
  IconDownload,
  IconBuilding,
  IconMail,
  IconSearch,
  IconDoc,
} from "@/components/Icons";

interface Reference {
  id: string;
  citation: string;
  link?: string;
}

const REFERENCES: Reference[] = [
  {
    id: "1",
    citation: "ZYPREXA Summary of Product Characteristics (Annex I). CHEPLAPHARM / EMA.",
    link: "https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf",
  },
  {
    id: "2",
    citation: "ZYPREXA 10 mg powder for solution for injection SmPC. CHEPLAPHARM / EMA.",
  },
  {
    id: "3",
    citation: "ZYPADHERA powder and solvent for prolonged release suspension SmPC. CHEPLAPHARM / EMA.",
    link: "https://www.ema.europa.eu/en/medicines/human/EPAR/zypadhera",
  },
  {
    id: "4",
    citation: "DSM-5-TR (Diagnostic and Statistical Manual of Mental Disorders, 5th ed. Text Revision). APA, 2022.",
  },
  {
    id: "5",
    citation: "Stahl SM. Beyond the dopamine hypothesis: three neural networks. CNS Spectr. 2018;23(3):187–191.",
  },
  {
    id: "6",
    citation:
      "American Psychiatric Association Practice Guideline for the Treatment of Patients With Schizophrenia (3rd ed.). APA, 2021.",
  },
  {
    id: "7",
    citation: "Goodwin GM et al. Evidence-based guidelines for treating bipolar disorder (3rd ed.). J Psychopharmacol. 2016;30(6):495–553.",
  },
  {
    id: "8",
    citation: "Tandon R et al. World Psychiatric Association statement on comparative effectiveness of antipsychotics. Schizophr Res. 2008;100:20–38.",
  },
  {
    id: "9",
    citation: "World Health Organization. 23rd Model List of Essential Medicines. WHO, 2023/2024.",
  },
  {
    id: "10",
    citation: "Beasley CM Jr et al. Olanzapine vs. placebo and haloperidol in schizophrenia. Neuropsychopharmacology. 1996;14(2):111–123.",
  },
  {
    id: "11",
    citation: "Tohen M et al. Olanzapine versus placebo in acute mania. Am J Psychiatry. 1999;156(5):702–709.",
  },
  {
    id: "12",
    citation: "Kapur S et al. 5-HT₂ and D₂ receptor occupancy of olanzapine: a PET investigation. Am J Psychiatry. 1998;155(7):921–928.",
  },
  {
    id: "13",
    citation: "ZYPREXA Prescribing Information (US FDA; Section 12.2 receptor pharmacology rationale).",
  },
];

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
  const [abbQuery, setAbbQuery] = useState("");

  const filteredRefs = REFERENCES.filter((r) => {
    const q = refQuery.toLowerCase();
    return (
      r.citation.toLowerCase().includes(q) ||
      `ref ${r.id}`.includes(q) ||
      r.id.includes(q)
    );
  });

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

      <SectionNav />

      <div className="w">
        {/* Searchable Bibliography */}
        <section className="s" id="references">
          <h2>Searchable master reference bibliography (13 references)</h2>
          <div style={{ position: "relative" }}>
            <input
              className="src"
              type="search"
              value={refQuery}
              onChange={(e) => setRefQuery(e.target.value)}
              placeholder="Search references, authors, topics or keywords…"
              aria-label="Search references"
              style={{ paddingLeft: "42px" }}
            />
            <IconSearch
              style={{
                position: "absolute",
                left: "14px",
                top: "14px",
                width: "18px",
                height: "18px",
                color: "var(--mut)",
                pointerEvents: "none",
              }}
            />
          </div>

          <div className="card">
            {filteredRefs.length === 0 ? (
              <p style={{ padding: "12px 0", color: "var(--mut)" }}>
                No references match your search query &ldquo;{refQuery}&rdquo;.
              </p>
            ) : (
              filteredRefs.map((r) => (
                <div key={r.id} className="ref">
                  <b>Ref {r.id}</b>
                  <div>
                    <span>{r.citation}</span>
                    {r.link && (
                      <>
                        {" "}
                        <a href={r.link} target="_blank" rel="noopener noreferrer">
                          Open ↗
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Official Regulatory Product Documents */}
        <section className="s" id="regulatory">
          <h2>Official regulatory product documents</h2>
          <div className="grid g3">
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
          </div>
        </section>

        {/* Literature Matrix by Clinical Topic */}
        <section className="s" id="guidelines">
          <h2>Literature by clinical topic matrix</h2>
          <div className="card tw" style={{ padding: 0 }}>
            <table>
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
                  <td>Ref 1 (Section 5.1), Refs 12 (Kapur 1998), 13 (FDA 12.2)</td>
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
              <h3>Medical enquiries protocol</h3>
              <p style={{ marginTop: "6px" }}>
                Healthcare professionals seeking further medical or scientific information regarding ZYPREXA should
                contact national medical affairs or the local representatives identified in the package leaflet.
              </p>
            </div>
          </div>
        </section>

        {/* Abbreviations Glossary */}
        <section className="s" id="abbreviations">
          <h2>Master clinical abbreviations glossary</h2>
          <div style={{ position: "relative" }}>
            <input
              className="src"
              type="search"
              value={abbQuery}
              onChange={(e) => setAbbQuery(e.target.value)}
              placeholder="Search abbreviations or definitions…"
              aria-label="Search abbreviations"
              style={{ paddingLeft: "42px" }}
            />
            <IconSearch
              style={{
                position: "absolute",
                left: "14px",
                top: "14px",
                width: "18px",
                height: "18px",
                color: "var(--mut)",
                pointerEvents: "none",
              }}
            />
          </div>

          <div className="card tw" style={{ padding: 0 }}>
            <table>
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

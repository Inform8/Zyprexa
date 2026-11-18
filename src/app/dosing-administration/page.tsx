import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";

export const metadata: Metadata = {
  title: "Dosing and administration",
  description: "Starting doses, dose range and dose adjustment for ZYPREXA coated tablets in adults.",
};

const packs = [
  {
    eyebrow: "This page",
    title: "ZYPREXA coated tablets",
    text: "All dosing and safety content below refers to ZYPREXA coated tablets.",
    image: "/assets/products/coated-tablets.png",
    alt: "ZYPREXA coated tablet packs, 2.5 mg to 20 mg",
    cite: 1,
    smpcUrl:
      "https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf",
    smpcLabel: "View EU SmPC",
    smpcAria: "View ZYPREXA coated tablets EU Summary of Product Characteristics (opens in new tab)",
  },
  {
    eyebrow: "Separate prescribing information",
    title: "ZYPREXA powder for solution for injection",
    text: "Short-term intramuscular use for agitation. Different dosing and precautions.",
    image: "/assets/products/short-acting-im.png",
    alt: "ZYPREXA IntraMuscular 10 mg powder for solution for injection",
    cite: 2,
    smpcUrl:
      "https://ec.europa.eu/health/documents/community-register/2001/200107024322/anx_4322_en.pdf",
    smpcLabel: "View EU SmPC",
    smpcAria: "View ZYPREXA powder for solution for injection EU Summary of Product Characteristics (opens in new tab)",
  },
  {
    eyebrow: "Separate prescribing information",
    title: "ZYPADHERA (olanzapine pamoate)",
    text: "Prolonged-release injection with its own dosing and post-injection observation requirements.",
    image: "/assets/products/long-acting-im.png",
    alt: "ZYPADHERA 210 mg, 300 mg and 405 mg prolonged-release injection packs",
    cite: 3,
    smpcUrl:
      "https://www.ema.europa.eu/en/documents/product-information/zypadhera-epar-product-information_en.pdf",
    smpcLabel: "View EU SmPC",
    smpcAria: "View ZYPADHERA EU Summary of Product Characteristics (opens in new tab)",
  },
];

export default function DosingPage() {
  return (
    <main id="app">
      <div className="hero hero--text">
        <div className="w">
          <div className="hero-copy">
            <p className="eb">Dosing &amp; administration</p>
            <h1 className="serif">Dosing and administration</h1>
            <p>
              Starting doses, dose range and dose adjustment for ZYPREXA coated tablets in adults.
              <Cite n={1} section="4.2" />
            </p>
            <div className="hero-tabs">
              <a className="btn" href="#formulations">
                Formulations
              </a>
              <a className="btn g" href="#dosing">
                Starting doses
              </a>
              <a className="btn g" href="#discontinuation">
                Stopping treatment
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true" />
        </div>
      </div>

      <div className="w">
        <section className="s" id="formulations">
          <h2>Formulations</h2>
          <p>This site covers ZYPREXA coated tablets. The injectable formulations have separate prescribing information.</p>
          <div className="g3 pack-grid">
            {packs.map((pack) => (
              <article className="card" key={pack.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="product-cutout" src={pack.image} alt={pack.alt} />
                <p className="eb">{pack.eyebrow}</p>
                <h3>{pack.title}</h3>
                <p>
                  {pack.text}
                  {pack.cite ? <Cite n={pack.cite} /> : null}
                </p>
                {pack.smpcUrl && (
                  <div className="smpc-link-wrap" style={{ marginTop: "auto", paddingTop: 14 }}>
                    <a
                      className="smpc-btn"
                      href={pack.smpcUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={pack.smpcAria}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                      <span>{pack.smpcLabel}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
          <article className="card card-velotab" style={{ marginTop: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="product-cutout"
              src="/assets/products/odt.png"
              alt="ZYPREXA Velotab orodispersible tablets, 5 mg to 20 mg"
            />
            <div>
              <p className="eb">Separate prescribing information</p>
              <h3>ZYPREXA VELOTAB orodispersible tablets</h3>
              <p>
                Orodispersible tablets are a separate oral presentation. Dosing and safety on this page refer to ZYPREXA
                coated tablets. Confirm the VELOTAB product information before prescribing that formulation.
                <Cite n={17} />
              </p>
              <div className="smpc-link-wrap" style={{ marginTop: 14 }}>
                <a
                  className="smpc-btn"
                  href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-velotab-epar-product-information_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View ZYPREXA VELOTAB EU Summary of Product Characteristics (opens in new tab)"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>View EU SmPC</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="s" id="dosing">
          <h2>Starting doses and dose range</h2>
          <div>
              <p>
                Recommended starting doses for ZYPREXA coated tablets in adults.
                <Cite n={1} section="4.2" />
              </p>
              <div className="card tw">
                <table>
                  <caption>Table 1. Recommended starting dose by treatment setting</caption>
                  <thead>
                    <tr>
                      <th>Approved treatment setting</th>
                      <th>Starting dose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Schizophrenia</td>
                      <td>10 mg once daily</td>
                    </tr>
                    <tr>
                      <td>Moderate to severe manic episode, monotherapy</td>
                      <td>15 mg single daily dose</td>
                    </tr>
                    <tr>
                      <td>Moderate to severe manic episode, combination therapy</td>
                      <td>10 mg once daily</td>
                    </tr>
                    <tr>
                      <td>Prevention of recurrence in bipolar disorder following response to olanzapine for mania</td>
                      <td>10 mg once daily</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The daily dose range is <strong>5–20 mg</strong>, individualised for each patient. Dose adjustments
                should be based on clinical assessment. An increase above the recommended starting dose should occur
                only after appropriate clinical reassessment and generally at intervals of not less than 24 hours.
                <Cite n={1} section="4.2" />
              </p>
              <p>
                For patients who have been receiving olanzapine for a manic episode, therapy for preventing recurrence
                continues at the same dose. If a new manic, mixed or depressive episode occurs, olanzapine treatment
                should be continued (with dose optimisation as needed), with supplementary therapy to treat mood
                symptoms, as clinically indicated.
                <Cite n={1} section="4.2" />
              </p>
              <p>Olanzapine can be given without regard to meals, as absorption is not affected by food.</p>
            </div>
            <div>
              <h3>Special populations</h3>
              <details>
                <summary>Older patients (65 years and over)</summary>
                <p>
                  A lower starting dose (5 mg/day) is not routinely indicated but should be considered when clinical
                  factors warrant.
                  <Cite n={1} section="4.2" />
                </p>
              </details>
              <details>
                <summary>Renal and/or hepatic impairment</summary>
                <p>
                  A lower starting dose (5 mg) should be considered. In moderate hepatic insufficiency (cirrhosis,
                  Child-Pugh Class A or B), the starting dose should be 5 mg and only increased with caution.
                  <Cite n={1} section="4.2" />
                </p>
              </details>
              <details>
                <summary>Factors that may slow metabolism</summary>
                <p>
                  When more than one factor is present (female gender, geriatric age, non-smoking status), consider
                  decreasing the starting dose. Dose escalation should be conservative.
                  <Cite n={1} section="4.2" />
                </p>
              </details>
              <details>
                <summary>Smokers</summary>
                <p>
                  Starting dose and range need not be routinely altered. Metabolism may be induced by smoking; clinical
                  monitoring is recommended and a dose increase may be considered if necessary.
                  <Cite n={1} section="4.2" />
                </p>
              </details>
              <details>
                <summary>Children and adolescents</summary>
                <p>
                  Not recommended below 18 years of age due to a lack of data on safety and efficacy.
                  <Cite n={1} section="4.2" />
                </p>
              </details>
            </div>
        </section>

        <section className="s" id="discontinuation">
          <h2>Stopping treatment</h2>
          <div>
              <p>
                Acute symptoms such as sweating, insomnia, tremor, anxiety, nausea or vomiting have been reported
                rarely when olanzapine is stopped abruptly.
                <Cite n={1} section="4.4" />
              </p>
              <p>
                Gradual tapering of the dose should be considered when discontinuing olanzapine. Treatment changes
                should be managed by the treating healthcare professional.
                <Cite n={1} section="4.2" />
              </p>
            </div>
        </section>

        <section className="s" aria-label="Before prescribing">
          <div className="card">
            <h3>Before prescribing</h3>
            <p>Check contraindications, warnings and the monitoring schedule.</p>
            <div className="row" style={{ marginTop: '12px' }}>
              <Link className="more-link" href="/safety-monitoring#contraindications">
                Contraindications →
              </Link>
              <Link className="more-link" href="/safety-monitoring#monitoring">
                Monitoring schedule →
              </Link>
              <Link className="more-link" href="/safety-monitoring#interactions">
                Interactions →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

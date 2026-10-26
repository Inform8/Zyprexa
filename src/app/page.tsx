import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { EXTERNAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "ZYPREXA (olanzapine) for healthcare professionals: approved indications, mechanism of action, key clinical evidence, dosing and important safety information at a glance.",
};

const prescribingLabel =
  "Prescribing information, Zyprexa EU product information PDF, opens in a new tab";

export default function HomePage() {
  return (
    <main id="app" className="home-page">
      <div className="hero hero--home">
        <div className="w">
          <div className="hero-copy">
            <p className="eb">Product overview</p>
            <div className="brand">
              ZYPREXA<i>olanzapine · coated tablets</i>
            </div>
            <h1 className="serif">Olanzapine for schizophrenia and bipolar mania</h1>
            <p>
              ZYPREXA is indicated for the treatment of schizophrenia and of moderate to severe manic episodes. In
              patients whose manic episode has responded to olanzapine, it is also indicated for preventing recurrence
              in bipolar disorder.
              <Cite n={1} section="4.1" />
            </p>
            <div className="hero-tabs">
              <a className="btn" href="#indications">
                Approved indications
              </a>
              <a className="btn g" href="#evidence">
                Clinical evidence
              </a>
              <a className="btn g" href="#dosing-glance">
                Dosing
              </a>
              <a className="btn g" href="#safety">
                Safety information
              </a>
            </div>
          </div>
          <div className="hero-art hero-art--home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-product-img"
              src="/assets/zyprexa-formulations-hero.jpg"
              alt="ZYPREXA formulations: ZypAdhera, IntraMuscular, Coated tablets, and Velotab"
            />
          </div>
        </div>
      </div>

      <div className="w">
        <div className="g4" style={{ marginTop: 22 }} aria-label="Key figures">
          <article className="card stat">
            <b>&gt; 2,900</b>
            <p>
              patients in the controlled schizophrenia trials
              <Cite n={1} section="5.1" />
            </p>
            <Link className="more-link" href="/clinical-evidence#schizophrenia">
              Clinical evidence
            </Link>
          </article>
          <article className="card stat">
            <b>
              48.6% <small>vs 24.2%</small>
            </b>
            <p>
              responders at 3 weeks in manic episodes, vs placebo
              <Cite n={11} />
            </p>
            <Link className="more-link" href="/clinical-evidence#tohen-1999">
              Clinical evidence
            </Link>
          </article>
          <article className="card stat">
            <b>&gt; 90%</b>
            <p>
              5-HT2 receptor occupancy at every dose from 5 to 20 mg/day
              <Cite n={12} />
            </p>
            <Link className="more-link" href="/mechanism-of-action#occupancy">
              Mechanism of action
            </Link>
          </article>
          <article className="card stat">
            <b>5–20 mg</b>
            <p>
              once-daily dose range, individualised
              <Cite n={1} section="4.2" />
            </p>
            <Link className="more-link" href="/dosing-administration#dosing">
              Dosing
            </Link>
          </article>
        </div>

        <section className="s" id="indications">
          <h2>Approved indications</h2>
          <p>For adults. Comprehensive clinical background for both conditions is available in Disease background.</p>
          <ol className="ind-cards">
            <li>
              <div className="ind-card-inner">
                <span className="ind-num">01</span>
                <div className="ind-card-body">
                  <h3>Schizophrenia</h3>
                  <p>
                    Treatment of schizophrenia. Effective in maintaining clinical improvement during continuation
                    therapy in patients who have shown an initial treatment response.
                    <Cite n={1} section="4.1" />
                  </p>
                  <Link className="more-link" href="/disease-background#schizophrenia">
                    Disease background
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="ind-card-inner">
                <span className="ind-num">02</span>
                <div className="ind-card-body">
                  <h3>Moderate to severe manic episodes</h3>
                  <p>
                    As monotherapy or in combination therapy.
                    <Cite n={1} section="4.2" />
                  </p>
                  <Link className="more-link" href="/clinical-evidence#manic-episodes">
                    Clinical evidence
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="ind-card-inner">
                <span className="ind-num">03</span>
                <div className="ind-card-body">
                  <h3>Prevention of recurrence in bipolar disorder</h3>
                  <p>
                    In patients whose manic episode has responded to olanzapine treatment.
                    <Cite n={1} section="4.1" />
                  </p>
                  <Link className="more-link" href="/clinical-evidence#recurrence">
                    Clinical evidence
                  </Link>
                </div>
              </div>
            </li>
          </ol>
          <p className="source-line">
            Not an approved indication: bipolar depression. This site covers ZYPREXA coated tablets; the injectable
            formulations have separate prescribing information.
            <Cite n={[2, 3]} />
          </p>
        </section>

        <section className="s" id="mechanism">
          <h2>Mechanism of action</h2>
          <div className="g2">
            <div className="card" style={{ padding: 22, display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "var(--ink)", margin: "0 0 8px" }}>Receptor binding profile</h3>
              <p style={{ margin: "0 0 10px", color: "#4a4570", fontSize: "14px", lineHeight: "1.55" }}>
                Olanzapine is an antipsychotic, antimanic and mood-stabilising agent with affinity for several receptor
                families. It has greater affinity for serotonin 5-HT2 than dopamine D2 receptors.
                <Cite n={1} section="5.1" />
              </p>
              <p style={{ margin: "0 0 14px", color: "#4a4570", fontSize: "14px", lineHeight: "1.55" }}>
                Across the dose range of 5–20 mg/day, 5-HT2 occupancy was above 90%, while D2 occupancy rose with dose
                to a mean of 76% at 20 mg/day.
                <Cite n={12} />
              </p>
              <div style={{ marginTop: "auto" }}>
                <Link className="more-link" href="/mechanism-of-action">
                  Receptor profile and occupancy →
                </Link>
              </div>
            </div>
            <figure>
              <div className="receptor-5-grid" role="list" aria-label="Receptor families with olanzapine affinity in preclinical studies">
                {[
                  ["D1–5", "Dopamine"],
                  ["5-HT", "Serotonin 2A/2C, 3, 6"],
                  ["H1", "Histamine"],
                  ["M1–5", "Muscarinic"],
                  ["α1", "Adrenergic"],
                ].map(([name, family]) => (
                  <div className="card receptor-card" role="listitem" key={name}>
                    <h3>{name}</h3>
                    <p>{family}</p>
                  </div>
                ))}
              </div>
              <figcaption className="source-line" style={{ marginTop: 12 }}>
                Receptor families at which olanzapine showed affinity (Ki &lt; 100 nM) in preclinical studies. Order
                does not indicate relative affinity.
                <Cite n={1} section="5.1" />
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="s" id="evidence">
          <h2>Clinical evidence at a glance</h2>
          <div className="g3">
            {[
              {
                title: "Schizophrenia",
                href: "/clinical-evidence#schizophrenia",
                text: "Significantly greater improvement in negative and positive symptoms in 2 of 2 placebo-controlled and 2 of 3 comparator-controlled trials.",
                n: 1 as const,
                section: "5.1",
              },
              {
                title: "Bipolar disorder · Manic episodes",
                href: "/clinical-evidence#manic-episodes",
                text: "Greater reduction in manic symptoms than placebo and divalproex, and as add-on to lithium or valproate.",
                n: 1 as const,
                section: "5.1",
              },
              {
                title: "Bipolar disorder · Recurrence prevention",
                href: "/clinical-evidence#recurrence",
                text: "Superior to placebo over 12 months; non-inferior to lithium (recurrence 30.0% vs 38.3%). Not superior as 18-month add-on to lithium or valproate.",
                n: 1 as const,
                section: "5.1",
              },
            ].map((row) => (
              <div className="card evidence-card" key={row.title}>
                <h3>{row.title}</h3>
                <p>
                  {row.text}
                  <Cite n={row.n} section={row.section} />
                </p>
                <Link className="more-link" href={row.href}>
                  Trials →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="s" id="dosing-glance">
          <h2>Dosing at a glance</h2>
          <div className="g2">
            <div className="card" style={{ padding: 22, display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "var(--ink)", margin: "0 0 8px" }}>Administration &amp; dose range</h3>
              <p style={{ margin: "0 0 10px", color: "#4a4570", fontSize: "14px", lineHeight: "1.55" }}>
                Administered once daily with or without food. The licensed daily dose range is <strong>5–20 mg/day</strong>,
                individualised according to clinical status.
                <Cite n={1} section="4.2" />
              </p>
              <p style={{ margin: "0 0 10px", color: "#4a4570", fontSize: "14px", lineHeight: "1.55" }}>
                Dose escalations, when indicated, should occur at intervals of not less than 24 hours to ensure proper clinical assessment.
                <Cite n={1} section="4.2" />
              </p>
              <p style={{ margin: "0 0 14px", color: "#4a4570", fontSize: "14px", lineHeight: "1.55" }}>
                Consider a <strong>5 mg/day</strong> starting dose in elderly patients (≥ 65 years) or those with renal or moderate hepatic impairment.
                <Cite n={1} section="4.2" />
              </p>
              <div style={{ marginTop: "auto" }}>
                <Link className="more-link" href="/dosing-administration">
                  Dose range and special populations →
                </Link>
              </div>
            </div>
            <div className="card tw" style={{ padding: 22 }}>
              <table>
                <caption className="source-line" style={{ fontWeight: 600, color: "var(--mut)", marginBottom: 10 }}>Recommended starting doses</caption>
                <thead>
                  <tr>
                    <th>Indication</th>
                    <th>Starting dose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Schizophrenia</td>
                    <td>10 mg</td>
                  </tr>
                  <tr>
                    <td>Manic episode, monotherapy</td>
                    <td>15 mg</td>
                  </tr>
                  <tr>
                    <td>Manic episode, combination therapy</td>
                    <td>10 mg</td>
                  </tr>
                  <tr>
                    <td>Prevention of recurrence in bipolar disorder</td>
                    <td>10 mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="s" id="safety">
          <h2>Important safety information</h2>
          <div className="g2" style={{ marginTop: 18 }}>
            <div className="card" style={{ padding: 22 }}>
              <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "var(--ink)", margin: "0 0 8px" }}>Contraindications</h3>
              <p style={{ margin: 0, color: "#4a4570", fontSize: "14px", lineHeight: "1.55" }}>
                Hypersensitivity to olanzapine or any excipient; known risk of narrow-angle glaucoma.
                <Cite n={1} section="4.3" />
              </p>
            </div>
            <div className="card" style={{ padding: 22 }}>
              <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "var(--ink)", margin: "0 0 8px" }}>Dementia-related psychosis</h3>
              <p style={{ margin: 0, color: "#4a4570", fontSize: "14px", lineHeight: "1.55" }}>
                Not recommended: increased mortality and risk of cerebrovascular accident in elderly patients.
                <Cite n={1} section="4.4" />
              </p>
            </div>
            <div className="card" style={{ padding: 22 }}>
              <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "var(--ink)", margin: "0 0 8px" }}>Weight and metabolic changes</h3>
              <p style={{ margin: 0, color: "#4a4570", fontSize: "14px", lineHeight: "1.55" }}>
                Monitor weight, blood glucose and lipids at baseline and regularly during treatment.
                <Cite n={1} section="4.4" />
              </p>
            </div>
            <div className="card" style={{ padding: 22 }}>
              <h3 style={{ fontSize: "16.5px", fontWeight: 700, color: "var(--ink)", margin: "0 0 8px" }}>Neuroleptic malignant syndrome</h3>
              <p style={{ margin: 0, color: "#4a4570", fontSize: "14px", lineHeight: "1.55" }}>
                If signs occur, all antipsychotic medicines, including olanzapine, must be discontinued.
                <Cite n={1} section="4.4" />
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: 18, gap: 20 }}>
            <Link className="more-link" href="/safety-monitoring">
              All warnings and monitoring →
            </Link>
            <Link className="more-link" href="/safety-monitoring#adverse-reactions">
              Adverse reactions →
            </Link>
          </div>
        </section>

        <section className="pi" aria-labelledby="ipi-title" style={{ marginTop: 36 }}>
          <div>
            <p className="eb">Prescribing information</p>
            <h2 id="ipi-title">Consult the prescribing information before prescribing</h2>
            <p>
              ZYPREXA is a prescription medicine. Treatment should be initiated and monitored by an appropriately
              qualified healthcare professional.
            </p>
          </div>
          <div className="pi__actions">
            <a href={EXTERNAL.smpcPdf} target="_blank" rel="noopener noreferrer" aria-label={prescribingLabel}>
              View full prescribing information
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

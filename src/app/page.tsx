import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBrain,
  IconWave,
  IconRepeat,
  IconMolecule,
  IconShield,
  IconBook,
  IconChart,
  IconDoc,
  IconPill,
  IconCheck,
  IconScale,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Evidence-informed treatment in schizophrenia and bipolar disorder · ZYPREXA HCP",
  description:
    "Information for healthcare professionals on ZYPREXA (olanzapine): approved indications, clinical evidence, pharmacology and prescribing information, based on the EU Summary of Product Characteristics.",
};

export default function HomePage() {
  return (
    <main id="app">
      {/* Editorial Hero */}
      <div className="hero">
        <div className="w">
          <div>
            <p className="eb">Medical information for healthcare professionals</p>
            <div className="brand">
              ZYPREXA<i>olanzapine</i>
            </div>
            <h1 className="serif" style={{ fontSize: "clamp(24px, 3vw, 38px)", margin: "16px 0 10px" }}>
              Evidence-informed treatment in schizophrenia and bipolar disorder
            </h1>
            <p>
              Zyprexa (olanzapine) is an antipsychotic medicine indicated for the treatment of schizophrenia and
              for the treatment of moderate to severe manic episodes. In patients whose manic episode has
              responded to olanzapine, it is also indicated for preventing recurrence in bipolar disorder, in
              accordance with the applicable product information.<sup>[1, section 4.1]</sup>
            </p>
            <div className="row">
              <Link className="btn" href="/clinical-evidence">
                Explore clinical evidence →
              </Link>
              <Link className="btn g" href="/safety-prescribing#dosing">
                Prescribing information
              </Link>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-brain-3d.jpg"
              alt="3D neural network representation of atypical antipsychotic receptor activity"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="w">
        {/* Approved indications */}
        <section className="s" id="indications">
          <h2>Approved indications (EU SmPC 4.1)</h2>
          <div className="grid g3">
            <div className="card">
              <h3>Schizophrenia</h3>
              <p>
                Treatment of schizophrenia. Effective in maintaining clinical improvement during continuation
                therapy in patients who have shown an initial treatment response.
              </p>
            </div>
            <div className="card">
              <h3>Acute manic episodes</h3>
              <p>Treatment of moderate to severe manic episodes (monotherapy or combination therapy).</p>
            </div>
            <div className="card">
              <h3>Maintenance treatment in bipolar disorder</h3>
              <p>
                Prevention of recurrence in bipolar disorder in patients whose manic episode has responded to
                olanzapine.
              </p>
            </div>
          </div>
          <p className="lead" style={{ marginTop: "14px" }}>
            <span className="tag">Scope note</span> Coated tablets only. Powder for solution for injection and
            ZYPADHERA have separate SmPCs.
          </p>
        </section>

        {/* Explore key topics */}
        <section className="s" id="topics">
          <h2>Explore key topics</h2>
          <div className="grid g3 keep">
            <Link className="card" href="/schizophrenia">
              <h3>Understanding Schizophrenia</h3>
              <p>Positive, negative, cognitive domains, neurobiology and course of care.</p>
            </Link>
            <Link className="card" href="/bipolar-disorder">
              <h3>Understanding Bipolar Disorder</h3>
              <p>Distinct mood episodes, treatment objectives, and recurrence prevention.</p>
            </Link>
            <Link className="card" href="/clinical-evidence">
              <h3>Clinical Evidence</h3>
              <p>9 clinical study descriptions in EU SmPC section 5.1 and interactive study explorer.</p>
            </Link>
            <Link className="card" href="/mechanism-of-action">
              <h3>Mechanism of Action</h3>
              <p>
                Multi-receptor pharmacological profile across dopamine, serotonin, histamine, muscarinic, and
                adrenergic receptors.
              </p>
            </Link>
            <Link className="card" href="/safety-prescribing">
              <h3>Safety, Monitoring &amp; Prescribing</h3>
              <p>Dosing guidance, contraindications, dementia warning, and metabolic monitoring.</p>
            </Link>
            <Link className="card" href="/references">
              <h3>References &amp; Resources</h3>
              <p>Official regulatory documents (SmPC, PIL), clinical citations, and medical abbreviations.</p>
            </Link>
          </div>
        </section>

        {/* Trusted in practice */}
        <section className="s" id="trusted">
          <h2>A trusted treatment in clinical practice</h2>
          <div className="grid g4">
            <div className="card">
              <h3>Extensive clinical experience</h3>
              <p>Established evidence base across adult populations with over 25 years of real-world use.</p>
            </div>
            <div className="card">
              <h3>Multiple formulations</h3>
              <p>Coated tablets, rapid-acting IM injection, and long-acting injectable (ZYPADHERA).</p>
            </div>
            <div className="card">
              <h3>Guideline support</h3>
              <p>
                Recommended in BAP (2016), APA (2021), and listed on the WHO Essential Medicines List (2023).
              </p>
            </div>
            <div className="card">
              <h3>Comprehensive safety profile</h3>
              <p>Proactive cardiometabolic monitoring protocols and individualized posology titration.</p>
            </div>
          </div>
        </section>

        {/* Prescribing information callout */}
        <section className="s" id="pi">
          <h2>Important Prescribing Information</h2>
          <div className="pi">
            <div>
              <p className="eb" style={{ color: "#d9ccff" }}>
                Important Prescribing Information
              </p>
              <h2 style={{ fontSize: "28px" }}>Consult the approved product information before prescribing</h2>
              <ul>
                <li>Contraindicated in hypersensitivity and known risk of narrow-angle glaucoma.</li>
                <li>
                  Not recommended in elderly patients with dementia-related psychosis due to increased
                  mortality and cerebrovascular risk.
                </li>
                <li>
                  Weight gain and changes in glucose and lipid parameters can occur; baseline and ongoing
                  monitoring required.
                </li>
              </ul>
              <div className="row">
                <a
                  className="btn w2"
                  href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full PI (PDF) →
                </a>
                <Link
                  className="btn w2"
                  style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
                  href="/safety-prescribing"
                >
                  Safety &amp; prescribing summary
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", placeItems: "center" }}>
              <IconShield style={{ width: "80px", height: "80px", opacity: 0.5, strokeWidth: 1.2 }} />
            </div>
          </div>
        </section>

        {/* Receptor profile */}
        <section className="s" id="receptors">
          <h2>Receptor profile at a glance</h2>
          <p className="lead">Preclinical binding affinity (Ki &lt; 100 nM).</p>
          <div className="grid g5">
            {[
              {
                code: "D₂",
                name: "Dopamine",
                desc: "Antipsychotic efficacy",
                color: "#2563eb",
              },
              {
                code: "5-HT₂A",
                name: "Serotonin",
                desc: "Mood modulation & EPS mitigation",
                color: "#db2777",
              },
              {
                code: "H₁",
                name: "Histamine",
                desc: "Calming/sedation & appetite regulation",
                color: "#059669",
              },
              {
                code: "M₁–₅",
                name: "Muscarinic",
                desc: "Anticholinergic balance",
                color: "#7c3aed",
              },
              {
                code: "α₁",
                name: "Adrenergic",
                desc: "Orthostatic & cardiovascular reflexes",
                color: "#d97706",
              },
            ].map((r) => (
              <Link
                key={r.code}
                className="card"
                href="/mechanism-of-action#systems"
                style={{ textAlign: "center" }}
              >
                <div
                  className="badge-code"
                  style={{
                    width: "56px",
                    height: "56px",
                    margin: "0 auto 10px",
                    background: r.color,
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  {r.code}
                </div>
                <h3>{r.name}</h3>
                <p>{r.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

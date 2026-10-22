import type { Metadata } from "next";
import Link from "next/link";
import SectionNav from "@/components/SectionNav";
import { FigurePicker, StepRail } from "@/components/Figures";

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

      <SectionNav />

      <div className="w">
        {/* Approved indications */}
        <section className="s" id="indications">
          <h2>Approved indications (EU SmPC 4.1)</h2>
          <FigurePicker
            label="Approved indications"
            items={[
              {
                title: "Schizophrenia",
                body: "Treatment of schizophrenia. Effective in maintaining clinical improvement during continuation therapy in patients who have shown an initial treatment response.",
              },
              {
                title: "Acute manic episodes",
                body: "Treatment of moderate to severe manic episodes, as monotherapy or in combination therapy.",
              },
              {
                title: "Maintenance in bipolar disorder",
                body: "Prevention of recurrence in bipolar disorder in patients whose manic episode has responded to olanzapine.",
              },
            ]}
          />
          <p className="lead" style={{ marginTop: "14px" }}>
            <span className="tag">Scope note</span> Coated tablets only. Powder for solution for injection and
            ZYPADHERA have separate SmPCs.
          </p>
        </section>

        {/* Explore key topics */}
        <section className="s" id="topics">
          <h2>Explore key topics</h2>
          <div className="topic-mosaic">
            <Link className="card topic-tile" href="/schizophrenia">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/schizophrenia-person.jpg" alt="" />
              <h3>Understanding Schizophrenia</h3>
              <p>Positive, negative, and cognitive domains, neurobiology, and the course of care.</p>
            </Link>
            <Link className="card topic-tile" href="/bipolar-disorder">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/bipolar-person.jpg" alt="" />
              <h3>Understanding Bipolar Disorder</h3>
              <p>Distinct mood episodes, treatment objectives, and recurrence prevention.</p>
            </Link>
            <Link className="card topic-tile" href="/clinical-evidence">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/hero-brain-3d.jpg" alt="" />
              <h3>Clinical Evidence</h3>
              <p>Nine study descriptions from EU SmPC section 5.1, with an interactive explorer.</p>
            </Link>
            <Link className="card topic-tile" href="/mechanism-of-action">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/moa-brain-receptors.jpg" alt="" />
              <h3>Mechanism of Action</h3>
              <p>Dopamine, serotonin, histamine, muscarinic, and adrenergic receptor profile.</p>
            </Link>
            <Link className="card topic-tile" href="/safety-prescribing">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/zyprexa-formulations.jpg" alt="" />
              <h3>Safety, Monitoring &amp; Prescribing</h3>
              <p>Dosing, contraindications, the dementia warning, and metabolic monitoring.</p>
            </Link>
            <Link className="card topic-tile" href="/references">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/medical-books-stack.jpg" alt="" />
              <h3>References &amp; Resources</h3>
              <p>SmPC, PIL, clinical citations, and medical abbreviations.</p>
            </Link>
          </div>
        </section>

        {/* Trusted in practice */}
        <section className="s" id="trusted">
          <h2>A trusted treatment in clinical practice</h2>
          <StepRail
            label="Clinical practice"
            steps={[
              {
                title: "25+ years",
                body: "Established evidence base across adult populations, with more than 25 years of real-world use.",
              },
              {
                title: "Formulations",
                body: "Coated tablets, rapid-acting intramuscular injection, and the long-acting injectable ZYPADHERA.",
              },
              {
                title: "Guidelines",
                body: "Recommended in BAP (2016) and APA (2021), and listed on the WHO Essential Medicines List (2023).",
              },
              {
                title: "Monitoring",
                body: "Cardiometabolic monitoring protocols and individualized posology titration sit alongside the efficacy evidence.",
              },
            ]}
          />
        </section>

        {/* Prescribing information callout */}
        <section className="s" id="pi">
          <div className="pi">
            <div>
              <p className="eb">Important prescribing information</p>
              <h2>Consult the approved product information before prescribing</h2>
              <ul>
                <li>
                  <b>Contraindications:</b> Known hypersensitivity to olanzapine; known risk of narrow-angle glaucoma.
                </li>
                <li>
                  <b>Dementia-related psychosis:</b> Not recommended in elderly patients with dementia-related psychosis
                  due to increased mortality and cerebrovascular events.
                </li>
                <li>
                  <b>Metabolic monitoring:</b> Weight gain, hyperglycaemia, and dyslipidaemia can occur; baseline and
                  periodic metabolic monitoring is required.
                </li>
              </ul>
            </div>
            <div className="pi__actions">
              <a
                href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official EMA SmPC (PDF) ↗
              </a>
              <Link href="/safety-prescribing">Safety summary</Link>
            </div>
          </div>
        </section>

        {/* Receptor profile */}
        <section className="s" id="receptors">
          <div className="spectrum-head">
            <h2>Receptor profile at a glance</h2>
            <p>Preclinical binding affinity (Ki &lt; 100 nM, SmPC §5.1)</p>
          </div>
          <div className="glance">
            {[
              { code: "D₂", name: "Dopamine", note: "Antipsychotic efficacy", color: "#2563eb" },
              { code: "5-HT₂A", name: "Serotonin", note: "Mood modulation and lower EPS burden", color: "#db2777" },
              { code: "H₁", name: "Histamine", note: "Calming, sedation, and appetite", color: "#059669" },
              { code: "M₁–₅", name: "Muscarinic", note: "Anticholinergic balance", color: "#7c3aed" },
              { code: "α₁", name: "Adrenergic", note: "Orthostatic and cardiovascular reflexes", color: "#d97706" },
            ].map((item) => (
              <Link key={item.code} href="/mechanism-of-action#systems" className="glance__card">
                <span className="glance__badge" style={{ background: item.color }}>
                  {item.code}
                </span>
                <strong>{item.name}</strong>
                <span>{item.note}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

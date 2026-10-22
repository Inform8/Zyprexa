import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { HeroBrain, TopicArt } from "@/components/HomeVisuals";

export const metadata: Metadata = {
  title: "Evidence-informed treatment in schizophrenia and manic episodes in bipolar disorder · ZYPREXA HCP",
  description:
    "Information for healthcare professionals on ZYPREXA (olanzapine): approved indications, clinical evidence, pharmacology and prescribing information, based on the EU Summary of Product Characteristics.",
};

export default function HomePage() {
  return (
    <main id="app">
      {/* Editorial Hero */}
      <div className="hero hero--home">
        <div className="w">
          <div>
            <p className="eb eb--rule">Medical information for healthcare professionals</p>
            <div className="brand">
              ZYPREXA<i>olanzapine</i>
            </div>
            <p className="source-line" style={{ marginTop: 0 }}>
              ZYPREXA® coated tablets · EU SmPC · Prepared October 2026 · Job code to be assigned for the target market
            </p>
            <h1 className="serif" style={{ fontSize: "clamp(24px, 3vw, 38px)", margin: "16px 0 10px" }}>
              Evidence-informed treatment in schizophrenia and manic episodes in bipolar disorder
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
          <div className="hero-art">
            <HeroBrain />
          </div>
        </div>
      </div>

      <div className="w">
        {/* Approved indications */}
        <section className="s s--open" id="indications">
          <div className="home-head">
            <h2>Approved indications (EU SmPC 4.1)</h2>
            <a
              href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full indication details →
            </a>
          </div>
          <p className="lead">Oral coated tablets in adults. Injection and ZYPADHERA have their own product information.</p>
          <ol className="ind-cards">
            <li>
              <span className="ind-num">01</span>
              <div>
                <h3>Schizophrenia</h3>
                <p>
                  Treatment of schizophrenia. Effective in maintaining clinical improvement during continuation therapy
                  in patients who have shown an initial treatment response.
                </p>
              </div>
            </li>
            <li>
              <span className="ind-num">02</span>
              <div>
                <h3>Acute manic episodes</h3>
                <p>Treatment of moderate to severe manic episodes, as monotherapy or in combination therapy.</p>
              </div>
            </li>
            <li>
              <span className="ind-num">03</span>
              <div>
                <h3>Maintenance in bipolar disorder</h3>
                <p>
                  Prevention of recurrence in bipolar disorder in patients whose manic episode has responded to
                  olanzapine.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Explore key topics */}
        <section className="s s--open" id="topics">
          <h2>Explore key topics</h2>
          <p className="lead">Find detailed information across the key areas relevant to clinical practice.</p>
          <div className="topic-mosaic">
            <Link className="topic-tile" href="/schizophrenia">
              <div>
                <h3>Understanding Schizophrenia</h3>
                <p>Positive, negative, and cognitive domains, neurobiology, and the course of care.</p>
              </div>
              <div className="topic-tile__art">
                <TopicArt kind="brain" />
              </div>
              <span className="topic-tile__go" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="topic-tile" href="/bipolar-disorder">
              <div>
                <h3>Understanding Bipolar Disorder</h3>
                <p>Distinct mood episodes, treatment objectives, and recurrence prevention.</p>
              </div>
              <div className="topic-tile__art">
                <TopicArt kind="wave" />
              </div>
              <span className="topic-tile__go" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="topic-tile" href="/clinical-evidence">
              <div>
                <h3>Clinical Evidence</h3>
                <p>Nine study descriptions from EU SmPC section 5.1, with an interactive explorer.</p>
              </div>
              <div className="topic-tile__art">
                <TopicArt kind="bars" />
              </div>
              <span className="topic-tile__go" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="topic-tile" href="/mechanism-of-action">
              <div>
                <h3>Mechanism of Action</h3>
                <p>Dopamine, serotonin, histamine, muscarinic, and adrenergic receptor profile.</p>
              </div>
              <div className="topic-tile__art">
                <TopicArt kind="network" />
              </div>
              <span className="topic-tile__go" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="topic-tile" href="/safety-prescribing">
              <div>
                <h3>Safety, Monitoring &amp; Prescribing</h3>
                <p>Dosing, contraindications, the dementia warning, and metabolic monitoring.</p>
              </div>
              <div className="topic-tile__art">
                <TopicArt kind="shield" />
              </div>
              <span className="topic-tile__go" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="topic-tile" href="/references">
              <div>
                <h3>References &amp; Resources</h3>
                <p>SmPC, PIL, clinical citations, and medical abbreviations.</p>
              </div>
              <div className="topic-tile__art">
                <TopicArt kind="book" />
              </div>
              <span className="topic-tile__go" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>

        <section className="s s--open" id="about">
          <div className="about-block">
            <div>
              <p className="eb">Pharmacology</p>
              <h2>About olanzapine</h2>
              <p>
                Olanzapine is an antipsychotic, antimanic and mood stabilising agent with activity across multiple
                neurotransmitter receptor systems, including dopamine and serotonin receptors. Its pharmacological
                profile is relevant to its therapeutic effects and adverse-reaction profile.
              </p>
              <p>
                Understanding this profile alongside the clinical evidence and approved product information supports
                informed prescribing decisions.
              </p>
              <Link className="more" href="/mechanism-of-action">
                Explore mechanism of action →
              </Link>
            </div>
            <figure id="receptors">
              <div className="receptor-row" role="list" aria-label="Receptor families with olanzapine affinity in preclinical studies">
                <div role="listitem">
                  <b>
                    D<sub>1–5</sub>
                  </b>
                  <span>Dopamine</span>
                </div>
                <div role="listitem">
                  <b>5-HT</b>
                  <span>Serotonin 2A/2C, 3, 6</span>
                </div>
                <div role="listitem">
                  <b>
                    H<sub>1</sub>
                  </b>
                  <span>Histamine</span>
                </div>
                <div role="listitem">
                  <b>
                    M<sub>1–5</sub>
                  </b>
                  <span>Muscarinic</span>
                </div>
                <div role="listitem">
                  <b>
                    α<sub>1</sub>
                  </b>
                  <span>Adrenergic</span>
                </div>
              </div>
              <figcaption>
                Receptor families at which olanzapine showed affinity (K<sub>i</sub> &lt; 100 nM) in preclinical
                studies. Order does not indicate relative affinity.
                <Cite n={1} section="5.1" />
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="s" id="pi">
          <div className="pi">
            <div>
              <p className="eb">Important prescribing information</p>
              <h2>Consult the approved product information before prescribing</h2>
              <p>
                Zyprexa is a prescription medicine. Treatment should be initiated and monitored by an appropriately
                qualified healthcare professional. The approved product information should be consulted before
                prescribing, particularly for contraindications, metabolic effects, interactions, special populations
                and other important precautions.
              </p>
            </div>
            <div className="pi__actions">
              <a
                href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Summary of Product Characteristics ↗
              </a>
              <Link href="/safety-prescribing">Safety and prescribing summary</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

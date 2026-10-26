import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { OccupancyChart } from "@/components/OccupancyChart";

export const metadata: Metadata = {
  title: "Mechanism of action",
  description: "Receptor-binding profile, receptor occupancy and the clinical relevance of olanzapine pharmacology.",
};

const families = [
  {
    id: "r-dopamine",
    title: "Dopamine receptor activity",
    subtypes: "D1, D2, D3, D4, D5",
    kind: "Described in relation to antipsychotic activity",
    body: (
      <>
        <p>
          Olanzapine has affinity for dopamine receptors, including D2 receptors.
          <Cite n={1} section="5.1" />
        </p>
        <p>
          Dopamine receptor antagonism is relevant to its antipsychotic activity. Dopaminergic signalling is involved
          in multiple brain functions, and the relationship between receptor activity and individual symptom domains is
          complex.
        </p>
      </>
    ),
  },
  {
    id: "r-serotonin",
    title: "Serotonin receptor activity",
    subtypes: "5-HT2A/2C, 5-HT3, 5-HT6",
    kind: "Described in relation to antipsychotic activity",
    body: (
      <>
        <p>
          Olanzapine also has affinity for serotonin receptors, including 5-HT2A and 5-HT2C receptors.
          <Cite n={1} section="5.1" />
        </p>
        <p>
          Its serotonin and dopamine receptor activity contributes to its overall pharmacological profile. However, the
          clinical effects of olanzapine cannot be attributed to one receptor interaction alone.
        </p>
      </>
    ),
  },
  {
    id: "r-histamine",
    title: "Histamine H1 receptors",
    subtypes: "H1",
    kind: "Described in relation to adverse effects",
    body: (
      <p>
        Relevant to effects such as somnolence and increased appetite.
        <Cite n={13} section="12.2" />
      </p>
    ),
  },
  {
    id: "r-muscarinic",
    title: "Muscarinic receptors",
    subtypes: "M1–M5",
    kind: "Described in relation to adverse effects",
    body: (
      <p>
        Relevant to anticholinergic adverse effects.
        <Cite n={13} section="12.2" />
      </p>
    ),
  },
  {
    id: "r-alpha",
    title: "Alpha-1 adrenergic receptors",
    subtypes: "α1",
    kind: "Described in relation to adverse effects",
    body: (
      <p>
        Relevant to orthostatic hypotension and dizziness.
        <Cite n={13} section="12.2" />
      </p>
    ),
  },
];

export default function MechanismPage() {
  return (
    <main id="app">
      <div className="hero hero--text">
        <div className="w">
          <div className="hero-copy">
            <p className="eb">Mechanism of action</p>
            <h1 className="serif">Understanding the pharmacology of olanzapine</h1>
            <p>A broad receptor-binding profile contributes to its pharmacological effects.</p>
            <p>
              Olanzapine is an antipsychotic, antimanic and mood-stabilising agent with activity across several
              neurotransmitter receptor systems.
              <Cite n={1} section="5.1" />
            </p>
            <div className="hero-tabs">
              <a className="btn" href="#receptor-profile">
                Receptor profile
              </a>
              <a className="btn g" href="#occupancy">
                Receptor occupancy
              </a>
              <a className="btn g" href="#interpretation">
                Clinical relevance
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true" />
        </div>
      </div>

      <div className="w">
        <section className="s" id="receptor-profile">
          <h2>Receptor-binding profile</h2>

          {/* Top two more content boxes using full width across 2 columns */}
          <div className="g2" style={{ marginBottom: 18 }}>
            {families.slice(0, 2).map((family) => (
              <article className="card" id={family.id} key={family.id} style={{ padding: 24 }}>
                <p className="eb">{family.kind}</p>
                <h3>{family.title}</h3>
                <p>
                  <b>{family.subtypes}</b>
                </p>
                {family.body}
              </article>
            ))}
          </div>

          {/* Downline with the 3 smaller content boxes */}
          <div className="g3">
            {families.slice(2).map((family) => (
              <article className="card" id={family.id} key={family.id} style={{ padding: 22 }}>
                <p className="eb">{family.kind}</p>
                <h3>{family.title}</h3>
                <p>
                  <b>{family.subtypes}</b>
                </p>
                {family.body}
              </article>
            ))}
          </div>
          <p className="source-line" style={{ marginTop: 14 }}>
            Receptor families at which olanzapine showed affinity (Ki &lt; 100 nM) in preclinical studies.
            Relative affinities are not represented. These interactions help explain why treatment selection and
            monitoring must consider both therapeutic objectives and potential adverse effects.
            <Cite n={1} section="5.1" />
          </p>
        </section>

        <section className="s" id="occupancy">
          <h2>5-HT2 and D2 occupancy across the dose range</h2>
          <p>
            Olanzapine has greater affinity for serotonin 5-HT2 than dopamine D2 receptors. In a PET study in patients
            with schizophrenia, 5-HT2 occupancy was above 90% at every dose, while D2 occupancy rose with dose.
            <Cite n={[1, 12]} />
          </p>
          <OccupancyChart />
          <p className="source-line" style={{ marginTop: 14 }}>
            Individual occupancy in 12 patients; numbers show mean D2 occupancy per dose. Redrawn from Kapur et al.
            1998, Table 1. Doses above 20 mg/day reported in the paper are not shown.
            <Cite n={12} />
          </p>
        </section>

        <section className="s" id="interpretation">
          <h2>From pharmacology to clinical practice</h2>
          <p>
            A mechanism-of-action explanation provides context for understanding the pharmacology of olanzapine. It
            does not, by itself, establish the magnitude of clinical benefit or predict the response of an
            individual patient.
          </p>
          <p>Clinical efficacy and safety should be judged on the clinical evidence and the prescribing information.</p>
          <div className="row" style={{ marginTop: 22 }}>
            <Link className="btn" href="/clinical-evidence">
              Review the clinical evidence →
            </Link>
            <Link className="btn g" href="/safety-monitoring">
              Safety and prescribing
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

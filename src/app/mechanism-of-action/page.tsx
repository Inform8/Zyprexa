"use client";

import { useState } from "react";
import { AreaChart } from "@/components/Figures";
import { Cite } from "@/components/Cite";

interface ReceptorInfo {
  code: string;
  name: string;
  short: string;
  system: string;
  color: string;
  dots: string;
  desc: string;
  note: string;
  x: number;
  y: number;
}

const RECEPTORS: Record<string, ReceptorInfo> = {
  D: {
    code: "D₂",
    name: "Dopamine D₂ (D₁–D₅)",
    short: "D₂ (Dopamine)",
    system: "Dopaminergic system · Antagonist profile",
    color: "#2563eb",
    dots: "Ki < 100 nM · preclinical",
    desc: "Olanzapine has affinity for dopamine receptors, including D2 receptors. Dopamine receptor antagonism is relevant to its antipsychotic activity. Dopaminergic signalling is involved in multiple brain functions, and the relationship between receptor activity and individual symptom domains is complex.",
    note: "Described in relation to antipsychotic activity. Relative affinity is not shown.",
    x: 50,
    y: 16,
  },
  S: {
    code: "5-HT₂A",
    name: "Serotonin 5-HT₂A (5-HT₂A/2C, 3, 6)",
    short: "5-HT₂A (Serotonin)",
    system: "Serotonergic system · Antagonist profile",
    color: "#db2777",
    dots: "Ki < 100 nM · preclinical",
    desc: "Olanzapine also has affinity for serotonin receptors, including 5-HT2A and 5-HT2C. Its serotonin and dopamine receptor activity contributes to its overall pharmacological profile. The clinical effects of olanzapine cannot be attributed to one receptor interaction alone.",
    note: "Described in relation to antipsychotic activity. Relative affinity is not shown.",
    x: 78,
    y: 40,
  },
  H: {
    code: "H₁",
    name: "Histamine H₁",
    short: "H₁ (Histamine)",
    system: "Histaminergic system · Antagonist profile",
    color: "#059669",
    dots: "Ki < 100 nM · preclinical",
    desc: "Preclinical binding profiles indicate affinity for histamine H1 receptors. In vitro affinity does not translate directly into clinical efficacy, potency, or a causal link to a particular adverse reaction.",
    note: "EU SmPC section 5.1 lists the affinity. It does not attribute somnolence or increased appetite to this receptor.",
    x: 62,
    y: 80,
  },
  M: {
    code: "M₁–₅",
    name: "Muscarinic M₁–₅",
    short: "M₁–M₅ (Muscarinic)",
    system: "Muscarinic system · Antagonist profile",
    color: "#7c3aed",
    dots: "Ki < 100 nM · preclinical",
    desc: "Preclinical binding profiles indicate affinity for muscarinic M1–M5 receptors, which may be relevant to observed clinical tolerability. In vitro affinity does not by itself establish a clinical effect.",
    note: "EU SmPC section 5.1 lists the affinity. It does not attribute anticholinergic adverse effects to these receptors.",
    x: 30,
    y: 80,
  },
  A: {
    code: "α₁",
    name: "Adrenergic α₁",
    short: "α₁ (Adrenergic)",
    system: "Adrenergic system · Antagonist profile",
    color: "#d97706",
    dots: "Ki < 100 nM · preclinical",
    desc: "Preclinical binding profiles indicate affinity for alpha-1 adrenergic receptors, which may be relevant to observed clinical tolerability. In vitro affinity does not by itself establish a clinical effect.",
    note: "EU SmPC section 5.1 lists the affinity. It does not attribute orthostatic hypotension or dizziness to this receptor.",
    x: 18,
    y: 40,
  },
};

export default function MechanismOfActionPage() {
  const [selectedKey, setSelectedKey] = useState<string>("D");
  const selected = RECEPTORS[selectedKey];

  return (
    <main id="app">
      {/* Editorial Hero */}
      <div className="hero">
        <div className="w">
          <div>
            <p className="eb">Pharmacology</p>
            <h1 className="serif">Understanding the pharmacology of olanzapine</h1>
            <p>A broad receptor-binding profile contributes to its pharmacological effects.</p>
            <div className="row">
              <a className="btn" href="#systems">
                Interactive receptor map ↓
              </a>
              <a className="btn g" href="#pet">
                PET occupancy data
              </a>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/moa-receptors.jpg"
              alt="Brain with dopamine, serotonin, histamine, muscarinic, and adrenergic receptor pathways"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="w">
        {/* Overview */}
        <section className="s" id="overview">
          <h2>Pharmacological profile overview</h2>
          <p className="story">
            Olanzapine is an antipsychotic, antimanic and mood-stabilising agent with activity across several
            neurotransmitter receptor systems.
            <Cite n={1} section="5.1" />
          </p>
          <p className="story">
            Its pharmacological profile includes activity at serotonin, dopamine, muscarinic, histamine and alpha-1
            adrenergic receptors. Affinity in preclinical studies (Ki &lt; 100 nM) does not translate directly into
            clinical efficacy or potency, and the EU SmPC does not assign individual adverse reactions to single
            receptors.
          </p>
        </section>

        {/* Interactive Receptor Map */}
        <section className="s" id="systems">
          <div className="spectrum-head">
            <h2>Receptor binding map</h2>
            <p>Click any receptor node to inspect binding affinity and clinical correlation<Cite n={1} section="5.1" /></p>
          </div>
          <div className="bind">
            <div className="bind__stage">
              <svg className="bind__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {Object.entries(RECEPTORS).map(([key, r]) => (
                  <line
                    key={key}
                    x1={r.x}
                    y1={r.y}
                    x2={50}
                    y2={48}
                    stroke={r.color}
                    strokeWidth={selectedKey === key ? 2.5 : 1.5}
                    vectorEffect="non-scaling-stroke"
                    opacity={selectedKey === key ? 0.95 : 0.4}
                  />
                ))}
              </svg>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/moa-brain-receptors.jpg" alt="" className="bind__brain" />
              {Object.entries(RECEPTORS).map(([key, r]) => (
                <button
                  key={key}
                  type="button"
                  className={selectedKey === key ? "bind__node is-on" : "bind__node"}
                  style={{ left: `${r.x}%`, top: `${r.y}%`, color: r.color, borderColor: r.color }}
                  onClick={() => setSelectedKey(key)}
                  aria-pressed={selectedKey === key}
                >
                  {r.short}
                </button>
              ))}
            </div>
            <aside className="bind__detail">
              <span className="bind__code">{selected.code}</span>
              <h3>{selected.name}</h3>
              <p className="bind__system">{selected.system}</p>
              <div className="bind__stat">
                <span>Preclinical binding affinity</span>
                <b>{selected.dots}</b>
              </div>
              <p>{selected.desc}</p>
              <p className="source-line">
                Affinity from EU SmPC section 5.1.
                <Cite n={1} section="5.1" />
                {(selectedKey === "D" || selectedKey === "S") && (
                  <>
                    {" "}
                    Occupancy at clinical doses from Kapur 1998.
                    <Cite n={12} />
                  </>
                )}
              </p>
              <div className="bind__note" style={{ color: selected.color, borderColor: selected.color }}>
                {selected.note}
              </div>
            </aside>
          </div>
        </section>

        {/* PET Occupancy */}
        <section className="s" id="pet">
          <h2>In vivo PET receptor occupancy</h2>
          <p className="lead">Kapur et al. 1998; Figure 2</p>
          <div className="grid g2" style={{ alignItems: "stretch" }}>
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3>Striatal D₂ occupancy at steady state (%)</h3>
                <AreaChart
                  label="Striatal D2 occupancy by dose"
                  yMax={100}
                  points={[
                    { label: "5 mg", value: 55, display: "55% · observed range 43–64%" },
                    { label: "10 mg", value: 73, display: "73% · observed range 71–75%" },
                    { label: "15 mg", value: 75, display: "75% · observed range 73–76%" },
                    { label: "20 mg", value: 76, display: "76% · observed range 74–80%" },
                  ]}
                />
              </div>
              <p style={{ marginTop: "8px", fontSize: "12.5px" }}>
                Observed steady-state occupancy ranges: 43–64%, 71–75%, 73–76%, and 74–80%.
              </p>
            </div>

            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3>5-HT₂ occupancy</h3>
                <div className="dnr">
                  <div>
                    <div
                      className="dn"
                      style={
                        {
                          "--p": 90,
                          "--c": "#db2777",
                        } as React.CSSProperties
                      }
                    >
                      <b>&gt;90%</b>
                    </div>
                    Exceeded 90% across all clinical doses (5 to 20 mg/day)
                  </div>
                </div>

                <h3 style={{ marginTop: "16px" }}>How to read the occupancy data</h3>
                <p style={{ marginTop: "6px" }}>
                  Across 10–20 mg/day, individual D<sub>2</sub> occupancy ranged from 71% to 80%. Twelve patients
                  were studied (three per dose). Receptor occupancy does not by itself predict the clinical response
                  of an individual patient.
                  <Cite n={12} />
                </p>
              </div>
              <p style={{ fontSize: "12px", color: "var(--mut)", marginTop: "16px" }}>
                Source: Kapur S et al. Am J Psychiatry. 1998;155(7):921–928.
                <Cite n={12} />
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Relevance */}
        <section className="s" id="relevance">
          <h2>From pharmacology to clinical practice</h2>
          <p className="story">
            A mechanism-of-action explanation provides context for understanding the pharmacology of olanzapine. It
            does not, by itself, establish the magnitude of clinical benefit or predict the response of an individual
            patient.
          </p>
          <p className="story">
            Clinical efficacy and safety should be evaluated using the relevant clinical evidence and approved
            product information.
          </p>
          <div className="row">
            <a className="btn" href="/clinical-evidence">
              Review the clinical evidence
            </a>
            <a className="btn g" href="/safety-prescribing">
              Safety and prescribing
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import {
  IconBrain,
  IconCheck,
  IconShield,
  IconTarget,
} from "@/components/Icons";

interface ReceptorInfo {
  code: string;
  name: string;
  color: string;
  dots: string;
  desc: string;
  x: number;
  y: number;
}

const RECEPTORS: Record<string, ReceptorInfo> = {
  D: {
    code: "D₂",
    name: "Dopamine D₂ (D₁–D₅)",
    color: "#2563eb",
    dots: "●●●●○ (High)",
    desc: "Antipsychotic and antimanic efficacy via mesolimbic antagonism. Modulated striatal occupancy (70–80%) maintains low extrapyramidal symptom (EPS) liability.",
    x: 78,
    y: 22,
  },
  S: {
    code: "5-HT₂A",
    name: "Serotonin 5-HT₂A (5-HT₂A/2C, 3, 6)",
    color: "#db2777",
    dots: "●●●●● (Very High)",
    desc: "Low EPS risk through striatal dopamine disinhibition; modulation of cortical dopamine transmission for negative and depressive symptom improvement.",
    x: 22,
    y: 24,
  },
  H: {
    code: "H₁",
    name: "Histamine H₁",
    color: "#059669",
    dots: "●●●●● (Very High)",
    desc: "Calming and sedating effect in acute agitation; somnolence; central appetite stimulation contributing to clinical weight gain and metabolic changes.",
    x: 18,
    y: 74,
  },
  M: {
    code: "M₁–₅",
    name: "Muscarinic M₁–₅",
    color: "#7c3aed",
    dots: "●●●●○ (High)",
    desc: "Intrinsic anticholinergic activity providing protection against acute dystonia; can contribute to peripheral anticholinergic effects (dry mouth, constipation).",
    x: 82,
    y: 72,
  },
  A: {
    code: "α₁",
    name: "Adrenergic α₁",
    color: "#d97706",
    dots: "●●●●○ (Moderate-High)",
    desc: "Peripheral vasodilation mediating transient orthostatic hypotension, reflex tachycardia, and dizziness, especially during initial dose titration.",
    x: 50,
    y: 86,
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
            <p className="eb">Pharmacology &amp; Neurobiology</p>
            <h1 className="serif">Mechanism of Action</h1>
            <p>
              A multi-receptor profile that may help address the complex symptoms of schizophrenia and bipolar
              disorder.
            </p>
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
              src="/assets/moa-brain-receptors.jpg"
              alt="Artistic multi-receptor ligand binding model"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="w">
        {/* Overview */}
        <section className="s" id="overview">
          <h2>Pharmacological profile overview</h2>
          <div className="card">
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Olanzapine is an atypical antipsychotic, antimanic, and mood-stabilizing agent characterized by a
              broad in vitro binding profile across dopamine, serotonin, histamine, muscarinic, and adrenergic
              receptors with high preclinical affinity (K<sub>i</sub> &lt; 100 nM).
            </p>
          </div>
        </section>

        {/* Receptor Binding Table */}
        <section className="s" id="profile">
          <h2>Receptor-binding profile &amp; clinical implications</h2>
          <div className="card tw" style={{ padding: 0 }}>
            <table>
              <thead>
                <tr>
                  <th>Receptor system</th>
                  <th>Relative affinity</th>
                  <th>Potential clinical relevance</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(RECEPTORS).map((r) => (
                  <tr key={r.code}>
                    <td>
                      <b>{r.name}</b>
                    </td>
                    <td>
                      <span className="dots">{r.dots}</span>
                    </td>
                    <td>{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive Receptor Map */}
        <section className="s" id="systems">
          <h2>Receptor systems – interactive map</h2>
          <p className="lead">Select a receptor node to explore its pharmacological profile and clinical role.</p>
          <div className="grid g2" style={{ gridTemplateColumns: "1.2fr .8fr", alignItems: "stretch" }}>
            <div className="map">
              <div className="ctr">olanzapine</div>
              {Object.entries(RECEPTORS).map(([key, r]) => (
                <button
                  key={key}
                  type="button"
                  className={selectedKey === key ? "on" : ""}
                  style={{
                    left: `${r.x}%`,
                    top: `${r.y}%`,
                    background: r.color,
                  }}
                  onClick={() => setSelectedKey(key)}
                  aria-label={`Select ${r.name}`}
                >
                  {r.code}
                </button>
              ))}
            </div>

            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div
                  className="badge-code"
                  style={{
                    background: selected.color,
                    color: "#fff",
                    fontWeight: 700,
                    width: "48px",
                    height: "48px",
                    fontSize: "16px",
                  }}
                >
                  {selected.code}
                </div>
                <h3 style={{ marginTop: "12px", fontSize: "18px" }}>{selected.name}</h3>
                <p style={{ marginTop: "6px" }}>
                  <b>Relative affinity:</b> <span className="dots">{selected.dots}</span>
                </p>
                <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.6" }}>{selected.desc}</p>
              </div>
              <p style={{ fontSize: "12px", color: "var(--mut)", marginTop: "16px" }}>
                Preclinical binding constant Ki &lt; 100 nM; EU SmPC section 5.1.
              </p>
            </div>
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
                <div className="cols">
                  <div
                    className="band"
                    style={{
                      bottom: "70%",
                      height: "10%",
                    }}
                  >
                    70–80% therapeutic window
                  </div>
                  <div>
                    <b>55%</b>
                    <i style={{ height: "55%", background: "#7c4dff" }} />
                  </div>
                  <div>
                    <b>73%</b>
                    <i style={{ height: "73%", background: "#7c4dff" }} />
                  </div>
                  <div>
                    <b>75%</b>
                    <i style={{ height: "75%", background: "#7c4dff" }} />
                  </div>
                  <div>
                    <b>76%</b>
                    <i style={{ height: "76%", background: "#7c4dff" }} />
                  </div>
                </div>
                <div className="cl">
                  <span>5 mg/day</span>
                  <span>10 mg/day</span>
                  <span>15 mg/day</span>
                  <span>20 mg/day</span>
                </div>
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

                <h3 style={{ marginTop: "16px" }}>Therapeutic window</h3>
                <p style={{ marginTop: "6px" }}>
                  Approved clinical doses (10–20 mg/day) maintain striatal D₂ receptor occupancy within the optimal
                  70%–80% window, providing full antipsychotic efficacy while staying below the 80% threshold where
                  extrapyramidal symptom (EPS) incidence rises sharply.
                </p>
              </div>
              <p style={{ fontSize: "12px", color: "var(--mut)", marginTop: "16px" }}>
                Source: Kapur S et al. Am J Psychiatry. 1998;155(7):921–928.
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Relevance */}
        <section className="s" id="relevance">
          <h2>From pharmacology to clinical practice</h2>
          <div className="grid g3">
            <div className="card">
              <h3>Symptom control</h3>
              <p>
                Dual dopamine/serotonin antagonism effectively targets psychotic symptoms, mania, and
                secondary depressive features.
              </p>
            </div>
            <div className="card">
              <h3>Tolerability profile</h3>
              <p>
                Sub-threshold D₂ occupancy preserves motor functioning and lowers prolactin elevation liability
                compared to first-generation neuroleptics.
              </p>
            </div>
            <div className="card">
              <h3>Broad clinical utility</h3>
              <p>
                Efficacy spans acute emergency stabilization through long-term recurrence prevention in
                schizophrenia and bipolar I disorder.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
  label: [number, number];
  dot: [number, number];
}

const RECEPTORS: Record<string, ReceptorInfo> = {
  D: {
    code: "D₂",
    name: "Dopamine D₂ (D₁–D₅)",
    short: "D₂ Dopamine",
    system: "Dopaminergic system · Antagonist profile",
    color: "#3b6fd8",
    dots: "Ki < 100 nM · preclinical",
    desc: "Olanzapine has affinity for dopamine receptors, including D2 receptors. Dopamine receptor antagonism is relevant to its antipsychotic activity. Dopaminergic signalling is involved in multiple brain functions, and the relationship between receptor activity and individual symptom domains is complex.",
    note: "Described in relation to antipsychotic activity. Relative affinity is not shown, and the SmPC does not assign a single clinical effect to this receptor alone.",
    label: [50, 14],
    dot: [50, 11],
  },
  S: {
    code: "5-HT₂A",
    name: "Serotonin 5-HT₂A (5-HT₂A/2C, 3, 6)",
    short: "5-HT₂A Serotonin",
    system: "Serotonergic system · Antagonist profile",
    color: "#e23b8c",
    dots: "Ki < 100 nM · preclinical",
    desc: "Olanzapine also has affinity for serotonin receptors, including 5-HT2A and 5-HT2C. Its serotonin and dopamine receptor activity contributes to its overall pharmacological profile. The clinical effects of olanzapine cannot be attributed to one receptor interaction alone.",
    note: "Described in relation to antipsychotic activity. Relative affinity is not shown, and the SmPC does not assign a single clinical effect to this receptor alone.",
    label: [74, 32],
    dot: [74, 30],
  },
  H: {
    code: "H₁",
    name: "Histamine H₁",
    short: "H₁ Histamine",
    system: "Histaminergic system · Antagonist profile",
    color: "#7c3aed",
    dots: "Ki < 100 nM · preclinical",
    desc: "Preclinical binding profiles indicate affinity for histamine H1 receptors. In vitro affinity does not translate directly into clinical efficacy, potency, or a causal link to a particular adverse reaction.",
    note: "The SmPC reports receptor affinity. It does not attribute somnolence or increased appetite to this receptor alone.",
    label: [72, 80],
    dot: [68, 70],
  },
  M: {
    code: "M₁–₅",
    name: "Muscarinic M₁–₅",
    short: "M₁–M₅ Muscarinic",
    system: "Muscarinic system · Antagonist profile",
    color: "#14919b",
    dots: "Ki < 100 nM · preclinical",
    desc: "Preclinical binding profiles indicate affinity for muscarinic M1–M5 receptors. In vitro affinity does not by itself establish a clinical effect.",
    note: "The SmPC reports receptor affinity. It does not attribute anticholinergic adverse effects to these receptors alone.",
    label: [30, 80],
    dot: [56, 74],
  },
  A: {
    code: "α₁",
    name: "Adrenergic α₁",
    short: "α₁ Adrenergic",
    system: "Adrenergic system · Antagonist profile",
    color: "#e08a1e",
    dots: "Ki < 100 nM · preclinical",
    desc: "Preclinical binding profiles indicate affinity for alpha-1 adrenergic receptors. In vitro affinity does not by itself establish a clinical effect.",
    note: "The SmPC reports receptor affinity. It does not attribute orthostatic hypotension or dizziness to this receptor alone.",
    label: [26, 32],
    dot: [30, 34],
  },
};

export default function MechanismOfActionPage() {
  const [selectedKey, setSelectedKey] = useState<string>("D");
  const selected = RECEPTORS[selectedKey];
  const stageRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Record<string, { x1: number; y1: number; x2: number; y2: number }>>({});

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const measure = () => {
      const sr = stage.getBoundingClientRect();
      if (sr.width < 2 || sr.height < 2) return;
      const next: Record<string, { x1: number; y1: number; x2: number; y2: number }> = {};
      for (const key of Object.keys(RECEPTORS)) {
        const dot = stage.querySelector<HTMLElement>(`[data-dot="${key}"]`);
        const label = stage.querySelector<HTMLElement>(`[data-label="${key}"]`);
        if (!dot || !label) continue;
        const d = dot.getBoundingClientRect();
        const l = label.getBoundingClientRect();
        next[key] = {
          x1: d.left + d.width / 2 - sr.left,
          y1: d.top + d.height / 2 - sr.top,
          x2: l.left + l.width / 2 - sr.left,
          y2: l.top + l.height / 2 - sr.top,
        };
      }
      setLines((prev) => {
        const keys = Object.keys(next);
        if (keys.length === Object.keys(prev).length && keys.every((key) => {
          const a = prev[key];
          const b = next[key];
          return a && Math.abs(a.x1 - b.x1) < 0.5 && Math.abs(a.y1 - b.y1) < 0.5 && Math.abs(a.x2 - b.x2) < 0.5 && Math.abs(a.y2 - b.y2) < 0.5;
        })) {
          return prev;
        }
        return next;
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    const img = stage.querySelector("img");
    img?.addEventListener("load", measure);
    const enter = stage.closest(".page-enter");
    enter?.addEventListener("animationend", measure);
    const frame = window.requestAnimationFrame(measure);
    const later = window.setTimeout(measure, 650);
    return () => {
      ro.disconnect();
      img?.removeEventListener("load", measure);
      enter?.removeEventListener("animationend", measure);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(later);
    };
  }, []);

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
            <div className="bind__stage" ref={stageRef}>
              <svg
                className="bind__links"
                viewBox={`0 0 ${stageRef.current?.clientWidth || 100} ${stageRef.current?.clientHeight || 100}`}
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {Object.entries(RECEPTORS).map(([key, r]) => {
                  const line = lines[key];
                  if (!line) return null;
                  const on = selectedKey === key;
                  return (
                    <line
                      key={key}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke={r.color}
                      strokeWidth={on ? 2 : 1.25}
                      vectorEffect="non-scaling-stroke"
                      opacity={on ? 1 : 0.28}
                    />
                  );
                })}
              </svg>
              <div className="bind__figure">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/receptor-brain.png" alt="" className="bind__brain" />
                {Object.entries(RECEPTORS).map(([key, r]) => (
                  <button
                    key={`${key}-dot`}
                    type="button"
                    data-dot={key}
                    className={selectedKey === key ? "bind__dot is-on" : "bind__dot"}
                    style={{ left: `${r.dot[0]}%`, top: `${r.dot[1]}%`, background: r.color }}
                    onClick={() => setSelectedKey(key)}
                    aria-label={r.short}
                  />
                ))}
              </div>
              {Object.entries(RECEPTORS).map(([key, r]) => {
                const on = selectedKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    data-label={key}
                    className={on ? "bind__node is-on" : "bind__node"}
                    style={{ left: `${r.label[0]}%`, top: `${r.label[1]}%`, color: r.color, borderColor: r.color }}
                    onClick={() => setSelectedKey(key)}
                    aria-pressed={on}
                  >
                    <i style={{ background: r.color }} />
                    {r.short}
                  </button>
                );
              })}
            </div>
            <aside className="bind__detail">
              <div className="bind__legend" role="tablist" aria-label="Receptor systems">
                {Object.entries(RECEPTORS).map(([key, r]) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={selectedKey === key}
                    className={selectedKey === key ? "is-on" : ""}
                    onClick={() => setSelectedKey(key)}
                  >
                    {r.code}
                  </button>
                ))}
              </div>
              <div className="bind__head">
                <b style={{ color: selected.color }}>{selected.code}</b>
                <div>
                  <h3>{selected.name}</h3>
                  <p>
                    {selected.system.split(" · ")[0]}
                    <span>{selected.system.split(" · ")[1]}</span>
                  </p>
                </div>
              </div>
              <div className="bind__facts">
                <div>
                  <span>Preclinical binding affinity</span>
                  <strong>K<sub>i</sub> &lt; 100 nM</strong>
                </div>
                <div>
                  <span>Data source</span>
                  <strong>
                    EU SmPC section 5.1
                    <Cite n={1} section="5.1" />
                  </strong>
                </div>
              </div>
              <div className="bind__block">
                <h4>About this receptor</h4>
                <p>{selected.desc}</p>
              </div>
              <div className="bind__block">
                <h4>Clinical context</h4>
                <p>{selected.note}</p>
                {(selectedKey === "D" || selectedKey === "S") && (
                  <p>
                    Occupancy at clinical doses is reported in Kapur 1998.
                    <Cite n={12} />
                  </p>
                )}
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

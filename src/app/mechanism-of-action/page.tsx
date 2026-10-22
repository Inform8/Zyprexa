"use client";

import { useEffect, useState } from "react";
import { AreaChart } from "@/components/Figures";
import { Cite } from "@/components/Cite";
import { IconAlert, IconBook, IconChart, IconDoc, IconRepeat } from "@/components/Icons";

interface ReceptorInfo {
  code: string;
  name: string;
  short: string;
  system: string;
  color: string;
  desc: string;
  note: string;
  dot: { x: number; y: number };
  badge: { x: number; y: number; w: number; h: number };
  line: { x1: number; y1: number; x2: number; y2: number };
}

const RECEPTORS: Record<string, ReceptorInfo> = {
  D: {
    code: "D₂",
    name: "Dopamine D₂ (D₁–D₅)",
    short: "D₂ Dopamine",
    system: "Dopaminergic system · Antagonist profile",
    color: "#0084ff",
    desc: "Olanzapine has affinity for dopamine receptors, including D2 receptors. Dopamine receptor antagonism is relevant to its antipsychotic activity. Dopaminergic signalling is involved in multiple brain functions, and the relationship between receptor activity and individual symptom domains is complex.",
    note: "Described in relation to antipsychotic activity. Relative affinity is not shown, and the SmPC does not assign a single clinical effect to this receptor alone.",
    dot: { x: 481, y: 275 },
    badge: { x: 404, y: 32, w: 180, h: 42 },
    line: { x1: 494, y1: 74, x2: 481, y2: 275 },
  },
  S: {
    code: "5-HT₂A",
    name: "Serotonin 5-HT₂A (5-HT₂A/2C, 3, 6)",
    short: "5-HT₂A Serotonin",
    system: "Serotonergic system · Antagonist profile",
    color: "#ff2a70",
    desc: "Olanzapine also has affinity for serotonin receptors, including 5-HT2A and 5-HT2C. Its serotonin and dopamine receptor activity contributes to its overall pharmacological profile. The clinical effects of olanzapine cannot be attributed to one receptor interaction alone.",
    note: "Described in relation to antipsychotic activity. Relative affinity is not shown, and the SmPC does not assign a single clinical effect to this receptor alone.",
    dot: { x: 613, y: 240 },
    badge: { x: 704, y: 166, w: 194, h: 42 },
    line: { x1: 704, y1: 187, x2: 613, y2: 240 },
  },
  A: {
    code: "α₁",
    name: "Adrenergic α₁",
    short: "α₁ Adrenergic",
    system: "Adrenergic system · Antagonist profile",
    color: "#ff7e00",
    desc: "Preclinical binding profiles indicate affinity for alpha-1 adrenergic receptors. In vitro affinity does not by itself establish a clinical effect.",
    note: "The SmPC reports receptor affinity. It does not attribute orthostatic hypotension or dizziness to this receptor alone.",
    dot: { x: 323, y: 268 },
    badge: { x: 52, y: 184, w: 180, h: 42 },
    line: { x1: 232, y1: 205, x2: 323, y2: 268 },
  },
  M: {
    code: "M₁–M₅",
    name: "Muscarinic M₁–₅",
    short: "M₁–M₅ Muscarinic",
    system: "Muscarinic system · Antagonist profile",
    color: "#00b894",
    desc: "Preclinical binding profiles indicate affinity for muscarinic M1–M5 receptors. In vitro affinity does not by itself establish a clinical effect.",
    note: "The SmPC reports receptor affinity. It does not attribute anticholinergic adverse effects to these receptors alone.",
    dot: { x: 447, y: 344 },
    badge: { x: 142, y: 448, w: 196, h: 42 },
    line: { x1: 338, y1: 460, x2: 447, y2: 344 },
  },
  H: {
    code: "H₁",
    name: "Histamine H₁",
    short: "H₁ Histamine",
    system: "Histaminergic system · Antagonist profile",
    color: "#5822b4",
    desc: "Preclinical binding profiles indicate affinity for histamine H1 receptors. In vitro affinity does not translate directly into clinical efficacy, potency, or a causal link to a particular adverse reaction.",
    note: "The SmPC reports receptor affinity. It does not attribute somnolence or increased appetite to this receptor alone.",
    dot: { x: 601, y: 424 },
    badge: { x: 688, y: 482, w: 176, h: 42 },
    line: { x1: 688, y1: 496, x2: 601, y2: 424 },
  },
};

function receptorFromLocation() {
  if (typeof window === "undefined") return "";
  const key = new URLSearchParams(window.location.search).get("r") ?? "";
  return key in RECEPTORS ? key : "";
}

export default function MechanismOfActionPage() {
  const [selectedKey, setSelectedKey] = useState<string>("H");
  const selected = RECEPTORS[selectedKey];

  const selectReceptor = (key: string) => {
    setSelectedKey(key);
    const url = new URL(window.location.href);
    url.searchParams.set("r", key);
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };

  useEffect(() => {
    const linked = receptorFromLocation();
    if (linked) setSelectedKey(linked);
    if (window.location.hash === "#systems") {
      document.getElementById("systems")?.scrollIntoView({ block: "start" });
    }
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
            <img src="/assets/hero-brain-3d.jpg" alt="Brain neural network illustration" />
          </div>
        </div>
      </div>

      <div className="w">
        {/* Core Receptor Systems */}
        <section className="s" id="overview">
          <h2>Receptor profile overview</h2>
          <p className="lead">
            Olanzapine exhibits a broad in vitro receptor-binding profile across multiple neurotransmitter systems.
            European SmPC section 5.1 describes preclinical affinities for serotonin, dopamine, muscarinic, histamine
            and adrenergic receptor families.
            <Cite n={1} section="5.1" />
          </p>
          <div className="grid g3">
            <div className="card">
              <h3>Dopaminergic system</h3>
              <p>
                Preclinical binding to dopamine D₁, D₂, D₃, D₄, and D₅ receptors. Dopamine antagonism is a recognized
                mechanism in antipsychotic activity.
              </p>
            </div>
            <div className="card">
              <h3>Serotonergic system</h3>
              <p>
                Affinity for serotonin 5-HT₂A, 5-HT₂C, 5-HT₃, and 5-HT₆ receptors. The 5-HT₂A/D₂ ratio is a defining
                characteristic of atypical antipsychotics.
              </p>
            </div>
            <div className="card">
              <h3>Other systems</h3>
              <p>
                In vitro affinity for cholinergic muscarinic receptors (M₁–M₅), histamine H₁ receptors, and α₁-adrenergic
                receptors.
              </p>
            </div>
          </div>
          <p className="source-line">
            Source: EU SmPC section 5.1. The table of binding profiles in the SmPC reports affinity for 5-HT₂A/2C, 5-HT₃,
            5-HT₆; D₁, D₂, D₃, D₄, D₅; muscarinic M₁–M₅; histamine H₁; and α₁-adrenergic receptors.
            <Cite n={1} section="5.1" />
          </p>
        </section>

        {/* Receptor systems comparison */}
        <section className="s" id="systems-overview">
          <h2>Receptor systems &amp; clinical relevance</h2>
          <p className="lead">
            The pharmacological profile involves simultaneous interactions across dopaminergic, serotonergic,
            cholinergic, histaminergic and adrenergic systems.
          </p>
          <div className="table-wrap card">
            <table>
              <thead>
                <tr>
                  <th>Receptor System</th>
                  <th>Receptors Identified in SmPC</th>
                  <th>Preclinical Binding</th>
                  <th>Clinical Context from SmPC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Serotonergic</b></td>
                  <td>5-HT₂A, 5-HT₂C, 5-HT₃, 5-HT₆</td>
                  <td>Affinity (K<sub>i</sub> &lt; 100 nM)</td>
                  <td>Antipsychotic activity; 5-HT₂A antagonism contributes to atypical profile</td>
                </tr>
                <tr>
                  <td><b>Dopaminergic</b></td>
                  <td>D₁, D₂, D₃, D₄, D₅</td>
                  <td>Affinity (K<sub>i</sub> &lt; 100 nM)</td>
                  <td>Antipsychotic activity mediated primarily through D₂ antagonism</td>
                </tr>
                <tr>
                  <td><b>Muscarinic</b></td>
                  <td>M₁–M₅</td>
                  <td>Affinity (K<sub>i</sub> &lt; 100 nM)</td>
                  <td>Anticholinergic effects; preclinical evidence of receptor interaction</td>
                </tr>
                <tr>
                  <td><b>Histaminergic</b></td>
                  <td>H₁</td>
                  <td>Affinity (K<sub>i</sub> &lt; 100 nM)</td>
                  <td>Associated with somnolence and weight gain in clinical use</td>
                </tr>
                <tr>
                  <td><b>Adrenergic</b></td>
                  <td>α₁</td>
                  <td>Affinity (K<sub>i</sub> &lt; 100 nM)</td>
                  <td>May contribute to orthostatic hypotension</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="source-line">
            *EU SmPC section 5.1 notes affinities for 5-HT₂A/2C, 5-HT₃, 5-HT₆; D₁, D₂, D₃, D₄, D₅; muscarinic M₁–M₅; H₁; and α₁
            adrenergic receptors. Affinity in preclinical studies (Ki &lt; 100 nM) does not translate directly into
            clinical efficacy or potency, and the EU SmPC does not assign individual adverse reactions to single
            receptors.
          </p>
        </section>

        {/* Interactive Receptor Map */}
        <section className="s" id="systems">
          <div className="spectrum-head">
            <h2>Receptor binding map</h2>
            <p>Select a receptor to view binding data and clinical context<Cite n={1} section="5.1" /></p>
          </div>
          <div className="bind">
            <div className="bind__stage">
              <div className="bind__stage-wrapper">
                <svg
                  className="bind__svg"
                  viewBox="0 0 930 638"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id="badgeShadow" x="-10%" y="-20%" width="120%" height="150%">
                      <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="rgba(0,0,0,0.12)" />
                    </filter>
                    <filter id="activeShadow" x="-15%" y="-25%" width="130%" height="160%">
                      <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="rgba(88,34,180,0.32)" />
                    </filter>
                  </defs>

                  {/* Subtle radial glow behind brain */}
                  <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(244, 240, 255, 0.7)" />
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                  </radialGradient>
                  <ellipse cx="465" cy="320" rx="420" ry="280" fill="url(#brainGlow)" />

                  {/* Clean High-Resolution Brain Illustration */}
                  <image
                    href="/assets/receptor-brain-hd.png"
                    x="55"
                    y="46"
                    width="820"
                    height="546"
                    preserveAspectRatio="xMidYMid meet"
                  />

                  {/* Leader Lines */}
                  {Object.entries(RECEPTORS).map(([key, r]) => {
                    const active = selectedKey === key;
                    return (
                      <line
                        key={`line-${key}`}
                        x1={r.line.x1}
                        y1={r.line.y1}
                        x2={r.line.x2}
                        y2={r.line.y2}
                        stroke={r.color}
                        strokeWidth={active ? 3.5 : 2}
                        opacity={active ? 1 : 0.75}
                        strokeLinecap="round"
                        className="bind__leader"
                      />
                    );
                  })}

                  {/* Target Halos & Dots */}
                  {Object.entries(RECEPTORS).map(([key, r]) => {
                    const active = selectedKey === key;
                    return (
                      <g
                        key={`target-${key}`}
                        className="bind__target-grp"
                        onClick={() => selectReceptor(key)}
                        role="button"
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                        aria-label={`Target ${r.short}`}
                      >
                        <circle
                          cx={r.dot.x}
                          cy={r.dot.y}
                          r={active ? 30 : 24}
                          fill={r.color}
                          fillOpacity={active ? 0.32 : 0.2}
                          className="bind__target-halo"
                        />
                        <circle
                          cx={r.dot.x}
                          cy={r.dot.y}
                          r={10}
                          fill={r.color}
                          stroke="#ffffff"
                          strokeWidth={2.5}
                        />
                      </g>
                    );
                  })}

                  {/* Callout Badges */}
                  {Object.entries(RECEPTORS).map(([key, r]) => {
                    const active = selectedKey === key;
                    const displayName = r.short.replace(r.code, "").trim();
                    return (
                      <g
                        key={`badge-${key}`}
                        className="bind__badge-grp"
                        onClick={() => selectReceptor(key)}
                        role="button"
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                        aria-pressed={active}
                        aria-label={r.short}
                      >
                        <rect
                          x={r.badge.x}
                          y={r.badge.y}
                          width={r.badge.w}
                          height={r.badge.h}
                          rx={21}
                          fill={active ? r.color : "#ffffff"}
                          stroke={r.color}
                          strokeWidth={2}
                          filter={active ? "url(#activeShadow)" : "url(#badgeShadow)"}
                          className="bind__badge-rect"
                        />
                        <text x={r.badge.x + r.badge.w / 2} y={r.badge.y + 26} textAnchor="middle">
                          <tspan
                            fill={active ? "#ffffff" : r.color}
                            fontSize={15}
                            fontWeight={700}
                            fontFamily="var(--font-inter), 'Inter', sans-serif"
                          >
                            {r.code}
                          </tspan>
                          <tspan
                            fill={active ? "#ffffff" : r.color}
                            fontSize={15}
                            fontWeight={700}
                            dx={6}
                            fontFamily="var(--font-inter), 'Inter', sans-serif"
                          >
                            {displayName}
                          </tspan>
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
            <aside className="bind__detail">
              <div className="bind__head">
                <b className="bind__code" style={{ color: selected.color }}>{selected.code}</b>
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
              <p className="bind__note">
                <span>
                  In vitro affinity does not translate directly into clinical efficacy or potency, and the EU SmPC
                  does not assign individual adverse reactions to a single receptor.
                </span>
              </p>
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

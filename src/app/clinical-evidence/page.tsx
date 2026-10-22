"use client";

import { useState } from "react";
import { ColumnChart } from "@/components/Figures";
import { Cite } from "@/components/Cite";

interface Study {
  cat: string;
  pop: string;
  design: string;
  dur: string;
  endpoint: string;
  outcome: string;
}

const STUDIES: Study[] = [
  {
    cat: "Schizophrenia",
    pop: "Schizophrenia (positive & negative symptoms, n > 2,900)",
    design: "2 placebo-controlled, 3 comparator-controlled trials",
    dur: "Not stated in SmPC 5.1",
    endpoint: "Positive & negative symptoms",
    outcome:
      "Statistically significantly greater improvement in negative as well as positive symptoms in 2/2 placebo and 2/3 comparator trials.",
  },
  {
    cat: "Schizophrenia",
    pop: "Schizophrenia with depressive symptoms (n = 1,481, baseline MADRS 16.6)",
    design: "Double-blind vs. haloperidol",
    dur: "Not stated in SmPC 5.1",
    endpoint: "Secondary analysis: MADRS mood score change",
    outcome: "−6.0 olanzapine vs. −3.1 haloperidol (p = 0.001). Statistically significant mood improvement.",
  },
  {
    cat: "Acute mania",
    pop: "Bipolar manic / mixed episode (monotherapy)",
    design: "Double-blind vs. placebo",
    dur: "3 weeks",
    endpoint: "Not specified in SmPC: reduction of manic symptoms",
    outcome: "Superior efficacy to placebo in reduction of manic symptoms over 3 weeks.",
  },
  {
    cat: "Acute mania",
    pop: "Bipolar manic / mixed episode (active comparator)",
    design: "Double-blind vs. divalproex",
    dur: "3 weeks",
    endpoint: "Not specified in SmPC: reduction of manic symptoms",
    outcome: "Superior efficacy to divalproex in reduction of manic symptoms over 3 weeks.",
  },
  {
    cat: "Acute mania",
    pop: "Bipolar manic / mixed episode",
    design: "Double-blind vs. haloperidol",
    dur: "6 & 12 weeks",
    endpoint: "Symptomatic remission rate",
    outcome: "Comparable efficacy results to haloperidol in proportion of patients in symptomatic remission.",
  },
  {
    cat: "Acute mania",
    pop: "Bipolar patients on lithium/valproate ≥ 2 weeks",
    design: "Add-on olanzapine 10 mg vs. mood stabilizer monotherapy",
    dur: "6 weeks",
    endpoint: "Manic symptom reduction",
    outcome: "Greater symptom reduction than lithium or valproate monotherapy.",
  },
  {
    cat: "Recurrence prevention",
    pop: "Manic episode in remission on olanzapine",
    design: "Randomised vs. placebo",
    dur: "12 months",
    endpoint: "Primary: Bipolar recurrence rate",
    outcome: "Statistically significant superiority over placebo; prevented relapse into mania or depression.",
  },
  {
    cat: "Recurrence prevention",
    pop: "Manic episode in remission on olanzapine + lithium",
    design: "Randomised: olanzapine alone vs. lithium alone",
    dur: "12 months",
    endpoint: "Primary: Bipolar recurrence rate",
    outcome: "Statistically non-inferior to lithium: 30.0% vs. 38.3% (p = 0.055).",
  },
  {
    cat: "Recurrence prevention",
    pop: "Manic or mixed episode, stabilised on olanzapine plus lithium or valproate",
    design: "Co-therapy vs. lithium/valproate alone",
    dur: "18 months",
    endpoint: "Delay of bipolar recurrence",
    outcome:
      "Not statistically significantly superior to mood stabilizer monotherapy in delaying syndromic recurrence.",
  },
];

export default function ClinicalEvidencePage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Schizophrenia", "Acute mania", "Recurrence prevention"];

  const filteredStudies =
    filter === "All" ? STUDIES : STUDIES.filter((s) => s.cat === filter);

  return (
    <main id="app">
      {/* Editorial Hero */}
      <div className="hero">
        <div className="w">
          <div>
            <p className="eb">Clinical Evidence · EU SmPC Section 5.1</p>
            <h1 className="serif">Clinical evidence for olanzapine</h1>
            <p>
              Reviewing clinical outcomes in schizophrenia, manic episodes, and recurrence prevention in bipolar
              disorder.
            </p>
            <div className="row">
              <a className="btn" href="#explorer">
                Study explorer ↓
              </a>
              <a className="btn g" href="#schizophrenia">
                Schizophrenia trials
              </a>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/clinical-studies.jpg"
              alt="Clinical study charts, laboratory slide, and research documents"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="w">
        <section className="s">
          <p className="story">
            The clinical evidence for olanzapine includes studies of symptom improvement in schizophrenia, treatment
            of manic episodes and prevention of recurrence in bipolar disorder.
          </p>
          <p className="story">
            Evidence should be considered in the context of the indication, patient population, comparator, endpoint
            and duration of follow-up. Individual study results do not necessarily predict the response of every
            patient.
          </p>
        </section>

        {/* Interactive Study Explorer */}
        <section className="s" id="explorer">
          <h2>Interactive study explorer</h2>
          <p className="lead">
            Complete 9-study dataset from EU SmPC section 5.1. Filter by category.
            <Cite n={1} section="5.1" />
          </p>

          <div className="tabs" id="flt">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={filter === c ? "on" : ""}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="card tw" style={{ padding: 0 }}>
            <table>
              <thead>
                <tr>
                  <th>Population</th>
                  <th>Design &amp; comparator</th>
                  <th>Duration</th>
                  <th>Endpoint</th>
                  <th>Outcome reported in EU SmPC 5.1</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudies.map((s, idx) => (
                  <tr key={idx}>
                    <td>
                      <b>{s.pop}</b>
                    </td>
                    <td>{s.design}</td>
                    <td>{s.dur}</td>
                    <td>{s.endpoint}</td>
                    <td>{s.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="source-line">
            * Duration and other parameters are those of the EU registration trials summarised in SmPC section 5.1.
            Where the SmPC does not state duration, endpoint, sample size, blinding or inclusion criteria, the cell
            says so. Those details are not inferred.
          </p>
          <p className="source-line">
            Primary publications cited here: Beasley et al. 1996 (reference 10) for the 6-week North American
            schizophrenia trial, and Tohen et al. 1999 (reference 11) for the published acute mania versus placebo
            trial. The other rows are an EU SmPC section 5.1 summary; their primary publications were not supplied.
          </p>
        </section>

        {/* Schizophrenia Efficacy Section */}
        <section className="s" id="schizophrenia">
          <div className="sec-card">
            <div className="sec-head">
              <h2>Schizophrenia – Pivotal Efficacy &amp; Safety Profile</h2>
              <p>
                Beasley et al. 1996 and pivotal multi-center clinical trials reported in EU SmPC 5.1.
                <Cite n={[10, 1]} />
              </p>
            </div>

            {/* Row 1: Core Efficacy Outcomes */}
            <div className="grid g3">
              {/* MADRS Column Chart */}
              <div className="card">
                <div>
                  <h3>MADRS change (depressive symptoms)</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>n = 1,481; baseline MADRS 16.6</p>
                  <ColumnChart
                    label="MADRS change"
                    bars={[
                      { label: "Olanzapine", value: 6, display: "−6.0" },
                      { label: "Haloperidol", value: 3.1, display: "−3.1", tone: "alt" },
                    ]}
                  />
                </div>
                <div className="stat-note highlight">
                  p = 0.001 vs haloperidol
                </div>
              </div>

              {/* Beasley 1996 BPRS Total Change */}
              <div className="card">
                <div>
                  <h3>Beasley 1996 – BPRS total change (Wk 6)</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>* p ≤ 0.001 vs placebo; haloperidol p ≤ 0.01</p>
                  <ColumnChart
                    label="BPRS total change at week 6"
                    bars={[
                      { label: "Placebo", value: 3.1, display: "−3.1", tone: "soft" },
                      { label: "5 mg", value: 6.7, display: "−6.7" },
                      { label: "10 mg", value: 12.6, display: "−12.6" },
                      { label: "15 mg", value: 15.2, display: "−15.2" },
                      { label: "Halo", value: 12.9, display: "−12.9", tone: "alt" },
                    ]}
                  />
                </div>
                <div className="stat-note highlight">
                  High dose −15.2 vs Plac −3.1 (p ≤ 0.001)
                </div>
              </div>

              {/* Beasley 1996 SANS Negative Symptoms Change */}
              <div className="card">
                <div>
                  <h3>Beasley 1996 – SANS negative symptoms</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>* p ≤ 0.05 vs placebo; † p ≤ 0.05 vs haloperidol</p>
                  <ColumnChart
                    label="SANS negative symptom change"
                    bars={[
                      { label: "Placebo", value: 1.9, display: "−1.9", tone: "soft" },
                      { label: "5 mg", value: 8.7, display: "−8.7" },
                      { label: "10 mg", value: 6.1, display: "−6.1" },
                      { label: "15 mg", value: 13.5, display: "−13.5" },
                      { label: "Halo", value: 6.6, display: "−6.6", tone: "alt" },
                    ]}
                  />
                </div>
                <div className="stat-note highlight">
                  High dose −13.5 vs Plac −1.9 (p ≤ 0.05)
                </div>
              </div>
            </div>

            {/* Study Architecture Banner */}
            <div className="card" style={{ marginTop: "16px", background: "rgba(255, 255, 255, 0.72)" }}>
              <h3 style={{ fontSize: "15px", marginBottom: "4px" }}>Beasley et al. 1996 – Study Architecture</h3>
              <p style={{ margin: 0, fontSize: "13px" }}>
                6-week randomised double-blind trial in 335 patients comparing olanzapine (low dose 5 ± 2.5 mg/day, medium dose 10 ± 2.5 mg/day, high dose 15 ± 2.5 mg/day) with haloperidol (15 ± 5 mg/day) and placebo.
              </p>
            </div>

            {/* Row 2: Safety & Tolerability Profile */}
            <div className="grid g3" style={{ marginTop: "16px" }}>
              <div className="card">
                <div>
                  <h3>Somnolence incidence</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>High dose (15 mg/day) vs placebo</p>
                  <div className="dnr">
                    <div>
                      <div
                        className="dn"
                        style={
                          {
                            "--p": 39.1,
                            "--c": "#7c4dff",
                          } as React.CSSProperties
                        }
                      >
                        <b>39.1%</b>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 600 }}>Olanzapine 15 mg</span>
                    </div>
                    <div>
                      <div
                        className="dn"
                        style={
                          {
                            "--p": 16.2,
                            "--c": "#b9a8ee",
                          } as React.CSSProperties
                        }
                      >
                        <b>16.2%</b>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 600 }}>Placebo</span>
                    </div>
                  </div>
                </div>
                <div className="stat-note highlight">
                  Transient sedation during acute titration
                </div>
              </div>

              <div className="card">
                <div>
                  <h3>Acute dystonia incidence</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Extrapyramidal motor liability comparator</p>
                  <div className="dnr">
                    <div>
                      <div
                        className="dn"
                        style={
                          {
                            "--p": 0,
                            "--c": "#7c4dff",
                          } as React.CSSProperties
                        }
                      >
                        <b>0%</b>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 600 }}>Olanzapine</span>
                    </div>
                    <div>
                      <div
                        className="dn"
                        style={
                          {
                            "--p": 13,
                            "--c": "#d97706",
                          } as React.CSSProperties
                        }
                      >
                        <b>13.0%</b>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 600 }}>Haloperidol</span>
                    </div>
                  </div>
                </div>
                <div className="stat-note highlight">
                  0% olanzapine vs 13.0% haloperidol
                </div>
              </div>

              <div className="card stat">
                <div>
                  <h3>Mean trial weight gain</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Fixed 6-week acute exposure window</p>
                  <div className="viz-box" style={{ justifyContent: "center", alignItems: "center" }}>
                    <div style={{ background: "rgba(124, 77, 255, 0.08)", padding: "18px 24px", borderRadius: "16px", border: "1px solid rgba(124, 77, 255, 0.16)", width: "100%" }}>
                      <b style={{ fontSize: "40px", color: "var(--pri)", display: "block", fontFamily: "var(--font-playfair), Georgia, serif", lineHeight: 1 }}>
                        +3.5 kg
                      </b>
                      <p style={{ marginTop: "8px", fontSize: "12.5px", color: "var(--mut)" }}>
                        Mean gain on high-dose olanzapine (15 mg/day)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="stat-note highlight">
                  Metabolic baseline monitoring required
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Acute Mania Section */}
        <section className="s" id="mania">
          <div className="sec-card">
            <div className="sec-head">
              <h2>Acute mania – Tohen et al. 1999</h2>
              <p>
                3-week double-blind, parallel-group trial in 139 bipolar I manic/mixed patients (EU SmPC 5.1).
                <Cite n={[11, 1]} />
              </p>
            </div>
            <div className="grid g2">
              {/* Left Card: YMRS Total Score Change */}
              <div className="card">
                <div>
                  <h3>YMRS total score change</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Primary efficacy endpoint at Week 3</p>
                  <div className="viz-box">
                    <div className="cols">
                      <div>
                        <b>−10.26</b>
                        <i style={{ height: "85%", background: "#7c4dff" }} />
                      </div>
                      <div>
                        <b>−4.88</b>
                        <i style={{ height: "40%", background: "#b9a8ee" }} />
                      </div>
                    </div>
                    <div className="cl">
                      <span>Olanzapine</span>
                      <span>Placebo</span>
                    </div>
                  </div>
                </div>
                <div className="stat-note highlight">
                  Difference −5.38 points (p = 0.02)
                </div>
              </div>

              {/* Right Card: Responders */}
              <div className="card">
                <div>
                  <h3>Responders (≥50% YMRS improvement)</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Categorical treatment response threshold</p>
                  <div className="dnr">
                    <div>
                      <div
                        className="dn"
                        style={
                          {
                            "--p": 48.6,
                            "--c": "#7c4dff",
                          } as React.CSSProperties
                        }
                      >
                        <b>48.6%</b>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 600 }}>Olanzapine</span>
                    </div>
                    <div>
                      <div
                        className="dn"
                        style={
                          {
                            "--p": 24.2,
                            "--c": "#b9a8ee",
                          } as React.CSSProperties
                        }
                      >
                        <b>24.2%</b>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 600 }}>Placebo</span>
                    </div>
                  </div>
                </div>
                <div className="stat-note highlight">
                  Response rate: 48.6% vs 24.2% (p = 0.004)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recurrence Prevention */}
        <section className="s" id="recurrence">
          <div className="sec-card">
            <div className="sec-head">
              <h2>Bipolar Recurrence Prevention – 12-Month Studies</h2>
              <p>
                Relapse prevention data in patients achieving remission on olanzapine (EU SmPC 5.1).
                <Cite n={1} section="5.1" />
              </p>
            </div>
            <div className="grid g2">
              <div className="card">
                <div>
                  <h3>Bipolar recurrence rate (%)</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>12-month double-blind active-comparator trial</p>
                  <div className="viz-box">
                    <div className="cols">
                      <div>
                        <b>30.0%</b>
                        <i style={{ height: "60%", background: "#7c4dff" }} />
                      </div>
                      <div>
                        <b>38.3%</b>
                        <i style={{ height: "76%", background: "#b9a8ee" }} />
                      </div>
                    </div>
                    <div className="cl">
                      <span>Olanzapine</span>
                      <span>Lithium</span>
                    </div>
                  </div>
                </div>
                <div className="stat-note highlight">
                  Non-inferior to lithium (p = 0.055)
                </div>
              </div>

              <div className="card">
                <div>
                  <h3>Superiority vs. placebo in 12-month trial</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Placebo-controlled recurrence prevention trial</p>
                  <div className="viz-box" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                    <div style={{ background: "rgba(124, 77, 255, 0.08)", padding: "18px 20px", borderRadius: "16px", border: "1px solid rgba(124, 77, 255, 0.16)", width: "100%" }}>
                      <b style={{ fontSize: "22px", color: "var(--pri)", display: "block", fontFamily: "var(--font-playfair), Georgia, serif", marginBottom: "6px" }}>
                        Dual Relapse Prevention
                      </b>
                      <p style={{ margin: 0, fontSize: "12.5px", color: "var(--ink)" }}>
                        Statistically significantly superior to placebo on the primary endpoint, delaying and preventing relapse into both mania and depression.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="stat-note highlight">
                  Statistically superior to placebo (p &lt; 0.001)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long-term Exposure & Weight Gain */}
        <section className="s" id="longterm">
          <div className="sec-card">
            <div className="sec-head">
              <h2>Long-Term Exposure &amp; Categorical Weight Gain</h2>
              <p>
                EU SmPC Section 4.8 weight gain threshold analysis and 18-month co-therapy study findings.
                <Cite n={1} section="4.8" />
              </p>
            </div>
            <div className="grid g2">
              <div className="card">
                <div>
                  <h3>Proportion of adults gaining weight</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Categorical thresholds across exposure durations</p>
                  <div className="viz-box" style={{ height: "190px" }}>
                    <div className="cols" style={{ height: "125px" }}>
                      <div>
                        <b>22.2%</b>
                        <i style={{ height: "32%", background: "#7c4dff" }} />
                      </div>
                      <div>
                        <b>64.4%</b>
                        <i style={{ height: "92%", background: "#db2777" }} />
                      </div>
                      <div>
                        <b>4.2%</b>
                        <i style={{ height: "6%", background: "#7c4dff" }} />
                      </div>
                      <div>
                        <b>31.7%</b>
                        <i style={{ height: "45%", background: "#db2777" }} />
                      </div>
                      <div>
                        <b>0.8%</b>
                        <i style={{ height: "2%", background: "#7c4dff" }} />
                      </div>
                      <div>
                        <b>12.3%</b>
                        <i style={{ height: "18%", background: "#db2777" }} />
                      </div>
                    </div>
                    <div className="cl" style={{ fontSize: "10.5px" }}>
                      <span>≥7% ST</span>
                      <span>≥7% LT</span>
                      <span>≥15% ST</span>
                      <span>≥15% LT</span>
                      <span>≥25% ST</span>
                      <span>≥25% LT</span>
                    </div>
                  </div>
                  <div className="leg" style={{ marginTop: "6px" }}>
                    <span>
                      <i style={{ background: "#7c4dff" }} />
                      Short-term (median 47 days)
                    </span>
                    <span>
                      <i style={{ background: "#db2777" }} />
                      Long-term (≥ 48 weeks)
                    </span>
                  </div>
                </div>
                <div className="stat-note highlight">
                  Metabolic baseline and periodic monitoring recommended
                </div>
              </div>

              <div className="card">
                <div>
                  <h3>18-month co-therapy study findings</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Combination vs mood stabilizer monotherapy</p>
                  <div className="viz-box" style={{ justifyContent: "center", alignItems: "center" }}>
                    <div style={{ background: "rgba(124, 77, 255, 0.08)", padding: "18px 20px", borderRadius: "16px", border: "1px solid rgba(124, 77, 255, 0.16)", width: "100%" }}>
                      <b style={{ fontSize: "15px", color: "var(--ink)", display: "block", marginBottom: "8px" }}>
                        Syndromic Recurrence Endpoint
                      </b>
                      <p style={{ margin: 0, fontSize: "12.5px", color: "var(--mut)", lineHeight: "1.6" }}>
                        In an 18-month study of patients stabilized with olanzapine and lithium or valproate, long-term co-therapy was not statistically significantly superior to mood stabilizer monotherapy in delaying recurrence.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="stat-note">
                  Not statistically significantly superior to lithium or valproate alone
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guideline Context */}
        <section className="s" id="guidelines">
          <div className="sec-card">
            <div className="sec-head">
              <h2>Guideline and formulary context</h2>
              <p>
                Treatment guidelines place olanzapine among several options. Recommendations depend on the phase of
                illness, the patient&apos;s preferences and how well the adverse-effect profile suits that person.
              </p>
            </div>
            <div className="grid g3">
              <div className="card">
                <div>
                  <h3>BAP 2016</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>British Association for Psychopharmacology</p>
                  <p style={{ marginTop: "10px" }}>
                    For severe mania, haloperidol, olanzapine, risperidone and quetiapine are described as particularly
                    effective. In long-term treatment, lithium is recommended as initial monotherapy. Olanzapine is
                    among the agents shown to prevent manic relapse. Weight gain is noted as a prominent adverse effect.
                    <Cite n={7} />
                  </p>
                </div>
                <div className="stat-note">
                  Bipolar disorder
                </div>
              </div>
              <div className="card">
                <div>
                  <h3>APA 2021</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>American Psychiatric Association</p>
                  <p style={{ marginTop: "10px" }}>
                    Treat with an antipsychotic and monitor response and adverse effects. Continue an antipsychotic
                    after symptoms improve, preferably the same one. The guideline does not rank individual
                    antipsychotics. A long-acting injection may be used if the patient prefers it or adherence has
                    been poor.
                    <Cite n={6} />
                  </p>
                </div>
                <div className="stat-note">
                  Schizophrenia
                </div>
              </div>
              <div className="card">
                <div>
                  <h3>WPA 2008</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>World Psychiatric Association</p>
                  <p style={{ marginTop: "10px" }}>
                    Apart from clozapine, the review found no consistent efficacy differences between second-generation
                    antipsychotics. Olanzapine is associated with more weight gain and metabolic adverse effects than
                    most comparators.
                    <Cite n={8} />
                  </p>
                </div>
                <div className="stat-note">Schizophrenia</div>
              </div>
              <div className="card">
                <div>
                  <h3>WHO EML 2023</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>World Health Organization</p>
                  <p style={{ marginTop: "10px" }}>
                    Olanzapine is listed as a therapeutic alternative to risperidone for psychotic disorders and to
                    quetiapine for bipolar disorders.
                    <Cite n={9} />
                  </p>
                </div>
                <div className="stat-note">
                  Formulary listing
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

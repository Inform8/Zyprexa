import type { Metadata } from "next";
import Link from "next/link";
import { ColumnChart, StepRail } from "@/components/Figures";
import MoodSpectrum from "@/components/MoodSpectrum";
import SectionNav from "@/components/SectionNav";
import {
  IconWave,
  IconRepeat,
  IconShield,
  IconPill,
  IconUser,
  IconScale,
  IconCheck,
  IconAlert,
  IconDoc,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Understanding Bipolar Disorder · ZYPREXA HCP",
  description:
    "Information for healthcare professionals on bipolar disorder: mood episode profiles, treatment objectives, clinical evidence, and safety in bipolar trials.",
};

export default function BipolarDisorderPage() {
  return (
    <main id="app">
      {/* Editorial Hero */}
      <div className="hero">
        <div className="w">
          <div>
            <p className="eb">Disease area · Bipolar disorder</p>
            <h1 className="serif">Understanding Bipolar Disorder</h1>
            <p>Distinct mood episodes. Long-term management. A comprehensive treatment approach.</p>
            <div className="row">
              <a className="btn" href="#episodes">
                Mood episode profiles ↓
              </a>
              <a className="btn g" href="#evidence">
                Clinical evidence
              </a>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bipolar-person.jpg"
              alt="Contemplative perspective at dawn representing mood balance"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <SectionNav />

      <div className="w">
        {/* Overview: Balanced 2-Column Grid */}
        <section className="s" id="overview">
          <h2>Overview &amp; Clinical Impact</h2>
          <div className="grid g2" style={{ alignItems: "stretch", marginTop: "16px" }}>
            {/* Left Card: Epidemiology & Prevalence */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "17px", marginBottom: "12px" }}>Epidemiology &amp; Prevalence</h3>
                <p>
                  Bipolar disorder is a lifelong, severe mental health condition affecting approximately 1% to 2%
                  of the global adult population, representing more than 45 million people worldwide.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  background: "var(--soft)",
                  padding: "16px",
                  borderRadius: "12px",
                  marginTop: "16px",
                }}
              >
                <div
                  className="dn"
                  style={
                    {
                      "--p": 2,
                      "--c": "#7c4dff",
                      margin: 0,
                      flexShrink: 0,
                    } as React.CSSProperties
                  }
                >
                  <b>1–2%</b>
                </div>
                <div style={{ fontSize: "13px", color: "var(--ink)" }}>
                  <b>Adult population affected</b>
                  <p style={{ margin: "4px 0 0", color: "var(--mut)", fontSize: "12.5px" }}>
                    Typically emerges during late adolescence or early twenties, following an episodic and often
                    recurrent lifelong course.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Dual-Phase Clinical Course */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "17px", marginBottom: "12px" }}>Dual-Phase Treatment Imperative</h3>
                <p>
                  Clinical management requires fundamentally distinct approaches across acute and maintenance
                  phases of the condition:
                </p>
                <ul style={{ marginTop: "10px", display: "grid", gap: "8px" }}>
                  <li>
                    <b>Acute phase:</b> Rapid control of severe mania, mixed affective states, and behavioural
                    agitation while safeguarding patient safety.
                  </li>
                  <li>
                    <b>Maintenance phase:</b> Prophylactic therapy aimed at sustained recurrence prevention
                    against both manic and depressive episodes.
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "12.5px", color: "var(--mut)", marginTop: "16px" }}>
                Treatment decisions should balance rapid efficacy with long-term cardiometabolic tolerability.
              </p>
            </div>
          </div>
        </section>

        {/* Mood Episodes */}
        <section className="s" id="episodes">
          <div className="spectrum-head">
            <h2>Mood episode spectrum</h2>
            <p>Longitudinal fluctuation across euthymia, hypomania, mania, and depression</p>
          </div>
          <MoodSpectrum />
        </section>

        {/* Treatment Objectives */}
        <section className="s" id="objectives">
          <h2>Treatment objectives</h2>
          <StepRail
            label="Treatment objectives"
            steps={[
              {
                title: "Reduce acute symptoms",
                body: "Rapid control of acute mania, agitation, psychosis, or mixed affective states.",
              },
              {
                title: "Prevent recurrence",
                body: "Sustained prophylactic therapy against both manic and depressive relapses.",
              },
              {
                title: "Improve functioning",
                body: "Restoring vocational, cognitive, interpersonal, and social capabilities.",
              },
              {
                title: "Quality of life",
                body: "Minimizing tolerability burdens and proactively supporting cardiometabolic health.",
              },
            ]}
          />
        </section>

        {/* Indications vs Non-indications */}
        <section className="s" id="indications">
          <h2>Approved indications vs. non-indications (EU SmPC 4.1)</h2>
          <div className="grid g2" style={{ alignItems: "stretch" }}>
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ color: "var(--grn)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconCheck style={{ width: "20px", height: "20px" }} /> Approved Indications
                </h3>
                <ul style={{ marginTop: "12px", display: "grid", gap: "8px" }}>
                  <li>
                    <b>Moderate to severe manic episodes:</b> Indicated as monotherapy or in combination with lithium
                    or valproate.
                  </li>
                  <li>
                    <b>Recurrence prevention:</b> In patients whose manic episode has responded to olanzapine, it is
                    indicated for preventing recurrence in bipolar disorder.
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "12px", color: "var(--mut)", marginTop: "14px" }}>
                Source: EU Summary of Product Characteristics, section 4.1.
              </p>
            </div>

            <div className="alert" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <IconAlert style={{ width: "20px", height: "20px" }} /> Non-Indication Warning
                </h3>
                <p style={{ marginTop: "12px", lineHeight: "1.6" }}>
                  Oral ZYPREXA monotherapy is <b>NOT</b> indicated for acute bipolar depression in the EU SmPC.
                  Healthcare professionals should evaluate dedicated guideline recommendations and approved therapeutic
                  regimens for depressive episodes.
                </p>
              </div>
              <p style={{ fontSize: "12px", color: "var(--red)", marginTop: "14px", opacity: 0.9 }}>
                Important clinical boundary for prescribing practice.
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Evidence */}
        <section className="s" id="evidence">
          <div className="sec-card">
            <div className="sec-head">
              <h2>Key Clinical Evidence in Bipolar Disorder</h2>
              <p>Randomized clinical trial outcomes reported in EU SmPC Section 5.1.</p>
            </div>
            <div className="grid g3">
              {/* Column Chart 1: Acute Mania YMRS */}
              <div className="card">
                <div>
                  <h3>Acute mania – YMRS reduction</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Tohen et al. 1999; n = 139</p>
                  <ColumnChart
                    label="Acute mania YMRS reduction"
                    bars={[
                      { label: "Olanzapine", value: 10.3, display: "−10.3" },
                      { label: "Placebo", value: 4.9, display: "−4.9", tone: "soft" },
                    ]}
                  />
                </div>
                <div className="stat-note highlight">
                  p = 0.02 vs placebo
                </div>
              </div>

              {/* Donut Chart: Response Rate */}
              <div className="card">
                <div>
                  <h3>Response rate (≥50% reduction)</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Tohen et al. 1999 responder threshold</p>
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
                  48.6% vs 24.2% (p = 0.004)
                </div>
              </div>

              {/* Column Chart 2: 12-month recurrence */}
              <div className="card">
                <div>
                  <h3>12-month recurrence rate (%)</h3>
                  <p className="muted" style={{ fontSize: "12.5px" }}>Study B active comparator; n = 431</p>
                  <ColumnChart
                    label="12-month recurrence rate"
                    bars={[
                      { label: "Olanzapine", value: 30, display: "30.0%" },
                      { label: "Lithium", value: 38.3, display: "38.3%", tone: "soft" },
                    ]}
                  />
                </div>
                <div className="stat-note highlight">
                  Non-inferior to lithium (p = 0.055)
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: "16px", background: "rgba(255, 255, 255, 0.72)" }}>
              <h3 style={{ fontSize: "15px", marginBottom: "4px" }}>18-month co-therapy study (SmPC Section 5.1)</h3>
              <p style={{ margin: 0, fontSize: "13px" }}>
                In an 18-month study of patients stabilized on olanzapine with lithium or valproate, long-term
                olanzapine co-therapy was not statistically significantly superior to mood stabilizer monotherapy
                in delaying bipolar recurrence by syndromic criteria.
              </p>
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="s" id="guidelines">
          <h2>Guideline &amp; formulary positioning</h2>
          <div className="grid g2" style={{ alignItems: "stretch" }}>
            <div className="card">
              <h3>BAP 2016 Guidelines</h3>
              <p>
                British Association for Psychopharmacology recommends olanzapine as an effective oral dopamine
                antagonist in acute severe mania, and for prevention of manic relapse in maintenance therapy.
              </p>
            </div>
            <div className="card">
              <h3>WHO Essential Medicines List (2023)</h3>
              <p>
                Listed as an essential medicine and recognized therapeutic alternative for bipolar disorders in
                adult populations worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Safety in Bipolar Trials */}
        <section className="s" id="safety">
          <h2>Safety in bipolar clinical trials (SmPC 4.8)</h2>
          <div className="card">
            <h3>Safety signals &amp; metabolic observations</h3>
            <div className="dnr">
              <div>
                <div
                  className="dn"
                  style={
                    {
                      "--p": 17.4,
                      "--c": "#db2777",
                    } as React.CSSProperties
                  }
                >
                  <b>17.4%</b>
                </div>
                ≥7% weight gain: acute 6-wk + lithium/valproate
              </div>
              <div>
                <div
                  className="dn"
                  style={
                    {
                      "--p": 39.9,
                      "--c": "#d97706",
                    } as React.CSSProperties
                  }
                >
                  <b>39.9%</b>
                </div>
                ≥7% weight gain: 12-mo recurrence monotherapy
              </div>
              <div>
                <div
                  className="dn"
                  style={
                    {
                      "--p": 4.1,
                      "--c": "#2563eb",
                    } as React.CSSProperties
                  }
                >
                  <b>4.1%</b>
                </div>
                Neutropenia incidence with valproate co-therapy
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

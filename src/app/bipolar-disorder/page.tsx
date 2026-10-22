import type { Metadata } from "next";
import Link from "next/link";
import { StepRail } from "@/components/Figures";
import MoodSpectrum from "@/components/MoodSpectrum";
import { IconCheck, IconAlert } from "@/components/Icons";

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
              src="/assets/bipolar-mood.jpg"
              alt="Brain divided between a bright mood and a darker mood"
              loading="lazy"
            />
          </div>
        </div>
      </div>

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
          <h2 className="smpc-heading">Approved indications vs. non-indications · EU SmPC 4.1</h2>
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
                <ul style={{ marginTop: "12px", display: "grid", gap: "8px" }}>
                  <li>
                    <b>Acute bipolar depression:</b> Oral ZYPREXA monotherapy is <b>NOT</b> indicated in the EU SmPC.
                  </li>
                  <li>
                    <b>Depressive episodes:</b> Evaluate dedicated guideline recommendations and approved therapeutic
                    regimens.
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "12px", color: "var(--mut)", marginTop: "14px" }}>
                Source: EU Summary of Product Characteristics, section 4.1.
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Evidence — summary only; charts live on the evidence page */}
        <section className="s" id="evidence">
          <h2>Clinical evidence in bipolar disorder</h2>
          <p className="lead">
            Positioning summary from EU SmPC section 5.1. Trial design, charts and the study explorer are on the
            clinical evidence page.
          </p>
          <div className="grid g2" style={{ alignItems: "stretch" }}>
            <div className="card">
              <h3>Acute manic episodes</h3>
              <p>
                The SmPC describes superiority to placebo and to divalproex over 3 weeks in manic or mixed episodes.
                The published placebo-controlled trial is Tohen et al. 1999.
              </p>
              <p style={{ marginTop: "12px" }}>
                <Link href="/clinical-evidence#mania">
                  View complete trial design and data charts in Clinical Evidence →
                </Link>
              </p>
            </div>
            <div className="card">
              <h3>Study A · olanzapine versus placebo</h3>
              <p>
                A 12-month study in patients who had achieved remission from a manic episode with olanzapine.
                Continuation of olanzapine was statistically significantly superior to placebo for bipolar
                recurrence, including recurrence into mania or into depression.
              </p>
              <p style={{ marginTop: "10px" }}>
                Sample size, baseline characteristics, blinding, the exact definition of recurrence, inclusion
                criteria and numerical recurrence rates are not stated in EU SmPC 5.1, so they are not shown. A
                primary publication for Study A was not supplied.
              </p>
            </div>
            <div className="card">
              <h3>Study B · olanzapine versus lithium</h3>
              <p>
                Patients who achieved remission on olanzapine plus lithium were randomised to olanzapine or lithium
                alone for 12 months. Recurrence was 30.0% versus 38.3% (p = 0.055). Olanzapine was statistically
                non-inferior to lithium.
              </p>
              <p style={{ marginTop: "12px" }}>
                <Link href="/clinical-evidence#recurrence">Numerical comparison in Clinical Evidence →</Link>
              </p>
            </div>
            <div className="card">
              <h3>18-month co-therapy</h3>
              <p>
                In patients stabilised on olanzapine plus lithium or valproate, long-term olanzapine co-therapy was
                not statistically significantly superior to the mood stabiliser alone in delaying bipolar recurrence
                defined by syndromic (diagnostic) criteria.
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
                The British Association for Psychopharmacology lists olanzapine among oral dopamine antagonists that
                are particularly effective in severe mania. For long-term treatment it recommends considering lithium
                as initial monotherapy. Olanzapine is among agents shown to prevent manic relapse; it is not described
                as first-line for long-term treatment.
              </p>
              <p style={{ marginTop: "12px" }}>
                <Link href="/clinical-evidence#guidelines">Full guideline context in Clinical Evidence →</Link>
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

        <section className="s" id="safety">
          <h2>Safety considerations during treatment</h2>
          <div className="card">
            <p>
              Weight gain, increased appetite, and changes in glucose and lipids should be considered when selecting
              and monitoring treatment. Numerical thresholds from long-term exposure, and the monitoring schedule,
              are maintained on the safety page.
            </p>
            <p style={{ marginTop: "12px" }}>
              <Link href="/safety-prescribing#monitoring">Metabolic monitoring schedule →</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

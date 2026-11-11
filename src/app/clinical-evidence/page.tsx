import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { HBars, VBars } from "@/components/Charts";
import { HashPanel, HashTabBar, HashTabsProvider } from "@/components/HashTabs";

export const metadata: Metadata = {
  title: "Clinical evidence",
  description: "Clinical evidence for olanzapine in schizophrenia, manic episodes and recurrence prevention.",
};

const tabs = [
  { id: "schizophrenia", label: "Schizophrenia" },
  { id: "manic-episodes", label: "Manic episodes" },
  { id: "recurrence", label: "Recurrence prevention" },
];

export default function ClinicalEvidencePage() {
  return (
    <main id="app">
      <HashTabsProvider label="Evidence by indication" tabs={tabs}>
        <div className="hero hero--text">
          <div className="w">
            <div className="hero-copy">
              <p className="eb">Clinical evidence</p>
              <h1 className="serif">Clinical evidence for olanzapine</h1>
              <p>Choose an indication below to see key results. Open a study for its design, safety findings and limitations.</p>
              <HashTabBar />
            </div>
            <div className="hero-art" aria-hidden="true" />
          </div>
        </div>

        <HashPanel id="schizophrenia">
          <div className="w">
            <section className="s">
              <h2>Schizophrenia</h2>
              <p>
                Across five controlled trials, olanzapine improved both positive and negative symptoms. A published
                dose-ranging trial and a secondary analysis of mood symptoms add detail.
              </p>
              <div className="kpis">
                <div className="kpi">
                  <b>2 of 2</b>
                  <span>
                    placebo-controlled trials: significantly greater improvement in negative and positive symptoms
                    <Cite n={1} section="5.1" />
                  </span>
                </div>
                <div className="kpi">
                  <b>2 of 3</b>
                  <span>
                    comparator-controlled trials: significantly greater improvement in negative and positive symptoms
                    <Cite n={1} section="5.1" />
                  </span>
                </div>
                <div className="kpi">
                  <b>&gt; 2,900</b>
                  <span>
                    patients across these trials, with both positive and negative symptoms
                    <Cite n={1} section="5.1" />
                  </span>
                </div>
              </div>

              <details id="beasley-1996" open>
                <summary>
                  North American double-blind trial · Beasley et al. 1996 · 6 weeks · n = 335 · Brief Psychiatric Rating
                  Scale (BPRS)
                </summary>
                <p className="study-lead">
                  Brief Psychiatric Rating Scale (BPRS) total −15.2 with olanzapine 15 ± 2.5 mg vs −3.1 with placebo.
                </p>

                <div className="g2 study-charts">
                  <HBars
                    title="Results — Brief Psychiatric Rating Scale (BPRS) total"
                    caption="Mean change from baseline (LOCF). * significantly better than placebo."
                    rows={[
                      { label: "Placebo", value: "−3.1", width: 19, tone: "muted" },
                      { label: "Olz 5 ± 2.5 mg", value: "−6.7", width: 42, tone: "soft" },
                      { label: "Olz 10 ± 2.5 mg", value: "−12.6 *", width: 79 },
                      { label: "Olz 15 ± 2.5 mg", value: "−15.2 *", width: 95 },
                      { label: "Haloperidol", value: "−12.9 *", width: 81, tone: "soft" },
                    ]}
                  />
                  <HBars
                    title="Results — Scale for the Assessment of Negative Symptoms (SANS) composite"
                    caption="* versus placebo. † also versus haloperidol."
                    rows={[
                      { label: "Placebo", value: "−1.9", width: 12, tone: "muted" },
                      { label: "Olz 5 ± 2.5 mg", value: "−8.7 *", width: 58, tone: "soft" },
                      { label: "Olz 10 ± 2.5 mg", value: "−6.1", width: 40 },
                      { label: "Olz 15 ± 2.5 mg", value: "−13.5 * †", width: 90 },
                      { label: "Haloperidol", value: "−6.6", width: 44, tone: "soft" },
                    ]}
                  />
                </div>
                <div className="study-findings">
                  <p>
                    In overall symptoms (Brief Psychiatric Rating Scale [BPRS] total), the medium and high olanzapine dose
                    ranges and haloperidol were superior to placebo.
                    <Cite n={13} />
                  </p>
                  <p>
                    In negative symptoms (Scale for the Assessment of Negative Symptoms [SANS] composite), the low and
                    high olanzapine ranges were superior to placebo, and the high range was also superior to
                    haloperidol.
                    <Cite n={13} />
                  </p>
                  <p className="source-line">
                    * p ≤ 0.01 versus placebo (p ≤ 0.05 for SANS, olanzapine 5 ± 2.5 mg). † p ≤ 0.05 versus
                    haloperidol. Redrawn from Beasley et al. 1996, Table 5.
                    <Cite n={13} />
                  </p>
                </div>

                <h4>Study design</h4>
                <dl className="plain-list">
                  <div><dt><b>Design</b></dt><dd>Randomised, double-blind, placebo- and active-controlled; 22 sites, US and Canada</dd></div>
                  <div><dt><b>Patients</b></dt><dd>n = 335; DSM-III-R schizophrenia, acute exacerbation; BPRS total ≥ 24; about 91% chronic course</dd></div>
                  <div><dt><b>Arms</b></dt><dd>Olanzapine 5 ± 2.5, 10 ± 2.5 or 15 ± 2.5 mg/day; haloperidol 15 ± 5 mg/day; placebo</dd></div>
                  <div><dt><b>Duration</b></dt><dd>6 weeks (acute phase)</dd></div>
                  <div><dt><b>Endpoints</b></dt><dd>Change in BPRS total and BPRS positive versus placebo; SANS composite versus placebo and haloperidol (LOCF)<Cite n={13} /></dd></div>
                </dl>

                <h4>Safety findings</h4>
                <div className="kpis">
                  <div className="kpi"><b>39.1% <small>vs 16.2%</small></b><span>somnolence, olanzapine 15 ± 2.5 mg vs placebo</span></div>
                  <div className="kpi"><b>+3.5 kg</b><span>mean weight change at endpoint, olanzapine 15 ± 2.5 mg</span></div>
                  <div className="kpi"><b>0% <small>vs 13.0%</small></b><span>acute dystonia, olanzapine vs haloperidol</span></div>
                </div>
                <div className="safety-note">
                  <p style={{ margin: 0 }}>
                    Dose-related transaminase elevations occurred; six olanzapine-treated patients discontinued because
                    of raised alanine aminotransferase (ALT, a liver enzyme) without clinical signs of hepatic
                    dysfunction.
                    <Cite n={13} />
                  </p>
                </div>

                <h4>Limitations</h4>
                <ul className="study-limitations">
                  <li>Six-week acute phase only.</li>
                  <li>High placebo response.</li>
                  <li>
                    The haloperidol dose (mean modal 16.4 mg/day) has been discussed as higher than optimal, which may
                    favour comparisons against it.
                    <Cite n={[13, 11]} />
                  </li>
                </ul>
              </details>

              <details id="mood-analysis">
                <summary>
                  Mood symptoms in schizophrenia and related disorders · n = 1,481 · baseline Montgomery–Åsberg
                  Depression Rating Scale (MADRS) 16.6
                </summary>
                <p className="study-lead">
                  Montgomery–Åsberg Depression Rating Scale (MADRS) change −6.0 with olanzapine vs −3.1 with
                  haloperidol (p = 0.001).
                </p>
                <HBars
                  caption="Mean change from baseline to endpoint. Bars represent improvement as scores fall. p = 0.001."
                  rows={[
                    { label: "Olanzapine", value: "−6.0", width: 75 },
                    { label: "Haloperidol", value: "−3.1", width: 39, tone: "soft" },
                  ]}
                />
                <div className="study-findings">
                  <p>
                    Patients had schizophrenia, schizoaffective disorder or related disorders, with varying degrees of
                    depressive symptoms. A prospective secondary analysis of mood-score change favoured olanzapine.
                    <Cite n={1} section="5.1" />
                  </p>
                </div>
                <div className="safety-note">
                  <p style={{ margin: 0 }}>
                    <strong>Limitation.</strong> This was a secondary analysis, not the primary outcome of the study.
                  </p>
                </div>
              </details>
            </section>
          </div>
        </HashPanel>

        <HashPanel id="manic-episodes">
          <div className="w">
            <section className="s">
              <h2>Manic episodes</h2>
              <p>
                In moderate to severe manic episodes, olanzapine reduced manic symptoms versus placebo and divalproex,
                and when added to lithium or valproate.
              </p>
              <div className="kpis">
                <div className="kpi">
                  <b>
                    48.6% <small>vs 24.2%</small>
                  </b>
                  <span>
                    responders at 3 weeks, with olanzapine vs with placebo (p = 0.004)
                    <Cite n={14} />
                  </span>
                </div>
                <div className="kpi">
                  <b>
                    −10.3 <small>vs −4.9 points</small>
                  </b>
                  <span>
                    mean change in Young Mania Rating Scale (YMRS) total score at 3 weeks, olanzapine vs placebo (p =
                    0.02)
                    <Cite n={14} />
                  </span>
                </div>
                <div className="kpi">
                  <b>6 weeks</b>
                  <span>
                    add-on to lithium or valproate: greater reduction in manic symptoms than either alone
                    <Cite n={1} section="5.1" />
                  </span>
                </div>
              </div>

              <details id="tohen-1999" open>
                <summary>Olanzapine versus placebo in acute mania · Tohen et al. 1999 · 3 weeks · n = 139</summary>
                <p className="study-lead">
                  Responders: 48.6% with olanzapine vs 24.2% with placebo (p = 0.004).
                </p>

                <div className="g2 study-charts">
                  <VBars
                    title="Young Mania Rating Scale (YMRS) total · mean change (points)"
                    max={12}
                    caption="p = 0.02 · olanzapine vs placebo"
                    rows={[
                      { label: "Olanzapine", value: 10.26, display: "−10.26" },
                      { label: "Placebo", value: 4.88, display: "−4.88", tone: "soft" },
                    ]}
                  />
                  <VBars
                    title="Responders (≥ 50% YMRS decrease)"
                    max={60}
                    caption="p = 0.004 · 34/70 olanzapine vs 16/66 placebo"
                    rows={[
                      { label: "Olanzapine", value: 48.6, display: "48.6%" },
                      { label: "Placebo", value: 24.2, display: "24.2%", tone: "soft" },
                    ]}
                  />
                </div>
                <div className="study-findings">
                  <p>
                    Olanzapine produced a significantly greater mean improvement in Young Mania Rating Scale (YMRS)
                    total score than placebo (primary endpoint; difference −5.38 points), and significantly more
                    patients responded (48.6% with olanzapine vs 24.2% with placebo).
                    <Cite n={14} />
                  </p>
                  <p className="source-line">
                    Change from baseline to endpoint (LOCF) and proportion of patients with ≥ 50% decrease in YMRS at 3
                    weeks. Redrawn from Tohen et al. 1999.
                    <Cite n={14} />
                  </p>
                </div>

                <h4>Study design</h4>
                <dl className="plain-list">
                  <div><dt><b>Design</b></dt><dd>Randomised, double-blind, placebo-controlled, parallel group; 16 US sites</dd></div>
                  <div><dt><b>Patients</b></dt><dd>n = 139 (olanzapine 70, placebo 69); DSM-IV bipolar I disorder, manic or mixed episode; YMRS ≥ 20; 53% with psychotic features</dd></div>
                  <div><dt><b>Dosing</b></dt><dd>Started at 10 mg/day, adjustable 5–20 mg/day; mean modal dose 14.9 mg/day</dd></div>
                  <div><dt><b>Duration</b></dt><dd>3 weeks</dd></div>
                  <div><dt><b>Endpoints</b></dt><dd>Primary: change in YMRS total (LOCF). Response defined in advance as ≥ 50% YMRS decrease<Cite n={14} /></dd></div>
                </dl>

                <h4>Safety findings</h4>
                <div className="kpis">
                  <div className="kpi"><b>32.9% <small>vs 17.4%</small></b><span>somnolence, olanzapine vs placebo</span></div>
                  <div className="kpi">
                    <b>
                      +1.65 kg <small>vs −0.44 kg</small>
                    </b>
                    <span>mean weight change over 3 weeks, olanzapine vs placebo</span>
                  </div>
                  <div className="kpi">
                    <b>
                      17.6% <small>vs 0%</small>
                    </b>
                    <span>
                      treatment-emergent alanine aminotransferase (ALT, a liver enzyme) elevations, olanzapine vs
                      placebo
                    </span>
                  </div>
                </div>
                <div className="safety-note">
                  <p style={{ margin: 0 }}>
                    Dry mouth (25.7% with olanzapine vs 8.7% with placebo), dizziness (22.9% vs 5.8%) and weight gain
                    reported as an adverse event (11.4% vs 1.4%) were also more frequent with olanzapine.
                    <Cite n={14} />
                  </p>
                </div>

                <h4>Limitations</h4>
                <ul className="study-limitations">
                  <li>Three-week duration.</li>
                  <li>High placebo dropout (65.2%).</li>
                  <li>Concomitant lorazepam permitted.</li>
                  <li>
                    The trial started at 10 mg/day; the recommended starting dose for monotherapy of a manic episode is
                    15 mg/day.
                    <Cite n={[14, 1]} />
                  </li>
                </ul>
              </details>

              <details id="mania-programme">
                <summary>Further controlled studies in manic or mixed episodes · 3 to 12 weeks</summary>
                <ul className="plain-list">
                  <li>
                    <b>Versus placebo · 3 weeks.</b> Superior efficacy in reducing manic symptoms.
                    <Cite n={1} section="5.1" />
                  </li>
                  <li>
                    <b>Versus divalproex · 3 weeks.</b> Superior efficacy to valproate semisodium (divalproex) in
                    reducing manic symptoms.
                    <Cite n={1} section="5.1" />
                  </li>
                  <li>
                    <b>Versus haloperidol · 6 and 12 weeks.</b> Comparable proportion of patients in symptomatic
                    remission from mania and depression.
                    <Cite n={1} section="5.1" />
                  </li>
                  <li>
                    <b>Add-on to lithium or valproate · 6 weeks.</b> In patients already treated for at least 2 weeks,
                    adding olanzapine 10 mg reduced manic symptoms more than lithium or valproate alone.
                    <Cite n={1} section="5.1" />
                  </li>
                </ul>
                <p className="source-line">Effect sizes are not available for these studies, so results are described in words.</p>
              </details>
            </section>
          </div>
        </HashPanel>

        <HashPanel id="recurrence">
          <div className="w">
            <section className="s">
              <h2>Recurrence prevention</h2>
              <p>
                In patients whose manic episode responded, continued olanzapine was superior to placebo in preventing
                recurrence and non-inferior to lithium. Added to lithium or valproate, it was not superior to either
                alone.
              </p>
              <div className="kpis">
                <div className="kpi">
                  <b>Superior</b>
                  <span>
                    to placebo on bipolar recurrence over 12 months
                    <Cite n={1} section="5.1" />
                  </span>
                </div>
                <div className="kpi">
                  <b>
                    30.0% <small>vs 38.3%</small>
                  </b>
                  <span>
                    recurrence with olanzapine vs with lithium over 12 months: non-inferior (p = 0.055)
                    <Cite n={1} section="5.1" />
                  </span>
                </div>
                <div className="kpi">
                  <b>Not superior</b>
                  <span>
                    in delaying bipolar recurrence as 18-month co-therapy, versus lithium or valproate alone
                    <Cite n={1} section="5.1" />
                  </span>
                </div>
              </div>

              <details id="recurrence-placebo" open>
                <summary>Continued olanzapine versus placebo · Remission on olanzapine · 12 months</summary>
                <p className="study-lead">Statistically significantly superior to placebo on bipolar recurrence.</p>
                <div className="study-findings">
                  <p>
                    <b>Design.</b> Patients with a manic episode who achieved remission on olanzapine were randomised to
                    olanzapine or placebo for 12 months.
                  </p>
                  <p>
                    <b>Result.</b> Olanzapine was statistically significantly superior to placebo on the primary
                    endpoint of bipolar recurrence, and also showed an advantage in preventing recurrence into either
                    mania or depression.
                    <Cite n={1} section="5.1" />
                  </p>
                  <p className="source-line">Recurrence rates are not available for this study, so no chart is shown.</p>
                </div>
              </details>

              <details id="recurrence-lithium">
                <summary>
                  Olanzapine versus lithium · 12 months · recurrence 30.0% with olanzapine vs 38.3% with lithium
                </summary>
                <HBars
                  caption="Patients with bipolar recurrence at 12 months (primary endpoint). Olanzapine was statistically non-inferior to lithium, p = 0.055."
                  rows={[
                    { label: "Olanzapine", value: "30.0%", width: 60 },
                    { label: "Lithium", value: "38.3%", width: 77, tone: "soft" },
                  ]}
                />
                <div className="study-findings">
                  <p style={{ margin: 0 }}>
                    After remission on olanzapine plus lithium, patients were randomised to olanzapine alone or lithium
                    alone. Olanzapine was statistically non-inferior to lithium on the primary endpoint of bipolar
                    recurrence.
                    <Cite n={1} section="5.1" />
                  </p>
                </div>
              </details>

              <details id="recurrence-cotherapy">
                <summary>
                  Olanzapine added to lithium or valproate · 18 months · not superior in delaying bipolar recurrence,
                  versus lithium or valproate alone
                </summary>
                <div className="study-findings">
                  <p style={{ margin: 0 }}>
                    In patients with a manic or mixed episode stabilised on olanzapine plus lithium or valproate,
                    continuing olanzapine co-therapy was not statistically significantly superior to lithium or valproate
                    alone in delaying bipolar recurrence, defined by syndromic (diagnostic) criteria.
                    <Cite n={1} section="5.1" />
                  </p>
                </div>
              </details>
            </section>
          </div>
        </HashPanel>
      </HashTabsProvider>

      <div className="w">
        <section className="s" id="reading-evidence">
          <h2>Reading this evidence</h2>
          <p>
            Consider each result in the context of its population, comparator, endpoint and duration. Individual study
            results do not predict the response of every patient.
          </p>
          <div className="row" style={{ marginTop: 12, gap: 20 }}>
            <Link className="more-link" href="/clinical-guidelines">
              Clinical guidelines →
            </Link>
            <Link className="more-link" href="/references">
              All references →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

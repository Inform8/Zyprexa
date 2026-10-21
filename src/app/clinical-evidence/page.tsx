import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinical Evidence · ZYPREXA HCP",
  description: "Clinical evidence for olanzapine in schizophrenia, acute mania and recurrence prevention in bipolar disorder, as described in the EU Summary of Product Characteristics.",
};

export default function ClinicalEvidencePage() {
  return (
    <main id="main">
      <header className="page-head">
  <div className="wrap grid grid--7-5">
    <div>
      <span className="eyebrow">Evidence</span>
      <h1>Clinical evidence for olanzapine</h1>
      <p className="standfirst">Reviewing clinical outcomes in schizophrenia and bipolar disorder.</p>
    </div>
    <div className="stack" style={{ alignSelf: 'end' }}>
      <p>The clinical evidence for olanzapine includes studies of symptom improvement in schizophrenia, treatment of manic episodes and prevention of recurrence in bipolar disorder.</p>
      <p>Evidence should be considered in the context of the indication, patient population, comparator, endpoint and duration of follow-up. Individual study results do not necessarily predict the response of every patient.</p>
    </div>
  </div>
</header>

<nav className="section" aria-label="Evidence by indication" style={{ paddingBlock: '2.5rem' }}>
  <div className="wrap">
    <div className="evidence-index">
      <a href="#schizophrenia"><span className="count num">2</span><h3>Schizophrenia</h3><p>Placebo- and comparator-controlled studies; a mood-score secondary analysis</p></a>
      <a href="#acute-mania"><span className="count num">4</span><h3>Acute mania</h3><p>Versus placebo, divalproex and haloperidol; combination with lithium or valproate</p></a>
      <a href="#recurrence"><span className="count num">3</span><h3>Recurrence prevention</h3><p>Two 12-month studies and one 18-month co-therapy study</p></a>
      <a href="#long-term"><span className="count num">≥ 48 wk</span><h3>Long-term treatment</h3><p>Weight and metabolic changes with longer exposure</p></a>
    </div>
    <p className="small muted" style={{ marginTop: '0.75rem' }}>Numbers count the study descriptions in EU SmPC section 5.1, not the total number of trials conducted. Long-term data are from section 4.8.</p>
  </div>
</nav>

<section className="section section--surface explorer" id="explorer" aria-labelledby="ex-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Study explorer</span>
      <h2 id="ex-title">Studies described in the product information</h2>
      <p>Filter by indication. Each entry gives the design, comparator, endpoint and outcome as stated in the EU SmPC. Where the SmPC does not report a detail, the cell says so.</p>
    </div>
    <div className="filters" role="group" aria-label="Filter studies by indication">
      <span className="label">Indication</span>
      <button className="chip" type="button" data-filter="all" aria-pressed="true">All</button>
      <button className="chip" type="button" data-filter="scz" aria-pressed="false">Schizophrenia</button>
      <button className="chip" type="button" data-filter="mania" aria-pressed="false">Acute mania</button>
      <button className="chip" type="button" data-filter="rp" aria-pressed="false">Recurrence prevention</button>
    </div>
    <p id="study-count" className="small muted" aria-live="polite">9 of 9 study descriptions shown</p>
    <div className="table-wrap" tabIndex={0} role="region" aria-labelledby="ex-title">
      <table className="data" id="study-table">
        <thead>
          <tr><th scope="col">Population</th><th scope="col">Design and comparator</th><th scope="col">Duration</th><th scope="col">Endpoint</th><th scope="col">Outcome reported in SmPC</th></tr>
        </thead>
        <tbody>
          <tr data-ind="scz"><th scope="row">Schizophrenia with positive and negative symptoms; over 2,900 patients across trials</th><td>Two placebo-controlled and three comparator-controlled trials</td><td>Not stated</td><td><span className="tag tag--neutral">Not specified</span><br />Negative and positive symptoms</td><td>Statistically significantly greater improvement in negative as well as positive symptoms in 2 of 2 placebo-controlled and 2 of 3 comparator-controlled trials</td></tr>
          <tr data-ind="scz"><th scope="row">Schizophrenia, schizoaffective and related disorders with depressive symptoms; n = 1,481; baseline MADRS 16.6</th><td>Multinational, double-blind; versus haloperidol</td><td>Not stated</td><td><span className="tag tag--secondary">Secondary analysis</span><br />Change in mood score (MADRS)</td><td className="result-strong">−6.0 olanzapine vs −3.1 haloperidol; p = 0.001</td></tr>
          <tr data-ind="mania"><th scope="row">Manic or mixed episode of bipolar disorder</th><td>Versus placebo</td><td className="num">3 weeks</td><td><span className="tag tag--neutral">Not specified</span><br />Reduction of manic symptoms</td><td>Superior efficacy to placebo</td></tr>
          <tr data-ind="mania"><th scope="row">Manic or mixed episode of bipolar disorder</th><td>Versus valproate semisodium (divalproex)</td><td className="num">3 weeks</td><td><span className="tag tag--neutral">Not specified</span><br />Reduction of manic symptoms</td><td>Superior efficacy to divalproex</td></tr>
          <tr data-ind="mania"><th scope="row">Manic or mixed episode of bipolar disorder</th><td>Versus haloperidol</td><td className="num">6 and 12 weeks</td><td><span className="tag tag--neutral">Not specified</span><br />Proportion in symptomatic remission from mania and depression</td><td>Comparable efficacy results to haloperidol</td></tr>
          <tr data-ind="mania"><th scope="row">Patients treated with lithium or valproate for at least 2 weeks</th><td>Olanzapine 10 mg added to lithium or valproate, versus lithium or valproate monotherapy</td><td className="num">6 weeks</td><td><span className="tag tag--neutral">Not specified</span><br />Reduction of manic symptoms</td><td>Greater reduction in symptoms of mania than monotherapy</td></tr>
          <tr data-ind="rp"><th scope="row">Manic episode, remission achieved on olanzapine</th><td>Randomised to olanzapine or placebo</td><td className="num">12 months</td><td><span className="tag tag--primary">Primary</span><br />Bipolar recurrence</td><td className="result-strong">Statistically significant superiority over placebo; also an advantage in preventing recurrence into mania or into depression</td></tr>
          <tr data-ind="rp"><th scope="row">Manic episode, remission achieved on olanzapine plus lithium</th><td>Randomised to olanzapine alone or lithium alone</td><td className="num">12 months</td><td><span className="tag tag--primary">Primary</span><br />Bipolar recurrence</td><td className="result-strong">Statistically non-inferior: 30.0% vs 38.3%; p = 0.055</td></tr>
          <tr data-ind="rp"><th scope="row">Manic or mixed episode, stabilised on olanzapine plus lithium or valproate</th><td>Olanzapine co-therapy versus lithium or valproate alone</td><td className="num">18 months</td><td><span className="tag tag--neutral">Not specified</span><br />Delay of bipolar recurrence (syndromic criteria)</td><td>Not statistically significantly superior to lithium or valproate alone</td></tr>
        </tbody>
      </table>
    </div>
    <p className="scroll-cue">Scroll the table sideways to see all columns.</p>
    <p className="source-line">Source: ZYPREXA EU SmPC, section 5.1.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup> Endpoint labels are given only where the SmPC identifies the endpoint as primary or secondary.</p>
  </div>
</section>

<section className="section" id="schizophrenia" aria-labelledby="scz-title">
  <div className="wrap evidence-block">
    <div className="stack">
      <span className="eyebrow">Schizophrenia</span>
      <h2 id="scz-title">Evidence in schizophrenia</h2>
      <p>The European SmPC summarises placebo-controlled and comparator-controlled studies in patients with schizophrenia.</p>
      <p>In two of two placebo-controlled studies and two of three comparator-controlled studies described in the SmPC, involving over 2,900 patients presenting with both positive and negative symptoms, olanzapine was associated with statistically significantly greater improvement in negative as well as positive symptoms.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
      <p>The SmPC also summarises a multinational, double-blind comparative study involving 1,481 patients with schizophrenia, schizoaffective disorder and related disorders who had varying degrees of depressive symptoms. A prospective secondary analysis of changes in mood scores favoured olanzapine over haloperidol.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
      <p className="small muted">This was a secondary analysis and was not the primary outcome of the study.</p>
    </div>
    <figure className="fig">
      <div className="fig-frame">
        <svg viewBox="0 0 520 190" role="img" aria-labelledby="md-t md-d">
          <title id="md-t">Change in MADRS mood score, olanzapine versus haloperidol</title>
          <desc id="md-d">Horizontal bar chart of mean change from baseline to endpoint in MADRS score: olanzapine −6.0, haloperidol −3.1, p = 0.001. Baseline mean 16.6. Prospective secondary analysis.</desc>
          <text x="0" y="16" fontSize="11.5" className="t-mono t-muted">MEAN CHANGE FROM BASELINE TO ENDPOINT · MADRS</text>
          <g className="s-rule" strokeWidth="1">
            <line x1="140" y1="30" x2="140" y2="142"/><line x1="225" y1="30" x2="225" y2="142"/><line x1="310" y1="30" x2="310" y2="142"/><line x1="395" y1="30" x2="395" y2="142"/><line x1="480" y1="30" x2="480" y2="142"/>
          </g>
          <g fontSize="11" className="t-mono t-muted" textAnchor="middle">
            <text x="140" y="160">0</text><text x="225" y="160">−2</text><text x="310" y="160">−4</text><text x="395" y="160">−6</text><text x="480" y="160">−8</text>
          </g>
          <text x="0" y="64" fontSize="13" fontWeight="600">Olanzapine</text>
          <rect x="140" y="44" width="255" height="32" className="f-accent"/>
          <text x="403" y="66" fontSize="14" fontWeight="600" className="num">−6.0</text>
          <text x="0" y="114" fontSize="13" fontWeight="600">Haloperidol</text>
          <rect x="140" y="94" width="131.75" height="32" className="f-ochre"/>
          <text x="279.75" y="116" fontSize="14" fontWeight="600" className="num">−3.1</text>
          <text x="0" y="184" fontSize="11.5" className="t-muted">Bars extend right as scores fall (improvement). p = 0.001</text>
        </svg>
      </div>
      <figcaption><span className="fig-no">Figure 1</span>Prospective secondary analysis of baseline-to-endpoint mood score change in a multinational, double-blind study (n = 1,481; baseline mean MADRS 16.6). MADRS, Montgomery–Åsberg Depression Rating Scale.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></figcaption>
    </figure>
  </div>
</section>

<section className="section" id="beasley-1996" aria-labelledby="bz-title" style={{ paddingTop: '0' }}>
  <div className="wrap">
    <article className="trial" aria-labelledby="bz-title">
      <div>
        <span className="eyebrow">Published trial · Schizophrenia</span>
        <h3 id="bz-title" style={{ marginTop: '0.5rem' }}>Olanzapine versus placebo and haloperidol: North American double-blind trial</h3>
        <p style={{ marginTop: '0.75rem' }}>A 6-week, randomised, double-blind trial in 335 patients with an acute exacerbation of schizophrenia compared three olanzapine dose ranges with haloperidol and placebo. In overall symptoms (BPRS total), the medium and high olanzapine ranges and haloperidol were superior to placebo. In negative symptoms (SANS composite), the low and high olanzapine ranges were superior to placebo, and the high range was also superior to haloperidol.<sup><a className="cite" href="/references#ref-10" aria-label="Reference 10">10</a></sup></p>
        <dl className="trial-meta">
          <dt>Design</dt><dd>Randomised, double-blind, placebo- and active-controlled; 22 sites, US and Canada</dd>
          <dt>Patients</dt><dd>n = 335; DSM-III-R schizophrenia, acute exacerbation; BPRS total ≥ 24; about 91% chronic course</dd>
          <dt>Arms</dt><dd>Olanzapine 5 ± 2.5, 10 ± 2.5 or 15 ± 2.5 mg/day; haloperidol 15 ± 5 mg/day; placebo</dd>
          <dt>Endpoints</dt><dd>Primary objectives: change in BPRS total and BPRS positive versus placebo; SANS composite versus placebo and haloperidol (LOCF)</dd>
        </dl>
        <div className="balance">
          <h4>Safety in this trial</h4>
          <p>Somnolence was reported in 39.1% of patients on the high olanzapine range versus 16.2% on placebo. Mean weight gain at endpoint was 3.5 kg on the high range. Dose-related transaminase elevations occurred, and six olanzapine-treated patients discontinued because of raised ALT without clinical signs of hepatic dysfunction. No acute dystonia occurred with olanzapine (13.0% with haloperidol).<sup><a className="cite" href="/references#ref-10" aria-label="Reference 10">10</a></sup></p>
        </div>
        <p className="limits"><strong>Limitations.</strong> Six-week acute phase; high placebo response; the haloperidol comparator dose (mean modal 16.4 mg/day) has been discussed as higher than optimal, which may favour comparisons against it.<sup><a className="cite" href="/references#ref-10" aria-label="Reference 10">10</a><span className="cite-sep">,</span><a className="cite" href="/references#ref-8" aria-label="Reference 8">8</a></sup></p>
      </div>
      <figure className="fig">
        <div className="fig-frame">
          <svg viewBox="0 0 460 380" role="img" aria-labelledby="bzf-t bzf-d">
            <title id="bzf-t">Mean change from baseline at week 6, Beasley et al. 1996</title>
            <desc id="bzf-d">Two horizontal bar charts. BPRS total change: placebo −3.1, olanzapine 5 ± 2.5 mg −6.7, olanzapine 10 ± 2.5 mg −12.6, olanzapine 15 ± 2.5 mg −15.2, haloperidol −12.9. SANS composite change: placebo −1.9, olanzapine low −8.7, medium −6.1, high −13.5, haloperidol −6.6. Significance markers as in the caption.</desc>
            {/*  scale: 15 px per point, zero at x=140  */}
            <text x="0" y="16" fontSize="11.5" className="t-mono t-muted">BPRS TOTAL · MEAN CHANGE</text>
            <g className="s-rule" strokeWidth="1">
            <line x1="140" y1="28" x2="140" y2="170"/>
            <line x1="200" y1="28" x2="200" y2="170"/>
            <line x1="260" y1="28" x2="260" y2="170"/>
            <line x1="320" y1="28" x2="320" y2="170"/>
            <line x1="380" y1="28" x2="380" y2="170"/>
            </g>
            <g fontSize="11" className="t-mono t-muted" textAnchor="middle">
            <text x="140" y="186">0</text>
            <text x="200" y="186">−4</text>
            <text x="260" y="186">−8</text>
            <text x="320" y="186">−12</text>
            <text x="380" y="186">−16</text>
            </g>
            <text x="0" y="43" fontSize="13">Placebo</text>
            <rect x="140" y="30" width="46.5" height="18" className="f-muted"/>
            <text x="191.5" y="43.5" fontSize="12.5" fontWeight="600" className="num">−3.1</text>
            <text x="0" y="71" fontSize="13">Olz 5 ± 2.5 mg</text>
            <rect x="140" y="58" width="100.5" height="18" className="f-accent-soft"/>
            <text x="245.5" y="71.5" fontSize="12.5" fontWeight="600" className="num">−6.7</text>
            <text x="0" y="99" fontSize="13">Olz 10 ± 2.5 mg</text>
            <rect x="140" y="86" width="189.0" height="18" className="f-accent"/>
            <text x="334.0" y="99.5" fontSize="12.5" fontWeight="600" className="num">−12.6 *</text>
            <text x="0" y="127" fontSize="13">Olz 15 ± 2.5 mg</text>
            <rect x="140" y="114" width="228.0" height="18" className="f-accent"/>
            <text x="373.0" y="127.5" fontSize="12.5" fontWeight="600" className="num">−15.2 *</text>
            <text x="0" y="155" fontSize="13">Haloperidol</text>
            <rect x="140" y="142" width="193.5" height="18" className="f-ochre"/>
            <text x="338.5" y="155.5" fontSize="12.5" fontWeight="600" className="num">−12.9 *</text>
            <text x="0" y="214" fontSize="11.5" className="t-mono t-muted">SANS COMPOSITE · MEAN CHANGE</text>
            <g className="s-rule" strokeWidth="1">
            <line x1="140" y1="226" x2="140" y2="368"/>
            <line x1="200" y1="226" x2="200" y2="368"/>
            <line x1="260" y1="226" x2="260" y2="368"/>
            <line x1="320" y1="226" x2="320" y2="368"/>
            <line x1="380" y1="226" x2="380" y2="368"/>
            </g>
            <text x="0" y="241" fontSize="13">Placebo</text>
            <rect x="140" y="228" width="28.5" height="18" className="f-muted"/>
            <text x="173.5" y="241.5" fontSize="12.5" fontWeight="600" className="num">−1.9</text>
            <text x="0" y="269" fontSize="13">Olz 5 ± 2.5 mg</text>
            <rect x="140" y="256" width="130.5" height="18" className="f-accent-soft"/>
            <text x="275.5" y="269.5" fontSize="12.5" fontWeight="600" className="num">−8.7 *</text>
            <text x="0" y="297" fontSize="13">Olz 10 ± 2.5 mg</text>
            <rect x="140" y="284" width="91.5" height="18" className="f-accent"/>
            <text x="236.5" y="297.5" fontSize="12.5" fontWeight="600" className="num">−6.1</text>
            <text x="0" y="325" fontSize="13">Olz 15 ± 2.5 mg</text>
            <rect x="140" y="312" width="202.5" height="18" className="f-accent"/>
            <text x="347.5" y="325.5" fontSize="12.5" fontWeight="600" className="num">−13.5 * †</text>
            <text x="0" y="353" fontSize="13">Haloperidol</text>
            <rect x="140" y="340" width="99.0" height="18" className="f-ochre"/>
            <text x="244.0" y="353.5" fontSize="12.5" fontWeight="600" className="num">−6.6</text>
            </svg>
        </div>
        <figcaption><span className="fig-no">Figure 2</span>Mean change from baseline to endpoint (LOCF). Negative values indicate improvement. * p ≤ 0.01 versus placebo, except SANS for olanzapine 5 ± 2.5 mg (p ≤ 0.05). † p ≤ 0.05 versus haloperidol. BPRS, Brief Psychiatric Rating Scale (items 0–6); SANS, Scale for the Assessment of Negative Symptoms. Redrawn from Beasley et al. 1996, Table 5.<sup><a className="cite" href="/references#ref-10" aria-label="Reference 10">10</a></sup></figcaption>
      </figure>
    </article>
  </div>
</section>


<section className="section section--surface" id="acute-mania" aria-labelledby="mania-title">
  <div className="wrap evidence-block">
    <div className="stack">
      <span className="eyebrow">Bipolar disorder</span>
      <h2 id="mania-title">Evidence in acute mania</h2>
      <p>The product information describes clinical studies evaluating olanzapine in acute manic or mixed episodes associated with bipolar disorder.</p>
      <p className="small muted">The SmPC does not report effect sizes for these studies. Outcomes are therefore given in words.</p>
    </div>
    <ul className="ruled">
      <li><span className="label">Comparison with placebo</span><p style={{ marginTop: '0.3rem' }}>Superior efficacy to placebo in reduction of manic symptoms over 3 weeks.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p></li>
      <li><span className="label">Comparison with divalproex</span><p style={{ marginTop: '0.3rem' }}>Superior efficacy to valproate semisodium (divalproex) in reduction of manic symptoms over 3 weeks.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p></li>
      <li><span className="label">Combination with lithium or valproate</span><p style={{ marginTop: '0.3rem' }}>Adding olanzapine 10 mg to lithium or valproate resulted in a greater reduction in symptoms of mania than lithium or valproate monotherapy after 6 weeks.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p></li>
      <li><span className="label">Symptomatic remission</span><p style={{ marginTop: '0.3rem' }}>Comparable efficacy results to haloperidol in the proportion of patients in symptomatic remission from mania and depression at 6 and 12 weeks.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p></li>
    </ul>
  </div>
</section>

<section className="section section--surface" id="tohen-1999" aria-labelledby="th-title" style={{ paddingTop: '0' }}>
  <div className="wrap">
    <article className="trial" aria-labelledby="th-title">
      <div>
        <span className="eyebrow">Published trial · Acute mania</span>
        <h3 id="th-title" style={{ marginTop: '0.5rem' }}>Olanzapine versus placebo in the treatment of acute mania</h3>
        <p style={{ marginTop: '0.75rem' }}>A 3-week, randomised, double-blind trial in 139 patients with a manic or mixed episode of bipolar I disorder. Olanzapine produced a significantly greater mean improvement in Young Mania Rating Scale total score than placebo (primary endpoint), and significantly more patients met the predefined response criterion.<sup><a className="cite" href="/references#ref-11" aria-label="Reference 11">11</a></sup></p>
        <dl className="trial-meta">
          <dt>Design</dt><dd>Randomised, double-blind, placebo-controlled, parallel group; 16 US sites</dd>
          <dt>Patients</dt><dd>n = 139 (olanzapine 70, placebo 69); DSM-IV bipolar disorder, manic or mixed episode; YMRS ≥ 20; 53% with psychotic features</dd>
          <dt>Dosing</dt><dd>Olanzapine started at 10 mg/day, adjustable 5–20 mg/day; mean modal dose 14.9 mg/day</dd>
          <dt>Endpoints</dt><dd>Primary: change in YMRS total (LOCF). Response defined a priori as ≥ 50% YMRS decrease</dd>
        </dl>
        <div className="balance">
          <h4>Safety in this trial</h4>
          <p>Somnolence (32.9% vs 17.4%), dry mouth (25.7% vs 8.7%), dizziness (22.9% vs 5.8%) and weight gain (11.4% vs 1.4%) were more frequent with olanzapine. Mean weight change was +1.65 kg versus −0.44 kg over 3 weeks. Treatment-emergent ALT elevations occurred in 17.6% of olanzapine-treated patients versus 0% on placebo.<sup><a className="cite" href="/references#ref-11" aria-label="Reference 11">11</a></sup></p>
        </div>
        <p className="limits"><strong>Limitations.</strong> Three-week duration; high placebo dropout (65.2%); concomitant lorazepam permitted. The EU SmPC recommends a 15 mg starting dose for monotherapy of a manic episode, whereas this trial started at 10 mg.<sup><a className="cite" href="/references#ref-11" aria-label="Reference 11, section 4.2">11</a><span className="cite-sep">,</span><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.2">1</a></sup></p>
      </div>
      <figure className="fig">
        <div className="fig-frame">
          <div className="fig-pair">
            <svg viewBox="0 0 270 250" role="img" aria-labelledby="thf-a">
            <title id="thf-a">YMRS total, mean change: olanzapine −10.26, placebo −4.88, p = 0.02</title>
            <text x="0" y="16" fontSize="11.5" className="t-mono t-muted">YMRS TOTAL · MEAN CHANGE</text>
            <g className="s-rule" strokeWidth="1">
            <line x1="44" y1="190.0" x2="262" y2="190.0"/>
            <line x1="44" y1="136.7" x2="262" y2="136.7"/>
            <line x1="44" y1="83.3" x2="262" y2="83.3"/>
            <line x1="44" y1="30.0" x2="262" y2="30.0"/>
            </g><g fontSize="11" className="t-mono t-muted" textAnchor="end">
            <text x="38" y="194.0">0</text>
            <text x="38" y="140.7">−4</text>
            <text x="38" y="87.3">−8</text>
            <text x="38" y="34.0">−12</text>
            </g>
            <rect x="78" y="53.19999999999999" width="64" height="136.8" className="f-accent"/>
            <text x="110" y="45.19999999999999" textAnchor="middle" fontSize="14" fontWeight="600" className="num">−10.26</text>
            <text x="110" y="210" textAnchor="middle" fontSize="13">Olanzapine</text>
            <rect x="178" y="124.9" width="64" height="65.1" className="f-ochre"/>
            <text x="210" y="116.9" textAnchor="middle" fontSize="14" fontWeight="600" className="num">−4.88</text>
            <text x="210" y="210" textAnchor="middle" fontSize="13">Placebo</text>
            <text x="145" y="238" textAnchor="middle" fontSize="12" className="t-muted">p = 0.02</text></svg>
            <svg viewBox="0 0 270 250" role="img" aria-labelledby="thf-b">
            <title id="thf-b">Responders, ≥ 50% YMRS decrease: olanzapine 48.6%, placebo 24.2%, p = 0.004</title>
            <text x="0" y="16" fontSize="11.5" className="t-mono t-muted">RESPONDERS (≥ 50% DECREASE)</text>
            <g className="s-rule" strokeWidth="1">
            <line x1="44" y1="190.0" x2="262" y2="190.0"/>
            <line x1="44" y1="136.7" x2="262" y2="136.7"/>
            <line x1="44" y1="83.3" x2="262" y2="83.3"/>
            <line x1="44" y1="30.0" x2="262" y2="30.0"/>
            </g><g fontSize="11" className="t-mono t-muted" textAnchor="end">
            <text x="38" y="194.0">0</text>
            <text x="38" y="140.7">20</text>
            <text x="38" y="87.3">40</text>
            <text x="38" y="34.0">60%</text>
            </g>
            <rect x="78" y="60.400000000000006" width="64" height="129.6" className="f-accent"/>
            <text x="110" y="52.400000000000006" textAnchor="middle" fontSize="14" fontWeight="600" className="num">48.6%</text>
            <text x="110" y="210" textAnchor="middle" fontSize="13">Olanzapine</text>
            <rect x="178" y="125.5" width="64" height="64.5" className="f-ochre"/>
            <text x="210" y="117.5" textAnchor="middle" fontSize="14" fontWeight="600" className="num">24.2%</text>
            <text x="210" y="210" textAnchor="middle" fontSize="13">Placebo</text>
            <text x="145" y="238" textAnchor="middle" fontSize="12" className="t-muted">p = 0.004 · 34/70 vs 16/66</text></svg>
          </div>
        </div>
        <figcaption><span className="fig-no">Figure 3</span>Mean change in YMRS total score from baseline to endpoint (LOCF; difference −5.38 points) and proportion of responders at 3 weeks. YMRS, Young Mania Rating Scale. Redrawn from Tohen et al. 1999, Table 2 and text.<sup><a className="cite" href="/references#ref-11" aria-label="Reference 11">11</a></sup></figcaption>
      </figure>
    </article>
  </div>
</section>


<section className="section" id="recurrence" aria-labelledby="rec-title">
  <div className="wrap evidence-block">
    <div className="stack">
      <span className="eyebrow">Bipolar disorder</span>
      <h2 id="rec-title">Evidence in recurrence prevention</h2>
      <p>Clinical studies have evaluated continued olanzapine treatment in patients who responded to treatment for a manic episode.</p>
      <p>The European SmPC reports statistically significant superiority over placebo in a 12-month recurrence-prevention study. It also describes a second study comparing olanzapine with lithium after remission achieved with combination treatment, in which olanzapine was statistically non-inferior.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
      <p>In an 18-month study, olanzapine co-therapy with lithium or valproate was not statistically significantly superior to lithium or valproate alone in delaying recurrence.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
      <a className="more" href="bipolar-disorder.html#recurrence">Study designs and results <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
    </div>
    <div className="table-wrap" tabIndex={0} role="region" aria-label="Recurrence prevention studies">
      <table className="data">
        <caption>Recurrence-prevention studies described in the EU SmPC</caption>
        <thead><tr><th scope="col">Comparison</th><th scope="col" className="n">Duration</th><th scope="col">Result on bipolar recurrence</th></tr></thead>
        <tbody>
          <tr><th scope="row">Olanzapine vs placebo</th><td className="n">12 months</td><td>Superior (primary endpoint)</td></tr>
          <tr><th scope="row">Olanzapine vs lithium</th><td className="n">12 months</td><td>Non-inferior; 30.0% vs 38.3%, p = 0.055 (primary endpoint)</td></tr>
          <tr><th scope="row">Olanzapine + lithium or valproate vs lithium or valproate</th><td className="n">18 months</td><td>Not statistically significantly superior</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="section section--surface" id="long-term" aria-labelledby="lt-title">
  <div className="wrap evidence-block">
    <div className="stack">
      <span className="eyebrow">Safety over time</span>
      <h2 id="lt-title">Long-term treatment considerations</h2>
      <p>Long-term treatment requires evaluation of both clinical response and safety.</p>
      <p>The product information notes that the proportion of adult patients with clinically significant changes in weight, glucose, total/LDL/HDL cholesterol or triglycerides increased over time with longer exposure (at least 48 weeks). Ongoing monitoring is therefore an important part of treatment.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.8">1</a></sup></p>
      <p>The available evidence should be presented in a balanced manner, including relevant limitations, adverse effects and the distinction between trial findings and real-world observations.</p>
      <a className="more" href="/safety-prescribing#monitoring">Monitoring recommendations <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
    </div>
    <figure className="fig">
      <div className="fig-frame">
        <svg viewBox="0 0 540 320" role="img" aria-labelledby="wg-t wg-d">
          <title id="wg-t">Proportion of adult patients with weight gain by threshold and duration of exposure</title>
          <desc id="wg-d">Grouped bar chart. Weight gain of at least 7% of baseline: 22.2% with short-term treatment (median 47 days), 64.4% with long-term exposure (at least 48 weeks). At least 15%: 4.2% short-term, 31.7% long-term. At least 25%: 0.8% short-term, 12.3% long-term.</desc>
          <g fontSize="12">
            <rect x="70" y="8" width="14" height="14" className="f-accent-soft"/><text x="90" y="20">Short-term (median 47 days)</text>
            <rect x="300" y="8" width="14" height="14" className="f-accent"/><text x="320" y="20">Long-term (≥ 48 weeks)</text>
          </g>
          <g className="s-rule" strokeWidth="1">
            <line x1="60" y1="270" x2="530" y2="270" className="s-ink"/>
            <line x1="60" y1="238.57" x2="530" y2="238.57"/><line x1="60" y1="207.14" x2="530" y2="207.14"/><line x1="60" y1="175.71" x2="530" y2="175.71"/><line x1="60" y1="144.29" x2="530" y2="144.29"/><line x1="60" y1="112.86" x2="530" y2="112.86"/><line x1="60" y1="81.43" x2="530" y2="81.43"/><line x1="60" y1="50" x2="530" y2="50"/>
          </g>
          <g fontSize="11" className="t-mono t-muted" textAnchor="end">
            <text x="52" y="274">0</text><text x="52" y="242.6">10</text><text x="52" y="211.1">20</text><text x="52" y="179.7">30</text><text x="52" y="148.3">40</text><text x="52" y="116.9">50</text><text x="52" y="85.4">60</text><text x="52" y="54">70%</text>
          </g>
          {/*  scale: 220px per 70% => 3.142857 px per % ; baseline y=270  */}
          <rect x="118" y="200.23" width="44" height="69.77" className="f-accent-soft"/>
          <rect x="168" y="67.6" width="44" height="202.4" className="f-accent"/>
          <rect x="268" y="256.8" width="44" height="13.2" className="f-accent-soft"/>
          <rect x="318" y="170.37" width="44" height="99.63" className="f-accent"/>
          <rect x="418" y="267.49" width="44" height="2.51" className="f-accent-soft"/>
          <rect x="468" y="231.34" width="44" height="38.66" className="f-accent"/>
          <g fontSize="12.5" fontWeight="600" textAnchor="middle" className="num">
            <text x="140" y="194">22.2</text><text x="190" y="61">64.4</text>
            <text x="290" y="250">4.2</text><text x="340" y="164">31.7</text>
            <text x="440" y="261">0.8</text><text x="490" y="225">12.3</text>
          </g>
          <g fontSize="13" textAnchor="middle" fontWeight="600">
            <text x="165" y="292">≥ 7%</text><text x="315" y="292">≥ 15%</text><text x="465" y="292">≥ 25%</text>
          </g>
          <text x="295" y="314" fontSize="11.5" textAnchor="middle" className="t-muted">Weight gain as a proportion of baseline body weight</text>
        </svg>
      </div>
      <figcaption><span className="fig-no">Figure 4</span>Percentage of adult patients reaching each weight-gain threshold. Clinically significant weight gain was observed across all baseline BMI categories.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.8">1</a></sup></figcaption>
    </figure>
  </div>
</section>

<section className="section" id="guidelines" aria-labelledby="gl-title">
  <div className="wrap">
    <div className="grid grid--5-7">
      <div className="stack">
        <span className="eyebrow">Context</span>
        <h2 id="gl-title">Guideline and formulary context</h2>
        <p>Treatment guidelines place olanzapine among several options, not ahead of them. Their recommendations depend on the phase of illness, the patient's preferences and how well the adverse-effect profile suits that person. Local guidance and reimbursement rules apply.</p>
      </div>
      <div className="table-wrap">
        <table className="guide-table">
          <caption className="sr-only">Summary of guideline and formulary positions relevant to olanzapine</caption>
          <thead><tr><th scope="col">Source</th><th scope="col">Scope</th><th scope="col">Relevant statements</th></tr></thead>
          <tbody>
            <tr><th scope="row">APA practice guideline, 3rd ed., 2021<sup><a className="cite" href="/references#ref-6" aria-label="Reference 6">6</a></sup></th><td>Schizophrenia</td><td>Treat with an antipsychotic and monitor effectiveness and side effects (1A). Continue antipsychotic treatment after symptoms improve (1A), preferably with the same medication (2B). Clozapine for treatment-resistant schizophrenia (1B). Long-acting injectable if the patient prefers it or adherence is poor (2B). The guideline does not rank individual antipsychotics.</td></tr>
            <tr><th scope="row">BAP guidelines, 2016<sup><a className="cite" href="/references#ref-7" aria-label="Reference 7">7</a></sup></th><td>Bipolar disorder</td><td>For severe mania, consider an oral dopamine antagonist; haloperidol, olanzapine, risperidone and quetiapine are described as particularly effective. In long-term treatment, olanzapine is among the agents shown to prevent manic relapse; lithium is recommended as initial monotherapy. Weight gain is noted as a prominent adverse effect of olanzapine.</td></tr>
            <tr><th scope="row">WPA review, 2008<sup><a className="cite" href="/references#ref-8" aria-label="Reference 8">8</a></sup></th><td>Schizophrenia</td><td>Apart from clozapine, no consistent efficacy differences between second-generation antipsychotics. Olanzapine is associated with more weight gain and metabolic adverse effects than most comparators.</td></tr>
            <tr><th scope="row">WHO Model List of Essential Medicines, 2023<sup><a className="cite" href="/references#ref-9" aria-label="Reference 9">9</a></sup></th><td>Psychotic and bipolar disorders</td><td>Olanzapine is listed as a therapeutic alternative to risperidone for psychotic disorders and to quetiapine for bipolar disorders.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<section className="section" aria-labelledby="sr-title">
  <div className="wrap grid grid--5-7">
    <div>
      <span className="eyebrow">Sources</span>
      <h2 id="sr-title" style={{ marginTop: '0.75rem' }}>Scientific references</h2>
    </div>
    <div className="stack measure">
      <p>The study explorer, the mood-score analysis, the acute mania and recurrence summaries and the long-term weight data are taken from the EU Summary of Product Characteristics for ZYPREXA coated tablets. The two published trials (Beasley 1996; Tohen 1999) are redrawn from the original publications and cited where they appear.</p>
      <a className="more" href="/references">References and resources <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
    </div>
  </div>
</section>
    </main>
  );
}

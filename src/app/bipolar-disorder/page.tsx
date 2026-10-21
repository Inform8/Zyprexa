import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Understanding Bipolar Disorder · ZYPREXA HCP",
  description: "Bipolar disorder for healthcare professionals: mood episodes, treatment objectives, approved olanzapine indications, and evidence in acute mania and recurrence prevention.",
};

export default function BipolarDisorderPage() {
  return (
    <main id="main">
      <header className="page-head">
  <div className="wrap grid grid--7-5">
    <div>
      <span className="eyebrow">Disease area</span>
      <h1>Understanding bipolar disorder</h1>
      <p className="standfirst">Recognizing mood episodes and defining appropriate treatment objectives.</p>
    </div>
    <div className="stack" style={{ alignSelf: 'end' }}>
      <p>Bipolar disorder is characterized by episodes of mood disturbance, including mania or hypomania and depression, depending on the type of bipolar disorder. Episodes can affect energy, sleep, judgement, behaviour and everyday functioning.</p>
      <p>Treatment decisions depend on the current episode, previous clinical history, treatment response, comorbidities and the individual's needs.</p>
    </div>
  </div>
</header>

<section className="section" aria-labelledby="ep-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Episodes</span>
      <h2 id="ep-title">Understanding mood episodes</h2>
    </div>
    <figure className="fig">
      <div className="episode-band">
        <section className="episode" aria-labelledby="ep-mania">
          <span className="pole"><span className="pole-arrow" aria-hidden="true">↑</span>Elevated, expansive or irritable mood</span>
          <h3 id="ep-mania">Mania</h3>
          <p>Mania involves a distinct period of abnormally elevated, expansive or irritable mood and increased activity or energy. Symptoms may include reduced need for sleep, increased speech, racing thoughts, inflated self-esteem and impulsive or high-risk behaviour.</p>
          <p>Severe manic episodes may be associated with marked functional impairment and can require urgent clinical assessment.</p>
        </section>
        <section className="episode episode--mixed" aria-labelledby="ep-mixed">
          <span className="pole"><span className="pole-arrow" aria-hidden="true">↕</span>Features of both</span>
          <h3 id="ep-mixed">Mixed features</h3>
          <p>Some episodes involve symptoms associated with both mania and depression. These presentations can be complex and require careful clinical assessment.</p>
        </section>
        <section className="episode" aria-labelledby="ep-dep">
          <span className="pole"><span className="pole-arrow" aria-hidden="true">↓</span>Persistent low mood</span>
          <h3 id="ep-dep">Depression</h3>
          <p>Depressive episodes may involve persistent low mood, reduced interest or pleasure, fatigue, changes in sleep or appetite, feelings of worthlessness and difficulties with concentration.</p>
          <p>The clinical presentation and treatment needs differ from those of mania. The European SmPC does not list bipolar depression as an indication for oral Zyprexa monotherapy.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.1">1</a></sup></p>
        </section>
      </div>
      <figcaption><span className="fig-no">Figure 1</span>Features of manic, mixed and depressive episodes.<sup><a className="cite" href="/references#ref-4" aria-label="Reference 4">4</a></sup> The arrangement groups episode features; it does not represent an illness course, the order in which episodes occur, or their frequency.</figcaption>
    </figure>
  </div>
</section>

<section className="section section--surface" aria-labelledby="obj-title">
  <div className="wrap grid grid--7-5">
    <div>
      <div className="section-head">
        <span className="eyebrow">Treatment</span>
        <h2 id="obj-title">Treatment objectives</h2>
        <p>Treatment objectives depend on the phase of illness.</p>
      </div>
      <ul className="objectives">
        <li><b>Acute management</b><span>Address the current episode and associated clinical risks.</span></li>
        <li><b>Stabilization</b><span>Consolidate improvement and review tolerability.</span></li>
        <li><b>Recurrence prevention</b><span>Support sustained clinical stability following a treatment response.</span></li>
      </ul>
      <p style={{ marginTop: '1.5rem' }}>These objectives should be individualized. Treatment for an acute manic episode should not automatically be assumed to provide adequate management for every subsequent mood episode.</p>
    </div>
    <div className="indicated" aria-labelledby="ind-title">
      <div>
        <span className="eyebrow">Olanzapine in bipolar disorder · EU SmPC 4.1</span>
        <h3 id="ind-title" style={{ marginTop: '0.5rem' }}>Oral olanzapine is indicated for</h3>
        <ul>
          <li>Treatment of moderate to severe manic episodes.</li>
          <li>Prevention of recurrence in patients with bipolar disorder whose manic episode has responded to olanzapine.</li>
        </ul>
      </div>
      <div className="not">
        <h4>Not an indication in the EU SmPC</h4>
        <ul><li>Bipolar depression (oral monotherapy)</li></ul>
      </div>
      <div>
        <p className="small">The product information also describes use in combination therapy for acute mania. The choice of monotherapy or combination therapy depends on the approved prescribing information and the patient's clinical circumstances.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.2">1</a></sup></p>
      </div>
    </div>
  </div>
</section>

<section className="section" id="acute-mania" aria-labelledby="am-title">
  <div className="wrap evidence-block">
    <div className="stack">
      <span className="eyebrow">Clinical evidence</span>
      <h2 id="am-title">Evidence for acute mania</h2>
      <p>Clinical studies described in the product information evaluated olanzapine in patients experiencing manic or mixed episodes associated with bipolar disorder.</p>
      <a className="more" href="/clinical-evidence#acute-mania">All acute mania study descriptions <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
    </div>
    <div className="stack">
      <ul className="ruled">
        <li><strong>Versus placebo and valproate semisodium (divalproex).</strong> Olanzapine showed greater reduction in manic symptoms than placebo and divalproex over 3 weeks in the studies described.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></li>
        <li><strong>Published placebo-controlled trial.</strong> In a 3-week trial in 139 patients with a manic or mixed episode, olanzapine (mean modal dose 14.9 mg/day) reduced Young Mania Rating Scale scores by a mean 10.3 points versus 4.9 with placebo (p = 0.02); 48.6% versus 24.2% of patients responded (p = 0.004). Somnolence, dizziness, dry mouth and weight gain were more frequent with olanzapine.<sup><a className="cite" href="/references#ref-11" aria-label="Reference 11">11</a></sup> <a href="/clinical-evidence#tohen-1999">Trial details</a></li>
        <li><strong>Combination with lithium or valproate.</strong> In patients treated with lithium or valproate for at least 2 weeks, adding olanzapine 10 mg resulted in a greater reduction in manic symptoms than lithium or valproate alone after six weeks.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></li>
      </ul>
      <p className="muted">These findings must be interpreted in the context of the individual study designs, populations, comparators and endpoints. They should not be generalized to all bipolar presentations.</p>
    </div>
  </div>
</section>

<section className="section recurrence" id="recurrence" aria-labelledby="rp-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Clinical evidence · 12-month studies</span>
      <h2 id="rp-title">Evidence for recurrence prevention</h2>
      <p>Two 12-month studies enrolled patients whose manic episode had remitted, then randomised them to continue olanzapine or to a comparator. Both used bipolar recurrence as the primary endpoint.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
    </div>
    <figure className="fig">
      <div className="fig-frame fig-scroll" tabIndex={0} aria-label="Study design diagram, scrollable">
        <svg className="design-flow" viewBox="0 0 980 330" role="img" aria-labelledby="df-t df-d">
          <title id="df-t">Design of the two 12-month recurrence-prevention studies</title>
          <desc id="df-d">Study A: patients with a manic episode who achieved remission on olanzapine were randomised to olanzapine or placebo for 12 months; olanzapine was statistically significantly superior to placebo on bipolar recurrence. Study B: patients who achieved remission on olanzapine plus lithium were randomised to olanzapine or lithium alone for 12 months; olanzapine was statistically non-inferior to lithium, with recurrence in 30.0% versus 38.3%, p = 0.055.</desc>
          <defs><marker id="fa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10z" className="f-ink"/></marker></defs>
          <g fontSize="13">
            <text x="0" y="22" className="t-mono t-accent" fontSize="12" fontWeight="600">STUDY A</text>
            <rect x="0" y="36" width="200" height="66" className="f-paper s-rule"/>
            <text x="12" y="62" fontWeight="600">Manic episode</text><text x="12" y="82" className="t-muted">treated with olanzapine</text>
            <line x1="200" y1="69" x2="246" y2="69" className="s-ink" marker-end="url(#fa)"/>
            <rect x="250" y="36" width="130" height="66" className="f-paper s-rule"/>
            <text x="262" y="62" fontWeight="600">Remission</text><text x="262" y="82" className="t-muted">achieved</text>
            <line x1="380" y1="69" x2="416" y2="69" className="s-ink" marker-end="url(#fa)"/>
            <circle cx="438" cy="69" r="18" className="f-ink"/><text x="438" y="74" textAnchor="middle" fontWeight="600" style={{ fill: 'var(--paper)' }}>R</text>
            <path d="M456 60 L500 44 M456 78 L500 94" className="s-ink" fill="none"/>
            <rect x="500" y="30" width="190" height="28" className="f-accent"/><text x="512" y="49" fontWeight="600" style={{ fill: 'var(--on-accent)' }}>Olanzapine</text>
            <rect x="500" y="80" width="190" height="28" className="f-ochre"/><text x="512" y="99" fontWeight="600" style={{ fill: '#1b1306' }}>Placebo</text>
            <text x="700" y="49" className="t-mono t-muted" fontSize="11.5">12 MONTHS</text>
            <text x="700" y="99" className="t-mono t-muted" fontSize="11.5">12 MONTHS</text>
            <line x1="790" y1="36" x2="790" y2="102" className="s-rule"/>
            <text x="802" y="54" fontWeight="600">Superior to placebo</text>
            <text x="802" y="74" className="t-muted">Primary endpoint:</text>
            <text x="802" y="92" className="t-muted">bipolar recurrence</text>
          </g>
          <line x1="0" y1="150" x2="980" y2="150" className="s-rule"/>
          <g fontSize="13" transform="translate(0,180)">
            <text x="0" y="22" className="t-mono t-accent" fontSize="12" fontWeight="600">STUDY B</text>
            <rect x="0" y="36" width="200" height="66" className="f-paper s-rule"/>
            <text x="12" y="62" fontWeight="600">Manic episode</text><text x="12" y="82" className="t-muted">olanzapine + lithium</text>
            <line x1="200" y1="69" x2="246" y2="69" className="s-ink" marker-end="url(#fa)"/>
            <rect x="250" y="36" width="130" height="66" className="f-paper s-rule"/>
            <text x="262" y="62" fontWeight="600">Remission</text><text x="262" y="82" className="t-muted">achieved</text>
            <line x1="380" y1="69" x2="416" y2="69" className="s-ink" marker-end="url(#fa)"/>
            <circle cx="438" cy="69" r="18" className="f-ink"/><text x="438" y="74" textAnchor="middle" fontWeight="600" style={{ fill: 'var(--paper)' }}>R</text>
            <path d="M456 60 L500 44 M456 78 L500 94" className="s-ink" fill="none"/>
            <rect x="500" y="30" width="190" height="28" className="f-accent"/><text x="512" y="49" fontWeight="600" style={{ fill: 'var(--on-accent)' }}>Olanzapine alone</text>
            <rect x="500" y="80" width="190" height="28" className="f-ochre"/><text x="512" y="99" fontWeight="600" style={{ fill: '#1b1306' }}>Lithium alone</text>
            <text x="700" y="49" className="t-mono t-muted" fontSize="11.5">12 MONTHS</text>
            <text x="700" y="99" className="t-mono t-muted" fontSize="11.5">12 MONTHS</text>
            <line x1="790" y1="36" x2="790" y2="102" className="s-rule"/>
            <text x="802" y="54" fontWeight="600">Non-inferior to lithium</text>
            <text x="802" y="74" className="t-muted">Recurrence 30.0% vs 38.3%</text>
            <text x="802" y="92" className="t-muted">p = 0.055</text>
          </g>
        </svg>
      </div>
      <figcaption><span className="fig-no">Figure 2</span>Study designs as described in the EU SmPC section 5.1. R, randomisation. Patient numbers, recurrence definitions and blinding are not stated in the SmPC and are therefore not shown.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></figcaption>
    </figure>

    <div className="chart-pair" style={{ marginTop: '3rem' }}>
      <div className="stack">
        <h3>Study A · Olanzapine versus placebo</h3>
        <p>The European SmPC describes a 12-month study in patients who had achieved remission from a manic episode with olanzapine. Patients randomised to continue olanzapine had statistically significant superiority over placebo for the primary endpoint of bipolar recurrence. Olanzapine also showed a statistically significant advantage over placebo in preventing either recurrence into mania or recurrence into depression.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
        <p className="small muted">Recurrence rates for this study are not reported in the SmPC, so no chart is shown.</p>
      </div>
      <figure className="fig">
        <h3 style={{ marginBottom: '1rem' }}>Study B · Olanzapine versus lithium</h3>
        <div className="fig-frame">
          <svg viewBox="0 0 520 170" role="img" aria-labelledby="rb-t rb-d">
            <title id="rb-t">Bipolar recurrence at 12 months, Study B</title>
            <desc id="rb-d">Horizontal bar chart. Patients with bipolar recurrence: olanzapine 30.0%, lithium 38.3%. Olanzapine was statistically non-inferior to lithium, p = 0.055.</desc>
            <g className="s-rule" strokeWidth="1">
              <line x1="140" y1="18" x2="140" y2="128"/><line x1="208" y1="18" x2="208" y2="128"/><line x1="276" y1="18" x2="276" y2="128"/><line x1="344" y1="18" x2="344" y2="128"/><line x1="412" y1="18" x2="412" y2="128"/><line x1="480" y1="18" x2="480" y2="128"/>
            </g>
            <g fontSize="11" className="t-mono t-muted" textAnchor="middle">
              <text x="140" y="146">0</text><text x="208" y="146">10</text><text x="276" y="146">20</text><text x="344" y="146">30</text><text x="412" y="146">40</text><text x="480" y="146">50%</text>
            </g>
            <text x="0" y="50" fontSize="13" fontWeight="600">Olanzapine</text>
            <rect x="140" y="30" width="204" height="32" className="f-accent"/>
            <text x="352" y="52" fontSize="14" fontWeight="600" className="num">30.0%</text>
            <text x="0" y="100" fontSize="13" fontWeight="600">Lithium</text>
            <rect x="140" y="80" width="260.4" height="32" className="f-ochre"/>
            <text x="408" y="102" fontSize="14" fontWeight="600" className="num">38.3%</text>
            <text x="0" y="166" fontSize="11.5" className="t-muted">Patients with bipolar recurrence (primary endpoint)</text>
          </svg>
        </div>
        <figcaption><span className="fig-no">Figure 3</span>Olanzapine was statistically non-inferior to lithium on the primary endpoint of bipolar recurrence (p = 0.055). Patients had achieved remission with olanzapine plus lithium before randomisation.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></figcaption>
      </figure>
    </div>

    <div className="notice" style={{ marginTop: '3rem' }}>
      <h3>Long-term combination therapy</h3>
      <p>In an 18-month co-therapy study in manic or mixed episode patients stabilised with olanzapine plus a mood stabiliser (lithium or valproate), long-term olanzapine co-therapy with lithium or valproate was not statistically significantly superior to lithium or valproate alone in delaying bipolar recurrence, defined according to syndromic (diagnostic) criteria.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
    </div>
  </div>
</section>

<section className="section" aria-labelledby="bg-title">
  <div className="wrap grid grid--5-7">
    <div>
      <span className="eyebrow">Guidelines</span>
      <h2 id="bg-title" style={{ marginTop: '0.75rem' }}>Where olanzapine sits in guidelines</h2>
    </div>
    <div className="stack measure">
      <p>The British Association for Psychopharmacology guideline lists olanzapine among the oral dopamine antagonists that are particularly effective in severe mania, alongside haloperidol, risperidone and quetiapine.<sup><a className="cite" href="/references#ref-7" aria-label="Reference 7">7</a></sup></p>
      <p>For long-term treatment, the same guideline recommends considering lithium as initial monotherapy. Olanzapine is among the agents shown to prevent manic relapse; the guideline identifies lithium, quetiapine and lamotrigine as the agents with convincing evidence for preventing depressive relapse. It also notes that weight gain is a prominent adverse effect of olanzapine.<sup><a className="cite" href="/references#ref-7" aria-label="Reference 7">7</a></sup></p>
      <p>The WHO Model List of Essential Medicines includes olanzapine as a therapeutic alternative to quetiapine for bipolar disorders.<sup><a className="cite" href="/references#ref-9" aria-label="Reference 9">9</a></sup></p>
      <a className="more" href="/clinical-evidence#guidelines">Guideline and formulary context <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
    </div>
  </div>
</section>

<section className="section section--surface" aria-labelledby="bs-title">
  <div className="wrap grid grid--7-5">
    <div className="stack">
      <span className="safety-mark">Safety</span>
      <h2 id="bs-title">Safety considerations during treatment</h2>
      <p>Weight gain, increased appetite, changes in glucose and lipid parameters, somnolence and other adverse reactions should be considered when selecting and monitoring treatment.</p>
      <p>Regular follow-up allows clinicians to evaluate clinical response, tolerability and relevant physical-health parameters.</p>
      <div className="actions">
        <a className="btn btn--primary" href="/safety-prescribing">Review prescribing information <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
      </div>
    </div>
    <dl className="def def--stat" aria-label="Weight gain in bipolar disorder studies (SmPC 4.8)" style={{ alignSelf: 'start' }}>
      <div><dt><span className="num">17.4%</span></dt><dd>of patients gained ≥ 7% of baseline body weight during acute treatment (up to 6 weeks) with olanzapine in combination with lithium or divalproex.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.8">1</a></sup></dd></div>
      <div><dt><span className="num">39.9%</span></dt><dd>of patients gained ≥ 7% of baseline body weight with long-term olanzapine (up to 12 months) for recurrence prevention.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.8">1</a></sup></dd></div>
      <div><dt><span className="num">4.1%</span></dt><dd>incidence of neutropenia with valproate combination therapy in one bipolar mania trial.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.8">1</a></sup></dd></div>
    </dl>
  </div>
</section>
    </main>
  );
}

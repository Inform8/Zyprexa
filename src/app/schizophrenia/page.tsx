import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Understanding Schizophrenia · ZYPREXA HCP",
  description: "Schizophrenia for healthcare professionals: positive, negative and cognitive symptom domains, neurobiology, phases of treatment and the role of olanzapine.",
};

export default function SchizophreniaPage() {
  return (
    <main id="main">
      <header className="page-head">
  <div className="wrap grid grid--7-5">
    <div>
      <span className="eyebrow">Disease area</span>
      <h1>Understanding schizophrenia</h1>
      <p className="standfirst">A multidimensional condition requiring individualized, ongoing care.</p>
    </div>
    <div className="stack" style={{ alignSelf: 'end' }}>
      <p>Schizophrenia is a psychiatric disorder that can affect how a person perceives reality, thinks, experiences emotions and interacts with others. Its presentation varies between individuals, and symptoms can change over time.</p>
      <p>Treatment aims to manage symptoms, prevent relapse where possible, support everyday functioning and address the individual's broader healthcare needs.</p>
    </div>
  </div>
</header>

<section className="section" aria-labelledby="domains-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Figure 1</span>
      <h2 id="domains-title">Understanding the symptom domains</h2>
    </div>
    <figure className="fig">
      <div className="domains">
        <section className="domain" aria-labelledby="d-pos">
          <div className="domain-glyph" aria-hidden="true">+</div>
          <h3 id="d-pos">Positive symptoms</h3>
          <p className="defn">Experiences or behaviours that are <strong>added</strong> to a person's usual functioning.</p>
          <ul aria-label="Examples of positive symptoms">
            <li>Hallucinations</li>
            <li>Delusions</li>
            <li>Disorganized thinking or speech</li>
            <li>Disorganized behaviour</li>
          </ul>
          <p className="impact">These symptoms may substantially affect a person's perception of reality and ability to function.</p>
        </section>
        <section className="domain" aria-labelledby="d-neg">
          <div className="domain-glyph" aria-hidden="true">−</div>
          <h3 id="d-neg">Negative symptoms</h3>
          <p className="defn">A <strong>reduction or loss</strong> of aspects of normal functioning. Examples may include:</p>
          <ul aria-label="Examples of negative symptoms">
            <li>Reduced motivation</li>
            <li>Diminished emotional expression</li>
            <li>Reduced speech</li>
            <li>Social withdrawal</li>
            <li>Reduced engagement in everyday activities</li>
          </ul>
          <p className="impact">Negative symptoms can affect social relationships, occupational functioning and participation in daily life.</p>
        </section>
        <section className="domain" aria-labelledby="d-cog">
          <div className="domain-glyph" aria-hidden="true"><svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="3" fill="currentColor"/><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 2.4"/></svg></div>
          <h3 id="d-cog">Cognitive symptoms</h3>
          <p className="defn">Difficulties with the <strong>mental processes</strong> needed for everyday activities. These may include difficulties with:</p>
          <ul aria-label="Examples of cognitive difficulties">
            <li>Attention and concentration</li>
            <li>Working memory</li>
            <li>Planning and organization</li>
            <li>Decision-making and executive functioning</li>
          </ul>
          <p className="impact">The pattern and severity of symptoms differ between individuals. Cognitive difficulties should be considered as part of the overall clinical assessment.</p>
        </section>
      </div>
      <figcaption><span className="fig-no">Figure 1</span>Three symptom domains of schizophrenia, with examples. Domains are not mutually exclusive and individual presentations vary.<sup><a className="cite" href="/references#ref-4" aria-label="Reference 4">4</a></sup></figcaption>
    </figure>
  </div>
</section>

<section className="section section--surface" aria-labelledby="neuro-title">
  <div className="wrap nt-layout">
    <div className="stack">
      <span className="eyebrow">Neurobiology</span>
      <h2 id="neuro-title">The neurobiology of schizophrenia</h2>
      <p>Schizophrenia is associated with complex changes in brain function and neurotransmission. One widely discussed model links three interconnected hypotheses: excess dopamine D2 activity in the mesolimbic pathway, hypofunction of glutamate NMDA receptors, and hyperfunction of cortical serotonin 5-HT<sub>2A</sub> receptors.<sup><a className="cite" href="/references#ref-5" aria-label="Reference 5">5</a></sup></p>
      <p>In this model, NMDA receptor hypofunction and 5-HT<sub>2A</sub> hyperfunction can each lead, further downstream, to mesolimbic dopamine hyperactivity, which is associated with positive symptoms. Negative and cognitive symptoms are thought to involve other circuits.<sup><a className="cite" href="/references#ref-5" aria-label="Reference 5">5</a></sup> No single neurotransmitter imbalance fully explains schizophrenia or accounts for every symptom an individual experiences.</p>
    </div>
    <figure className="fig">
      <div className="fig-frame">
        <svg viewBox="0 0 560 380" role="img" aria-labelledby="nt-t nt-d">
          <title id="nt-t">Three interconnected hypotheses of schizophrenia</title>
          <desc id="nt-d">Schematic. Two boxes at the top: serotonin hypothesis, cortical 5-HT2A receptor hyperfunction; glutamate hypothesis, NMDA receptor hypofunction. Arrows from both lead down to a central box: dopamine hypothesis, mesolimbic D2 hyperactivity. An arrow from that box leads to positive symptoms. A note states that negative and cognitive symptoms involve other circuits.</desc>
          <defs><marker id="nt-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10z" className="f-ink"/></marker></defs>
          <rect x="20" y="24" width="240" height="84" className="f-surface s-accent" strokeWidth="1.6"/>
          <text x="140" y="54" textAnchor="middle" fontSize="11.5" className="t-mono t-accent">SEROTONIN HYPOTHESIS</text>
          <text x="140" y="80" textAnchor="middle" fontSize="15" fontWeight="600">Cortical 5-HT<tspan baseline-shift="sub" fontSize="10">2A</tspan> hyperfunction</text>
          <rect x="300" y="24" width="240" height="84" className="f-surface s-accent" strokeWidth="1.6"/>
          <text x="420" y="54" textAnchor="middle" fontSize="11.5" className="t-mono t-accent">GLUTAMATE HYPOTHESIS</text>
          <text x="420" y="80" textAnchor="middle" fontSize="15" fontWeight="600">NMDA receptor hypofunction</text>
          <g className="s-ink" strokeWidth="1.4" fill="none">
            <path d="M140 108 V136 Q140 150 154 150 H232 Q246 150 246 164 V178" marker-end="url(#nt-ah)"/>
            <path d="M420 108 V136 Q420 150 406 150 H328 Q314 150 314 164 V178" marker-end="url(#nt-ah)"/>
            <line x1="280" y1="266" x2="280" y2="296" marker-end="url(#nt-ah)"/>
          </g>
          <text x="280" y="140" textAnchor="middle" fontSize="11.5" className="t-muted">downstream effects</text>
          <rect x="120" y="182" width="320" height="84" className="f-accent"/>
          <text x="280" y="212" textAnchor="middle" fontSize="11.5" className="t-mono" style={{ fill: 'var(--on-accent)' }}>DOPAMINE HYPOTHESIS</text>
          <text x="280" y="240" textAnchor="middle" fontSize="16" fontWeight="600" style={{ fill: 'var(--on-accent)' }}>Mesolimbic D<tspan baseline-shift="sub" fontSize="11">2</tspan> hyperactivity</text>
          <rect x="160" y="300" width="240" height="44" className="f-paper s-ink" strokeWidth="1.2"/>
          <text x="280" y="327" textAnchor="middle" fontSize="14" fontWeight="600">Positive symptoms</text>
          <text x="280" y="368" textAnchor="middle" fontSize="11.5" className="t-muted">Negative and cognitive symptoms involve other circuits</text>
        </svg>
      </div>
      <figcaption><span className="fig-no">Figure 2</span>Simplified schematic of the dopamine, glutamate and serotonin hypotheses and their proposed links. It does not depict anatomy or individual neurons. Adapted from Stahl 2018.<sup><a className="cite" href="/references#ref-5" aria-label="Reference 5">5</a></sup></figcaption>
    </figure>
  </div>
</section>

<section className="section" aria-labelledby="phases-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Course of care</span>
      <h2 id="phases-title">Treatment across the course of schizophrenia</h2>
      <p>Treatment needs can change over time. The following phases are a useful clinical framework rather than a rigid sequence that applies identically to every patient.</p>
    </div>
    <figure className="fig">
      <div className="fig-scroll" tabIndex={0} aria-label="Treatment phase diagram, scrollable">
        <svg viewBox="0 0 1100 112" style={{ minWidth: '640px', display: 'block' }} aria-hidden="true" focusable="false">
          <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" className="f-accent"/></marker></defs>
          <path d="M 920 54 C 920 86, 160 86, 160 54" className="s-accent" strokeWidth="1.6" fill="none" strokeDasharray="5 5" marker-end="url(#ah)"/>
          <text x="540" y="106" textAnchor="middle" fontSize="13" className="t-muted">Treatment needs can change over time; phases may recur</text>
          <line x1="20" y1="30" x2="1080" y2="30" className="s-rule" strokeWidth="2"/>
          <line x1="300" y1="30" x2="380" y2="30" className="s-accent" strokeWidth="2" marker-end="url(#ah)"/>
          <line x1="666" y1="30" x2="746" y2="30" className="s-accent" strokeWidth="2" marker-end="url(#ah)"/>
          <circle cx="160" cy="30" r="9" className="f-accent"/>
          <circle cx="540" cy="30" r="9" className="f-accent-soft"/>
          <circle cx="920" cy="30" r="9" className="f-surface s-accent" strokeWidth="2"/>
        </svg>
      </div>
      <div className="phases">
        <section className="phase" aria-labelledby="ph1"><span className="label">Phase</span><h3 id="ph1">Acute treatment</h3><p>The immediate objectives are to assess clinical severity and safety, manage acute symptoms and establish an appropriate treatment plan.</p></section>
        <section className="phase" aria-labelledby="ph2"><span className="label">Phase</span><h3 id="ph2">Stabilization</h3><p>As symptoms improve, treatment focuses on consolidating the response, reviewing tolerability and supporting a return to everyday routines.</p></section>
        <section className="phase" aria-labelledby="ph3"><span className="label">Phase</span><h3 id="ph3">Maintenance</h3><p>Ongoing treatment and follow-up aim to sustain clinical improvement, monitor adverse effects and identify early signs of deterioration.</p></section>
      </div>
      <figcaption><span className="fig-no">Figure 3</span>Phases of care as a clinical framework. Progression is not fixed, and individual patients may move between phases.</figcaption>
    </figure>
  </div>
</section>

<section className="section section--surface" aria-labelledby="role-title">
  <div className="wrap grid grid--7-5">
    <div className="stack">
      <span className="eyebrow">Olanzapine</span>
      <h2 id="role-title">The role of olanzapine</h2>
      <p>Olanzapine is an antipsychotic medicine indicated for schizophrenia. The European product information states that it is effective in maintaining clinical improvement during continuation therapy in patients who have shown an initial treatment response.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.1">1</a></sup></p>
      <p>Clinical decisions should consider the individual's symptoms, previous treatment response, comorbidities, preferences and potential adverse effects.</p>
      <a className="more" href="/clinical-evidence#schizophrenia">Review olanzapine clinical evidence <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
    </div>
    <aside className="notice notice--safety" aria-labelledby="role-safety">
      <span className="safety-mark">Safety</span>
      <h3 id="role-safety" style={{ marginTop: '0.5rem' }}>Weight and metabolic changes</h3>
      <p>Olanzapine treatment requires particular attention to weight and metabolic changes, as well as other safety considerations described in the approved product information.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
      <a className="more" href="/safety-prescribing#monitoring">Monitoring recommendations <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
    </aside>
  </div>
</section>

<section className="section" aria-labelledby="cont-title">
  <div className="wrap grid grid--5-7">
    <div>
      <span className="eyebrow">Follow-up</span>
      <h2 id="cont-title" style={{ marginTop: '0.75rem' }}>Supporting continuity of care</h2>
    </div>
    <div className="stack measure">
      <p>Schizophrenia management extends beyond symptom assessment. Follow-up should consider treatment response, tolerability, daily functioning, social support and the individual's ability to continue the agreed treatment plan.</p>
      <p>Treatment adherence may be affected by multiple factors, including adverse effects, the nature of the illness, treatment preferences and practical barriers. These factors should be explored collaboratively rather than attributed to the patient alone.</p>
      <p>The APA practice guideline recommends continuing antipsychotic medication once symptoms have improved, and suggests continuing the same antipsychotic where it has been effective. A long-acting injectable may be considered if the patient prefers it or has a history of poor or uncertain adherence.<sup><a className="cite" href="/references#ref-6" aria-label="Reference 6">6</a></sup></p>
    </div>
  </div>
</section>
    </main>
  );
}

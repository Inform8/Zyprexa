import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mechanism of Action · ZYPREXA HCP",
  description: "Pharmacology of olanzapine: receptor-binding profile across dopamine, serotonin, histamine H1, muscarinic and alpha-1 adrenergic receptors, and its clinical relevance.",
};

export default function MechanismOfActionPage() {
  return (
    <main id="main">
      <header className="page-head moa-head">
  <div className="wrap grid grid--7-5">
    <div>
      <span className="eyebrow">Pharmacology</span>
      <h1>Understanding the pharmacology of olanzapine</h1>
      <p className="standfirst">A broad receptor-binding profile contributes to its pharmacological effects.</p>
    </div>
    <div className="stack" style={{ alignSelf: 'end' }}>
      <p>Olanzapine is an antipsychotic, antimanic and mood-stabilising agent with activity across several neurotransmitter receptor systems.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
      <p>Its pharmacological profile includes activity at serotonin, dopamine, muscarinic, histamine and alpha-1 adrenergic receptors. The relative contribution of individual receptor interactions to clinical efficacy and adverse effects should be interpreted carefully.</p>
    </div>
  </div>
</header>

<section className="section" aria-labelledby="map-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Figure 1</span>
      <h2 id="map-title">Receptor-binding profile</h2>
      <p>Select a receptor family in the figure to highlight its description.</p>
    </div>
    <div className="receptor-map-layout">
      <figure className="fig">
        <svg className="rmap" viewBox="0 0 600 540" role="group" aria-labelledby="rm-t rm-d">
          <title id="rm-t">Olanzapine receptor-binding profile</title>
          <desc id="rm-d">Olanzapine at the centre, connected to five receptor families: dopamine D1 to D5; serotonin 5-HT2A, 5-HT2C, 5-HT3 and 5-HT6; histamine H1; muscarinic M1 to M5; and alpha-1 adrenergic. Dopamine and serotonin are drawn with solid rings as part of the profile relevant to antipsychotic activity. Histamine, muscarinic and alpha-1 adrenergic are drawn with dashed rings as relevant to adverse effects. Relative affinity is not shown.</desc>
          <line className="spoke" data-target="r-dopamine" x1="300" y1="198" x2="300" y2="139"/>
          <line className="spoke" data-target="r-serotonin" x1="359" y1="251" x2="415" y2="223"/>
          <line className="spoke" data-target="r-histamine" x1="337" y1="323" x2="374" y2="380"/>
          <line className="spoke" data-target="r-muscarinic" x1="263" y1="323" x2="226" y2="380"/>
          <line className="spoke" data-target="r-alpha" x1="241" y1="251" x2="185" y2="223"/>

          <circle cx="300" cy="270" r="70" className="f-ink"/>
          <text x="300" y="266" textAnchor="middle" fontSize="18" fontFamily="var(--font-display)" fontWeight="600" style={{ fill: 'var(--paper)' }}>Olanzapine</text>
          <text x="300" y="288" textAnchor="middle" fontSize="11" className="t-mono" style={{ fill: 'var(--paper)' }}>N05AH03</text>

          <g className="node" data-kind="profile" data-target="r-dopamine" role="button" tabIndex={0} aria-pressed="false" aria-label="Dopamine D1 to D5 receptors">
            <circle className="node-ring" cx="300" cy="78" r="62"/>
            <text x="300" y="74" textAnchor="middle" fontSize="16" fontWeight="600">Dopamine</text>
            <text x="300" y="96" textAnchor="middle" fontSize="12" className="t-mono t-muted">D1–D5</text>
          </g>
          <g className="node" data-kind="profile" data-target="r-serotonin" role="button" tabIndex={0} aria-pressed="false" aria-label="Serotonin 5-HT2A, 5-HT2C, 5-HT3 and 5-HT6 receptors">
            <circle className="node-ring" cx="476" cy="203" r="62"/>
            <text x="476" y="196" textAnchor="middle" fontSize="16" fontWeight="600">Serotonin</text>
            <text x="476" y="216" textAnchor="middle" fontSize="11.5" className="t-mono t-muted">5-HT2A/2C</text>
            <text x="476" y="232" textAnchor="middle" fontSize="11.5" className="t-mono t-muted">5-HT3, 5-HT6</text>
          </g>
          <g className="node" data-kind="adverse" data-target="r-histamine" role="button" tabIndex={0} aria-pressed="false" aria-label="Histamine H1 receptors">
            <circle className="node-ring" cx="409" cy="432" r="62"/>
            <text x="409" y="428" textAnchor="middle" fontSize="16" fontWeight="600">Histamine</text>
            <text x="409" y="450" textAnchor="middle" fontSize="12" className="t-mono t-muted">H1</text>
          </g>
          <g className="node" data-kind="adverse" data-target="r-muscarinic" role="button" tabIndex={0} aria-pressed="false" aria-label="Muscarinic M1 to M5 receptors">
            <circle className="node-ring" cx="191" cy="432" r="62"/>
            <text x="191" y="428" textAnchor="middle" fontSize="16" fontWeight="600">Muscarinic</text>
            <text x="191" y="450" textAnchor="middle" fontSize="12" className="t-mono t-muted">M1–M5</text>
          </g>
          <g className="node" data-kind="adverse" data-target="r-alpha" role="button" tabIndex={0} aria-pressed="false" aria-label="Alpha-1 adrenergic receptors">
            <circle className="node-ring" cx="124" cy="203" r="62"/>
            <text x="124" y="199" textAnchor="middle" fontSize="16" fontWeight="600">Adrenergic</text>
            <text x="124" y="221" textAnchor="middle" fontSize="12" className="t-mono t-muted">α1</text>
          </g>
        </svg>
        <div className="legend-row" aria-hidden="true">
          <span><i className="lg-swatch"></i>Described in relation to antipsychotic activity</span>
          <span><i className="lg-swatch lg-swatch--dash"></i>Described in relation to adverse effects</span>
        </div>
        <figcaption><span className="fig-no">Figure 1</span>Receptor families at which olanzapine showed affinity (K<sub>i</sub> &lt; 100 nM) in preclinical studies. Relative affinities are not represented; position, distance and circle size carry no meaning. Ring style follows the descriptions on this page.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></figcaption>
      </figure>

      <div className="receptor-detail">
        <article id="r-dopamine">
          <h3><span>Dopamine receptor activity</span> <span className="subtypes">D1, D2, D3, D4, D5</span></h3>
          <p>Olanzapine has affinity for dopamine receptors, including D<sub>2</sub> receptors.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
          <p>Dopamine receptor antagonism is relevant to its antipsychotic activity. Dopaminergic signalling is involved in multiple brain functions, and the relationship between receptor activity and individual symptom domains is complex.</p>
        </article>
        <article id="r-serotonin">
          <h3><span>Serotonin receptor activity</span> <span className="subtypes">5-HT2A/2C, 5-HT3, 5-HT6</span></h3>
          <p>Olanzapine also has affinity for serotonin receptors, including 5-HT<sub>2A</sub> and 5-HT<sub>2C</sub> receptors.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
          <p>Its serotonin and dopamine receptor activity contributes to its overall pharmacological profile. However, the clinical effects of olanzapine cannot be attributed to one receptor interaction alone.</p>
        </article>
        <article id="r-histamine">
          <h3><span>Histamine H<sub>1</sub> receptors</span> <span className="subtypes">H1</span></h3>
          <p>Relevant to effects such as somnolence and increased appetite.<sup><a className="cite" href="/references#ref-13" aria-label="Reference 13, section 12.2">13</a></sup></p>
        </article>
        <article id="r-muscarinic">
          <h3><span>Muscarinic receptors</span> <span className="subtypes">M1–M5</span></h3>
          <p>Relevant to anticholinergic adverse effects.<sup><a className="cite" href="/references#ref-13" aria-label="Reference 13, section 12.2">13</a></sup></p>
        </article>
        <article id="r-alpha">
          <h3><span>Alpha-1 adrenergic receptors</span> <span className="subtypes">α1</span></h3>
          <p>Relevant to orthostatic hypotension and dizziness.<sup><a className="cite" href="/references#ref-13" aria-label="Reference 13, section 12.2">13</a></sup></p>
        </article>
        <p className="small muted" style={{ marginTop: '1rem' }}>These interactions help explain why treatment selection and monitoring must consider both therapeutic objectives and potential adverse effects.</p>
      </div>
    </div>
  </div>
</section>

<section className="section section--surface" aria-labelledby="pd-title">
  <div className="wrap">
    <div className="section-head" style={{ maxWidth: '48rem' }}>
      <span className="eyebrow">Receptor occupancy in patients · Figure 2</span>
      <h2 id="pd-title">5-HT<sub>2</sub> and D<sub>2</sub> occupancy across the approved dose range</h2>
      <p>Olanzapine demonstrated a greater in vitro affinity for serotonin 5-HT<sub>2</sub> than dopamine D<sub>2</sub> receptors, and greater 5-HT<sub>2</sub> than D<sub>2</sub> activity in in vivo models. In a single 10 mg dose PET study in healthy volunteers, it produced a higher 5-HT<sub>2A</sub> than D<sub>2</sub> occupancy.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></p>
    </div>
    <div className="evidence-block">
      <div className="stack">
        <p>A PET study in patients with schizophrenia measured occupancy at steady state after random assignment to fixed daily doses.<sup><a className="cite" href="/references#ref-12" aria-label="Reference 12">12</a></sup></p>
        <ul className="ruled">
          <li><strong>5-HT<sub>2</sub>:</strong> greater than 90% occupancy in every patient, including at 5 mg/day.</li>
          <li><strong>D<sub>2</sub>:</strong> occupancy rose with dose, averaging 55% at 5 mg, 73% at 10 mg, 75% at 15 mg and 76% at 20 mg/day.</li>
          <li><strong>Across 10–20 mg/day:</strong> individual D<sub>2</sub> occupancy ranged from 71% to 80%.</li>
        </ul>
        <p className="limits"><strong>Limitations.</strong> Twelve patients (three per dose); striatal D<sub>2</sub> measured with [<sup>11</sup>C]raclopride; baseline occupancy estimated from age-corrected controls rather than each patient's own scan. Receptor occupancy does not by itself predict the clinical response of an individual patient.</p>
      </div>
      <figure className="fig">
        <div className="fig-frame">
          <svg viewBox="0 0 520 320" role="img" aria-labelledby="kp-t kp-d">
            <title id="kp-t">Receptor occupancy by olanzapine dose, Kapur et al. 1998</title>
            <desc id="kp-d">Scatter plot of individual patients. 5-HT2 occupancy was 91% to about 100% at every dose from 5 to 20 mg per day. D2 occupancy at 5 mg: 43, 59 and 64%, mean 55%. At 10 mg: 71, 74, 75%, mean 73%. At 15 mg: 73, 75, 76%, mean 75%. At 20 mg: 74, 76, 80%, mean 76%.</desc>
            <g fontSize="12">
              <circle cx="70" cy="14" r="5" className="f-ochre"/><text x="82" y="18">5-HT<tspan baseline-shift="sub" fontSize="9">2</tspan> occupancy (individual)</text>
              <circle cx="290" cy="14" r="5" className="f-accent"/><text x="302" y="18">D<tspan baseline-shift="sub" fontSize="9">2</tspan> occupancy (individual, mean line)</text>
            </g>
            <g className="s-rule" strokeWidth="1">
              <line x1="60" y1="260" x2="480" y2="260" className="s-ink"/>
              <line x1="60" y1="216" x2="480" y2="216"/><line x1="60" y1="172" x2="480" y2="172"/><line x1="60" y1="128" x2="480" y2="128"/><line x1="60" y1="84" x2="480" y2="84"/><line x1="60" y1="40" x2="480" y2="40"/>
            </g>
            <g fontSize="11" className="t-mono t-muted" textAnchor="end">
              <text x="52" y="264">0</text><text x="52" y="220">20</text><text x="52" y="176">40</text><text x="52" y="132">60</text><text x="52" y="88">80</text><text x="52" y="44">100%</text>
            </g>
            <g fontSize="12" textAnchor="middle" fontWeight="600">
              <text x="120" y="280">5</text><text x="220" y="280">10</text><text x="320" y="280">15</text><text x="420" y="280">20</text>
            </g>
            <text x="270" y="302" fontSize="11.5" textAnchor="middle" className="t-muted">Olanzapine dose (mg/day), steady state</text>
            {/*  y = 260 - 2.2*value ; x = 120 + 20*(dose-5)  */}
            <g className="f-ochre">
              <circle cx="112" cy="57.6" r="4.5"/><circle cx="120" cy="40" r="4.5"/><circle cx="128" cy="59.8" r="4.5"/>
              <circle cx="212" cy="40" r="4.5"/><circle cx="220" cy="44.4" r="4.5"/><circle cx="228" cy="55.4" r="4.5"/>
              <circle cx="312" cy="40" r="4.5"/><circle cx="320" cy="42.2" r="4.5"/><circle cx="328" cy="40" r="4.5"/>
              <circle cx="412" cy="40" r="4.5"/><circle cx="420" cy="40" r="4.5"/><circle cx="428" cy="40" r="4.5"/>
            </g>
            <polyline points="120,138.6 220,99.4 320,95 420,92.8" fill="none" className="s-accent" strokeWidth="2"/>
            <g className="f-accent">
              <circle cx="112" cy="165.4" r="4.5"/><circle cx="120" cy="119.2" r="4.5"/><circle cx="128" cy="130.2" r="4.5"/>
              <circle cx="212" cy="103.8" r="4.5"/><circle cx="220" cy="97.2" r="4.5"/><circle cx="228" cy="95" r="4.5"/>
              <circle cx="312" cy="99.4" r="4.5"/><circle cx="320" cy="92.8" r="4.5"/><circle cx="328" cy="95" r="4.5"/>
              <circle cx="412" cy="97.2" r="4.5"/><circle cx="420" cy="92.8" r="4.5"/><circle cx="428" cy="84" r="4.5"/>
            </g>
            <g fontSize="11.5" fontWeight="600" className="t-accent num">
              <text x="136" y="152">55</text><text x="236" y="114">73</text><text x="336" y="110">75</text><text x="436" y="108">76</text>
            </g>
          </svg>
        </div>
        <figcaption><span className="fig-no">Figure 2</span>Individual 5-HT<sub>2</sub> and striatal D<sub>2</sub> occupancy in 12 patients with schizophrenia at fixed doses of 5–20 mg/day; numbers show mean D<sub>2</sub> occupancy per dose. Redrawn from Kapur et al. 1998, Table 1. Three additional scans at 30–40 mg/day reported in the paper are not shown because these doses exceed the EU maximum of 20 mg/day.<sup><a className="cite" href="/references#ref-12" aria-label="Reference 12">12</a></sup></figcaption>
      </figure>
    </div>
  </div>
</section>

<section className="section" aria-labelledby="pk-title">
  <div className="wrap grid grid--5-7">
    <div>
      <span className="eyebrow">Interpretation</span>
      <h2 id="pk-title" style={{ marginTop: '0.75rem' }}>From pharmacology to clinical practice</h2>
    </div>
    <div className="stack-lg">
      <p className="pull">A mechanism-of-action explanation provides context for understanding the pharmacology of olanzapine. It does not, by itself, establish the magnitude of clinical benefit or predict the response of an individual patient.</p>
      <p className="measure">Clinical efficacy and safety should be evaluated using the relevant clinical evidence and approved product information.</p>
      <div className="actions" style={{ marginTop: '0' }}>
        <a className="btn btn--primary" href="/clinical-evidence">Review the clinical evidence <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
        <a className="btn btn--secondary" href="/safety-prescribing">Safety and prescribing</a>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

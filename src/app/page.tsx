import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evidence-informed treatment in schizophrenia and bipolar disorder · ZYPREXA HCP",
  description: "Information for healthcare professionals on ZYPREXA (olanzapine): approved indications, clinical evidence, pharmacology and prescribing information, based on the EU Summary of Product Characteristics.",
};

export default function HomePage() {
  return (
    <main id="main">
      <section className="home-open" aria-labelledby="home-title">
  <div className="wrap">
    <div>
      <div className="product-id"><span className="name">ZYPREXA<sup>®</sup></span><span className="inn">olanzapine · coated tablets</span></div>
      <h1 id="home-title">Evidence-informed treatment in schizophrenia and bipolar disorder</h1>
      <p className="intro">Zyprexa (olanzapine) is an antipsychotic medicine indicated for the treatment of schizophrenia and for the treatment of moderate to severe manic episodes. In patients whose manic episode has responded to olanzapine, it is also indicated for preventing recurrence in bipolar disorder, in accordance with the applicable product information.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.1">1</a></sup></p>
      <p className="intro">Explore the clinical evidence, pharmacology and prescribing information for Zyprexa.</p>
      <div className="actions">
        <a className="btn btn--primary" href="/clinical-evidence">Explore clinical evidence <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
        <a className="btn btn--secondary" href="/safety-prescribing">View prescribing information</a>
      </div>
    </div>
    <div className="indication-panel" aria-labelledby="ind-title">
      <h2 id="ind-title">Approved indications in adults · EU SmPC 4.1</h2>
      <ol>
        <li><strong>Schizophrenia</strong><span>Treatment of schizophrenia. Effective in maintaining clinical improvement during continuation therapy in patients who have shown an initial treatment response.</span></li>
        <li><strong>Moderate to severe manic episode</strong><span>As monotherapy or in combination therapy.</span></li>
        <li><strong>Prevention of recurrence in bipolar disorder</strong><span>In patients whose manic episode has responded to olanzapine treatment.</span></li>
      </ol>
      <p className="scope">This website covers ZYPREXA coated tablets. ZYPREXA powder for solution for injection and ZYPADHERA (olanzapine pamoate) have their own Summaries of Product Characteristics, listed under <a href="/references#product-information">product information</a>.</p>
    </div>
  </div>
</section>

<section className="section" aria-labelledby="topics-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Clinical profile</span>
      <h2 id="topics-title">A closer look at the clinical profile</h2>
    </div>
    <div className="topic-index">
      <article className="topic">
        <h3><a href="/schizophrenia">Schizophrenia</a></h3>
        <p>Schizophrenia can affect perception, thought, motivation and everyday functioning. Treatment aims to reduce symptoms, support clinical stability and help patients maintain functioning over time.</p>
        <a className="more" href="/schizophrenia">Explore schizophrenia <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
      </article>
      <article className="topic">
        <h3><a href="/bipolar-disorder">Bipolar disorder</a></h3>
        <p>Bipolar disorder involves episodes of mood disturbance that can affect behaviour, relationships and daily life. Treatment objectives vary according to the current episode and the individual's clinical needs.</p>
        <a className="more" href="/bipolar-disorder">Explore bipolar disorder <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
      </article>
      <article className="topic">
        <h3><a href="/clinical-evidence">Clinical evidence</a></h3>
        <p>Clinical trials have evaluated olanzapine in schizophrenia and in manic episodes associated with bipolar disorder, including studies of continued treatment and recurrence prevention.</p>
        <a className="more" href="/clinical-evidence">Review the evidence <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
      </article>
      <article className="topic">
        <h3><a href="/safety-prescribing">Safety and prescribing</a></h3>
        <p>Appropriate treatment selection requires consideration of individual clinical circumstances, contraindications, interactions and the need for ongoing safety monitoring.</p>
        <a className="more" href="/safety-prescribing">Review safety information <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
      </article>
    </div>
  </div>
</section>

<section className="section section--surface" aria-labelledby="about-title">
  <div className="wrap about-olz">
    <div className="stack">
      <span className="eyebrow">Pharmacology</span>
      <h2 id="about-title">About olanzapine</h2>
      <p>Olanzapine is an atypical antipsychotic with activity across multiple neurotransmitter receptor systems, including dopamine and serotonin receptors. Its pharmacological profile is relevant to its therapeutic effects and adverse-reaction profile.</p>
      <p>Understanding this profile alongside the clinical evidence and approved product information supports informed prescribing decisions.</p>
      <a className="more" href="/mechanism-of-action">Explore mechanism of action <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></a>
    </div>
    <figure className="fig">
      <div className="receptor-strip" role="list" aria-label="Receptor families with olanzapine affinity in preclinical studies">
        <div role="listitem"><b>D<sub>1–5</sub></b><span>Dopamine</span></div>
        <div role="listitem"><b>5-HT</b><span>Serotonin 2A/2C, 3, 6</span></div>
        <div role="listitem"><b>H<sub>1</sub></b><span>Histamine</span></div>
        <div role="listitem"><b>M<sub>1–5</sub></b><span>Muscarinic</span></div>
        <div role="listitem"><b>α<sub>1</sub></b><span>Adrenergic</span></div>
      </div>
      <figcaption>Receptor families at which olanzapine showed affinity (K<sub>i</sub> &lt; 100 nM) in preclinical studies. Order does not indicate relative affinity.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 5.1">1</a></sup></figcaption>
    </figure>
  </div>
</section>

<section className="pi-band" aria-labelledby="ipi-title">
  <div className="wrap stack">
    <span className="eyebrow">Important prescribing information</span>
    <h2 id="ipi-title">Consult the approved product information before prescribing</h2>
    <p>Zyprexa is a prescription medicine. Treatment should be initiated and monitored by an appropriately qualified healthcare professional. The approved product information should be consulted before prescribing, particularly for contraindications, metabolic effects, interactions, special populations and other important precautions.</p>
    <div className="actions">
      <a className="btn btn--primary ext" href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf" target="_blank" rel="noopener">Access the full Summary of Product Characteristics</a>
      <a className="btn btn--secondary" href="/safety-prescribing">Safety and prescribing summary</a>
    </div>
  </div>
</section>
    </main>
  );
}

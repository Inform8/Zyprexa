import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety and Prescribing · ZYPREXA HCP",
  description: "ZYPREXA (olanzapine) coated tablets: dosing, contraindications, warnings and precautions, monitoring, interactions, pregnancy and adverse reactions, summarised from the EU SmPC.",
};

export default function SafetyPrescribingPage() {
  return (
    <main id="main">
      <header className="page-head">
  <div className="wrap grid grid--7-5">
    <div>
      <span className="eyebrow">Prescribing information summary · ZYPREXA coated tablets</span>
      <h1>Safety, monitoring and prescribing</h1>
      <p className="standfirst">Individualized treatment requires consideration of contraindications, precautions and ongoing monitoring.</p>
    </div>
    <div className="stack" style={{ alignSelf: 'end' }}>
      <p>Before prescribing Zyprexa, consult the current approved product information for the intended market. The following content summarises selected considerations from the European SmPC and does not replace the full prescribing document.</p>
      <div className="actions" style={{ marginTop: '0.5rem' }}>
        <a className="btn btn--primary ext" href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf" target="_blank" rel="noopener">View full Summary of Product Characteristics</a>
      </div>
    </div>
  </div>
</header>

<nav className="jump" aria-label="On this page">
  <div className="wrap">
    <ol>
      <li><a href="#dosing">Dosing</a></li>
      <li><a href="#contraindications">Contraindications</a></li>
      <li><a href="#warnings">Warnings and precautions</a></li>
      <li><a href="#monitoring">Monitoring</a></li>
      <li><a href="#interactions">Interactions</a></li>
      <li><a href="#pregnancy">Pregnancy and breastfeeding</a></li>
      <li><a href="#discontinuation">Discontinuation</a></li>
      <li><a href="#adverse-reactions">Adverse reactions</a></li>
      <li><a href="#prescribing-information">Product information</a></li>
    </ol>
  </div>
</nav>

<section className="section" style={{ paddingBlock: '2.5rem' }} aria-label="Formulations">
  <div className="wrap">
    <div className="formulation-key">
      <div className="current">
        <span className="eyebrow">This page</span>
        <h3>ZYPREXA coated tablets (oral olanzapine)</h3>
        <p>All dosing and safety content below refers to the oral formulation.</p>
      </div>
      <div>
        <span className="eyebrow">Separate SmPC</span>
        <h3>ZYPREXA powder for solution for injection</h3>
        <p>Short-term intramuscular use for agitation. Different dosing and precautions.<sup><a className="cite" href="/references#ref-2" aria-label="Reference 2">2</a></sup></p>
      </div>
      <div>
        <span className="eyebrow">Separate SmPC</span>
        <h3>ZYPADHERA (olanzapine pamoate)</h3>
        <p>Prolonged-release injection with its own dosing and post-injection observation requirements.<sup><a className="cite" href="/references#ref-3" aria-label="Reference 3">3</a></sup></p>
      </div>
    </div>
  </div>
</section>

<section className="section section--surface" id="dosing" aria-labelledby="dose-title">
  <div className="wrap grid grid--7-5">
    <div>
      <div className="section-head">
        <span className="eyebrow">01 · SmPC 4.2</span>
        <h2 id="dose-title">Dosing and administration</h2>
        <p>Recommended starting doses for oral olanzapine in adults, from the European SmPC.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.2">1</a></sup></p>
      </div>
      <div className="table-wrap" tabIndex={0} role="region" aria-labelledby="dose-cap">
        <table className="data">
          <caption id="dose-cap"><span className="fig-no">Table 1</span>Recommended starting dose by treatment setting</caption>
          <thead><tr><th scope="col">Approved treatment setting</th><th scope="col" className="n">Starting dose</th></tr></thead>
          <tbody>
            <tr><th scope="row">Schizophrenia</th><td className="n"><span className="dose">10 mg</span><br /><span className="small muted">once daily</span></td></tr>
            <tr><th scope="row">Moderate to severe manic episode, monotherapy</th><td className="n"><span className="dose">15 mg</span><br /><span className="small muted">single daily dose</span></td></tr>
            <tr><th scope="row">Moderate to severe manic episode, combination therapy</th><td className="n"><span className="dose">10 mg</span><br /><span className="small muted">once daily</span></td></tr>
            <tr><th scope="row">Prevention of recurrence in bipolar disorder following response to olanzapine for mania</th><td className="n"><span className="dose">10 mg</span><br /><span className="small muted">once daily</span></td></tr>
          </tbody>
        </table>
      </div>
      <div className="stack" style={{ marginTop: '1.5rem' }}>
        <p>The European SmPC describes an individualised daily dose range of <strong>5–20 mg</strong> for these treatment settings. Dose adjustments should be based on clinical assessment. An increase above the recommended starting dose should occur only after appropriate clinical reassessment and generally at intervals of not less than 24 hours.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.2">1</a></sup></p>
        <p>For patients who have been receiving olanzapine for a manic episode, therapy for preventing recurrence continues at the same dose. If a new manic, mixed or depressive episode occurs, olanzapine treatment should be continued (with dose optimisation as needed), with supplementary therapy to treat mood symptoms, as clinically indicated.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.2">1</a></sup></p>
        <p>Olanzapine can be given without regard to meals, as absorption is not affected by food.</p>
      </div>
    </div>
    <div>
      <h3 style={{ marginBottom: '1rem' }}>Special populations</h3>
      <dl className="def" style={{ gridTemplateColumns: '1fr' }}>
        <div><dt>Older patients (65 years and over)</dt><dd>A lower starting dose (5 mg/day) is not routinely indicated but should be considered when clinical factors warrant.</dd></div>
        <div><dt>Renal and/or hepatic impairment</dt><dd>A lower starting dose (5 mg) should be considered. In moderate hepatic insufficiency (cirrhosis, Child-Pugh Class A or B), the starting dose should be 5 mg and only increased with caution.</dd></div>
        <div><dt>Factors that may slow metabolism</dt><dd>When more than one factor is present (female gender, geriatric age, non-smoking status), consider decreasing the starting dose. Dose escalation should be conservative.</dd></div>
        <div><dt>Smokers</dt><dd>Starting dose and range need not be routinely altered. Metabolism may be induced by smoking; clinical monitoring is recommended and a dose increase may be considered if necessary.</dd></div>
        <div><dt>Children and adolescents</dt><dd>Not recommended below 18 years of age due to a lack of data on safety and efficacy.</dd></div>
      </dl>
      <p className="source-line">Source: EU SmPC section 4.2.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.2">1</a></sup></p>
    </div>
  </div>
</section>

<section className="section" id="contraindications" aria-labelledby="ci-title">
  <div className="wrap grid grid--5-7">
    <div className="stack">
      <span className="eyebrow">02 · SmPC 4.3</span>
      <h2 id="ci-title">Contraindications</h2>
      <p className="muted">The training material lists further conditions as contraindications. In the European SmPC these are warnings or precautions, covered in the next section.</p>
    </div>
    <div className="ci-panel">
      <span className="safety-mark">Contraindicated</span>
      <p style={{ marginTop: '0.75rem' }}>According to the European SmPC, oral Zyprexa is contraindicated in patients with:<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.3">1</a></sup></p>
      <ul>
        <li>Hypersensitivity to olanzapine or to any of the excipients listed in section 6.1</li>
        <li>Known risk of narrow-angle glaucoma</li>
      </ul>
      <p className="small muted" style={{ marginTop: '0.75rem' }}>Excipients include lactose monohydrate. See the SmPC for the full list.</p>
    </div>
  </div>
</section>

<section className="section section--surface" id="warnings" aria-labelledby="warn-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">03 · SmPC 4.4</span>
      <h2 id="warn-title">Important warnings and precautions</h2>
      <p>During antipsychotic treatment, improvement in the patient's clinical condition may take several days to some weeks. Patients should be closely monitored during this period.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
    </div>
    <div className="warnings">
      <article className="warning warning--lead" id="dementia">
        <span className="safety-mark">Not recommended</span>
        <h3 style={{ marginTop: '0.5rem' }}>Dementia-related psychosis and/or behavioural disturbances</h3>
        <p>Olanzapine is not recommended for patients with dementia-related psychosis and/or behavioural disturbances because of an increase in mortality and the risk of cerebrovascular accident. In placebo-controlled trials (6–12 weeks) in elderly patients (mean age 78 years):<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
        <div className="stat-row">
          <div className="stat"><b>3.5% vs 1.5%</b><span>incidence of death, olanzapine vs placebo (2-fold increase)</span></div>
          <div className="stat"><b>1.3% vs 0.4%</b><span>cerebrovascular adverse events, olanzapine vs placebo (3-fold increase)</span></div>
        </div>
        <p style={{ marginTop: '1rem' }} className="small">The efficacy of olanzapine was not established in these trials.</p>
      </article>

      <article className="warning" id="metabolic">
        <h3>Metabolic effects</h3>
        <p>Olanzapine treatment has been associated with weight gain and changes in glucose and lipid parameters. Hyperglycaemia and the development or worsening of diabetes, occasionally associated with ketoacidosis or coma, have been reported uncommonly, including some fatal cases.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
        <p>Assess relevant baseline risk factors and monitor weight, blood glucose and lipid parameters in accordance with the approved product information and applicable clinical guidance. <a href="#monitoring">See monitoring</a>.</p>
      </article>
      <article className="warning" id="somnolence">
        <h3>Somnolence and dizziness</h3>
        <p>Somnolence and dizziness may occur. Patients should be cautioned about operating machinery, including motor vehicles.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.7">1</a></sup></p>
        <p>Sedation and orthostatic hypotension should be considered when assessing falls risk, concomitant medication and individual tolerability.</p>
      </article>
      <article className="warning" id="nms">
        <h3>Neuroleptic malignant syndrome</h3>
        <p>Neuroleptic malignant syndrome is a potentially life-threatening condition associated with antipsychotic medicines. Clinical manifestations include hyperpyrexia, muscle rigidity, altered mental status and autonomic instability.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
        <p>If a patient develops signs and symptoms indicative of NMS, or presents with unexplained high fever without additional clinical manifestations of NMS, <strong>all antipsychotic medicines, including olanzapine, must be discontinued</strong>.</p>
      </article>
      <article className="warning" id="tardive">
        <h3>Tardive dyskinesia and other movement disorders</h3>
        <p>Movement-related adverse effects may occur. The risk of tardive dyskinesia increases with long-term exposure; patients should be assessed for relevant symptoms during treatment.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
        <p>If signs or symptoms of tardive dyskinesia appear, dose reduction or discontinuation should be considered. These symptoms can temporarily deteriorate or even arise after discontinuation of treatment.</p>
      </article>
      <article className="warning" id="cardiovascular">
        <h3>Cardiovascular and orthostatic effects</h3>
        <p>Orthostatic hypotension and dizziness may occur. Caution is required in patients with relevant cardiovascular risk factors or when medicines with potential interactions are co-administered. Blood pressure should be measured periodically in patients over 65 years.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
      </article>
      <article className="warning" id="hepatic">
        <h3>Hepatic and haematological considerations</h3>
        <p>Transient, asymptomatic elevations of hepatic aminotransferases (ALT, AST) have been seen commonly, especially in early treatment. Follow-up is important in patients with elevated liver enzymes, signs of hepatic impairment, limited hepatic functional reserve or concomitant use of potentially hepatotoxic medicines. If hepatitis is diagnosed, olanzapine treatment should be discontinued.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
        <p>Caution is also required in patients with low leukocyte or neutrophil counts, medicines known to cause neutropenia, a history of drug-induced bone marrow depression, or hypereosinophilic or myeloproliferative conditions. Neutropenia has been reported commonly when olanzapine and valproate are used concomitantly.</p>
      </article>
    </div>

    <h3 style={{ marginTop: '3rem', marginBottom: '0.5rem' }}>Other warnings in the SmPC</h3>
    <p className="muted small" style={{ marginBottom: '1rem' }}>Summarised from SmPC section 4.4.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup> Consult the full text for each.</p>
    <div className="other-warnings">
      <div><h4>Parkinson's disease</h4><p>Not recommended for dopamine agonist-associated psychosis in Parkinson's disease; worsening of parkinsonian symptoms and hallucinations was reported very commonly.</p></div>
      <div><h4>QT interval</h4><p>Caution with medicines known to increase QTc, especially in the elderly and in congenital long QT syndrome, congestive heart failure, heart hypertrophy, hypokalaemia or hypomagnesaemia.</p></div>
      <div><h4>Thromboembolism</h4><p>Venous thromboembolism has been reported uncommonly. Identify risk factors such as immobilisation and take preventive measures.</p></div>
      <div><h4>Seizures</h4><p>Use cautiously in patients with a history of seizures or factors that may lower the seizure threshold.</p></div>
      <div><h4>Sudden cardiac death</h4><p>Reported post-marketing. In an observational study, the risk with olanzapine was approximately twice that in patients not using antipsychotics, and comparable to pooled atypical antipsychotics.</p></div>
      <div><h4>Anticholinergic activity</h4><p>Caution in prostatic hypertrophy, paralytic ileus and related conditions.</p></div>
      <div><h4>General CNS activity</h4><p>Caution with alcohol and other centrally acting medicines. Olanzapine may antagonise the effects of dopamine agonists.</p></div>
      <div><h4>Lactose</h4><p>Patients with rare hereditary galactose intolerance, total lactase deficiency or glucose-galactose malabsorption should not take this medicine.</p></div>
    </div>
  </div>
</section>

<section className="section" id="monitoring" aria-labelledby="mon-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">04 · SmPC 4.4</span>
      <h2 id="mon-title">Monitoring during treatment</h2>
      <p>Monitoring should be individualised according to clinical circumstances and the current approved product information. The European SmPC gives the following examples, in accordance with utilised antipsychotic guidelines.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
    </div>
    <figure className="fig">
      <div className="fig-frame fig-scroll" tabIndex={0} aria-label="Monitoring schedule figure, scrollable">
        <svg className="mon-chart" viewBox="0 0 900 250" role="img" aria-labelledby="mo-t mo-d">
          <title id="mo-t">Example monitoring schedule after starting olanzapine</title>
          <desc id="mo-d">Weight: baseline, weeks 4, 8 and 12, then quarterly. Blood glucose: baseline, week 12, then annually. Lipids: baseline, week 12, then every 5 years.</desc>
          <g fontSize="11.5" className="t-mono t-muted" textAnchor="middle">
            <text x="230" y="24">BASELINE</text><text x="340" y="24">WEEK 4</text><text x="450" y="24">WEEK 8</text><text x="560" y="24">WEEK 12</text><text x="745" y="24">THEREAFTER</text>
          </g>
          <line x1="640" y1="36" x2="640" y2="236" className="s-rule" strokeDasharray="3 4"/>
          <g>
            <line x1="20" y1="40" x2="880" y2="40" className="s-ink"/>
            <text x="20" y="92" fontSize="15" fontWeight="600">Body weight</text>
            <line x1="230" y1="87" x2="620" y2="87" className="s-accent" strokeWidth="2"/>
            <circle cx="230" cy="87" r="9" className="f-accent"/><circle cx="340" cy="87" r="9" className="f-accent"/><circle cx="450" cy="87" r="9" className="f-accent"/><circle cx="560" cy="87" r="9" className="f-accent"/>
            <text x="745" y="92" fontSize="15" fontWeight="600" textAnchor="middle">Quarterly</text>
            <line x1="20" y1="120" x2="880" y2="120" className="s-rule"/>
            <text x="20" y="160" fontSize="15" fontWeight="600">Blood glucose</text>
            <line x1="230" y1="155" x2="620" y2="155" className="s-rule" strokeWidth="2"/>
            <circle cx="230" cy="155" r="9" className="f-accent"/><circle cx="560" cy="155" r="9" className="f-accent"/>
            <text x="745" y="160" fontSize="15" fontWeight="600" textAnchor="middle">Annually</text>
            <line x1="20" y1="188" x2="880" y2="188" className="s-rule"/>
            <text x="20" y="226" fontSize="15" fontWeight="600">Lipids</text>
            <line x1="230" y1="221" x2="620" y2="221" className="s-rule" strokeWidth="2"/>
            <circle cx="230" cy="221" r="9" className="f-accent"/><circle cx="560" cy="221" r="9" className="f-accent"/>
            <text x="745" y="226" fontSize="15" fontWeight="600" textAnchor="middle">Every 5 years</text>
          </g>
        </svg>
      </div>
      <figcaption><span className="fig-no">Figure 1</span>Example monitoring intervals from EU SmPC section 4.4 (given as examples, "e.g."). Time axis not to scale.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></figcaption>
    </figure>
    <div className="grid grid--2" style={{ marginTop: '2.5rem' }}>
      <div className="table-wrap" tabIndex={0} role="region" aria-labelledby="mon-cap">
        <table className="data">
          <caption id="mon-cap"><span className="fig-no">Table 2</span>Example monitoring approach in the European SmPC</caption>
          <thead><tr><th scope="col">Parameter</th><th scope="col">Example schedule</th></tr></thead>
          <tbody>
            <tr><th scope="row">Body weight</th><td>Baseline; 4, 8 and 12 weeks after starting; then quarterly</td></tr>
            <tr><th scope="row">Blood glucose</th><td>Baseline; 12 weeks after starting; then annually</td></tr>
            <tr><th scope="row">Lipids</th><td>Baseline; 12 weeks after starting; then every 5 years</td></tr>
            <tr><th scope="row">Blood pressure</th><td>Periodically in patients over 65 years</td></tr>
          </tbody>
        </table>
      </div>
      <div className="stack">
        <p>Patients should be observed for signs and symptoms of hyperglycaemia (such as polydipsia, polyuria, polyphagia and weakness). Patients with diabetes mellitus or with risk factors for diabetes should be monitored regularly for worsening of glucose control.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
        <p>The full product information and applicable clinical guidance should be consulted for the complete monitoring recommendations, including the assessment of other clinical risks.</p>
      </div>
    </div>
  </div>
</section>

<section className="section section--surface" id="interactions" aria-labelledby="int-title">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">05 · SmPC 4.5</span>
      <h2 id="int-title">Drug interactions</h2>
      <p>Olanzapine metabolism may be affected by medicines or substances that influence CYP1A2 activity. Review concomitant medicines, smoking status and relevant changes during treatment. Dose adjustment and clinical monitoring should follow the approved product information.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.5">1</a></sup></p>
    </div>
    <div className="table-wrap" tabIndex={0} role="region" aria-labelledby="int-cap">
      <table className="data" style={{ minWidth: '640px' }}>
        <caption id="int-cap"><span className="fig-no">Table 3</span>Selected interactions described in the European SmPC</caption>
        <thead><tr><th scope="col">Medicine or factor</th><th scope="col">Effect</th><th scope="col">Action in SmPC</th></tr></thead>
        <tbody>
          <tr><th scope="row">Smoking; carbamazepine<br /><span className="small muted">CYP1A2 induction</span></th><td>May increase olanzapine metabolism and reduce concentrations; only slight to moderate increase in clearance observed</td><td>Clinical monitoring; a dose increase may be considered if necessary</td></tr>
          <tr><th scope="row">Fluvoxamine; other CYP1A2 inhibitors such as ciprofloxacin</th><td>Increase olanzapine exposure. With fluvoxamine, mean C<sub>max</sub> rose 54% (female non-smokers) and 77% (male smokers); mean AUC rose 52% and 108%</td><td>Consider a lower starting dose; consider a dose decrease if an inhibitor is started</td></tr>
          <tr><th scope="row">Activated charcoal</th><td>Reduces oral bioavailability by 50–60%</td><td>Take at least 2 hours before or after olanzapine</td></tr>
          <tr><th scope="row">Alcohol and other centrally acting medicines</th><td>Additive CNS effects</td><td>Caution</td></tr>
          <tr><th scope="row">Direct and indirect dopamine agonists</th><td>Olanzapine may antagonise their effects</td><td>Anti-Parkinsonian medicines not recommended in patients with Parkinson's disease and dementia</td></tr>
          <tr><th scope="row">Medicines that increase QTc</th><td>Potential additive effect</td><td>Caution</td></tr>
          <tr><th scope="row">Valproate</th><td>Neutropenia reported commonly with concomitant use</td><td>See hepatic and haematological considerations</td></tr>
        </tbody>
      </table>
    </div>
    <p className="scroll-cue">Scroll the table sideways to see all columns.</p>
    <p className="source-line">Olanzapine does not inhibit the main CYP450 isoenzymes in vitro, and showed no interaction with lithium or biperiden.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.5">1</a></sup></p>
  </div>
</section>

<section className="section" aria-labelledby="pd-title">
  <div className="wrap grid grid--2">
    <div className="stack" id="pregnancy">
      <span className="eyebrow">06 · SmPC 4.6</span>
      <h2 id="pd-title">Pregnancy and breastfeeding</h2>
      <p>Because human experience is limited, olanzapine should be used in pregnancy only if the potential benefit justifies the potential risk to the foetus.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.6">1</a></sup></p>
      <p>Newborns exposed to antipsychotics, including olanzapine, during the third trimester are at risk of adverse reactions including extrapyramidal and/or withdrawal symptoms, and should be monitored carefully.</p>
      <p>Olanzapine is excreted in breast milk. Patients should be advised not to breastfeed an infant if they are taking olanzapine.</p>
    </div>
    <div className="stack" id="discontinuation">
      <span className="eyebrow">07 · SmPC 4.2, 4.4</span>
      <h2>Discontinuation</h2>
      <p>Acute symptoms such as sweating, insomnia, tremor, anxiety, nausea or vomiting have been reported rarely when olanzapine is stopped abruptly.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.4">1</a></sup></p>
      <p>Gradual tapering of the dose should be considered when discontinuing olanzapine. Treatment changes should be managed by the treating healthcare professional.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.2">1</a></sup></p>
    </div>
  </div>
</section>

<section className="section section--surface" id="adverse-reactions" aria-labelledby="ar-title">
  <div className="wrap grid grid--5-7">
    <div className="stack">
      <span className="eyebrow">08 · SmPC 4.8</span>
      <h2 id="ar-title">Adverse reactions</h2>
      <p>Frequently reported adverse reactions include somnolence, weight gain, increased appetite, dizziness, orthostatic hypotension and changes in glucose and lipid parameters. Other adverse reactions are described in the full product information, which gives the complete profile, frequency categories and qualifications.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.8">1</a></sup></p>
      <a className="more ext" href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf" target="_blank" rel="noopener">Full adverse-reaction table in the SmPC</a>
    </div>
    <div>
      <h3 style={{ marginBottom: '0.75rem' }}>Reported in ≥ 1% of patients in clinical trials</h3>
      <p className="small muted" style={{ marginBottom: '1rem' }}>As listed in the SmPC summary of the safety profile, in adults.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.8">1</a></sup></p>
      <ul className="ruled" style={{ columns: '2', columnGap: '2rem', borderTopWidth: '1px' }}>
        <li>Somnolence</li><li>Weight gain</li><li>Eosinophilia</li><li>Elevated prolactin</li><li>Elevated cholesterol, glucose and triglyceride levels</li><li>Glucosuria</li><li>Increased appetite</li><li>Dizziness</li><li>Akathisia</li><li>Parkinsonism</li><li>Leukopenia</li><li>Neutropenia</li><li>Dyskinesia</li><li>Orthostatic hypotension</li><li>Anticholinergic effects</li><li>Transient asymptomatic elevations of hepatic aminotransferases</li><li>Rash</li><li>Asthenia</li><li>Fatigue</li><li>Pyrexia</li><li>Arthralgia</li><li>Increased alkaline phosphatase</li><li>High gamma glutamyltransferase</li><li>High uric acid</li><li>High creatine phosphokinase</li><li>Oedema</li>
      </ul>
      <p className="small" style={{ marginTop: '1rem' }}>In trials of up to 12 weeks, plasma prolactin exceeded the upper limit of normal in approximately 30% of patients with normal baseline values; elevations were generally mild.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.8">1</a></sup></p>
    </div>
  </div>
</section>

<section className="section" id="reporting" aria-labelledby="rep-title">
  <div className="wrap">
    <div className="report-box">
      <span className="eyebrow">Pharmacovigilance</span>
      <h2 id="rep-title" style={{ fontSize: 'var(--step-2)', marginBlock: '0.5rem 0.75rem' }}>Reporting of suspected adverse reactions</h2>
      <p className="measure">Reporting suspected adverse reactions after authorisation of the medicinal product is important. It allows continued monitoring of the benefit/risk balance of the medicinal product. Healthcare professionals are asked to report any suspected adverse reactions via their national reporting system.<sup><a className="cite" href="/references#ref-1" aria-label="Reference 1, section 4.8">1</a></sup></p>
    </div>
  </div>
</section>

<section className="pi-band" id="prescribing-information" aria-labelledby="fpi-title">
  <div className="wrap stack">
    <span className="eyebrow">Product information</span>
    <h2 id="fpi-title">Full prescribing information</h2>
    <p>The EU product information document contains the Summary of Product Characteristics (Annex I) and the package leaflet for patients (Annex III B), for both ZYPREXA coated tablets and ZYPREXA powder for solution for injection.</p>
    <div className="actions">
      <a className="btn btn--primary ext" href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf" target="_blank" rel="noopener">View full Summary of Product Characteristics</a>
      <a className="btn btn--secondary ext" href="https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa" target="_blank" rel="noopener">Access patient leaflet</a>
    </div>
    <p className="small">Both links open the European Medicines Agency website. The patient leaflet is in Annex III B of the product information document; the EMA page also lists translations.</p>
  </div>
</section>
    </main>
  );
}

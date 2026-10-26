import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { HBars, VBars } from "@/components/Charts";
import { EXTERNAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Safety and monitoring",
  description: "Contraindications, warnings, monitoring and adverse reactions for ZYPREXA coated tablets.",
};

const reactions = [
  "Somnolence",
  "Weight gain",
  "Eosinophilia",
  "Elevated prolactin",
  "Elevated cholesterol, glucose and triglyceride levels",
  "Glucosuria",
  "Increased appetite",
  "Dizziness",
  "Akathisia",
  "Parkinsonism",
  "Leukopenia",
  "Neutropenia",
  "Dyskinesia",
  "Orthostatic hypotension",
  "Anticholinergic effects",
  "Transient asymptomatic elevations of hepatic aminotransferases",
  "Rash",
  "Asthenia",
  "Fatigue",
  "Pyrexia",
  "Arthralgia",
  "Increased alkaline phosphatase",
  "High gamma glutamyltransferase",
  "High uric acid",
  "High creatine phosphokinase",
  "Oedema",
];

export default function SafetyPage() {
  return (
    <main id="app">
      <div className="hero hero--text">
        <div className="w">
          <div className="hero-copy">
            <p className="eb">Safety &amp; monitoring</p>
            <h1 className="serif">Safety and monitoring</h1>
            <p>
              Contraindications, warnings, monitoring and adverse reactions. This summary does not replace the full
              prescribing information.
              <Cite n={1} />
            </p>
            <div className="hero-tabs">
              <a className="btn" href="#contraindications">
                6.1 Contraindications
              </a>
              <a className="btn g" href="#warnings">
                6.2 Warnings
              </a>
              <a className="btn g" href="#monitoring">
                6.3 Monitoring
              </a>
              <a className="btn g" href="#adverse-reactions">
                6.4 Adverse reactions
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true" />
        </div>
      </div>

      <div className="w">
        <section className="s" id="contraindications">
          <h2>
            <span className="sec-no">6.1</span>
            Contraindications
          </h2>
          <p>
            Other conditions that need caution are covered under <a href="#warnings">warnings and precautions</a>.
          </p>
          <div className="alert">
              <h3>Contraindicated</h3>
              <p>
                Oral olanzapine is contraindicated in patients with:
                <Cite n={1} section="4.3" />
              </p>
              <ul>
                <li>Hypersensitivity to olanzapine or to any of the excipients</li>
                <li>Known risk of narrow-angle glaucoma</li>
              </ul>
              <p>Excipients include lactose monohydrate. See the prescribing information for the full list.</p>
            </div>
        </section>

        <section className="s" id="warnings">
          <h2>
            <span className="sec-no">6.2</span>
            Important warnings and precautions
          </h2>
          <p>
            During antipsychotic treatment, improvement in the patient&apos;s clinical condition may take several days
            to some weeks. Patients should be closely monitored during this period.
            <Cite n={1} section="4.4" />
          </p>
          <article className="alert" id="dementia">
            <h3>Dementia-related psychosis and/or behavioural disturbances</h3>
            <p>
              Olanzapine is not recommended for patients with dementia-related psychosis and/or behavioural disturbances
              because of an increase in mortality and the risk of cerebrovascular accident. In placebo-controlled
              trials (6–12 weeks) in elderly patients (mean age 78 years):
              <Cite n={1} section="4.4" />
            </p>
            <div className="kpis">
              <div className="kpi">
                <b>3.5% vs 1.5%</b>
                <span>incidence of death, olanzapine vs placebo (2-fold increase)</span>
              </div>
              <div className="kpi">
                <b>1.3% vs 0.4%</b>
                <span>cerebrovascular adverse events, olanzapine vs placebo (3-fold increase)</span>
              </div>
            </div>
            <p>The efficacy of olanzapine was not established in these trials.</p>
          </article>
          <div className="g2" style={{ marginTop: 16 }}>
            <div>
              <h3>Key warnings</h3>
              <details id="metabolic" open>
                <summary>Metabolic effects</summary>
                <p>
                  Olanzapine treatment has been associated with weight gain and changes in glucose and lipid
                  parameters. Hyperglycaemia and the development or worsening of diabetes, occasionally associated with
                  ketoacidosis or coma, have been reported uncommonly, including some fatal cases.
                  <Cite n={1} section="4.4" />
                </p>
                <p>
                  Assess relevant baseline risk factors and monitor weight, blood glucose and lipid parameters as set
                  out in the monitoring schedule. <a href="#monitoring">See monitoring</a>.
                </p>
              </details>
              <details id="somnolence">
                <summary>Somnolence and dizziness</summary>
                <p>
                  Somnolence and dizziness may occur. Patients should be cautioned about operating machinery, including
                  motor vehicles.
                  <Cite n={1} section="4.7" />
                </p>
                <p>Sedation and orthostatic hypotension should be considered when assessing falls risk, concomitant medication and individual tolerability.</p>
              </details>
              <details id="nms">
                <summary>Neuroleptic malignant syndrome</summary>
                <p>
                  Neuroleptic malignant syndrome is a potentially life-threatening condition associated with
                  antipsychotic medicines. Clinical manifestations include hyperpyrexia, muscle rigidity, altered
                  mental status and autonomic instability.
                  <Cite n={1} section="4.4" />
                </p>
                <p>
                  If a patient develops signs and symptoms indicative of NMS, or presents with unexplained high fever
                  without additional clinical manifestations of NMS, <strong>all antipsychotic medicines, including olanzapine, must be discontinued</strong>.
                </p>
              </details>
              <details id="tardive">
                <summary>Tardive dyskinesia and other movement disorders</summary>
                <p>
                  Movement-related adverse effects may occur. The risk of tardive dyskinesia increases with long-term
                  exposure; patients should be assessed for relevant symptoms during treatment.
                  <Cite n={1} section="4.4" />
                </p>
                <p>
                  If signs or symptoms of tardive dyskinesia appear, dose reduction or discontinuation should be
                  considered. These symptoms can temporarily deteriorate or even arise after discontinuation of
                  treatment.
                </p>
              </details>
              <details id="cardiovascular">
                <summary>Cardiovascular and orthostatic effects</summary>
                <p>
                  Orthostatic hypotension and dizziness may occur. Caution is required in patients with relevant
                  cardiovascular risk factors or when medicines with potential interactions are co-administered. Blood
                  pressure should be measured periodically in patients over 65 years.
                  <Cite n={1} section="4.4" />
                </p>
              </details>
              <details id="hepatic">
                <summary>Hepatic and haematological considerations</summary>
                <p>
                  Transient, asymptomatic elevations of hepatic aminotransferases (ALT, AST) have been seen commonly,
                  especially in early treatment. Follow-up is important in patients with elevated liver enzymes, signs
                  of hepatic impairment, limited hepatic functional reserve or concomitant use of potentially
                  hepatotoxic medicines. If hepatitis is diagnosed, olanzapine treatment should be discontinued.
                  <Cite n={1} section="4.4" />
                </p>
                <p>
                  Caution is also required in patients with low leukocyte or neutrophil counts, medicines known to
                  cause neutropenia, a history of drug-induced bone marrow depression, or hypereosinophilic or
                  myeloproliferative conditions. Neutropenia has been reported commonly when olanzapine and valproate
                  are used concomitantly.
                </p>
              </details>
            </div>
            <div>
              <h3>Other warnings</h3>
              <details>
                <summary>Parkinson&apos;s disease</summary>
                <p>
                  Not recommended for dopamine agonist-associated psychosis in Parkinson&apos;s disease; worsening of
                  parkinsonian symptoms and hallucinations was reported very commonly.
                  <Cite n={1} section="4.4" />
                </p>
              </details>
              <details>
                <summary>QT interval</summary>
                <p>
                  Caution with medicines known to increase QTc, especially in the elderly and in congenital long QT
                  syndrome, congestive heart failure, heart hypertrophy, hypokalaemia or hypomagnesaemia.
                  <Cite n={1} section="4.4" />
                </p>
              </details>
              <details>
                <summary>Thromboembolism</summary>
                <p>
                  Venous thromboembolism has been reported uncommonly. Identify risk factors such as immobilisation and
                  take preventive measures.
                  <Cite n={1} section="4.4" />
                </p>
              </details>
              <details>
                <summary>Seizures</summary>
                <p>
                  Use cautiously in patients with a history of seizures or factors that may lower the seizure threshold.
                  <Cite n={1} section="4.4" />
                </p>
              </details>
              <details>
                <summary>Sudden cardiac death</summary>
                <p>
                  Reported post-marketing. In an observational study, the risk with olanzapine was approximately twice
                  that in patients not using antipsychotics, and comparable to pooled atypical antipsychotics.
                  <Cite n={1} section="4.4" />
                </p>
              </details>
              <details>
                <summary>Anticholinergic activity</summary>
                <p>
                  Caution in prostatic hypertrophy, paralytic ileus and related conditions.
                  <Cite n={1} section="4.4" />
                </p>
              </details>
              <details>
                <summary>General CNS activity</summary>
                <p>
                  Caution with alcohol and other centrally acting medicines. Olanzapine may antagonise the effects of
                  dopamine agonists.
                  <Cite n={1} section="4.4" />
                </p>
              </details>
              <details>
                <summary>Lactose</summary>
                <p>
                  Patients with rare hereditary galactose intolerance, total lactase deficiency or glucose-galactose
                  malabsorption should not take this medicine.
                  <Cite n={1} section="4.4" />
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="s" id="monitoring">
          <h2>
            <span className="sec-no">6.3</span>
            Monitoring during treatment
          </h2>
          <p>
            Example intervals in line with antipsychotic guidelines. Individualise monitoring to the patient&apos;s
            clinical circumstances.
            <Cite n={1} section="4.4" />
          </p>
          <div className="card tw">
            <table>
              <caption>Table 1. Example monitoring schedule</caption>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Baseline</th>
                  <th>Week 4</th>
                  <th>Week 8</th>
                  <th>Week 12</th>
                  <th>Thereafter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Body weight</th>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Quarterly</td>
                </tr>
                <tr>
                  <th>Blood glucose</th>
                  <td>Yes</td>
                  <td></td>
                  <td></td>
                  <td>Yes</td>
                  <td>Annually</td>
                </tr>
                <tr>
                  <th>Lipids</th>
                  <td>Yes</td>
                  <td></td>
                  <td></td>
                  <td>Yes</td>
                  <td>Every 5 years</td>
                </tr>
                <tr>
                  <th>Blood pressure</th>
                  <td colSpan={4}>Periodically in patients over 65 years</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Patients should be observed for signs and symptoms of hyperglycaemia (such as polydipsia, polyuria,
            polyphagia and weakness). Patients with diabetes mellitus or with risk factors for diabetes should be
            monitored regularly for worsening of glucose control.
            <Cite n={1} section="4.4" />
          </p>
          <p>See the full prescribing information for complete monitoring recommendations.</p>
        </section>

        <section className="s" id="weight">
          <h2>
            <span className="sec-no">6.4</span>
            Weight and metabolic changes over time
          </h2>
          <p>
            The proportion of patients with clinically significant changes in weight, glucose and lipids increased with
            longer exposure (at least 48 weeks).
            <Cite n={1} section="4.8" />
          </p>
          <div className="kpis">
            <div className="kpi">
              <b>64.4%</b>
              <span>
                of adults gained ≥ 7% of baseline weight with long-term exposure (≥ 48 weeks)
                <Cite n={1} section="4.8" />
              </span>
            </div>
            <div className="kpi">
              <b>22.2%</b>
              <span>
                gained ≥ 7% with short-term treatment (median 47 days)
                <Cite n={1} section="4.8" />
              </span>
            </div>
            <div className="kpi">
              <b>39.9%</b>
              <span>
                gained ≥ 7% with up to 12 months of recurrence-prevention treatment
                <Cite n={1} section="4.8" />
              </span>
            </div>
          </div>
          <div className="g2" style={{ marginTop: 20 }}>
            <div className="card" style={{ padding: 20 }}>
              <h3 style={{ fontSize: "16px", marginBottom: "12px", color: "var(--pri)", fontWeight: 600 }}>All adults, by exposure</h3>
              <VBars
                max={70}
                caption="Percentage of patients reaching each weight-gain threshold. Clinically significant weight gain was observed across all baseline BMI categories."
                rows={[
                  { label: "≥ 7% short-term", value: 22.2, display: "22.2%", tone: "soft" },
                  { label: "≥ 7% long-term", value: 64.4, display: "64.4%" },
                  { label: "≥ 15% short-term", value: 4.2, display: "4.2%", tone: "soft" },
                  { label: "≥ 15% long-term", value: 31.7, display: "31.7%" },
                  { label: "≥ 25% short-term", value: 0.8, display: "0.8%", tone: "soft" },
                  { label: "≥ 25% long-term", value: 12.3, display: "12.3%" },
                ]}
              />
            </div>
            <div className="card" style={{ padding: 20 }}>
              <h3 style={{ fontSize: "16px", marginBottom: "12px", color: "var(--pri)", fontWeight: 600 }}>Bipolar disorder clinical studies</h3>
              <HBars
                caption="Patients gaining ≥ 7% of baseline body weight."
                rows={[
                  { label: "Acute, combination (up to 6 weeks)", value: "17.4%", width: 35, tone: "soft" },
                  { label: "Recurrence prevention (up to 12 months)", value: "39.9%", width: 80 },
                ]}
              />
            </div>
          </div>
          <p className="source-line" style={{ marginTop: 12 }}>
            Figure 2. Weight-gain thresholds across short-term and long-term exposures and bipolar disorder clinical trials.
            <Cite n={1} section="4.8" />
          </p>
        </section>

        <section className="s" id="interactions">
          <h2>
            <span className="sec-no">6.5</span>
            Drug interactions
          </h2>
          <p>
            Olanzapine metabolism may be affected by medicines or substances that influence CYP1A2 activity. Review
            concomitant medicines, smoking status and relevant changes during treatment.
            <Cite n={1} section="4.5" />
          </p>
          <div className="card tw">
            <table>
              <caption>Table 2. Selected interactions</caption>
              <thead>
                <tr>
                  <th>Medicine or factor</th>
                  <th>Effect</th>
                  <th>Recommended action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Smoking; carbamazepine (CYP1A2 induction)</td>
                  <td>May increase olanzapine metabolism and reduce concentrations; only slight to moderate increase in clearance observed</td>
                  <td>Clinical monitoring; a dose increase may be considered if necessary</td>
                </tr>
                <tr>
                  <td>Fluvoxamine; other CYP1A2 inhibitors such as ciprofloxacin</td>
                  <td>
                    Increase olanzapine exposure. With fluvoxamine, mean Cmax rose 54% (female non-smokers) and 77%
                    (male smokers); mean AUC rose 52% and 108%
                  </td>
                  <td>Consider a lower starting dose; consider a dose decrease if an inhibitor is started</td>
                </tr>
                <tr>
                  <td>Activated charcoal</td>
                  <td>Reduces oral bioavailability by 50–60%</td>
                  <td>Take at least 2 hours before or after olanzapine</td>
                </tr>
                <tr>
                  <td>Alcohol and other centrally acting medicines</td>
                  <td>Additive CNS effects</td>
                  <td>Caution</td>
                </tr>
                <tr>
                  <td>Direct and indirect dopamine agonists</td>
                  <td>Olanzapine may antagonise their effects</td>
                  <td>Anti-Parkinsonian medicines not recommended in patients with Parkinson&apos;s disease and dementia</td>
                </tr>
                <tr>
                  <td>Medicines that increase QTc</td>
                  <td>Potential additive effect</td>
                  <td>Caution</td>
                </tr>
                <tr>
                  <td>Valproate</td>
                  <td>Neutropenia reported commonly with concomitant use</td>
                  <td>See hepatic and haematological considerations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="source-line">
            Olanzapine does not inhibit the main CYP450 isoenzymes in vitro, and showed no interaction with lithium or
            biperiden.
            <Cite n={1} section="4.5" />
          </p>
        </section>

        <section className="s" id="pregnancy">
          <h2>
            <span className="sec-no">6.6</span>
            Pregnancy and breastfeeding
          </h2>
          <div>
              <p>
                Because human experience is limited, olanzapine should be used in pregnancy only if the potential
                benefit justifies the potential risk to the foetus.
                <Cite n={1} section="4.6" />
              </p>
              <p>
                Newborns exposed to antipsychotics, including olanzapine, during the third trimester are at risk of
                adverse reactions including extrapyramidal and/or withdrawal symptoms, and should be monitored
                carefully.
              </p>
              <p>Olanzapine is excreted in breast milk. Patients should be advised not to breastfeed an infant if they are taking olanzapine.</p>
            </div>
        </section>

        <section className="s" id="adverse-reactions">
          <h2>
            <span className="sec-no">6.7</span>
            Adverse reactions
          </h2>
          <div className="g2">
            <div>
              <p>
                Frequently reported adverse reactions include somnolence, weight gain, increased appetite, dizziness,
                orthostatic hypotension and changes in glucose and lipid parameters. The full prescribing information
                gives the complete profile and frequency categories.
                <Cite n={1} section="4.8" />
              </p>
              <a className="more-link" href={EXTERNAL.smpcPdf} target="_blank" rel="noopener noreferrer">
                Full adverse-reaction table →
              </a>
            </div>
            <div>
              <div className="kpis">
                <div className="kpi">
                  <b>~30%</b>
                  <span>
                    prolactin above normal in trials up to 12 weeks (normal baseline); generally mild
                    <Cite n={1} section="4.8" />
                  </span>
                </div>
                <div className="kpi">
                  <b>Very common</b>
                  <span>
                    somnolence and weight gain (≥ 1 in 10 patients)
                    <Cite n={1} section="4.8" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <article className="reaction-card">
            <div className="reaction-card__head">
              <h3>All adverse reactions reported in ≥ 1% of adults in clinical trials</h3>
              <span className="reaction-badge">26 reported · Clinical trials</span>
            </div>
            <ul className="reaction-chips" aria-label="Adverse reactions reported in at least 1% of adults">
              {reactions.map((item) => (
                <li className="reaction-chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="source-line" style={{ marginTop: 14 }}>
              Frequencies as listed for adults in clinical trials.
              <Cite n={1} section="4.8" />
            </p>
          </article>
        </section>

        <section className="s" id="reporting">
          <p className="eb">Pharmacovigilance</p>
          <h2>Reporting of suspected adverse reactions</h2>
          <p>
            Reporting suspected adverse reactions after authorisation of the medicinal product is important. It allows
            continued monitoring of the benefit/risk balance of the medicinal product. Healthcare professionals are
            asked to report any suspected adverse reactions via their national reporting system.
            <Cite n={1} section="4.8" />
          </p>
        </section>

        <section className="pi" id="prescribing-information">
          <div>
            <p className="eb">Product information</p>
            <h2>Full prescribing information</h2>
            <p>
              The full prescribing information and the patient leaflet for ZYPREXA coated tablets and ZYPREXA powder
              for solution for injection.
            </p>
            <p className="source-line">Both links open the European Medicines Agency website.</p>
          </div>
          <div className="pi__actions">
            <a href={EXTERNAL.smpcPdf} target="_blank" rel="noopener noreferrer">
              View full prescribing information
            </a>
            <a href={EXTERNAL.patientLeafletPdf} target="_blank" rel="noopener noreferrer">
              Access patient leaflet
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

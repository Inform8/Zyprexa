import type { Metadata } from "next";
import Link from "next/link";
import { ScheduleMatrix } from "@/components/Figures";
import { Cite } from "@/components/Cite";

export const metadata: Metadata = {
  title: "Safety, Monitoring & Prescribing · ZYPREXA HCP",
  description:
    "Information for healthcare professionals on ZYPREXA safety: contraindications, dementia warning, dosing, formulations, metabolic monitoring, drug interactions, and discontinuation.",
};

export default function SafetyPrescribingPage() {
  return (
    <main id="app" className="safety">
      {/* Editorial Hero */}
      <div className="hero">
        <div className="w">
          <div>
            <p className="eb">Prescribing &amp; Safety Information</p>
            <h1 className="serif">Safety, monitoring and prescribing</h1>
            <p>Individualized treatment requires consideration of contraindications, precautions and ongoing monitoring.</p>
            <div className="row">
              <a className="btn" href="#dosing">
                Dosing &amp; administration ↓
              </a>
              <a className="btn g" href="#warnings">
                Warnings &amp; precautions
              </a>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/assets/zyprexa-packs.png?v=2"
              alt="ZYPREXA coated tablet packs"
            />
          </div>
        </div>
      </div>

      <div className="w">
        {/* Important Safety Information Box */}
        <section className="s" id="contraindications">
          <h2>Contraindications</h2>
          <p className="lead">
            Before prescribing Zyprexa, consult the current approved product information for the intended market.
            This page summarises selected considerations from the European SmPC and does not replace that document.
            Oral Zyprexa is contraindicated in patients with the following:
            <Cite n={1} section="4.3" />
          </p>
          <div className="safety-split">
            <article className="card safety-point">
              <span>01</span>
              <p>Hypersensitivity to olanzapine or to any of the excipients listed in section 6.1.</p>
            </article>
            <article className="card safety-point">
              <span>02</span>
              <p>Known risk of narrow-angle glaucoma.</p>
            </article>
          </div>
          <p className="source-line">
            Excipients include lactose monohydrate. The full qualitative list in SmPC section 6.1 also covers the
            tablet core and the colour coating, and it differs by strength. That complete list was not reproduced
            here. Consult section 6.1 of the current SmPC for the strength to be prescribed before treating a
            patient with a known excipient hypersensitivity.
          </p>
        </section>

        {/* Dosing and Administration */}
        <section className="s" id="dosing">
          <h2 className="smpc-heading">Dosing &amp; administration · EU SmPC 4.2 (Table 1)</h2>
          <p className="lead">
            Approved dose range: 5–20 mg/day. Daily dosage may subsequently be adjusted on the basis of
            individual clinical status. An increase above the recommended starting dose should occur only after
            appropriate clinical reassessment, and generally at intervals of not less than 24 hours. Olanzapine can
            be given without regard to meals, as absorption is not affected by food. For patients who have been
            receiving olanzapine for a manic episode, therapy for preventing recurrence continues at the same dose.
            <Cite n={1} section="4.2" />
          </p>

          <div className="card">
            <h3 style={{ marginBottom: "14px" }}>Therapeutic dose range</h3>
            <div className="range">
              <i style={{ left: 0, right: 0 }} />
              <span style={{ left: 0 }}>5 mg</span>
              <span style={{ left: "33%" }}>10 mg</span>
              <span style={{ left: "66%" }}>15 mg</span>
              <span style={{ left: "100%" }}>20 mg/day</span>
            </div>
          </div>

          <div className="card tw" style={{ padding: 0, marginTop: "16px" }}>
            <table>
              <thead>
                <tr>
                  <th>Indication</th>
                  <th>Recommended starting dose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Schizophrenia</b>
                  </td>
                  <td>
                    <b>10 mg/day</b> once daily (with or without food)
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Acute manic episode – monotherapy</b>
                  </td>
                  <td>
                    <b>15 mg/day</b> as a single daily dose
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Acute manic episode – combination therapy</b>
                  </td>
                  <td>
                    <b>10 mg/day</b> once daily with lithium or valproate
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Recurrence prevention in bipolar disorder</b>
                  </td>
                  <td>
                    <b>10 mg/day</b> (patients already on olanzapine continue at same dose)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card" style={{ marginTop: "16px" }}>
            <h3>Special populations</h3>
            <ul className="plain-list">
              <li>
                <strong>Older patients (65 years and over).</strong> A lower starting dose (5 mg/day) is not
                routinely indicated but should be considered when clinical factors warrant.
              </li>
              <li>
                <strong>Renal and/or hepatic impairment.</strong> A lower starting dose (5 mg) should be considered.
                In moderate hepatic insufficiency (cirrhosis, Child-Pugh Class A or B), the starting dose should be
                5 mg and only increased with caution.
              </li>
              <li>
                <strong>Factors that may slow metabolism.</strong> When more than one factor is present (female
                gender, geriatric age, non-smoking status), consider decreasing the starting dose. Dose escalation
                should be conservative.
              </li>
              <li>
                <strong>Smokers.</strong> Starting dose and range need not be routinely altered. Metabolism may be
                induced by smoking; clinical monitoring is recommended and a dose increase may be considered if
                necessary.
              </li>
              <li>
                <strong>Children and adolescents.</strong> Not recommended below 18 years of age due to a lack of
                data on safety and efficacy.
              </li>
            </ul>
          </div>
        </section>

        {/* Formulations Showcase */}
        <section className="s" id="formulations">
          <h2>Formulations</h2>
          <p className="lead">Oral coated tablets are the formulation covered on this page. The other presentations have their own product information.</p>
          <div className="safety-split safety-split--2">
            <article className="card">
              <h3>ZYPREXA coated tablets (oral)</h3>
              <p>
                All dosing and safety content on this page refers to the oral formulation.
                <Cite n={1} />
              </p>
            </article>
            <article className="card">
              <h3>ZYPREXA powder for solution for injection</h3>
              <p>Short-term intramuscular use for agitation. Different dosing and precautions.<Cite n={2} /></p>
            </article>
            <article className="card">
              <h3>ZYPADHERA (olanzapine pamoate)</h3>
              <p>
                Prolonged-release injection with its own dosing and post-injection observation requirements.
                <Cite n={3} />
              </p>
            </article>
            <article className="card">
              <h3>ZYPREXA VELOTAB (orodispersible tablets)</h3>
              <p>
                A separate oral formulation. Its SmPC was not supplied, so dose, administration and excipients for
                VELOTAB are not stated on this page. Use the approved VELOTAB product information for the target
                market.
              </p>
            </article>
          </div>
        </section>

        {/* Key Warnings & Precautions */}
        <section className="s" id="warnings">
          <h2>Key warnings &amp; precautions</h2>
          <details open>
            <summary>1. Dementia-related psychosis</summary>
            <p>
              In elderly patients with dementia-related psychosis, placebo-controlled trials showed a two-fold
              increase in mortality (3.5% vs 1.5%) and a three-fold increase in cerebrovascular events (1.3% vs
              0.4%). Olanzapine is not recommended in this population.
              <Cite n={1} section="4.4" />
            </p>
          </details>
          <details>
            <summary>2. Metabolic effects (weight gain, glucose, lipids)</summary>
            <p>
              Weight gain, hyperglycaemia, diabetic ketoacidosis, and dyslipidaemia have been reported. Clinical
              monitoring including baseline and periodic assessment of body weight, fasting plasma glucose, and
              fasting lipid profiles is recommended.
              <Cite n={1} section="4.4" />
            </p>
          </details>
          <details>
            <summary>3. Somnolence &amp; dizziness</summary>
            <p>
              Somnolence and postural dizziness are common adverse reactions. Patients should be cautioned about
              operating hazardous machinery, including motor vehicles, until they are reasonably certain that
              olanzapine therapy does not adversely affect them.
              <Cite n={1} section="4.7" />
            </p>
          </details>
          <details>
            <summary>4. Neuroleptic malignant syndrome (NMS)</summary>
            <p>
              NMS is a potentially fatal symptom complex associated with antipsychotic medicinal products. Clinical
              manifestations include hyperpyrexia, muscle rigidity, altered mental status, and autonomic
              instability. Discontinue all antipsychotic medicinal products immediately.
              <Cite n={1} section="4.4" />
            </p>
          </details>
          <details>
            <summary>5. Tardive dyskinesia</summary>
            <p>
              The risk of tardive dyskinesia increases with long-term exposure. If signs or symptoms of tardive
              dyskinesia appear in a patient on olanzapine, dose reduction or medicinal product discontinuation
              should be considered.
              <Cite n={1} section="4.4" />
            </p>
          </details>
          <details>
            <summary>6. Cardiovascular &amp; orthostatic effects</summary>
            <p>
              Postural hypotension with or without tachycardia or syncope may occur, especially during the initial
              dose-titration period. Periodic blood pressure measurement is recommended in patients over 65 years.
              <Cite n={1} section="4.4" />
            </p>
          </details>
          <details>
            <summary>7. Hepatic transaminases</summary>
            <p>
              Transient, asymptomatic elevations of hepatic aminotransferases (ALT, AST) are frequently observed.
              Caution should be exercised in patients with signs and symptoms of hepatic impairment; assess liver
              function if clinically indicated.
              <Cite n={1} section="4.4" />
            </p>
          </details>
          <details>
            <summary>8. Other warnings in the SmPC</summary>
            <ul>
              <li><b>Parkinson&apos;s disease.</b> Not recommended for dopamine agonist-associated psychosis; worsening of parkinsonian symptoms and hallucinations was reported very commonly.</li>
              <li><b>QT interval.</b> Caution with medicines known to increase QTc, especially in the elderly, congenital long QT syndrome, congestive heart failure, heart hypertrophy, hypokalaemia or hypomagnesaemia.</li>
              <li><b>Thromboembolism.</b> Venous thromboembolism has been reported uncommonly. Identify risk factors such as immobilisation.</li>
              <li><b>Seizures.</b> Use cautiously in patients with a history of seizures or factors that may lower the seizure threshold.</li>
              <li><b>Sudden cardiac death.</b> In an observational study, the risk with olanzapine was approximately twice that in patients not using antipsychotics.</li>
              <li><b>Anticholinergic activity.</b> Caution in prostatic hypertrophy, paralytic ileus and related conditions.</li>
              <li><b>General CNS activity.</b> Caution with alcohol and other centrally acting medicines. Olanzapine may antagonise the effects of dopamine agonists.</li>
              <li><b>Lactose.</b> Patients with rare hereditary galactose intolerance, total lactase deficiency or glucose-galactose malabsorption should not take this medicine.</li>
            </ul>
            <p>
              <Cite n={1} section="4.4" />
            </p>
          </details>
        </section>

        {/* Monitoring Recommendations & Timeline */}
        <section className="s" id="monitoring">
          <h2>Monitoring recommendations</h2>
          <p className="lead">
            Structured monitoring framework for metabolic and physical health parameters. Intervals below are the
            examples given in the product information, not a timetable that replaces clinical judgement.
            <Cite n={1} section="4.4" />
          </p>
          <ScheduleMatrix
            columns={["Baseline", "Week 4", "Week 8", "Week 12", "Quarterly", "Annually", "Every 5 yrs"]}
            rows={[
              {
                label: "Weight & BMI",
                note: "Baseline, weeks 4, 8 and 12, then quarterly thereafter.",
                marks: [true, true, true, true, true, false, false],
              },
              {
                label: "Fasting glucose",
                note: "Baseline and week 12, then annually. Check more often when diabetes risk is present.",
                marks: [true, false, false, true, false, true, false],
              },
              {
                label: "Lipid profile",
                note: "Baseline and week 12, then periodically, at least every 5 years.",
                marks: [true, false, false, true, false, false, true],
              },
              {
                label: "Blood pressure",
                note: "Baseline, then periodic monitoring, particularly in patients over 65. Later visits are clinical judgement rather than a fixed week.",
                marks: [true, false, false, false, false, false, false],
              },
            ]}
          />
        </section>

        {/* Drug Interactions */}
        <section className="s" id="interactions">
          <h2 className="smpc-heading">Drug interactions · EU SmPC 4.5 (Table 3)</h2>
          <p className="story">
            Olanzapine is cleared largely through CYP1A2, so smoking and medicines that speed up or slow that enzyme
            change exposure. The figures below are the ones stated in the European product information.
            <Cite n={1} section="4.5" />
          </p>
          <div className="card tw" style={{ padding: 0 }}>
            <table>
              <thead>
                <tr>
                  <th>Interacting agent</th>
                  <th>Clinical effect &amp; recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>CYP1A2 inducers</b> (smoking, carbamazepine)
                  </td>
                  <td>Induce metabolism; dose increase may be considered based on clinical response.</td>
                </tr>
                <tr>
                  <td>
                    <b>CYP1A2 inhibitors</b> (fluvoxamine, ciprofloxacin)
                  </td>
                  <td>
                    Fluvoxamine increases olanzapine C<sub>max</sub> (54–77%) and AUC (52–108%); consider lower
                    starting or maintenance dose.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Activated charcoal</b>
                  </td>
                  <td>Decreases bioavailability by 50–60%; separate administration by ≥ 2 hours.</td>
                </tr>
                <tr>
                  <td>
                    <b>CNS depressants &amp; alcohol</b>
                  </td>
                  <td>Additive central sedative effects; caution advised with alcohol or sedatives.</td>
                </tr>
                <tr>
                  <td>
                    <b>Valproate</b>
                  </td>
                  <td>Higher rate of neutropenia observed with concomitant therapy; monitor blood counts.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pregnancy, Lactation & Discontinuation */}
        <section className="s" id="special">
          <h2>Pregnancy, lactation &amp; discontinuation</h2>
          <div className="grid g3">
            <div className="card">
              <h3 className="smpc-heading">Pregnancy · EU SmPC 4.6</h3>
              <p>
                Use only if the potential benefit justifies the potential risk to the fetus. Neonates exposed to
                antipsychotics during the third trimester of pregnancy are at risk of extrapyramidal and/or
                withdrawal symptoms following delivery.
                <Cite n={1} section="4.6" />
              </p>
            </div>
            <div className="card">
              <h3>Lactation</h3>
              <p>
                Olanzapine was found to be excreted in human milk. Patients should be advised <b>not to breastfeed</b>{" "}
                an infant if they are taking olanzapine.
                <Cite n={1} section="4.6" />
              </p>
            </div>
            <div className="card">
              <h3>Discontinuation</h3>
              <p>
                Acute symptoms such as sweating, insomnia, tremor, anxiety, nausea or vomiting have been reported
                rarely when olanzapine is stopped abruptly. Gradual tapering of the dose should be considered.
                <Cite n={[1]} section="4.4" />
              </p>
            </div>
          </div>
        </section>

        <section className="s" id="adverse-reactions">
          <h2>Adverse reactions</h2>
          <p className="story">
            Frequently reported adverse reactions include somnolence, weight gain, increased appetite, dizziness,
            orthostatic hypotension and changes in glucose and lipid parameters. The full product information gives
            the complete profile and frequency categories.
            <Cite n={1} section="4.8" />
          </p>
          <h3>Reported in at least 1% of patients in clinical trials</h3>
          <p className="source-line">As listed in the SmPC summary of the safety profile, in adults.<Cite n={1} section="4.8" /></p>
          <ul className="chip-list">
            {[
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
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="story">
            In trials of up to 12 weeks, plasma prolactin exceeded the upper limit of normal in approximately 30% of
            patients with normal baseline values. Elevations were generally mild.
            <Cite n={1} section="4.8" />
          </p>
          <div id="reporting">
            <h3>Reporting suspected adverse reactions</h3>
            <p className="story">
              Reporting suspected adverse reactions after authorisation is important. It allows continued monitoring
              of the benefit/risk balance. Healthcare professionals are asked to report any suspected adverse
              reactions via the national reporting system listed in Appendix V of the product information for their
              market.
              <Cite n={1} section="4.8" />
            </p>
            <p className="source-line">
              Insert the confirmed contact for the target market before release. The rows below are placeholders,
              not live reporting channels.
            </p>
            <div className="card tw" style={{ padding: 0, marginTop: "12px" }}>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Target-market detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>National competent authority</td>
                    <td>To be confirmed (for example HPRA, MHRA or BfArM, depending on the market)</td>
                  </tr>
                  <tr>
                    <td>Online reporting</td>
                    <td>To be confirmed</td>
                  </tr>
                  <tr>
                    <td>Telephone</td>
                    <td>To be confirmed</td>
                  </tr>
                  <tr>
                    <td>Postal address</td>
                    <td>To be confirmed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <a
            className="more-link"
            href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full adverse-reaction table in the SmPC
          </a>
        </section>
      </div>
    </main>
  );
}

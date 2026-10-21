import type { Metadata } from "next";
import Link from "next/link";
import {
  IconShield,
  IconAlert,
  IconPill,
  IconWave,
  IconRepeat,
  IconScale,
  IconClock,
  IconChart,
  IconHeart,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Safety, Monitoring & Prescribing · ZYPREXA HCP",
  description:
    "Information for healthcare professionals on ZYPREXA safety: contraindications, dementia warning, dosing, formulations, metabolic monitoring, drug interactions, and discontinuation.",
};

export default function SafetyPrescribingPage() {
  return (
    <main id="app">
      {/* Editorial Hero */}
      <div className="hero">
        <div className="w">
          <div>
            <p className="eb">Prescribing &amp; Safety Information</p>
            <h1 className="serif">Safety, Monitoring &amp; Prescribing</h1>
            <p>Important safety information, dosing guidance and monitoring recommendations.</p>
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
              src="/assets/zyprexa-formulations.jpg"
              alt="ZYPREXA product packaging and formulation display"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="w">
        {/* Important Safety Information Box */}
        <section className="s" id="overview">
          <div className="alert">
            <h3 style={{ fontSize: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <IconAlert style={{ width: "22px", height: "22px" }} /> Important Safety Information
            </h3>
            <div className="grid g2" style={{ marginTop: "14px", alignItems: "stretch" }}>
              <div>
                <p>
                  <b>Contraindications (SmPC 4.3):</b> Known hypersensitivity to olanzapine; known risk of
                  narrow-angle glaucoma.
                </p>
                <p style={{ marginTop: "10px" }}>
                  <b>Metabolic changes:</b> Clinically significant weight gain, hyperglycaemia, and
                  dyslipidaemia can occur; regular baseline and periodic metabolic monitoring is required.
                </p>
                <p style={{ marginTop: "10px" }}>
                  <b>NMS alert:</b> Discontinue immediately if clinical manifestations of neuroleptic malignant
                  syndrome (NMS) or unexplained high fever occur.
                </p>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.7)",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid rgba(214, 51, 74, 0.2)",
                }}
              >
                <p>
                  <b>Dementia warning:</b> Not recommended in elderly patients with dementia-related psychosis
                  due to an observed increased incidence of mortality and cerebrovascular events.
                </p>
                <div className="dnr" style={{ marginTop: "12px" }}>
                  <div>
                    <div
                      className="dn"
                      style={
                        {
                          "--p": 35,
                          "--c": "#d6334a",
                        } as React.CSSProperties
                      }
                    >
                      <b>3.5%</b>
                    </div>
                    Mortality: 3.5% olz vs 1.5% placebo
                  </div>
                  <div>
                    <div
                      className="dn"
                      style={
                        {
                          "--p": 13,
                          "--c": "#d97706",
                        } as React.CSSProperties
                      }
                    >
                      <b>1.3%</b>
                    </div>
                    Cerebrovascular: 1.3% vs 0.4% placebo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dosing and Administration */}
        <section className="s" id="dosing">
          <h2>Dosing &amp; administration (EU SmPC 4.2; Table 1)</h2>
          <p className="lead">
            Approved dose range: 5–20 mg/day. Daily dosage may subsequently be adjusted on the basis of
            individual clinical status. Dose escalations should occur at intervals of not less than 24 hours.
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
            <p>
              A lower starting dose of <b>5 mg/day</b> should be considered for elderly patients (≥ 65 years)
              when clinical factors warrant. Consider a starting dose of 5 mg/day in patients with severe renal
              or moderate hepatic impairment. Consider 5 mg/day when more than one factor is present that might
              result in slower metabolism (female gender, geriatric age, non-smoking status).
            </p>
            <p style={{ marginTop: "8px" }}>
              <b>Paediatric use:</b> ZYPREXA is not recommended for use in children and adolescents below 18 years
              due to a lack of data on safety and efficacy and greater magnitude of weight gain.
            </p>
          </div>
        </section>

        {/* Formulations Showcase */}
        <section className="s" id="formulations">
          <h2>Formulations showcase</h2>
          <div className="grid g2" style={{ alignItems: "stretch" }}>
            <div style={{ borderRadius: "18px", overflow: "hidden", minHeight: "320px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/zyprexa-formulations.jpg"
                alt="ZYPREXA coated tablets and packaging"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "18px" }}
              />
            </div>
            <div className="grid" style={{ gap: "12px" }}>
              <div className="card">
                <h3>ZYPREXA coated tablets (oral)</h3>
                <p>
                  2.5 mg, 5 mg, 7.5 mg, 10 mg, 15 mg, and 20 mg strengths. Primary focus of this website; once-daily
                  oral dosing.
                </p>
              </div>
              <div className="card">
                <h3>ZYPREXA powder for solution for injection</h3>
                <p>
                  10 mg vial for rapid control of agitation and disturbed behaviours in schizophrenia or mania
                  when oral therapy is unsuitable.
                </p>
              </div>
              <div className="card">
                <h3>ZYPADHERA (olanzapine pamoate)</h3>
                <p>
                  210 mg, 300 mg, and 405 mg prolonged-release suspension for IM injection every 2 to 4 weeks.
                  Subject to post-injection observation.
                </p>
              </div>
            </div>
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
            </p>
          </details>
          <details>
            <summary>2. Metabolic effects (weight gain, glucose, lipids)</summary>
            <p>
              Weight gain, hyperglycaemia, diabetic ketoacidosis, and dyslipidaemia have been reported. Clinical
              monitoring including baseline and periodic assessment of body weight, fasting plasma glucose, and
              fasting lipid profiles is recommended.
            </p>
          </details>
          <details>
            <summary>3. Somnolence &amp; dizziness</summary>
            <p>
              Somnolence and postural dizziness are common adverse reactions. Patients should be cautioned about
              operating hazardous machinery, including motor vehicles, until they are reasonably certain that
              olanzapine therapy does not adversely affect them.
            </p>
          </details>
          <details>
            <summary>4. Neuroleptic malignant syndrome (NMS)</summary>
            <p>
              NMS is a potentially fatal symptom complex associated with antipsychotic medicinal products. Clinical
              manifestations include hyperpyrexia, muscle rigidity, altered mental status, and autonomic
              instability. Discontinue all antipsychotic medicinal products immediately.
            </p>
          </details>
          <details>
            <summary>5. Tardive dyskinesia</summary>
            <p>
              The risk of tardive dyskinesia increases with long-term exposure. If signs or symptoms of tardive
              dyskinesia appear in a patient on olanzapine, dose reduction or medicinal product discontinuation
              should be considered.
            </p>
          </details>
          <details>
            <summary>6. Cardiovascular &amp; orthostatic effects</summary>
            <p>
              Postural hypotension with or without tachycardia or syncope may occur, especially during the initial
              dose-titration period. Periodic blood pressure measurement is recommended in patients over 65 years.
            </p>
          </details>
          <details>
            <summary>7. Hepatic transaminases</summary>
            <p>
              Transient, asymptomatic elevations of hepatic aminotransferases (ALT, AST) are frequently observed.
              Caution should be exercised in patients with signs and symptoms of hepatic impairment; assess liver
              function if clinically indicated.
            </p>
          </details>
          <details>
            <summary>8. Other precautions</summary>
            <p>
              Exercise caution in patients with a history of seizures or with conditions that lower the seizure
              threshold. In patients with Parkinson&apos;s disease, olanzapine is not recommended as it may worsen
              parkinsonian symptoms and provoke hallucinations. Coated tablets contain lactose.
            </p>
          </details>
        </section>

        {/* Monitoring Recommendations & Timeline */}
        <section className="s" id="monitoring">
          <h2>Monitoring recommendations</h2>
          <p className="lead">Structured monitoring framework for metabolic and physical health parameters</p>
          <div className="grid g4">
            <div className="card">
              <h3>Weight &amp; BMI</h3>
              <p>Baseline, weeks 4, 8, 12; then quarterly thereafter.</p>
            </div>
            <div className="card">
              <h3>Fasting glucose</h3>
              <p>Baseline, week 12; then annually (more frequently in patients with diabetes risk).</p>
            </div>
            <div className="card">
              <h3>Lipid profile</h3>
              <p>Baseline, week 12; then periodically (at least every 5 years).</p>
            </div>
            <div className="card">
              <h3>Blood pressure</h3>
              <p>Baseline and periodic monitoring, particularly in patients over 65.</p>
            </div>
          </div>

          <div className="card" style={{ marginTop: "16px" }}>
            <h3>Monitoring timeline</h3>
            <div className="tl">
              <div>
                <b>Baseline</b>
                Weight/BMI, glucose, lipids, BP
              </div>
              <div>
                <b>Week 4</b>
                Weight/BMI
              </div>
              <div>
                <b>Week 8</b>
                Weight/BMI
              </div>
              <div>
                <b>Week 12</b>
                Weight/BMI, glucose, lipids
              </div>
              <div>
                <b>Quarterly</b>
                Weight/BMI
              </div>
              <div>
                <b>Annually</b>
                Fasting glucose
              </div>
              <div>
                <b>Every 5 yrs</b>
                Lipid profile
              </div>
            </div>
          </div>
        </section>

        {/* Drug Interactions */}
        <section className="s" id="interactions">
          <h2>Drug interactions (SmPC 4.5; Table 3)</h2>
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
              <h3>Pregnancy (SmPC 4.6)</h3>
              <p>
                Use only if the potential benefit justifies the potential risk to the fetus. Neonates exposed to
                antipsychotics during the third trimester of pregnancy are at risk of extrapyramidal and/or
                withdrawal symptoms following delivery.
              </p>
            </div>
            <div className="card">
              <h3>Lactation</h3>
              <p>
                Olanzapine was found to be excreted in human milk. Patients should be advised <b>not to breastfeed</b>{" "}
                an infant if they are taking olanzapine.
              </p>
            </div>
            <div className="card">
              <h3>Discontinuation</h3>
              <p>
                Acute symptoms such as sweating, insomnia, tremor, anxiety, nausea, or vomiting have been reported
                very rarely when olanzapine is stopped abruptly. Gradual dose tapering is recommended.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

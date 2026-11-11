import type { Metadata } from "next";
import { Cite } from "@/components/Cite";

export const metadata: Metadata = {
  title: "Clinical guidelines",
  description:
    "Guideline and formulary context for olanzapine in schizophrenia and bipolar disorder, including APA, DGPPN, NICE, BAP and WHO.",
};

export default function ClinicalGuidelinesPage() {
  return (
    <main id="app">
      <div className="hero hero--text">
        <div className="w">
          <div className="hero-copy">
            <p className="eb">Clinical guidelines</p>
            <h1 className="serif">Clinical guidelines</h1>
            <p>
              Guidelines place olanzapine among several options rather than ahead of them. Recommendations depend on
              the phase of illness, patient preference and how well the adverse-effect profile suits the individual.
            </p>
            <div className="hero-tabs">
              <a className="btn" href="#schizophrenia">
                Schizophrenia
              </a>
              <a className="btn g" href="#bipolar">
                Bipolar disorder
              </a>
              <a className="btn g" href="#who">
                WHO Essential Medicines
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true" />
        </div>
      </div>

      <div className="w">
        <section className="s" id="schizophrenia">
          <h2>Schizophrenia</h2>
          <div className="g2">
            <article className="card">
              <h3>
                APA practice guideline, 2021
                <Cite n={6} />
              </h3>
              <p className="eb">Schizophrenia</p>
              <ul>
                <li>Treat with an antipsychotic and monitor effectiveness and side effects (1A).</li>
                <li>
                  Continue antipsychotic treatment after symptoms improve (1A), preferably with the same medicine (2B).
                </li>
                <li>Clozapine for treatment-resistant schizophrenia (1B).</li>
                <li>
                  Long-acting injectable antipsychotic if the patient prefers it or adherence is poor (2B).
                </li>
                <li>Individual antipsychotics are not ranked.</li>
              </ul>
            </article>

            <article className="card">
              <h3>
                DGPPN S3-Leitlinie Schizophrenie, 2025
                <Cite n={8} />
              </h3>
              <p className="eb">AWMF Register 038-009</p>
              <ul>
                <li>
                  First episode: offer antipsychotics after weighing the risk–benefit profile; choose primarily by
                  adverse-effect profile because efficacy differences between agents are generally small (Empfehlung
                  33).
                </li>
                <li>
                  If clozapine is not tolerated, a treatment trial with olanzapine or risperidone can be offered
                  (Empfehlung 42).
                </li>
                <li>
                  Continuous antipsychotic treatment for relapse prevention should be offered after individual
                  risk–benefit evaluation (Empfehlung 35a/35b).
                </li>
              </ul>
            </article>

            <article className="card">
              <h3>
                NICE Clinical guideline CG178, 2014
                <Cite n={9} />
              </h3>
              <p className="eb">Psychosis and schizophrenia in adults</p>
              <ul>
                <li>
                  Offer oral antipsychotic medication together with psychological interventions for first-episode
                  psychosis (1.3.4.1).
                </li>
                <li>
                  Choose the antipsychotic jointly with the service user, discussing metabolic, extrapyramidal,
                  cardiovascular, hormonal and other side effects (1.3.5.1).
                </li>
                <li>
                  Treat antipsychotic use as an explicit individual therapeutic trial; start at the lower end of the
                  licensed range and assess at optimum dose for 4–6 weeks (1.3.6.3).
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="s" id="bipolar">
          <h2>Bipolar disorder</h2>
          <div className="g2">
            <article className="card">
              <h3>
                BAP guidelines, 2016
                <Cite n={7} />
              </h3>
              <p className="eb">Bipolar disorder</p>
              <ul>
                <li>
                  Severe mania: haloperidol, olanzapine, risperidone and quetiapine described as particularly effective
                  in the short-term reduction of symptoms.
                </li>
                <li>
                  Long term: olanzapine is among the agents shown to prevent manic relapse; lithium is recommended as
                  initial monotherapy.
                </li>
                <li>Weight gain is a prominent adverse effect of olanzapine.</li>
              </ul>
            </article>

            <article className="card">
              <h3>
                NICE Clinical guideline CG185, 2014
                <Cite n={10} />
              </h3>
              <p className="eb">Bipolar disorder: assessment and management</p>
              <ul>
                <li>
                  Mania or hypomania (not already on an antipsychotic or mood stabiliser): offer haloperidol,
                  olanzapine, quetiapine or risperidone (1.5.3).
                </li>
                <li>Offer lithium as first-line long-term pharmacological treatment (1.7.7).</li>
                <li>
                  If lithium is ineffective, poorly tolerated or unsuitable, consider an antipsychotic (for example
                  olanzapine among the listed alternatives) (1.7.8).
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="s" id="who">
          <h2>WHO Essential Medicines</h2>
          <article className="card">
            <h3>
              WHO Essential Medicines List, 2023
              <Cite n={12} />
            </h3>
            <p className="eb">Psychotic and bipolar disorders</p>
            <ul>
              <li>
                Olanzapine listed as a therapeutic alternative to risperidone (psychotic disorders) and to quetiapine
                (bipolar disorders).
              </li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}

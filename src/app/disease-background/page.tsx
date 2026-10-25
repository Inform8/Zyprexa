import type { Metadata } from "next";
import Link from "next/link";
import { Cite } from "@/components/Cite";
import { HashPanel, HashTabBar, HashTabsProvider } from "@/components/HashTabs";

export const metadata: Metadata = {
  title: "Disease background",
  description:
    "Clinical background on schizophrenia and bipolar disorder, the two conditions in which olanzapine is used.",
};

const tabs = [
  { id: "schizophrenia", label: "Schizophrenia" },
  { id: "bipolar", label: "Bipolar disorder" },
];

export default function DiseaseBackgroundPage() {
  return (
    <main id="app">
      <HashTabsProvider label="Condition" tabs={tabs}>
        <div className="hero hero--text">
          <div className="w">
            <div className="hero-copy">
              <p className="eb">Disease background</p>
              <h1 className="serif">Schizophrenia and bipolar disorder</h1>
              <p>
                Clinical background on the two conditions in which olanzapine is used. Product information, evidence and
                prescribing details are in the sections that follow.
              </p>
              <HashTabBar />
            </div>
            <div className="hero-art" aria-hidden="true" />
          </div>
        </div>

        <HashPanel id="schizophrenia">
          <div className="w">
            <section className="s" aria-label="Schizophrenia overview">
              <div className="lede-split">
                <h2>Schizophrenia</h2>
                <div>
                  <p>
                    Schizophrenia is a psychiatric disorder that can affect how a person perceives reality, thinks,
                    experiences emotions and interacts with others. Its presentation varies between individuals, and
                    symptoms can change over time.
                  </p>
                  <p>
                    Treatment aims to manage symptoms, prevent relapse where possible, support everyday functioning and
                    address the individual&apos;s broader healthcare needs.
                  </p>
                </div>
              </div>
            </section>

            <section className="s" id="symptoms">
              <h2>
                <span className="sec-no">2.1</span>
                Understanding the symptom domains
              </h2>
              <div className="domains domains--rows">
                <article className="domain">
                  <div className="domain__head">
                    <span className="domain__num">01</span>
                    <h3>Positive symptoms</h3>
                  </div>
                  <p>
                    Experiences or behaviours that are <strong>added</strong> to a person&apos;s usual functioning.
                  </p>
                  <ul>
                    <li>Hallucinations</li>
                    <li>Delusions</li>
                    <li>Disorganized thinking or speech</li>
                    <li>Disorganized behaviour</li>
                  </ul>
                  <p className="domain__foot">
                    These symptoms may substantially affect a person&apos;s perception of reality and ability to function.
                  </p>
                </article>
                <article className="domain">
                  <div className="domain__head">
                    <span className="domain__num">02</span>
                    <h3>Negative symptoms</h3>
                  </div>
                  <p>
                    A <strong>reduction or loss</strong> of aspects of normal functioning. Examples may include:
                  </p>
                  <ul>
                    <li>Reduced motivation</li>
                    <li>Diminished emotional expression</li>
                    <li>Reduced speech</li>
                    <li>Social withdrawal</li>
                    <li>Reduced engagement in everyday activities</li>
                  </ul>
                  <p className="domain__foot">
                    Negative symptoms can affect social relationships, occupational functioning and participation in
                    daily life.
                  </p>
                </article>
                <article className="domain">
                  <div className="domain__head">
                    <span className="domain__num">03</span>
                    <h3>Cognitive symptoms</h3>
                  </div>
                  <p>
                    Difficulties with the <strong>mental processes</strong> needed for everyday activities. These may
                    include difficulties with:
                  </p>
                  <ul>
                    <li>Attention and concentration</li>
                    <li>Working memory</li>
                    <li>Planning and organization</li>
                    <li>Decision-making and executive functioning</li>
                  </ul>
                  <p className="domain__foot">
                    The pattern and severity of symptoms differ between individuals. Cognitive difficulties should be
                    considered as part of the overall clinical assessment.
                  </p>
                </article>
              </div>
              <p className="source-line">
                Figure 1. Three symptom domains of schizophrenia, with examples. Domains are not mutually exclusive and
                individual presentations vary.
                <Cite n={4} />
              </p>
            </section>

            <section className="s" id="neurobiology">
              <h2>
                <span className="sec-no">2.2</span>
                The neurobiology of schizophrenia
              </h2>
              <div className="section-intro">
                <p>
                  Schizophrenia is associated with complex changes in brain function and neurotransmission. One widely
                  discussed model links three interconnected hypotheses: excess dopamine D<sub>2</sub> activity in the
                  mesolimbic pathway, hypofunction of glutamate NMDA receptors, and hyperfunction of cortical serotonin
                  5-HT<sub>2A</sub> receptors.
                  <Cite n={5} />
                </p>
                <p>
                  In this model, NMDA receptor hypofunction and 5-HT<sub>2A</sub> hyperfunction can each lead, further
                  downstream, to mesolimbic dopamine hyperactivity, which is associated with positive symptoms. Negative
                  and cognitive symptoms are thought to involve other circuits.
                  <Cite n={5} /> No single neurotransmitter imbalance fully explains schizophrenia or accounts for every
                  symptom an individual experiences.
                </p>
              </div>

              <figure className="hypo-fig-stage" aria-label="Three interconnected hypotheses of schizophrenia">
                <div className="hypo-top">
                  <article className="hypo-card">
                    <span className="hypo-pill">Serotonin hypothesis</span>
                    <h3>
                      Cortical 5-HT<sub>2A</sub> hyperfunction
                    </h3>
                  </article>
                  <article className="hypo-card">
                    <span className="hypo-pill">Glutamate hypothesis</span>
                    <h3>NMDA receptor hypofunction</h3>
                  </article>
                </div>

                <div className="hypo-links" aria-hidden="true">
                  <svg className="hypo-svg" viewBox="0 0 800 68" preserveAspectRatio="none">
                    <path
                      d="M 200 0 V 28 H 310"
                      fill="none"
                      stroke="#8a3aa3"
                      strokeWidth="2"
                    />
                    <path
                      d="M 600 0 V 28 H 490"
                      fill="none"
                      stroke="#8a3aa3"
                      strokeWidth="2"
                    />
                    <path
                      d="M 400 28 V 64"
                      fill="none"
                      stroke="#8a3aa3"
                      strokeWidth="2"
                    />
                    <polygon points="394,56 406,56 400,66" fill="#8a3aa3" />
                  </svg>
                  <div className="hypo-flow-badge">
                    <span>Downstream effects</span>
                  </div>
                </div>

                <div className="hypo-core">
                  <article className="hypo-mid">
                    <span className="hypo-mid-pill">Dopamine hypothesis</span>
                    <h3>
                      Mesolimbic D<sub>2</sub> hyperactivity
                    </h3>
                  </article>

                  <div className="hypo-arrow-stem" aria-hidden="true">
                    <svg width="24" height="34" viewBox="0 0 24 34" fill="none">
                      <line x1="12" y1="0" x2="12" y2="24" stroke="#8a3aa3" strokeWidth="2" strokeLinecap="round" />
                      <polyline points="6,18 12,26 18,18" stroke="#8a3aa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>

                  <article className="hypo-out">
                    <span className="hypo-out-pill">Clinical manifestation</span>
                    <h3>Positive symptoms</h3>
                    <p>Negative and cognitive symptoms involve other circuits</p>
                  </article>
                </div>

                <figcaption className="source-line hypo-caption">
                  Figure 2. Simplified schematic of the dopamine, glutamate and serotonin hypotheses and their proposed
                  links. It does not depict anatomy or individual neurons. Adapted from Stahl 2018.
                  <Cite n={5} />
                </figcaption>
              </figure>
            </section>

            <section className="s" id="course-of-care">
              <h2>
                <span className="sec-no">2.3</span>
                Treatment across the course of schizophrenia
              </h2>
              <p>
                Treatment needs can change over time. The following phases are a useful clinical framework rather than
                a rigid sequence that applies identically to every patient.
              </p>
              <div className="domains">
                <article className="domain">
                  <div className="domain__head">
                    <span className="domain__num">01</span>
                    <div>
                      <p className="eb">Phase</p>
                      <h3>Acute treatment</h3>
                    </div>
                  </div>
                  <p>
                    The immediate objectives are to assess clinical severity and safety, manage acute symptoms and
                    establish an appropriate treatment plan.
                  </p>
                </article>
                <article className="domain">
                  <div className="domain__head">
                    <span className="domain__num">02</span>
                    <div>
                      <p className="eb">Phase</p>
                      <h3>Stabilization</h3>
                    </div>
                  </div>
                  <p>
                    As symptoms improve, treatment focuses on consolidating the response, reviewing tolerability and
                    supporting a return to everyday routines.
                  </p>
                </article>
                <article className="domain">
                  <div className="domain__head">
                    <span className="domain__num">03</span>
                    <div>
                      <p className="eb">Phase</p>
                      <h3>Maintenance</h3>
                    </div>
                  </div>
                  <p>
                    Ongoing treatment and follow-up aim to sustain clinical improvement, monitor adverse effects and
                    identify early signs of deterioration.
                  </p>
                </article>
              </div>
              <p className="source-line">
                Figure 3. Phases of care as a clinical framework. Progression is not fixed, and individual patients may
                move between phases. Treatment needs can change over time; phases may recur.
              </p>
              <details>
                <summary>Supporting continuity of care</summary>
                <p>
                  Follow-up should consider treatment response, tolerability, daily functioning, social support and the
                  individual&apos;s ability to continue the agreed treatment plan.
                </p>
                <p>
                  Adherence may be affected by adverse effects, the nature of the illness, treatment preferences and
                  practical barriers. Explore these collaboratively rather than attributing them to the patient alone.
                </p>
              </details>
            </section>
          </div>
        </HashPanel>

        <HashPanel id="bipolar">
          <div className="w">
            <section className="s" aria-label="Bipolar disorder overview">
              <div className="lede-split">
                <h2>Bipolar disorder</h2>
                <div>
                  <p>
                    Bipolar disorder is characterized by episodes of mood disturbance, including mania or hypomania and
                    depression, depending on the type of bipolar disorder. Episodes can affect energy, sleep, judgement,
                    behaviour and everyday functioning.
                  </p>
                  <p>
                    Treatment decisions depend on the current episode, previous clinical history, treatment response,
                    comorbidities and the individual&apos;s needs.
                  </p>
                </div>
              </div>
            </section>

            <section className="s" id="episodes">
              <h2>
                <span className="sec-no">2.4</span>
                Understanding mood episodes
              </h2>
              <div className="domains domains--episodes">
                <article className="domain">
                  <p className="eb">Elevated, expansive or irritable mood</p>
                  <div className="domain__head">
                    <span className="domain__num">01</span>
                    <h3>Mania</h3>
                  </div>
                  <div className="domain__body">
                    <p>
                      Mania involves a distinct period of abnormally elevated, expansive or irritable mood and increased
                      activity or energy. Symptoms may include reduced need for sleep, increased speech, racing thoughts,
                      inflated self-esteem and impulsive or high-risk behaviour.
                    </p>
                    <p className="domain__foot">
                      Severe manic episodes may be associated with marked functional impairment and can require urgent
                      clinical assessment.
                    </p>
                  </div>
                </article>
                <article className="domain">
                  <p className="eb">Features of both</p>
                  <div className="domain__head">
                    <span className="domain__num">02</span>
                    <h3>Mixed features</h3>
                  </div>
                  <div className="domain__body">
                    <p>
                      Some episodes involve symptoms associated with both mania and depression. These presentations can
                      be complex and require careful clinical assessment.
                    </p>
                  </div>
                </article>
                <article className="domain">
                  <p className="eb">Persistent low mood</p>
                  <div className="domain__head">
                    <span className="domain__num">03</span>
                    <h3>Depression</h3>
                  </div>
                  <div className="domain__body">
                    <p>
                      Depressive episodes may involve persistent low mood, reduced interest or pleasure, fatigue, changes
                      in sleep or appetite, feelings of worthlessness and difficulties with concentration.
                    </p>
                    <p className="domain__foot">
                      The clinical presentation and treatment needs differ from those of mania.
                    </p>
                  </div>
                </article>
              </div>
              <p className="source-line">
                Figure 4. Features of manic, mixed and depressive episodes.
                <Cite n={4} /> The arrangement groups episode features; it does not represent an illness course, the
                order in which episodes occur, or their frequency.
              </p>
            </section>

            <section className="s" id="treatment">
              <h2>
                <span className="sec-no">2.5</span>
                Treatment objectives
              </h2>
              <div className="obj-layout">
                <div>
                  <p>Treatment objectives depend on the phase of illness.</p>
                  <ul className="obj-list">
                    <li>
                      <b>Acute management</b>
                      <span>Address the current episode and associated clinical risks.</span>
                    </li>
                    <li>
                      <b>Stabilization</b>
                      <span>Consolidate improvement and review tolerability.</span>
                    </li>
                    <li>
                      <b>Recurrence prevention</b>
                      <span>Support sustained clinical stability following a treatment response.</span>
                    </li>
                  </ul>
                  <p>
                    These objectives should be individualized. Treatment for an acute manic episode should not
                    automatically be assumed to provide adequate management for every subsequent mood episode.
                  </p>
                </div>
                <aside className="card">
                  <h3>Product information</h3>
                  <p>
                    Approved indications, dosing and safety information for olanzapine are in the overview and in the
                    dosing and safety sections.
                  </p>
                  <Link className="more-link" href="/#indications">
                    Approved indications →
                  </Link>
                </aside>
              </div>
            </section>
          </div>
        </HashPanel>
      </HashTabsProvider>
    </main>
  );
}

"use client";

import { useState } from "react";
import { StepRail } from "@/components/Figures";

export default function SchizophreniaPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: "Dopamine hypothesis",
      heading: "Dopamine hypothesis",
      content:
        "Mesolimbic dopamine D₂ hyperactivity drives positive psychotic symptoms (delusions, hallucinations); mesocortical hypodopaminergia correlates with negative symptoms and cognitive deficits.",
    },
    {
      title: "Glutamate / NMDA",
      heading: "Glutamate / NMDA hypothesis",
      content:
        "Cortical NMDA receptor hypofunction impairs downstream GABAergic interneurons, causing secondary dopaminergic dysregulation and disruption of cortico-striatal-thalamic circuits.",
    },
    {
      title: "Serotonin (5-HT₂A)",
      heading: "Serotonin (5-HT₂A) modulation",
      content:
        "Cortical 5-HT₂A hyperfunction modulates striatal dopamine release. Dual 5-HT₂A/D₂ antagonism lowers extrapyramidal symptom (EPS) liability and helps stabilize mood.",
    },
  ];

  return (
    <main id="app">
      {/* Editorial Hero */}
      <div className="hero">
        <div className="w">
          <div>
            <p className="eb">Disease area · Schizophrenia</p>
            <h1 className="serif">Understanding Schizophrenia</h1>
            <p>Complex neurobiology. Real-world impact. A long-term need for effective management.</p>
            <div className="row">
              <a className="btn" href="#symptoms">
                Symptom domains ↓
              </a>
              <a className="btn g" href="#phases">
                Phases of care
              </a>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/schizophrenia-network.jpg"
              alt="Brain with connected neural pathways"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="w">
        {/* Overview: Balanced 2-Column Grid */}
        <section className="s" id="overview">
          <h2>Overview &amp; Global Impact</h2>
          <div className="grid g2" style={{ alignItems: "stretch", marginTop: "16px" }}>
            {/* Left Card: Epidemiology */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "17px", marginBottom: "12px" }}>Global Prevalence &amp; Onset</h3>
                <p>
                  Schizophrenia is a chronic, multidimensional psychiatric illness affecting approximately 24 million
                  people worldwide, or roughly 1 in 300 individuals globally.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  background: "var(--soft)",
                  padding: "16px",
                  borderRadius: "12px",
                  marginTop: "16px",
                }}
              >
                <div
                  className="dn"
                  style={
                    {
                      "--p": 33,
                      "--c": "#7c4dff",
                      margin: 0,
                      flexShrink: 0,
                    } as React.CSSProperties
                  }
                >
                  <b>1 : 300</b>
                </div>
                <div style={{ fontSize: "13px", color: "var(--ink)" }}>
                  <b>Prevalence: ~1 in 300 worldwide</b>
                  <p style={{ margin: "4px 0 0", color: "var(--mut)", fontSize: "12.5px" }}>
                    Typically diagnosed during late adolescence through early adulthood, presenting a persistent need
                    for structured medical support.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Collaborative Care Model */}
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "17px", marginBottom: "12px" }}>Multidimensional Care Paradigm</h3>
                <p>
                  Optimal management requires sustained collaborative care balancing symptom remission with long-term
                  functional recovery:
                </p>
                <ul style={{ marginTop: "10px", display: "grid", gap: "8px" }}>
                  <li>
                    <b>Symptom remission:</b> Controlling positive, negative, and cognitive manifestations across
                    relapse-prone periods.
                  </li>
                  <li>
                    <b>Physical health:</b> Proactive, structured monitoring of cardiometabolic parameters, weight, and
                    blood pressure.
                  </li>
                  <li>
                    <b>Community reintegration:</b> Supporting cognitive functioning, social connections, and vocational
                    engagement.
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "12.5px", color: "var(--mut)", marginTop: "16px" }}>
                Early pharmacological stability provides the foundation for sustainable rehabilitation.
              </p>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="s" id="symptoms">
          <h2>Three core symptom domains</h2>
          <p className="lead">Clinical manifestations of schizophrenia across domains</p>
          <div className="domains">
            <article className="domain">
              <span className="domain__num">01</span>
              <div>
                <h3>Positive symptoms</h3>
                <p>Added experiences and behaviours, highly responsive to mesolimbic dopamine D₂ receptor blockade:</p>
                <ul>
                  <li>Auditory and visual hallucinations</li>
                  <li>Persecutory or referential delusions</li>
                  <li>Disorganised speech</li>
                  <li>Agitated behaviour</li>
                </ul>
              </div>
            </article>
            <article className="domain">
              <span className="domain__num">02</span>
              <div>
                <h3>Negative symptoms</h3>
                <p>Reduction or loss of baseline functioning, and the main driver of long-term disability:</p>
                <ul>
                  <li>Blunted affect</li>
                  <li>Avolition</li>
                  <li>Alogia</li>
                  <li>Severe social withdrawal and anhedonia</li>
                </ul>
              </div>
            </article>
            <article className="domain">
              <span className="domain__num">03</span>
              <div>
                <h3>Cognitive symptoms</h3>
                <p>Deficits in mental processing that correlate with real-world functional independence:</p>
                <ul>
                  <li>Impaired working memory</li>
                  <li>Sustained attention and vigilance</li>
                  <li>Executive planning</li>
                  <li>Processing speed</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Neurobiology */}
        <section className="s" id="neurobiology">
          <h2>Neurobiology of schizophrenia</h2>
          <p className="lead">
            A conceptual educational model of three hypotheses. This is not clinical-trial evidence for olanzapine.
          </p>
          <div className="neuro">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="neuro__img"
              src="/assets/schizophrenia-network.jpg"
              alt="Brain with connected neural pathways"
              loading="lazy"
            />
            <div className="neuro__copy">
              <div className="tabs">
                {tabsData.map((tab, idx) => (
                  <button
                    key={tab.title}
                    type="button"
                    className={activeTab === idx ? "on" : ""}
                    onClick={() => setActiveTab(idx)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <h3>{tabsData[activeTab].heading}</h3>
              <p>{tabsData[activeTab].content}</p>
              <p className="neuro__note">
                Conceptual model after Stahl 2018, cited for education. It is not a trial result, and it does not
                by itself explain the clinical effects of olanzapine.
              </p>
            </div>
          </div>
        </section>

        {/* Course of Care */}
        <section className="s" id="phases">
          <h2>Treatment across the course of care</h2>
          <p className="lead">Phased management framework from initial episode to long-term recovery</p>
          <StepRail
            label="Course of care"
            steps={[
              {
                title: "Acute phase",
                body: "Rapid symptom reduction, crisis stabilization, behavioural control, and baseline metabolic and ECG assessments.",
              },
              {
                title: "Stabilisation",
                body: "Consolidating treatment response, managing tolerability, and supporting structured re-entry into daily life.",
              },
              {
                title: "Maintenance",
                body: "Relapse prevention, sustaining clinical improvement, ongoing safety and metabolic monitoring, and social reintegration.",
              },
            ]}
          />
        </section>

        {/* Role of Olanzapine */}
        <section className="s" id="olz">
          <h2>The role of olanzapine in schizophrenia</h2>
          <div className="card tw" style={{ padding: 0 }}>
            <table>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>What the evidence describes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>Symptom domains</b></td>
                  <td>Efficacy across positive, negative, and depressive symptom domains.</td>
                </tr>
                <tr>
                  <td><b>Evidence base</b></td>
                  <td>More than 25 years of randomised controlled trial evidence in adult schizophrenia.</td>
                </tr>
                <tr>
                  <td><b>Delivery options</b></td>
                  <td>Coated oral tablets, rapid intramuscular injection, and long-acting injectable ZYPADHERA.</td>
                </tr>
                <tr>
                  <td><b>Acute study duration</b></td>
                  <td>
                    The SmPC programme in positive and negative symptoms does not state a duration. The cited
                    North American publication (Beasley et al. 1996) is a 6-week acute trial.
                  </td>
                </tr>
                <tr>
                  <td><b>Continuation therapy</b></td>
                  <td>
                    EU SmPC 4.1 states that olanzapine is effective in maintaining clinical improvement during
                    continuation therapy in patients who have shown an initial treatment response. The SmPC does not
                    give the continuation-study duration or a separate primary publication. Source: EU SmPC sections
                    4.1 and 5.1; Beasley et al. 1996 for the acute trial.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Care Continuity & Dosing */}
        <section className="s" id="care">
          <h2>Supporting continuity of care</h2>
          <div className="grid g3">
            <div className="card">
              <h3>Ongoing monitoring</h3>
              <p>
                Weight, glucose and lipids need follow-up during treatment. The schedule and the long-term weight
                thresholds are kept on the safety page.
              </p>
              <p style={{ marginTop: "10px" }}>
                <a href="/safety-prescribing#monitoring">Metabolic monitoring schedule →</a>
              </p>
            </div>
            <div className="card">
              <h3>Psychosocial support</h3>
              <p>
                Integration of cognitive behavioural therapy, family psychoeducation, and supported
                employment.
              </p>
            </div>
            <div className="card">
              <h3>Individualized posology</h3>
              <p>
                Titration between 5–20 mg/day based on clinical response and tolerability with patient-centered
                shared decision-making.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import SectionNav from "@/components/SectionNav";
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
              src="/assets/schizophrenia-person.jpg"
              alt="Contemplative silhouette representing long-term schizophrenia recovery"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <SectionNav />

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
          <div className="spectrum-head">
            <h2>Three core symptom domains</h2>
            <p>Clinical manifestations of schizophrenia across domains</p>
          </div>
          <div className="domains">
            <article className="domain domain--pos">
              <span>Positive domain</span>
              <h3>Positive symptoms</h3>
              <p>Added experiences and behaviours, highly responsive to mesolimbic dopamine D₂ receptor blockade:</p>
              <ul>
                <li>Auditory and visual hallucinations</li>
                <li>Persecutory or referential delusions</li>
                <li>Disorganised speech</li>
                <li>Agitated behaviour</li>
              </ul>
            </article>
            <article className="domain domain--neg">
              <span>Negative domain</span>
              <h3>Negative symptoms</h3>
              <p>Reduction or loss of baseline functioning, and the main driver of long-term disability:</p>
              <ul>
                <li>Blunted affect</li>
                <li>Avolition</li>
                <li>Alogia</li>
                <li>Severe social withdrawal and anhedonia</li>
              </ul>
            </article>
            <article className="domain domain--cog">
              <span>Cognitive domain</span>
              <h3>Cognitive symptoms</h3>
              <p>Deficits in mental processing that correlate with real-world functional independence:</p>
              <ul>
                <li>Impaired working memory</li>
                <li>Sustained attention and vigilance</li>
                <li>Executive planning</li>
                <li>Processing speed</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Neurobiology */}
        <section className="s" id="neurobiology">
          <h2>Neurobiology of schizophrenia</h2>
          <p className="lead">Three interconnected pathophysiological hypotheses</p>
          <div className="grid g2" style={{ alignItems: "stretch" }}>
            <div style={{ borderRadius: "18px", overflow: "hidden", minHeight: "260px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/hero-brain-3d.jpg"
                alt="Neural connectivity and neurotransmitter pathway model"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "18px" }}
              />
            </div>
            <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
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
                <h3 style={{ fontSize: "17px", marginTop: "12px" }}>{tabsData[activeTab].heading}</h3>
                <p style={{ marginTop: "10px", lineHeight: "1.6" }}>{tabsData[activeTab].content}</p>
              </div>
              <p style={{ fontSize: "12px", color: "var(--mut)", marginTop: "16px" }}>
                Multi-system neurotransmitter interplay underpins atypical antipsychotic mechanism.
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
                  <td><b>Continuation therapy</b></td>
                  <td>Maintenance of clinical improvement in continuation therapy for patients with an initial response.</td>
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
                Routine evaluation of weight, BMI, fasting glucose, and lipid profiles to mitigate
                cardiometabolic risk.
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
              <div className="range">
                <i style={{ left: 0, right: 0 }} />
                <span style={{ left: 0 }}>5</span>
                <span style={{ left: "33%" }}>10</span>
                <span style={{ left: "66%" }}>15</span>
                <span style={{ left: "100%" }}>20 mg/day</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

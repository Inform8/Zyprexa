# ZYPREXA® (olanzapine) HCP Website — Architecture, Card Design System & Content Specification

This document provides:
1. **The Unified Card Design System & Catalog**: A complete breakdown of all card styles used across the site, their global CSS tokens, and instructions for customizing cards globally without updating individual page files.
2. **Page-by-Page Content & Data Specification**: The definitive, page-wise clinical data and visual layout for each of the 7 pages based on the approved European Union Summary of Product Characteristics (EU SmPC).

---

## Part 1: Unified Card Design System & Catalog

### 1. Architectural Overview

To prevent having to edit multiple page files whenever a visual update is needed, the website utilizes a **single centralized card architecture**:

1. **Global CSS Tokens in `src/app/globals.css`**: All cards derive their border radius, background, padding, box shadow, and typography directly from CSS variables (`--card-bg`, `--card-border`, `--card-radius`, `--card-padding`, `--card-shadow`, `--card-shadow-hover`, `--card-text-size`, `--card-title-size`).
2. **Single Reusable React Component `src/components/Card.tsx`**: A unified component supporting all card styles via simple props (`variant`, `icon`, `iconColor`, `title`, `description`, `href`, `stat`, `tag`, `tagColor`, `children`).
3. **Global Cascading**: Updating any token in `globals.css` (e.g. changing `--card-radius: 12px` or altering `--card-border`) instantly cascades across every card on every page of the website.

---

### 2. Card Styles Catalog (12 Distinct Card Types)

Here is the complete inventory of all card types used across the 7 pages:

| Style # | Card Type | Primary CSS Class | Key Characteristics | Typical Use Cases |
|---|---|---|---|---|
| **1** | **Glass Editorial Card (Style 32)** | `.card` / `.k-glass` | Frosted glass (`rgba(255,255,255,0.65)` + `blur(18px) saturate(1.4)`), double border highlight (`inset 0 1px 0 #fff` + `0 0 0 1px rgba(255,255,255,0.75)`), 18px radius, multi-layer ambient shadow, pristine iconless typography | Clinical concepts, disease descriptions across all pages |
| **3** | **Interactive Link Card** | `a.card` / `<Card href="...">` | Deep hover shadow, purple border highlight, -2px lift | Topic explorer, regulatory downloads |
| **4** | **Process Flow Card** | `.flow > .card` | Numbered step badges (`01`, `02`, `03`) connected by arrows | Schizophrenia course of care phases |
| **5** | **Alert / Warning Card** | `.alert` | Soft crimson background (`#fdecef`), red border & red title | Non-indication alerts, Important Safety Information |
| **6** | **Gradient Prescribing Banner** | `.pi` | Rich purple linear gradient, white text, 2-column split | Important Prescribing Information banner |
| **7** | **Stat / Metric Counter Card** | `.card.stat` | Centered large serif numeral (40px Playfair), label below | Clinical studies count, mean weight gain (+3.5 kg) |
| **8** | **Chart Container Card** | `.card` + `.cols` / `.dnr` | Card container hosting vertical bar charts or donut charts | Efficacy comparisons, response rates, recurrence |
| **9** | **Zero-Padding Table Card** | `.card.tw` | Overflow-x wrapper with zero padding, striped header | 9-study explorer, receptor binding, dosing table |
| **10** | **Status / Indication Tagged Card** | `.card` + `.tag` / `.tag.r` | Includes a rounded status pill badge at the bottom | Approved indication pills, warning non-indication pills |
| **11** | **Interactive Posology Card** | `.card` + `.range` | Contains a linear dose slider with gradient progress bar | 5–20 mg/day posology titration |
| **12** | **Collapsible Accordion Card** | `details` / `summary` | Expandable card container with bold header and chevron | Safety warnings & precautions |

---

### 3. Detailed Card Anatomy & Code Examples

#### Style 1: Standard Editorial Card
```tsx
<div className="card">
  <h3>Card Title</h3>
  <p>Descriptive body copy styled with 13.5px Inter muted text.</p>
</div>
```
*Unified Component:*
```tsx
import Card from "@/components/Card";

<Card title="Card Title" description="Descriptive body copy styled with 13.5px Inter muted text." />
```

#### Style 2: Thematic Icon Badge Card
Five distinct circular badge color themes (`.ic`):
* **Default (Purple):** `.ic` — `#f1ecff` bg, `#4b2bb0` text (Standard clinical concepts)
* **K1 (Rose/Crimson):** `.ic.k1` — `#fdeaf0` bg, `#c2185b` text (Acute manic episodes, positive symptoms)
* **K2 (Amber/Orange):** `.ic.k2` — `#fff0e1` bg, `#c26a00` text (Mixed episodes, posology titration)
* **K3 (Royal Blue):** `.ic.k3` — `#e6f0ff` bg, `#1d4ed8` text (Negative symptoms, psychosocial support, maintenance)
* **K4 (Mint Green):** `.ic.k4` — `#e4f6ee` bg, `#047857` text (Cognitive symptoms, continuation therapy, guidelines)

```tsx
<div className="card">
  <div className="ic k1">+</div>
  <h3>Positive symptoms (+)</h3>
  <p>Added experiences and behaviours: hallucinations, delusions...</p>
</div>
```
*Unified Component:*
```tsx
<Card icon="+" iconColor="k1" title="Positive symptoms (+)" description="..." />
```

#### Style 3: Interactive Link Card
```tsx
<Link className="card" href="/schizophrenia">
  <div className="ic">◍</div>
  <h3>Understanding Schizophrenia</h3>
  <p>Positive, negative, cognitive domains and course of care.</p>
</Link>
```
*Unified Component:*
```tsx
<Card href="/schizophrenia" icon="◍" title="Understanding Schizophrenia" description="..." />
```

#### Style 4: Process Flow Card (3-Phase Care Sequence)
```tsx
<div className="flow">
  <div className="card"><div className="ic">01</div><h3>Acute phase</h3><p>...</p></div>
  <span>→</span>
  <div className="card"><div className="ic k3">02</div><h3>Stabilisation</h3><p>...</p></div>
  <span>→</span>
  <div className="card"><div className="ic k4">03</div><h3>Maintenance</h3><p>...</p></div>
</div>
```

#### Style 5: Alert / Boxed Warning Card
```tsx
<div className="alert">
  <h3>⚠ Important Safety Information</h3>
  <p>Contraindications (SmPC 4.3): known hypersensitivity...</p>
</div>
```
*Unified Component:*
```tsx
<Card variant="alert" title="⚠ Important Safety Information">
  <p>Contraindications (SmPC 4.3): known hypersensitivity...</p>
</Card>
```

#### Style 6: Luminous Gradient Prescribing Card
```tsx
<div className="pi">
  <div>
    <p className="eb">Important Prescribing Information</p>
    <h2>Consult the approved product information before prescribing</h2>
    <ul>
      <li>Contraindicated in hypersensitivity and known risk of narrow-angle glaucoma.</li>
      <li>Not recommended in elderly patients with dementia-related psychosis...</li>
    </ul>
    <div className="row">
      <a className="btn w2" href="...">View full PI (PDF) →</a>
    </div>
  </div>
  <div style={{ display: 'grid', placeItems: 'center', fontSize: '90px', opacity: 0.5 }}>⛨</div>
</div>
```

#### Style 7: Stat / Metric Counter Card
```tsx
<div className="card stat">
  <b>9</b>
  <p>Clinical studies in EU SmPC section 5.1</p>
</div>
```
*Unified Component:*
```tsx
<Card variant="stat" stat="9" description="Clinical studies in EU SmPC section 5.1" />
```

#### Style 8: Data Visual / Chart Container Card
Houses vertical bar charts (`.cols`) or donut charts (`.dnr` / `.dn`):
```tsx
<div className="card">
  <h3>Acute mania – YMRS reduction at Week 3</h3>
  <div className="cols">
    <div><b>−10.3</b><i style={{ height: '85%', background: '#7c4dff' }} /></div>
    <div><b>−4.9</b><i style={{ height: '40%', background: '#b9a8ee' }} /></div>
  </div>
  <div className="cl"><span>Olanzapine</span><span>Placebo</span></div>
</div>
```

#### Style 9: Zero-Padding Table Wrapper Card
```tsx
<div className="card tw" style={{ padding: 0 }}>
  <table>
    <thead><tr><th>Indication</th><th>Starting dose</th></tr></thead>
    <tbody><tr><td>Schizophrenia</td><td>10 mg/day</td></tr></tbody>
  </table>
</div>
```
*Unified Component:*
```tsx
<Card variant="table" style={{ padding: 0 }}>
  <table>...</table>
</Card>
```

#### Style 10: Status / Clinical Indication Tagged Card
```tsx
<div className="card">
  <div className="ic k1">↑</div>
  <h3>Manic episodes (↑)</h3>
  <p>Abnormally elevated, expansive, or irritable mood...</p>
  <span className="tag">Approved indication for oral ZYPREXA</span>
</div>
```
*Unified Component:*
```tsx
<Card icon="↑" iconColor="k1" title="Manic episodes (↑)" description="..." tag="Approved indication for oral ZYPREXA" />
```

#### Style 11: Interactive Posology / Slider Card
```tsx
<div className="card">
  <div className="ic k2">⚖</div>
  <h3>Individualized posology</h3>
  <p>Titration between 5–20 mg/day based on response...</p>
  <div className="range">
    <i style={{ left: 0, right: 0 }} />
    <span style={{ left: 0 }}>5</span>
    <span style={{ left: '33%' }}>10</span>
    <span style={{ left: '66%' }}>15</span>
    <span style={{ left: '100%' }}>20 mg/day</span>
  </div>
</div>
```

#### Style 12: Collapsible Accordion Warning Card
```tsx
<details>
  <summary>1. Dementia-related psychosis</summary>
  <p>2-fold increase in mortality; 3-fold increase in CVAE in elderly trials.</p>
</details>
```

---

### 4. How to Update Card Styling Globally (Single Point of Truth)

To update the look and feel of all cards across the entire website without touching any page files:

Open **`src/app/globals.css`** and modify the CSS variables in `:root`:

```css
:root {
  /* 1. Change card surface color */
  --card-bg: rgba(255, 255, 255, 0.92);

  /* 2. Change card border styling */
  --card-border: var(--line);

  /* 3. Change card corner roundness (e.g. 12px or 20px) */
  --card-radius: 16px;

  /* 4. Change internal padding (e.g. 16px or 24px) */
  --card-padding: 18px;

  /* 5. Change card elevation shadow */
  --card-shadow: 0 4px 18px rgba(75, 43, 176, 0.10);

  /* 6. Change hover elevation shadow */
  --card-shadow-hover: 0 10px 26px rgba(75, 43, 176, 0.22);

  /* 7. Change card body font size */
  --card-text-size: 13.5px;
}
```

Any modification to these 7 variables automatically cascades across **all 7 pages** of the website instantly.

---

## Part 2: Page-by-Page Content & Data Specification

### Table of Contents
1. [Page 1: Home (`/`)](#1-page-1-home-)
2. [Page 2: Understanding Schizophrenia (`/schizophrenia`)](#2-page-2-understanding-schizophrenia-schizophrenia)
3. [Page 3: Understanding Bipolar Disorder (`/bipolar-disorder`)](#3-page-3-understanding-bipolar-disorder-bipolar-disorder)
4. [Page 4: Clinical Evidence (`/clinical-evidence`)](#4-page-4-clinical-evidence-clinical-evidence)
5. [Page 5: Mechanism of Action (`/mechanism-of-action`)](#5-page-5-mechanism-of-action-mechanism-of-action)
6. [Page 6: Safety, Monitoring & Prescribing (`/safety-prescribing`)](#6-page-6-safety-monitoring--prescribing-safety-prescribing)
7. [Page 7: References & Resources (`/references`)](#7-page-7-references--resources-references)

---

### 1. Page 1: Home (`/`)

* **Route:** `/`
* **File:** `src/app/page.tsx`
* **Title:** Evidence-informed treatment in schizophrenia and bipolar disorder · ZYPREXA HCP
* **Key Visuals:**
  * Header Logo: `public/assets/zyprexa-logo.png`
  * Hero Visual: `public/assets/hero-brain-3d.jpg` (3D illuminated neural network head model)

#### Content & Sections to Include

##### 1. Hero Section
* **Eyebrow:** Medical information for healthcare professionals
* **Headline:** Evidence-informed treatment in schizophrenia and bipolar disorder
* **Lead Text:**
  > "Zyprexa (olanzapine) is an antipsychotic medicine indicated for the treatment of schizophrenia and for the treatment of moderate to severe manic episodes. In patients whose manic episode has responded to olanzapine, it is also indicated for preventing recurrence in bipolar disorder, in accordance with the applicable product information.<sup>[1, section 4.1]</sup>"
* **Action CTAs:**
  * `Explore clinical evidence →` (links to `/clinical-evidence`)
  * `Prescribing information` (links to `/safety-prescribing#dosing`)

##### 2. Approved Indications (EU SmPC 4.1)
Three structured clinical indication cards:
1. **Schizophrenia:** Treatment of schizophrenia. Effective in maintaining clinical improvement during continuation therapy in patients who have shown an initial treatment response.
2. **Acute Manic Episodes:** Treatment of moderate to severe manic episodes (monotherapy or combination therapy).
3. **Maintenance Treatment in Bipolar Disorder:** Prevention of recurrence in bipolar disorder in patients whose manic episode has responded to olanzapine.
* *Scope Note:* Coated tablets only. Powder for solution for injection and ZYPADHERA have separate SmPCs.

##### 3. Explore Key Topics
Six topic navigation cards:
1. **Understanding Schizophrenia:** Positive, negative, cognitive domains, neurobiology and course of care.
2. **Understanding Bipolar Disorder:** Distinct mood episodes, treatment objectives, and recurrence prevention.
3. **Clinical Evidence:** 9 clinical study descriptions in EU SmPC section 5.1 and interactive study explorer.
4. **Mechanism of Action:** Multi-receptor pharmacological profile across dopamine, serotonin, histamine, muscarinic, and adrenergic receptors.
5. **Safety, Monitoring & Prescribing:** Dosing guidance, contraindications, boxed dementia warning, and metabolic monitoring.
6. **References & Resources:** Official regulatory documents (SmPC, PIL), clinical citations, and medical abbreviations.

##### 4. A Trusted Treatment in Clinical Practice
Four clinical foundation pillars:
* **Extensive clinical experience:** Established evidence base across adult populations.
* **Multiple formulations:** Coated tablets, rapid-acting IM injection, and long-acting injectable (ZYPADHERA).
* **Guideline support:** Recommended in BAP (2016), APA (2021), and listed on WHO Essential Medicines List (2023).
* **Comprehensive safety profile:** Proactive cardiometabolic monitoring and individualized posology.

##### 5. Important Prescribing Information (Luminous Gradient Banner)
* **Eyebrow:** Important Prescribing Information
* **Headline:** Consult the approved product information before prescribing
* **Key Points from SmPC:**
  * Contraindicated in hypersensitivity and known risk of narrow-angle glaucoma.
  * Not recommended in elderly patients with dementia-related psychosis due to increased mortality and cerebrovascular risk.
  * Weight gain and changes in glucose and lipid parameters can occur; baseline and ongoing monitoring required.
* **Actions:**
  * `View full PI →` (Direct PDF download link to EMA SmPC)
  * `Safety & prescribing summary` (links to `/safety-prescribing`)

##### 6. Receptor Profile at a Glance
Five circular color-coded badges indicating receptor families with preclinical binding affinity ($K_i < 100\text{ nM}$):
* **D₂ (Dopamine):** Antipsychotic efficacy · `#2563eb` (Blue)
* **5-HT₂A (Serotonin):** Mood modulation & EPS mitigation · `#db2777` (Magenta)
* **H₁ (Histamine):** Calming/sedation & appetite regulation · `#059669` (Green)
* **M₁–₅ (Muscarinic):** Anticholinergic balance · `#7c3aed` (Purple)
* **α₁ (Adrenergic):** Orthostatic & cardiovascular reflexes · `#d97706` (Amber)

---

### 2. Page 2: Understanding Schizophrenia (`/schizophrenia`)

* **Route:** `/schizophrenia`
* **File:** `src/app/schizophrenia/page.tsx`
* **Title:** Understanding Schizophrenia · ZYPREXA HCP
* **Key Visuals:**
  * Hero Editorial Image: `public/assets/schizophrenia-person.jpg` (Contemplative silhouette at sunrise)
  * Neurobiology Schematic: `public/assets/hero-brain-3d.jpg`
* **Subpage Jump Navigation:**
  `Overview | Symptoms | Neurobiology | Treatment phases | Role of olanzapine | Care continuity`

#### Content & Sections to Include

##### 1. Page Header & Disease Area Overview
* **Headline:** Understanding Schizophrenia
* **Standfirst:** Complex neurobiology. Real-world impact. A long-term need for effective management.
* **Clinical Overview:** Affects ~1 in 300 individuals worldwide. Chronic, multidimensional illness requiring long-term collaborative care balancing symptom remission, functional recovery, and physical health monitoring.

##### 2. Three Core Symptom Domains (Figure 1)
* **Positive Symptoms (`+`):** Added experiences/behaviours. Hallucinations (auditory/visual), delusions, disorganised speech and behaviour. Responsive to dopamine D₂ blockade.
* **Negative Symptoms (`−`):** Reduction/loss of baseline functioning. Blunted affect, avolition, alogia, social withdrawal, anhedonia. Key driver of long-term disability.
* **Cognitive Symptoms (`⚙`):** Deficits in mental processing. Impaired working memory, attention/vigilance, executive planning, and processing speed. Predicts vocational rehabilitation success.

##### 3. Neurobiology of Schizophrenia (Figure 2)
Three interconnected hypotheses:
1. **Dopamine Hypothesis:** Mesolimbic dopamine D₂ hyperactivity drives positive psychotic symptoms; mesocortical hypodopaminergia correlates with negative and cognitive symptoms.
2. **Glutamate / NMDA Hypothesis:** Cortical NMDA receptor hypofunction impairs downstream GABAergic interneurons, causing secondary dopaminergic dysregulation.
3. **Serotonin (5-HT₂A) Modulation:** Cortical 5-HT₂A hyperfunction modulates striatal dopamine release. Dual 5-HT₂A/D₂ antagonism lowers extrapyramidal symptom (EPS) liability.

##### 4. Treatment Across the Course of Care (Figure 3)
* **01. Acute Phase:** Rapid symptom reduction, crisis stabilization, behavioural control, and baseline metabolic/ECG assessments.
* **02. Stabilisation:** Consolidating treatment response, managing tolerability, and supporting re-entry into daily life.
* **03. Maintenance:** Relapse prevention, sustaining clinical improvement, ongoing safety/metabolic monitoring, and social reintegration.

##### 5. Role of Olanzapine in Schizophrenia
Four core attributes:
* Efficacy across positive, negative, and depressive symptom domains.
* Over 25 years of randomized controlled clinical trial evidence.
* Multiple delivery options: coated oral tablets, rapid IM injection, and long-acting ZYPADHERA.
* Proven maintenance of clinical improvement in continuation therapy for initial responders.

##### 6. Supporting Continuity of Care
* **Ongoing Monitoring:** Routine evaluation of weight, BMI, blood glucose, and lipid profiles to mitigate cardiometabolic risk.
* **Psychosocial Support:** Integration of cognitive behavioural therapy, family psychoeducation, and supported employment.
* **Individualized Posology:** Titration between 5–20 mg/day based on response and tolerability with patient-centered shared decision-making.

---

### 3. Page 3: Understanding Bipolar Disorder (`/bipolar-disorder`)

* **Route:** `/bipolar-disorder`
* **File:** `src/app/bipolar-disorder/page.tsx`
* **Title:** Understanding Bipolar Disorder · ZYPREXA HCP
* **Key Visuals:**
  * Hero Editorial Image: `public/assets/bipolar-person.jpg` (Figure looking out at open coast at dawn)
* **Subpage Jump Navigation:**
  `Overview | Mood episodes | Treatment objectives | Clinical evidence | Guidelines | Safety`

#### Content & Sections to Include

##### 1. Page Header & Overview
* **Headline:** Understanding Bipolar Disorder
* **Standfirst:** Distinct mood episodes. Long-term management. A comprehensive treatment approach.
* **Clinical Overview:** Chronic condition affecting 1–2% of adults, characterized by recurrent episodes of mania, mixed states, and depression. Treatment requirements differ fundamentally between acute phases and long-term recurrence prevention.

##### 2. Distinct Mood Episode Profiles (Figure 1)
* **Manic Episodes (`↑`):** Abnormally elevated, expansive, or irritable mood, racing thoughts, decreased need for sleep, grandiosity, and high-risk behaviour. *Approved indication for oral ZYPREXA.*
* **Mixed Episodes (`↕`):** Co-occurring manic and depressive symptoms with severe agitation, dysphoria, and high clinical risk. *Evaluated in acute bipolar trials.*
* **Depressive Episodes (`↓`):** Depressed mood, loss of interest/pleasure, fatigue, suicidal ideation. *Oral ZYPREXA monotherapy is NOT indicated for bipolar depression.*

##### 3. Treatment Objectives (4-Pillar Grid)
* **Reduce acute symptoms:** Rapid control of acute mania or mixed states.
* **Prevent recurrence:** Sustained prophylactic therapy against both manic and depressive relapses.
* **Improve functioning:** Restoring vocational, cognitive, and social capability.
* **Enhance quality of life:** Minimizing tolerability burdens and supporting physical wellbeing.

##### 4. Approved Indications vs. Non-Indications (EU SmPC 4.1)
* **Approved:** Moderate to severe manic episodes (monotherapy or combined with lithium/valproate).
* **Approved:** Prevention of recurrence in patients whose manic episode responded to olanzapine.
* **Non-Indication Warning:** Not indicated for acute bipolar depression monotherapy in the EU SmPC.

##### 5. Key Evidence in Bipolar Disorder (Comparative Charts)
* **Acute Mania (Tohen et al. 1999; n = 139):**
  * YMRS score reduction at Week 3: **−10.3** with olanzapine vs. **−4.9** with placebo ($p = 0.02$).
  * Response rate ($\ge 50\%$ YMRS reduction): **48.6%** vs. **24.2%** ($p = 0.004$).
* **12-Month Recurrence Prevention (Study B; n = 431):**
  * Bipolar recurrence rate: **30.0%** (olanzapine) vs. **38.3%** (lithium).
  * Statistically non-inferior to lithium ($p = 0.055$).
* **18-Month Co-therapy Study:** Olanzapine co-therapy with lithium/valproate was not statistically significantly superior to mood stabilizer monotherapy in delaying recurrence by syndromic criteria.

##### 6. Guideline & Formulary Positioning
* **BAP 2016:** Recommends olanzapine as effective oral dopamine antagonist in acute severe mania, and for prevention of manic relapse.
* **WHO EML 2023:** Listed as a therapeutic alternative for bipolar disorders.

##### 7. Safety in Bipolar Clinical Trials (SmPC 4.8)
* **17.4%** gained $\ge 7\%$ body weight during acute 6-week combination therapy with lithium/divalproex.
* **39.9%** gained $\ge 7\%$ body weight during 12-month long-term recurrence prevention monotherapy.
* **4.1%** incidence of neutropenia observed with valproate co-therapy.

---

### 4. Page 4: Clinical Evidence (`/clinical-evidence`)

* **Route:** `/clinical-evidence`
* **File:** `src/app/clinical-evidence/page.tsx`
* **Title:** Clinical Evidence · ZYPREXA HCP
* **Key Visuals:**
  * Stat Metric Badges: 9 studies, 4 categories, 12+ endpoints
  * Interactive Study Explorer Component
  * Efficacy Bar Charts: MADRS change, Beasley 1996 (BPRS & SANS), Tohen 1999, Weight Gain by exposure
* **Subpage Jump Navigation:**
  `Study explorer | Schizophrenia | Acute mania | Recurrence prevention | Long-term | Guidelines`

#### Content & Sections to Include

##### 1. Metric Counter Strip
* **9** Clinical studies in EU SmPC section 5.1
* **4** Study categories (Schizophrenia, Acute Mania, Recurrence, Long-Term)
* **12+** Evaluated primary and secondary endpoints

##### 2. Interactive Study Explorer (Complete 9-Study Dataset)

| Population | Design & Comparator | Duration | Endpoint | Outcome Reported in EU SmPC 5.1 |
|---|---|---|---|---|
| **Schizophrenia (positive & negative symptoms, n > 2,900)** | 2 placebo-controlled, 3 comparator-controlled trials | Not stated | Positive & negative symptoms | Statistically significantly greater improvement in negative as well as positive symptoms in 2/2 placebo and 2/3 comparator trials. |
| **Schizophrenia with depressive symptoms (n = 1,481, baseline MADRS 16.6)** | Double-blind vs. haloperidol | Not stated | Secondary: MADRS mood score change | **−6.0 olanzapine vs. −3.1 haloperidol ($p = 0.001$).** |
| **Bipolar manic / mixed episode** | Double-blind vs. placebo | 3 weeks | Manic symptom reduction | Superior efficacy to placebo. |
| **Bipolar manic / mixed episode** | Double-blind vs. divalproex | 3 weeks | Manic symptom reduction | Superior efficacy to divalproex. |
| **Bipolar manic / mixed episode** | Double-blind vs. haloperidol | 6 & 12 weeks | Symptomatic remission rate | Comparable efficacy results to haloperidol. |
| **Bipolar patients on lithium/valproate $\ge 2$ weeks** | Add-on olanzapine 10 mg vs. monotherapy | 6 weeks | Manic symptom reduction | Greater symptom reduction than lithium or valproate monotherapy. |
| **Manic episode in remission on olanzapine** | Randomised vs. placebo | 12 months | Primary: Bipolar recurrence | **Statistically significant superiority over placebo**; prevented relapse into mania or depression. |
| **Manic episode in remission on olanzapine + lithium** | Randomised: olanzapine alone vs. lithium alone | 12 months | Primary: Bipolar recurrence | **Statistically non-inferior to lithium: 30.0% vs. 38.3% ($p = 0.055$).** |
| **Manic/mixed episode on olanzapine + mood stabilizer** | Co-therapy vs. lithium/valproate alone | 18 months | Delay of bipolar recurrence | Not statistically significantly superior to monotherapy. |

##### 3. Published Schizophrenia Trial: Beasley et al. 1996 (Figure 2)
* **Design:** 6-week, randomised, double-blind trial in 335 patients comparing olanzapine (low $5\pm2.5\text{ mg}$, medium $10\pm2.5\text{ mg}$, high $15\pm2.5\text{ mg}$) with haloperidol ($15\pm5\text{ mg}$) and placebo.
* **BPRS Total Change (Week 6 LOCF):**
  * Placebo: **−3.1**
  * Olz 5 mg: **−6.7**
  * Olz 10 mg: **−12.6\*** ($p \le 0.001$ vs. placebo)
  * Olz 15 mg: **−15.2\*** ($p \le 0.001$ vs. placebo)
  * Haloperidol: **−12.9\*** ($p \le 0.01$ vs. placebo)
* **SANS Composite Negative Symptoms Change (Week 6 LOCF):**
  * Placebo: **−1.9**
  * Olz 5 mg: **−8.7\*** ($p \le 0.05$ vs. placebo)
  * Olz 10 mg: **−6.1**
  * Olz 15 mg: **−13.5\*†** ($p \le 0.001$ vs. placebo; $p \le 0.05$ vs. haloperidol)
  * Haloperidol: **−6.6**
* **Safety in Trial:** Somnolence (39.1% on high dose vs. 16.2% placebo), mean weight gain $+3.5\text{ kg}$ on high dose; acute dystonia 0% with olanzapine vs. 13.0% with haloperidol.

##### 4. Published Mania Trial: Tohen et al. 1999 (Figure 3)
* **Design:** 3-week double-blind, parallel-group trial in 139 bipolar I manic/mixed patients.
* **YMRS Total Change:** **−10.26** (olanzapine) vs. **−4.88** (placebo), difference −5.38 points ($p = 0.02$).
* **Responders ($\ge 50\%$ YMRS improvement):** **48.6%** vs. **24.2%** ($p = 0.004$).

##### 5. Categorical Weight Gain in Adults by Exposure (Figure 4)
* **$\ge 7\%$ Body Weight Gain:** Short-term (median 47 days): **22.2%** | Long-term ($\ge 48$ weeks): **64.4%**
* **$\ge 15\%$ Body Weight Gain:** Short-term: **4.2%** | Long-term: **31.7%**
* **$\ge 25\%$ Body Weight Gain:** Short-term: **0.8%** | Long-term: **12.3%**

---

### 5. Page 5: Mechanism of Action (`/mechanism-of-action`)

* **Route:** `/mechanism-of-action`
* **File:** `src/app/mechanism-of-action/page.tsx`
* **Title:** Mechanism of Action · ZYPREXA HCP
* **Key Visuals:**
  * 3D Receptor Brain Artwork: `public/assets/moa-brain-receptors.jpg`
  * PET Occupancy Curve Graphic: Kapur et al. 1998
* **Subpage Jump Navigation:**
  `Overview | Receptor profile | Receptor systems | PET occupancy | Clinical relevance`

#### Content & Sections to Include

##### 1. Pharmacological Profile Overview
* **Headline:** Mechanism of Action
* **Standfirst:** A multi-receptor profile that may help address the complex symptoms of schizophrenia and bipolar disorder.
* **Overview:** Atypical antipsychotic, antimanic, and mood-stabilizing agent binding dopamine, serotonin, histamine, muscarinic, and adrenergic receptors with high preclinical affinity ($K_i < 100\text{ nM}$).

##### 2. Receptor-Binding Profile & Clinical Implications (Table)

| Receptor System | Relative Affinity | Potential Clinical Relevance |
|---|---|---|
| **Dopamine D₂** (D₁–D₅) | ●●●●○ (High) | Antipsychotic and antimanic efficacy via mesolimbic antagonism. Modulated striatal occupancy maintains low EPS liability. |
| **Serotonin 5-HT₂A** (5-HT₂A/2C, 3, 6) | ●●●●● (Very High) | Low EPS risk through striatal dopamine disinhibition; modulation of cortical dopamine for mood and negative symptoms. |
| **Histamine H₁** | ●●●●● (Very High) | Calming effect in acute agitation; somnolence; central appetite stimulation contributing to weight gain. |
| **Muscarinic M₁–₅** | ●●●●○ (High) | Intrinsic anticholinergic protection against dystonia; can cause dry mouth, constipation, and blurred vision. |
| **Adrenergic α₁** | ●●●●○ (Moderate-High) | Peripheral vasodilation mediating orthostatic hypotension, reflex tachycardia, and transient postural dizziness. |

##### 3. In Vivo PET Receptor Occupancy (Kapur et al. 1998; Figure 2)
* **5-HT₂ Occupancy:** Exceeded **90%** across all clinical doses (5 to 20 mg/day).
* **Striatal D₂ Occupancy (Steady State):**
  * 5 mg/day: mean **55%** (range 43–64%)
  * 10 mg/day: mean **73%** (range 71–75%)
  * 15 mg/day: mean **75%** (range 73–76%)
  * 20 mg/day: mean **76%** (range 74–80%)
* **Therapeutic Window:** Approved doses (10–20 mg/day) maintain striatal D₂ occupancy within the optimal **70%–80%** window, providing full antipsychotic efficacy while staying below the 80% threshold where EPS incidence rises sharply.

##### 4. From Pharmacology to Clinical Practice
* **Symptom Control:** Dual dopamine/serotonin blockade targets psychosis, mania, and secondary depressive symptoms.
* **Tolerability Profile:** Sub-threshold D₂ occupancy preserves motor functioning and lowers prolactin elevation risk vs. typical neuroleptics.
* **Broad Clinical Utility:** Efficacy spans acute stabilization through long-term recurrence prevention in schizophrenia and bipolar I disorder.

---

### 6. Page 6: Safety, Monitoring & Prescribing (`/safety-prescribing`)

* **Route:** `/safety-prescribing`
* **File:** `src/app/safety-prescribing/page.tsx`
* **Title:** Safety, Monitoring & Prescribing · ZYPREXA HCP
* **Key Visuals:**
  * Formulations Packshot: `public/assets/zyprexa-formulations.jpg` (Tablets, IM vial, ZYPADHERA box)
  * Monitoring Timeline Diagram & Pastel Recommendation Cards
* **Subpage Jump Navigation:**
  `Overview | Dosing | Formulations | Warnings | Monitoring | Interactions`

#### Content & Sections to Include

##### 1. Important Safety Information Box
* **Contraindications (SmPC 4.3):** Known hypersensitivity to olanzapine; known risk of narrow-angle glaucoma.
* **Dementia Warning:** Not recommended in elderly patients with dementia-related psychosis due to increased mortality (3.5% vs. 1.5%) and cerebrovascular events (1.3% vs. 0.4%).
* **Metabolic Changes:** Weight gain, hyperglycaemia, and dyslipidaemia; regular monitoring required.
* **NMS Alert:** Discontinue immediately if neuroleptic malignant syndrome signs or unexplained fever occur.

##### 2. Formulations Showcase
* **ZYPREXA Coated Tablets (Oral):** 2.5 mg, 5 mg, 7.5 mg, 10 mg, 15 mg, 20 mg (Primary focus of this site).
* **ZYPREXA Powder for Solution for Injection:** 10 mg vial for acute agitation in schizophrenia and mania.
* **ZYPADHERA (Olanzapine Pamoate):** 210 mg, 300 mg, 405 mg prolonged-release suspension for IM injection.

##### 3. Dosing & Administration (EU SmPC 4.2; Table 1)
* **Approved Dose Range:** 5–20 mg/day. Dose escalations should occur at intervals of $\ge 24\text{ hours}$.
* **Starting Doses:**
  * Schizophrenia: **10 mg/day** once daily.
  * Acute Mania Monotherapy: **15 mg/day** single daily dose.
  * Acute Mania Combination Therapy: **10 mg/day** once daily.
  * Recurrence Prevention in Bipolar Disorder: **10 mg/day** (continue same dose if responding).
* **Special Populations:** Consider 5 mg/day starting dose in elderly ($\ge 65$ years), renal/hepatic impairment, or multiple factors that slow metabolism (female, non-smoker, geriatric). Not recommended under 18 years. Food does not affect absorption.

##### 4. Key Warnings & Precautions
1. **Dementia-related psychosis:** 2-fold increase in mortality; 3-fold increase in CVAE in elderly trials.
2. **Metabolic effects:** Weight gain, dyslipidaemia, ketoacidosis, diabetes development/worsening.
3. **Somnolence & dizziness:** Caution operating machinery/driving.
4. **Neuroleptic Malignant Syndrome:** Immediate cessation of all antipsychotics.
5. **Tardive dyskinesia:** Risk increases with duration; consider dose reduction or tapering.
6. **Cardiovascular / Orthostatic:** Monitor blood pressure, especially in elderly ($\ge 65$).
7. **Hepatic:** Monitor ALT/AST; discontinue if hepatitis diagnosed.
8. **Other warnings:** Parkinson's disease (hallucinations/worsening motor symptoms), QT prolongation, VTE risk, seizure threshold, lactose content.

##### 5. Monitoring Recommendations (Figure 1 & Table 2)
Four pastel monitoring pillars:
* **Weight & BMI (Blue):** Baseline, weeks 4, 8, 12; then quarterly.
* **Fasting Glucose (Purple):** Baseline, week 12; then annually (more frequently in diabetes/risk).
* **Lipid Profile (Pink):** Baseline, week 12; then every 5 years.
* **Blood Pressure (Orange):** Baseline and periodic monitoring, particularly in patients over 65.

##### 6. Drug Interactions (SmPC 4.5; Table 3)
* **CYP1A2 Inducers (Smoking, Carbamazepine):** Increase metabolism; dose increase may be considered.
* **CYP1A2 Inhibitors (Fluvoxamine, Ciprofloxacin):** Fluvoxamine increases $C_{\max}$ (54–77%) and AUC (52–108%); consider lower starting or maintenance dose.
* **Activated Charcoal:** Decreases bioavailability by 50–60%; separate by $\ge 2\text{ hours}$.
* **CNS Depressants & Alcohol:** Additive sedation; caution advised.
* **Valproate:** Higher rate of neutropenia observed with concomitant therapy.

##### 7. Pregnancy, Lactation & Discontinuation
* **Pregnancy (SmPC 4.6):** Use only if benefit justifies potential fetal risk. Third-trimester exposure carries risk of EPS and withdrawal symptoms in neonates.
* **Lactation:** Excreted in human milk; patients should **not breastfeed** while taking olanzapine.
* **Discontinuation:** Taper dose gradually to avoid acute withdrawal symptoms (sweating, insomnia, nausea).

---

### 7. Page 7: References & Resources (`/references`)

* **Route:** `/references`
* **File:** `src/app/references/page.tsx`
* **Title:** References & Resources · ZYPREXA HCP
* **Key Visuals:**
  * Hero Artwork: `public/assets/medical-books-stack.jpg` (Stack of psychiatry textbooks and journals)
  * Searchable Reference Library Component (`ReferenceLibrary.tsx`)
* **Subpage Jump Navigation:**
  `References | Regulatory | Guidelines | Medical Information | Abbreviations`

#### Content & Sections to Include

##### 1. Official Regulatory Product Documents
* **ZYPREXA Summary of Product Characteristics (SmPC):** EMA Annex I official prescribing document. [Direct PDF Link](https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf).
* **Patient Information Leaflet (PIL):** EMA Annex III B official instructions for patients. [EMA Product Page](https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa).
* **ZYPADHERA SmPC:** Separate official document for prolonged-release suspension. [EMA ZYPADHERA Page](https://www.ema.europa.eu/en/medicines/human/EPAR/zypadhera).

##### 2. Searchable Master Reference Bibliography (13 References)
1. **Ref 1:** ZYPREXA Summary of Product Characteristics (Annex I). CHEPLAPHARM / EMA.
2. **Ref 2:** ZYPREXA 10 mg powder for solution for injection SmPC. CHEPLAPHARM / EMA.
3. **Ref 3:** ZYPADHERA powder and solvent for prolonged release suspension SmPC. CHEPLAPHARM / EMA.
4. **Ref 4:** DSM-5-TR (Diagnostic and Statistical Manual of Mental Disorders, 5th ed. Text Revision). APA, 2022.
5. **Ref 5:** Stahl SM. Beyond the dopamine hypothesis: three neural networks. *CNS Spectr*. 2018;23(3):187–191.
6. **Ref 6:** American Psychiatric Association Practice Guideline for the Treatment of Patients With Schizophrenia (3rd ed.). APA, 2021.
7. **Ref 7:** Goodwin GM et al. Evidence-based guidelines for treating bipolar disorder (3rd ed.). *J Psychopharmacol*. 2016;30(6):495–553.
8. **Ref 8:** Tandon R et al. World Psychiatric Association statement on comparative effectiveness of antipsychotics. *Schizophr Res*. 2008;100:20–38.
9. **Ref 9:** World Health Organization. 23rd Model List of Essential Medicines. WHO, 2023/2024.
10. **Ref 10:** Beasley CM Jr et al. Olanzapine vs. placebo and haloperidol in schizophrenia. *Neuropsychopharmacology*. 1996;14(2):111–123.
11. **Ref 11:** Tohen M et al. Olanzapine versus placebo in acute mania. *Am J Psychiatry*. 1999;156(5):702–709.
12. **Ref 12:** Kapur S et al. 5-HT₂ and D₂ receptor occupancy of olanzapine: a PET investigation. *Am J Psychiatry*. 1998;155(7):921–928.
13. **Ref 13:** ZYPREXA Prescribing Information (US FDA; Section 12.2 receptor pharmacology rationale).

##### 3. Literature by Clinical Topic Matrix
1. **Disease background:** Refs 4, 5
2. **Schizophrenia clinical efficacy:** Ref 1 (5.1), Ref 10
3. **Acute mania clinical efficacy:** Ref 1 (5.1), Ref 11
4. **Bipolar recurrence prevention:** Ref 1 (5.1)
5. **Guideline and formulary context:** Refs 6, 7, 8, 9
6. **Pharmacology and receptor binding:** Ref 1 (5.1), Refs 12, 13
7. **Safety, adverse reactions and metabolic monitoring:** Ref 1 (4.4, 4.8)

##### 4. Medical Information & Marketing Authorisation Contact
* **Marketing Authorisation Holder:**  
  CHEPLAPHARM Registration GmbH  
  Weiler Straße 5e, 79540 Lörrach, Germany
* **Medical Enquiries Protocol:** Contact national medical affairs or local representatives identified in the package leaflet.

##### 5. Master Clinical Abbreviations Glossary
* **ALT / AST:** Alanine / Aspartate aminotransferase
* **AUC:** Area under the concentration–time curve
* **BPRS:** Brief Psychiatric Rating Scale
* **$C_{\max}$:** Maximum observed plasma concentration
* **CNS:** Central nervous system
* **CYP1A2:** Cytochrome P450 1A2 isoenzyme
* **D₂:** Dopamine receptor subtype 2
* **EMA:** European Medicines Agency
* **EPS:** Extrapyramidal symptoms
* **5-HT₂A:** 5-hydroxytryptamine (serotonin) receptor subtype 2A
* **$K_i$:** Receptor inhibition binding constant
* **LOCF:** Last observation carried forward
* **MADRS:** Montgomery–Åsberg Depression Rating Scale
* **NMDA:** N-methyl-D-aspartate glutamate receptor
* **NMS:** Neuroleptic malignant syndrome
* **PET:** Positron emission tomography
* **QTc:** Corrected QT interval on ECG
* **SANS:** Scale for the Assessment of Negative Symptoms
* **SmPC:** Summary of Product Characteristics
* **YMRS:** Young Mania Rating Scale

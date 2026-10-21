# ZYPREXA® (olanzapine) Healthcare Professional (HCP) Website
## Complete Website Content, Clinical Tables, Visual Data & Prescribing Guide

---

## Quick Start: How to Run the Next.js Website Locally

This project is built with **Next.js (App Router)**, **TypeScript**, and **React 19**.

### 1. Install Dependencies
```powershell
npm install
```

### 2. Run the Development Server
```powershell
npm run dev
```

Then open your browser and navigate to:
**[http://localhost:3000](http://localhost:3000)**

### 3. Build for Production
```powershell
npm run build
npm start
```

### Next.js App Structure & Routes
- `/` - **Home** (`src/app/page.tsx`): Overview, approved indications, topic cards, and pharmacology strip.
- `/schizophrenia` - **Understanding Schizophrenia** (`src/app/schizophrenia/page.tsx`): Symptom domains, neurobiology, and treatment phases.
- `/bipolar-disorder` - **Understanding Bipolar Disorder** (`src/app/bipolar-disorder/page.tsx`): Mood episodes, recurrence prevention, and clinical trials.
- `/clinical-evidence` - **Clinical Evidence** (`src/app/clinical-evidence/page.tsx`): Pivotal clinical trial data, interactive study filter, and outcomes.
- `/mechanism-of-action` - **Mechanism of Action** (`src/app/mechanism-of-action/page.tsx`): Interactive receptor-binding profile map, receptor affinities, and PK summary.
- `/safety-prescribing` - **Safety & Prescribing** (`src/app/safety-prescribing/page.tsx`): Contraindications, adverse reactions, metabolic monitoring, and dosing.
- `/references` - **References & Resources** (`src/app/references/page.tsx`): SmPC product documents, clinical literature citations, and medical information.

---

## Table of Contents

1. [Global Site Shell & Shared Components](#1-global-site-shell--shared-components)
   - [Audience Utility Header](#audience-utility-header)
   - [Primary Site Header & Navigation](#primary-site-header--navigation)
   - [Healthcare Professional (HCP) Gatekeeper Modal](#healthcare-professional-hcp-gatekeeper-modal)
   - [Global Site Footer](#global-site-footer)
2. [Page 1: Home (`index.html`)](#2-page-1-home-indexhtml)
   - [Hero & Approved Indications](#hero--approved-indications)
   - [Clinical Profile - Topic Cards](#clinical-profile---topic-cards)
   - [Pharmacology Overview & Receptor Family Profile Strip](#pharmacology-overview--receptor-family-profile-strip)
   - [Important Prescribing Information Callout](#important-prescribing-information-callout)
3. [Page 2: Understanding Schizophrenia (`schizophrenia.html`)](#3-page-2-understanding-schizophrenia-schizophreniahtml)
   - [Disease Area Overview](#disease-area-overview)
   - [Figure 1: Symptom Domains (Positive, Negative, Cognitive)](#figure-1-symptom-domains-positive-negative-cognitive)
   - [Neurobiology of Schizophrenia](#neurobiology-of-schizophrenia)
   - [Figure 2: Three-Hypothesis Neurobiological Model (Schematic)](#figure-2-three-hypothesis-neurobiological-model-schematic)
   - [Course of Care & Figure 3: Treatment Phases Framework](#course-of-care--figure-3-treatment-phases-framework)
   - [The Role of Olanzapine & Safety Aside](#the-role-of-olanzapine--safety-aside)
   - [Supporting Continuity of Care](#supporting-continuity-of-care)
4. [Page 3: Understanding Bipolar Disorder (`bipolar-disorder.html`)](#4-page-3-understanding-bipolar-disorder-bipolar-disorderhtml)
   - [Disease Area Overview & Figure 1: Mood Episodes](#disease-area-overview--figure-1-mood-episodes)
   - [Treatment Objectives](#treatment-objectives)
   - [Approved Indications in Bipolar Disorder vs. Non-Indications](#approved-indications-in-bipolar-disorder-vs-non-indications)
   - [Clinical Evidence: Acute Mania](#clinical-evidence-acute-mania)
   - [Figure 2: Recurrence Prevention Study Design Flow (Studies A & B)](#figure-2-recurrence-prevention-study-design-flow-studies-a--b)
   - [Figure 3: Study B 12-Month Recurrence Bar Chart](#figure-3-study-b-12-month-recurrence-bar-chart)
   - [Long-Term Combination Therapy (18-Month Study)](#long-term-combination-therapy-18-month-study)
   - [Guideline & Formulary Context (BAP 2016, WHO EML 2023)](#guideline--formulary-context-bap-2016-who-eml-2023)
   - [Safety Considerations & Specific Bipolar Trial Statistics](#safety-considerations--specific-bipolar-trial-statistics)
5. [Page 4: Clinical Evidence (`clinical-evidence.html`)](#5-page-4-clinical-evidence-clinical-evidencehtml)
   - [Evidence Hub Navigation](#evidence-hub-navigation)
   - [Comprehensive Study Explorer (Complete Data Table: 9 Studies)](#comprehensive-study-explorer-complete-data-table-9-studies)
   - [Evidence in Schizophrenia & Figure 1: MADRS Mood Score Change Bar Chart](#evidence-in-schizophrenia--figure-1-madrs-mood-score-change-bar-chart)
   - [Published Schizophrenia Trial: Beasley et al. 1996 & Figure 2 Charts](#published-schizophrenia-trial-beasley-et-al-1996--figure-2-charts)
   - [Evidence in Acute Mania Summary](#evidence-in-acute-mania-summary)
   - [Published Acute Mania Trial: Tohen et al. 1999 & Figure 3 Charts](#published-acute-mania-trial-tohen-et-al-1999--figure-3-charts)
   - [Evidence in Recurrence Prevention Table](#evidence-in-recurrence-prevention-table)
   - [Long-Term Treatment Considerations & Figure 4: Categorical Weight Gain Bar Chart](#long-term-treatment-considerations--figure-4-categorical-weight-gain-bar-chart)
   - [Guideline & Formulary Synthesis Table](#guideline--formulary-synthesis-table)
6. [Page 5: Mechanism of Action (`mechanism-of-action.html`)](#6-page-5-mechanism-of-action-mechanism-of-actionhtml)
   - [Pharmacological Profile Overview](#pharmacological-profile-overview)
   - [Figure 1: Interactive Receptor-Binding Map](#figure-1-interactive-receptor-binding-map)
   - [Detailed Receptor System Profiles (Dopamine, 5-HT, H1, Muscarinic, a1)](#detailed-receptor-system-profiles-dopamine-5-ht-h1-muscarinic-a1)
   - [Figure 2: In Vivo PET Receptor Occupancy (Kapur et al. 1998 Scatter Plot)](#figure-2-in-vivo-pet-receptor-occupancy-kapur-et-al-1998-scatter-plot)
   - [From Pharmacology to Clinical Practice](#from-pharmacology-to-clinical-practice)
7. [Page 6: Safety, Monitoring & Prescribing (`safety-prescribing.html`)](#7-page-6-safety-monitoring--prescribing-safety-prescribinghtml)
   - [Prescribing Summary Preamble & Jump Navigation](#prescribing-summary-preamble--jump-navigation)
   - [Formulation Distinctions Key](#formulation-distinctions-key)
   - [01 · Dosing and Administration (Table 1 & Special Populations)](#01--dosing-and-administration-table-1--special-populations)
   - [02 · Contraindications (SmPC 4.3)](#02--contraindications-smpc-43)
   - [03 · Important Warnings and Precautions (Lead Dementia & 14 Warning Headings)](#03--important-warnings-and-precautions-lead-dementia--14-warning-headings)
   - [04 · Monitoring During Treatment (Figure 1 Schedule & Table 2 Approach)](#04--monitoring-during-treatment-figure-1-schedule--table-2-approach)
   - [05 · Drug Interactions (Table 3 Selected Interactions)](#05--drug-interactions-table-3-selected-interactions)
   - [06 · Pregnancy and Breastfeeding (SmPC 4.6)](#06--pregnancy-and-breastfeeding-smpc-46)
   - [07 · Discontinuation (SmPC 4.2, 4.4)](#07--discontinuation-smpc-42-44)
   - [08 · Adverse Reactions (Complete >=1% Clinical Trial Incidence Profile)](#08--adverse-reactions-complete-1-clinical-trial-incidence-profile)
   - [Pharmacovigilance: Reporting Suspected Adverse Reactions](#pharmacovigilance-reporting-suspected-adverse-reactions)
   - [Full Prescribing Information Access Band](#full-prescribing-information-access-band)
8. [Page 7: References and Resources (`references.html`)](#8-page-7-references-and-resources-referenceshtml)
   - [Regulatory Product Information Documents](#regulatory-product-information-documents)
   - [Complete Reference Library (Refs 1–13 with Full Bibliographic Citations)](#complete-reference-library-refs-113-with-full-bibliographic-citations)
   - [Literature by Clinical Topic Matrix](#literature-by-clinical-topic-matrix)
   - [Medical Information & Marketing Authorisation Contact](#medical-information--marketing-authorisation-contact)
   - [Master Clinical Abbreviations Directory](#master-clinical-abbreviations-directory)

---

# 1. Global Site Shell & Shared Components

The website employs a unified clinical monograph design system. The shared header, footer, accessibility mechanisms, and regulatory dialogs wrap all seven pages.

### Accessibility Skip Link
- **Anchor:** `#main`
- **Text:** `Skip to content`
- **Class:** `skip` (visible on keyboard focus)

### Audience Utility Header
- **Container:** `<div class="utility"><div class="wrap">`
- **Target Audience Notice:** "Information for healthcare professionals. Content based on the EU Summary of Product Characteristics."
- **External Authority Link:**
  - Label: `EMA product information`
  - URL: `https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa`
  - Attributes: `rel="noopener" target="_blank"`

### Primary Site Header & Navigation
- **Wordmark Branding:**
  - URL: `index.html`
  - Text: `ZYPREXA®` (Bold, with superscript registered symbol)
  - Sub-label: `olanzapine`
  - Accessibility Label: `ZYPREXA olanzapine, home`
- **Primary Navigation Links (`nav.primary-nav ul`):**
  1. `schizophrenia.html` -> "Schizophrenia"
  2. `bipolar-disorder.html` -> "Bipolar disorder"
  3. `clinical-evidence.html` -> "Clinical evidence"
  4. `mechanism-of-action.html` -> "Mechanism of action"
  5. `safety-prescribing.html` -> "Safety & prescribing"
  6. `references.html` -> "References"
  7. `safety-prescribing.html` (`class="nav-pi"`) -> "Prescribing information"
- **Persistent Header Action (`a.pi-link`):**
  - Icon: Document SVG
  - Label: `Prescribing information`
  - Destination: `safety-prescribing.html`
- **Responsive Mobile Disclosure Button (`button.menu-btn`):**
  - Attributes: `type="button" aria-expanded="false" aria-controls="primary-nav"`
  - Icon: 3-bar hamburger SVG
  - Label: `Menu`

### Healthcare Professional (HCP) Gatekeeper Modal
An HTML `<dialog class="hcp" id="hcp-dialog" aria-labelledby="hcp-title">` modal is rendered across all pages, requiring affirmative self-certification prior to accessing content:
- **Eyebrow:** `ZYPREXA (olanzapine)`
- **Heading (`id="hcp-title"`):** "This website is intended for healthcare professionals"
- **Body Text:** "It contains information about a prescription-only medicine, based on the EU Summary of Product Characteristics. Please confirm that you are a healthcare professional."
- **Interactive Action Buttons:**
  - `button#hcp-yes.btn.btn--primary`: "I am a healthcare professional"
  - `button#hcp-no.btn.btn--secondary`: "I am not"
- **Conditional Dismissal / Non-HCP Redirect Text (`p#hcp-not.small`, initially hidden):**
  - "This website is not intended for you. If you have questions about your medicine, please speak with your doctor or pharmacist, or read the package leaflet on the [European Medicines Agency website](https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa)."

### Global Site Footer
- **Container:** `<footer class="site-footer">`
- **Brand Column:**
  - Brand Mark: `ZYPREXA® (olanzapine)`
  - Scope: "Information for healthcare professionals."
  - Legal Entity: "Marketing authorisation holder: CHEPLAPHARM Registration GmbH, Weiler Straße 5e, 79540 Lörrach, Germany."
- **Site Navigation Column (`nav[aria-label="Footer"]`):**
  - Heading: "On this site"
  - Links:
    - [Product information](references.html#product-information)
    - [Safety information](safety-prescribing.html)
    - [Scientific references](references.html#literature)
    - [Medical information](references.html#medical-information)
- **Pharmacovigilance & Adverse Event Reporting Column:**
  - Heading: "Reporting adverse reactions"
  - Paragraph: "Reporting suspected adverse reactions after authorisation of the medicinal product is important. It allows continued monitoring of the benefit/risk balance. Healthcare professionals are asked to report any suspected adverse reactions via their national reporting system."
- **Legal Baseline Bar:**
  - Notice: "Information based on the EU Summary of Product Characteristics. Prepared October 2026."

---

# 2. Page 1: Home (`index.html`)

### Document Metadata
- **Page Title:** `ZYPREXA HCP`
- **Meta Description:** "Information for healthcare professionals on ZYPREXA (olanzapine): approved indications, clinical evidence, pharmacology and prescribing information, based on the EU Summary of Product Characteristics."

### Hero & Approved Indications
- **Product Identification:** `ZYPREXA®` | `olanzapine · coated tablets`
- **Main Heading (`<h1>`):** "Evidence-informed treatment in schizophrenia and bipolar disorder"
- **Lead Text:**
  - "Zyprexa (olanzapine) is an antipsychotic medicine indicated for the treatment of schizophrenia and for the treatment of moderate to severe manic episodes. In patients whose manic episode has responded to olanzapine, it is also indicated for preventing recurrence in bipolar disorder, in accordance with the applicable product information.<sup>[1, section 4.1](references.html#ref-1)</sup>"
  - "Explore the clinical evidence, pharmacology and prescribing information for Zyprexa."
- **Call-to-Action Buttons:**
  - Primary: [Explore clinical evidence ->](clinical-evidence.html)
  - Secondary: [View prescribing information](safety-prescribing.html)

#### Approved Indications in Adults (EU SmPC 4.1)
Displayed in a high-contrast side-by-side clinical panel (`div.indication-panel`):
1. **Schizophrenia:** Treatment of schizophrenia. Effective in maintaining clinical improvement during continuation therapy in patients who have shown an initial treatment response.
2. **Moderate to severe manic episode:** As monotherapy or in combination therapy.
3. **Prevention of recurrence in bipolar disorder:** In patients whose manic episode has responded to olanzapine treatment.
- **Formulation Scope Note:** "This website covers ZYPREXA coated tablets. ZYPREXA powder for solution for injection and ZYPADHERA (olanzapine pamoate) have their own Summaries of Product Characteristics, listed under [product information](references.html#product-information)."

### Clinical Profile - Topic Cards
Four structured clinical deep-dive cards:
1. **Schizophrenia:** "Schizophrenia can affect perception, thought, motivation and everyday functioning. Treatment aims to reduce symptoms, support clinical stability and help patients maintain functioning over time."  
   - Action: [Explore schizophrenia ->](schizophrenia.html)
2. **Bipolar disorder:** "Bipolar disorder involves episodes of mood disturbance that can affect behaviour, relationships and daily life. Treatment objectives vary according to the current episode and the individual's clinical needs."  
   - Action: [Explore bipolar disorder ->](bipolar-disorder.html)
3. **Clinical evidence:** "Clinical trials have evaluated olanzapine in schizophrenia and in manic episodes associated with bipolar disorder, including studies of continued treatment and recurrence prevention."  
   - Action: [Review the evidence ->](clinical-evidence.html)
4. **Safety and prescribing:** "Appropriate treatment selection requires consideration of individual clinical circumstances, contraindications, interactions and the need for ongoing safety monitoring."  
   - Action: [Review safety information ->](safety-prescribing.html)

### Pharmacology Overview & Receptor Family Profile Strip
- **Eyebrow:** Pharmacology
- **Heading (`<h2>`):** "About olanzapine"
- **Body Narrative:**
  - "Olanzapine is an antipsychotic medicine with activity across multiple neurotransmitter receptor systems, including dopamine and serotonin receptors. Its pharmacological profile is relevant to its therapeutic effects and adverse-reaction profile."
  - "Understanding this profile alongside the clinical evidence and approved product information supports informed prescribing decisions."
- **Action:** [Explore mechanism of action ->](mechanism-of-action.html)

#### Visual: Receptor Family Profile Strip
A typographic and structured block presenting receptor systems binding olanzapine:

```
+-----------------------------------------------------------------------------------------+
|                                  RECEPTOR FAMILIES                                      |
+-------------------+--------------------+-------------------+--------------------+-------+
|  D1–5             |  5-HT              |  H1               |  M1–5              |  α1   |
|  Dopamine         |  Serotonin         |  Histamine        |  Muscarinic        |  Adre-|
|                   |  2A/2C, 3, 6       |                   |                    |  nergic
+-------------------+--------------------+-------------------+--------------------+-------+
```

- **Caption:** "Receptor families at which olanzapine showed affinity ($K_i < 100\text{ nM}$) in preclinical studies. Order does not indicate relative affinity.<sup>[1, section 5.1](references.html#ref-1)</sup>"

### Important Prescribing Information Callout
- **Container:** Dark surface band (`section.pi-band`)
- **Eyebrow:** Important prescribing information
- **Heading (`<h2>`):** "Consult the approved product information before prescribing"
- **Text:** "Zyprexa is a prescription medicine. Treatment should be initiated and monitored by an appropriately qualified healthcare professional. The approved product information should be consulted before prescribing, particularly for contraindications, metabolic effects, interactions, special populations and other important precautions."
- **Actions:**
  - Primary Ext Button: [Access the full Summary of Product Characteristics (PDF)](https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf)
  - Secondary Button: [Safety and prescribing summary](safety-prescribing.html)

---

# 3. Page 2: Understanding Schizophrenia (`schizophrenia.html`)

### Document Metadata
- **Page Title:** `Understanding Schizophrenia · ZYPREXA HCP`
- **Meta Description:** "Schizophrenia for healthcare professionals: positive, negative and cognitive symptom domains, neurobiology, phases of treatment and the role of olanzapine."

### Disease Area Overview
- **Eyebrow:** Disease area
- **Heading (`<h1>`):** "Understanding schizophrenia"
- **Standfirst:** "A multidimensional condition requiring individualized, ongoing care."
- **Introductory Context:**
  - "Schizophrenia is a psychiatric disorder that can affect how a person perceives reality, thinks, experiences emotions and interacts with others. Its presentation varies between individuals, and symptoms can change over time."
  - "Treatment aims to manage symptoms, prevent relapse where possible, support everyday functioning and address the individual's broader healthcare needs."

### Figure 1: Symptom Domains (Positive, Negative, Cognitive)
Presented as a 3-column clinical domain matrix:

```
+----------------------------------------------------------------------------------------------------+
|                                    FIGURE 1: SYMPTOM DOMAINS                                       |
+--------------------------------+-----------------------------------+-------------------------------+
| [+] POSITIVE SYMPTOMS          | [−] NEGATIVE SYMPTOMS             | [◉] COGNITIVE SYMPTOMS        |
+--------------------------------+-----------------------------------+-------------------------------+
| Experiences or behaviours that | A reduction or loss of aspects of | Difficulties with mental      |
| are ADDED to a person's usual  | normal functioning. Examples      | processes needed for everyday |
| functioning.                   | may include:                      | activities:                   |
|                                |                                   |                               |
| • Hallucinations               | • Reduced motivation              | • Attention and concentration |
| • Delusions                    | • Diminished emotional expression | • Working memory              |
| • Disorganized thinking/speech | • Reduced speech                  | • Planning and organization   |
| • Disorganized behaviour       | • Social withdrawal               | • Decision-making and         |
|                                | • Reduced engagement in everyday  |   executive functioning       |
|                                |   activities                      |                               |
| Impact: May substantially      | Impact: Can affect social         | Impact: Pattern and severity  |
| affect a person's perception   | relationships, occupational       | differ between individuals;   |
| of reality and ability to      | functioning and participation     | assess as part of overall     |
| function.                      | in daily life.                    | clinical examination.         |
+--------------------------------+-----------------------------------+-------------------------------+
```

- **Caption:** "**Figure 1.** Three symptom domains of schizophrenia, with examples. Domains are not mutually exclusive and individual presentations vary.<sup>[4](references.html#ref-4)</sup>"

### Neurobiology of Schizophrenia
- **Eyebrow:** Neurobiology
- **Heading (`<h2>`):** "The neurobiology of schizophrenia"
- **Narrative:**
  - "Schizophrenia is associated with complex changes in brain function and neurotransmission. One widely discussed model links three interconnected hypotheses: excess dopamine D2 activity in the mesolimbic pathway, hypofunction of glutamate NMDA receptors, and hyperfunction of cortical serotonin 5-HT<sub>2A</sub> receptors.<sup>[5](references.html#ref-5)</sup>"
  - "In this model, NMDA receptor hypofunction and 5-HT<sub>2A</sub> hyperfunction can each lead, further downstream, to mesolimbic dopamine hyperactivity, which is associated with positive symptoms. Negative and cognitive symptoms are thought to involve other circuits.<sup>[5](references.html#ref-5)</sup> No single neurotransmitter imbalance fully explains schizophrenia or accounts for every symptom an individual experiences."

### Figure 2: Three-Hypothesis Neurobiological Model (Schematic)
The SVG schematic illustrates the downstream convergences leading to symptoms:

```
+---------------------------------------------------------------------------------------+
|                FIGURE 2: THREE INTERCONNECTED HYPOTHESES SCHEMATIC                    |
+---------------------------------------------------------------------------------------+
|  [ SEROTONIN HYPOTHESIS ]                    [ GLUTAMATE HYPOTHESIS ]                 |
|  Cortical 5-HT2A hyperfunction               NMDA receptor hypofunction               |
|            \                                              /                           |
|             \                                            /                            |
|              \                                          /                             |
|               +----------> [ Downstream Effects ] <----+                              |
|                                     |                                                 |
|                                     v                                                 |
|                      [ DOPAMINE HYPOTHESIS ]                                          |
|                      Mesolimbic D2 Hyperactivity                                      |
|                                     |                                                 |
|                                     v                                                 |
|                           [ Positive Symptoms ]                                       |
|                                                                                       |
|             * Negative and cognitive symptoms involve other circuits *                |
+---------------------------------------------------------------------------------------+
```

- **SVG Internal Accessible Description:**
  - Title: "Three interconnected hypotheses of schizophrenia"
  - Description: "Schematic. Two boxes at the top: serotonin hypothesis, cortical 5-HT2A receptor hyperfunction; glutamate hypothesis, NMDA receptor hypofunction. Arrows from both lead down to a central box: dopamine hypothesis, mesolimbic D2 hyperactivity. An arrow from that box leads to positive symptoms. A note states that negative and cognitive symptoms involve other circuits."
- **Caption:** "**Figure 2.** Simplified schematic of the dopamine, glutamate and serotonin hypotheses and their proposed links. It does not depict anatomy or individual neurons. Adapted from Stahl 2018.<sup>[5](references.html#ref-5)</sup>"

### Course of Care & Figure 3: Treatment Phases Framework
- **Eyebrow:** Course of care
- **Heading (`<h2>`):** "Treatment across the course of schizophrenia"
- **Narrative:** "Treatment needs can change over time. The following phases are a useful clinical framework rather than a rigid sequence that applies identically to every patient."

#### Figure 3: Treatment Phases Clinical Framework
An interactive horizontal process diagram depicting recurring phases:

```
Phase 1: ACUTE TREATMENT ------> Phase 2: STABILIZATION ------> Phase 3: MAINTENANCE
         ^                                                                  |
         |                                                                  |
         +------------- [ Phases may recur / Needs change ] <---------------+
```

- **Phases Defined:**
  1. **Phase 1: Acute treatment:** "The immediate objectives are to assess clinical severity and safety, manage acute symptoms and establish an appropriate treatment plan."
  2. **Phase 2: Stabilization:** "As symptoms improve, treatment focuses on consolidating the response, reviewing tolerability and supporting a return to everyday routines."
  3. **Phase 3: Maintenance:** "Ongoing treatment and follow-up aim to sustain clinical improvement, monitor adverse effects and identify early signs of deterioration."
- **Caption:** "**Figure 3.** Phases of care as a clinical framework. Progression is not fixed, and individual patients may move between phases."

### The Role of Olanzapine & Safety Aside
- **Eyebrow:** Olanzapine
- **Heading (`<h2>`):** "The role of olanzapine"
- **Narrative:**
  - "Olanzapine is an antipsychotic medicine indicated for schizophrenia. The European product information states that it is effective in maintaining clinical improvement during continuation therapy in patients who have shown an initial treatment response.<sup>[1, section 4.1](references.html#ref-1)</sup>"
  - "Clinical decisions should consider the individual's symptoms, previous treatment response, comorbidities, preferences and potential adverse effects."
  - Action: [Review olanzapine clinical evidence ->](clinical-evidence.html#schizophrenia)
- **Safety Aside Notice (`aside.notice.notice--safety`):**
  - Badge: `Safety`
  - Heading: "Weight and metabolic changes"
  - Paragraph: "Olanzapine treatment requires particular attention to weight and metabolic changes, as well as other safety considerations described in the approved product information.<sup>[1, section 4.4](references.html#ref-1)</sup>"
  - Action: [Monitoring recommendations ->](safety-prescribing.html#monitoring)

### Supporting Continuity of Care
- **Eyebrow:** Follow-up
- **Heading (`<h2>`):** "Supporting continuity of care"
- **Narrative:**
  - "Schizophrenia management extends beyond symptom assessment. Follow-up should consider treatment response, tolerability, daily functioning, social support and the individual's ability to continue the agreed treatment plan."
  - "Treatment adherence may be affected by multiple factors, including adverse effects, the nature of the illness, treatment preferences and practical barriers. These factors should be explored collaboratively rather than attributed to the patient alone."
  - "The APA practice guideline recommends continuing antipsychotic medication once symptoms have improved, and suggests continuing the same antipsychotic where it has been effective. A long-acting injectable may be considered if the patient prefers it or has a history of poor or uncertain adherence.<sup>[6](references.html#ref-6)</sup>"

---

# 4. Page 3: Understanding Bipolar Disorder (`bipolar-disorder.html`)

### Document Metadata
- **Page Title:** `Bipolar Disorder · ZYPREXA HCP`
- **Meta Description:** "Bipolar disorder for healthcare professionals: mood episodes, treatment objectives, approved olanzapine indications, and evidence in acute mania and recurrence prevention."

### Disease Area Overview & Figure 1: Mood Episodes
- **Eyebrow:** Disease area
- **Heading (`<h1>`):** "Understanding bipolar disorder"
- **Standfirst:** "Recognizing mood episodes and defining appropriate treatment objectives."
- **Introductory Context:**
  - "Bipolar disorder is characterized by episodes of mood disturbance, including mania or hypomania and depression, depending on the type of bipolar disorder. Episodes can affect energy, sleep, judgement, behaviour and everyday functioning."
  - "Treatment decisions depend on the current episode, previous clinical history, treatment response, comorbidities and the individual's needs."

#### Figure 1: Understanding Mood Episodes
A 3-part clinical episode band grouping characteristic presentations:

```
+----------------------------------------------------------------------------------------------------+
|                                    FIGURE 1: MOOD EPISODES                                         |
+--------------------------------+-----------------------------------+-------------------------------+
| [↑] MANIA                      | [↕] MIXED FEATURES                | [↓] DEPRESSION                |
| Elevated, expansive/irritable  | Features of both                  | Persistent low mood           |
+--------------------------------+-----------------------------------+-------------------------------+
| Mania involves a distinct      | Some episodes involve symptoms    | Depressive episodes may       |
| period of abnormally elevated, | associated with both mania and    | involve persistent low mood,  |
| expansive or irritable mood    | depression. These presentations   | reduced interest or pleasure, |
| and increased activity/energy. | can be complex and require        | fatigue, changes in sleep or  |
| Symptoms may include reduced   | careful clinical assessment.      | appetite, feelings of worth-  |
| need for sleep, increased      |                                   | lessness and difficulties     |
| speech, racing thoughts,       |                                   | with concentration.           |
| inflated self-esteem and       |                                   |                               |
| impulsive or high-risk         |                                   | The clinical presentation and |
| behaviour.                     |                                   | treatment needs differ from   |
|                                |                                   | mania. The European SmPC does |
| Severe manic episodes may be   |                                   | NOT list bipolar depression   |
| associated with marked func-   |                                   | as an indication for oral     |
| tional impairment and require  |                                   | Zyprexa monotherapy.          |
| urgent clinical assessment.    |                                   | (Ref 1, section 4.1)          |
+--------------------------------+-----------------------------------+-------------------------------+
```

- **Caption:** "**Figure 1.** Features of manic, mixed and depressive episodes.<sup>[4](references.html#ref-4)</sup> The arrangement groups episode features; it does not represent an illness course, the order in which episodes occur, or their frequency."

### Treatment Objectives
- **Eyebrow:** Treatment
- **Heading (`<h2>`):** "Treatment objectives"
- **Core Clinical Goals:**
  1. **Acute management:** Address the current episode and associated clinical risks.
  2. **Stabilization:** Consolidate improvement and review tolerability.
  3. **Recurrence prevention:** Support sustained clinical stability following a treatment response.
- **Clinical Consideration:** "These objectives should be individualized. Treatment for an acute manic episode should not automatically be assumed to provide adequate management for every subsequent mood episode."

### Approved Indications in Bipolar Disorder vs. Non-Indications
Structured comparison panel (`div.indicated`):
- **Approved Indications (EU SmPC 4.1):**
  - Treatment of moderate to severe manic episodes.
  - Prevention of recurrence in patients with bipolar disorder whose manic episode has responded to olanzapine.
- **Explicit Non-Indication in the EU SmPC:**
  - **Bipolar depression (oral monotherapy)**
- **Combination Therapy Note:** "The product information also describes use in combination therapy for acute mania. The choice of monotherapy or combination therapy depends on the approved prescribing information and the patient's clinical circumstances.<sup>[1, section 4.2](references.html#ref-1)</sup>"

### Clinical Evidence: Acute Mania
- **Eyebrow:** Clinical evidence
- **Heading (`<h2>`):** "Evidence for acute mania"
- **Summary Narrative:** "Clinical studies described in the product information evaluated olanzapine in patients experiencing manic or mixed episodes associated with bipolar disorder."
- **Key Trial Findings (`ul.ruled`):**
  1. **Versus placebo and valproate semisodium (divalproex):** Olanzapine showed greater reduction in manic symptoms than placebo and divalproex over 3 weeks in the studies described.<sup>[1, section 5.1](references.html#ref-1)</sup>
  2. **Published placebo-controlled trial (Tohen et al. 1999):** In a 3-week trial in 139 patients with a manic or mixed episode, olanzapine (mean modal dose 14.9 mg/day) reduced Young Mania Rating Scale (YMRS) scores by a mean 10.3 points versus 4.9 with placebo ($p = 0.02$); 48.6% versus 24.2% of patients responded ($p = 0.004$). Somnolence, dizziness, dry mouth and weight gain were more frequent with olanzapine.<sup>[11](references.html#ref-11)</sup>
  3. **Combination with lithium or valproate:** In patients treated with lithium or valproate for at least 2 weeks, adding olanzapine 10 mg resulted in a greater reduction in manic symptoms than lithium or valproate alone after six weeks.<sup>[1, section 5.1](references.html#ref-1)</sup>
- **Cautionary Note:** "These findings must be interpreted in the context of the individual study designs, populations, comparators and endpoints. They should not be generalized to all bipolar presentations."

### Figure 2: Recurrence Prevention Study Design Flow (Studies A & B)
Comprehensive flowchart mapping the two 12-month trials evaluated in EU SmPC 5.1:

```
+----------------------------------------------------------------------------------------------------+
|                FIGURE 2: STUDY DESIGNS - 12-MONTH RECURRENCE PREVENTION (EU SmPC 5.1)              |
+----------------------------------------------------------------------------------------------------+
|  STUDY A:                                                                                          |
|  [ Manic Episode ] --------> [ Remission Achieved ] --------> ( R ) ---+---> [ Olanzapine ] 12 Mo  |
|  Treated with Olanzapine                                               |                           |
|                                                                        +---> [ Placebo ]    12 Mo  |
|  Primary Endpoint: Bipolar Recurrence                                                              |
|  Outcome: Olanzapine statistically significantly SUPERIOR to placebo (p < 0.05)                    |
|           Advantage also demonstrated in preventing recurrence into mania or depression.           |
+----------------------------------------------------------------------------------------------------+
|  STUDY B:                                                                                          |
|  [ Manic Episode ] --------> [ Remission Achieved ] --------> ( R ) ---+---> [ Olanzapine Alone ]   |
|  Treated with Olanzapine + Lithium                                     |     12 Months             |
|                                                                        +---> [ Lithium Alone ]     |
|                                                                              12 Months             |
|  Primary Endpoint: Bipolar Recurrence                                                              |
|  Outcome: Olanzapine statistically NON-INFERIOR to Lithium: 30.0% vs. 38.3% recurrence (p = 0.055)  |
+----------------------------------------------------------------------------------------------------+
```

- **SVG Accessible Metadata:**
  - Title: "Design of the two 12-month recurrence-prevention studies"
  - Description: "Study A: patients with a manic episode who achieved remission on olanzapine were randomised to olanzapine or placebo for 12 months; olanzapine was statistically significantly superior to placebo on bipolar recurrence. Study B: patients who achieved remission on olanzapine plus lithium were randomised to olanzapine or lithium alone for 12 months; olanzapine was statistically non-inferior to lithium, with recurrence in 30.0% versus 38.3%, p = 0.055."
- **Caption:** "**Figure 2.** Study designs as described in the EU SmPC section 5.1. R, randomisation. Patient numbers, recurrence definitions and blinding are not stated in the SmPC and are therefore not shown.<sup>[1, section 5.1](references.html#ref-1)</sup>"

### Figure 3: Study B 12-Month Recurrence Bar Chart
A scaled horizontal bar chart of Study B primary outcome:

```
+------------------------------------------------------------------------------------+
|         FIGURE 3: PATIENTS WITH BIPOLAR RECURRENCE AT 12 MONTHS (STUDY B)          |
+------------------------------------------------------------------------------------+
|  Olanzapine Alone : [=========================] 30.0%                              |
|  Lithium Alone    : [================================] 38.3%                       |
|                     +-------+-------+-------+-------+-------+                      |
|                     0       10      20      30      40      50%                    |
|                                                                                    |
|  Result: Statistically non-inferior to lithium (p = 0.055)                         |
+------------------------------------------------------------------------------------+
```

- **Data Values:**
  - Olanzapine: **30.0%**
  - Lithium: **38.3%**
  - Difference / Significance: $p = 0.055$ (statistically non-inferior)
- **Caption:** "**Figure 3.** Olanzapine was statistically non-inferior to lithium on the primary endpoint of bipolar recurrence ($p = 0.055$). Patients had achieved remission with olanzapine plus lithium before randomisation.<sup>[1, section 5.1](references.html#ref-1)</sup>"
- **Study A Narrative Note:** "The European SmPC describes a 12-month study in patients who had achieved remission from a manic episode with olanzapine. Patients randomised to continue olanzapine had statistically significant superiority over placebo for the primary endpoint of bipolar recurrence. Olanzapine also showed a statistically significant advantage over placebo in preventing either recurrence into mania or recurrence into depression.<sup>[1, section 5.1](references.html#ref-1)</sup> *Recurrence rates for this study are not reported in the SmPC, so no chart is shown.*"

### Long-Term Combination Therapy (18-Month Study)
- **Notice Box:** "In an 18-month co-therapy study in manic or mixed episode patients stabilised with olanzapine plus a mood stabiliser (lithium or valproate), long-term olanzapine co-therapy with lithium or valproate was not statistically significantly superior to lithium or valproate alone in delaying bipolar recurrence, defined according to syndromic (diagnostic) criteria.<sup>[1, section 5.1](references.html#ref-1)</sup>"

### Guideline & Formulary Context (BAP 2016, WHO EML 2023)
- **British Association for Psychopharmacology (BAP 2016):**
  - Severe mania: Lists olanzapine among the oral dopamine antagonists that are particularly effective, alongside haloperidol, risperidone, and quetiapine.<sup>[7](references.html#ref-7)</sup>
  - Long-term treatment: Recommends considering lithium as initial monotherapy. Olanzapine is among the agents shown to prevent manic relapse; lithium, quetiapine, and lamotrigine are identified as agents with convincing evidence for preventing depressive relapse. Weight gain is noted as a prominent adverse effect.<sup>[7](references.html#ref-7)</sup>
- **WHO Model List of Essential Medicines (2023):** Includes olanzapine as a therapeutic alternative to quetiapine for bipolar disorders.<sup>[9](references.html#ref-9)</sup>

### Safety Considerations & Specific Bipolar Trial Statistics
- **Clinical Overview:** Weight gain, increased appetite, changes in glucose and lipid parameters, somnolence, and other adverse reactions should be considered when selecting and monitoring treatment. Regular follow-up allows clinicians to evaluate clinical response, tolerability, and relevant physical-health parameters.
- **Specific Bipolar Clinical Trial Statistics (SmPC 4.8):**
  - **17.4%** of patients gained $\ge 7\%$ of baseline body weight during acute treatment (up to 6 weeks) with olanzapine in combination with lithium or divalproex.<sup>[1, section 4.8](references.html#ref-1)</sup>
  - **39.9%** of patients gained $\ge 7\%$ of baseline body weight with long-term olanzapine (up to 12 months) for recurrence prevention.<sup>[1, section 4.8](references.html#ref-1)</sup>
  - **4.1%** incidence of neutropenia observed with valproate combination therapy in one bipolar mania trial.<sup>[1, section 4.8](references.html#ref-1)</sup>

---

# 5. Page 4: Clinical Evidence (`clinical-evidence.html`)

### Document Metadata
- **Page Title:** `Clinical Evidence · ZYPREXA HCP`
- **Meta Description:** "Clinical evidence for olanzapine in schizophrenia, acute mania and recurrence prevention in bipolar disorder, as described in the EU Summary of Product Characteristics."

### Evidence Hub Navigation
- **Indication Navigation Strip:**
  - [Schizophrenia: **2** study descriptions](#schizophrenia)
  - [Acute mania: **4** study descriptions](#acute-mania)
  - [Recurrence prevention: **3** study descriptions](#recurrence)
  - [Long-term treatment: **$\ge 48$ wk** weight/metabolic exposure](#long-term)
  - *Contextual footnote:* "Numbers count the study descriptions in EU SmPC section 5.1, not the total number of trials conducted. Long-term data are from section 4.8."

### Comprehensive Study Explorer (Complete Data Table: 9 Studies)

| Population | Design and Comparator | Duration | Endpoint & Classification | Outcome Reported in EU SmPC 5.1 |
|---|---|---|---|---|
| **Schizophrenia with positive and negative symptoms; over 2,900 patients across trials** | Two placebo-controlled and three comparator-controlled trials | *Not stated in SmPC* | `[Not specified]`<br>Negative and positive symptoms | Statistically significantly greater improvement in negative as well as positive symptoms in 2 of 2 placebo-controlled and 2 of 3 comparator-controlled trials. |
| **Schizophrenia, schizoaffective and related disorders with depressive symptoms; n = 1,481; baseline MADRS 16.6** | Multinational, double-blind; versus haloperidol | *Not stated in SmPC* | `[Secondary analysis]`<br>Change in mood score (MADRS) | **−6.0 olanzapine vs −3.1 haloperidol; $p = 0.001$** |
| **Manic or mixed episode of bipolar disorder** | Versus placebo | 3 weeks | `[Not specified]`<br>Reduction of manic symptoms | Superior efficacy to placebo. |
| **Manic or mixed episode of bipolar disorder** | Versus valproate semisodium (divalproex) | 3 weeks | `[Not specified]`<br>Reduction of manic symptoms | Superior efficacy to divalproex. |
| **Manic or mixed episode of bipolar disorder** | Versus haloperidol | 6 and 12 weeks | `[Not specified]`<br>Proportion in symptomatic remission from mania and depression | Comparable efficacy results to haloperidol. |
| **Patients treated with lithium or valproate for at least 2 weeks** | Olanzapine 10 mg added to lithium or valproate, versus lithium or valproate monotherapy | 6 weeks | `[Not specified]`<br>Reduction of manic symptoms | Greater reduction in symptoms of mania than monotherapy. |
| **Manic episode, remission achieved on olanzapine** | Randomised to olanzapine or placebo | 12 months | `[Primary]`<br>Bipolar recurrence | **Statistically significant superiority over placebo; also an advantage in preventing recurrence into mania or into depression.** |
| **Manic episode, remission achieved on olanzapine plus lithium** | Randomised to olanzapine alone or lithium alone | 12 months | `[Primary]`<br>Bipolar recurrence | **Statistically non-inferior: 30.0% vs 38.3%; $p = 0.055$** |
| **Manic or mixed episode, stabilised on olanzapine plus lithium or valproate** | Olanzapine co-therapy versus lithium or valproate alone | 18 months | `[Not specified]`<br>Delay of bipolar recurrence (syndromic criteria) | Not statistically significantly superior to lithium or valproate alone. |

- **Source Line:** "Source: ZYPREXA EU SmPC, section 5.1.<sup>[1](references.html#ref-1)</sup> Endpoint labels are given only where the SmPC identifies the endpoint as primary or secondary."

### Evidence in Schizophrenia & Figure 1: MADRS Mood Score Change Bar Chart
- Narrative: Summarises the $>2,900$ patient dataset across 2 placebo-controlled and 3 comparator-controlled trials demonstrating statistically significant improvements in both negative and positive symptoms.
- Mood Score Analysis: A multinational, double-blind trial in 1,481 patients with schizophrenia, schizoaffective disorder, and related disorders with baseline depressive symptoms (baseline mean MADRS 16.6).

#### Figure 1: MADRS Mood Score Change Bar Chart
Horizontal bar chart comparing secondary mood symptom improvements:

```
+------------------------------------------------------------------------------------+
|               FIGURE 1: MEAN CHANGE IN MADRS MOOD SCORE (n = 1,481)                |
+------------------------------------------------------------------------------------+
|  Olanzapine  : [==================================================] −6.0           |
|  Haloperidol : [=========================] −3.1                                    |
|                +---------+---------+---------+---------+---------+                 |
|                0        −2        −4        −6        −8                           |
|                                                                                    |
|  Difference: Favours olanzapine (p = 0.001). Baseline mean MADRS: 16.6             |
+------------------------------------------------------------------------------------+
```

- **Data Values:**
  - Olanzapine: **−6.0**
  - Haloperidol: **−3.1**
  - Statistical Significance: $p = 0.001$
- **Caption:** "**Figure 1.** Prospective secondary analysis of baseline-to-endpoint mood score change in a multinational, double-blind study ($n = 1,481$; baseline mean MADRS 16.6). MADRS, Montgomery–Åsberg Depression Rating Scale.<sup>[1, section 5.1](references.html#ref-1)</sup>"

### Published Schizophrenia Trial: Beasley et al. 1996 & Figure 2 Charts
Full primary clinical publication module:
- **Article Citation:** Beasley CM Jr, Tollefson G, Tran P, et al. *Neuropsychopharmacology*. 1996;14(2):111–123.<sup>[10](references.html#ref-10)</sup>
- **Trial Profile:**
  - **Design:** Randomised, double-blind, placebo- and active-controlled; 22 sites, US and Canada.
  - **Patients:** $n = 335$; DSM-III-R schizophrenia, acute exacerbation; baseline BPRS total $\ge 24$; approx. 91% chronic illness course.
  - **Treatment Arms:**
    1. Olanzapine low dose: $5 \pm 2.5\text{ mg/day}$
    2. Olanzapine medium dose: $10 \pm 2.5\text{ mg/day}$
    3. Olanzapine high dose: $15 \pm 2.5\text{ mg/day}$
    4. Haloperidol: $15 \pm 5\text{ mg/day}$ (mean modal $16.4\text{ mg/day}$)
    5. Placebo
  - **Endpoints:** Primary objectives were change in BPRS total score and BPRS positive symptoms versus placebo; SANS composite score versus placebo and haloperidol (LOCF).
- **Safety in Trial:**
  - Somnolence: 39.1% on high-dose olanzapine vs. 16.2% on placebo.
  - Mean weight gain at endpoint: $+3.5\text{ kg}$ on high-dose olanzapine.
  - Transaminases: Dose-related ALT elevations; 6 patients discontinued due to raised ALT without clinical hepatic dysfunction.
  - Extrapyramidal symptoms: Acute dystonia occurred in 0% of olanzapine-treated patients vs. 13.0% with haloperidol.
- **Trial Limitations:** 6-week acute duration; high placebo response rate; haloperidol comparator dose ($16.4\text{ mg/day}$) has been discussed in literature as higher than optimal, which may have favoured active comparisons against it.

#### Figure 2: Beasley et al. 1996 Efficacy Outcomes (BPRS & SANS Charts)
Two scaled horizontal bar charts showing mean change from baseline to endpoint (LOCF):

##### 1. BPRS Total Mean Score Change (Week 6)
- Placebo: **−3.1**
- Olanzapine $5 \pm 2.5\text{ mg}$: **−6.7**
- Olanzapine $10 \pm 2.5\text{ mg}$: **−12.6** ($p \le 0.001$ vs. placebo)
- Olanzapine $15 \pm 2.5\text{ mg}$: **−15.2** ($p \le 0.001$ vs. placebo)
- Haloperidol $15 \pm 5\text{ mg}$: **−12.9** ($p \le 0.01$ vs. placebo)

##### 2. SANS Composite Negative Symptom Score Change (Week 6)
- Placebo: **−1.9**
- Olanzapine $5 \pm 2.5\text{ mg}$: **−8.7** ($p \le 0.05$ vs. placebo)
- Olanzapine $10 \pm 2.5\text{ mg}$: **−6.1**
- Olanzapine $15 \pm 2.5\text{ mg}$: **−13.5** ($p \le 0.001$ vs. placebo; $p \le 0.05$ vs. haloperidol)
- Haloperidol $15 \pm 5\text{ mg}$: **−6.6**

- **Caption:** "**Figure 2.** Mean change from baseline to endpoint (LOCF). Negative values indicate improvement. * $p \le 0.01$ versus placebo, except SANS for olanzapine $5 \pm 2.5\text{ mg}$ ($p \le 0.05$). † $p \le 0.05$ versus haloperidol. BPRS, Brief Psychiatric Rating Scale (items 0–6); SANS, Scale for the Assessment of Negative Symptoms. Redrawn from Beasley et al. 1996, Table 5.<sup>[10](references.html#ref-10)</sup>"

### Evidence in Acute Mania Summary
The SmPC reports outcomes verbatim for these 4 acute mania settings:
1. **Comparison with placebo:** Superior efficacy to placebo in reduction of manic symptoms over 3 weeks.<sup>[1, section 5.1](references.html#ref-1)</sup>
2. **Comparison with divalproex:** Superior efficacy to valproate semisodium (divalproex) in reduction of manic symptoms over 3 weeks.<sup>[1, section 5.1](references.html#ref-1)</sup>
3. **Combination with lithium or valproate:** Adding olanzapine 10 mg to lithium or valproate resulted in a greater reduction in symptoms of mania than lithium or valproate monotherapy after 6 weeks.<sup>[1, section 5.1](references.html#ref-1)</sup>
4. **Symptomatic remission vs. haloperidol:** Comparable efficacy results to haloperidol in the proportion of patients in symptomatic remission from mania and depression at 6 and 12 weeks.<sup>[1, section 5.1](references.html#ref-1)</sup>

### Published Acute Mania Trial: Tohen et al. 1999 & Figure 3 Charts
Full primary clinical publication module:
- **Article Citation:** Tohen M, Sanger TM, McElroy SL, et al. *Am J Psychiatry*. 1999;156(5):702–709.<sup>[11](references.html#ref-11)</sup>
- **Trial Profile:**
  - **Design:** Randomised, double-blind, placebo-controlled, parallel group; 16 US sites.
  - **Patients:** $n = 139$ (olanzapine: 70, placebo: 69); DSM-IV bipolar I disorder, manic or mixed episode; baseline Young Mania Rating Scale (YMRS) $\ge 20$; 53% with psychotic features.
  - **Dosing Protocol:** Olanzapine initiated at $10\text{ mg/day}$, flexible dosing range $5–20\text{ mg/day}$; mean modal dose achieved: $14.9\text{ mg/day}$.
  - **Endpoints:** Primary endpoint was change in YMRS total score from baseline to endpoint (LOCF). Clinical response defined a priori as $\ge 50\%$ reduction in YMRS total score.
- **Safety in Trial:**
  - Somnolence: 32.9% olanzapine vs. 17.4% placebo.
  - Dry mouth: 25.7% vs. 8.7%.
  - Dizziness: 22.9% vs. 5.8%.
  - Weight gain adverse event report: 11.4% vs. 1.4%.
  - Mean weight change over 3 weeks: $+1.65\text{ kg}$ with olanzapine vs. $-0.44\text{ kg}$ with placebo.
  - Laboratory: Treatment-emergent ALT elevations in 17.6% of olanzapine patients vs. 0% on placebo.
- **Trial Limitations:** 3-week short-term duration; high placebo dropout rate (65.2%); concomitant lorazepam permitted; initiated at 10 mg/day whereas the EU SmPC recommends a 15 mg starting dose for monotherapy.

#### Figure 3: Tohen et al. 1999 Efficacy Charts (YMRS Change & Responders)
Two vertical bar chart panels:

```
+---------------------------------------------------------------------------------------+
|                         FIGURE 3: TOHEN ET AL. 1999 EFFICACY                          |
+-------------------------------------------+-------------------------------------------+
| PANEL A: YMRS MEAN CHANGE AT 3 WEEKS      | PANEL B: RESPONDERS (≥ 50% YMRS DECREASE) |
+-------------------------------------------+-------------------------------------------+
|    0                                      |   60%                                     |
|   −2                                      |                                           |
|   −4               [−4.88] Placebo        |   40%      [48.6%] Olanzapine             |
|   −6                                      |                                           |
|   −8                                      |   20%                      [24.2%] Placebo|
|  −10   [−10.26] Olanzapine                |                                           |
|  −12                                      |    0%                                     |
|        p = 0.02 (Difference: −5.38 pts)   |        p = 0.004 (34/70 vs 16/66 pts)     |
+-------------------------------------------+-------------------------------------------+
```

- **Panel A (YMRS Mean Change):**
  - Olanzapine: **−10.26**
  - Placebo: **−4.88**
  - Treatment Difference: −5.38 points ($p = 0.02$)
- **Panel B (Proportion of Responders):**
  - Olanzapine: **48.6%** (34 of 70 patients)
  - Placebo: **24.2%** (16 of 66 patients)
  - Statistical Significance: $p = 0.004$
- **Caption:** "**Figure 3.** Mean change in YMRS total score from baseline to endpoint (LOCF; difference −5.38 points) and proportion of responders at 3 weeks. YMRS, Young Mania Rating Scale. Redrawn from Tohen et al. 1999, Table 2 and text.<sup>[11](references.html#ref-11)</sup>"

### Evidence in Recurrence Prevention Table
Recurrence studies summarised from EU SmPC section 5.1:

| Comparison | Duration | Result on Bipolar Recurrence |
|---|---|---|
| **Olanzapine vs. placebo** | 12 months | Superior (primary endpoint) |
| **Olanzapine vs. lithium** | 12 months | Non-inferior; **30.0% vs. 38.3%**, $p = 0.055$ (primary endpoint) |
| **Olanzapine + lithium/valproate vs. lithium/valproate alone** | 18 months | Not statistically significantly superior |

### Long-Term Treatment Considerations & Figure 4: Categorical Weight Gain Bar Chart
- **Clinical Context:** With longer exposure ($\ge 48\text{ weeks}$), the proportion of adult patients with clinically significant changes in weight, glucose, total/LDL/HDL cholesterol, or triglycerides increases. Ongoing clinical monitoring is an essential component of long-term therapy.<sup>[1, section 4.8](references.html#ref-1)</sup>

#### Figure 4: Categorical Weight Gain Bar Chart (>=7%, >=15%, >=25%)
A grouped bar chart comparing categorical weight gain in adults by exposure duration:

```
+---------------------------------------------------------------------------------------+
|         FIGURE 4: ADULT WEIGHT GAIN BY THRESHOLD AND DURATION OF EXPOSURE             |
+---------------------------------------------------------------------------------------+
|  Exposure Duration:  [░░] Short-term (median 47 days)   [██] Long-term (≥ 48 weeks)    |
+---------------------------------------------------------------------------------------+
|  70% |                                                                                |
|  60% |                     [██] 64.4%                                                 |
|  50% |                                                                                |
|  40% |                                                                                |
|  30% |                                          [██] 31.7%                            |
|  20% |   [░░] 22.2%                                                                   |
|  10% |                                                                 [██] 12.3%     |
|   0% |                     [░░] 4.2%                    [░░] 0.8%                     |
|      +-------------------------------------------------------------------------+      |
|               ≥ 7% Gain                  ≥ 15% Gain                 ≥ 25% Gain        |
|                  Threshold as a Proportion of Baseline Body Weight                     |
+---------------------------------------------------------------------------------------+
```

- **Exact Numerical Values (EU SmPC 4.8 Footnote 1):**
  - **$\ge 7\%$ Baseline Weight Gain:** Short-term: **22.2%** | Long-term: **64.4%**
  - **$\ge 15\%$ Baseline Weight Gain:** Short-term: **4.2%** | Long-term: **31.7%**
  - **$\ge 25\%$ Baseline Weight Gain:** Short-term: **0.8%** | Long-term: **12.3%**
- **Caption:** "**Figure 4.** Percentage of adult patients reaching each weight-gain threshold. Clinically significant weight gain was observed across all baseline BMI categories.<sup>[1, section 4.8](references.html#ref-1)</sup>"

### Guideline & Formulary Synthesis Table
Summary of international guidelines and essential medicine listings:

| Guideline / Source | Clinical Scope | Formally Verified Consensus Statements |
|---|---|---|
| **APA Practice Guideline (3rd ed., 2021)**<sup>[6](references.html#ref-6)</sup> | Schizophrenia | Treat with an antipsychotic and monitor effectiveness and side effects (1A). Continue antipsychotic treatment after symptoms improve (1A), preferably with the same medication (2B). Clozapine for treatment-resistant schizophrenia (1B). Long-acting injectable if the patient prefers it or adherence is poor (2B). The guideline does not rank individual antipsychotics. |
| **BAP Guidelines (2016)**<sup>[7](references.html#ref-7)</sup> | Bipolar disorder | For severe mania, consider an oral dopamine antagonist; haloperidol, olanzapine, risperidone and quetiapine are described as particularly effective. In long-term treatment, olanzapine is among the agents shown to prevent manic relapse; lithium is recommended as initial monotherapy. Weight gain is noted as a prominent adverse effect of olanzapine. |
| **WPA Review (2008)**<sup>[8](references.html#ref-8)</sup> | Schizophrenia | Apart from clozapine, no consistent efficacy differences between second-generation antipsychotics. Olanzapine is associated with more weight gain and metabolic adverse effects than most comparators. |
| **WHO Model List of Essential Medicines (2023)**<sup>[9](references.html#ref-9)</sup> | Psychotic and bipolar disorders | Olanzapine is listed as a therapeutic alternative to risperidone for psychotic disorders and to quetiapine for bipolar disorders. |

---

# 6. Page 5: Mechanism of Action (`mechanism-of-action.html`)

### Document Metadata
- **Page Title:** `Mechanism of Action · ZYPREXA HCP`
- **Meta Description:** "Pharmacology of olanzapine: receptor-binding profile across dopamine, serotonin, histamine H1, muscarinic and alpha-1 adrenergic receptors, and its clinical relevance."

### Pharmacological Profile Overview
- **Eyebrow:** Pharmacology
- **Heading (`<h1>`):** "Understanding the pharmacology of olanzapine"
- **Standfirst:** "A broad receptor-binding profile contributes to its pharmacological effects."
- **Context Narrative:**
  - "Olanzapine is an antipsychotic, antimanic and mood-stabilising agent with activity across several neurotransmitter receptor systems.<sup>[1, section 5.1](references.html#ref-1)</sup>"
  - "Its pharmacological profile includes activity at serotonin, dopamine, muscarinic, histamine and alpha-1 adrenergic receptors. The relative contribution of individual receptor interactions to clinical efficacy and adverse effects should be interpreted carefully."

### Figure 1: Interactive Receptor-Binding Map
Radial map visualizing preclinical binding affinities ($K_i < 100\text{ nM}$):

```
                                  [ Dopamine D1–D5 ]
                                    (Solid ring)
                                          |
                                          |
        [ Adrenergic α1 ]                 |                 [ Serotonin 5-HT2A/2C, 3, 6 ]
         (Dashed ring)             (  OLANZAPINE  )                 (Solid ring)
                 \                 (   N05AH03    )                 /
                  \                       |                        /
                   \                      |                       /
            [ Muscarinic M1–M5 ]          |             [ Histamine H1 ]
              (Dashed ring)               +------------   (Dashed ring)
```

- **Visual Legend:**
  - Solid Rings: Described in relation to antipsychotic activity.
  - Dashed Rings: Described in relation to adverse effects.
- **Caption:** "**Figure 1.** Receptor families at which olanzapine showed affinity ($K_i < 100\text{ nM}$) in preclinical studies. Relative affinities are not represented; position, distance and circle size carry no meaning. Ring style follows the descriptions on this page.<sup>[1, section 5.1](references.html#ref-1)</sup>"

### Detailed Receptor System Profiles (Dopamine, 5-HT, H1, Muscarinic, a1)
1. **Dopamine Receptor Activity ($D_1, D_2, D_3, D_4, D_5$):**
   - Olanzapine has affinity for dopamine receptors, including $D_2$ receptors.<sup>[1, section 5.1](references.html#ref-1)</sup>
   - Dopamine receptor antagonism is relevant to its antipsychotic activity. Dopaminergic signalling is involved in multiple brain functions, and the relationship between receptor activity and individual symptom domains is complex.
2. **Serotonin Receptor Activity ($5\text{-HT}_{2A/2C}, 5\text{-HT}_3, 5\text{-HT}_6$):**
   - Olanzapine also has affinity for serotonin receptors, including $5\text{-HT}_{2A}$ and $5\text{-HT}_{2C}$ receptors.<sup>[1, section 5.1](references.html#ref-1)</sup>
   - Its serotonin and dopamine receptor activity contributes to its overall pharmacological profile. However, the clinical effects of olanzapine cannot be attributed to one receptor interaction alone.
3. **Histamine $H_1$ Receptors:**
   - Relevant to effects such as somnolence and increased appetite.<sup>[13, section 12.2](references.html#ref-13)</sup>
4. **Muscarinic Receptors ($M_1–M_5$):**
   - Relevant to anticholinergic adverse effects.<sup>[13, section 12.2](references.html#ref-13)</sup>
5. **Alpha-1 Adrenergic Receptors ($\alpha_1$):**
   - Relevant to orthostatic hypotension and dizziness.<sup>[13, section 12.2](references.html#ref-13)</sup>
- **Clinical Summary:** "These interactions help explain why treatment selection and monitoring must consider both therapeutic objectives and potential adverse effects."

### Figure 2: In Vivo PET Receptor Occupancy (Kapur et al. 1998 Scatter Plot)
- **Background Context:** Olanzapine demonstrated a greater in vitro affinity for serotonin $5\text{-HT}_2$ than dopamine $D_2$ receptors, and greater $5\text{-HT}_2$ than $D_2$ activity in in vivo models. In a single 10 mg dose PET study in healthy volunteers, it produced a higher $5\text{-HT}_{2A}$ than $D_2$ occupancy.<sup>[1, section 5.1](references.html#ref-1)</sup>
- **Clinical Trial Module:** Kapur S, Zipursky RB, Remington G, et al. *Am J Psychiatry*. 1998;155(7):921–928.<sup>[12](references.html#ref-12)</sup>
- **Key PET Findings:**
  - **$5\text{-HT}_2$ Occupancy:** $> 90\%$ occupancy in every patient across all tested doses, including at the lowest dose of $5\text{ mg/day}$.
  - **$D_2$ Occupancy:** Occupancy rose dose-dependently, averaging **55% at 5 mg**, **73% at 10 mg**, **75% at 15 mg**, and **76% at 20 mg/day**.
  - **Across 10–20 mg/day Approved Range:** Individual striatal $D_2$ occupancy ranged from **71% to 80%**.
- **Limitations:** 12 patients with schizophrenia (3 per dose group); striatal $D_2$ occupancy measured using [<sup>11</sup>C]raclopride; baseline occupancy estimated from age-corrected healthy controls; receptor occupancy alone does not predict individual therapeutic response.

#### Kapur et al. 1998 Scatter Plot Data Representation:

```
+---------------------------------------------------------------------------------------+
|          FIGURE 2: IN VIVO RECEPTOR OCCUPANCY AT STEADY STATE (KAPUR ET AL. 1998)     |
+---------------------------------------------------------------------------------------+
|  100% |  (•)   (•)   (•)   (•)   (•)   (•)   (•)   (•)   (•)   (•)   (•)   (•)  5-HT2 |
|       |                                                                               |
|   80% |                    [x]   [x]   [x]   [x]   [x]   [x]   [x]   [x]   [x]  D2    |
|   60% |        [x]   [x]                                                              |
|   40% |  [x]                                                                          |
|   20% |                                                                               |
|    0% +-----------------------------------------------------------------------+       |
|             5 mg/day            10 mg/day           15 mg/day           20 mg/day     |
|                                                                                       |
|  Mean D2 Occupancy:                                                                   |
|       5 mg: 55%           10 mg: 73%          15 mg: 75%          20 mg: 76%          |
|  Individual D2 values:                                                                |
|       5 mg: 43, 59, 64%   10 mg: 71, 74, 75%  15 mg: 73, 75, 76%  20 mg: 74, 76, 80%  |
|  Individual 5-HT2 values:                                                             |
|       All doses: 91% to ~100%                                                         |
+---------------------------------------------------------------------------------------+
```

- **Caption:** "**Figure 2.** Individual $5\text{-HT}_2$ and striatal $D_2$ occupancy in 12 patients with schizophrenia at fixed doses of 5–20 mg/day; numbers show mean $D_2$ occupancy per dose. Redrawn from Kapur et al. 1998, Table 1. Three additional scans at 30–40 mg/day reported in the paper are not shown because these doses exceed the EU maximum of 20 mg/day.<sup>[12](references.html#ref-12)</sup>"

### From Pharmacology to Clinical Practice
- **Pull Quote:** "A mechanism-of-action explanation provides context for understanding the pharmacology of olanzapine. It does not, by itself, establish the magnitude of clinical benefit or predict the response of an individual patient."
- **Concluding Narrative:** "Clinical efficacy and safety should be evaluated using the relevant clinical evidence and approved product information."
- **Actions:**
  - Primary: [Review the clinical evidence ->](clinical-evidence.html)
  - Secondary: [Safety and prescribing](safety-prescribing.html)

---

# 7. Page 6: Safety, Monitoring & Prescribing (`safety-prescribing.html`)

### Document Metadata
- **Page Title:** `Safety and Prescribing · ZYPREXA HCP`
- **Meta Description:** "ZYPREXA (olanzapine) coated tablets: dosing, contraindications, warnings and precautions, monitoring, interactions, pregnancy and adverse reactions, summarised from the EU SmPC."

### Prescribing Summary Preamble & Jump Navigation
- **Eyebrow:** Prescribing information summary · ZYPREXA coated tablets
- **Heading (`<h1>`):** "Safety, monitoring and prescribing"
- **Standfirst:** "Individualized treatment requires consideration of contraindications, precautions and ongoing monitoring."
- **Regulatory Preamble:** "Before prescribing Zyprexa, consult the current approved product information for the intended market. The following content summarises selected considerations from the European SmPC and does not replace the full prescribing document."
- **Primary CTA:** [View full Summary of Product Characteristics (EMA PDF)](https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf)
- **On-Page Jump Navigation (`nav.jump`):**
  1. [Dosing](#dosing)
  2. [Contraindications](#contraindications)
  3. [Warnings and precautions](#warnings)
  4. [Monitoring](#monitoring)
  5. [Interactions](#interactions)
  6. [Pregnancy and breastfeeding](#pregnancy)
  7. [Discontinuation](#discontinuation)
  8. [Adverse reactions](#adverse-reactions)
  9. [Product information](#prescribing-information)

### Formulation Distinctions Key
Explicit boundary definition panel:
1. **ZYPREXA coated tablets (oral olanzapine) [THIS PAGE]:** All dosing and safety content refers to the oral formulation.
2. **ZYPREXA powder for solution for injection [SEPARATE SmPC]:** Short-term intramuscular use for agitation. Different dosing and precautions.<sup>[2](references.html#ref-2)</sup>
3. **ZYPADHERA (olanzapine pamoate) [SEPARATE SmPC]:** Prolonged-release injection with its own dosing and post-injection observation requirements.<sup>[3](references.html#ref-3)</sup>

### 01 · Dosing and Administration (Table 1 & Special Populations)
- **Approved Dose Range:** $5–20\text{ mg/day}$.
- **Titration Rules:** An increase above the recommended starting dose should occur only after appropriate clinical reassessment and generally at intervals of **not less than 24 hours**.
- **Food Effect:** Can be administered without regard to meals (absorption unaffected by food).

#### Table 1: Recommended Starting Dose by Treatment Setting (EU SmPC 4.2)
| Approved Treatment Setting | Recommended Starting Dose |
|---|---|
| **Schizophrenia** | **10 mg** once daily |
| **Moderate to severe manic episode, monotherapy** | **15 mg** single daily dose |
| **Moderate to severe manic episode, combination therapy** | **10 mg** once daily |
| **Prevention of recurrence in bipolar disorder following response to olanzapine for mania** | **10 mg** once daily |

- **Recurrence Continuation Protocol:** "For patients who have been receiving olanzapine for a manic episode, therapy for preventing recurrence continues at the same dose. If a new manic, mixed or depressive episode occurs, olanzapine treatment should be continued (with dose optimisation as needed), with supplementary therapy to treat mood symptoms, as clinically indicated.<sup>[1, section 4.2](references.html#ref-1)</sup>"

#### Special Populations Prescribing Guidance
- **Older patients ($\ge 65$ years):** A lower starting dose ($5\text{ mg/day}$) is not routinely indicated but should be considered when clinical factors warrant.
- **Renal and/or hepatic impairment:** A lower starting dose ($5\text{ mg}$) should be considered. In moderate hepatic insufficiency (cirrhosis, Child-Pugh Class A or B), the starting dose should be $5\text{ mg}$ and only increased with caution.
- **Factors that may slow metabolism:** When more than one factor is present (female gender, geriatric age, non-smoking status), consider decreasing the starting dose. Dose escalation should be conservative.
- **Smokers:** Starting dose and dose range need not be routinely altered. Metabolism may be induced by smoking; clinical monitoring is recommended and a dose increase may be considered if necessary.
- **Children and adolescents (< 18 years):** Not recommended below 18 years of age due to a lack of data on safety and efficacy.

### 02 · Contraindications (SmPC 4.3)
Oral ZYPREXA is strictly contraindicated in patients with:
1. **Hypersensitivity** to olanzapine or to any of the excipients (including lactose monohydrate; see SmPC section 6.1 for full list).
2. **Known risk of narrow-angle glaucoma**.

### 03 · Important Warnings and Precautions (Lead Dementia & 14 Warning Headings)
- **Clinical Improvement Latency:** During antipsychotic treatment, improvement in the patient's clinical condition may take several days to some weeks. Patients should be closely monitored during this period.

#### Lead Boxed Warning: Dementia-Related Psychosis
- **Status:** **NOT RECOMMENDED**
- **Warning Text:** "Olanzapine is not recommended for patients with dementia-related psychosis and/or behavioural disturbances because of an increase in mortality and the risk of cerebrovascular accident."
- **Trial Evidence in Elderly Patients (Mean Age 78 Years; 6–12 Weeks):**
  - **Mortality Incidence:** **3.5% with olanzapine vs. 1.5% with placebo** (approx. 2-fold increase).
  - **Cerebrovascular Adverse Events (CVAE):** **1.3% with olanzapine vs. 0.4% with placebo** (approx. 3-fold increase).
  - *The efficacy of olanzapine was not established in these trials.*

#### Full Warning Profiles
1. **Metabolic Effects:** Associated with weight gain and changes in glucose and lipid parameters. Hyperglycaemia and the development or worsening of diabetes, occasionally associated with ketoacidosis or coma, have been reported uncommonly, including some fatal cases. Baseline risk factors, weight, glucose, and lipids must be monitored.
2. **Somnolence and Dizziness:** Caution patients about operating machinery, including motor vehicles (SmPC 4.7). Sedation and orthostatic hypotension must be considered regarding fall risk.
3. **Neuroleptic Malignant Syndrome (NMS):** Potentially life-threatening. Manifests with hyperpyrexia, muscle rigidity, altered mental status, and autonomic instability. **If a patient develops signs/symptoms of NMS, or unexplained high fever, ALL antipsychotics, including olanzapine, MUST be discontinued immediately.**
4. **Tardive Dyskinesia & Movement Disorders:** Risk increases with long-term exposure. Assess regularly. If signs/symptoms appear, consider dose reduction or discontinuation (symptoms may temporarily worsen or emerge post-discontinuation).
5. **Cardiovascular & Orthostatic Effects:** Orthostatic hypotension and dizziness may occur. Caution in patients with cardiovascular risk factors. Measure blood pressure periodically in patients over 65 years.
6. **Hepatic & Haematological Considerations:** Transient, asymptomatic elevations of ALT/AST are common, especially early in treatment. Follow up patients with signs of impairment or hepatotoxic co-medication. **If hepatitis is diagnosed, olanzapine MUST be discontinued.** Caution in low leukocyte/neutrophil counts or bone marrow depression. Neutropenia is reported commonly when combined with valproate.
7. **Parkinson's Disease:** Not recommended for dopamine agonist-associated psychosis in Parkinson's disease; worsening of parkinsonian symptoms and hallucinations reported very commonly.
8. **QT Interval:** Caution with medicines known to prolong QTc, especially in elderly, congenital long QT, CHF, cardiac hypertrophy, hypokalaemia, or hypomagnesaemia.
9. **Venous Thromboembolism (VTE):** Reported uncommonly. Identify risk factors (e.g., immobilisation) and institute preventive measures.
10. **Seizures:** Use cautiously in patients with a history of seizures or conditions lowering the seizure threshold.
11. **Sudden Cardiac Death:** Reported post-marketing. Observational risk is approximately twice that of non-antipsychotic users, comparable to pooled atypical antipsychotics.
12. **Anticholinergic Activity:** Caution in prostatic hypertrophy, paralytic ileus, and related conditions.
13. **General CNS Activity:** Caution with alcohol and centrally acting drugs. May antagonise dopamine agonists.
14. **Lactose Intolerance:** Contraindicated in rare hereditary galactose intolerance, total lactase deficiency, or glucose-galactose malabsorption.

### 04 · Monitoring During Treatment (Figure 1 Schedule & Table 2 Approach)

#### Figure 1: Example Monitoring Schedule (Timeline Diagram)
Graphic depicting the baseline and follow-up clinical intervals:

```
+----------------------------------------------------------------------------------------------------+
|               FIGURE 1: EXAMPLE MONITORING SCHEDULE AFTER STARTING OLANZAPINE                      |
+----------------------------------------------------------------------------------------------------+
|  Parameter       |  Baseline  |  Week 4   |  Week 8   |  Week 12  |  Longer-term Ongoing               |
+------------------+------------+-----------+-----------+-----------+------------------------------------+
|  Body Weight     |     (•)    |    (•)    |    (•)    |    (•)    |  Quarterly                         |
|  Blood Glucose   |     (•)    |     -     |     -     |    (•)    |  Annually                          |
|  Lipid Profile   |     (•)    |     -     |     -     |    (•)    |  Every 5 years                     |
+----------------------------------------------------------------------------------------------------+
```

- **Caption:** "**Figure 1.** Example monitoring intervals from EU SmPC section 4.4 (given as examples, 'e.g.'). Time axis not to scale.<sup>[1, section 4.4](references.html#ref-1)</sup>"

#### Table 2: Example Monitoring Approach (EU SmPC 4.4)
| Clinical Parameter | Example Recommended Schedule |
|---|---|
| **Body weight** | Baseline; 4, 8 and 12 weeks after starting; then quarterly |
| **Blood glucose** | Baseline; 12 weeks after starting; then annually |
| **Lipids (cholesterol/triglycerides)** | Baseline; 12 weeks after starting; then every 5 years |
| **Blood pressure** | Periodically in patients over 65 years |

- **Hyperglycaemia Vigilance:** "Patients should be observed for signs and symptoms of hyperglycaemia (such as polydipsia, polyuria, polyphagia and weakness). Patients with diabetes mellitus or with risk factors for diabetes should be monitored regularly for worsening of glucose control.<sup>[1, section 4.4](references.html#ref-1)</sup>"

### 05 · Drug Interactions (Table 3 Selected Interactions)
- **Metabolism Pathway:** Primarily metabolized by cytochrome P450 CYP1A2.
- **CYP P450 Non-Inhibition:** In vitro, olanzapine does not inhibit CYP1A2, CYP2C9, CYP2C19, CYP2D6, or CYP3A4. No pharmacokinetic interactions observed with lithium or biperiden.

#### Table 3: Selected Drug Interactions Described in the European SmPC
| Medicine or Factor | Pharmacokinetic / Pharmacodynamic Effect | Action Specified in EU SmPC |
|---|---|---|
| **Smoking; carbamazepine**<br>*(CYP1A2 induction)* | May increase olanzapine metabolism and reduce concentrations; only slight to moderate increase in clearance observed. | Clinical monitoring; a dose increase may be considered if necessary. |
| **Fluvoxamine; other CYP1A2 inhibitors (e.g., ciprofloxacin)** | Increases olanzapine exposure. With fluvoxamine, mean $C_{\max}$ rose **54%** (female non-smokers) and **77%** (male smokers); mean AUC rose **52%** and **108%**. | Consider a lower starting dose; consider a dose decrease if an inhibitor is initiated. |
| **Activated charcoal** | Reduces oral bioavailability by **50–60%**. | Administer at least 2 hours before or 2 hours after olanzapine. |
| **Alcohol & centrally acting medicines** | Additive central nervous system depressant effects. | Caution advised. |
| **Direct & indirect dopamine agonists** | Olanzapine may antagonise their therapeutic effects. | Anti-Parkinsonian medicines not recommended in patients with Parkinson's disease and dementia. |
| **Medicines that increase QTc** | Potential additive effect on cardiac conduction. | Caution advised. |
| **Valproate** | Neutropenia reported commonly with concomitant therapy. | Follow hepatic and haematological monitoring recommendations. |

### 06 · Pregnancy and Breastfeeding (SmPC 4.6)
- **Pregnancy:** Human experience is limited. Olanzapine should be used in pregnancy only if the potential benefit justifies the potential risk to the foetus.
- **Neonatal Risk:** Newborns exposed to antipsychotics (including olanzapine) during the third trimester are at risk of adverse reactions including extrapyramidal symptoms and/or withdrawal symptoms following delivery (agitation, hypertonia, hypotonia, tremor, somnolence, respiratory distress, feeding disorder). Monitor newborns carefully.
- **Breastfeeding:** Olanzapine is excreted in human breast milk. **Patients should be advised NOT to breastfeed an infant if they are taking olanzapine.**

### 07 · Discontinuation (SmPC 4.2, 4.4)
- **Withdrawal Symptoms:** Acute symptoms including sweating, insomnia, tremor, anxiety, nausea, or vomiting have been reported rarely when olanzapine is stopped abruptly.
- **Tapering:** **Gradual tapering of the dose should be considered** when discontinuing olanzapine.

### 08 · Adverse Reactions (Complete >=1% Clinical Trial Incidence Profile)
- **Frequently Reported Adverse Reactions:** Somnolence, weight gain, increased appetite, dizziness, orthostatic hypotension, and changes in glucose and lipid parameters.

#### Complete List of Adverse Reactions Reported in $\ge 1\%$ of Patients in Adult Clinical Trials:
1. Somnolence
2. Weight gain
3. Eosinophilia
4. Elevated prolactin levels
5. Elevated cholesterol levels
6. Elevated glucose levels
7. Elevated triglyceride levels
8. Glucosuria
9. Increased appetite
10. Dizziness
11. Akathisia
12. Parkinsonism
13. Leukopenia
14. Neutropenia
15. Dyskinesia
16. Orthostatic hypotension
17. Anticholinergic effects
18. Transient asymptomatic elevations of hepatic aminotransferases (ALT, AST)
19. Rash
20. Asthenia
21. Fatigue
22. Pyrexia
23. Arthralgia
24. Increased alkaline phosphatase
25. High gamma-glutamyltransferase (GGT)
26. High uric acid
27. High creatine phosphokinase (CK)
28. Oedema

- **Hyperprolactinaemia Specifics:** In clinical trials of up to 12 weeks, plasma prolactin concentrations exceeded the upper limit of normal in **approximately 30%** of patients with normal baseline prolactin; elevations were generally mild.

### Pharmacovigilance: Reporting Suspected Adverse Reactions
- **Reporting Statement:** "Reporting suspected adverse reactions after authorisation of the medicinal product is important. It allows continued monitoring of the benefit/risk balance of the medicinal product. Healthcare professionals are asked to report any suspected adverse reactions via their national reporting system.<sup>[1, section 4.8](references.html#ref-1)</sup>"

### Full Prescribing Information Access Band
- Heading: "Full prescribing information"
- Narrative: "The EU product information document contains the Summary of Product Characteristics (Annex I) and the package leaflet for patients (Annex III B), for both ZYPREXA coated tablets and ZYPREXA powder for solution for injection."
- Links:
  - [View full Summary of Product Characteristics (PDF)](https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf)
  - [Access patient leaflet (EMA EPAR)](https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa)

---

# 8. Page 7: References and Resources (`references.html`)

### Document Metadata
- **Page Title:** `References and Resources · ZYPREXA HCP`
- **Meta Description:** "Product information documents for ZYPREXA (olanzapine), the references cited on this website and medical information."

### Regulatory Product Information Documents
1. **ZYPREXA coated tablets and powder for solution for injection:**
   - Document: Summary of Product Characteristics (EU Product Information, Annex I).
   - Usage: Basis for all prescribing and clinical content on this website.
   - Link: [Open PDF on ema.europa.eu](https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf)
2. **Information for the patient (Package Leaflet):**
   - Document: Annex III B of the EU Product Information document.
   - Link: [EMA product page](https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa)
3. **ZYPADHERA (olanzapine pamoate):**
   - Document: Prolonged-release suspension for injection (separate SmPC).
   - Link: [EMA ZYPADHERA page](https://www.ema.europa.eu/en/medicines/human/EPAR/zypadhera)

### Complete Reference Library (Refs 1–13 with Full Bibliographic Citations)

#### Product Information
1. **Reference 1:**  
   **Title:** ZYPREXA 2.5 mg, 5 mg, 7.5 mg, 10 mg, 15 mg and 20 mg coated tablets. Summary of Product Characteristics.  
   **Authors / Entity:** CHEPLAPHARM Registration GmbH. EU product information, Annex I. European Medicines Agency.  
   **Usage:** Cited for approved indications (4.1), posology and method of administration (4.2), contraindications (4.3), special warnings and precautions for use (4.4), interactions (4.5), fertility, pregnancy and lactation (4.6), effects on ability to drive (4.7), undesirable effects (4.8), and pharmacodynamic properties and clinical efficacy (5.1).  
   **Direct Link:** [Product information PDF (ema.europa.eu)](https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf)

2. **Reference 2:**  
   **Title:** ZYPREXA 10 mg powder for solution for injection. Summary of Product Characteristics.  
   **Authors / Entity:** CHEPLAPHARM Registration GmbH. EU product information, Annex I. European Medicines Agency.  
   **Usage:** Cited to distinguish the short-acting intramuscular formulation.  
   **Direct Link:** [Product information PDF (ema.europa.eu)](https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf)

3. **Reference 3:**  
   **Title:** ZYPADHERA 210 mg, 300 mg and 405 mg powder and solvent for prolonged release suspension for injection. Summary of Product Characteristics.  
   **Authors / Entity:** CHEPLAPHARM Registration GmbH. EU product information, Annex I. European Medicines Agency.  
   **Usage:** Cited to distinguish the prolonged-release long-acting injectable formulation.  
   **Direct Link:** [Product information PDF (ema.europa.eu)](https://www.ema.europa.eu/en/documents/product-information/zypadhera-epar-product-information_en.pdf)

#### Scientific Literature
4. **Reference 4:**  
   **Title:** Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR).  
   **Authors / Entity:** American Psychiatric Association. Washington, DC: American Psychiatric Association Publishing; 2022.  
   **Usage:** Cited for the symptom domains of schizophrenia and clinical features of bipolar mood episodes.

5. **Reference 5:**  
   **Title:** Beyond the dopamine hypothesis of schizophrenia to three neural networks of psychosis: dopamine, serotonin, and glutamate.  
   **Authors:** Stahl SM.  
   **Journal:** *CNS Spectr*. 2018;23(3):187–191.  
   **Usage:** Cited for the three interconnected neurobiological hypotheses of schizophrenia (schizophrenia Figure 2).  
   **DOI:** [doi:10.1017/S1092852918001013](https://doi.org/10.1017/S1092852918001013)

6. **Reference 6:**  
   **Title:** The American Psychiatric Association Practice Guideline for the Treatment of Patients With Schizophrenia, Third Edition.  
   **Authors:** Keepers GA, Fochtmann LJ, Anzia JM, et al. Washington, DC: American Psychiatric Association; 2021. Executive summary: *Am J Psychiatry*. 2020;177(9):868–872.  
   **Usage:** Cited for guideline recommendations on initial antipsychotic therapy, continuation therapy, and long-acting injectables.  
   **DOI:** [doi:10.1176/appi.ajp.2020.177901](https://doi.org/10.1176/appi.ajp.2020.177901)

7. **Reference 7:**  
   **Title:** Evidence-based guidelines for treating bipolar disorder: revised third edition recommendations from the British Association for Psychopharmacology.  
   **Authors:** Goodwin GM, Haddad PM, Ferrier IN, et al.  
   **Journal:** *J Psychopharmacol*. 2016;30(6):495–553.  
   **Usage:** Cited for evidence-based positioning in severe acute mania and long-term recurrence prevention in bipolar disorder.  
   **DOI:** [doi:10.1177/0269881116636545](https://doi.org/10.1177/0269881116636545)

8. **Reference 8:**  
   **Title:** World Psychiatric Association Pharmacopsychiatry Section statement on comparative effectiveness of antipsychotics in the treatment of schizophrenia.  
   **Authors:** Tandon R, Belmaker RH, Gattaz WF, et al.  
   **Journal:** *Schizophr Res*. 2008;100(1–3):20–38.  
   **Usage:** Cited for comparative efficacy and tolerability context across second-generation antipsychotics, and comparator-dose limitations.  
   **DOI:** [doi:10.1016/j.schres.2007.11.033](https://doi.org/10.1016/j.schres.2007.11.033)

9. **Reference 9:**  
   **Title:** The selection and use of essential medicines 2023: report of the WHO Expert Committee on Selection and Use of Essential Medicines, 2023 (including the 23rd WHO Model List of Essential Medicines).  
   **Authors / Entity:** World Health Organization. Geneva: WHO; 2024 (WHO Technical Report Series, No. 1049). ISBN 978-92-4-008926-6.  
   **Usage:** Cited for the international listing of olanzapine as a therapeutic alternative for psychotic and bipolar disorders.

10. **Reference 10:**  
    **Title:** Olanzapine versus placebo and haloperidol: acute phase results of the North American double-blind olanzapine trial.  
    **Authors:** Beasley CM Jr, Tollefson G, Tran P, et al.  
    **Journal:** *Neuropsychopharmacology*. 1996;14(2):111–123.  
    **Usage:** Cited for primary efficacy and safety data in acute exacerbations of schizophrenia (clinical evidence Figure 2).  
    **Publisher Link:** [Nature Publishing Group](https://www.nature.com/articles/1380403)

11. **Reference 11:**  
    **Title:** Olanzapine versus placebo in the treatment of acute mania.  
    **Authors:** Tohen M, Sanger TM, McElroy SL, et al.  
    **Journal:** *Am J Psychiatry*. 1999;156(5):702–709.  
    **Usage:** Cited for primary clinical trial efficacy and safety data in acute bipolar mania (clinical evidence Figure 3).  
    **DOI:** [doi:10.1176/ajp.156.5.702](https://doi.org/10.1176/ajp.156.5.702)

12. **Reference 12:**  
    **Title:** 5-HT<sub>2</sub> and D<sub>2</sub> receptor occupancy of olanzapine in schizophrenia: a PET investigation.  
    **Authors:** Kapur S, Zipursky RB, Remington G, et al.  
    **Journal:** *Am J Psychiatry*. 1998;155(7):921–928.  
    **Usage:** Cited for in vivo PET receptor occupancy across clinical doses (mechanism of action Figure 2).  
    **DOI:** [doi:10.1176/ajp.155.7.921](https://doi.org/10.1176/ajp.155.7.921)

13. **Reference 13:**  
    **Title:** ZYPREXA (olanzapine) Prescribing Information.  
    **Authors / Entity:** U.S. Food and Drug Administration. Silver Spring, MD: FDA; 2021.  
    **Usage:** Cited strictly for proposed pharmacological links between receptor antagonism and specific adverse effects (section 12.2). Not an approved EU label.

### Literature by Clinical Topic Matrix
Structured thematic cross-reference mapping:
1. **Disease background:** References 4, 5
2. **Clinical efficacy in schizophrenia:** Reference 1 (section 5.1); Reference 10
3. **Clinical efficacy in acute mania:** Reference 1 (section 5.1); Reference 11
4. **Recurrence prevention in bipolar disorder:** Reference 1 (section 5.1)
5. **Guideline and formulary context:** References 6, 7, 8, 9
6. **Pharmacology and mechanism of action:** Reference 1 (section 5.1); References 12, 13
7. **Safety, tolerability and metabolic monitoring:** Reference 1 (sections 4.4 and 4.8)

### Medical Information & Marketing Authorisation Contact
- **Medical Enquiries Protocol:** "For questions about Zyprexa, its approved indications or prescribing information, contact the appropriate medical information service for your market. Local representatives of the marketing authorisation holder are listed in the package leaflet."
- **Marketing Authorisation Holder:**
  - **Company:** CHEPLAPHARM Registration GmbH
  - **Street:** Weiler Straße 5e
  - **City / Postal Code:** 79540 Lörrach, Germany
- **Package Leaflet Locator Link:** [Find the package leaflet on the EMA website](https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa)

### Master Clinical Abbreviations Directory
| Abbreviation | Clinical Definition |
|---|---|
| **ALT, AST** | Alanine aminotransferase and aspartate aminotransferase (liver enzymes) |
| **AUC** | Area under the concentration–time curve (pharmacokinetics) |
| **BPRS** | Brief Psychiatric Rating Scale |
| **$C_{\max}$** | Maximum observed plasma concentration |
| **CNS** | Central nervous system |
| **CYP1A2** | Cytochrome P450 1A2 hepatic isoenzyme |
| **EMA** | European Medicines Agency |
| **$K_i$** | Inhibition constant (receptor binding affinity) |
| **LOCF** | Last observation carried forward (statistical methodology) |
| **MADRS** | Montgomery–Åsberg Depression Rating Scale |
| **NMDA** | N-methyl-D-aspartate (ionotropic glutamate receptor) |
| **NMS** | Neuroleptic malignant syndrome |
| **PET** | Positron emission tomography |
| **QTc** | Heart-rate-corrected QT interval on electrocardiogram |
| **SANS** | Scale for the Assessment of Negative Symptoms |
| **SmPC** | Summary of Product Characteristics |
| **YMRS** | Young Mania Rating Scale |

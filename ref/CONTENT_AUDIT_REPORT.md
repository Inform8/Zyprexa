# ZYPREXA HCP Website — `ref` Folder Content Audit & Remediation Plan

> **Target Directory:** `d:\Live Projects\Zyprexa\Zyprexa\ref`  
> **Source Documents Audited:** `ref/src/pages/*.html` (7 pages), `ref/dist/*.html`, `ref/build.py`, `ref/REVIEW-PACK.md`  
> **Date:** October 2026  
> **Scope:** Full audit of missing content, repeated/redundant content, extra/unapproved content, and exact section-by-section remediation specifications.

---

## Executive Summary

A comprehensive audit of all files in the `ref/` folder (`src/pages/` and `dist/`) was conducted against the master content specification and the approved **EU Summary of Product Characteristics (SmPC)** for ZYPREXA (olanzapine) coated tablets.

The audit identified three major categories of content defects across the repository:
1. **Missing Content:** Mandatory regulatory, legal, and clinical elements omitted from pages or footers (e.g., privacy/cookie policies, national pharmacovigilance contact details, detailed trial methodology, and specific formulations).
2. **Repeated / Redundant Content:** Duplication of clinical trial results, study descriptions, safety figures, and guideline summaries across multiple pages (notably between `bipolar-disorder.html` and `clinical-evidence.html`).
3. **Extra / Non-Compliant Content:** Unapproved terminology (e.g., "atypical antipsychotic"), non-EU label citations (US FDA PI section 12.2), overextended headlines ("bipolar disorder" without qualification), and internal MLR draft review notes (`<aside class="review-note">`).

---

## 1. Page-by-Page Audit Matrix

| Page File | Missing Content | Repeated Content | Extra / Unapproved Content | Action Required |
|---|---|---|---|---|
| **`index.html`** (Home) | • Specific national product identifiers / local job code<br>• Direct medical contact link in footer<br>• Terms & Conditions, Privacy Policy, Cookies links | • Approved 3 indications (repeated on Schizophrenia, Bipolar, Safety)<br>• Receptor strip (repeated on MoA Figure 1)<br>• Prescribing info disclaimer (repeated in global footer) | • Term "atypical antipsychotic" (not EU SmPC wording; Note H2)<br>• Headline "in schizophrenia and bipolar disorder" without manic episode qualification (Note H1)<br>• Draft review notes H1 & H2 | • Replace "atypical antipsychotic" with SmPC definition<br>• Qualify bipolar headline<br>• Add placeholder or approved links for legal footer items |
| **`schizophrenia.html`** | • Study durations for acute and continuation trials<br>• Primary literature citation for 5.1 continuation study | • Weight & metabolic safety callout (duplicates Evidence & Safety)<br>• 3 symptom domains (partially overlaps DSM-5 criteria summary in References) | • Educational review citation (Stahl 2018) as sole neurobiology reference without trial data<br>• Internal review notes S1, S2, S3 | • Retain simplified neurobiology but qualify as conceptual model<br>• Cross-link directly to Safety page instead of duplicating metabolic text |
| **`bipolar-disorder.html`** | • Study A exact sample sizes, recurrence rates, and primary citation<br>• Exact definitions of "recurrence" and trial inclusion criteria (Note B1) | • Acute mania trials (Placebo, Divalproex, Tohen 1999) duplicated verbatim from Clinical Evidence<br>• Recurrence studies (Study A, Study B 30.0% vs 38.3%, 18-month co-therapy) duplicated in Clinical Evidence<br>• BAP 2016 guideline summary duplicated in Clinical Evidence<br>• Weight gain stats (17.4%, 39.9%) duplicated in Clinical Evidence & Safety | • Retain disease education and overview here; condense trial deep-dives and point to `clinical-evidence.html`<br>• Consolidate Tohen 1999 trial into `clinical-evidence.html`<br>• Strip internal review notes B1 & B2 |
| **`clinical-evidence.html`** | • Trial design parameters in Study Explorer (duration, blinding, inclusion criteria marked "Not specified" or "Not stated")<br>• Primary publication citations for 7 of the 9 SmPC studies | • Complete duplication of bipolar acute mania trials and recurrence prevention studies from `bipolar-disorder.html`<br>• Long-term weight gain thresholds (duplicates Safety page warnings) | • Review notes E1, E2, E3, E4, E5<br>• Editorial comments acknowledging lack of primary publications | • Make this page the definitive single source of truth for all clinical trial data<br>• Fill missing trial citations where available or state "EU SmPC section 5.1 summary" consistently |
| **`mechanism-of-action.html`** | • Explicit clarification that in vitro affinity does not translate directly to clinical efficacy or potency | • Receptor list (duplicates Home page receptor strip) | • **CRITICAL:** Reference 13 (US FDA PI section 12.2) cited to justify adverse effect links for H1, M1-5, and α1. Non-EU label on EU site!<br>• Review notes M1 & M3 | • Either obtain EU regulatory sign-off for citing US PI for receptor pharmacology, or reword to EU SmPC 5.1 without non-EU citations |
| **`safety-prescribing.html`** | • Specific national reporting contact details (marked as placeholder Appendix V)<br>• Full list of excipients beyond lactose monohydrate | • Reporting adverse reactions section (duplicated in global footer)<br>• Weight and metabolic monitoring schedule (duplicated in Evidence & Bipolar)<br>• Contraindications & warnings cross-references | • Review notes P1, P2, P3, P4, P5<br>• Add target market pharmacovigilance contact details |
| **`references.html`** | • Stable URL or open-access repository for DSM-5-TR reference<br>• Dedicated section for ZYPREXA VELOTAB orodispersible tablets | • Summary of Product Characteristics references 1, 2, 3 duplicated across literature by topic | • US FDA label citation (Ref 13)<br>• Review notes R1, R2, R4 | • Remove or update Ref 13 depending on regulatory direction<br>• Add Velotab SmPC reference if within target market scope |
| **Global Layout (`build.py`)** | • Missing footer items: Privacy Policy, Cookie Preferences, Terms of Use, Trademark notice, Job Code / Prep date | • Adverse reaction reporting paragraph appears in the footer of ALL 7 pages AND as a full section on the Safety page | • Note F1 embedded in the footer across all generated pages | • Add standardized legal links in footer<br>• Strip review notes toggle from release build |

---

## 2. Detailed Breakdown of Content Discrepancies

### 2.1. Missing Content (Omissions)

1. **Footer Regulatory & Legal Items (`build.py` / all pages):**
   - **Privacy Policy, Cookie Preferences, Terms of Use:** Highlighted in review note F1. These are legally required on pharmaceutical websites in the EU/UK. Currently missing completely.
   - **National Reporting Contact Details:** Under pharmacovigilance (SmPC 4.8 / Appendix V), the specific health authority name, online portal URL, and yellow card/reporting contact for the target country must be included.
   - **Job Code & Date of Preparation:** Required by pharmaceutical marketing codes (e.g., EFPIA / ABPI). Currently placeholder: `"Prepared October 2026. Not approved for distribution."`
   - **Brand & Trademark Statement:** ZYPREXA® is a registered trademark of Eli Lilly / Cheplapharm. Missing trademark attribution statement.

2. **Primary Literature & Trial Methodology (`clinical-evidence.html` & `bipolar-disorder.html`):**
   - In the **Study Explorer**, several cells read:
     - Duration: `"Not stated"` (for schizophrenia positive/negative trials and MADRS trial)
     - Endpoint: `"<span class=\"tag tag--neutral\">Not specified</span>"` (for 5 out of 9 studies)
   - In the **12-month recurrence studies**:
     - Study A (vs placebo): Patient sample size ($n$), baseline characteristics, and exact percentage rates of recurrence are absent because they are not reported numerically in the SmPC text.
   - **Formulations:**
     - ZYPREXA VELOTAB (orodispersible formulation) is mentioned in product literature but absent from the website's formulation breakdown.

3. **Medical Information Contact (`references.html`):**
   - Only physical postal address for CHEPLAPHARM in Germany is provided. Direct telephone number, email, and medical inquiry web form link are missing (Review note R4).

---

### 2.2. Repeated / Redundant Content (Duplications)

1. **Bipolar Clinical Trials duplicated across two pages:**
   - Both `bipolar-disorder.html` and `clinical-evidence.html` contain:
     - 3-week acute mania vs placebo summary
     - 3-week acute mania vs divalproex summary
     - Detailed breakdown of **Tohen et al. 1999** (YMRS reduction −10.26 vs −4.88, responder rate 48.6% vs 24.2%, safety profile, +1.65 kg weight gain)
     - 12-month recurrence study vs placebo (Study A)
     - 12-month recurrence study vs lithium (Study B, 30.0% vs 38.3%, $p = 0.055$)
     - 18-month co-therapy study with lithium/valproate
   - **Issue:** Having identical figures, trial descriptions, and data tables on two separate pages causes user confusion and doubles maintenance overhead for regulatory updates.
   - **Fix:** Keep disease education and conceptual clinical positioning on `bipolar-disorder.html`, and consolidate all deep-dive trial methodology, SVG bar charts, and data tables into `clinical-evidence.html`.

2. **Adverse Event Reporting duplicated:**
   - Appears in full text inside `FOOTER` in `ref/build.py` (rendered on all 7 pages).
   - Appears as a full dedicated section (`#reporting`, lines 306–315) on `safety-prescribing.html`.
   - **Fix:** On `safety-prescribing.html`, enhance the section to include the local country reporting form and contact numbers; streamline the footer text.

3. **Weight Gain & Metabolic Statistics duplicated:**
   - Long-term exposure statistics (≥7%, ≥15%, ≥25% thresholds) are displayed on `clinical-evidence.html` (Figure 4), `bipolar-disorder.html` (stat list), and `safety-prescribing.html` (warnings and monitoring).
   - **Fix:** Present high-level monitoring principles on the disease pages with direct jump links to `safety-prescribing.html#monitoring`.

4. **Guideline Statements duplicated:**
   - BAP (2016) and APA (2021) recommendations are detailed in both `bipolar-disorder.html` and `clinical-evidence.html` Table 4.

---

### 2.3. Extra / Non-Compliant / Unapproved Content

1. **Citing Non-EU Prescribing Information on an EU SmPC Site (`mechanism-of-action.html` & `references.html`):**
   - **Reference 13:** *U.S. Food and Drug Administration. ZYPREXA Prescribing Information (2021).*
   - Cited in lines 86, 90, 94 of `mechanism-of-action.html` to link specific receptor antagonism to clinical side effects:
     - $H_1 \to$ Somnolence and increased appetite
     - $M_{1–5} \to$ Anticholinergic adverse effects
     - $\alpha_1 \to$ Orthostatic hypotension and dizziness
   - **Regulatory Risk:** The EU SmPC does not draw these mechanistic adverse effect links. Citing a US FDA package insert on an EU-regulated website without clear justification is a major MLR non-compliance risk (Review note M1).
   - **Remediation:** Remove reference 13 and rephrase to reflect EU SmPC 5.1 pharmacology, or explicitly add a regulatory disclaimer stating this is pharmacodynamic postulation.

2. **Unapproved Terminology (`index.html`):**
   - Line 63: *"Olanzapine is an atypical antipsychotic..."*
   - In the EU SmPC, olanzapine is officially classified as an *"antipsychotic, antimanic and mood stabilising agent"*. The term "atypical" is colloquial/US-derived and not part of the approved EU summary (Review note H2).

3. **Overly Broad Headline (`index.html`):**
   - Line 6: *"Evidence-informed treatment in schizophrenia and bipolar disorder"*
   - In bipolar disorder, oral olanzapine is strictly indicated for moderate to severe manic episodes and recurrence prevention in responders, **not** for bipolar depression or general bipolar maintenance. The headline risks implying an unapproved indication (Review note H1).

4. **Internal Review Notes in Public Markup:**
   - 21 `<aside class="review-note">` tags exist across all HTML files.
   - While hidden by default via CSS (`display: none`), they are easily inspectable in browser devtools and in raw source code. They must be stripped completely from production distribution builds.

---

## 3. Section-by-Section Remediation Instructions

### Step 1: `index.html`
- **Hero Headline:** Change from:
  `Evidence-informed treatment in schizophrenia and bipolar disorder`
  To:
  `Evidence-informed treatment in schizophrenia and manic episodes in bipolar disorder`
- **Pharmacology Intro:** Change:
  `Olanzapine is an atypical antipsychotic...`
  To:
  `Olanzapine is an antipsychotic, antimanic and mood stabilising agent...`

### Step 2: `bipolar-disorder.html`
- **Condense Acute Mania Section:** Replace the duplicate Tohen 1999 trial text and redundant study summaries with a high-level clinical summary and a prominent link:
  `[View complete trial design and data charts in Clinical Evidence →]`
- **Condense Recurrence Prevention Section:** Retain the study design schematic (Figure 2) but point to `clinical-evidence.html` for detailed numerical comparisons.

### Step 3: `clinical-evidence.html`
- **Single Source of Truth:** Keep Figure 1 (MADRS chart), Figure 2 (Beasley 1996), Figure 3 (Tohen 1999), and Figure 4 (Weight gain thresholds).
- **Study Explorer Table:** For studies where duration or specific secondary endpoints are not given in SmPC 5.1, add a clean standard footnote:
  `*Duration/parameters as evaluated in EU registration trials summarised in SmPC 5.1.*`

### Step 4: `mechanism-of-action.html`
- **Resolve Ref 13 (US PI):**
  - Update descriptions for $H_1$, $M$, and $\alpha_1$ receptors to:
    `"Preclinical binding profiles indicate affinity for histamine H1, muscarinic M1–M5, and alpha-1 adrenergic receptors, which may be relevant to observed clinical tolerability profiles."`
  - Remove citation `{{c:fda:12.2}}` and remove Reference 13 from `references.html` unless specifically retained by the medical team.

### Step 5: `safety-prescribing.html`
- **Pharmacovigilance Block:** Add placeholders for National Competent Authority (e.g., HPRA in Ireland, MHRA in UK, BfArM in Germany):
  - Online Reporting URL
  - Contact Telephone & Postal Address

### Step 6: `ref/build.py`
- **Update Footer Template:** Add legal links:
  - `<a href="#privacy">Privacy Policy</a>`
  - `<a href="#cookies">Cookie Preferences</a>`
  - `<a href="#terms">Terms of Use</a>`
  - Add trademark line: `ZYPREXA® is a registered trademark of CHEPLAPHARM.`
- **Build Configuration:** Add a build flag `strip_review_notes=True` to automatically remove all `<aside class="review-note">.*?</aside>` elements during compilation to `dist/`.

---

## 4. Summary Table of Files & Actions

| File Path | Primary Issue | Proposed Fix |
|---|---|---|
| `ref/src/pages/index.html` | "Atypical" terminology; broad bipolar headline | Correct to SmPC terminology; qualify headline |
| `ref/src/pages/bipolar-disorder.html` | Redundant trial text duplicated from Evidence | Streamline to disease focus; cross-link to Evidence |
| `ref/src/pages/clinical-evidence.html` | Explorer table missing metadata; duplicate sections | Standardize SmPC notes; keep as trial repository |
| `ref/src/pages/mechanism-of-action.html` | Citing US FDA label (Ref 13) | Align receptor pharmacology to EU SmPC 5.1 |
| `ref/src/pages/safety-prescribing.html` | Missing national reporting contact | Add pharmacovigilance contact details |
| `ref/src/pages/references.html` | Contains non-EU reference (Ref 13) | Remove or isolate Ref 13 |
| `ref/build.py` | Global footer missing legal links; notes included | Add legal links; strip review notes in dist build |

# ZYPREXA HCP website: seven-page build, review pack (20 Oct 2026, rev. 2: reference binder integrated)

Status: design and development draft for client review, then medical, legal and regulatory (MLR) review. Not approved for distribution.
Built from: "Zyprexa website: complete content copy" (PDF of the master content document) as the content specification, verified against the EU SmPC for ZYPREXA coated tablets.
Deliverables: hosted private preview (claude.ai artifact) and `zyprexa-hcp-site.zip` (seven HTML pages, `assets/site.css`, `assets/site.js`, `build.py`, page sources).

Reviewing tip: the footer of every page has a "Review notes" button. It reveals dashed purple notes in place (IDs H1, S1, P2 and so on, cross-referenced below). They are hidden on the public view and must be stripped from the production build.

---

## 0. Critical dependencies (blocking publication)

1. **Target market not specified.** The site is built on the EU SmPC and says so in the utility bar, hero, safety page and HCP dialog. No other jurisdiction's requirements were mixed in. Confirm countries; replace with local PI where it differs.
2. **Market-specific legal elements missing:** privacy policy, cookie preferences, terms of use (content document footer), national adverse-event reporting system, trademark statement, job code / date of preparation, medical information contact. Footer items without a destination were not built as dead links (note F1).
3. **No ZYPREXA logo or brand guidelines supplied.** The wordmark is set in type.
4. **SmPC revision date** in the supplied copies is {MM/YYYY}. The live EMA EPAR was last updated 27 Feb 2026. Confirm the supplied text matches.
5. **Primary publications partly supplied.** The reference binder supplied Beasley 1996, Tohen 1999 and Kapur 1998, which are now redrawn on the site (§2, §4). The two 12-month recurrence studies in SmPC 5.1 still have no primary papers, so the recurrence evidence module stays at SmPC level (note B1).
6. **Non-EU label cited.** The US prescribing information (binder 8) is cited only for the receptor–adverse-effect links on the MoA page, which the EU SmPC does not make (note M1). Regulatory to confirm this is acceptable in the target market, or remove the links.
7. **Reference binder errors.** Two files are mislabelled, two are summaries rather than papers, and several deck slides attribute data to the wrong paper. See §6.

---

## 1. Content implementation map

| Content document section | Page and section | Treatment |
|---|---|---|
| 1. Recommended structure (7 sections) | Global nav: Home + 6 links; "Prescribing information" button | Built as specified |
| Home: hero, CTAs | index.html opener | Verbatim; indications panel added from SmPC 4.1 |
| Home: regulatory note | Review note H1 | Not public |
| Home: closer look (4 topics + CTAs) | index.html "A closer look" | Verbatim, 2×2 ruled index |
| Home: about olanzapine + CTA | index.html pharmacology band | Verbatim; receptor strip from SmPC 5.1 (note H2 on "atypical") |
| Home: important prescribing information + CTA | index.html dark band | Verbatim; CTA links to EMA PI PDF |
| P2 hero, intro | schizophrenia.html head | Verbatim |
| P2 symptom domains | Figure 1 (three-column domain map) | Verbatim |
| P2 neurobiology + suggested visual | Figure 2 schematic | Verbatim text; visual built (note S2) |
| P2 treatment phases | Figure 3 phase framework | Verbatim |
| P2 role of olanzapine, CTA | "The role of olanzapine" + safety aside | "can maintain" → "is effective in maintaining" (SmPC 4.1 wording) |
| P2 continuity of care | Final section | Verbatim |
| P3 hero, intro | bipolar-disorder.html head | Verbatim |
| P3 mood episodes | Figure 1 episode band | Verbatim |
| P3 treatment objectives | Objectives list | Verbatim |
| P3 olanzapine in bipolar disorder | "Oral olanzapine is indicated for" panel | Verbatim + explicit "not an indication" |
| P3 evidence for acute mania | #acute-mania | Verbatim + "over 3 weeks", "at least 2 weeks" (SmPC) |
| P3 recurrence prevention + suggested module | #recurrence: Figure 2 design flow, Figure 3 chart, 18-month study | SmPC numbers added (note B1) |
| P3 safety considerations, CTA | Final section + weight stats (SmPC 4.8) | Verbatim + 3 SmPC figures |
| P4 hero, intro | clinical-evidence.html head | Verbatim |
| P4 schizophrenia evidence | #schizophrenia + Figure 1 MADRS chart | Verbatim + n = 1,481, MADRS values, p (SmPC) |
| P4 acute mania | #acute-mania | Rewritten to SmPC wording; "only after verification" note removed (editorial) |
| P4 recurrence + suggested study explorer | Study explorer (filterable) + recurrence table | Built (note E1) |
| P4 long-term considerations | #long-term + Figure 2 weight-gain chart | Verbatim + SmPC 4.8 data |
| P4 scientific references + fields table + editorial note | Sources section; note E2 | Fields table is a spec, used to design the explorer, not displayed |
| P5 all sections + suggested visual | mechanism-of-action.html, Figure 1 interactive receptor map | Verbatim; Kapur 1998 PET occupancy section and Figure 2 added (note M3) |
| P6 intro | safety-prescribing.html head | Verbatim |
| P6 dosing table + text | #dosing, Table 1, special populations | Verbatim + SmPC 4.2 detail (note P1) |
| P6 contraindications | #contraindications | Wording aligned to SmPC 4.3 |
| P6 warnings (8 headings) | #warnings | Dementia leads, with SmPC figures; NMS and hepatic wording corrected (note P2); "Other warnings" added |
| P6 monitoring table | #monitoring Figure 1 + Table 2 | Lipids "every 5 years" per SmPC (note P3) |
| P6 interactions | #interactions Table 3 | Expanded from SmPC 4.5 |
| P6 pregnancy, discontinuation | #pregnancy, #discontinuation | Verbatim/SmPC (note P4) |
| P6 adverse reactions, CTAs | #adverse-reactions, #prescribing-information | Verbatim + SmPC ≥1% list and prolactin; CTAs to EMA |
| P7 product information | references.html #product-information | Built with EMA links |
| P7 scientific literature + categories | #literature, "Literature by topic", #further-reading | Categories mapped to SmPC sections |
| P7 medical information + CTA | #medical-information | MAH address only (note R4) |
| 8. Global footer | Footer | 4 of 7 links built (note F1) |

Content-document editorial text kept off the public site: regulatory note (Home), all "Suggested visual / module / interactive feature" notes, "Editorial note" (P4), "Recommended fields" table, "must be verified / checked / remain prominent / reproduced or linked" instructions. Each is preserved as a review note.

---

## 2. Scientific asset inventory

The training deck (51 pages) was rendered and reviewed page by page. It contains text slides, stock photography, icons, a pack shot (p.39) and question slides. **It contains no data charts, receptor diagrams, study figures or scientific illustrations.** The SmPCs contain no figures. So no image was extracted; every figure on the site is drawn as SVG/HTML from SmPC text.

| Asset | Source (file, page/section) | Subject | Site location | Reuse status |
|---|---|---|---|---|
| Symptom domains (3 columns) | Deck p.3 (text slide); content doc P2 | Positive/negative/cognitive | Schizophrenia Fig 1 | Redrawn from copy; no deck artwork |
| Three-hypothesis schematic | Stahl 2018 (binder 2) text and figures; deck p.4 is photo + text | Dopamine, glutamate, serotonin | Schizophrenia Fig 2 | Simplified redraw of the model; Stahl's circuit artwork not reproduced |
| Treatment phases | Deck p.5 (three phase columns) | Course of care | Schizophrenia Fig 3 | Structure adapted; deck text not used |
| Mood episodes band | Deck p.7, p.9 (text) | Mania / mixed / depression | Bipolar Fig 1 | Original layout |
| Recurrence study design flow | SmPC 5.1 text | Two 12-month studies | Bipolar Fig 2 | Built from SmPC text |
| Recurrence bar chart (30.0% vs 38.3%) | SmPC 5.1 | Olanzapine vs lithium | Bipolar Fig 3 | Plotted to scale from SmPC numbers |
| Study explorer table | SmPC 5.1 | 9 study descriptions | Evidence | Built from SmPC text |
| MADRS bar chart (−6.0 vs −3.1) | SmPC 5.1 | Secondary analysis | Evidence Fig 1 | To scale; labelled secondary |
| Weight-gain grouped bars | SmPC 4.8 footnote 1 | Short- vs long-term exposure | Evidence Fig 2 | To scale |
| Receptor map (interactive) | SmPC 5.1 receptor list; deck p.18–21 are text | Receptor families | MoA Fig 1 | Original; no affinity values |
| Receptor strip | SmPC 5.1 | Receptor families | Home | Typographic |
| PET occupancy scatter | Kapur 1998 (binder 9), Table 1 individual values | D2 and 5-HT2 occupancy at 5–20 mg | MoA Fig 2 | Re-plotted from table data; paper's Fig 1 not reproduced; 30–40 mg scans excluded |
| BPRS / SANS bar chart | Beasley 1996 (binder 19), Table 5 | Change at week 6, five arms | Evidence Fig 2 | Re-plotted to scale from table data |
| YMRS change and responder bars | Tohen 1999 (binder 21), Table 2 and text | 3-week acute mania | Evidence Fig 3 | Re-plotted to scale |
| Guideline context table | APA 2021, BAP 2016, WPA 2008, WHO EML 2023 (binder 6, 4, 15, 13) | Positioning | Evidence; Bipolar summary | Paraphrased statements; no ranking claims |
| Monitoring schedule | SmPC 4.4; deck p.29, p.32 (text, conflicting) | Weight/glucose/lipids | Safety Fig 1 + Table 2 | SmPC intervals; marked "not to scale" |
| Dosing, interactions, AR tables | SmPC 4.2, 4.5, 4.8 | Prescribing | Safety Tables 1–3 | HTML tables |
| Pack shots | Deck p.39 | Packaging | Not used | Not a scientific figure; brand approval and current pack artwork needed |
| Deck tables p.6, p.10 (prevalence), p.34–35 (guidelines), p.36–38, p.41, p.43 | Deck | Epidemiology, guidelines, comparisons | Not used | Unsupported or outside EU label (see §4) |

Permissions: no third-party figures are reproduced. Figures from the binder papers are re-plotted from published numeric data with attribution, which normally needs no licence; legal to confirm for the target market. The deck's stock photography was not reused.

---

## 3. Design system (summary)

- **Concept:** clinical monograph. Left-aligned editorial measure on a 12-column grid, hairline rules instead of cards, figures numbered per page with source lines.
- **Colour:** cool paper #F5F7F6, ink #16202A, petrol #0F5C6B (navigation, olanzapine data), ochre #C08A2E (comparator data only), rust #8E2F1B (safety only), purple (review notes only). Full dark theme. Not taken from the deck, reference sites or Cheplapharm corporate palette (product palette proposed, as no product guidelines exist).
- **Type:** Spectral (headings, numerals), Public Sans (text, tables), IBM Plex Mono (labels, figure numbers, units). System fallbacks for all three.
- **Navigation:** utility bar (audience + EMA link), sticky compact header with typeset wordmark, six links with underline active state, persistent "Prescribing information" button. Below 1080 px: "Menu" disclosure panel (Escape closes). No sidebar, no breadcrumbs (two-level site).
- **Page compositions:** Home (split opener with indications panel, 2×2 topic index, pharmacology band, dark PI band); Schizophrenia (editorial with three-column domain map, schematic, phase strip); Bipolar (episode band, indication panel, flow diagram + chart); Evidence (index row, filterable explorer, text-left/figure-right blocks); MoA (dark head, interactive receptor map linked to text); Safety (jump list, formulation key, contraindication panel, two-column warnings all expanded, monitoring chart, tables); References (document triptych, numbered library, topic map).
- **Components:** one table style (numbered caption, heavy top rule, mono column heads, tabular figures, internal horizontal scroll with cue); figure + caption + citation; safety notice; numbered citations linking to the reference entry, which highlights on arrival.
- **Accessibility:** skip link, visible focus ring, semantic headings, `aria-current`, SVG `title/desc` text alternatives, receptor nodes are keyboard buttons, no information carried by colour alone (labels, dash patterns, glyphs), reduced-motion respected. No accordions; no warning is collapsed.
- **SEO:** unique titles and meta descriptions per page, descriptive URLs, `noindex, nofollow` set until market and access rules are confirmed.

---

## 4. Claim-to-source matrix and changes

All substantive claims cite reference 1 (ZYPREXA EU SmPC) with section numbers. Key items:

| Claim | Page | Source | Status |
|---|---|---|---|
| Indications (3) | Home, Schizophrenia, Bipolar | SmPC 4.1 | Verified |
| Starting doses 10/15/10/10 mg; range 5–20 mg; ≥ 24 h intervals; food | Safety | SmPC 4.2 | Verified |
| Special populations (5 mg; Child-Pugh A/B; <18 not recommended) | Safety | SmPC 4.2 | Verified; added |
| Contraindications (2) | Safety | SmPC 4.3 | Verified |
| Dementia: 3.5% vs 1.5% deaths; 1.3% vs 0.4% CVAE | Safety | SmPC 4.4 | Verified; added |
| NMS: discontinue all antipsychotics | Safety | SmPC 4.4 | Corrected from draft |
| Monitoring intervals (weight, glucose, lipids every 5 y, BP > 65 y) | Safety | SmPC 4.4 | Verified; lipids corrected from draft |
| Fluvoxamine Cmax +54%/+77%, AUC +52%/+108%; charcoal 50–60% | Safety | SmPC 4.5 | Verified; added |
| Pregnancy, breastfeeding | Safety | SmPC 4.6 | Verified |
| ≥1% AR list; prolactin ~30% | Safety | SmPC 4.8 | Verified; added |
| 2/2 placebo, 2/3 comparator, > 2,900 pts | Evidence | SmPC 5.1 | Verified |
| MADRS −6.0 vs −3.1, p = 0.001, n = 1,481, baseline 16.6 (secondary) | Evidence | SmPC 5.1 | Verified |
| Mania vs placebo/divalproex 3 wk; haloperidol 6/12 wk; co-therapy 6 wk | Bipolar, Evidence | SmPC 5.1 | Verified |
| Recurrence vs placebo superior; vs lithium 30.0% vs 38.3%, p = 0.055 | Bipolar, Evidence | SmPC 5.1 | Verified |
| 18-month co-therapy not superior | Bipolar, Evidence | SmPC 5.1 | Verified; added for balance |
| Weight ≥7/15/25%: 22.2/4.2/0.8 and 64.4/31.7/12.3 | Evidence | SmPC 4.8 fn 1 | Verified |
| 17.4%, 39.9% weight gain; 4.1% neutropenia (bipolar) | Bipolar | SmPC 4.8 | Verified |
| Receptor families, Ki < 100 nM; 5-HT2 > D2; PET 5-HT2A > D2 | MoA, Home | SmPC 5.1 | Verified |
| H1 → somnolence; muscarinic → anticholinergic; α1 → orthostatic hypotension | MoA | US PI 12.2 (ref 13) | Supported; **non-EU label** (M1) |
| 5-HT2 > 90% at all doses; mean D2 55/73/75/76% at 5/10/15/20 mg | MoA | Kapur 1998 (ref 12) | Verified against Table 1 (M3) |
| Beasley: BPRS −3.1/−6.7/−12.6/−15.2/−12.9; SANS −1.9/−8.7/−6.1/−13.5/−6.6; somnolence 39.1% vs 16.2%; +3.5 kg; dystonia 0% vs 13.0% | Evidence | Beasley 1996 (ref 10) | Verified (E3) |
| Tohen: YMRS −10.26 vs −4.88 (p = 0.02); response 48.6% vs 24.2% (p = 0.004); AEs; +1.65 vs −0.44 kg; ALT 17.6% vs 0% | Evidence, Bipolar | Tohen 1999 (ref 11) | Verified (E4) |
| APA statements 4–7, 10 and grades | Evidence, Schizophrenia | APA 2021 (ref 6) | Verified; no ranking of agents (E5) |
| BAP: severe mania, manic-relapse prevention, lithium first-line, weight | Evidence, Bipolar | BAP 2016 (ref 7) | Verified (B2) |
| No consistent efficacy differences among non-clozapine SGAs; olanzapine more weight/metabolic effects | Evidence | WPA 2008 (ref 8) | Verified |
| Olanzapine therapeutic alternative to risperidone / quetiapine | Evidence, Bipolar | WHO EML 2023 (ref 9) | Verified |
| "Atypical antipsychotic" | Home | Content doc | **Not SmPC wording** (note H2) |
| Disease content (symptoms, episodes, phases) | Schizophrenia, Bipolar | Ref 4 DSM-5-TR (deck's citation) | **Medical to confirm** (S1) |
| Three-hypothesis neurobiology model | Schizophrenia | Stahl 2018 (ref 5) | Verified; review article (S2) |
| Headline "…schizophrenia and bipolar disorder" | Home | Content doc | **MLR to confirm** no implied bipolar depression claim (H1) |

**Source conflicts, resolved in favour of the EU SmPC** (training deck / CCDS differ): indications (CCDS/deck add bipolar depression, adolescents, other uses); contraindications (deck lists dementia psychosis, seizures, hepatic/renal impairment, pregnancy); oral titration (deck: weekly 5 mg steps); IM maximum (deck: 30 mg/day vs SmPC 20 mg/day all formulations); LAI dosing (deck: 210–405 mg every 2–4 weeks); prolactin (deck: "minimal"/"uncommon" vs SmPC very common, ~30%); lipid monitoring (deck: annually); Tohen 1999 journal (deck slide NEJM vs AJP).

**Deck content excluded:** prevalence tables; guideline endorsements and regulatory history; comparison tables vs other antipsychotics; "comparative clinical advantages"; p.41 remission and hazard-ratio figures (misattributed; see §6); high-dose (25–45 mg) studies; EMBLEM effectiveness claim; CATIE/EUFEST claims.

**References verified (20 Oct 2026):** EMA ZYPREXA and ZYPADHERA EPARs and PI PDFs; all 13 cited references checked against the binder PDFs and publisher or DOI pages. Kahn 2008 (EUFEST) was removed from the references page because it is no longer listed as further reading and is not cited.

---

## 5. QA report

**Pages completed:** Home, Understanding Schizophrenia, Bipolar Disorder, Clinical Evidence, Mechanism of Action, Safety and Prescribing Information, References and Resources. Each individually addressable.

**Tested on rendered pages (headless Chromium):**
- All 7 pages at 1440 × 900, 834 × 1112, 390 × 844 (light) and 390 × 844 (dark): no horizontal page scroll; wide tables and diagrams scroll inside their own container with a cue.
- Visual review of every page at desktop and mobile; fixes made (receptor headings with subscripts, bipolar stat list, phase-diagram label, home headline width).
- No duplicate IDs; every internal link and anchor resolves (static check of all pages).
- HCP dialog appears on first visit, is remembered for the session, "I am not" shows guidance.
- Mobile menu opens and navigates; Escape closes it.
- Study explorer filter (Recurrence prevention → 3 of 9).
- Receptor map: keyboard Enter activates node and highlights the matching description.
- Citation link → references page with the entry highlighted.
- Review-notes toggle; first Tab reaches the skip link.
- No script errors. Google Fonts were blocked in the test sandbox, so pages were reviewed with fallback fonts.

**Not yet done:** Safari, Firefox and real-device testing; screen-reader pass; automated contrast audit (tokens chosen for AA by eye); clicking external links in a browser (URLs checked by fetch); viewing the hosted preview with web fonts loaded.

**Rev. 2 checks (after binder integration):** all pages re-run at four viewports with no overflow; no duplicate IDs or broken anchors; new charts reviewed at desktop and mobile, light and dark (Beasley bar label moved inside its bar; Tohen chart split into two panels that stack on phones; guideline table aligned left/top).

**Remaining blockers:** see section 0, plus open review notes H1, H2, S1, S2, M1, M3, B1, B2, E1–E5, P1–P5, R1–R4, F1.

---

## 6. Reference binder verification log

**Numbering.** The binder's file numbers do not match the deck's reference list (for example binder 21 is Tohen 1999; deck ref 21 is Kelly). The site uses its own sequential numbering (refs 1–13).

**File problems**
- *25 "Takahashi"* is actually Taipale H et al., Schizophr Bull 2022;48(4):774–784. *26 "Taipale"* is actually Takahashi M et al., Pragmat Obs Res 2015;6:39–46. The files are swapped.
- *20 Meltzer 2008* is a summary, not the paper. It states clozapine was superior, which contradicts the deck's "comparable". Not cited.
- *7 Thomas 2023 (StatPearls)* is an abridged summary. It calls breastfeeding "generally considered acceptable", which contradicts SmPC 4.6. Not cited.
- *8 FDA PI*: the copy has "MM/YYYY" placeholders, so the revision date cannot be confirmed.

**Deck claims corrected or excluded**

| Deck | Claim | Finding | Action |
|---|---|---|---|
| p.34 | APA "recommends olanzapine first-line" | APA 2021 recommends an antipsychotic and says evidence-based ranking is not possible | Replaced with actual statements (E5) |
| p.36 | Beasley 46-week extension results | Not in the 1996 paper | Not shown |
| p.37 | Tohen 1999 in NEJM; "first-line"; remission rates | Journal is AJP; remission not an endpoint | Corrected (E4) |
| p.37 | Beasley cited for bipolar | Schizophrenia trial | Cited for schizophrenia only |
| p.41 | "LAI 19.0% sustained remission vs 13.7%/14.0%; inpatients 17.1 vs 6.6" | From Takahashi 2015: oral olanzapine monotherapy, Japan, observational, LAI excluded; response and relapse differences not significant | Excluded |
| p.41 | "aHR 0.17, 405 mg/4 weeks" | From Taipale 2022: Finnish registry within-individual analysis vs non-use, not a meta-analysis; LAI | Excluded; candidate for a future ZYPADHERA page with context |
| MoA slides | "Loose binding"; 5-HT2A antagonism improves negative/cognitive symptoms | Not supported by binder sources | Not used (M1) |
| Contraindications slide | Kapur 1998 cited | Kapur is a PET study and does not cover contraindications | Not used |
| Safety slide | Prolactin increase "uncommon" | SmPC 4.8: very common (~30%) | SmPC wording used |

**Not used, out of scope:** Heres 2014 and Seebaluck 2023 cover olanzapine LAI pharmacokinetics and post-injection delirium/sedation syndrome. They belong on a ZYPADHERA page, which is a separate product with its own SmPC.

**Not retrievable:** DSM-5-TR (book). WHO schizophrenia and bipolar fact sheets (deck refs 3 and 5) are cited by the deck only for epidemiology, which the site does not show.

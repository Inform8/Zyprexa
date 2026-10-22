/** Reference dataset — transcribed from the site's existing references list (numbers match in-text citations). */

export type RefCategory = "study" | "guideline" | "regulatory";

export interface Reference {
  n: number;
  title: string;
  authors: string;
  source: string;
  year?: number;
  category: RefCategory;
  /** Finer label shown on the card, e.g. "Review article". */
  kind: string;
  topics: string[];
  usedFor: string;
  links: { label: string; href: string }[];
}

export const TOPICS = [
  "Disease background",
  "Clinical efficacy",
  "Guideline and formulary context",
  "Pharmacology",
  "Product information",
] as const;

const SMPC = "https://www.ema.europa.eu/en/documents/product-information";

export const REFERENCES: Reference[] = [
  {
    n: 1,
    title: "ZYPREXA 2.5 mg, 5 mg, 7.5 mg, 10 mg, 15 mg and 20 mg coated tablets. Summary of Product Characteristics.",
    authors: "CHEPLAPHARM Registration GmbH",
    source: "EU product information, Annex I. European Medicines Agency",
    category: "regulatory",
    kind: "Summary of Product Characteristics",
    topics: ["Product information", "Clinical efficacy", "Pharmacology"],
    usedFor:
      "Cited for indications (4.1), posology (4.2), contraindications (4.3), warnings (4.4), interactions (4.5), pregnancy (4.6), driving (4.7), adverse reactions (4.8) and pharmacology and clinical efficacy (5.1).",
    links: [{ label: "Product information PDF", href: `${SMPC}/zyprexa-epar-product-information_en.pdf` }],
  },
  {
    n: 2,
    title: "ZYPREXA 10 mg powder for solution for injection. Summary of Product Characteristics.",
    authors: "CHEPLAPHARM Registration GmbH",
    source: "EU product information, Annex I. European Medicines Agency",
    category: "regulatory",
    kind: "Summary of Product Characteristics",
    topics: ["Product information"],
    usedFor: "Cited to distinguish the intramuscular formulation.",
    links: [{ label: "Product information PDF", href: `${SMPC}/zyprexa-epar-product-information_en.pdf` }],
  },
  {
    n: 3,
    title:
      "ZYPADHERA 210 mg, 300 mg and 405 mg powder and solvent for prolonged release suspension for injection. Summary of Product Characteristics.",
    authors: "CHEPLAPHARM Registration GmbH",
    source: "EU product information, Annex I. European Medicines Agency",
    category: "regulatory",
    kind: "Summary of Product Characteristics",
    topics: ["Product information"],
    usedFor: "Cited to distinguish the long-acting formulation.",
    links: [{ label: "Product information PDF", href: `${SMPC}/zypadhera-epar-product-information_en.pdf` }],
  },
  {
    n: 4,
    title: "Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR).",
    authors: "American Psychiatric Association",
    source: "Washington, DC: American Psychiatric Association Publishing",
    year: 2022,
    category: "guideline",
    kind: "Diagnostic classification",
    topics: ["Disease background"],
    usedFor:
      "Cited for symptom domains of schizophrenia and features of mood episodes. No stable open-access URL was supplied; use the American Psychiatric Association Publishing edition (2022).",
    links: [],
  },
  {
    n: 5,
    title: "Beyond the dopamine hypothesis of schizophrenia to three neural networks of psychosis: dopamine, serotonin, and glutamate.",
    authors: "Stahl SM",
    source: "CNS Spectr. 2018;23(3):187–191",
    year: 2018,
    category: "study",
    kind: "Review article",
    topics: ["Disease background"],
    usedFor: "Cited for the dopamine, glutamate and serotonin hypotheses (schizophrenia, Figure 2).",
    links: [{ label: "doi:10.1017/S1092852918001013", href: "https://doi.org/10.1017/S1092852918001013" }],
  },
  {
    n: 6,
    title: "The American Psychiatric Association Practice Guideline for the Treatment of Patients With Schizophrenia, Third Edition.",
    authors: "Keepers GA, Fochtmann LJ, Anzia JM, et al.",
    source: "Washington, DC: American Psychiatric Association; 2021. Executive summary: Am J Psychiatry. 2020;177(9):868–872",
    year: 2021,
    category: "guideline",
    kind: "Clinical practice guideline",
    topics: ["Guideline and formulary context"],
    usedFor: "Cited for guideline statements on antipsychotic treatment, continuation and long-acting injectables.",
    links: [{ label: "Executive summary, doi:10.1176/appi.ajp.2020.177901", href: "https://doi.org/10.1176/appi.ajp.2020.177901" }],
  },
  {
    n: 7,
    title:
      "Evidence-based guidelines for treating bipolar disorder: revised third edition recommendations from the British Association for Psychopharmacology.",
    authors: "Goodwin GM, Haddad PM, Ferrier IN, et al.",
    source: "J Psychopharmacol. 2016;30(6):495–553",
    year: 2016,
    category: "guideline",
    kind: "Clinical practice guideline",
    topics: ["Guideline and formulary context"],
    usedFor: "Cited for guideline context in acute mania and long-term treatment of bipolar disorder.",
    links: [{ label: "doi:10.1177/0269881116636545", href: "https://doi.org/10.1177/0269881116636545" }],
  },
  {
    n: 8,
    title:
      "World Psychiatric Association Pharmacopsychiatry Section statement on comparative effectiveness of antipsychotics in the treatment of schizophrenia.",
    authors: "Tandon R, Belmaker RH, Gattaz WF, et al.",
    source: "Schizophr Res. 2008;100(1–3):20–38",
    year: 2008,
    category: "guideline",
    kind: "Consensus statement",
    topics: ["Guideline and formulary context", "Clinical efficacy"],
    usedFor: "Cited for comparative efficacy and tolerability context, and for comparator-dose limitations.",
    links: [{ label: "doi:10.1016/j.schres.2007.11.033", href: "https://doi.org/10.1016/j.schres.2007.11.033" }],
  },
  {
    n: 9,
    title:
      "The selection and use of essential medicines 2023: report of the WHO Expert Committee on Selection and Use of Essential Medicines, 2023 (including the 23rd WHO Model List of Essential Medicines).",
    authors: "World Health Organization",
    source: "Geneva: WHO; 2024 (WHO Technical Report Series, No. 1049). ISBN 978-92-4-008926-6",
    year: 2024,
    category: "guideline",
    kind: "Formulary report",
    topics: ["Guideline and formulary context"],
    usedFor: "Cited for the listing of olanzapine as a therapeutic alternative.",
    links: [],
  },
  {
    n: 10,
    title: "Olanzapine versus placebo and haloperidol: acute phase results of the North American double-blind olanzapine trial.",
    authors: "Beasley CM Jr, Tollefson G, Tran P, et al.",
    source: "Neuropsychopharmacology. 1996;14(2):111–123",
    year: 1996,
    category: "study",
    kind: "Randomised trial",
    topics: ["Clinical efficacy"],
    usedFor: "Cited for the published schizophrenia trial (clinical evidence, Figure 2).",
    links: [{ label: "Publisher page", href: "https://www.nature.com/articles/1380403" }],
  },
  {
    n: 11,
    title: "Olanzapine versus placebo in the treatment of acute mania.",
    authors: "Tohen M, Sanger TM, McElroy SL, et al.",
    source: "Am J Psychiatry. 1999;156(5):702–709",
    year: 1999,
    category: "study",
    kind: "Randomised trial",
    topics: ["Clinical efficacy"],
    usedFor: "Cited for the published acute mania trial (clinical evidence, Figure 3).",
    links: [{ label: "doi:10.1176/ajp.156.5.702", href: "https://doi.org/10.1176/ajp.156.5.702" }],
  },
  {
    n: 12,
    title: "5-HT2 and D2 receptor occupancy of olanzapine in schizophrenia: a PET investigation.",
    authors: "Kapur S, Zipursky RB, Remington G, et al.",
    source: "Am J Psychiatry. 1998;155(7):921–928",
    year: 1998,
    category: "study",
    kind: "PET imaging study",
    topics: ["Pharmacology"],
    usedFor: "Cited for receptor occupancy at clinical doses (mechanism of action, Figure 2).",
    links: [{ label: "doi:10.1176/ajp.155.7.921", href: "https://doi.org/10.1176/ajp.155.7.921" }],
  },
];

export const ABBREVIATIONS: { term: string; definition: string }[] = [
  { term: "ALT, AST", definition: "Alanine and aspartate aminotransferase" },
  { term: "AUC", definition: "Area under the concentration–time curve" },
  { term: "BPRS", definition: "Brief Psychiatric Rating Scale" },
  { term: "CNS", definition: "Central nervous system" },
  { term: "Cmax", definition: "Maximum plasma concentration" },
  { term: "CYP1A2", definition: "Cytochrome P450 1A2" },
  { term: "EMA", definition: "European Medicines Agency" },
  { term: "Ki", definition: "Inhibition constant (binding affinity)" },
  { term: "LOCF", definition: "Last observation carried forward" },
  { term: "MADRS", definition: "Montgomery–Åsberg Depression Rating Scale" },
  { term: "NMDA", definition: "N-methyl-D-aspartate (glutamate receptor)" },
  { term: "NMS", definition: "Neuroleptic malignant syndrome" },
  { term: "PET", definition: "Positron emission tomography" },
  { term: "QTc", definition: "Heart-rate-corrected QT interval" },
  { term: "SANS", definition: "Scale for the Assessment of Negative Symptoms" },
  { term: "SmPC", definition: "Summary of Product Characteristics" },
  { term: "YMRS", definition: "Young Mania Rating Scale" },
];

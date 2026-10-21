/** Central site configuration: navigation, shared asset paths and external links. */

export const ASSETS = {
  logo: "/assets/zyprexa-logo.png",
  illustration: "/assets/brain-illustration.svg",
  productPlaceholder: "/assets/product-placeholder.svg",
} as const;

export const EXTERNAL = {
  smpcPdf:
    "https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf",
  emaPage: "https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa",
} as const;

export interface NavLink {
  label: string;
  href: string;
}
export interface NavSection {
  label: string;
  /** Route of the page that owns this section. */
  href: string;
  links: NavLink[];
}

export const NAV: NavSection[] = [
  {
    label: "Home",
    href: "/",
    links: [
      { label: "Overview", href: "/" },
      { label: "Approved Indications", href: "/#indications" },
      { label: "Explore Key Topics", href: "/#topics" },
      { label: "Important Prescribing Information", href: "/#prescribing-information" },
    ],
  },
  {
    label: "Understanding Schizophrenia",
    href: "/schizophrenia",
    links: [
      { label: "Overview", href: "/schizophrenia" },
      { label: "Symptoms and Symptom Domains", href: "/schizophrenia#symptoms" },
      { label: "Neurobiology", href: "/schizophrenia#neurobiology" },
      { label: "Dopamine Hypothesis", href: "/schizophrenia#dopamine-hypothesis" },
      { label: "Course of Care", href: "/schizophrenia#course-of-care" },
      { label: "Supporting Continuity of Care", href: "/schizophrenia#continuity" },
    ],
  },
  {
    label: "Understanding Bipolar Disorder",
    href: "/bipolar-disorder",
    links: [
      { label: "Overview", href: "/bipolar-disorder" },
      { label: "Mood Episodes", href: "/bipolar-disorder#mood-episodes" },
      { label: "Treatment Objectives", href: "/bipolar-disorder#treatment-objectives" },
      { label: "Approved Indications", href: "/bipolar-disorder#indications" },
      { label: "Evidence in Bipolar Disorder", href: "/bipolar-disorder#acute-mania" },
      { label: "Guidelines and Formulary Context", href: "/bipolar-disorder#guidelines" },
    ],
  },
  {
    label: "Clinical Evidence",
    href: "/clinical-evidence",
    links: [
      { label: "Evidence Overview", href: "/clinical-evidence" },
      { label: "Study Explorer", href: "/clinical-evidence#explorer" },
      { label: "Schizophrenia Studies", href: "/clinical-evidence#schizophrenia" },
      { label: "Acute Mania", href: "/clinical-evidence#acute-mania" },
      { label: "Recurrence Prevention", href: "/clinical-evidence#recurrence" },
      { label: "Long-Term Treatment", href: "/clinical-evidence#long-term" },
      { label: "Published Trials", href: "/clinical-evidence#published-trials" },
    ],
  },
  {
    label: "Mechanism of Action",
    href: "/mechanism-of-action",
    links: [
      { label: "Overview", href: "/mechanism-of-action" },
      { label: "Pharmacological Profile", href: "/mechanism-of-action#pharmacological-profile" },
      { label: "Receptor Binding Profile", href: "/mechanism-of-action#receptor-binding" },
      { label: "Receptor Occupancy", href: "/mechanism-of-action#receptor-occupancy" },
      { label: "From Pharmacology to Clinical Practice", href: "/mechanism-of-action#clinical-practice" },
    ],
  },
  {
    label: "Safety, Monitoring & Prescribing",
    href: "/safety-prescribing",
    links: [
      { label: "Important Safety Information", href: "/safety-prescribing#important-safety" },
      { label: "Dosing and Administration", href: "/safety-prescribing#dosing" },
      { label: "Formulations", href: "/safety-prescribing#formulations" },
      { label: "Key Warnings and Precautions", href: "/safety-prescribing#warnings" },
      { label: "Monitoring Recommendations", href: "/safety-prescribing#monitoring" },
      { label: "Drug Interactions", href: "/safety-prescribing#interactions" },
      { label: "Special Populations", href: "/safety-prescribing#pregnancy" },
      { label: "Adverse Reactions", href: "/safety-prescribing#adverse-reactions" },
      { label: "Discontinuation", href: "/safety-prescribing#discontinuation" },
      { label: "Pharmacovigilance", href: "/safety-prescribing#reporting" },
    ],
  },
  {
    label: "References & Resources",
    href: "/references",
    links: [
      { label: "Search References", href: "/references#search" },
      { label: "Clinical Studies", href: "/references#clinical-studies" },
      { label: "Guidelines", href: "/references#guidelines" },
      { label: "Regulatory Documents", href: "/references#regulatory-documents" },
      { label: "Medical Information", href: "/references#medical-information" },
      { label: "Abbreviations", href: "/references#abbreviations" },
    ],
  },
];

export const FOOTER_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: "Indications",
    links: [
      { label: "Approved indications", href: "/#indications" },
      { label: "Schizophrenia", href: "/schizophrenia" },
      { label: "Bipolar disorder", href: "/bipolar-disorder" },
      { label: "Dosing and administration", href: "/safety-prescribing#dosing" },
    ],
  },
  {
    title: "Evidence",
    links: [
      { label: "Clinical evidence", href: "/clinical-evidence" },
      { label: "Study explorer", href: "/clinical-evidence#explorer" },
      { label: "Mechanism of action", href: "/mechanism-of-action" },
    ],
  },
  {
    title: "Safety",
    links: [
      { label: "Important safety information", href: "/safety-prescribing#important-safety" },
      { label: "Warnings and precautions", href: "/safety-prescribing#warnings" },
      { label: "Reporting adverse reactions", href: "/safety-prescribing#reporting" },
    ],
  },
  {
    title: "References",
    links: [
      { label: "Search references", href: "/references#search" },
      { label: "Regulatory documents", href: "/references#regulatory-documents" },
      { label: "Medical information", href: "/references#medical-information" },
      { label: "Abbreviations", href: "/references#abbreviations" },
    ],
  },
];

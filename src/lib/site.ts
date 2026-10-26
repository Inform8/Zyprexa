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
  patientLeafletPdf:
    "https://www.ema.europa.eu/en/documents/overview/zyprexa-epar-summary-public_en.pdf",
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
    label: "Overview",
    href: "/",
    links: [
      { label: "Indications", href: "/#indications" },
      { label: "Mechanism of action", href: "/#mechanism" },
      { label: "Clinical evidence", href: "/#evidence" },
      { label: "Dosing", href: "/#dosing-glance" },
      { label: "Safety", href: "/#safety" },
    ],
  },
  {
    label: "Disease background",
    href: "/disease-background",
    links: [
      { label: "Schizophrenia", href: "/disease-background#schizophrenia" },
      { label: "Bipolar disorder", href: "/disease-background#bipolar" },
    ],
  },
  {
    label: "Mechanism of action",
    href: "/mechanism-of-action",
    links: [
      { label: "Receptor profile", href: "/mechanism-of-action#receptor-profile" },
      { label: "Receptor occupancy", href: "/mechanism-of-action#occupancy" },
      { label: "Clinical relevance", href: "/mechanism-of-action#interpretation" },
    ],
  },
  {
    label: "Dosing",
    href: "/dosing-administration",
    links: [
      { label: "Formulations", href: "/dosing-administration#formulations" },
      { label: "Starting doses", href: "/dosing-administration#dosing" },
      { label: "Stopping treatment", href: "/dosing-administration#discontinuation" },
    ],
  },
  {
    label: "Safety & monitoring",
    href: "/safety-monitoring",
    links: [
      { label: "Contraindications", href: "/safety-monitoring#contraindications" },
      { label: "Warnings", href: "/safety-monitoring#warnings" },
      { label: "Monitoring", href: "/safety-monitoring#monitoring" },
      { label: "Weight over time", href: "/safety-monitoring#weight" },
      { label: "Interactions", href: "/safety-monitoring#interactions" },
      { label: "Pregnancy", href: "/safety-monitoring#pregnancy" },
      { label: "Adverse reactions", href: "/safety-monitoring#adverse-reactions" },
      { label: "Reporting", href: "/safety-monitoring#reporting" },
    ],
  },
  {
    label: "Clinical evidence",
    href: "/clinical-evidence",
    links: [
      { label: "Schizophrenia", href: "/clinical-evidence#schizophrenia" },
      { label: "Bipolar disorder: manic episodes", href: "/clinical-evidence#manic-episodes" },
      { label: "Bipolar disorder: recurrence prevention", href: "/clinical-evidence#recurrence" },
      { label: "Guidelines", href: "/clinical-evidence#guidelines" },
    ],
  },
  {
    label: "References",
    href: "/references",
    links: [
      { label: "References", href: "/references#literature" },
      { label: "Abbreviations", href: "/references#abbreviations" },
    ],
  },
];

export const FOOTER_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: "Indications",
    links: [
      { label: "Approved indications", href: "/#indications" },
      { label: "Disease background", href: "/disease-background" },
      { label: "Dosing and administration", href: "/dosing-administration" },
    ],
  },
  {
    title: "Evidence",
    links: [
      { label: "Clinical evidence", href: "/clinical-evidence" },
      { label: "Schizophrenia trials", href: "/clinical-evidence#schizophrenia" },
      { label: "Mechanism of action", href: "/mechanism-of-action" },
    ],
  },
  {
    title: "Safety",
    links: [
      { label: "Important safety information", href: "/safety-monitoring#warnings" },
      { label: "Warnings and precautions", href: "/safety-monitoring#warnings" },
      { label: "Reporting adverse reactions", href: "/safety-monitoring#reporting" },
    ],
  },
  {
    title: "References",
    links: [
      { label: "References", href: "/references#literature" },
      { label: "Abbreviations", href: "/references#abbreviations" },
    ],
  },
];

/**
 * Authoritative Country & Regulatory Prescribing Dataset for ZYPREXA
 *
 * Source: "Zyprexa Website - Zyprexa In Your Country.docx"
 * Reviewed: November 2026
 *
 * IMPORTANT – MEDICAL CONTENT:
 * Indication summaries are reproduced verbatim from the approved regulatory texts.
 * Do NOT paraphrase, normalise, or generalise the indication wording.
 *
 * Document Types:
 * - EU markets: Summary of Product Characteristics (SmPC)
 * - Switzerland: Fachinformation (Swissmedic)
 * - United Kingdom: SmPC (MHRA / EMC)
 */

export interface CountryLink {
  label: string;
  url: string;
}

export interface CountryEntry {
  id: string;
  country: string;
  mah: string;
  mahAddress: string;
  sourceType: "eu-smpc" | "national";
  sourceBadge: string;
  documentType: string;
  indication: string;
  hasSwissFootnote?: boolean;
  links: CountryLink[];
  aeRaw: string;
  aeEmail?: string;
  aePhone?: string;
}

const COUNTRY_DATA_UNSORTED: CountryEntry[] = [
  {
    "id": "denmark",
    "country": "Denmark",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg dansk (DA)",
        "url": "https://www.ema.europa.eu/da/documents/product-information/zyprexa-epar-product-information_da.pdf"
      }
    ],
    "aeRaw": "E: drugsafety@advanzpharma.com",
    "aeEmail": "drugsafety@advanzpharma.com",
    "aePhone": ""
  },
  {
    "id": "germany",
    "country": "Germany",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg Deutsch (DE)",
        "url": "https://www.ema.europa.eu/de/documents/product-information/zyprexa-epar-product-information_de.pdf"
      }
    ],
    "aeRaw": "E: [drugsafety@cheplapharm.com](mailto:drugsafety@cheplapharm.com)\nT: +49 7621 593 06-00",
    "aeEmail": "drugsafety@cheplapharm.com",
    "aePhone": "+49 7621 593 06-00"
  },
  {
    "id": "bulgaria",
    "country": "Bulgaria",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg български (BG)",
        "url": "https://www.ema.europa.eu/bg/documents/product-information/zyprexa-epar-product-information_bg.pdf"
      }
    ],
    "aeRaw": "E: [safety@medtr-bg.com](mailto:safety@medtr-bg.com)\nT: +359892290915",
    "aeEmail": "safety@medtr-bg.com",
    "aePhone": "+359892290915"
  },
  {
    "id": "croatia",
    "country": "Croatia",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg hrvatski (HR)",
        "url": "https://www.ema.europa.eu/hr/documents/product-information/zyprexa-epar-product-information_hr.pdf"
      }
    ],
    "aeRaw": "E: nus_pojave@clinres-farmacija.hr",
    "aeEmail": "nus_pojave@clinres-farmacija.hr",
    "aePhone": ""
  },
  {
    "id": "estonia",
    "country": "Estonia",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg eesti (ET)",
        "url": "https://www.ema.europa.eu/et/documents/product-information/zyprexa-epar-product-information_et.pdf"
      }
    ],
    "aeRaw": "E: [pvestonia@centralpharma.ee](mailto:pvestonia@centralpharma.ee)\nT: +3726015540",
    "aeEmail": "pvestonia@centralpharma.ee",
    "aePhone": "+3726015540"
  },
  {
    "id": "hungary",
    "country": "Hungary",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg magyar (HU)",
        "url": "https://www.ema.europa.eu/hu/documents/product-information/zyprexa-epar-product-information_hu.pdf"
      }
    ],
    "aeRaw": "E: [pharmacovigilance@radaydrug.com](mailto:pharmacovigilance@radaydrug.com)\n+36306995570",
    "aeEmail": "pharmacovigilance@radaydrug.com",
    "aePhone": "+36306995570"
  },
  {
    "id": "ireland",
    "country": "Ireland",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg",
        "url": "https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf"
      }
    ],
    "aeRaw": "E: [cheplapharm@redlinepv.co.uk](mailto:cheplapharm@redlinepv.co.uk)\nT: +3531800123000",
    "aeEmail": "cheplapharm@redlinepv.co.uk",
    "aePhone": "+3531800123000"
  },
  {
    "id": "latvia",
    "country": "Latvia",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg latviešu (LV)",
        "url": "https://www.ema.europa.eu/lv/documents/product-information/zyprexa-epar-product-information_lv.pdf"
      }
    ],
    "aeRaw": "E: [pvlatvia@centralpharma.lv](mailto:pvlatvia@centralpharma.lv)\nT: +37128309860",
    "aeEmail": "pvlatvia@centralpharma.lv",
    "aePhone": "+37128309860"
  },
  {
    "id": "lithuania",
    "country": "Lithuania",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg lietuvių (LT)",
        "url": "https://www.ema.europa.eu/lt/documents/product-information/zyprexa-epar-product-information_lt.pdf"
      }
    ],
    "aeRaw": "E: [pvlithuania@centralpharma.lt](mailto:pvlithuania@centralpharma.lt)\nT: +37052430444",
    "aeEmail": "pvlithuania@centralpharma.lt",
    "aePhone": "+37052430444"
  },
  {
    "id": "luxembourg",
    "country": "Luxembourg",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg (NL)",
        "url": "https://www.ema.europa.eu/nl/documents/product-information/zyprexa-epar-product-information_nl.pdf"
      }
    ],
    "aeRaw": "E: [drugsafety@euroceptpharma.com](mailto:drugsafety@euroceptpharma.com)\nT: +32496858749",
    "aeEmail": "drugsafety@euroceptpharma.com",
    "aePhone": "+32496858749"
  },
  {
    "id": "greece",
    "country": "Greece",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg ελληνικά (EL)",
        "url": "https://www.ema.europa.eu/el/documents/product-information/zyprexa-epar-product-information_el.pdf"
      }
    ],
    "aeRaw": "E: safety@excelya.com",
    "aeEmail": "safety@excelya.com",
    "aePhone": ""
  },
  {
    "id": "romania",
    "country": "Romania",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg română (RO)",
        "url": "https://www.ema.europa.eu/ro/documents/product-information/zyprexa-epar-product-information_ro.pdf"
      }
    ],
    "aeRaw": "E: [safety-RO@magnapharm.eu](mailto:safety-RO@magnapharm.eu)\nT: +40372502221",
    "aeEmail": "safety-RO@magnapharm.eu",
    "aePhone": "+40372502221"
  },
  {
    "id": "czech-republic",
    "country": "Czech Republic",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg čeština (CS)",
        "url": "https://www.ema.europa.eu/cs/documents/product-information/zyprexa-epar-product-information_cs.pdf"
      }
    ],
    "aeRaw": "E: drugsafety@pharmareg.sk",
    "aeEmail": "drugsafety@pharmareg.sk",
    "aePhone": ""
  },
  {
    "id": "switzerland",
    "country": "Switzerland",
    "mah": "Cheplapharm Schweiz GmbH",
    "mahAddress": "Huebweg 18-20, 4102 Binningen, Switzerland",
    "sourceType": "national",
    "sourceBadge": "🔵",
    "documentType": "Fachinformation",
    "indication": "Schizophrenia.\nOlanzapine is indicated as monotherapy or in combination with lithium or valproate for the treatment of acute manic episodes in bipolar disorder. \nIf an acute manic episode in patients with bipolar disorder has responded to olanzapine, olanzapine is indicated for relapse prevention.**",
    "hasSwissFootnote": true,
    "links": [
      {
        "label": "Zyprexa Coated Tablet 2.5 mg",
        "url": "https://compendium.ch/product/79621-zyprexa-filmtabl-2-5-mg/mpro"
      }
    ],
    "aeRaw": "E: [medinfo@cheplapharm.ch](mailto:medinfo@cheplapharm.ch)\nT: +41615612121",
    "aeEmail": "medinfo@cheplapharm.ch",
    "aePhone": "+41615612121"
  },
  {
    "id": "spain",
    "country": "Spain",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg español (ES)",
        "url": "https://www.ema.europa.eu/es/documents/product-information/zyprexa-epar-product-information_es.pdf"
      }
    ],
    "aeRaw": "E: fmc.vigilancia@labrubio.com",
    "aeEmail": "fmc.vigilancia@labrubio.com",
    "aePhone": ""
  },
  {
    "id": "united-kingdom",
    "country": "United Kingdom",
    "mah": "Neon Healthcare Ltd",
    "mahAddress": "8 The Chase, John Tate Road, Foxholes Business Park, Hertford, Hertfordshire, SG13 7NN, United Kingdom",
    "sourceType": "national",
    "sourceBadge": "🔵",
    "documentType": "SmPC (MHRA)",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg",
        "url": "https://www.medicines.org.uk/emc/product/15469/smpc/print"
      }
    ],
    "aeRaw": "E: medinfo@neonhealthcare.com",
    "aeEmail": "medinfo@neonhealthcare.com",
    "aePhone": ""
  },
  {
    "id": "france",
    "country": "France",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg français (FR)",
        "url": "https://www.ema.europa.eu/fr/documents/product-information/zyprexa-epar-product-information_fr.pdf"
      }
    ],
    "aeRaw": "E: pharmacovigilance@cheplapharm.fr",
    "aeEmail": "pharmacovigilance@cheplapharm.fr",
    "aePhone": ""
  },
  {
    "id": "italy",
    "country": "Italy",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg italiano (IT)",
        "url": "https://www.ema.europa.eu/it/documents/product-information/zyprexa-epar-product-information_it.pdf"
      }
    ],
    "aeRaw": "E: pv@rpngroup.com",
    "aeEmail": "pv@rpngroup.com",
    "aePhone": ""
  },
  {
    "id": "malta",
    "country": "Malta",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg Malti (MT)",
        "url": "https://www.ema.europa.eu/mt/documents/product-information/zyprexa-epar-product-information_mt.pdf"
      }
    ],
    "aeRaw": "E: pv@charlesdegiorgio.com",
    "aeEmail": "pv@charlesdegiorgio.com",
    "aePhone": ""
  },
  {
    "id": "poland",
    "country": "Poland",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg polski (PL)",
        "url": "https://www.ema.europa.eu/pl/documents/product-information/zyprexa-epar-product-information_pl.pdf"
      }
    ],
    "aeRaw": "E: [phv@komtur.com](mailto:phv@komtur.com)\nT: +48 22 566 26 30",
    "aeEmail": "phv@komtur.com",
    "aePhone": "+48 22 566 26 30"
  },
  {
    "id": "slovakia",
    "country": "Slovakia",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg slovenčina (SK)",
        "url": "https://www.ema.europa.eu/sk/documents/product-information/zyprexa-epar-product-information_sk.pdf"
      }
    ],
    "aeRaw": "E: drugsafety@pharmareg.sk",
    "aeEmail": "drugsafety@pharmareg.sk",
    "aePhone": ""
  },
  {
    "id": "slovenia",
    "country": "Slovenia",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg slovenščina (SL)",
        "url": "https://www.ema.europa.eu/sl/documents/product-information/zyprexa-epar-product-information_sl.pdf"
      }
    ],
    "aeRaw": "E: pharmacovigilance@clinres.si",
    "aeEmail": "pharmacovigilance@clinres.si",
    "aePhone": ""
  },
  {
    "id": "finland",
    "country": "Finland",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg suomi (FI)",
        "url": "https://www.ema.europa.eu/fi/documents/product-information/zyprexa-epar-product-information_fi.pdf"
      }
    ],
    "aeRaw": "E: drugsafety@advanzpharma.com",
    "aeEmail": "drugsafety@advanzpharma.com",
    "aePhone": ""
  },
  {
    "id": "sweden",
    "country": "Sweden",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg svenska (SV)",
        "url": "https://www.ema.europa.eu/sv/documents/product-information/zyprexa-epar-product-information_sv.pdf"
      }
    ],
    "aeRaw": "E: pharmacovigilance.SE@propharmagroup.com",
    "aeEmail": "pharmacovigilance.SE@propharmagroup.com",
    "aePhone": ""
  },
  {
    "id": "iceland",
    "country": "Iceland",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg Íslenska (IS)",
        "url": "https://www.ema.europa.eu/is/documents/product-information/zyprexa-epar-product-information_is.pdf"
      }
    ],
    "aeRaw": "E: drugsafety@advanzpharma.com",
    "aeEmail": "drugsafety@advanzpharma.com",
    "aePhone": ""
  },
  {
    "id": "norway",
    "country": "Norway",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg norsk (NO)",
        "url": "https://www.ema.europa.eu/no/documents/product-information/zyprexa-epar-product-information_no.pdf"
      }
    ],
    "aeRaw": "E: drugsafety@advanzpharma.com",
    "aeEmail": "drugsafety@advanzpharma.com",
    "aePhone": ""
  },
  {
    "id": "netherlands",
    "country": "Netherlands",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg Nederlands (NL)",
        "url": "https://www.ema.europa.eu/nl/documents/product-information/zyprexa-epar-product-information_nl.pdf"
      }
    ],
    "aeRaw": "E: drugsafety@euroceptpharma.com",
    "aeEmail": "drugsafety@euroceptpharma.com",
    "aePhone": ""
  },
  {
    "id": "portugal",
    "country": "Portugal",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg português (PT)",
        "url": "https://www.ema.europa.eu/pt/documents/product-information/zyprexa-epar-product-information_pt.pdf"
      }
    ],
    "aeRaw": "E: pharmacovigilance@owlpharma.pt",
    "aeEmail": "pharmacovigilance@owlpharma.pt",
    "aePhone": ""
  },
  {
    "id": "austria",
    "country": "Austria",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg Deutsch (DE)",
        "url": "https://www.ema.europa.eu/de/documents/product-information/zyprexa-epar-product-information_de.pdf"
      }
    ],
    "aeRaw": "E: drugsafety@cheplapharm.com",
    "aeEmail": "drugsafety@cheplapharm.com",
    "aePhone": ""
  },
  {
    "id": "belgium",
    "country": "Belgium",
    "mah": "Cheplapharm Registration GmbH",
    "mahAddress": "Weiler Str. 5e, 79540 Lörrach, Germany",
    "sourceType": "eu-smpc",
    "sourceBadge": "🟢",
    "documentType": "EU SmPC",
    "indication": "Olanzapine is indicated for the treatment of schizophrenia.\nOlanzapine is effective in maintaining the clinical improvement during continuation therapy in patients who have shown an initial treatment response.\nOlanzapine is indicated for the treatment of moderate to severe manic episode.\nIn patients whose manic episode has responded to olanzapine treatment, olanzapine is indicated for the prevention of recurrence in patients with bipolar disorder",
    "links": [
      {
        "label": "Zyprexa 2.5 mg Nederlands (NL)",
        "url": "https://www.ema.europa.eu/nl/documents/product-information/zyprexa-epar-product-information_nl.pdf"
      },
      {
        "label": "Zyprexa 2.5 mg français (FR)",
        "url": "https://www.ema.europa.eu/fr/documents/product-information/zyprexa-epar-product-information_fr.pdf"
      }
    ],
    "aeRaw": "E: [drugsafety@euroceptpharma.com](mailto:drugsafety@euroceptpharma.com)\nT: +32496858749",
    "aeEmail": "drugsafety@euroceptpharma.com",
    "aePhone": "+32496858749"
  }
];

/** Countries sorted alphabetically for display in the market selector and table. */
export const COUNTRY_DATA: CountryEntry[] = [...COUNTRY_DATA_UNSORTED].sort((a, b) =>
  a.country.localeCompare(b.country, "en")
);

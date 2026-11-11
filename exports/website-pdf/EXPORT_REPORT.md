# ZYPREXA HCP Website — Complete PDF Export Validation Report

- **Date & Time:** 2026-10-28T09:00:31.204Z
- **Framework:** Next.js 16 (React 19)
- **Engine:** Playwright Chromium Headless with High-DPI Scale Factor (2.0)
- **Target Page Size:** A4 Portrait (210mm × 297mm)
- **Output Directory:** `exports/website-pdf/`

---

## 1. Master Deliverables Summary

| File Name | Description | Page Count | File Size |
| :--- | :--- | :---: | :---: |
| **`website-complete-without-popups.pdf`** | Complete website export of all 9 routes in default clean state | **61** | 15.26 MB |
| **`website-complete-with-popups.pdf`** | Complete website export PLUS all documented interactive popup & overlay states | **81** | 24.05 MB |

---

## 2. Individual Route Exports (Version A — Clean Default State)

All 9 website routes were fully captured with zero content omission. All tabs, accordions, details, and reference citations are fully expanded in print layout.

| Route Order | Route Path | Section Title | Pages | Output File |
| :---: | :--- | :--- | :---: | :--- |
| 1 | `/` | **Product Overview** | **6** | `individual-pages/01-overview.pdf` |
| 2 | `/disease-background` | **Disease Background** | **9** | `individual-pages/02-disease-background.pdf` |
| 3 | `/mechanism-of-action` | **Mechanism of Action** | **4** | `individual-pages/03-mechanism-of-action.pdf` |
| 4 | `/dosing-administration` | **Dosing & Administration** | **5** | `individual-pages/04-dosing-administration.pdf` |
| 5 | `/safety-monitoring` | **Safety & Monitoring** | **12** | `individual-pages/05-safety-monitoring.pdf` |
| 6 | `/clinical-evidence` | **Clinical Evidence** | **12** | `individual-pages/06-clinical-evidence.pdf` |
| 7 | `/references` | **References & Abbreviations** | **8** | `individual-pages/07-references.pdf` |
| 8 | `/conditions-of-use` | **Conditions of Use** | **2** | `individual-pages/08-conditions-of-use.pdf` |
| 9 | `/legal` | **Legal & Privacy** | **3** | `individual-pages/09-legal.pdf` |

**Total Clean Website Pages:** 61 pages

---

## 3. Interactive Popup & Overlay States (Version B — With Popups)

Every modal dialog, compliance overlay, mobile navigation drawer, and desktop dropdown panel was captured in its authentic, fully rendered state without truncation:

| State ID | Popup / Overlay Name | Trigger & UI State | Pages | Output File |
| :--- | :--- | :--- | :---: | :--- |
| `popup-hcp-verification-initial` | **HCP Verification Modal - Initial State** | Initial compliance modal requiring visitor to confirm HCP status before accessing prescribing data | **6** | `popup-states/popup-hcp-verification-initial.pdf` |
| `popup-hcp-verification-declined` | **HCP Verification Modal - Non-HCP Declined State** | Advisory overlay informing non-healthcare professionals to consult their physician with EMA package leaflet link | **6** | `popup-states/popup-hcp-verification-declined.pdf` |
| `popup-mobile-navigation-drawer` | **Mobile Navigation Drawer Overlay** | Slide-down mobile navigation panel opened via hamburger menu showing all primary site sections | **6** | `popup-states/popup-mobile-navigation-drawer.pdf` |
| `popup-navigation-dropdowns` | **Navigation Dropdown Panels Showcase** | All 7 interactive header dropdown panels documented with full sub-navigation route links | **2** | `popup-states/popup-navigation-dropdowns.pdf` |

**Total Popup Documentation Pages:** 20 pages

---

## 4. Key Page-Break & Quality Assurance Validations

1. **Heading & Content Coherence:**
   - `h1, h2, h3, h4` have `break-after: avoid !important;` preventing orphaned headings at page bottoms.
   - Related paragraphs, cards, and diagrams remain intact with their respective section headings.

2. **Card & Grid Integrity:**
   - All stat cards, indication cards, evidence cards, receptor cards, and trial cards have `break-inside: avoid !important;`.
   - No card is sliced across page boundaries.

3. **Tables and Data Matrices:**
   - Recommended starting doses table, monitoring schedule, and study occupancy table rows are protected with `break-inside: avoid !important;`.

4. **Multi-Tab & Accordion Completeness:**
   - `/disease-background`: Both **Schizophrenia** and **Bipolar Disorder** tabs are fully expanded and captured.
   - `/clinical-evidence`: All 4 tab panels (**Schizophrenia Trials**, **Acute Manic Episodes Trials**, **Recurrence Prevention Trials**, and **Clinical Practice Guidelines**) are sequentially presented in full.
   - `/safety-monitoring`: All collapsible clinical warning cards (`details`) are opened by default.
   - `/references`: All 44 literature citations, journal links, and "Where it is cited" reference panels are visible. Complete abbreviations glossary is rendered.

5. **Header & Navigation Behavior:**
   - Fixed header is transformed to static positioning on Page 1, preventing annoying repeating sticky headers from covering content on multi-page exports.
   - Responsive burger buttons and skip links are hidden from print view.
   - Full desktop navigation bar is clearly displayed with active indicators.

6. **Color & Branding Fidelity:**
   - Exact Cheplapharm branding colors (deep purple, violet, neutral ink, subtle gradients) and typography are preserved using `-webkit-print-color-adjust: exact`.
   - SVG illustrations, charts, brain artwork, and pharmaceutical product packaging are rendered in high resolution.
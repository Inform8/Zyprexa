#!/usr/bin/env python3
"""Assemble the ZYPREXA HCP site from page partials.

dist/      full HTML documents (deliverable / zip)
artifact/  same, except index.html is body-only (the artifact host wraps the main page)
"""
import json, re, shutil, pathlib

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
EMA_PI = "https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf"
EMA_EPAR = "https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa"

NAV = [
    ("schizophrenia", "schizophrenia.html", "Schizophrenia"),
    ("bipolar", "bipolar-disorder.html", "Bipolar disorder"),
    ("evidence", "clinical-evidence.html", "Clinical evidence"),
    ("moa", "mechanism-of-action.html", "Mechanism of action"),
    ("safety", "safety-prescribing.html", "Safety &amp; prescribing"),
    ("references", "references.html", "References"),
]

ARROW = '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'
DOC = '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4 1.5h5.5L12.5 4.5V14.5h-8.5z M9.5 1.5v3h3 M6 8h4.5 M6 10.5h4.5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>'

REFS = {
    "1": "ZYPREXA coated tablets, Summary of Product Characteristics (EU)",
    "2": "ZYPREXA powder for solution for injection, Summary of Product Characteristics (EU)",
    "3": "ZYPADHERA, Summary of Product Characteristics (EU)",
    "4": "American Psychiatric Association. DSM-5-TR, 2022",
}


REF_ORDER = [
    "pi", "pi-im", "zyp",
    "dsm", "stahl", "apa", "bap", "wpa2008", "eml",
    "beasley", "tohen", "kapur",
]
LEGACY = {"1": "pi", "2": "pi-im", "3": "zyp", "4": "dsm"}


def refnum(key):
    key = LEGACY.get(key, key)
    return REF_ORDER.index(key) + 1


def cite(m):
    keys = m.group(1).split(",")
    sec = m.group(2)
    links = []
    for k in keys:
        n = refnum(k)
        label = f"Reference {n}" + (f", section {sec}" if sec else "")
        links.append(f'<a class="cite" href="references.html#ref-{n}" aria-label="{label}">{n}</a>')
    return "<sup>" + '<span class="cite-sep">,</span>'.join(links) + "</sup>"


def head(meta, body_only):
    title = meta["title"]
    desc = meta["desc"]
    common = f"""<title>{title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="{desc}">
<meta name="robots" content="noindex, nofollow">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Public+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap">
<link rel="stylesheet" href="assets/site.css">"""
    if body_only:
        return common + "\n"
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
{common}
</head>
<body>
"""


def header(active):
    items = []
    for key, href, label in NAV:
        cur = ' aria-current="page"' if key == active else ""
        items.append(f'<li><a href="{href}"{cur}>{label}</a></li>')
    items.append('<li class="nav-pi"><a href="safety-prescribing.html">Prescribing information</a></li>')
    return f"""<a class="skip" href="#main">Skip to content</a>
<div class="utility"><div class="wrap">
  <span>Information for healthcare professionals. Content based on the EU Summary of Product Characteristics.</span>
  <a class="ext" href="{EMA_EPAR}" rel="noopener" target="_blank">EMA product information</a>
</div></div>
<header class="site-header"><div class="wrap">
  <a class="wordmark" href="index.html" aria-label="ZYPREXA olanzapine, home">
    <b>ZYPREXA<sup>®</sup></b><small>olanzapine</small>
  </a>
  <nav class="primary-nav" id="primary-nav" aria-label="Primary">
    <ul>
      {''.join(items)}
    </ul>
  </nav>
  <a class="pi-link" href="safety-prescribing.html">{DOC}Prescribing information</a>
  <button class="menu-btn" type="button" aria-expanded="false" aria-controls="primary-nav">
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.6"/></svg>Menu
  </button>
</div></header>
"""


FOOTER = f"""<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand stack">
        <b>ZYPREXA<sup>®</sup></b> <span class="muted">(olanzapine)</span>
        <p>Information for healthcare professionals.</p>
        <p class="small muted">Marketing authorisation holder: CHEPLAPHARM Registration GmbH, Weiler Straße 5e, 79540 Lörrach, Germany.</p>
      </div>
      <nav aria-label="Footer">
        <h2>On this site</h2>
        <ul>
          <li><a href="references.html#product-information">Product information</a></li>
          <li><a href="safety-prescribing.html">Safety information</a></li>
          <li><a href="references.html#literature">Scientific references</a></li>
          <li><a href="references.html#medical-information">Medical information</a></li>
        </ul>
      </nav>
      <div class="stack">
        <h2>Reporting adverse reactions</h2>
        <p class="small">Report suspected adverse reactions through the national system for your market. Contacts to insert for that market are on the <a href="safety-prescribing.html#reporting">safety page</a>.</p>
      </div>
    </div>
    <div class="footer-legal">
      <span>ZYPREXA® is a registered trademark of CHEPLAPHARM. Prepared October 2026. Job code to be assigned for the target market. Draft for medical, legal and regulatory review. Not approved for distribution.</span>
      <span>
        <a href="#privacy">Privacy Policy</a>
        · <a href="#cookies">Cookie Preferences</a>
        · <a href="#terms">Terms of Use</a>
      </span>
      <div id="privacy"><strong>Privacy Policy.</strong> Placeholder. This reference build does not collect personal data through a form. Replace with the approved policy before distribution.</div>
      <div id="cookies"><strong>Cookie Preferences.</strong> Placeholder. This reference build does not set cookies. Publish a preference control if a later release adds them.</div>
      <div id="terms"><strong>Terms of Use.</strong> Placeholder. Content is for healthcare professionals and does not replace the current approved product information.</div>
    </div>
  </div>
</footer>
<dialog class="hcp" id="hcp-dialog" aria-labelledby="hcp-title">
  <div class="hcp-body">
    <span class="eyebrow">ZYPREXA (olanzapine)</span>
    <h2 id="hcp-title">This website is intended for healthcare professionals</h2>
    <p>It contains information about a prescription-only medicine, based on the EU Summary of Product Characteristics. Please confirm that you are a healthcare professional.</p>
    <div class="actions">
      <button class="btn btn--primary" id="hcp-yes" type="button">I am a healthcare professional</button>
      <button class="btn btn--secondary" id="hcp-no" type="button">I am not</button>
    </div>
    <p id="hcp-not" class="small" tabindex="-1" hidden style="margin-top:1rem">This website is not intended for you. If you have questions about your medicine, please speak with your doctor or pharmacist, or read the package leaflet on the <a class="ext" href="{EMA_EPAR}" target="_blank" rel="noopener">European Medicines Agency website</a>.</p>
  </div>
</dialog>
<script src="assets/site.js" defer></script>
"""


def strip_review_notes(html):
    """Remove internal MLR notes from the release build."""
    return re.sub(r"\s*<aside class=\"review-note\"[\s\S]*?</aside>", "", html)


def render(partial, body_only):
    text = strip_review_notes(partial.read_text())
    m = re.match(r"<!--META (.*?)-->\n", text, re.S)
    meta = json.loads(m.group(1))
    body = text[m.end():]
    body = re.sub(r"\{\{c:([\w,-]+)(?::([\w.]+))?\}\}", cite, body)
    body = re.sub(r"\{\{n:([\w-]+)\}\}", lambda m: str(refnum(m.group(1))), body)
    body = body.replace("{{arrow}}", ARROW).replace("{{doc}}", DOC)
    body = body.replace("{{EMA_PI}}", EMA_PI).replace("{{EMA_EPAR}}", EMA_EPAR)
    out = head(meta, body_only) + header(meta["nav"]) + '<main id="main">\n' + body + "</main>\n" + FOOTER
    if not body_only:
        out += "</body>\n</html>\n"
    return out


def build():
    for target, main_body_only in (("dist", False), ("artifact", True)):
        out = ROOT / target
        if out.exists():
            shutil.rmtree(out)
        (out / "assets").mkdir(parents=True)
        for f in (SRC / "assets").iterdir():
            shutil.copy(f, out / "assets" / f.name)
        for p in sorted((SRC / "pages").glob("*.html")):
            (out / p.name).write_text(render(p, main_body_only and p.name == "index.html"))
    print("built", sorted(x.name for x in (ROOT / "dist").glob("*.html")))


if __name__ == "__main__":
    build()

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <Link href="/" className="logo" style={{ display: "inline-flex", alignItems: "center" }}>
          <img
            src="/assets/zyprexa-logo.png"
            alt="ZYPREXA® (olanzapine)"
            style={{
              height: "32px",
              width: "auto",
              filter: "brightness(0) invert(1)",
              opacity: 0.9,
              display: "block",
            }}
          />
        </Link>
        <div className="row" style={{ marginTop: "14px", marginBottom: "14px" }}>
          <Link href="/#indications">Indications</Link>
          <Link href="/schizophrenia">Schizophrenia</Link>
          <Link href="/bipolar-disorder">Bipolar Disorder</Link>
          <Link href="/clinical-evidence">Clinical Evidence</Link>
          <Link href="/mechanism-of-action">Mechanism of Action</Link>
          <Link href="/safety-prescribing">Safety</Link>
          <Link href="/references">References</Link>
          <Link href="/references#medical">Contact</Link>
          <a
            href="https://www.ema.europa.eu/en/documents/product-information/zyprexa-epar-product-information_en.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            EMA SmPC (PDF) ↗
          </a>
        </div>
        <p>
          This site is intended for healthcare professionals only. Content is based on the approved EU SmPC for
          ZYPREXA coated tablets; always consult the current approved product information before prescribing.
        </p>
        <p style={{ marginTop: "8px", fontSize: "11.5px", opacity: 0.75 }}>
          Marketing Authorisation Holder: CHEPLAPHARM Registration GmbH, Weiler Straße 5e, 79540 Lörrach, Germany.
          Reporting suspected adverse reactions after authorisation of the medicinal product is important. It allows
          continued monitoring of the benefit/risk balance.
        </p>
      </div>
    </footer>
  );
}

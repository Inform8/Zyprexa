import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand stack">
            <b>
              ZYPREXA<sup>®</sup>
            </b>{" "}
            <span className="muted">(olanzapine)</span>
            <p>Information for healthcare professionals.</p>
            <p className="small muted">
              Marketing authorisation holder: CHEPLAPHARM Registration GmbH,
              Weiler Straße 5e, 79540 Lörrach, Germany.
            </p>
          </div>
          <nav aria-label="Footer">
            <h2>On this site</h2>
            <ul>
              <li>
                <Link href="/references#product-information">
                  Product information
                </Link>
              </li>
              <li>
                <Link href="/safety-prescribing">Safety information</Link>
              </li>
              <li>
                <Link href="/references#literature">Scientific references</Link>
              </li>
              <li>
                <Link href="/references#medical-information">
                  Medical information
                </Link>
              </li>
            </ul>
          </nav>
          <div className="stack">
            <h2>Reporting adverse reactions</h2>
            <p className="small">
              Reporting suspected adverse reactions after authorisation of the
              medicinal product is important. It allows continued monitoring of the
              benefit/risk balance. Healthcare professionals are asked to report
              any suspected adverse reactions via their national reporting system.
            </p>
          </div>
        </div>
        <div className="footer-legal">
          <span>
            Information based on the EU Summary of Product Characteristics.
            Prepared October 2026.
          </span>
        </div>
      </div>
    </footer>
  );
}

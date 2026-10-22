import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="w">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-wordmark">
              <b>ZYPREXA<sup>®</sup></b> <span>(olanzapine)</span>
            </p>
            <p>Information for healthcare professionals.</p>
            <p className="footer-note">
              Marketing authorisation holder: CHEPLAPHARM Registration GmbH, Weiler Straße 5e, 79540 Lörrach,
              Germany.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2>On this site</h2>
            <ul className="footer-links">
              <li>
                <Link href="/references#regulatory">Product information</Link>
              </li>
              <li>
                <Link href="/safety-prescribing">Safety information</Link>
              </li>
              <li>
                <Link href="/references#references">Scientific references</Link>
              </li>
              <li>
                <Link href="/references#medical">Medical information</Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2>Reporting adverse reactions</h2>
            <p className="footer-note">
              Report suspected adverse reactions through the national system for your market. Contact details are
              listed under pharmacovigilance on the safety page.
            </p>
            <p className="footer-note">
              <Link href="/safety-prescribing#reporting">National reporting contacts</Link>
            </p>
          </div>
        </div>

        <div className="footer-legal">
          <p>
            This site is intended for healthcare professionals only. Content is based on the approved EU SmPC for
            ZYPREXA coated tablets; always consult the current approved product information before prescribing.
            ZYPREXA® is a registered trademark of CHEPLAPHARM.
          </p>
          <p>Prepared October 2026. Job code to be assigned for the target market.</p>
          <nav aria-label="Legal">
            <ul className="footer-links">
              <li>
                <Link href="/legal#privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/legal#cookies">Cookie Preferences</Link>
              </li>
              <li>
                <Link href="/legal#terms">Terms of Use</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

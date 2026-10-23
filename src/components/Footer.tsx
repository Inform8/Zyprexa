import Link from "next/link";

const CHEPLAPHARM_LOGO_SVG =
  "https://www.cheplapharm-reg.com/_assets/b28ddf122507f153edf02af498f63896/Images/cheplapharm-logo-icons.svg";

const fullDisclaimer =
  "This website contains information on ZYPREXA (olanzapine) coated tablets, which is based on the approved EU Summary of Product Characteristics (SmPC). It is intended for educational and reference purposes only for healthcare professionals. Always consult the current approved product information before prescribing. ZYPREXA® is a registered trademark of CHEPLAPHARM. Prepared October 2026. Job code to be assigned for the target market.";

function CheplapharmLogoIcon({ className = "footer-logo" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={CHEPLAPHARM_LOGO_SVG} alt="CHEPLAPHARM" className={className} />
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function FaxIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="w">
        <div className="footer-grid">
          <div className="footer-col">
            <h2>Address</h2>
            <p>
              CHEPLAPHARM Registration GmbH
              <br />
              Weiler Straße 5e
              <br />
              79540 Lörrach, Germany
            </p>
          </div>

          <div className="footer-col">
            <h2>Contact</h2>
            <ul className="footer-contact">
              <li>
                <PhoneIcon />
                <a href="tel:+4976215930600">+49 7621 593 06-00</a>
              </li>
              <li>
                <FaxIcon />
                <a href="tel:+4976215930698">+49 7621 593 06-98</a>
              </li>
              <li>
                <MailIcon />
                <a href="mailto:info@cheplapharm-reg.com">info@cheplapharm-reg.com</a>
              </li>
            </ul>
          </div>

          <nav className="footer-col" aria-label="Legal">
            <h2>Legal</h2>
            <ul className="footer-links">
              <li>
                <Link href="https://www.cheplapharm-reg.com/en/imprint/" target="_blank" rel="noopener noreferrer">
                  Imprint
                </Link>
              </li>
              <li>
                <Link href="https://www.cheplapharm-reg.com/en/data-privacy/" target="_blank" rel="noopener noreferrer">
                  Data Privacy
                </Link>
              </li>
              <li>
                <Link href="/conditions-of-use">Conditions of Use</Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="footer-disclaimer">{fullDisclaimer}</p>

        <div className="footer-copy">
          <CheplapharmLogoIcon />
          <p>© 2026 CHEPLAPHARM Registration GmbH</p>
        </div>
      </div>
    </footer>
  );
}

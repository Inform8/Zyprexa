import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy policy, cookie preferences and terms of use placeholders for the ZYPREXA healthcare-professional website.",
};

export default function LegalPage() {
  return (
    <main id="app">
      <div className="hero hero--text">
        <div className="w">
          <div>
            <p className="eb">Legal</p>
            <h1 className="serif">Privacy, cookies and terms</h1>
            <p>
              Final legal text for the target market has not been supplied. The sections below are placeholders so
              the required links exist. Replace them with the approved documents before distribution.
            </p>
            <div className="row">
              <a className="btn" href="#privacy">
                Privacy policy →
              </a>
              <a className="btn g" href="#cookies">
                Cookie preferences
              </a>
              <a className="btn g" href="#terms">
                Terms of use
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w">
        <section className="s" id="privacy">
          <h2>Privacy Policy</h2>
          <div className="card">
            <p>
              This website is intended for healthcare professionals. It does not include a contact form, and it does
              not ask for a name, email address or other personal data.
            </p>
            <p>
              Confirmation that the visitor is a healthcare professional is stored in this browser&apos;s session
              storage for the current visit only. That confirmation is not sent to a server.
            </p>
            <p>
              A full privacy policy, including the identity of the data controller and any rights that apply in the
              target market, is to be inserted here when legal provides it.
            </p>
          </div>
        </section>

        <section className="s" id="cookies">
          <h2>Cookie Preferences</h2>
          <div className="card">
            <p>This website does not set cookies. It does not use analytics, advertising or preference cookies.</p>
            <p>
              The healthcare-professional confirmation uses session storage, which is cleared when the browser
              session ends. If a later release adds cookies, a preference control and a cookie list will be published
              here before that release.
            </p>
          </div>
        </section>

        <section className="s" id="terms">
          <h2>Terms of Use</h2>
          <div className="card">
            <p>
              Content is provided for healthcare professionals and is based on the EU Summary of Product
              Characteristics for ZYPREXA coated tablets. It does not replace the current approved product
              information for the market in which the medicine is prescribed.
            </p>
            <p>
              ZYPREXA® is a registered trademark of CHEPLAPHARM. Prepared October 2026. Job code to be assigned for
              the target market.
            </p>
            <p>
              <Link href="/safety-monitoring#reporting">Adverse-reaction reporting contacts</Link>
              {" · "}
              <Link href="/references#medical">Medical information</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

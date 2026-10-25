import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions of Use",
  description: "Conditions of use for the ZYPREXA healthcare-professional website.",
};

export default function ConditionsOfUsePage() {
  return (
    <main id="app">
      <div className="hero hero--text">
        <div className="w">
          <div className="hero-copy">
            <p className="eb">Legal</p>
            <h1 className="serif">Conditions of Use</h1>
            <p>
              Content is provided for healthcare professionals and is based on the EU Summary of Product
              Characteristics for ZYPREXA coated tablets.
            </p>
            <div className="hero-tabs">
              <Link className="btn" href="/safety-monitoring#reporting">
                Adverse-reaction contacts →
              </Link>
              <Link className="btn g" href="/references">
                References
              </Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true" />
        </div>
      </div>

      <div className="w">
        <section className="s">
          <h2>Using this website</h2>
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

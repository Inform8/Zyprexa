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
          <h2>General Conditions of Use</h2>
          <div className="card">
            <p>
              By accessing and using this website, you agree to be bound by the following Conditions of Use. If you
              do not agree with these conditions, please do not use this website.
            </p>
            <p>
              This website has been developed by Cheplapharm Arzneimittel GmbH (hereinafter &quot;CHEPLAPHARM&quot;)
              and is administered by CHEPLAPHARM. We reserve the right to discontinue this website, or to modify it in
              part or in full, at any time and at our sole discretion, without prior notice. This also applies to these
              Conditions of Use, our General Terms and Conditions, and our Conditions of Sale and Delivery, where
              applicable. As changes may be made without advance notice, we recommend reviewing this page each time you
              visit the website.
            </p>
          </div>
        </section>

        <section className="s">
          <h2>Ownership and Permitted Use</h2>
          <div className="card">
            <p>
              All content published on this website &ndash; including text, data, documents and images &ndash; is the
              property of CHEPLAPHARM, unless otherwise indicated. Permission to use this content is granted only on the
              condition that: the relevant copyright notice remains visible on any copy made; the content is used
              strictly for personal, non-commercial purposes; the content is not altered in any way; and any images
              taken from the site are used only together with their accompanying text. Any other use requires
              CHEPLAPHARM&apos;s prior written consent.
            </p>
          </div>
        </section>

        <section className="s">
          <h2>Trademarks and Copyright</h2>
          <div className="card">
            <p>
              All trademarks appearing on this website belong to CHEPLAPHARM or its affiliated companies, unless
              otherwise stated or otherwise identifiable as third-party rights. Unauthorised use of these trademarks, or
              of any other material on this site, is strictly prohibited and may constitute an infringement of copyright,
              trademark or other intellectual property rights.
            </p>
          </div>
        </section>

        <section className="s">
          <h2>Disclaimer and Limitation of Liability</h2>
          <div className="card">
            <p>
              CHEPLAPHARM compiles the information on this website from internal and external sources with due
              professional care, and updates it on an ongoing basis. This website is intended solely to provide general
              information about CHEPLAPHARM and its products and services. No representation or warranty, express or
              implied, is made as to the completeness, accuracy or currency of the information provided. Information that
              was accurate at the time of publication may since have changed.
            </p>
            <p>
              Nothing on this website constitutes medical advice, and it should not be relied upon as a substitute for
              consultation with a qualified healthcare professional. Before relying on any information from this site
              &ndash; including product or safety information &ndash; please verify it independently and consult the
              relevant product&apos;s current Summary of Product Characteristics (SmPC) and Patient Information Leaflet,
              or contact CHEPLAPHARM directly.
            </p>
            <p>
              By using this website, you agree that you do so at your own risk. To the fullest extent permitted by
              applicable law, neither CHEPLAPHARM nor any third party involved in the creation, production or
              transmission of this website shall be liable for any damage or injury arising from access to, or inability
              to access, this website, or from reliance on any information it contains.
            </p>
          </div>
        </section>

        <section className="s">
          <h2>Links to Third-Party Websites</h2>
          <div className="card">
            <p>
              This website may contain links to third-party websites. The inclusion of such links does not imply
              CHEPLAPHARM&apos;s endorsement of their content. CHEPLAPHARM accepts no responsibility for the availability
              or content of any linked third-party website, and no liability for any damage or injury arising from
              reliance on such content. Links are provided for your convenience only, and any website you access via such
              a link is accessed entirely at your own risk.
            </p>
          </div>
        </section>

        <section className="s">
          <h2>Information You Provide to Us</h2>
          <div className="card">
            <p>
              You are solely responsible for the accuracy of any information you submit to CHEPLAPHARM via this website,
              and for ensuring that doing so does not infringe any third party&apos;s rights. Where you submit non-personal
              information (e.g. general feedback or suggestions), you agree that CHEPLAPHARM may use, reproduce and share
              this information without restriction and for any business purpose, including the development, production or
              marketing of products and services. Any personal data you provide will be handled in accordance with our
              Privacy Policy and applicable data protection law, including the EU General Data Protection Regulation
              (GDPR).
            </p>
            <p>
              These Conditions of Use, and any dispute or claim arising out of or in connection with this website, are
              governed by the laws of the Federal Republic of Germany, excluding its conflict-of-law provisions and the
              United Nations Convention on Contracts for the International Sale of Goods (CISG).
            </p>
          </div>
        </section>

        <section className="s">
          <h2>Contact Us</h2>
          <div className="card">
            <p>If you have any questions about these Conditions of Use, please reach out:</p>
            <p>
              Cheplapharm Arzneimittel GmbH Ziegelhof 24, 17489 Greifswald, Germany
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function CountryHero() {
  return (
    <div className="hero hero--text">
      <div className="w">
        <div className="hero-copy">
          <p className="eb">Regulatory &amp; Prescribing Information</p>
          <h1 className="serif">Zyprexa in Your Country</h1>
          <p>
            Local Marketing Authorisation Holders, approved indications, Summary of Product
            Characteristics (SmPC) documentation, and adverse event reporting channels across 30
            countries.
          </p>
          <div className="hero-tabs">
            <a className="btn" href="#country-directory">
              Select country
            </a>
            <a className="btn g" href="#reporting">
              Reporting side effects
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true" />
      </div>
    </div>
  );
}

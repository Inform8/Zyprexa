export default function CountryIntro() {
  return (
    <div className="country-intro-wrap" style={{ marginBottom: 24 }}>
      {/* Intended Audience Note */}
      <div className="country-audience-box">
        <div className="country-audience-icon" aria-hidden="true">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div>
          <h3 className="country-audience-title">Intended Audience Note</h3>
          <p className="country-audience-text">
            This page is intended for healthcare professionals. It provides an overview of
            market-specific prescribing information for Zyprexa across 30 European countries.
            It is not intended for patients or caregivers, who should consult their doctor or
            pharmacist for medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}

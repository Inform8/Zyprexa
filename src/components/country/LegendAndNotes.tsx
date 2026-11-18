export default function LegendAndNotes() {
  return (
    <div className="card country-legend-card" id="legend-notes" style={{ marginTop: 20 }}>
      <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--pri)", marginBottom: 12 }}>
        Regulatory Legend &amp; Footnotes
      </h3>

      <div className="country-legend-grid">
        <div className="country-legend-item">
          <span className="country-legend-badge" aria-hidden="true">
            🟢
          </span>
          <div>
            <strong>EU SmPC in English and official EU languages</strong>
            <p>
              Centralised marketing authorisation granted by the European Commission, supervised by
              the European Medicines Agency (EMA). Applicable across EU/EEA Member States in their
              respective official languages.
            </p>
          </div>
        </div>

        <div className="country-legend-item">
          <span className="country-legend-badge" aria-hidden="true">
            🔵
          </span>
          <div>
            <strong>National equivalent (non-EU market, correct document type by design)</strong>
            <p>
              Locally approved national product documentation: the Fachinformation for
              Switzerland (Swissmedic) and the electronic Medicines Compendium (emc) SmPC for the
              United Kingdom (MHRA).
            </p>
          </div>
        </div>
      </div>

      <div className="country-footnotes-wrap">
        <p className="country-footnote-item">
          <strong>*</strong> This column links to the locally applicable prescribing information for
          each market: the Summary of Product Characteristics (SmPC) for EU markets, the
          Fachinformation for Switzerland, as applicable to each jurisdiction.
        </p>
        <p className="country-footnote-item">
          <strong>**</strong> Verbatim text from locally approved Fachinformation.
        </p>
      </div>
    </div>
  );
}

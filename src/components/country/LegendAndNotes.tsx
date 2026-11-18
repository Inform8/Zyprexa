export default function LegendAndNotes() {
  return (
    <div className="card country-legend-card" id="legend-notes" style={{ marginTop: 20 }}>
      <h3 className="country-legend-title" style={{ fontSize: "18px", fontWeight: 700, color: "var(--pri)", marginBottom: 12 }}>
        Regulatory Legend &amp; Footnotes
      </h3>

      <div className="country-legend-grid">
        <div className="country-legend-item">
          <span className="country-legend-badge" aria-hidden="true">
            🟢
          </span>
          <span className="country-legend-text">
            <strong>EU SmPC in English and official EU languages</strong>
          </span>
        </div>

        <div className="country-legend-item">
          <span className="country-legend-badge" aria-hidden="true">
            🔵
          </span>
          <span className="country-legend-text">
            <strong>National equivalent (non-EU market, correct document type by design)</strong>
          </span>
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

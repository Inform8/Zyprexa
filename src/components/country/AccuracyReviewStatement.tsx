export default function AccuracyReviewStatement() {
  return (
    <section className="s" id="accuracy">
      <div className="card country-accuracy-card">
        <div className="country-accuracy-grid">
          <div>
            <h2 className="country-accuracy-heading">Accuracy and Review Statement</h2>
            <p className="country-accuracy-body">
              This page is reviewed periodically to help ensure it reflects current local prescribing
              information. However, product information can change between reviews. Always consult the
              most recently approved SmPC for your country, available via the links above, rather
              than relying solely on the summaries provided on this page.
            </p>
          </div>
          <div className="country-accuracy-badge-col">
            <div className="country-review-box">
              <span className="country-review-label">Content last reviewed:</span>
              <span className="country-review-date">November 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

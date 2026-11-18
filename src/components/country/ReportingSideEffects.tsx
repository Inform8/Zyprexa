export default function ReportingSideEffects() {
  return (
    <section className="s" id="reporting">
      <div className="card country-alert-card">
        <div className="country-alert-icon" aria-hidden="true">
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
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div className="country-alert-content">
          <h2 className="country-alert-heading">Reporting Side Effects</h2>
          <p className="country-alert-body">
            Reporting suspected adverse reactions after authorisation of a medicinal product is
            important. It allows continued monitoring of the benefit–risk balance of the product.
            Healthcare professionals are asked to report any suspected adverse reactions via the
            national reporting system in their country, using the contact details and links provided
            for their market in the reference directory above.
          </p>
        </div>
      </div>
    </section>
  );
}

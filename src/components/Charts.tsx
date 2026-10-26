export function HBars({
  rows,
  caption,
  title,
}: {
  rows: { label: string; value: string; width: number; tone?: "pri" | "soft" | "muted" }[];
  caption?: string;
  title?: string;
}) {
  return (
    <figure className="card chart-card" style={{ padding: 18, height: "100%", display: "flex", flexDirection: "column" }}>
      {title ? <h3 className="chart-title">{title}</h3> : null}
      <div style={{ flex: "1 1 auto" }}>
        {rows.map((row) => (
          <div className="hbar-row" key={row.label}>
            <span>{row.label}</span>
            <span className="hbar-track" aria-hidden="true">
              <i className={row.tone && row.tone !== "pri" ? row.tone : undefined} style={{ width: `${row.width}%` }} />
            </span>
            <b>{row.value}</b>
          </div>
        ))}
      </div>
      {caption ? <figcaption className="source-line" style={{ marginTop: "auto", paddingTop: 10 }}>{caption}</figcaption> : null}
    </figure>
  );
}

export function VBars({
  rows,
  caption,
  title,
  max,
}: {
  rows: { label: string; value: number; display: string; tone?: "pri" | "soft" }[];
  caption?: string;
  title?: string;
  max: number;
}) {
  return (
    <figure className="card chart-card" style={{ padding: 18, height: "100%", display: "flex", flexDirection: "column" }}>
      {title ? <h3 className="chart-title">{title}</h3> : null}
      <div className="vbars-wrap">
        <div className="vbars" aria-hidden="true">
          {rows.map((row) => (
            <div className="vbar" key={row.label}>
              <strong>{row.display}</strong>
              <i
                className={row.tone === "soft" ? "soft" : undefined}
                style={{ height: `${Math.max(6, (row.value / max) * 160)}px` }}
              />
              <span>{row.label}</span>
            </div>
          ))}
        </div>
      </div>
      {caption ? <figcaption className="source-line" style={{ marginTop: "auto", paddingTop: 10 }}>{caption}</figcaption> : null}
    </figure>
  );
}

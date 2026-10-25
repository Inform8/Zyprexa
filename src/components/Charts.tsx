export function HBars({
  rows,
  caption,
}: {
  rows: { label: string; value: string; width: number; tone?: "pri" | "soft" | "muted" }[];
  caption?: string;
}) {
  return (
    <figure className="card" style={{ padding: 18, height: "100%", display: "flex", flexDirection: "column" }}>
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
  max,
}: {
  rows: { label: string; value: number; display: string; tone?: "pri" | "soft" }[];
  caption?: string;
  max: number;
}) {
  return (
    <figure className="card" style={{ padding: 18 }}>
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
      {caption ? <figcaption className="source-line">{caption}</figcaption> : null}
    </figure>
  );
}

"use client";

import { useId, useState } from "react";
import Link from "next/link";

type Tone = "brand" | "soft" | "alt";

export type ColumnBar = {
  label: string;
  value: number;
  display: string;
  tone?: Tone;
};

export function ColumnChart({
  bars,
  label = "Bar chart",
}: {
  bars: ColumnBar[];
  label?: string;
}) {
  const [active, setActive] = useState(0);
  const max = Math.max(...bars.map((bar) => Math.abs(bar.value)), 1);

  return (
    <div className="fig-col" role="group" aria-label={label}>
      <div className="fig-col__plot">
        {bars.map((bar, index) => {
          const height = Math.max(8, (Math.abs(bar.value) / max) * 100);
          const on = index === active;
          return (
            <button
              key={bar.label}
              type="button"
              className={on ? "fig-col__bar is-on" : "fig-col__bar"}
              aria-pressed={on}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="fig-col__val">{bar.display}</span>
              <span className="fig-col__track">
                <span
                  className={`fig-col__fill tone-${bar.tone ?? "brand"}`}
                  style={{ height: `${height}%` }}
                />
              </span>
              <span className="fig-col__lab">{bar.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export type CurvePoint = {
  label: string;
  value: number;
  display: string;
};

export function AreaChart({
  points,
  yMax = 100,
  band,
  label = "Area chart",
}: {
  points: CurvePoint[];
  yMax?: number;
  band?: { from: number; to: number; label: string };
  label?: string;
}) {
  const [active, setActive] = useState(points.length - 1);
  const reactId = useId().replace(/:/g, "");
  const width = 640;
  const height = 220;
  const pad = { l: 36, r: 12, t: 18, b: 32 };
  const innerW = width - pad.l - pad.r;
  const innerH = height - pad.t - pad.b;
  const xAt = (index: number) =>
    pad.l + (points.length <= 1 ? innerW / 2 : (index / (points.length - 1)) * innerW);
  const yAt = (value: number) => pad.t + innerH - (value / yMax) * innerH;
  const line = points.map((point, index) => `${index === 0 ? "M" : "L"} ${xAt(index)} ${yAt(point.value)}`).join(" ");
  const area = `${line} L ${xAt(points.length - 1)} ${yAt(0)} L ${xAt(0)} ${yAt(0)} Z`;
  const current = points[active];
  const ticks = [0, 25, 50, 75, 100].filter((tick) => tick <= yMax);

  const nearest = (clientX: number, svg: SVGSVGElement) => {
    const rect = svg.getBoundingClientRect();
    const relative = ((clientX - rect.left) / rect.width) * width;
    let best = 0;
    let bestDist = Infinity;
    points.forEach((_, index) => {
      const dist = Math.abs(xAt(index) - relative);
      if (dist < bestDist) {
        best = index;
        bestDist = dist;
      }
    });
    setActive(best);
  };

  return (
    <div className="fig-area" role="group" aria-label={label}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="fig-svg"
        role="img"
        aria-label={current ? `${current.label}, ${current.display}` : label}
        onMouseMove={(event) => nearest(event.clientX, event.currentTarget)}
        onMouseLeave={() => setActive(points.length - 1)}
      >
        <defs>
          <linearGradient id={`fig-area-${reactId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--p2)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--p2)" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              x1={pad.l}
              x2={width - pad.r}
              y1={yAt(tick)}
              y2={yAt(tick)}
              stroke="var(--line)"
              strokeWidth="1"
            />
            <text x={pad.l - 8} y={yAt(tick) + 4} textAnchor="end" className="fig-svg__tick">
              {tick}
            </text>
          </g>
        ))}
        {band && (
          <g>
            <rect
              x={pad.l}
              width={innerW}
              y={yAt(band.to)}
              height={Math.max(0, yAt(band.from) - yAt(band.to))}
              fill="var(--pri)"
              opacity="0.08"
            />
            <text x={pad.l + 8} y={yAt(band.to) + 14} textAnchor="start" className="fig-svg__band">
              {band.label}
            </text>
          </g>
        )}
        <path d={area} fill={`url(#fig-area-${reactId})`} />
        <path d={line} fill="none" stroke="var(--pri)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        {points.map((point, index) => (
          <g key={point.label}>
            <circle
              cx={xAt(index)}
              cy={yAt(point.value)}
              r={index === active ? 6 : 4}
              fill="#fff"
              stroke="var(--pri)"
              strokeWidth="2.5"
            />
            <text x={xAt(index)} y={height - 8} textAnchor="middle" className="fig-svg__tick">
              {point.label}
            </text>
          </g>
        ))}
      </svg>
      {current && (
        <p className="fig-readout">
          <b>{current.label}</b>
          <span>{current.display}</span>
        </p>
      )}
    </div>
  );
}

export type RankRow = {
  label: string;
  score: number;
  note: string;
  href?: string;
};

export function RankBars({ rows, label = "Relative comparison" }: { rows: RankRow[]; label?: string }) {
  const [active, setActive] = useState(0);
  const current = rows[active];

  return (
    <div className="fig-rank" role="group" aria-label={label}>
      <div className="fig-rank__list">
        {rows.map((row, index) => {
          const width = Math.max(8, (row.score / 5) * 100);
          const on = index === active;
          const inner = (
            <>
              <span className="fig-rank__name">{row.label}</span>
              <span className="fig-rank__track">
                <span className="fig-rank__fill" style={{ width: `${width}%` }} />
              </span>
            </>
          );
          if (row.href) {
            return (
              <Link
                key={row.label}
                href={row.href}
                className={on ? "fig-rank__row is-on" : "fig-rank__row"}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                {inner}
              </Link>
            );
          }
          return (
            <button
              key={row.label}
              type="button"
              className={on ? "fig-rank__row is-on" : "fig-rank__row"}
              aria-pressed={on}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              {inner}
            </button>
          );
        })}
      </div>
      {current && <p className="fig-readout fig-readout--block">{current.note}</p>}
    </div>
  );
}

export type PickItem = {
  title: string;
  body: string;
  note?: string;
  tag?: string;
  tagTone?: "alert";
};

export function FigurePicker({ items, label }: { items: PickItem[]; label: string }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="card fig-pick">
      <div className="fig-pick__nav" role="tablist" aria-label={label}>
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={index === active ? "is-on" : undefined}
            onClick={() => setActive(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {current && (
        <div className="fig-pick__body" role="tabpanel">
          <h3>{current.title}</h3>
          <p>{current.body}</p>
          {current.tag && <span className={current.tagTone === "alert" ? "tag r" : "tag"}>{current.tag}</span>}
          {current.note && <p className="fig-readout fig-readout--block">{current.note}</p>}
        </div>
      )}
    </div>
  );
}

export function StepRail({ steps, label }: { steps: { title: string; body: string }[]; label: string }) {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <div className="card fig-steps">
      <div className="fig-steps__rail" role="tablist" aria-label={label}>
        {steps.map((step, index) => (
          <button
            key={step.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={index === active ? "is-on" : undefined}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {step.title}
          </button>
        ))}
      </div>
      {current && (
        <div className="fig-steps__body" role="tabpanel">
          <h3>{current.title}</h3>
          <p>{current.body}</p>
        </div>
      )}
    </div>
  );
}

export function ScheduleMatrix({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; note: string; marks: boolean[] }[];
}) {
  const [active, setActive] = useState(0);
  const current = rows[active];

  return (
    <div className="card fig-matrix">
      <div className="tw">
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.label}
                className={index === active ? "is-on" : undefined}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <th scope="row">{row.label}</th>
                {row.marks.map((marked, markIndex) => (
                  <td key={columns[markIndex]}>
                    <span className={marked ? "fig-matrix__dot is-on" : "fig-matrix__dot"} aria-hidden="true" />
                    <span className="fig-sr">{marked ? "Scheduled" : "Not scheduled"}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {current && (
        <p className="fig-readout fig-readout--block">
          <b>{current.label}.</b> {current.note}
        </p>
      )}
    </div>
  );
}

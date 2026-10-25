"use client";

import { useState, type ReactNode } from "react";

export function DetailTabs({
  label,
  tabs,
}: {
  label: string;
  tabs: { label: string; content: ReactNode }[];
}) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="tabs" role="tablist" aria-label={label}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={i === index ? "on" : ""}
            onClick={() => setIndex(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[index]?.content}</div>
    </div>
  );
}

export function ChartSwitch({
  label,
  views,
}: {
  label: string;
  views: { label: string; content: ReactNode }[];
}) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="tabs" role="group" aria-label={label}>
        {views.map((view, i) => (
          <button
            key={view.label}
            type="button"
            aria-pressed={i === index}
            className={i === index ? "on" : ""}
            onClick={() => setIndex(i)}
          >
            {view.label}
          </button>
        ))}
      </div>
      {views[index]?.content}
    </div>
  );
}

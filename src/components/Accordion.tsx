"use client";

import { useEffect, useId, useState } from "react";

export interface AccordionItem {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

/** Keyboard-accessible accordion. Opens an item automatically when the URL hash targets it. */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const base = useId();
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(items.map((i) => [i.id, !!i.defaultOpen])),
  );

  useEffect(() => {
    const openFromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h && items.some((i) => i.id === h)) {
        setOpen((o) => ({ ...o, [h]: true }));
        requestAnimationFrame(() => document.getElementById(h)?.scrollIntoView({ block: "start" }));
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [items]);

  const allOpen = items.every((i) => open[i.id]);

  return (
    <div className="acc">
      <div className="acc-tools">
        <button
          type="button"
          className="chip"
          onClick={() => setOpen(Object.fromEntries(items.map((i) => [i.id, !allOpen])))}
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>
      {items.map((item) => {
        const isOpen = !!open[item.id];
        const btnId = `${base}-${item.id}-btn`;
        const panelId = `${base}-${item.id}-panel`;
        return (
          <section key={item.id} id={item.id} className={`acc-item${isOpen ? " is-open" : ""}`}>
            <h3>
              <button
                id={btnId}
                type="button"
                className="acc-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen((o) => ({ ...o, [item.id]: !o[item.id] }))}
              >
                <span className="acc-title">
                  {item.eyebrow && <span className="eyebrow">{item.eyebrow}</span>}
                  <span className="acc-name">{item.title}</span>
                </span>
                <svg className="acc-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="M3.5 6 8 10.5 12.5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="acc-panel" data-open={isOpen}>
              <div className="acc-inner">
                <div className="acc-content">{item.children}</div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

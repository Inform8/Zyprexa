"use client";

import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";

export interface HashTab {
  id: string;
  label: string;
}

interface HashTabsContextValue {
  active: string;
  setActive: (id: string) => void;
  tabs: HashTab[];
  label: string;
}

const TabsContext = createContext<HashTabsContextValue>({
  active: "",
  setActive: () => {},
  tabs: [],
  label: "",
});

function readHash() {
  if (typeof window === "undefined") return "";
  return decodeURIComponent(window.location.hash.replace(/^#/, ""));
}

function panelForHash(hash: string, tabs: HashTab[]) {
  if (!hash) return "";
  if (tabs.some((tab) => tab.id === hash)) return hash;
  return document.getElementById(hash)?.closest("[data-panel]")?.getAttribute("data-panel") ?? "";
}

export function HashTabsProvider({
  tabs,
  label,
  children,
}: {
  tabs: HashTab[];
  label: string;
  children: ReactNode;
}) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  useLayoutEffect(() => {
    const apply = () => {
      const panel = panelForHash(readHash(), tabs);
      if (panel) setActive(panel);
    };
    apply();
    window.addEventListener("hashchange", apply);
    window.addEventListener("app-hash", apply);
    return () => {
      window.removeEventListener("hashchange", apply);
      window.removeEventListener("app-hash", apply);
    };
  }, [tabs]);

  useLayoutEffect(() => {
    const hash = readHash();
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el || el.hidden || el.closest("[hidden]")) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, [active]);

  return (
    <TabsContext.Provider value={{ active, setActive, tabs, label }}>
      {children}
    </TabsContext.Provider>
  );
}

export function HashTabBar({ className = "" }: { className?: string }) {
  const { active, setActive, tabs, label } = useContext(TabsContext);
  if (!tabs || tabs.length === 0) return null;

  return (
    <div className={`hero-tabs ${className}`} role="tablist" aria-label={label}>
      {tabs.map((tab) => {
        const selected = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-controls={tab.id}
            aria-selected={selected}
            className={selected ? "on" : ""}
            onClick={() => {
              setActive(tab.id);
              window.history.replaceState(null, "", `#${tab.id}`);
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export function HashTabs({
  tabs,
  label,
  children,
}: {
  tabs: HashTab[];
  label: string;
  children: ReactNode;
}) {
  return (
    <HashTabsProvider tabs={tabs} label={label}>
      <div className="w" style={{ marginTop: 22 }}>
        <HashTabBar className="tabs" />
      </div>
      {children}
    </HashTabsProvider>
  );
}

export function HashPanel({ id, children }: { id: string; children: ReactNode }) {
  const { active } = useContext(TabsContext);
  return (
    <div id={id} data-panel={id} role="tabpanel" aria-labelledby={`tab-${id}`} hidden={active !== id}>
      {children}
    </div>
  );
}

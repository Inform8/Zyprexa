"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function InteractiveEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Study Explorer filter chips
    const chips = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
    const rows = document.querySelectorAll<HTMLTableRowElement>("#study-table tbody tr");
    const countEl = document.getElementById("study-count");

    if (chips.length && rows.length) {
      chips.forEach((chip) => {
        const handleClick = () => {
          const filter = chip.getAttribute("data-filter");
          chips.forEach((c) =>
            c.setAttribute("aria-pressed", String(c === chip))
          );
          let shown = 0;
          rows.forEach((row) => {
            const ind = row.getAttribute("data-ind");
            const hit = filter === "all" || ind === filter;
            row.hidden = !hit;
            if (hit) shown++;
          });
          if (countEl) {
            countEl.textContent = `${shown} of ${rows.length} study descriptions shown`;
          }
        };
        chip.addEventListener("click", handleClick);
      });
    }

    // 2. Receptor Map interactions
    const nodes = document.querySelectorAll<SVGElement>(".rmap .node");
    const spokes = document.querySelectorAll<SVGElement>(".rmap .spoke");
    const articles = document.querySelectorAll<HTMLElement>(".receptor-detail article");

    if (nodes.length) {
      const activate = (id: string | null, scroll: boolean) => {
        if (!id) return;
        nodes.forEach((n) => {
          const match = n.getAttribute("data-target") === id;
          n.classList.toggle("is-active", match);
          n.setAttribute("aria-pressed", String(match));
        });
        spokes.forEach((s) => {
          s.classList.toggle("is-active", s.getAttribute("data-target") === id);
        });
        articles.forEach((a) => {
          a.classList.toggle("is-active", a.id === id);
        });
        if (scroll && window.matchMedia("(max-width: 979px)").matches) {
          const targetEl = document.getElementById(id);
          targetEl?.scrollIntoView({ block: "start" });
        }
      };

      nodes.forEach((node) => {
        const id = node.getAttribute("data-target");
        const onSelect = (e: Event) => {
          e.preventDefault();
          activate(id, true);
        };
        node.addEventListener("click", onSelect);
        node.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            onSelect(e);
          }
        });
      });
    }

    // 3. Reference Hash Highlight
    const highlightRef = () => {
      const hash = window.location.hash.replace("#", "");
      document.querySelectorAll(".refs > li").forEach((li) => {
        li.classList.toggle("is-target", li.id === hash);
      });
    };

    highlightRef();
    window.addEventListener("hashchange", highlightRef);

    return () => {
      window.removeEventListener("hashchange", highlightRef);
    };
  }, [pathname]);

  return null;
}

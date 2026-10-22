"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive enhancements for server-rendered page content:
 *  1. Study explorer (search + indication + endpoint filters)
 *  2. Receptor map selection
 *  3. Scroll-reveal for [data-reveal] blocks
 */
export default function InteractiveEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;

    // 1. Study explorer ------------------------------------------------------
    const table = document.getElementById("study-table");
    if (table) {
      const rows = Array.from(table.querySelectorAll<HTMLTableRowElement>("tbody tr"));
      const indChips = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-filter]"));
      const epChips = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-ep]"));
      const search = document.getElementById("study-search") as HTMLInputElement | null;
      const countEl = document.getElementById("study-count");
      const emptyEl = document.getElementById("study-empty");
      const clearBtn = document.getElementById("study-clear") as HTMLButtonElement | null;
      const wrap = table.closest<HTMLElement>(".table-wrap");
      const state = { ind: "all", ep: "all", q: "" };

      const endpointOf = (row: HTMLTableRowElement) =>
        (row.querySelector(".tag")?.textContent ?? "").trim().toLowerCase();

      const apply = () => {
        let shown = 0;
        rows.forEach((row) => {
          const hit =
            (state.ind === "all" || row.getAttribute("data-ind") === state.ind) &&
            (state.ep === "all" || endpointOf(row) === state.ep) &&
            (!state.q || (row.textContent ?? "").toLowerCase().includes(state.q));
          row.hidden = !hit;
          if (hit) shown++;
        });
        if (countEl) countEl.textContent = `${shown} of ${rows.length} study descriptions shown`;
        if (emptyEl) emptyEl.hidden = shown !== 0;
        if (wrap) wrap.hidden = shown === 0;
        if (clearBtn) clearBtn.disabled = state.ind === "all" && state.ep === "all" && !state.q;
      };

      const bindGroup = (chips: HTMLButtonElement[], attr: string, key: "ind" | "ep") =>
        chips.forEach((chip) =>
          chip.addEventListener(
            "click",
            () => {
              state[key] = chip.getAttribute(attr) ?? "all";
              chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
              apply();
            },
            { signal },
          ),
        );
      bindGroup(indChips, "data-filter", "ind");
      bindGroup(epChips, "data-ep", "ep");

      search?.addEventListener(
        "input",
        () => {
          state.q = search.value.trim().toLowerCase();
          apply();
        },
        { signal },
      );
      clearBtn?.addEventListener(
        "click",
        () => {
          state.ind = "all";
          state.ep = "all";
          state.q = "";
          if (search) search.value = "";
          [...indChips, ...epChips].forEach((c) => {
            const isAll = c.getAttribute("data-filter") === "all" || c.getAttribute("data-ep") === "all";
            c.setAttribute("aria-pressed", String(isAll));
          });
          apply();
        },
        { signal },
      );
    }

    // 2. Receptor map ---------------------------------------------------------
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
        spokes.forEach((s) => s.classList.toggle("is-active", s.getAttribute("data-target") === id));
        articles.forEach((a) => a.classList.toggle("is-active", a.id === id));
        if (scroll && window.matchMedia("(max-width: 979px)").matches) {
          document.getElementById(id)?.scrollIntoView({ block: "start" });
        }
      };
      nodes.forEach((node) => {
        const id = node.getAttribute("data-target");
        const onSelect = (e: Event) => {
          e.preventDefault();
          activate(id, true);
        };
        node.addEventListener("click", onSelect, { signal });
        node.addEventListener(
          "keydown",
          (e) => {
            if ((e as KeyboardEvent).key === "Enter" || (e as KeyboardEvent).key === " ") onSelect(e);
          },
          { signal },
        );
      });
    }

    // 3. Scroll reveal ------------------------------------------------------
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let io: IntersectionObserver | undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (items.length && !reduce && "IntersectionObserver" in window) {
      document.documentElement.classList.add("reveal-ready");
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-visible");
              io?.unobserve(en.target);
            }
          }),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
      );
      items.forEach((el, i) => {
        el.style.setProperty("--reveal-delay", `${(i % 4) * 60}ms`);
        io?.observe(el);
      });
    } else {
      items.forEach((el) => el.classList.add("is-visible"));
    }

    return () => {
      ac.abort();
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}

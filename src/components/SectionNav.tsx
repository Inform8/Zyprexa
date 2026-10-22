"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/components/Header";

const SCROLL_GAP = 14;

function pageForPath(pathname: string) {
  if (pathname === "/") return NAV_ITEMS.find((item) => item.href === "/") ?? null;
  return (
    NAV_ITEMS.find(
      (item) => item.href !== "/" && (pathname === item.href || pathname.startsWith(`${item.href}/`)),
    ) ?? null
  );
}

function readOffset(bar: HTMLElement | null) {
  const root = getComputedStyle(document.documentElement);
  const headerH = parseFloat(root.getPropertyValue("--header-height")) || 64;
  const barH = bar?.getBoundingClientRect().height || 0;
  return headerH + barH + SCROLL_GAP;
}

export default function SectionNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const page = isHome ? null : pageForPath(pathname);
  const sections = page?.secs ?? [];
  const firstId = sections[0]?.id ?? "";
  const [activeId, setActiveId] = useState(firstId);
  const navRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);
  const releaseRef = useRef<(() => void) | null>(null);
  const pathRef = useRef(pathname);

  if (pathRef.current !== pathname) {
    pathRef.current = pathname;
    setActiveId(firstId);
  }

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("header.site-header");
    const apply = () => {
      if (header) {
        const collapsed = header.classList.contains("is-hidden");
        const height = collapsed ? 0 : Math.round(header.offsetHeight);
        document.documentElement.style.setProperty("--header-height", `${height}px`);
      }
      const nav = navRef.current;
      if (nav) {
        const height = Math.round(nav.getBoundingClientRect().height);
        document.documentElement.style.setProperty("--section-nav-height", `${height}px`);
      }
    };

    apply();
    const observer = new ResizeObserver(apply);
    if (header) observer.observe(header);
    if (navRef.current) observer.observe(navRef.current);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, [pathname, sections.length]);

  const updateActive = useCallback(() => {
    if (lockRef.current || sections.length === 0) return;
    const line = readOffset(navRef.current);
    let current = sections[0].id;
    for (const sec of sections) {
      const el = document.getElementById(sec.id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= line + 1) current = sec.id;
    }
    setActiveId((prev) => (prev === current ? prev : current));
  }, [sections]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActive();
      });
    };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [updateActive]);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const link = row.querySelector<HTMLElement>(".is-active");
    if (!link) return;
    const left = link.offsetLeft;
    const right = left + link.offsetWidth;
    if (left < row.scrollLeft) row.scrollLeft = left;
    else if (right > row.scrollLeft + row.clientWidth) row.scrollLeft = right - row.clientWidth;
  }, [activeId]);

  useEffect(() => () => releaseRef.current?.(), []);

  if (sections.length === 0) return null;

  const onClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    releaseRef.current?.();
    lockRef.current = true;
    setActiveId(id);

    const top = window.scrollY + target.getBoundingClientRect().top - readOffset(navRef.current);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
    window.history.replaceState(null, "", `#${id}`);

    let idle = 0;
    let fallback = 0;
    const release = () => {
      window.clearTimeout(idle);
      window.clearTimeout(fallback);
      window.removeEventListener("scroll", onScrollEnd);
      lockRef.current = false;
      if (releaseRef.current === release) releaseRef.current = null;
    };
    const onScrollEnd = () => {
      window.clearTimeout(idle);
      idle = window.setTimeout(release, 120);
    };
    releaseRef.current = release;
    window.addEventListener("scroll", onScrollEnd, { passive: true });
    idle = window.setTimeout(release, reduce ? 40 : 250);
    fallback = window.setTimeout(release, 2000);
  };

  return (
    <nav
      ref={navRef}
      className="section-nav"
      aria-label="On this page"
    >
      <div className="w">
        <div className="section-nav__row" ref={rowRef}>
          {sections.map((sec) => {
            const isActive = sec.id === activeId;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => onClick(event, sec.id)}
              >
                {sec.title}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.getElementById("app");
    const sections = Array.from(root?.querySelectorAll<HTMLElement>("section.s") ?? []);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io: IntersectionObserver | undefined;

    if (!sections.length || reduce || !("IntersectionObserver" in window)) {
      sections.forEach((el) => el.classList.add("is-visible"));
    } else {
      document.documentElement.classList.add("reveal-ready");
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            en.target.classList.add("is-visible");
            io?.unobserve(en.target);
          }),
        { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
      );

      sections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) return;
        el.classList.add("is-pending");
        io?.observe(el);
      });
    }

    return () => {
      io?.disconnect();
      document.documentElement.classList.remove("reveal-ready");
      sections.forEach((el) => el.classList.remove("is-pending", "is-visible"));
    };
  }, [pathname]);

  return <div className="page-enter">{children}</div>;
}

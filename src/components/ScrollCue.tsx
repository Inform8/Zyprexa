"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollCue() {
  const pathname = usePathname();

  useEffect(() => {
    const markScroll = () => {
      document.querySelectorAll(".table-wrap, .fig-scroll").forEach((el) => {
        el.classList.toggle("is-scrollable", el.scrollWidth > el.clientWidth + 2);
      });
    };

    markScroll();
    window.addEventListener("resize", markScroll);
    return () => window.removeEventListener("resize", markScroll);
  }, [pathname]);

  return null;
}

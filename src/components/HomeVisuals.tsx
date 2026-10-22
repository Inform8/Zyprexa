import type { ReactNode } from "react";

export function HeroBrain() {
  return (
    <svg viewBox="0 0 560 420" role="img" aria-label="Stylised illustration of a human brain">
      <defs>
        <radialGradient id="hb-glow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#ddd6fe" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#c4b5fd" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hb-fold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f3ff" />
          <stop offset="50%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <ellipse cx="300" cy="210" rx="210" ry="170" fill="url(#hb-glow)" />
      <g fill="none" stroke="url(#hb-fold)" strokeWidth="10" strokeLinecap="round">
        <path d="M210 250c-40-10-70-50-62-100 8-48 52-78 104-74 18-36 62-58 108-48 52 12 86 58 80 112 36 18 58 58 48 100-12 48-58 74-108 70-16 28-52 44-92 36-46-8-78-46-78-96z" />
        <path d="M248 120c18 28 16 62-4 92" />
        <path d="M300 108c8 36 2 74-18 108" />
        <path d="M352 128c22 24 28 62 12 98" />
        <path d="M188 210c40 8 78 8 118-8 28-12 62-10 96 8" />
        <path d="M206 268c36 16 84 18 128 2 32-12 70-8 104 12" />
      </g>
      <g fill="#f5f3ff">
        <circle cx="230" cy="168" r="4" />
        <circle cx="286" cy="150" r="5" />
        <circle cx="348" cy="176" r="4" />
        <circle cx="250" cy="230" r="3.5" />
        <circle cx="320" cy="214" r="4.5" />
        <circle cx="372" cy="236" r="3.5" />
        <circle cx="274" cy="286" r="4" />
      </g>
    </svg>
  );
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="46" fill="#f5f3ff" />
      {children}
    </svg>
  );
}

export function TopicArt({ kind }: { kind: "brain" | "wave" | "bars" | "network" | "shield" | "book" }) {
  if (kind === "brain") {
    return (
      <Frame>
        <path d="M42 70c-8-4-12-14-8-22 4-8 14-10 20-6 4-8 16-10 22-4 10 2 16 12 12 22 8 4 10 14 4 20-6 8-16 8-22 4-4 6-14 8-20 4-8-2-12-10-8-18z" fill="none" stroke="#7c3aed" strokeWidth="2.4" />
        <path d="M52 52c4 6 4 12 0 18M66 50c2 8 0 16-4 22M48 68c8 2 16 0 24-4" fill="none" stroke="#a78bfa" strokeWidth="2" />
      </Frame>
    );
  }
  if (kind === "wave") {
    return (
      <Frame>
        <path d="M24 62c10-18 18-18 28 0s18 18 28 0 18-18 28 0" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 78c10-14 18-14 28 0s18 14 28 0 18-14 28 0" fill="none" stroke="#c4b5fd" strokeWidth="2.4" strokeLinecap="round" />
      </Frame>
    );
  }
  if (kind === "bars") {
    return (
      <Frame>
        <path d="M34 82V58M50 82V46M66 82V36M82 82V50" stroke="#8b5cf6" strokeWidth="8" strokeLinecap="round" />
      </Frame>
    );
  }
  if (kind === "network") {
    return (
      <Frame>
        <g stroke="#c4b5fd" strokeWidth="1.6">
          <path d="M40 48 60 36l24 14-8 28-28 6z" fill="none" />
          <path d="M40 48 52 70M60 36 52 70M84 50 72 78M52 70 72 78" />
        </g>
        <g fill="#7c3aed">
          <circle cx="40" cy="48" r="4" />
          <circle cx="60" cy="36" r="4" />
          <circle cx="84" cy="50" r="4" />
          <circle cx="52" cy="70" r="4" />
          <circle cx="72" cy="78" r="4" />
        </g>
      </Frame>
    );
  }
  if (kind === "shield") {
    return (
      <Frame>
        <path d="M60 28 86 40v22c0 16-12 28-26 34-14-6-26-18-26-34V40z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.4" />
        <path d="M60 42v28M48 56h24" stroke="#8b5cf6" strokeWidth="2.4" strokeLinecap="round" />
      </Frame>
    );
  }
  return (
    <Frame>
      <path d="M36 40h28c8 0 14 4 18 10v34c-8-6-16-8-24-8H36z" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.2" />
      <path d="M84 50c6 2 10 8 10 14v20c-6-4-12-6-18-6" fill="none" stroke="#a78bfa" strokeWidth="2.2" />
    </Frame>
  );
}

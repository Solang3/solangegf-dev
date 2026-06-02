"use client";

import { useState } from "react";
import { VIBES } from "@/lib/vibes";
import { useVibeId, setVibe } from "@/lib/useVibe";

export default function VibeShuffle() {
  const id = useVibeId();
  const [spin, setSpin] = useState(0);

  const shuffle = () => {
    const cur = document.documentElement.getAttribute("data-vibe");
    const others = VIBES.filter((v) => v.id !== cur);
    const pick = others[Math.floor(Math.random() * others.length)] ?? VIBES[0];
    setVibe(pick.id);
    setSpin((s) => s + 1);
  };

  return (
    <button
      type="button"
      onClick={shuffle}
      aria-label="Shuffle vibe"
      title="cambiá la onda del sitio"
      className="group inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden
        style={{
          transform: `rotate(${spin * 90}deg)`,
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="16" cy="8" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="8" cy="16" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="16" cy="16" r="1.3" fill="currentColor" stroke="none" />
      </svg>
      <span className="hidden uppercase sm:inline">{id}</span>
    </button>
  );
}

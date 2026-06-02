"use client";

import { getVibe } from "@/lib/vibes";
import { useVibeId, setVibe } from "@/lib/useVibe";

export default function ThemeToggle() {
  const id = useVibeId();
  const dark = getVibe(id).dark; // sólo para el ícono

  // Lee la onda actual del DOM (robusto ante clicks rápidos):
  // clara → ink (B&N oscuro); oscura → blueprint (B&N claro).
  const toggle = () => {
    const cur = document.documentElement.getAttribute("data-vibe") || "blueprint";
    setVibe(getVibe(cur).dark ? "blueprint" : "ink");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light" : "Switch to dark"}
      title={dark ? "light mode" : "dark mode"}
      className="inline-flex h-7 w-7 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-ink"
    >
      {dark ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

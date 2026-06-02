"use client";

import { useEffect, useState } from "react";
import { DEFAULT_VIBE } from "./vibes";

/** Lee la vibe actual de <html data-vibe> y se mantiene sincronizado (toggle ↔ shuffle). */
export function useVibeId(): string {
  const [id, setId] = useState(DEFAULT_VIBE);
  useEffect(() => {
    const read = () =>
      setId(document.documentElement.getAttribute("data-vibe") || DEFAULT_VIBE);
    read();
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-vibe"],
    });
    return () => mo.disconnect();
  }, []);
  return id;
}

/** Aplica una vibe y la persiste. Lo usan tanto el toggle como el shuffle. */
export function setVibe(id: string) {
  document.documentElement.setAttribute("data-vibe", id);
  try {
    localStorage.setItem("solangegf-vibe", id);
  } catch {}
}

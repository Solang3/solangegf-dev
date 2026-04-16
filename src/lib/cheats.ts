"use client";

import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const STORAGE_KEY = "solangegf-cheats";
const EVENT = "solangegf-cheats-changed";

function readCheats(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "1";
}

function writeCheats(enabled: boolean) {
  if (typeof window === "undefined") return;
  if (enabled) window.localStorage.setItem(STORAGE_KEY, "1");
  else window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function useCheatsEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(readCheats());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return enabled;
}

export function useKonamiListener(onActivate?: (enabled: boolean) => void) {
  const cbRef = useRef(onActivate);
  useEffect(() => {
    cbRef.current = onActivate;
  }, [onActivate]);

  useEffect(() => {
    const buffer: string[] = [];
    const wordBuffer: string[] = [];
    const WORD_TRIGGER = "konami";

    const handler = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      buffer.push(key);
      if (buffer.length > KONAMI.length) buffer.shift();
      const konamiMatch =
        buffer.length === KONAMI.length &&
        buffer.every((k, i) => k === KONAMI[i]);

      if (key.length === 1 && /[a-z]/.test(key)) {
        wordBuffer.push(key);
        if (wordBuffer.length > WORD_TRIGGER.length) wordBuffer.shift();
      } else if (key !== "Shift") {
        wordBuffer.length = 0;
      }
      const wordMatch = wordBuffer.join("") === WORD_TRIGGER;

      if (konamiMatch || wordMatch) {
        buffer.length = 0;
        wordBuffer.length = 0;
        const next = !readCheats();
        writeCheats(next);
        cbRef.current?.(next);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
}

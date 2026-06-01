"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

export default function ProPortalKonami() {
  const router = useRouter();
  const [warping, setWarping] = useState(false);

  useEffect(() => {
    const buffer: string[] = [];
    const word: string[] = [];

    const handler = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      buffer.push(key);
      if (buffer.length > KONAMI.length) buffer.shift();
      const konami =
        buffer.length === KONAMI.length &&
        buffer.every((k, i) => k === KONAMI[i]);

      if (key.length === 1 && /[a-z]/.test(key)) {
        word.push(key);
        if (word.length > 5) word.shift();
      } else if (key !== "Shift") {
        word.length = 0;
      }

      if (konami || word.join("") === "jugar") {
        buffer.length = 0;
        word.length = 0;
        setWarping(true);
        window.setTimeout(() => router.push("/playwithme"), 620);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [router]);

  if (!warping) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] grid place-items-center bg-ink text-paper"
      style={{ animation: "reveal-rise 0.4s ease-out" }}
    >
      <span
        className="text-[11px] tracking-[0.5em]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        ◆ ENTERING PLAYGROUND…
      </span>
    </div>
  );
}

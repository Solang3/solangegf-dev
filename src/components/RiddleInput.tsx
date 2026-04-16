"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RiddleInput({
  answer,
  placeholder = "...",
}: {
  answer: string;
  placeholder?: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const controls = useAnimationControls();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleaned = value.trim().toLowerCase().replace(/^\/+/, "");
    if (cleaned === answer) {
      router.push("/" + answer);
    } else {
      setError(true);
      await controls.start({
        x: [0, -8, 8, -6, 6, -3, 3, 0],
        transition: { duration: 0.4 },
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <motion.div
        animate={controls}
        className={`flex items-baseline rounded-md border px-3 py-2 text-lg transition-colors ${
          error
            ? "border-[var(--color-neon-magenta)]"
            : "border-[var(--color-grid)] focus-within:border-[var(--color-neon-cyan)]"
        }`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span className="text-[var(--color-text-muted)]">solangegf.dev/</span>
        <input
          type="text"
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError(false);
          }}
          className="ml-0.5 flex-1 bg-transparent text-[var(--color-text)] outline-none placeholder:text-[var(--color-grid)]"
          style={{
            fontFamily: "var(--font-mono)",
            caretColor: "var(--color-neon-magenta)",
          }}
        />
      </motion.div>
      <div
        className="mt-2 flex items-center justify-between text-[10px] tracking-[0.3em]"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {error ? (
          <span className="text-[var(--color-neon-magenta)]">
            × NO. PROBÁ DE NUEVO.
          </span>
        ) : (
          <span className="text-[var(--color-text-muted)]">
            ENTER PARA CONFIRMAR
          </span>
        )}
      </div>
    </form>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import RiddleInput from "@/components/RiddleInput";

export default function Puerta1() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 3px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 130, damping: 22 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <p
          className="text-[10px] tracking-[0.35em] text-[var(--color-neon-cyan)]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          ◆ PUERTA I · ACERTIJO 01
        </p>

        <p
          className="mt-10 text-2xl leading-10 text-[var(--color-text)] md:text-3xl md:leading-[2.8rem]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span aria-hidden className="text-[var(--color-neon-magenta)]">
            “
          </span>
          Soy el momento donde la noche deja de ser noche pero aún no amanece.
          Tu tía me habló a mí, y yo no dormía.
          <span aria-hidden className="text-[var(--color-neon-magenta)]">
            ”
          </span>
        </p>

        <p className="mt-10 text-sm text-[var(--color-text-muted)]">
          Escribí mi nombre abajo (o en la URL del browser).
        </p>

        <RiddleInput answer="madrugada" placeholder="respuesta..." />

        <div className="mt-16 flex items-center gap-6 text-xs">
          <Link
            href="/"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            ← volver al hogar
          </Link>
          <span
            className="text-[9px] tracking-[0.3em] text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            PISTA · HORA + IDIOMA
          </span>
        </div>
      </motion.div>
    </div>
  );
}

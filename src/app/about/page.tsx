"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 20%, black 10%, transparent 75%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20 md:py-28"
      >
        <p
          className="text-[10px] tracking-[0.35em] text-[var(--color-neon-yellow)]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          ◆ SOBRE MÍ · BORRADOR
        </p>
        <h1
          className="mt-6 text-5xl font-semibold leading-none md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FACC15 0%, #F472B6 100%)",
            }}
          >
            Sobre mí
          </span>
        </h1>

        <div className="mt-10 space-y-5 text-base leading-8 text-[var(--color-text-muted)]">
          <p>
            Arquitecta casi-recibida, frontend desde 1994, argentina en CABA,
            freelance. Tía de{" "}
            <span className="text-[var(--color-text)]">Killian</span> y{" "}
            <span className="text-[var(--color-text)]">Mora</span>, human de{" "}
            <span className="text-[var(--color-text)]">Rehia</span> la gata. El
            cannabis es mi terapia — de germinar a consumir.
          </p>
          <p>
            Voy a rellenar este espacio con calma. Por ahora, lo importante ya
            está en el{" "}
            <Link href="/" className="text-[var(--color-neon-yellow)] hover:underline">
              hero
            </Link>{" "}
            y en el{" "}
            <Link href="/atlas" className="text-[var(--color-neon-yellow)] hover:underline">
              atlas
            </Link>
            .
          </p>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            ← volver al hogar
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

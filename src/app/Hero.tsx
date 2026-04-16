"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Proyectos" },
  { href: "/stories", label: "Historias" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contact", label: "Contacto" },
];

const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 130, damping: 20 },
  },
};

const nameGradient = {
  backgroundImage:
    "linear-gradient(90deg, #F472B6 0%, #22D3EE 55%, #FACC15 100%)",
};

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 38%, black 30%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 38%, black 30%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 3px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(244,114,182,0.18), rgba(34,211,238,0.08) 40%, transparent 70%)",
        }}
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-[10px] tracking-[0.3em] text-[var(--color-neon-cyan)]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          SOLANGEGF.DEV
        </Link>
        <nav
          className="flex gap-6 text-sm"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      <motion.main
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-24"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          ◆ WELCOME · EST.{" "}
          <Link
            href="/puerta-1"
            aria-label="portal oculto"
            className="crt-flicker inline-block transition-all duration-200 hover:text-[var(--color-neon-cyan)] hover:[text-shadow:0_0_12px_rgba(34,211,238,0.9)]"
          >
            1994
          </Link>
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-8 text-5xl leading-[1.02] font-semibold tracking-tight md:text-7xl lg:text-[8rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Hola, soy{" "}
          <span className="bg-clip-text text-transparent" style={nameGradient}>
            Solange
          </span>
          .
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-lg leading-8 md:text-xl md:leading-9"
        >
          <span style={{ color: "var(--color-neon-magenta)" }}>
            full-stack AI developer
          </span>
          <span className="text-[var(--color-text-muted)]">·</span>
          <span style={{ color: "var(--color-neon-cyan)" }}>builder</span>
          <span className="text-[var(--color-text-muted)]">·</span>
          <span style={{ color: "var(--color-neon-yellow)" }}>cool aunt</span>
          <span className="text-[var(--color-text-muted)]">·</span>
          <span className="text-[var(--color-text)]">gamer</span>
        </motion.p>

        <motion.div variants={item} className="mt-14 flex flex-wrap gap-4">
          <CTA href="/projects" variant="primary">
            proyectos
          </CTA>
          <CTA href="/stories">historias</CTA>
          <CTA href="/about">sobre mí</CTA>
          <CTA href="/contact">decime hola</CTA>
        </motion.div>
      </motion.main>

      <footer className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 text-xs text-[var(--color-text-muted)]">
        <span style={{ fontFamily: "var(--font-accent)" }} className="text-[9px] tracking-widest">
          PLAYER 1
        </span>
        <span>CABA · ARG</span>
      </footer>
    </div>
  );
}

function CTA({
  href,
  variant = "ghost",
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center rounded-full px-6 py-3 text-sm tracking-wide transition-all";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-neon-magenta)] text-[var(--color-crt)] font-semibold hover:shadow-[0_0_36px_rgba(244,114,182,0.45)]"
      : "border border-[var(--color-grid)] text-[var(--color-text)] hover:border-[var(--color-neon-cyan)] hover:text-[var(--color-neon-cyan)]";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
    >
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    </motion.div>
  );
}

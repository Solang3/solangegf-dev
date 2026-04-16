"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "email", value: "solangegf@gmail.com", href: "mailto:solangegf@gmail.com" },
  { label: "github", value: "@solang3", href: "https://github.com/solang3" },
  { label: "linkedin", value: "solangegonzalez", href: "https://www.linkedin.com/in/solangegonzalez" },
  { label: "x", value: "@Solang3", href: "https://x.com/Solang3" },
  { label: "instagram", value: "@solang3.gf", href: "https://www.instagram.com/solang3.gf" },
];

export default function ContactPage() {
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
          className="text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          ◆ DECIME HOLA
        </p>
        <h1
          className="mt-6 text-5xl font-semibold leading-none md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F472B6 0%, #22D3EE 100%)",
            }}
          >
            Hola
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
          Si querés laburar conmigo, contarme una historia, o solo decir
          hola — elegí tu canal.
        </p>

        <ul className="mt-12 divide-y divide-[var(--color-grid)] border-y border-[var(--color-grid)]">
          {links.map((l) => (
            <li key={l.label} className="flex items-center justify-between py-4">
              <span
                className="text-[10px] tracking-[0.35em] text-[var(--color-text-muted)]"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                {l.label.toUpperCase()}
              </span>
              <a
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={l.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="text-[var(--color-text)] transition-colors hover:text-[var(--color-neon-cyan)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {l.value}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-xs italic text-[var(--color-text-muted)]">
          (próximamente: form con confetti al enviar — porque sí.)
        </p>

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

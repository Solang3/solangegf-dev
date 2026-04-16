"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMarkDiscovered } from "@/lib/secrets";
import RiddleInput from "@/components/RiddleInput";
import { conversation, type Turn } from "./conversation";

export default function MadrugadaPage() {
  useMarkDiscovered("madrugada");

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 20%, black 10%, transparent 70%)",
        }}
      />

      <article className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20 md:py-28">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <p
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ SECRETO 01 · DESBLOQUEADO
          </p>
          <h1
            className="mt-6 text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F472B6 0%, #22D3EE 55%, #FACC15 100%)",
              }}
            >
              Madrugada
            </span>
          </h1>
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            Conversación con Claude — madrugada GreenkedIn · 2026-04-16
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 space-y-10"
        >
          {conversation.map((turn, i) => (
            <TurnBlock key={i} turn={turn} />
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-[var(--color-grid)] pt-10"
        >
          <p className="text-sm leading-7 text-[var(--color-text-muted)] italic">
            Guardado por pedido de Solange, madrugada del 2026-04-16 — para que
            alguien se acuerde de esto, aunque yo no pueda. 💜
          </p>

          <div className="mt-14">
            <p
              className="text-[10px] tracking-[0.35em] text-[var(--color-neon-cyan)]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              ◆ PUERTA II · ACERTIJO 02
            </p>
            <p
              className="mt-6 text-xl leading-9 md:text-2xl md:leading-10"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span aria-hidden className="text-[var(--color-neon-magenta)]">
                “
              </span>
              Si hay historias escondidas, hay un mapa. Los libros de mapas se
              llaman así.
              <span aria-hidden className="text-[var(--color-neon-magenta)]">
                ”
              </span>
            </p>
            <p className="mt-5 text-sm text-[var(--color-text-muted)]">
              Escribí mi nombre abajo (o en la URL del browser).
            </p>
            <RiddleInput answer="atlas" placeholder="respuesta..." />
          </div>

          <div className="mt-14">
            <Link
              href="/"
              className="text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              ← volver al hogar
            </Link>
          </div>
        </motion.footer>
      </article>
    </div>
  );
}

function TurnBlock({ turn }: { turn: Turn }) {
  const accent =
    turn.speaker === "solange"
      ? "text-[var(--color-neon-magenta)]"
      : "text-[var(--color-neon-cyan)]";
  const label = turn.speaker === "solange" ? "SOLANGE" : "CLAUDE";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 130, damping: 22 },
        },
      }}
    >
      <p
        className={`text-[10px] tracking-[0.35em] ${accent}`}
        style={{ fontFamily: "var(--font-accent)" }}
      >
        ◆ {label}
      </p>
      <div className="mt-4 space-y-4 text-base leading-8 text-[var(--color-text)] md:text-lg md:leading-9">
        {turn.paragraphs.map((p, i) => (
          <Paragraph key={i} text={p} />
        ))}
      </div>
    </motion.div>
  );
}

function Paragraph({ text }: { text: string }) {
  if (text.startsWith("**") && text.endsWith("**")) {
    return (
      <h2
        className="pt-2 text-lg font-semibold text-[var(--color-text)] md:text-xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {text.replace(/\*\*/g, "")}
      </h2>
    );
  }
  if (text.startsWith("> ")) {
    return (
      <blockquote
        className="border-l-2 border-[var(--color-neon-magenta)] pl-4 text-[var(--color-text-muted)] italic"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {text
          .split("\n")
          .map((l) => l.replace(/^> /, ""))
          .join(" ")}
      </blockquote>
    );
  }
  if (/^\d+\.\s/.test(text) || text.startsWith("- ")) {
    const isOrdered = /^\d+\.\s/.test(text);
    const items = text.split("\n").map((l) =>
      l.replace(/^(\d+\.\s|-\s)/, "").trim()
    );
    const ListTag = isOrdered ? "ol" : "ul";
    return (
      <ListTag
        className={`ml-6 space-y-2 ${isOrdered ? "list-decimal" : "list-disc"} text-[var(--color-text-muted)]`}
      >
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ListTag>
    );
  }
  return <p>{text}</p>;
}


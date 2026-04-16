"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SECRETS, useDiscovered } from "@/lib/secrets";

export default function AtlasPage() {
  const discovered = useDiscovered();
  const total = SECRETS.length;
  const found = SECRETS.filter((s) => discovered.has(s.id)).length;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
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

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20 md:py-28">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <p
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-yellow)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ ATLAS · MAPA DE SECRETOS
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
              Atlas
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
            Cada historia está detrás de un acertijo. La respuesta es la URL.
            Las que ya encontraste quedan guardadas acá.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <ProgressBar found={found} total={total} />
            <span
              className="text-[10px] tracking-[0.3em] text-[var(--color-text-muted)]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              {String(found).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </motion.header>

        <motion.ol
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-14 space-y-6"
        >
          {SECRETS.map((secret, idx) => {
            const isUnlocked = discovered.has(secret.id);
            return (
              <motion.li
                key={secret.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 130, damping: 22 },
                  },
                }}
              >
                <SecretCard
                  index={idx + 1}
                  secret={secret}
                  isUnlocked={isUnlocked}
                />
              </motion.li>
            );
          })}

          <motion.li
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 130, damping: 22 },
              },
            }}
            className="rounded-2xl border border-dashed border-[var(--color-grid)] p-6 text-center text-sm text-[var(--color-text-muted)] italic"
          >
            próximamente: más historias van a aparecer acá.
          </motion.li>
        </motion.ol>

        <div className="mt-20">
          <Link
            href="/"
            className="text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            ← volver al hogar
          </Link>
        </div>
      </div>
    </div>
  );
}

function SecretCard({
  index,
  secret,
  isUnlocked,
}: {
  index: number;
  secret: (typeof SECRETS)[number];
  isUnlocked: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border p-6 md:p-8 transition ${
        isUnlocked
          ? "border-[var(--color-neon-cyan)]/40 bg-[rgba(34,211,238,0.06)]"
          : "border-[var(--color-grid)] bg-[rgba(31,42,68,0.25)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <p
          className="text-[10px] tracking-[0.35em] text-[var(--color-text-muted)]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          {String(index).padStart(2, "0")}
        </p>
        <StatusBadge isUnlocked={isUnlocked} />
      </div>

      <h2
        className="mt-5 text-2xl font-semibold md:text-3xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {isUnlocked ? (
          <Link
            href={secret.path}
            className="text-[var(--color-text)] transition-colors hover:text-[var(--color-neon-cyan)]"
          >
            {secret.title}
          </Link>
        ) : (
          <span className="text-[var(--color-text-muted)]">— ? ? ? —</span>
        )}
      </h2>

      <p
        className="mt-4 leading-8 text-[var(--color-text-muted)] italic"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        “{secret.riddle}”
      </p>

      {isUnlocked && (
        <p className="mt-5 text-xs text-[var(--color-text-muted)]">
          URL:{" "}
          <Link
            href={secret.path}
            className="text-[var(--color-neon-cyan)] hover:underline"
          >
            solangegf.dev{secret.path}
          </Link>
        </p>
      )}

      {!isUnlocked && secret.hint && (
        <p className="mt-5 text-xs text-[var(--color-text-muted)]">
          <span
            className="mr-2 text-[9px] tracking-[0.3em] text-[var(--color-neon-yellow)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            PISTA
          </span>
          {secret.hint}
        </p>
      )}
    </article>
  );
}

function StatusBadge({ isUnlocked }: { isUnlocked: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[9px] tracking-[0.25em] ${
        isUnlocked
          ? "border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)]"
          : "border-[var(--color-grid)] text-[var(--color-text-muted)]"
      }`}
      style={{ fontFamily: "var(--font-accent)" }}
    >
      {isUnlocked ? "✓ DESBLOQUEADO" : "🔒 BLOQUEADO"}
    </span>
  );
}

function ProgressBar({ found, total }: { found: number; total: number }) {
  const pct = total === 0 ? 0 : (found / total) * 100;
  return (
    <div className="h-1.5 w-48 overflow-hidden rounded-full bg-[var(--color-grid)]">
      <motion.div
        className="h-full bg-[var(--color-neon-cyan)]"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      />
    </div>
  );
}

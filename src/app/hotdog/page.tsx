"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMarkDiscovered } from "@/lib/secrets";

export default function HotdogPage() {
  useMarkDiscovered("hotdog");

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
            ◆ SECRETO 03 · DESBLOQUEADO
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
              HotDog Pro
            </span>
          </h1>
          <p
            className="mt-4 text-sm tracking-[0.3em] text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            1994 · SAUSAGE SOFTWARE · AUSTRALIA
          </p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.1,
          }}
          className="mt-16"
        >
          <h2
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-cyan)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ LOS HECHOS
          </h2>
          <ul className="mt-6 space-y-3 text-base leading-8 text-[var(--color-text-muted)]">
            <li>
              <span className="text-[var(--color-text)]">Qué:</span> uno de los
              primeros editores de HTML del mundo.
            </li>
            <li>
              <span className="text-[var(--color-text)]">Cuándo:</span>{" "}
              lanzamiento en 1994.
            </li>
            <li>
              <span className="text-[var(--color-text)]">Dónde:</span> Sausage
              Software, Melbourne, Australia.
            </li>
            <li>
              <span className="text-[var(--color-text)]">Mascota:</span>{" "}
              <span className="text-[var(--color-neon-yellow)]">Rex</span>, un
              perro que aparecía con tips — el Clippy del HTML, antes de que
              Clippy existiera.
            </li>
            <li>
              <span className="text-[var(--color-text)]">Contexto:</span> antes
              de CSS. Antes de JavaScript. Antes de Google. Mosaic era el
              browser. Yahoo era “Jerry’s Guide to the World Wide Web”.
              Netscape recién se había fundado.
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.2,
          }}
          className="mt-16"
        >
          <h2
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ LO QUE ME ACUERDO
          </h2>
          <p className="mt-6 text-sm italic text-[var(--color-text-muted)]">
            (editá estos bloques en{" "}
            <code
              className="rounded bg-[var(--color-grid)] px-1.5 py-0.5 text-xs text-[var(--color-neon-yellow)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              src/app/hotdog/page.tsx
            </code>{" "}
            para contar tus recuerdos reales.)
          </p>

          <div className="mt-10 space-y-8">
            <MemorySlot label="Cómo llegué a HotDog Pro">
              Tu historia acá. Fue un libro de HTML que te cambió la vida — el
              título, quién te lo regaló, dónde lo encontraste. La primera
              vez que abriste el editor. Qué estabas estudiando o haciendo
              cuando descubriste que esto era posible.
            </MemorySlot>

            <MemorySlot label="La primera página que hice">
              La primera página que hiciste. Qué contenía —{" "}
              <code
                className="rounded bg-[var(--color-grid)] px-1 text-xs"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                &lt;marquee&gt;
              </code>{" "}
              , gifs animados, un midi de fondo, visitor counter, fondo
              estrellado. Dónde la subiste (Geocities? Tripod? FTP de algún
              amigo?). Qué sentiste cuando apareció en Netscape por primera
              vez.
            </MemorySlot>

            <MemorySlot label="Rex the Dog">
              Tu relación con Rex. ¿Lo odiabas como todos odiaban a Clippy?
              ¿O le tenías cariño? ¿Te acordás de algún tip suyo que fuera
              realmente útil?
            </MemorySlot>

            <MemorySlot label="Las madrugadas en el 94">
              Qué hacías a las 2am con el editor abierto. Qué música sonaba.
              Qué comías. Cómo era tener que esperar 20 minutos para que
              cargara una imagen de 50kb.
            </MemorySlot>
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-[var(--color-grid)] pt-10 text-sm italic text-[var(--color-text-muted)]"
        >
          <p>
            Todo lo que escribo hoy — React 19, TypeScript estricto, edge
            functions — empezó acá. En un editor australiano con un perro de
            mascota, a las 2am, en una pantalla CRT de Buenos Aires.
          </p>
          <p className="mt-4">
            La pantalla cambió. La emoción no.
          </p>

          <div className="mt-14 flex items-center gap-6 text-xs">
            <Link
              href="/atlas"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              ← volver al atlas
            </Link>
            <Link
              href="/"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              ← home
            </Link>
          </div>
        </motion.footer>
      </article>
    </div>
  );
}

function MemorySlot({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-dashed border-[var(--color-grid)] p-6">
      <p
        className="text-[9px] tracking-[0.35em] text-[var(--color-neon-yellow)]"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        ▸ {label}
      </p>
      <p className="mt-3 text-base leading-8 text-[var(--color-text-muted)] italic">
        {children}
      </p>
    </div>
  );
}

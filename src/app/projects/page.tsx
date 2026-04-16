"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Accent = "magenta" | "cyan" | "yellow";

type Project = {
  id: string;
  title: string;
  tagline: string;
  years: string;
  status: "IN PROGRESS" | "ACTIVE" | "META" | "SLEEPING";
  level: string;
  accent: Accent;
  description: string[];
  tags: string[];
  url?: string;
};

const projects: Project[] = [
  {
    id: "greenkedin",
    title: "GreenkedIn",
    tagline: "Red profesional del sector cannábico en LATAM.",
    years: "2025 — now",
    status: "IN PROGRESS",
    level: "LV. 12",
    accent: "magenta",
    description: [
      "La red social donde cultivadores, dispensarios, growshops y profesionales del cannabis se encuentran. Foco en LATAM, pensada desde la realidad del sector, no desde afuera.",
      "Mi proyecto principal hoy. Frontend, UI/UX, producto. Cranee-ando desde 2025.",
    ],
    tags: ["cannabis", "LATAM", "producto", "comunidad"],
    url: "https://greenkedin.lat",
  },
  {
    id: "mercadodesemillas",
    title: "Mercado de Semillas",
    tagline: "E-commerce de semillas. De germinar a consumir.",
    years: "2020 — now",
    status: "ACTIVE",
    level: "LV. 42",
    accent: "yellow",
    description: [
      "Marca propia, armada desde cero: branding, UX, catálogo, logística, comunidad. Construida con WooCommerce y mucho café.",
      "La prueba viva de que sé lo que cuesta lanzar, crecer y sostener un negocio — no solo escribir código.",
    ],
    tags: ["e-commerce", "branding", "WooCommerce", "logística"],
    url: "https://mercadodesemillas.com",
  },
  {
    id: "solangegf-dev",
    title: "solangegf.dev",
    tagline: "Mi rincón de internet. Acá estás.",
    years: "2026",
    status: "META",
    level: "LV. 01",
    accent: "cyan",
    description: [
      "Un sitio para romper cosas por gusto, esconder acertijos para mis sobrinos, y contar historias que no caben en un CV.",
      "Next.js 16, Tailwind 4, framer-motion, kaplay, y un Konami code por si te aburrís.",
    ],
    tags: ["Next.js 16", "Tailwind v4", "easter eggs", "gamer shit"],
  },
];

const accentMap: Record<Accent, { border: string; text: string; glow: string }> = {
  magenta: {
    border: "border-[var(--color-neon-magenta)]",
    text: "text-[var(--color-neon-magenta)]",
    glow: "shadow-[0_0_40px_rgba(244,114,182,0.15)]",
  },
  cyan: {
    border: "border-[var(--color-neon-cyan)]",
    text: "text-[var(--color-neon-cyan)]",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.15)]",
  },
  yellow: {
    border: "border-[var(--color-neon-yellow)]",
    text: "text-[var(--color-neon-yellow)]",
    glow: "shadow-[0_0_40px_rgba(250,204,21,0.15)]",
  },
};

export default function ProjectsPage() {
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
            "radial-gradient(ellipse at 50% 15%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 15%, black 10%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <p
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ PROYECTOS · TROPHY CASE
          </p>
          <h1
            className="mt-6 text-5xl font-semibold leading-none md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F472B6 0%, #22D3EE 55%, #FACC15 100%)",
              }}
            >
              Proyectos
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
            Cosas que craneé hasta que salieron. Algunas siguen vivas, otras
            duermen, y una que otra solo existe porque me la debía.
          </p>
        </motion.header>

        <motion.ol
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-14 space-y-6"
        >
          {projects.map((p) => (
            <motion.li
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 130,
                    damping: 22,
                  },
                },
              }}
            >
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </motion.ol>

        <p className="mt-16 text-sm italic text-[var(--color-text-muted)]">
          (más proyectos viejos, incluyendo stints en NTT DATA y Angular
          shops, vienen en una próxima iteración — o los revelan los
          acertijos del /atlas.)
        </p>

        <div className="mt-12">
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

function ProjectCard({ project }: { project: Project }) {
  const accent = accentMap[project.accent];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative overflow-hidden rounded-2xl border bg-[rgba(31,42,68,0.22)] p-8 md:p-10 ${accent.border}/40 hover:${accent.border} ${accent.glow}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at 85% 10%, black 0%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 85% 10%, black 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[9px] tracking-[0.3em] ${accent.border} ${accent.text}`}
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {project.level}
          </span>
          <span
            className="text-[9px] tracking-[0.3em] text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {project.status}
          </span>
          <span
            className="text-[9px] tracking-[0.3em] text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            · {project.years}
          </span>
        </div>

        <h2
          className={`mt-5 text-3xl font-semibold leading-tight md:text-5xl ${accent.text}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h2>

        <p className="mt-3 text-base leading-7 text-[var(--color-text)]">
          {project.tagline}
        </p>

        <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
          {project.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--color-grid)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        {project.url && (
          <div className="mt-8">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm transition-colors ${accent.text} hover:underline`}
            >
              → ver en vivo
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

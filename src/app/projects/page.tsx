"use client";

// NOTE: Some project descriptions and tags below are inferred from Solange's
// CV and the original briefing. The ones marked with "// TODO: Solange" need
// her to confirm or replace with the real stack/description. Inline edits
// welcome — the data is just a typed array.

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
    tagline: "Red profesional para la industria cannábica en LATAM.",
    years: "2025 — now",
    status: "IN PROGRESS",
    level: "LV. 12",
    accent: "magenta",
    description: [
      "Pensada desde la realidad del sector cannabis en Latinoamérica: cultivadores, dispensarios, growshops, profesionales y empresas. Feed, perfiles, conexiones, empleos y recursos.",
      "Built end-to-end con Claude Code — Next.js 15 (App Router con React Server Components + Server Actions), TypeScript, Prisma + Supabase (Postgres, Auth, Storage), Tailwind + shadcn/ui, deploy en Vercel.",
    ],
    tags: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "Supabase",
      "shadcn/ui",
      "cannabis",
      "LATAM",
    ],
    url: "https://greenkedin.lat",
  },
  {
    id: "binawave",
    title: "BinaWave",
    tagline: "SaaS de terapia con sonido binaural — empezada para mi papá.",
    years: "2025",
    status: "SLEEPING",
    level: "LV. 09",
    accent: "cyan",
    description: [
      "Construida end-to-end con Claude Code: auth, streaming de audio, suscripciones (MercadoPago + PayPal) y foro comunitario, sobre Vercel + Supabase.",
      "Los tracks binaurales los generé con Suno. La empecé para mi papá, que está interesado en la terapia con ondas binaurales.",
      "Pausada — quiero retomarla. Repo (todavía bajo el nombre original Neurowave): github.com/Solang3/neurowave.",
    ],
    tags: [
      "SaaS",
      "Supabase",
      "Vercel",
      "Claude Code",
      "Suno",
      "audio streaming",
      "MercadoPago",
      "PayPal",
    ],
    url: "https://github.com/Solang3/neurowave",
  },
  {
    id: "mercadodesemillas",
    title: "Mercado de Semillas",
    tagline: "E-commerce de semillas de cannabis, mío. De germinar a consumir.",
    years: "2020 — now",
    status: "ACTIVE",
    level: "LV. 42",
    accent: "yellow",
    description: [
      "Marca propia armada desde cero: branding, UX, catálogo, logística y comunidad. Frontend en Next.js 15 + React 19 + Tailwind + Zustand, backend WordPress headless con plugin custom (`wp-plugin`), pagos vía MercadoPago.",
      "Vendedora con licencia INASE (Instituto Nacional de Semillas, AR). En trámite la licencia de cáñamo industrial en ARICCAME — pendiente de implementación del organismo.",
      "La prueba viva de que sé lo que cuesta lanzar, crecer y sostener un negocio — no solo escribir código.",
    ],
    tags: [
      "Next.js 15",
      "React 19",
      "headless WP",
      "wp-plugin custom",
      "MercadoPago",
      "Zustand",
      "INASE",
    ],
    url: "https://mercadodesemillas.com",
  },
  {
    id: "mama-se-planta",
    title: "Mama Se Planta",
    tagline: "Web para una marca cannábica argentina, en una mañana.",
    years: "2025",
    status: "ACTIVE",
    level: "LV. 06",
    accent: "magenta",
    description: [
      "Diseño + contenido + dev end-to-end con Claude — design system completo y todo el copy generados en una sola mañana. Una prueba clara de cómo cambia el ciclo de producción cuando AI es parte del flujo.",
    ],
    tags: [
      "Claude",
      "design system",
      "AI-assisted",
      "Next.js",
      "Vercel",
      "cannabis",
    ],
    url: "https://mama-se-planta.vercel.app",
  },
  {
    id: "cadizsrl",
    title: "Cadiz Energías Renovables",
    tagline: "Sitio mayorista para una empresa de energía solar familiar.",
    years: "2025 — now",
    status: "IN PROGRESS",
    level: "LV. 04",
    accent: "cyan",
    description: [
      "Frontend Next.js 16 + React 19 + Tailwind 4 que consume un WordPress headless vía WPGraphQL. El catálogo se muestra sin precios — cada producto deriva al CTA \"solicitar cotización\" en lugar de carrito.",
      "El backend WP es la misma instancia que usa la tienda minorista de la misma empresa familiar. Tipos TypeScript autogenerados desde el schema GraphQL con graphql-codegen.",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "WPGraphQL",
      "graphql-codegen",
      "headless WP",
      "energía solar",
    ],
    url: "https://cadizsrl-web.vercel.app",
  },
  {
    id: "solangegf-dev",
    title: "solangegf.dev",
    tagline: "Mi rincón de internet. Acá estás.",
    years: "2026",
    status: "META",
    level: "LV. 01",
    accent: "yellow",
    description: [
      "Acertijos para mis sobrinos, un Breakout escondido y un Konami code, todo arriba de Next 16 + Tailwind 4 + framer-motion + kaplay.",
    ],
    tags: ["Next.js 16", "Tailwind v4", "kaplay", "easter eggs"],
  },
];

const accentMap: Record<
  Accent,
  { border: string; text: string; glow: string }
> = {
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

const notableClients = [
  "Disney",
  "Sony",
  "Electronic Arts",
  "Sabre Holdings",
  "Deloitte",
  "Yahoo",
  "Movistar",
  "Edesur",
  "AMC Theatres",
  "PowerToFly",
];

type StackGroup = {
  label: string;
  accent: Accent;
  items: string[];
};

const stack: StackGroup[] = [
  {
    label: "FRONTEND",
    accent: "magenta",
    items: [
      "TypeScript",
      "JavaScript ES6+",
      "React",
      "Next.js",
      "Angular",
      "HTML",
      "CSS / Sass",
      "Tailwind",
    ],
  },
  {
    label: "BACKEND",
    accent: "cyan",
    items: [
      "Supabase",
      "Prisma",
      "Postgres",
      "REST APIs",
      "Flask · Python",
      "serverless",
    ],
  },
  {
    label: "E-COMMERCE & CMS",
    accent: "yellow",
    items: [
      "Adobe Commerce / Magento",
      "WooCommerce",
      "WordPress",
      "Typo3",
      "headless CMS",
    ],
  },
  {
    label: "AI WORKFLOWS",
    accent: "magenta",
    items: [
      "Claude Code",
      "hooks · subagents · MCP servers · skills",
      "Anthropic SDK",
      "prompt caching · tool use",
      "autonomous agents",
      "v0.app",
      "GitHub automation",
    ],
  },
  {
    label: "OPS",
    accent: "cyan",
    items: [
      "Vercel",
      "Cloudflare",
      "Plesk",
      "SEO",
      "analytics",
      "performance",
    ],
  },
];

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
            "radial-gradient(ellipse at 50% 12%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 12%, black 10%, transparent 75%)",
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
            Cosas que craneé hasta que salieron. Algunas son mías, otras
            las hice para clientes — todas las construí con el mismo
            cuidado.
          </p>
        </motion.header>

        <h2
          className="mt-16 text-[10px] tracking-[0.35em] text-[var(--color-neon-cyan)]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          ◆ FEATURED
        </h2>

        <motion.ol
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-6 space-y-6"
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

        <section className="mt-20">
          <h2
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-yellow)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ NOTABLE CLIENTS
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
            Clientes para los que trabajé a través de Globant, NTT DATA,
            PowerToFly y otros. Code que no es público, pero impacto que sí.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {notableClients.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[var(--color-grid)] px-4 py-1.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-neon-yellow)] hover:text-[var(--color-neon-yellow)]"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2
            className="text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ◆ STACK
          </h2>
          <div className="mt-6 space-y-6">
            {stack.map((group) => (
              <StackRow key={group.label} group={group} />
            ))}
          </div>
        </section>

        <p className="mt-16 text-sm italic text-[var(--color-text-muted)]">
          Para CV completo y trayectoria detallada (NTT DATA, Globant,
          Youwe, Velocity Partners, GirlsAskGuys, etc.), andá a{" "}
          <Link
            href="/about"
            className="text-[var(--color-neon-cyan)] hover:underline"
          >
            /about
          </Link>
          .
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
              → {project.url.includes("github.com") ? "ver código" : "ver en vivo"}
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function StackRow({ group }: { group: StackGroup }) {
  const accent = accentMap[group.accent];
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[160px_1fr] md:gap-6">
      <p
        className={`text-[10px] tracking-[0.35em] ${accent.text}`}
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {group.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((it) => (
          <span
            key={it}
            className="rounded-full border border-[var(--color-grid)] px-3 py-1 text-xs text-[var(--color-text)]"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

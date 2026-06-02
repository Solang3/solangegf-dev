"use client";

import Link from "next/link";
import { useLocale, useT } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/dictionaries";
import { Reveal, DrawLine } from "./Reveal";

type Loc = Record<Locale, string>;

type Project = {
  index: string;
  slug: string;
  title: string;
  tagline: Loc;
  description: Loc;
  years: string;
  status: string;
  tags: string[];
  href?: string;
  hrefLabel?: string;
};

const projects: Project[] = [
  {
    index: "01",
    slug: "greenkedin",
    title: "GreenkedIn",
    tagline: {
      en: "A professional network for the cannabis industry in LATAM.",
      es: "Red profesional para la industria cannábica en LATAM.",
    },
    description: {
      en: "Feed, profiles, connections, jobs and resources for an entire sector. Built end-to-end with Claude Code: Next.js (App Router · RSC · Server Actions), TypeScript, Prisma + Supabase, deployed on Vercel.",
      es: "Feed, perfiles, conexiones, empleos y recursos para un sector entero. Construida end-to-end con Claude Code: Next.js (App Router · RSC · Server Actions), TypeScript, Prisma + Supabase, deploy en Vercel.",
    },
    years: "2025 — now",
    status: "IN PROGRESS",
    tags: ["Next.js", "TypeScript", "Supabase", "AI-native"],
    href: "https://greenkedin.lat",
    hrefLabel: "greenkedin.lat",
  },
  {
    index: "02",
    slug: "mercado-de-semillas",
    title: "Mercado de Semillas",
    tagline: {
      en: "My own cannabis-seed e-commerce — germination to consumption.",
      es: "E-commerce propio de semillas de cannabis, de germinar a consumir.",
    },
    description: {
      en: "A brand built from scratch — branding, UX, catalog, logistics and community. Next.js + React 19 + Tailwind over headless WordPress with a custom plugin. INASE-licensed seller: proof I can sustain a business, not just write code.",
      es: "Marca armada desde cero: branding, UX, catálogo, logística y comunidad. Next.js + React 19 + Tailwind sobre WordPress headless con plugin propio. Vendedora con licencia INASE: la prueba de sostener un negocio, no solo escribir código.",
    },
    years: "2020 — now",
    status: "ACTIVE",
    tags: ["Next.js", "headless WP", "MercadoPago", "e-commerce"],
    href: "https://mercadodesemillas.com",
    hrefLabel: "mercadodesemillas.com",
  },
  {
    index: "03",
    slug: "cadiz-energias",
    title: "Cadiz Energías Renovables",
    tagline: {
      en: "A B2B wholesale platform for solar energy.",
      es: "Plataforma mayorista B2B para energía solar.",
    },
    description: {
      en: "A Next.js 16 + React 19 + Tailwind 4 frontend consuming headless WordPress via WPGraphQL, with TypeScript types generated from the schema. Price-less catalog: every product routes to “request a quote”.",
      es: "Frontend Next.js 16 + React 19 + Tailwind 4 que consume WordPress headless vía WPGraphQL, con tipos TypeScript autogenerados desde el schema. Catálogo sin precios: cada producto deriva a “solicitar cotización”.",
    },
    years: "2025 — now",
    status: "IN PROGRESS",
    tags: ["Next.js 16", "WPGraphQL", "graphql-codegen", "B2B"],
    href: "https://cadizsrl-web.vercel.app",
    hrefLabel: "cadizsrl-web.vercel.app",
  },
  {
    index: "04",
    slug: "mama-se-planta",
    title: "Mama Se Planta",
    tagline: {
      en: "A cannabis brand site, built in one morning.",
      es: "Web para una marca cannábica, en una mañana.",
    },
    description: {
      en: "Design system, copy and dev end-to-end with Claude in a single morning — a clear proof of how the production cycle changes when AI is part of the flow.",
      es: "Design system, contenido y dev end-to-end con Claude en una sola mañana — prueba clara de cómo cambia el ciclo de producción cuando la AI es parte del flujo.",
    },
    years: "2025",
    status: "ACTIVE",
    tags: ["Claude", "design system", "AI-assisted", "Vercel"],
    href: "https://mama-se-planta.vercel.app",
    hrefLabel: "mama-se-planta.vercel.app",
  },
  {
    index: "05",
    slug: "binawave",
    title: "BinaWave",
    tagline: {
      en: "A binaural sound-therapy SaaS.",
      es: "SaaS de terapia con sonido binaural.",
    },
    description: {
      en: "Auth, audio streaming, subscriptions (MercadoPago + PayPal) and a community forum on Vercel + Supabase. Tracks generated with Suno. I started it for my dad — paused, eager to resume.",
      es: "Auth, streaming de audio, suscripciones (MercadoPago + PayPal) y foro comunitario sobre Vercel + Supabase. Tracks generados con Suno. La empecé para mi viejo — pausada, con ganas de retomarla.",
    },
    years: "2025",
    status: "SLEEPING",
    tags: ["SaaS", "Supabase", "audio streaming", "Claude Code"],
  },
];

export default function SelectedWork() {
  const t = useT();
  const { locale } = useLocale();

  return (
    <section id="trabajo" className="relative isolate px-6 py-28 md:px-10 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="sheet-grid absolute inset-0 opacity-70" />
        <div className="absolute -left-[6%] top-[10%] h-[55vh] w-[55vh] rounded-full opacity-35 blur-[90px]" style={{ background: "radial-gradient(circle, #6366f1, transparent 68%)" }} />
        <div className="absolute right-0 top-[40%] h-[60vh] w-[60vh] rounded-full opacity-30 blur-[90px]" style={{ background: "radial-gradient(circle, #ec4899, transparent 68%)" }} />
        <div className="absolute left-[24%] bottom-[6%] h-[52vh] w-[52vh] rounded-full opacity-30 blur-[90px]" style={{ background: "radial-gradient(circle, #06b6d4, transparent 68%)" }} />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-baseline justify-between">
          <h2
            className="text-[11px] tracking-[0.4em] text-ink-soft"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t.work.label}
          </h2>
          <span
            className="text-[11px] tracking-[0.3em] text-ink-soft"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t.work.labelAlt}
          </span>
        </div>
        <DrawLine className="mt-5" />

        <ol className="mt-10">
          {projects.map((p, i) => (
            <li
              key={p.index}
              className="work-card sticky mb-6"
              style={{ top: `calc(11vh + ${i * 2.1}rem)` }}
            >
              <article className="overflow-hidden rounded-[28px] border border-line-strong bg-card/65 p-8 shadow-[0_22px_55px_-26px_rgba(16,16,18,0.5)] backdrop-blur-2xl md:p-14">
                <Reveal y={40}>
                  <div
                    className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] tracking-[0.3em] text-ink-soft"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="text-2xl tracking-normal text-ink md:text-3xl">
                      {p.index}
                    </span>
                    <span>{p.status}</span>
                    <span>·</span>
                    <span>{p.years}</span>
                  </div>

                  <h3
                    className="mt-5 font-semibold leading-[0.95] tracking-[-0.02em] text-[clamp(2.4rem,6.5vw,5rem)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-lg text-ink md:text-xl">
                    {p.tagline[locale]}
                  </p>
                  <p className="mt-4 max-w-2xl leading-7 text-ink-soft">
                    {p.description[locale]}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                      href={`/work/${p.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 hover:underline"
                    >
                      {t.work.caseStudy}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
                      >
                        <span style={{ fontFamily: "var(--font-mono)" }}>{p.hrefLabel}</span>
                        <span className="transition-transform group-hover:translate-x-1">↗</span>
                      </a>
                    )}
                  </div>
                </Reveal>
              </article>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-sm text-ink-soft">
          {t.work.more}{" "}
          <Link
            href="/playwithme/projects"
            className="text-ink underline-offset-4 hover:underline"
          >
            {t.work.moreLink}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

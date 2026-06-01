"use client";

import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";
import { Reveal } from "./Reveal";

const clients = [
  "Disney", "Sony", "Electronic Arts", "Sabre Holdings", "Deloitte",
  "Yahoo", "Movistar", "Edesur", "AMC Theatres", "PowerToFly",
  "NTT DATA", "Globant", "Youwe",
];

type StackGroup = { label: string; items: string[] };
const stack: StackGroup[] = [
  { label: "FRONTEND", items: ["TypeScript", "React", "Next.js", "Angular", "Tailwind", "CSS / Sass"] },
  { label: "BACKEND", items: ["Supabase", "Prisma", "Postgres", "REST APIs", "Flask · Python", "serverless"] },
  { label: "E-COMMERCE & CMS", items: ["Adobe Commerce / Magento", "WooCommerce", "WordPress", "headless CMS", "Typo3"] },
  { label: "AI WORKFLOWS", items: ["Claude Code", "hooks · subagents · MCP · skills", "Anthropic SDK", "autonomous agents", "GitHub automation"] },
  { label: "OPS", items: ["Vercel", "Cloudflare", "Plesk", "SEO", "analytics", "performance"] },
];

export default function About() {
  const t = useT();

  return (
    <section
      id="sobre"
      className="relative border-y border-line bg-paper-2 px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline justify-between">
          <h2
            className="text-[11px] tracking-[0.4em] text-ink-soft"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t.about.label}
          </h2>
          <span
            className="text-[11px] tracking-[0.3em] text-ink-soft"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t.about.labelAlt}
          </span>
        </div>

        <Reveal>
          <p
            className="mt-10 max-w-4xl text-pretty font-medium leading-[1.08] tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.4rem)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.about.statement}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="/solangegf-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {t.about.downloadCv} ↓
            </a>
            <span
              className="text-[11px] tracking-[0.28em] text-ink-soft"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t.about.available}
            </span>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {t.about.stats.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="border-t border-line-strong pt-5">
                <p
                  className="text-[clamp(2.6rem,6vw,4.4rem)] font-semibold leading-none tracking-[-0.03em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.n}
                </p>
                <p className="mt-3 text-sm text-ink-soft">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* matriz de skills */}
        <div className="mt-20">
          <h3
            className="text-[11px] tracking-[0.4em] text-ink-soft"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            ◆ {t.about.stack}
          </h3>
          <div className="mt-8 space-y-6">
            {stack.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.06}>
                <div className="grid grid-cols-1 gap-3 border-t border-line pt-5 md:grid-cols-[180px_1fr] md:gap-6">
                  <p
                    className="text-[11px] tracking-[0.32em] text-ink"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {g.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-line-strong px-3 py-1 text-xs text-ink-soft"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* marquee de clientes */}
      <div className="marquee group mt-20 overflow-hidden">
        <p
          className="mb-5 px-6 text-[11px] tracking-[0.4em] text-ink-soft md:px-10"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {t.about.clientsLabel}
        </p>
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="text-[clamp(1.4rem,3vw,2.4rem)] font-medium tracking-[-0.01em] text-ink-soft transition-colors hover:text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c}
              <span className="ml-10 text-line-strong">/</span>
            </span>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-6xl text-sm text-ink-soft">
        <Link
          href="/playwithme"
          className="text-ink underline-offset-4 hover:underline"
        >
          play with me ↗
        </Link>{" "}
        — the 90s stories, hidden games and the treasure hunt for my nephews.
      </p>
    </section>
  );
}

"use client";

import { useT } from "@/i18n/LocaleProvider";
import { Reveal } from "./Reveal";

export default function ContactFooter() {
  const t = useT();

  const channels = [
    { label: "EMAIL", value: "solangegf@gmail.com", href: "mailto:solangegf@gmail.com" },
    { label: "LINKEDIN", value: "in/solangegonzalez", href: "https://www.linkedin.com/in/solangegonzalez" },
    { label: "GITHUB", value: "Solang3", href: "https://github.com/Solang3" },
    { label: "BEHANCE", value: "solangegf", href: "https://www.behance.net/solangegf" },
    { label: "CV", value: t.contact.channels.cvValue, href: "/solangegf-cv.pdf" },
  ];

  return (
    <footer
      id="contacto"
      className="relative isolate overflow-hidden bg-ink px-6 py-28 text-paper md:px-10 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <p
          className="text-[11px] tracking-[0.4em] text-paper/55"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {t.contact.label}
        </p>

        <Reveal>
          <h2
            className="mt-8 font-semibold leading-[0.9] tracking-[-0.03em] text-[clamp(3rem,12vw,10rem)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.contact.headline[0]}
            <br />
            {t.contact.headline[1]}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-8 text-paper/70">
            {t.contact.body}
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {channels.map((c) => (
            <li key={c.label} className="bg-ink">
              <a
                href={c.href}
                target={c.href.startsWith("http") || c.href.endsWith(".pdf") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-white/5"
              >
                <span
                  className="text-[10px] tracking-[0.35em] text-paper/45"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {c.label}
                </span>
                <span className="flex items-center gap-2 text-base font-medium">
                  {c.value}
                  <span className="text-paper/40 transition-transform group-hover:translate-x-0.5">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div
          className="mt-20 flex flex-col gap-6 border-t border-white/15 pt-8 text-[11px] tracking-[0.3em] text-paper/45 md:flex-row md:items-center md:justify-between"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span>{t.contact.footerLeft}</span>
          <span className="hidden md:inline">↑ ↑ ↓ ↓ ← → ← → B A → /playwithme</span>
          <span>{t.contact.footerRight}</span>
        </div>
      </div>
    </footer>
  );
}

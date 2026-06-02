"use client";

import { useT } from "@/i18n/LocaleProvider";
import { Reveal, DrawLine } from "./Reveal";

export default function Services() {
  const t = useT();

  return (
    <section id="servicios" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline justify-between">
          <h2
            className="text-[11px] tracking-[0.4em] text-ink-soft"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t.services.label}
          </h2>
          <span
            className="text-[11px] tracking-[0.3em] text-ink-soft"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t.services.labelAlt}
          </span>
        </div>
        <DrawLine className="mt-5" />

        <Reveal>
          <h3
            className="mt-10 max-w-4xl font-bold leading-[0.98] tracking-[-0.03em] text-[clamp(2.6rem,7vw,5rem)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.services.title}
          </h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">
            {t.services.intro}
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line-strong bg-line-strong shadow-[0_20px_60px_-28px_rgba(16,16,18,0.45)] sm:grid-cols-2">
          {t.services.items.map((item, i) => (
            <li
              key={item.title}
              className="group relative bg-card transition-colors hover:bg-paper-2"
            >
              <Reveal delay={i * 0.07} className="h-full">
                <div className="p-8 md:p-12">
                  <span
                    className="text-[11px] tracking-[0.3em] text-ink-soft"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    S{i + 1}
                  </span>
                  <h4
                    className="mt-6 text-2xl font-semibold tracking-[-0.01em] md:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-3 max-w-md leading-7 text-ink-soft">{item.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <a
              href="mailto:solangegf@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              {t.services.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

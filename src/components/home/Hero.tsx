"use client";

import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";

export default function Hero() {
  const t = useT();

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-24 md:px-10">
      {/* hoja técnica — grilla base B&N (el color lo pone el CursorField, page-wide) */}
      <div aria-hidden className="sheet-grid absolute inset-0 -z-30" />
      <div aria-hidden className="sheet-grid-fine absolute inset-0 -z-30 opacity-50" />

      <div className="relative mx-auto w-full max-w-6xl">
        <p
          className="text-[11px] tracking-[0.42em] text-ink-soft"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {t.hero.kicker}
        </p>

        <h1
          className="mt-6 font-semibold leading-[0.86] tracking-[-0.03em] text-ink text-[clamp(3.4rem,15vw,13rem)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Solange
          <br />
          Gonzalez
        </h1>

        <p className="mt-9 max-w-2xl text-pretty text-xl leading-8 text-ink md:text-2xl">
          {t.hero.lead}
        </p>
        <p className="mt-3 max-w-xl text-pretty leading-7 text-ink-soft">
          {t.hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
          <Link
            href="#servicios"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            {t.hero.ctaServices}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link
            href="#trabajo"
            className="inline-flex items-center rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            {t.hero.ctaWork}
          </Link>
          <Link
            href="#contacto"
            className="text-sm text-ink underline-offset-4 transition-colors hover:underline"
          >
            {t.hero.ctaContact}
          </Link>
          <Link
            href="/playwithme"
            className="text-sm text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {t.hero.play} ↗
          </Link>
        </div>

        <div
          className="mt-16 flex flex-wrap gap-x-8 gap-y-2 text-[11px] tracking-[0.3em] text-ink-soft"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span>BUENOS AIRES — AR</span>
          <span>EST. 1994</span>
          <span>20+ YRS</span>
          <span className="hidden md:inline">AR · EU · REMOTE</span>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-ink-soft"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        ↓ {t.hero.scroll}
      </div>
    </section>
  );
}

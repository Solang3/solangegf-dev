"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";
import LocaleToggle from "./LocaleToggle";
import ThemeToggle from "./ThemeToggle";
import VibeShuffle from "./VibeShuffle";

export default function SiteHeader() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicios", label: t.nav.services },
    { href: "#trabajo", label: t.nav.work },
    { href: "#sobre", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[-0.01em] text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Solange Gonzalez
        </Link>

        <nav
          className="flex items-center gap-5 text-[13px] text-ink-soft md:gap-7"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden transition-colors hover:text-ink sm:inline"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/playwithme"
            className="hidden text-ink transition-opacity hover:opacity-60 sm:inline"
            title="the playful side of the site"
          >
            {t.nav.play} ↗
          </Link>
          <span className="hidden h-3 w-px bg-line-strong sm:inline-block" />
          <ThemeToggle />
          <VibeShuffle />
          <LocaleToggle />
        </nav>
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import {
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Manrope,
  Newsreader,
  Press_Start_2P,
} from "next/font/google";
import MoodboardPanels from "./MoodboardPanels";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moodboard — solangegf.dev",
  description: "Tres direcciones visuales para elegir el vibe del sitio.",
};

export default function MoodboardPage() {
  const fontVars = [
    manrope.variable,
    interTight.variable,
    inter.variable,
    jetbrains.variable,
    pressStart.variable,
    newsreader.variable,
  ].join(" ");

  return (
    <div
      className={`${fontVars} min-h-screen w-full bg-zinc-100 text-zinc-900`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <header className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase">
          solangegf.dev · moodboard
        </p>
        <h1
          className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl"
          style={{ fontFamily: "var(--font-inter-tight)" }}
        >
          Tres direcciones. Elegí una.
        </h1>
        <p
          className="mt-4 max-w-2xl text-base text-zinc-600"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Cada panel muestra tipografía (display + body + acento), paleta y un
          mini-hero con tu frase. Hacé hover en los paneles y en las paletas
          para sentir las spring animations que va a usar el sitio.
        </p>
      </header>
      <MoodboardPanels />
      <footer className="mx-auto max-w-7xl px-6 pb-12 text-sm text-zinc-500">
        Cuando elijas una (o una mezcla), me decís y convertimos ese panel en
        el hero real de la home.
      </footer>
    </div>
  );
}

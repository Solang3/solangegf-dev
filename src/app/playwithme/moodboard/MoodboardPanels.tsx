"use client";

import { motion } from "framer-motion";

type Palette = { name: string; hex: string };

type Panel = {
  id: string;
  name: string;
  tagline: string;
  bg: string;
  text: string;
  mutedText: string;
  swatchRing: string;
  displayFont: string;
  displayStyle?: "italic" | "normal";
  bodyFont: string;
  accentFont: string;
  accentUppercase?: boolean;
  palette: Palette[];
  gradient: string;
};

const panels: Panel[] = [
  {
    id: "warm-josh",
    name: "Warm Josh",
    tagline: "Crema off-white, acentos violeta + amarillo + rosa. Craft y mucho aire.",
    bg: "#FDFBF7",
    text: "#1C1917",
    mutedText: "rgba(28,25,23,0.7)",
    swatchRing: "rgba(0,0,0,0.08)",
    displayFont: "var(--font-manrope)",
    bodyFont: "var(--font-inter-tight)",
    accentFont: "var(--font-manrope)",
    accentUppercase: true,
    palette: [
      { name: "cream", hex: "#FDFBF7" },
      { name: "ink", hex: "#1C1917" },
      { name: "violet", hex: "#8B5CF6" },
      { name: "yellow", hex: "#FBBF24" },
      { name: "pink", hex: "#EC4899" },
    ],
    gradient: "linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #FBBF24 100%)",
  },
  {
    id: "retro-arcade",
    name: "Retro Arcade",
    tagline: "CRT dark slate + neones magenta/cyan/amarillo. 80s coin-op, liga con el juego oculto.",
    bg: "#0B1020",
    text: "#F5F5FA",
    mutedText: "rgba(245,245,250,0.7)",
    swatchRing: "rgba(255,255,255,0.12)",
    displayFont: "var(--font-jetbrains)",
    bodyFont: "var(--font-inter)",
    accentFont: "var(--font-press-start)",
    palette: [
      { name: "crt", hex: "#0B1020" },
      { name: "grid", hex: "#1F2A44" },
      { name: "magenta", hex: "#F472B6" },
      { name: "cyan", hex: "#22D3EE" },
      { name: "yellow", hex: "#FACC15" },
    ],
    gradient: "linear-gradient(90deg, #F472B6 0%, #22D3EE 50%, #FACC15 100%)",
  },
  {
    id: "blueprint-architect",
    name: "Blueprint Architect",
    tagline: "Papyrus + royal blue + coral. Guiño a tu Rotring y al AutoCAD.",
    bg: "#FAF6EC",
    text: "#1E293B",
    mutedText: "rgba(30,41,59,0.7)",
    swatchRing: "rgba(0,0,0,0.08)",
    displayFont: "var(--font-newsreader)",
    displayStyle: "italic",
    bodyFont: "var(--font-inter)",
    accentFont: "var(--font-newsreader)",
    palette: [
      { name: "paper", hex: "#FAF6EC" },
      { name: "graphite", hex: "#1E293B" },
      { name: "royal", hex: "#1E40AF" },
      { name: "coral", hex: "#F97316" },
      { name: "mustard", hex: "#D97706" },
    ],
    gradient: "linear-gradient(90deg, #1E40AF 0%, #F97316 55%, #D97706 100%)",
  },
];

export default function MoodboardPanels() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-20 lg:grid-cols-3">
      {panels.map((p) => (
        <motion.section
          key={p.id}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="flex flex-col gap-7 rounded-3xl p-8 shadow-xl ring-1 ring-black/5"
          style={{ backgroundColor: p.bg, color: p.text }}
        >
          <header>
            <p
              className="text-[11px] tracking-[0.2em]"
              style={{
                fontFamily: p.accentFont,
                color: p.mutedText,
                textTransform: p.accentUppercase ? "uppercase" : undefined,
              }}
            >
              {p.name}
            </p>
            <h2
              className="mt-3 text-3xl font-semibold leading-tight"
              style={{ fontFamily: p.displayFont, fontStyle: p.displayStyle }}
            >
              Hola, soy{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: p.gradient }}
              >
                Solange
              </span>
            </h2>
            <p
              className="mt-3 text-sm leading-6"
              style={{ fontFamily: p.bodyFont, color: p.mutedText }}
            >
              {p.tagline}
            </p>
          </header>

          <div>
            <p
              className="mb-3 text-[10px] tracking-[0.2em]"
              style={{
                fontFamily: p.bodyFont,
                color: p.mutedText,
                textTransform: "uppercase",
              }}
            >
              Typography
            </p>
            <div className="space-y-2">
              <p
                className="text-3xl leading-none"
                style={{ fontFamily: p.displayFont, fontStyle: p.displayStyle }}
              >
                Display — Aa Bb Cc
              </p>
              <p className="text-base" style={{ fontFamily: p.bodyFont }}>
                Body — The quick brown fox jumps over the lazy dog.
              </p>
              <p
                className="text-[10px] tracking-widest"
                style={{ fontFamily: p.accentFont, color: p.mutedText }}
              >
                ACCENT 1234567890
              </p>
            </div>
          </div>

          <div>
            <p
              className="mb-3 text-[10px] tracking-[0.2em]"
              style={{
                fontFamily: p.bodyFont,
                color: p.mutedText,
                textTransform: "uppercase",
              }}
            >
              Palette
            </p>
            <div className="flex gap-3">
              {p.palette.map((c) => (
                <motion.div
                  key={c.hex}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div
                    className="size-11 rounded-xl"
                    style={{
                      backgroundColor: c.hex,
                      boxShadow: `inset 0 0 0 1px ${p.swatchRing}`,
                    }}
                  />
                  <span
                    className="text-[9px] tracking-wide"
                    style={{ fontFamily: p.bodyFont, color: p.mutedText }}
                  >
                    {c.hex}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div
            className="mt-auto flex items-center justify-between text-xs"
            style={{ fontFamily: p.bodyFont, color: p.mutedText }}
          >
            <span>→ Hover el panel y las paletas</span>
            <span>#{panels.indexOf(p) + 1}</span>
          </div>
        </motion.section>
      ))}
    </div>
  );
}

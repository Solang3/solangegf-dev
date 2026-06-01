"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Accent = "magenta" | "cyan" | "yellow" | "muted";

const accentText: Record<Exclude<Accent, "muted">, string> = {
  magenta: "text-[var(--color-neon-magenta)]",
  cyan: "text-[var(--color-neon-cyan)]",
  yellow: "text-[var(--color-neon-yellow)]",
};

const pillStyles: Record<Accent, string> = {
  magenta:
    "border-[var(--color-neon-magenta)] text-[var(--color-neon-magenta)]",
  cyan: "border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)]",
  yellow: "border-[var(--color-neon-yellow)] text-[var(--color-neon-yellow)]",
  muted: "border-[var(--color-grid)] text-[var(--color-text-muted)]",
};

const data = {
  game: "BRAWL STARS",
  player: "SoliDollie",
  level: 54,
  trophies: 17486,
  club: "TERMIDOR",
  coop: ["Killian (11)", "Mora (15)"],
  rotation: ["Lola", "Pam"],
  veterans: ["Bibi", "Edgar", "Mortis", "Tara", "Leon"],
  grinding: { name: "Draco", note: "es un flan" },
  since: "MAR 2026",
};

export default function NowPlaying() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ type: "spring", stiffness: 110, damping: 22 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--color-grid)] bg-[rgba(31,42,68,0.22)] p-8 md:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(ellipse at 82% 12%, black 0%, transparent 65%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 82% 12%, black 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(250,204,21,0.6), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div
              className="flex items-center gap-3 text-[10px] tracking-[0.35em] text-[var(--color-neon-magenta)]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              <LivePulse />
              <span>◆ NOW PLAYING</span>
            </div>

            <h2
              className="mt-6 text-4xl font-semibold leading-none md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #F472B6 0%, #FACC15 100%)",
                }}
              >
                {data.game}
              </span>
            </h2>

            <p
              className="mt-4 flex items-center gap-3 text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="text-[var(--color-neon-cyan)]">
                @{data.player}
              </span>
              <span className="text-[var(--color-text-muted)]">·</span>
              <span
                className="text-[10px] tracking-[0.3em] text-[var(--color-neon-yellow)]"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                LV. {data.level}
              </span>
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Stat
                label="TROPHIES"
                accent="yellow"
                value={<TrophyCounter value={data.trophies} />}
              />
              <Stat label="CLUB" accent="cyan" value={data.club} />
              <Stat
                label="CO-OP"
                accent="magenta"
                value={data.coop.join(" · ")}
              />
            </div>

            <div className="mt-12 space-y-6">
              <Row
                title="MAIN ROTATION"
                items={data.rotation}
                colors={["magenta", "cyan"]}
              />
              <Row
                title="VETERAN BRAWLERS · 1000+ COPAS"
                items={data.veterans}
                colors={["yellow", "cyan", "magenta", "yellow", "cyan"]}
              />
              <div>
                <h3
                  className="text-[10px] tracking-[0.3em] text-[var(--color-text-muted)]"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  GRINDING
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <Pill color="yellow">{data.grinding.name}</Pill>
                  <span className="text-sm italic text-[var(--color-text-muted)]">
                    &ldquo;{data.grinding.note}&rdquo;
                  </span>
                </div>
              </div>
            </div>

            <p
              className="mt-12 border-t border-[var(--color-grid)] pt-6 text-[9px] tracking-[0.35em] text-[var(--color-text-muted)]"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              STATUS · TÍA GAMER MODE · SINCE {data.since}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function TrophyCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-mono)" }}>
      {display.toLocaleString("es-AR")}
    </span>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: React.ReactNode;
  accent: Exclude<Accent, "muted">;
}) {
  return (
    <div>
      <p
        className="text-[9px] tracking-[0.35em] text-[var(--color-text-muted)]"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {label}
      </p>
      <p
        className={`mt-2 text-2xl font-semibold md:text-3xl ${accentText[accent]}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
      </p>
    </div>
  );
}

function Row({
  title,
  items,
  colors,
}: {
  title: string;
  items: string[];
  colors: Accent[];
}) {
  return (
    <div>
      <h3
        className="text-[10px] tracking-[0.3em] text-[var(--color-text-muted)]"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it, i) => (
          <Pill key={it} color={colors[i % colors.length]}>
            {it}
          </Pill>
        ))}
      </div>
    </div>
  );
}

function Pill({
  children,
  color = "cyan",
}: {
  children: React.ReactNode;
  color?: Accent;
}) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${pillStyles[color]}`}
    >
      {children}
    </motion.span>
  );
}

function LivePulse() {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-neon-magenta)] opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-neon-magenta)]" />
    </span>
  );
}

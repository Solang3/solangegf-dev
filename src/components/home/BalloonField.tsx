"use client";

import type { CSSProperties } from "react";
import { usePointerLens } from "@/lib/usePointerLens";

type Balloon = {
  top: string;
  left: string;
  size: number;
  g: string;
  drift: "driftA" | "driftB" | "driftC";
  dur: number;
  delay: number;
  depth: number;
};

// Paleta fría + vívida, con un par de acentos cálidos para que el color "explote".
const balloons: Balloon[] = [
  { top: "6%", left: "4%", size: 380, g: "linear-gradient(135deg,#4f46e5,#06b6d4)", drift: "driftA", dur: 19, delay: 0, depth: 22 },
  { top: "44%", left: "64%", size: 520, g: "linear-gradient(135deg,#db2777,#7c3aed)", drift: "driftB", dur: 24, delay: -5, depth: 40 },
  { top: "58%", left: "12%", size: 300, g: "linear-gradient(135deg,#06b6d4,#22c55e)", drift: "driftC", dur: 21, delay: -9, depth: 30 },
  { top: "2%", left: "58%", size: 340, g: "linear-gradient(135deg,#f59e0b,#db2777)", drift: "driftA", dur: 26, delay: -3, depth: 34 },
  { top: "70%", left: "44%", size: 260, g: "linear-gradient(135deg,#3b82f6,#8b5cf6)", drift: "driftC", dur: 17, delay: -7, depth: 26 },
];

export default function BalloonField() {
  const ref = usePointerLens<HTMLDivElement>();

  return (
    <div ref={ref} className="balloon-field" aria-hidden>
      {balloons.map((b, i) => (
        <div
          key={i}
          className="balloon"
          style={
            {
              top: b.top,
              left: b.left,
              width: b.size,
              height: b.size,
              "--depth": `${b.depth}px`,
            } as CSSProperties
          }
        >
          <div
            className="balloon-skin"
            style={
              {
                "--g": b.g,
                animationName: `${b.drift}, blob`,
                animationDuration: `${b.dur}s, ${Math.round(b.dur * 0.7)}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${b.delay}s, 0s`,
              } as CSSProperties
            }
          />
        </div>
      ))}
    </div>
  );
}

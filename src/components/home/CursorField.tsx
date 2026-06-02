"use client";

import { useEffect, useRef } from "react";
import { getVibe } from "@/lib/vibes";

function rgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

type Blob = {
  x: number; y: number; r: number; maxR: number;
  age: number; life: number; color: string; vx: number; vy: number;
};

/**
 * Campo de color generativo en TODA la página: al mover el mouse nacen formas
 * orgánicas de color que se funden y se desvanecen, sobre el blanco y negro.
 * Va por encima del contenido con `mix-blend-mode: multiply` (tiñe el papel,
 * no tapa el texto). Color ambiente para que nunca esté vacío. pointer-events:none.
 */
export default function CursorField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // La vibe define paleta + blend: oscuras → `screen` (el color brilla),
    // claras → `multiply` (tiñe el papel sin tapar el texto).
    let palette = getVibe(document.documentElement.getAttribute("data-vibe")).palette;
    const applyVibe = () => {
      const vibe = getVibe(document.documentElement.getAttribute("data-vibe"));
      palette = vibe.palette;
      canvas.style.mixBlendMode = vibe.dark ? "screen" : "multiply";
    };
    applyVibe();
    const vibeObserver = new MutationObserver(applyVibe);
    vibeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-vibe"],
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const blobs: Blob[] = [];
    let ci = 0;
    const spawn = (x: number, y: number, big = false, seedAge = 0) => {
      if (blobs.length > 44) return;
      const color = palette[ci++ % palette.length];
      const maxR = (big ? 240 : 130) + Math.random() * 90;
      const life = (big ? 2600 : 1500) + Math.random() * 1200;
      blobs.push({
        x, y, r: maxR * 0.35, maxR,
        age: seedAge * life, life, color,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16 - 0.05,
      });
    };

    const paint = () => {
      ctx.clearRect(0, 0, w, h);
      for (const b of blobs) {
        const p = b.age / b.life;
        const alpha = Math.sin(Math.PI * Math.min(0.999, p)) * 0.55;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, rgba(b.color, alpha));
        g.addColorStop(1, rgba(b.color, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let lastX = 0, lastY = 0;
    const onMove = (e: PointerEvent) => {
      if (Math.hypot(e.clientX - lastX, e.clientY - lastY) > 34) {
        lastX = e.clientX;
        lastY = e.clientY;
        spawn(e.clientX, e.clientY);
      }
    };
    if (!reduce) window.addEventListener("pointermove", onMove);

    // semilla de color ambiente al cargar (ya "maduras" para verse al instante)
    for (let i = 0; i < 5; i++)
      spawn(Math.random() * w, Math.random() * h, true, 0.3 + Math.random() * 0.25);
    paint();

    let raf = 0;
    let prev = 0;
    let ambient = 0;

    const frame = (t: number) => {
      const dt = prev ? Math.min(t - prev, 48) : 16;
      prev = t;

      ambient += dt;
      if (ambient > 1000) {
        ambient = 0;
        spawn(Math.random() * w, Math.random() * h, true);
      }

      for (let i = blobs.length - 1; i >= 0; i--) {
        const b = blobs[i];
        b.age += dt;
        if (b.age >= b.life) {
          blobs.splice(i, 1);
          continue;
        }
        const p = b.age / b.life;
        b.r = b.maxR * (0.6 + 0.4 * Math.min(1, p * 2));
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      }

      paint();
      raf = requestAnimationFrame(frame);
    };
    if (!reduce) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      vibeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}

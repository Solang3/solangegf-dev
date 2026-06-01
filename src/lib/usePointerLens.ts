"use client";

import { useEffect, useRef } from "react";

/**
 * Sigue el puntero y escribe variables CSS en el elemento (con easing vía rAF,
 * sin re-render de React):
 *   --mx / --my  → posición en % (para máscaras / gradientes)
 *   --px / --py  → posición 0..1 (para transforms / morphing)
 * Respeta prefers-reduced-motion (sin easing, salto directo) y soporta touch.
 */
export function usePointerLens<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const DEFAULT_X = 0.5;
    const DEFAULT_Y = 0.42;
    let tx = DEFAULT_X;
    let ty = DEFAULT_Y;
    let cx = DEFAULT_X;
    let cy = DEFAULT_Y;
    let raf = 0;

    const apply = () => {
      el.style.setProperty("--mx", `${(cx * 100).toFixed(2)}%`);
      el.style.setProperty("--my", `${(cy * 100).toFixed(2)}%`);
      el.style.setProperty("--px", cx.toFixed(3));
      el.style.setProperty("--py", cy.toFixed(3));
    };

    const loop = () => {
      const ease = reduce ? 1 : 0.12;
      cx += (tx - cx) * ease;
      cy += (ty - cy) * ease;
      apply();
      if (Math.abs(tx - cx) > 0.0008 || Math.abs(ty - cy) > 0.0008) {
        raf = requestAnimationFrame(loop);
      } else {
        cx = tx;
        cy = ty;
        apply();
        raf = 0;
      }
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1);
      ty = Math.min(Math.max((e.clientY - r.top) / r.height, 0), 1);
      kick();
    };

    const onLeave = () => {
      tx = DEFAULT_X;
      ty = DEFAULT_Y;
      kick();
    };

    apply();
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}

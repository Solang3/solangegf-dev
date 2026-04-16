"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useMarkDiscovered } from "@/lib/secrets";

export default function BreakoutPage() {
  useMarkDiscovered("breakout");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let kInstance: { quit: () => void } | null = null;

    (async () => {
      const mod = await import("kaplay");
      if (disposed) return;
      const kaplay = mod.default;

      const k = kaplay({
        canvas,
        width: 800,
        height: 600,
        background: [11, 16, 32],
        global: false,
        pixelDensity: 1,
      });
      kInstance = k;

      k.scene("game", () => {
        const MAGENTA: [number, number, number] = [244, 114, 182];
        const CYAN: [number, number, number] = [34, 211, 238];
        const YELLOW: [number, number, number] = [250, 204, 21];
        const WHITE: [number, number, number] = [245, 245, 250];
        const MUTED: [number, number, number] = [120, 130, 160];

        k.add([
          k.text("◆ BREAKOUT  ·  ATARI 1976", { size: 16 }),
          k.pos(k.width() / 2, 22),
          k.anchor("center"),
          k.color(...YELLOW),
        ]);

        const paddle = k.add([
          k.rect(120, 14),
          k.pos(k.width() / 2, k.height() - 40),
          k.anchor("center"),
          k.area(),
          k.color(...WHITE),
          "paddle",
        ]);

        k.onUpdate(() => {
          const mx = k.mousePos().x;
          paddle.pos.x = Math.max(70, Math.min(k.width() - 70, mx));
        });

        const ball = k.add([
          k.circle(8),
          k.pos(k.width() / 2, k.height() / 2 + 80),
          k.area(),
          k.color(...WHITE),
          "ball",
          {
            vel: k.vec2(k.choose([220, -220]), -320),
          },
        ]);

        k.onUpdate("ball", (b) => {
          b.move(b.vel);
          if (b.pos.x < 8) {
            b.pos.x = 8;
            b.vel.x = Math.abs(b.vel.x);
          }
          if (b.pos.x > k.width() - 8) {
            b.pos.x = k.width() - 8;
            b.vel.x = -Math.abs(b.vel.x);
          }
          if (b.pos.y < 55) {
            b.pos.y = 55;
            b.vel.y = Math.abs(b.vel.y);
          }
          if (b.pos.y > k.height()) {
            k.go("lose", score);
          }
        });

        ball.onCollide("paddle", () => {
          ball.vel.y = -Math.abs(ball.vel.y);
          const diff = ball.pos.x - paddle.pos.x;
          ball.vel.x = diff * 5;
        });

        const BRICK_COLORS: Array<[number, number, number]> = [
          MAGENTA,
          CYAN,
          YELLOW,
          MAGENTA,
          CYAN,
        ];
        const cols = 10;
        const rows = BRICK_COLORS.length;
        const padX = 40;
        const padY = 70;
        const gap = 4;
        const brickW = (k.width() - padX * 2 - gap * (cols - 1)) / cols;
        const brickH = 22;

        let bricksLeft = 0;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const [cr, cg, cb] = BRICK_COLORS[r];
            k.add([
              k.rect(brickW, brickH),
              k.pos(padX + c * (brickW + gap), padY + r * (brickH + gap)),
              k.area(),
              k.color(cr, cg, cb),
              "brick",
            ]);
            bricksLeft++;
          }
        }

        let score = 0;
        const scoreLabel = k.add([
          k.text("SCORE 000", { size: 14 }),
          k.pos(18, 20),
          k.color(...CYAN),
        ]);
        const hintLabel = k.add([
          k.text("movés con el mouse", { size: 12 }),
          k.pos(k.width() - 18, 22),
          k.anchor("topright"),
          k.color(...MUTED),
        ]);

        ball.onCollide("brick", (brick) => {
          k.destroy(brick);
          ball.vel.y = -ball.vel.y;
          ball.vel.x *= 1.02;
          ball.vel.y *= 1.02;
          score += 10;
          scoreLabel.text = `SCORE ${String(score).padStart(3, "0")}`;
          hintLabel.text = "";
          bricksLeft--;
          if (bricksLeft === 0) k.go("win", score);
        });
      });

      k.scene("win", (score: number) => {
        k.add([
          k.text("YOU WIN", { size: 64 }),
          k.pos(k.width() / 2, k.height() / 2 - 40),
          k.anchor("center"),
          k.color(250, 204, 21),
        ]);
        k.add([
          k.text(`SCORE ${String(score).padStart(3, "0")}`, { size: 20 }),
          k.pos(k.width() / 2, k.height() / 2 + 10),
          k.anchor("center"),
          k.color(245, 245, 250),
        ]);
        k.add([
          k.text("click para jugar de nuevo", { size: 14 }),
          k.pos(k.width() / 2, k.height() / 2 + 60),
          k.anchor("center"),
          k.color(120, 130, 160),
        ]);
        k.onClick(() => k.go("game"));
        k.onKeyPress("space", () => k.go("game"));
      });

      k.scene("lose", (score: number) => {
        k.add([
          k.text("GAME OVER", { size: 64 }),
          k.pos(k.width() / 2, k.height() / 2 - 40),
          k.anchor("center"),
          k.color(244, 114, 182),
        ]);
        k.add([
          k.text(`SCORE ${String(score).padStart(3, "0")}`, { size: 20 }),
          k.pos(k.width() / 2, k.height() / 2 + 10),
          k.anchor("center"),
          k.color(245, 245, 250),
        ]);
        k.add([
          k.text("click para reintentar", { size: 14 }),
          k.pos(k.width() / 2, k.height() / 2 + 60),
          k.anchor("center"),
          k.color(120, 130, 160),
        ]);
        k.onClick(() => k.go("game"));
        k.onKeyPress("space", () => k.go("game"));
      });

      k.go("game");
    })();

    return () => {
      disposed = true;
      if (kInstance) {
        try {
          kInstance.quit();
        } catch {
          /* ignore */
        }
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 50% 15%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 15%, black 10%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-20 md:py-24">
        <p
          className="text-[10px] tracking-[0.35em] text-[var(--color-neon-yellow)]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          ◆ SECRETO 02 · FICHÍN 1976
        </p>
        <h1
          className="mt-6 text-5xl font-semibold leading-none md:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FACC15 0%, #F472B6 100%)",
            }}
          >
            Breakout
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
          Atari, 1976. Diseñado por Steve Wozniak y Steve Jobs antes de Apple.
          Movés la paleta con el mouse, rompés los bloques, ganás. Simple y
          eterno.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-[var(--color-grid)] bg-black shadow-[0_0_60px_rgba(34,211,238,0.12)]">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="block w-full"
            aria-label="Breakout game canvas"
          />
        </div>

        <div className="mt-10 flex items-center gap-6 text-xs">
          <Link
            href="/atlas"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            ← volver al atlas
          </Link>
          <Link
            href="/"
            className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            ← home
          </Link>
        </div>
      </div>
    </div>
  );
}

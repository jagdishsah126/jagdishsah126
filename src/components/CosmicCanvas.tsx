"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; v: number; tw: number };

/**
 * Fixed cosmic backdrop: a pre-rendered gold/blue nebula plus a drifting starfield.
 * The gradient layer is painted once per resize into an offscreen canvas, so each
 * frame only costs one drawImage plus the stars. Stops when the tab is hidden and
 * renders a single static frame for reduced-motion visitors.
 */
export default function CosmicCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let backdrop: HTMLCanvasElement | null = null;
    let frame = 0;
    let running = true;

    const paintBackdrop = () => {
      backdrop = document.createElement("canvas");
      backdrop.width = width;
      backdrop.height = height;
      const b = backdrop.getContext("2d");
      if (!b) return;

      const gold = b.createRadialGradient(
        width * 0.14,
        height * 0.08,
        0,
        width * 0.14,
        height * 0.08,
        Math.max(width, height) * 0.62,
      );
      gold.addColorStop(0, "rgba(216, 180, 90, 0.14)");
      gold.addColorStop(0.42, "rgba(138, 107, 40, 0.05)");
      gold.addColorStop(1, "rgba(0, 0, 0, 0)");
      b.fillStyle = gold;
      b.fillRect(0, 0, width, height);

      const blue = b.createRadialGradient(
        width * 0.88,
        height * 0.82,
        0,
        width * 0.88,
        height * 0.82,
        Math.max(width, height) * 0.6,
      );
      blue.addColorStop(0, "rgba(59, 130, 246, 0.13)");
      blue.addColorStop(0.46, "rgba(78, 163, 255, 0.04)");
      blue.addColorStop(1, "rgba(0, 0, 0, 0)");
      b.fillStyle = blue;
      b.fillRect(0, 0, width, height);
    };

    const seed = () => {
      const count = Math.min(190, Math.round((width * height) / 11000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.25 + 0.25,
        a: Math.random() * 0.55 + 0.15,
        v: Math.random() * 0.045 + 0.012,
        tw: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paintBackdrop();
      seed();
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      if (backdrop) ctx.drawImage(backdrop, 0, 0, width, height);

      for (const s of stars) {
        const twinkle = 0.7 + Math.sin(t * 0.0009 + s.tw) * 0.3;
        ctx.globalAlpha = s.a * twinkle;
        ctx.fillStyle = s.r > 1 ? "#e9f2ff" : "#c9d4e3";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (!reduced) {
          s.y -= s.v;
          if (s.y < -2) {
            s.y = height + 2;
            s.x = Math.random() * width;
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      if (!running) return;
      draw(t);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    resize();
    draw(0);

    if (!reduced) {
      running = false;
      start();

      const onVisibility = () => (document.hidden ? stop() : start());
      document.addEventListener("visibilitychange", onVisibility);
      window.addEventListener("resize", resize);

      return () => {
        stop();
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("resize", resize);
      };
    }

    const onResize = () => {
      resize();
      draw(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return <canvas ref={ref} className="cosmic-canvas" aria-hidden="true" />;
}

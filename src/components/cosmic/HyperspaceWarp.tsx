"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HyperspaceWarpProps {
  isWarping: boolean;
  label?: string;
  isInitialEntrance?: boolean;
}

interface WarpStar {
  x: number;
  y: number;
  z: number;
  pz: number;
}

export default function HyperspaceWarp({
  isWarping,
  label,
  isInitialEntrance = false,
}: HyperspaceWarpProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isWarping) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numStars = isInitialEntrance ? 550 : 400;
    const stars: WarpStar[] = [];
    const speed = isInitialEntrance ? 32 : 25;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * canvas.width * 2,
        y: (Math.random() - 0.5) * canvas.height * 2,
        z: Math.random() * canvas.width,
        pz: Math.random() * canvas.width,
      });
    }

    const render = () => {
      ctx.fillStyle = isInitialEntrance ? "rgba(2, 4, 10, 0.45)" : "rgba(3, 5, 12, 0.4)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 2;
          star.z = canvas.width;
          star.pz = canvas.width;
        }

        const k = 250 / star.z;
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const pk = 250 / star.pz;
          const ppx = star.x * pk + cx;
          const ppy = star.y * pk + cy;

          ctx.beginPath();
          ctx.moveTo(ppx, ppy);
          ctx.lineTo(px, py);

          // Alternating warp streak colors (cyan to violet to amber)
          ctx.strokeStyle =
            i % 3 === 0 ? "#38bdf8" : i % 3 === 1 ? "#c084fc" : "#fef08a";
          ctx.lineWidth = Math.min(3.2, (1 - star.z / canvas.width) * 3.5);
          ctx.stroke();

          star.pz = star.z;
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isWarping, isInitialEntrance]);

  return (
    <AnimatePresence>
      {isWarping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: isInitialEntrance ? 0.45 : 0.25, ease: "easeInOut" }}
          className={`hyperspace-warp fixed inset-0 pointer-events-none z-[60] flex items-center justify-center overflow-hidden ${
            isInitialEntrance ? "bg-[#02040a]" : "bg-black/60 backdrop-blur-sm"
          }`}
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Central Warp Pulse Ring */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0.9 }}
            animate={{ scale: isInitialEntrance ? 5.5 : 3.5, opacity: 0 }}
            transition={{ duration: isInitialEntrance ? 1.8 : 0.5, ease: "easeOut" }}
            className="w-48 h-48 rounded-full border-2 border-cyan-400 shadow-[0_0_50px_#38bdf8]"
          />

          {/* Entrance HUD Text Label */}
          {label && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 1.05 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute bottom-16 sm:bottom-24 z-20 flex flex-col items-center gap-2 pointer-events-none"
            >
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/80 border border-cyan-400/50 backdrop-blur-md shadow-[0_0_25px_rgba(56,189,248,0.45)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-cyan-200 uppercase">
                  {label}
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

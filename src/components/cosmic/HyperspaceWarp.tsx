"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HyperspaceWarpProps {
  isWarping: boolean;
}

interface WarpStar {
  x: number;
  y: number;
  z: number;
  pz: number;
}

export default function HyperspaceWarp({ isWarping }: HyperspaceWarpProps) {
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

    const numStars = 400;
    const stars: WarpStar[] = [];
    const speed = 25;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * canvas.width * 2,
        y: (Math.random() - 0.5) * canvas.height * 2,
        z: Math.random() * canvas.width,
        pz: Math.random() * canvas.width,
      });
    }

    const render = () => {
      ctx.fillStyle = "rgba(3, 5, 12, 0.4)";
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

          // Alternating warp streak colors (cyan to violet)
          ctx.strokeStyle = i % 2 === 0 ? "#38bdf8" : "#c084fc";
          ctx.lineWidth = Math.min(3, (1 - star.z / canvas.width) * 3);
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
  }, [isWarping]);

  return (
    <AnimatePresence>
      {isWarping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="hyperspace-warp fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden"
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          
          {/* Central Warp Pulse Ring */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0.8 }}
            animate={{ scale: 3.5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-48 h-48 rounded-full border-2 border-cyan-400 shadow-[0_0_50px_#38bdf8]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

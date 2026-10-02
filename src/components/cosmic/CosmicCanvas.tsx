"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ProjectPlanet } from "../../types";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { playPlanetHoverSound, playClickSound } from "../../utils/audio";
import { Sparkles, ExternalLink, Github, Pause, Play, RotateCcw } from "lucide-react";

interface CosmicCanvasProps {
  onSelectProject: (project: ProjectPlanet) => void;
}

export default function CosmicCanvas({ onSelectProject }: CosmicCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [hoveredPlanet, setHoveredPlanet] = useState<ProjectPlanet | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const hoveredRef = useRef<string | null>(null);

  // Dynamic planet angles state stored in a ref for smooth 60fps canvas loop
  const anglesRef = useRef<number[]>(PORTFOLIO_DATA.planets.map((_, i) => (i * (Math.PI * 2)) / 8));

  // Toggle pause/play
  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
    playClickSound();
  };

  // Reset planetary alignment
  const handleResetOrbits = () => {
    anglesRef.current = PORTFOLIO_DATA.planets.map((_, i) => (i * (Math.PI * 2)) / 8);
    playClickSound();
  };

  const checkPlanetHover = useCallback((mouseX: number, mouseY: number, cx: number, cy: number, scale: number) => {
    let found: ProjectPlanet | null = null;
    let foundPos: { x: number; y: number } | null = null;

    PORTFOLIO_DATA.planets.forEach((planet, index) => {
      const radius = planet.orbitRadius * scale;
      const angle = anglesRef.current[index];
      const px = cx + Math.cos(angle) * radius;
      const py = cy + Math.sin(angle) * radius;

      const dist = Math.hypot(mouseX - px, mouseY - py);
      const hitRadius = Math.max(planet.size + 14, 22);

      if (dist <= hitRadius) {
        found = planet;
        foundPos = { x: px, y: py };
      }
    });

    if (found) {
      const currentPlanet = found as ProjectPlanet;
      if (hoveredRef.current !== currentPlanet.id) {
        hoveredRef.current = currentPlanet.id;
        playPlanetHoverSound(300 + currentPlanet.solarIndex * 60);
      }
      setHoveredPlanet(currentPlanet);
      setTooltipPos(foundPos);
    } else {
      hoveredRef.current = null;
      setHoveredPlanet(null);
      setTooltipPos(null);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Responsive scale factor for mobile vs desktop
      const baseMaxRadius = 450;
      const availableRadius = Math.min(width, height) / 2 - 40;
      const scale = Math.max(0.48, Math.min(1.0, availableRadius / baseMaxRadius));

      // 1. Draw central gravitational ripple
      const time = Date.now() * 0.002;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, 55 + Math.sin(time) * 4, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.restore();

      // 2. Draw 8 Orbits and Planets
      PORTFOLIO_DATA.planets.forEach((planet, index) => {
        const radius = planet.orbitRadius * scale;
        const isHovered = hoveredRef.current === planet.id;

        // Update angle if not paused or hovered
        if (!isPaused) {
          const speedMultiplier = isHovered ? 0.2 : 1;
          anglesRef.current[index] += planet.orbitSpeed * speedMultiplier;
        }

        const angle = anglesRef.current[index];
        const px = cx + Math.cos(angle) * radius;
        const py = cy + Math.sin(angle) * radius;

        // Orbit path line
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered ? "rgba(56, 189, 248, 0.45)" : "rgba(255, 255, 255, 0.06)";
        ctx.lineWidth = isHovered ? 1.5 : 1;
        ctx.setLineDash(isHovered ? [] : [3, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Planet outer glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, (planet.size + (isHovered ? 6 : 2)) * scale, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.shadowBlur = isHovered ? 25 : 12;
        ctx.shadowColor = planet.glowColor;
        ctx.globalAlpha = isHovered ? 0.95 : 0.75;
        ctx.fill();

        // Planet core sphere
        ctx.beginPath();
        ctx.arc(px, py, planet.size * scale, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(
          px - planet.size * 0.3 * scale,
          py - planet.size * 0.3 * scale,
          1,
          px,
          py,
          planet.size * scale
        );
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(0.3, planet.color);
        grad.addColorStop(1, "#030712");
        ctx.fillStyle = grad;
        ctx.globalAlpha = 1;
        ctx.fill();

        // Planet Ring for Saturn / "My_Nepse_Diary"
        if (planet.id === "my-nepse-diary") {
          ctx.beginPath();
          ctx.ellipse(px, py, planet.size * 1.8 * scale, planet.size * 0.6 * scale, 0.4, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(226, 232, 240, 0.5)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Planet Name Label
        ctx.font = `600 ${Math.max(9, Math.round(11 * scale))}px 'Fira Code', monospace`;
        ctx.fillStyle = isHovered ? "#38bdf8" : "rgba(203, 213, 225, 0.75)";
        ctx.textAlign = "center";
        ctx.fillText(planet.name, px, py + (planet.size + 14) * scale);

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [isPaused]);

  // Handle canvas mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;
    const cx = width / 2;
    const cy = height / 2;

    const baseMaxRadius = 450;
    const availableRadius = Math.min(width, height) / 2 - 40;
    const scale = Math.max(0.48, Math.min(1.0, availableRadius / baseMaxRadius));

    checkPlanetHover(mouseX, mouseY, cx, cy, scale);
  };

  const handleMouseLeave = () => {
    hoveredRef.current = null;
    setHoveredPlanet(null);
    setTooltipPos(null);
  };

  const handleClick = () => {
    if (hoveredPlanet) {
      playClickSound();
      onSelectProject(hoveredPlanet);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[620px] md:h-[720px] flex items-center justify-center overflow-hidden select-none"
    >
      {/* Background Starfield Canvas */}
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="absolute inset-0 w-full h-full cursor-pointer z-10"
      />

      {/* Center The Creator Singularity (Avatar + Pulsing Accretion Disk) */}
      <div className="absolute z-20 pointer-events-none flex flex-col items-center justify-center">
        <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
          {/* Gravitational Accretion Disk */}
          <div className="absolute -inset-4 rounded-full border border-cyan-400/30 animate-spin [animation-duration:20s]" />
          <div className="absolute -inset-2 rounded-full border border-violet-500/40 animate-spin [animation-duration:12s] [animation-direction:reverse]" />
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500/20 via-violet-600/20 to-emerald-500/10 blur-xl animate-pulse" />

          {/* Central Avatar */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-300 shadow-[0_0_25px_rgba(56,189,248,0.5)]">
            <Image
              src={PORTFOLIO_DATA.personal.avatarImg}
              alt="Jagdish Sah Avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Central Core Title */}
        <div className="mt-3 text-center">
          <span className="text-xs font-mono tracking-widest text-cyan-300 bg-space-card/80 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
            JAGDISH CORE ✦
          </span>
        </div>
      </div>

      {/* Planet Floating Tooltip Popover */}
      {hoveredPlanet && tooltipPos && (
        <div
          style={{
            left: `${Math.min(Math.max(tooltipPos.x - 140, 20), (containerRef.current?.clientWidth || 800) - 300)}px`,
            top: `${Math.max(tooltipPos.y - 180, 20)}px`,
          }}
          className="absolute z-30 w-72 p-4 cosmic-glass pointer-events-auto shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <span
              style={{ color: hoveredPlanet.color }}
              className="text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {hoveredPlanet.codename}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
              {hoveredPlanet.status}
            </span>
          </div>

          <h4 className="text-sm font-bold text-white mb-1 leading-tight">{hoveredPlanet.name}</h4>
          <p className="text-xs text-slate-300 mb-3 line-clamp-2">{hoveredPlanet.tagline}</p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {hoveredPlanet.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => onSelectProject(hoveredPlanet)}
              className="flex-1 py-1.5 px-3 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
            >
              Inspect Planet 🔭
            </button>
            {hoveredPlanet.liveUrl && (
              <a
                href={hoveredPlanet.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 transition-all"
                title="Open Live App"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {hoveredPlanet.githubUrl && (
              <a
                href={hoveredPlanet.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 transition-all"
                title="View GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Solar System Bottom Controls */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
        <button
          onClick={handleTogglePause}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-space-card/80 hover:bg-space-card-hover border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md transition-all shadow-md"
        >
          {isPaused ? <Play className="w-3.5 h-3.5 text-cyan-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
          <span>{isPaused ? "Resume Orbit" : "Pause Orbit"}</span>
        </button>

        <button
          onClick={handleResetOrbits}
          className="p-1.5 rounded-full bg-space-card/80 hover:bg-space-card-hover border border-white/10 text-slate-300 backdrop-blur-md transition-all shadow-md"
          title="Align Orbits"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Planetary Legend Indicator */}
      <div className="absolute bottom-4 right-4 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-card/80 border border-white/10 text-xs font-mono text-slate-400 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>8 Planetary Systems Active</span>
      </div>
    </div>
  );
}

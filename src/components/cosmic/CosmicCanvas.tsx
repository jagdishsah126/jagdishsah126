"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ProjectPlanet } from "../../types";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { playPlanetHoverSound, playClickSound } from "../../utils/audio";
import {
  Sparkles,
  ExternalLink,
  Github,
  Pause,
  Play,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Layers,
  X,
} from "lucide-react";

interface CosmicCanvasProps {
  onSelectProject: (project: ProjectPlanet) => void;
}

interface ProjectedBody {
  type: "planet" | "sun";
  planet?: ProjectPlanet;
  x: number;
  y: number;
  z: number;
  size: number;
  scale: number;
  alpha: number;
}

export default function CosmicCanvas({ onSelectProject }: CosmicCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D Orbit Camera State
  const [rotX, setRotX] = useState<number>(0.95); // Pitch angle (tilt)
  const [rotY, setRotY] = useState<number>(0.25); // Yaw angle (rotation)
  const [zoomLevel, setZoomLevel] = useState<number>(1.0); // Zoom level
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hoveredPlanet, setHoveredPlanet] = useState<ProjectPlanet | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [pinnedPlanet, setPinnedPlanet] = useState<ProjectPlanet | null>(null);

  // Mutable refs for 60fps animations
  const rotXRef = useRef<number>(0.95);
  const rotYRef = useRef<number>(0.25);
  const zoomRef = useRef<number>(1.0);
  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hoveredRef = useRef<string | null>(null);
  const isOverTooltipRef = useRef<boolean>(false);

  // Initial angles of 8 planets spaced around the circle
  const anglesRef = useRef<number[]>(
    PORTFOLIO_DATA.planets.map((_, i) => (i * (Math.PI * 2)) / 8)
  );

  // Synchronize state with refs
  useEffect(() => {
    rotXRef.current = rotX;
  }, [rotX]);
  useEffect(() => {
    rotYRef.current = rotY;
  }, [rotY]);
  useEffect(() => {
    zoomRef.current = zoomLevel;
  }, [zoomLevel]);

  // Zoom helpers
  const handleZoomIn = () => {
    playClickSound();
    setZoomLevel((prev) => Math.min(2.2, prev + 0.2));
  };

  const handleZoomOut = () => {
    playClickSound();
    setZoomLevel((prev) => Math.max(0.45, prev - 0.2));
  };

  const handleResetView = () => {
    playClickSound();
    setRotX(0.95);
    setRotY(0.25);
    setZoomLevel(1.0);
    anglesRef.current = PORTFOLIO_DATA.planets.map((_, i) => (i * (Math.PI * 2)) / 8);
    setHoveredPlanet(null);
    setPinnedPlanet(null);
  };

  // Distinct 3D Keplerian Elliptical Orbital Parameters for all 8 Planets
  const keplerParamsRef = useRef<
    { eccentricity: number; inclination: number; node: number }[]
  >([
    { eccentricity: 0.24, inclination: 0.24, node: 0.5 },  // Mercury / Floorsheet Archive
    { eccentricity: 0.15, inclination: -0.18, node: 1.3 }, // Venus / Canteen
    { eccentricity: 0.17, inclination: 0.08, node: 2.2 },  // Earth / MD Reader
    { eccentricity: 0.27, inclination: -0.28, node: 3.1 }, // Mars / Insta Analyzer
    { eccentricity: 0.18, inclination: 0.32, node: 4.0 },  // Jupiter / Nepse Data
    { eccentricity: 0.22, inclination: -0.25, node: 4.8 }, // Saturn / Nepse Diary
    { eccentricity: 0.21, inclination: 0.35, node: 5.6 },  // Uranus / Mobile Store
    { eccentricity: 0.25, inclination: -0.32, node: 0.2 }, // Neptune / Ask Her
  ]);

  // Compute 3D coordinate on an inclined Keplerian ellipse (Sun at one focus)
  const getKeplerPoint = useCallback(
    (
      radius: number,
      theta: number,
      params: { eccentricity: number; inclination: number; node: number }
    ) => {
      const e = params.eccentricity;
      const a = radius;
      const b = a * Math.sqrt(Math.max(0.1, 1 - e * e));
      const c = a * e; // Focal distance: Sun is at (0, 0, 0)

      // Point in planet's orbital plane
      const xLoc = a * Math.cos(theta) - c;
      const zLoc = b * Math.sin(theta);

      // Rotate in 3D by inclination (tilt) and node (orbital orientation)
      const cosInc = Math.cos(params.inclination);
      const sinInc = Math.sin(params.inclination);
      const cosNode = Math.cos(params.node);
      const sinNode = Math.sin(params.node);

      const xOrb = xLoc * cosNode - zLoc * sinNode * cosInc;
      const yOrb = zLoc * sinInc;
      const zOrb = xLoc * sinNode + zLoc * cosNode * cosInc;

      return { x: xOrb, y: yOrb, z: zOrb };
    },
    []
  );

  // 3D Point Rotation & Perspective Projection
  const project3D = useCallback(
    (x: number, y: number, z: number, cx: number, cy: number, baseScale: number) => {
      const rx = rotXRef.current;
      const ry = rotYRef.current;
      const zoom = zoomRef.current;

      // 1. Rotate around Y axis (Yaw)
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;
      const y1 = y;

      // 2. Rotate around X axis (Pitch)
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;
      const x2 = x1;

      // 3. Perspective Projection
      const cameraDistance = 900;
      const depth = cameraDistance - z2;
      const perspective = Math.max(0.2, cameraDistance / Math.max(depth, 100));

      const finalScale = perspective * zoom * baseScale;
      const px = cx + x2 * finalScale;
      const py = cy + y2 * finalScale;

      return {
        px,
        py,
        pz: z2,
        scale: finalScale,
        perspective,
      };
    },
    []
  );

  // Main Canvas Render Loop
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

      // Base responsive scale factor
      const baseMaxRadius = 450;
      const availableRadius = Math.min(width, height) / 2 - 30;
      const baseScale = Math.max(0.48, Math.min(1.0, availableRadius / baseMaxRadius));

      // 1. Draw 3D Inclined Keplerian Elliptical Orbit Trails
      PORTFOLIO_DATA.planets.forEach((planet, index) => {
        const isHovered =
          hoveredPlanet?.id === planet.id || pinnedPlanet?.id === planet.id;
        const radius = planet.orbitRadius;
        const kParams = keplerParamsRef.current[index];
        const segments = 64;

        ctx.beginPath();
        for (let i = 0; i <= segments; i++) {
          const theta = (i / segments) * Math.PI * 2;
          const pt = getKeplerPoint(radius, theta, kParams);
          const proj = project3D(pt.x, pt.y, pt.z, cx, cy, baseScale);

          if (i === 0) {
            ctx.moveTo(proj.px, proj.py);
          } else {
            ctx.lineTo(proj.px, proj.py);
          }
        }

        ctx.strokeStyle = isHovered
          ? "rgba(56, 189, 248, 0.65)"
          : "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.setLineDash(isHovered ? [] : [4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 2. Prepare Bodies for 3D Depth Sorting
      const bodies: ProjectedBody[] = [];

      // Add Central Sun / Singularity Core
      const sunProj = project3D(0, 0, 0, cx, cy, baseScale);
      bodies.push({
        type: "sun",
        x: sunProj.px,
        y: sunProj.py,
        z: sunProj.pz,
        size: 28 * sunProj.scale,
        scale: sunProj.scale,
        alpha: 1,
      });

      // Update angles & add planets on their Keplerian ellipses
      PORTFOLIO_DATA.planets.forEach((planet, index) => {
        const isHovered = hoveredRef.current === planet.id;

        // If not paused and not hovered, advance planetary angle
        if (!isPaused && !isHovered && (!pinnedPlanet || pinnedPlanet.id !== planet.id)) {
          anglesRef.current[index] += planet.orbitSpeed * 0.8;
        }

        const angle = anglesRef.current[index];
        const radius = planet.orbitRadius;
        const kParams = keplerParamsRef.current[index];
        const pt = getKeplerPoint(radius, angle, kParams);

        const proj = project3D(pt.x, pt.y, pt.z, cx, cy, baseScale);
        const depthFactor = (proj.pz + 450) / 900;
        const alpha = Math.max(0.4, Math.min(1.0, 0.5 + depthFactor * 0.5));

        bodies.push({
          type: "planet",
          planet,
          x: proj.px,
          y: proj.py,
          z: proj.pz,
          size: planet.size * proj.scale,
          scale: proj.scale,
          alpha,
        });
      });

      // 3. Sort bodies from back (lowest z) to front (highest z)
      bodies.sort((a, b) => a.z - b.z);

      // 4. Render sorted 3D bodies with perspective depth
      bodies.forEach((body) => {
        if (body.type === "sun") {
          // Central Star Singularity Halo
          ctx.save();
          ctx.beginPath();
          ctx.arc(body.x, body.y, body.size * 1.8, 0, Math.PI * 2);
          const sunGlow = ctx.createRadialGradient(
            body.x,
            body.y,
            2,
            body.x,
            body.y,
            body.size * 1.8
          );
          sunGlow.addColorStop(0, "rgba(56, 189, 248, 0.4)");
          sunGlow.addColorStop(0.5, "rgba(139, 92, 246, 0.2)");
          sunGlow.addColorStop(1, "transparent");
          ctx.fillStyle = sunGlow;
          ctx.fill();

          // Central Star Core
          ctx.beginPath();
          ctx.arc(body.x, body.y, body.size, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(14, 18, 38, 0.9)";
          ctx.strokeStyle = "rgba(56, 189, 248, 0.7)";
          ctx.lineWidth = 2;
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        } else if (body.planet) {
          const planet = body.planet;
          const isHovered =
            (hoveredPlanet?.id === planet.id) || (pinnedPlanet?.id === planet.id);
          const radius = (planet.size + (isHovered ? 4 : 0)) * body.scale;

          ctx.save();

          // Planet Outer Aura Glow
          ctx.beginPath();
          ctx.arc(body.x, body.y, radius * 1.9, 0, Math.PI * 2);
          ctx.fillStyle = planet.color;
          ctx.shadowBlur = isHovered ? 30 : 14;
          ctx.shadowColor = planet.glowColor;
          ctx.globalAlpha = isHovered ? 0.95 : body.alpha * 0.75;
          ctx.fill();

          // Planet Sphere
          ctx.beginPath();
          ctx.arc(body.x, body.y, radius, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(
            body.x - radius * 0.35,
            body.y - radius * 0.35,
            1,
            body.x,
            body.y,
            radius
          );
          grad.addColorStop(0, "#ffffff");
          grad.addColorStop(0.3, planet.color);
          grad.addColorStop(1, "#02040a");
          ctx.fillStyle = grad;
          ctx.globalAlpha = 1;
          ctx.fill();

          // Special 3D Ring for Saturn (My_Nepse_Diary)
          if (planet.id === "my-nepse-diary") {
            ctx.beginPath();
            ctx.ellipse(
              body.x,
              body.y,
              radius * 2.2,
              radius * 0.8,
              rotXRef.current * 0.4,
              0,
              Math.PI * 2
            );
            ctx.strokeStyle = "rgba(226, 232, 240, 0.6)";
            ctx.lineWidth = 2 * body.scale;
            ctx.stroke();
          }

          // Planet Name Tag
          ctx.font = `600 ${Math.max(9, Math.round(11 * body.scale))}px 'Fira Code', monospace`;
          ctx.fillStyle = isHovered ? "#38bdf8" : `rgba(226, 232, 240, ${body.alpha * 0.85})`;
          ctx.textAlign = "center";
          ctx.fillText(planet.name, body.x, body.y + radius + 15 * body.scale);

          ctx.restore();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [project3D, isPaused, hoveredPlanet, pinnedPlanet]);

  // Mouse wheel Zoom event listener (with passive: false to prevent outer page scroll)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomDelta = -e.deltaY * 0.0015;
      setZoomLevel((prev) => Math.max(0.45, Math.min(2.5, prev + zoomDelta)));
    };

    canvas.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // 3D Drag Rotation Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Handle 3D rotation if dragging
    if (isDraggingRef.current) {
      const deltaX = e.clientX - lastMousePosRef.current.x;
      const deltaY = e.clientY - lastMousePosRef.current.y;
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };

      setRotY((prev) => prev + deltaX * 0.006);
      setRotX((prev) => Math.max(-0.2, Math.min(1.4, prev + deltaY * 0.006)));
      return;
    }

    // Hit-testing for planet hover in 3D projection
    const width = rect.width;
    const height = rect.height;
    const cx = width / 2;
    const cy = height / 2;
    const baseMaxRadius = 450;
    const availableRadius = Math.min(width, height) / 2 - 30;
    const baseScale = Math.max(0.48, Math.min(1.0, availableRadius / baseMaxRadius));

    let hit: ProjectPlanet | null = null;
    let hitPos: { x: number; y: number } | null = null;

    PORTFOLIO_DATA.planets.forEach((planet, index) => {
      const angle = anglesRef.current[index];
      const radius = planet.orbitRadius;
      const kParams = keplerParamsRef.current[index];
      const pt = getKeplerPoint(radius, angle, kParams);

      const proj = project3D(pt.x, pt.y, pt.z, cx, cy, baseScale);
      const dist = Math.hypot(mouseX - proj.px, mouseY - proj.py);
      const hitRadius = Math.max(planet.size * proj.scale + 16, 26);

      if (dist <= hitRadius) {
        hit = planet;
        hitPos = { x: proj.px, y: proj.py };
      }
    });

    if (hit) {
      const currentPlanet = hit as ProjectPlanet;
      if (hoveredRef.current !== currentPlanet.id) {
        hoveredRef.current = currentPlanet.id;
        playPlanetHoverSound(300 + currentPlanet.solarIndex * 60);
      }
      setHoveredPlanet(currentPlanet);
      setTooltipPos(hitPos);
    } else {
      // Only clear hover if cursor is not on the tooltip card
      if (!isOverTooltipRef.current) {
        hoveredRef.current = null;
        setHoveredPlanet(null);
        setTooltipPos(null);
      }
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    if (!isOverTooltipRef.current) {
      hoveredRef.current = null;
      setHoveredPlanet(null);
      setTooltipPos(null);
    }
  };

  // Touch support for 3D rotation & pinch zoom
  const touchStartRef = useRef<{ x: number; y: number; dist?: number }>({ x: 0, y: 0 });

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartRef.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        dist,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - touchStartRef.current.x;
      const deltaY = e.touches[0].clientY - touchStartRef.current.y;
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      setRotY((prev) => prev + deltaX * 0.007);
      setRotX((prev) => Math.max(-0.2, Math.min(1.4, prev + deltaY * 0.007)));
    } else if (e.touches.length === 2 && touchStartRef.current.dist) {
      const newDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scaleDelta = (newDist - touchStartRef.current.dist) * 0.004;
      touchStartRef.current.dist = newDist;
      setZoomLevel((prev) => Math.max(0.45, Math.min(2.5, prev + scaleDelta)));
    }
  };

  const handleClickCanvas = () => {
    if (hoveredPlanet) {
      playClickSound();
      setPinnedPlanet(hoveredPlanet);
    }
  };

  // Determine active project to display (either hovered or pinned)
  const activeDisplayPlanet = pinnedPlanet || hoveredPlanet;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[650px] md:h-[750px] flex items-center justify-center overflow-hidden select-none"
    >
      {/* 3D Cosmic Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickCanvas}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-10"
      />

      {/* Center 3D Dual-Sided Celestial Medallion (Option 1 + Option 2) */}
      {(() => {
        // Calculate 3D orientation angles
        const yawDeg = (rotY * 180) / Math.PI;
        const pitchDeg = (rotX * 180) / Math.PI - 55; // Tilt relative to orbital plane
        const isFacingBack = Math.cos(rotY) < 0;

        return (
          <div className="absolute z-20 pointer-events-none flex flex-col items-center justify-center">
            {/* 3D Perspective Wrapper */}
            <div
              className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center"
              style={{ perspective: "1000px" }}
            >
              {/* Outer 3D Cosmic Accretion Rings */}
              <div
                className="absolute -inset-5 rounded-full border border-cyan-400/30 animate-spin [animation-duration:24s] pointer-events-none"
                style={{
                  transform: `rotateX(${pitchDeg * 0.7}deg) rotateZ(15deg)`,
                  transformStyle: "preserve-3d",
                }}
              />
              <div
                className="absolute -inset-3 rounded-full border border-violet-500/40 animate-spin [animation-duration:14s] [animation-direction:reverse] pointer-events-none"
                style={{
                  transform: `rotateX(${pitchDeg * 0.7}deg) rotateZ(-25deg)`,
                  transformStyle: "preserve-3d",
                }}
              />
              <div
                className={`absolute -inset-7 rounded-full blur-2xl transition-colors duration-500 ${
                  isFacingBack
                    ? "bg-gradient-to-r from-violet-600/30 via-amber-500/20 to-purple-600/20"
                    : "bg-gradient-to-r from-cyan-500/30 via-emerald-500/20 to-blue-600/20"
                } animate-pulse`}
              />

              {/* The Rotating 3D Dual-Sided Medallion */}
              <div
                className="relative w-full h-full rounded-full transition-transform duration-75"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${pitchDeg * 0.4}deg) rotateY(${yawDeg}deg)`,
                }}
              >
                {/* SIDE A: Creative / Builder Avatar (Front Face) */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden border-2 border-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.6)] bg-space-void"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    src={PORTFOLIO_DATA.personal.avatarImg}
                    alt="Jagdish Sah Creative Avatar"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle Glass Surface Glint */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                </div>

                {/* SIDE B: Executive / Formal Portrait (Back Face) */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden border-2 border-violet-300 shadow-[0_0_30px_rgba(139,92,246,0.6)] bg-space-void"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Image
                    src={PORTFOLIO_DATA.personal.formalPhoto}
                    alt="Jagdish Sah Executive Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle Amber Glass Glint */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-300/15 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Dynamic Dimensional Identity Badge */}
            <div className="mt-3 text-center transition-all duration-300">
              <span
                className={`text-[11px] font-mono tracking-widest px-3 py-1 rounded-full backdrop-blur-md border shadow-lg transition-colors duration-300 ${
                  isFacingBack
                    ? "text-violet-200 border-violet-400/40 bg-violet-950/80 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                    : "text-cyan-200 border-cyan-400/40 bg-cyan-950/80 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                }`}
              >
                {isFacingBack ? "✦ PROFESSIONAL CITADEL ✦" : "✦ CREATIVE HORIZON ✦"}
              </span>
              <span className="block text-[9px] font-mono text-slate-400 mt-1 opacity-75">
                {isFacingBack ? "Executive Profile & NEPSE Analyst" : "Creative Builder & Autonomous Systems"}
              </span>
            </div>
          </div>
        );
      })()}

      {/* Stable, Zero-Flicker Planetary Inspection Card */}
      {activeDisplayPlanet && (
        <div
          onMouseEnter={() => {
            isOverTooltipRef.current = true;
          }}
          onMouseLeave={() => {
            isOverTooltipRef.current = false;
            if (!pinnedPlanet) {
              setHoveredPlanet(null);
            }
          }}
          className="absolute z-30 top-6 right-6 w-80 p-5 cosmic-glass shadow-2xl border-cyan-400/40 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Card Header */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span
              style={{ color: activeDisplayPlanet.color }}
              className="text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {activeDisplayPlanet.codename}
            </span>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                {activeDisplayPlanet.status}
              </span>
              {pinnedPlanet && (
                <button
                  onClick={() => setPinnedPlanet(null)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
                  title="Close inspection"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <h4 className="text-base font-bold text-white mb-1 leading-snug">
            {activeDisplayPlanet.name}
          </h4>
          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            {activeDisplayPlanet.tagline}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {activeDisplayPlanet.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-white/10">
            <button
              onClick={() => onSelectProject(activeDisplayPlanet)}
              className="flex-1 py-2 px-3 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Architecture</span>
            </button>
            {activeDisplayPlanet.liveUrl && (
              <a
                href={activeDisplayPlanet.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all"
                title="Launch Live App"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {activeDisplayPlanet.githubUrl && (
              <a
                href={activeDisplayPlanet.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all"
                title="View GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* 3D Navigation & Zoom Controls (Bottom Left) */}
      <div className="absolute bottom-5 left-5 z-20 flex flex-wrap items-center gap-2">
        {/* Play / Pause Orbit */}
        <button
          onClick={() => {
            playClickSound();
            setIsPaused(!isPaused);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-card/90 hover:bg-space-card-hover border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md transition-all shadow-md"
        >
          {isPaused ? <Play className="w-3.5 h-3.5 text-cyan-400" /> : <Pause className="w-3.5 h-3.5 text-amber-400" />}
          <span>{isPaused ? "Resume" : "Pause"}</span>
        </button>

        {/* Zoom In */}
        <button
          onClick={handleZoomIn}
          className="p-1.5 rounded-xl bg-space-card/90 hover:bg-space-card-hover border border-white/10 text-slate-300 backdrop-blur-md transition-all shadow-md"
          title="Zoom In (+)"
        >
          <ZoomIn className="w-4 h-4 text-cyan-400" />
        </button>

        {/* Zoom Out */}
        <button
          onClick={handleZoomOut}
          className="p-1.5 rounded-xl bg-space-card/90 hover:bg-space-card-hover border border-white/10 text-slate-300 backdrop-blur-md transition-all shadow-md"
          title="Zoom Out (-)"
        >
          <ZoomOut className="w-4 h-4 text-violet-400" />
        </button>

        {/* Reset 3D View */}
        <button
          onClick={handleResetView}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-space-card/90 hover:bg-space-card-hover border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md transition-all shadow-md"
          title="Reset 3D Angle & Zoom"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset 3D</span>
        </button>
      </div>

      {/* Interactive 3D Instruction Tag (Bottom Right) */}
      <div className="absolute bottom-5 right-5 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-space-card/90 border border-white/10 text-[11px] font-mono text-slate-400 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>3D Drag to Rotate • Scroll to Zoom</span>
      </div>
    </div>
  );
}

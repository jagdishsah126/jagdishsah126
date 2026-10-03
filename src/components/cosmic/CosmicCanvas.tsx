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
  Layers,
  X,
} from "lucide-react";

interface CosmicCanvasProps {
  onSelectProject: (project: ProjectPlanet) => void;
}

// 3D Background Celestial Interfaces (Zara Cosmic Engine)
interface VolumetricStar {
  x: number;
  y: number;
  z: number;
  baseSize: number;
  color: string;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface CosmicDust {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  alpha: number;
  pulsePhase: number;
}

interface BackgroundPlanet {
  name: string;
  baseX: number;
  baseY: number;
  baseZ: number;
  radius: number;
  color: string;
  glowColor: string;
  hasRing?: boolean;
  ringColor?: string;
  driftSpeed: number;
  angle: number;
}

interface CosmicComet {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  trail: { x: number; y: number; z: number }[];
  color: string;
  glowColor: string;
  size: number;
  active: boolean;
  spawnTimer: number;
}

interface CosmicHeart {
  baseX: number;
  baseY: number;
  baseZ: number;
  emoji: string;
  phase: number;
  speed: number;
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
  const medallionWrapperRef = useRef<HTMLDivElement | null>(null);
  const ring1Ref = useRef<HTMLDivElement | null>(null);
  const ring2Ref = useRef<HTMLDivElement | null>(null);

  // 3D Orbit Camera State
  const [rotX, setRotX] = useState<number>(0.95); // Pitch angle (tilt)
  const [rotY, setRotY] = useState<number>(0.25); // Yaw angle (rotation)
  const [zoomLevel, setZoomLevel] = useState<number>(1.0); // Zoom level
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hoveredPlanet, setHoveredPlanet] = useState<ProjectPlanet | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [pinnedPlanet, setPinnedPlanet] = useState<ProjectPlanet | null>(null);
  const [isFacingBackState, setIsFacingBackState] = useState<boolean>(false);
  // Tracks whether any planet is in front of the central sun (medallion should go behind)
  const [medallionBehind, setMedallionBehind] = useState<boolean>(false);

  // Mutable refs for 60fps animations with smooth inertia damping (Project-Zara style)
  const rotXRef = useRef<number>(0.95);
  const rotYRef = useRef<number>(0.25);
  const targetRotXRef = useRef<number>(0.95);
  const targetRotYRef = useRef<number>(0.25);
  const zoomRef = useRef<number>(1.0);
  const targetZoomRef = useRef<number>(1.0);

  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hoveredRef = useRef<string | null>(null);
  const isOverTooltipRef = useRef<boolean>(false);
  // Throttle depth-check state updates — only set state every N frames
  const depthCheckCounterRef = useRef<number>(0);
  const medallionBehindRef = useRef<boolean>(false);

  // 3D Background Celestial Elements
  const starsRef = useRef<VolumetricStar[]>([]);
  const dustRef = useRef<CosmicDust[]>([]);
  const bgPlanetsRef = useRef<BackgroundPlanet[]>([]);
  const cometsRef = useRef<CosmicComet[]>([]);
  const heartsRef = useRef<CosmicHeart[]>([]);

  // Initial angles of 8 planets spaced around the ellipse
  const anglesRef = useRef<number[]>(
    PORTFOLIO_DATA.planets.map((_, i) => (i * (Math.PI * 2)) / 8)
  );

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
      const depth = (cameraDistance / zoom) - z2;
      if (depth <= 20) return null; // Behind camera clipping

      const perspective = Math.max(0.15, cameraDistance / depth);
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

  // Initialize 3D Volumetric Background Bodies (Stars, Dust, Comets, Planets, Hearts)
  useEffect(() => {
    // 1. Volumetric Stars (550 stars across spherical 3D space, Project-Zara palette)
    const starColors = [
      "#ffffff", "#e0e7ff", "#c7d2fe",
      "#38bdf8", "#818cf8", "#c084fc",
      "#f43f5e", "#fbbf24", "#10b981",
    ];
    const newStars: VolumetricStar[] = [];
    const maxRadius = 1400;

    for (let i = 0; i < 550; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.cbrt(Math.random()) * maxRadius + 180;

      newStars.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        baseSize: Math.random() * 1.8 + 0.6,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        alpha: Math.random() * 0.75 + 0.25,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }
    starsRef.current = newStars;

    // 2. Cosmic Dust Micro-Dots (250 shimmering particles around the orbital disc)
    const dustColors = ["#38bdf8", "#c084fc", "#fbbf24", "#f43f5e", "#34d399"];
    const newDust: CosmicDust[] = [];
    for (let i = 0; i < 250; i++) {
      const r = Math.random() * 950 + 200;
      const theta = Math.random() * Math.PI * 2;
      const ySpread = (Math.random() - 0.5) * 450;
      newDust.push({
        x: r * Math.cos(theta),
        y: ySpread,
        z: r * Math.sin(theta),
        size: Math.random() * 1.3 + 0.4,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
        alpha: Math.random() * 0.55 + 0.15,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    dustRef.current = newDust;

    // 3. Distant Background Planets (4 subtle celestial bodies in deep 3D space)
    bgPlanetsRef.current = [
      {
        name: "Zara Prime",
        baseX: -640,
        baseY: -220,
        baseZ: -520,
        radius: 26,
        color: "#c084fc",
        glowColor: "rgba(192, 132, 252, 0.45)",
        hasRing: true,
        ringColor: "rgba(236, 72, 153, 0.5)",
        driftSpeed: 0.14,
        angle: 0.5,
      },
      {
        name: "Celestia",
        baseX: 580,
        baseY: 280,
        baseZ: -440,
        radius: 20,
        color: "#38bdf8",
        glowColor: "rgba(56, 189, 248, 0.4)",
        hasRing: false,
        driftSpeed: -0.12,
        angle: 2.2,
      },
      {
        name: "Ember Core",
        baseX: 640,
        baseY: -260,
        baseZ: -580,
        radius: 17,
        color: "#fbbf24",
        glowColor: "rgba(251, 191, 36, 0.4)",
        hasRing: false,
        driftSpeed: 0.18,
        angle: 4.1,
      },
      {
        name: "Verdant Pearl",
        baseX: -500,
        baseY: 340,
        baseZ: -460,
        radius: 14,
        color: "#10b981",
        glowColor: "rgba(16, 185, 129, 0.35)",
        hasRing: true,
        ringColor: "rgba(52, 211, 153, 0.4)",
        driftSpeed: -0.2,
        angle: 5.4,
      },
    ];

    // 4. 3D Comets / Shooting Stars (3 dynamic celestial comets with 3D trajectories)
    const cometColors = ["#38bdf8", "#fbbf24", "#f43f5e", "#e0e7ff"];
    const newComets: CosmicComet[] = [];
    for (let i = 0; i < 3; i++) {
      newComets.push({
        x: -900 + Math.random() * 1800,
        y: -750 - Math.random() * 300,
        z: (Math.random() - 0.5) * 1000,
        vx: (Math.random() * 10 + 12) * (Math.random() > 0.5 ? 1 : -1),
        vy: Math.random() * 12 + 14,
        vz: (Math.random() - 0.5) * 8,
        trail: [],
        color: cometColors[i % cometColors.length],
        glowColor: cometColors[i % cometColors.length],
        size: Math.random() * 2.2 + 2.0,
        active: i === 0, // First active immediately, others delayed
        spawnTimer: i * 140,
      });
    }
    cometsRef.current = newComets;

    // 5. Small 3D Floating Heart Emojis (💖, ✨, 💕, 🤍, 🌸)
    const heartEmojis = ["💖", "✨", "💕", "🤍", "🌸", "💖", "✨", "💕"];
    const newHearts: CosmicHeart[] = [];
    for (let i = 0; i < 24; i++) {
      newHearts.push({
        baseX: (Math.random() - 0.5) * 1100,
        baseY: (Math.random() - 0.5) * 850,
        baseZ: (Math.random() - 0.5) * 900,
        emoji: heartEmojis[i % heartEmojis.length],
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.0015 + 0.0008,
      });
    }
    heartsRef.current = newHearts;
  }, []);

  // Zoom helpers
  const handleZoomIn = () => {
    playClickSound();
    targetZoomRef.current = Math.min(2.5, targetZoomRef.current + 0.25);
    setZoomLevel(targetZoomRef.current);
  };

  const handleZoomOut = () => {
    playClickSound();
    targetZoomRef.current = Math.max(0.45, targetZoomRef.current - 0.25);
    setZoomLevel(targetZoomRef.current);
  };

  const handleResetView = () => {
    playClickSound();
    targetRotXRef.current = 0.95;
    targetRotYRef.current = 0.25;
    targetZoomRef.current = 1.0;
    setRotX(0.95);
    setRotY(0.25);
    setZoomLevel(1.0);
    anglesRef.current = PORTFOLIO_DATA.planets.map((_, i) => (i * (Math.PI * 2)) / 8);
    setHoveredPlanet(null);
    setPinnedPlanet(null);
  };

  // Main Canvas Render Loop (60fps with pure 3D volumetric depth)
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
      const time = performance.now();
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const cx = width / 2;
      const cy = height / 2;

      // 1. Smooth Camera Inertia Damping & Gentle Passive Orbital Drift
      rotXRef.current += (targetRotXRef.current - rotXRef.current) * 0.1;
      rotYRef.current += (targetRotYRef.current - rotYRef.current) * 0.1;
      zoomRef.current += (targetZoomRef.current - zoomRef.current) * 0.1;

      if (!isDraggingRef.current && !isPaused) {
        targetRotYRef.current += 0.0006;
      }

      // Synchronize central medallion rotation in real-time
      if (medallionWrapperRef.current) {
        const yawDeg = (rotYRef.current * 180) / Math.PI;
        const pitchDeg = (rotXRef.current * 180) / Math.PI - 55;
        medallionWrapperRef.current.style.transform = `rotateX(${pitchDeg * 0.4}deg) rotateY(${yawDeg}deg)`;

        if (ring1Ref.current) {
          ring1Ref.current.style.transform = `rotateX(${pitchDeg * 0.7}deg) rotateZ(15deg)`;
        }
        if (ring2Ref.current) {
          ring2Ref.current.style.transform = `rotateX(${pitchDeg * 0.7}deg) rotateZ(-25deg)`;
        }

        const isBack = Math.cos(rotYRef.current) < 0;
        if (isBack !== isFacingBackState) {
          setIsFacingBackState(isBack);
        }
      }

      ctx.clearRect(0, 0, width, height);

      // Base responsive scale factor
      const baseMaxRadius = 450;
      const availableRadius = Math.min(width, height) / 2 - 30;
      const baseScale = Math.max(0.48, Math.min(1.0, availableRadius / baseMaxRadius));

      // ----------------------------------------------------------------------
      // PASS A: 3D Volumetric Background Stars (Twinkling & 3D Drag Rotation)
      // ----------------------------------------------------------------------
      starsRef.current.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const proj = project3D(star.x, star.y, star.z, cx, cy, baseScale);
        if (!proj) return;

        const twinkle = 0.65 + 0.35 * Math.sin(star.twinklePhase);
        const starSize = Math.max(0.5, star.baseSize * proj.scale);
        const starAlpha = Math.min(1.0, Math.max(0.12, star.alpha * twinkle * Math.min(1.4, proj.scale * 1.5)));

        ctx.save();
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, starSize, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = starAlpha;
        ctx.shadowBlur = starSize > 1.2 ? starSize * 3 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.restore();
      });

      // ----------------------------------------------------------------------
      // PASS B: 3D Cosmic Dust Micro-Dots (Ambient Shimmer Cloud)
      // ----------------------------------------------------------------------
      dustRef.current.forEach((dot) => {
        dot.pulsePhase += 0.02;
        const proj = project3D(dot.x, dot.y, dot.z, cx, cy, baseScale);
        if (!proj) return;

        const pulse = 0.5 + 0.5 * Math.sin(dot.pulsePhase);
        const dustSize = Math.max(0.4, dot.size * proj.scale);
        const dustAlpha = Math.max(0.1, Math.min(0.8, dot.alpha * pulse * proj.scale));

        ctx.save();
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, dustSize, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dustAlpha;
        ctx.fill();
        ctx.restore();
      });

      // ----------------------------------------------------------------------
      // PASS C: 3D Comets / Shooting Stars (Dynamic Luminous Trails & Heads)
      // ----------------------------------------------------------------------
      const cometColors = ["#38bdf8", "#fbbf24", "#f43f5e", "#e0e7ff"];
      cometsRef.current.forEach((comet, idx) => {
        if (!comet.active) {
          comet.spawnTimer -= 1;
          if (comet.spawnTimer <= 0) {
            comet.x = (Math.random() - 0.5) * 1600;
            comet.y = -700 - Math.random() * 300;
            comet.z = (Math.random() - 0.5) * 1100;
            const speed = Math.random() * 12 + 16;
            const angleXY = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
            comet.vx = Math.cos(angleXY) * speed * (Math.random() > 0.5 ? 1 : -1);
            comet.vy = Math.sin(angleXY) * speed;
            comet.vz = (Math.random() - 0.5) * speed * 0.6;
            comet.trail = [];
            comet.size = Math.random() * 2.2 + 2.0;
            comet.color = cometColors[idx % cometColors.length];
            comet.glowColor = comet.color;
            comet.active = true;
          }
          return;
        }

        // Advance comet
        comet.x += comet.vx;
        comet.y += comet.vy;
        comet.z += comet.vz;

        comet.trail.push({ x: comet.x, y: comet.y, z: comet.z });
        if (comet.trail.length > 16) {
          comet.trail.shift();
        }

        // Project and render trail in 3D
        if (comet.trail.length > 1) {
          ctx.save();
          for (let t = 0; t < comet.trail.length - 1; t++) {
            const p1 = project3D(comet.trail[t].x, comet.trail[t].y, comet.trail[t].z, cx, cy, baseScale);
            const p2 = project3D(comet.trail[t + 1].x, comet.trail[t + 1].y, comet.trail[t + 1].z, cx, cy, baseScale);
            if (!p1 || !p2) continue;

            const tProgress = (t + 1) / comet.trail.length;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = comet.color;
            ctx.lineWidth = comet.size * tProgress * p2.scale;
            ctx.globalAlpha = Math.min(0.9, tProgress * 0.7);
            ctx.shadowBlur = 8;
            ctx.shadowColor = comet.glowColor;
            ctx.stroke();
          }
          ctx.restore();
        }

        // Head nucleus
        const headProj = project3D(comet.x, comet.y, comet.z, cx, cy, baseScale);
        if (headProj) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(headProj.px, headProj.py, comet.size * 1.8 * headProj.scale, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 18;
          ctx.shadowColor = comet.glowColor;
          ctx.globalAlpha = 0.95;
          ctx.fill();
          ctx.restore();
        }

        // Reset if past screen bounds
        if (comet.y > 900 || Math.hypot(comet.x, comet.y, comet.z) > 2000) {
          comet.active = false;
          comet.spawnTimer = Math.random() * 160 + 90;
        }
      });

      // ----------------------------------------------------------------------
      // PASS D: 3D Distant Background Planets (4 Ethereal Worlds)
      // ----------------------------------------------------------------------
      bgPlanetsRef.current.forEach((bg) => {
        bg.angle += bg.driftSpeed * 0.0003;
        const currentX = bg.baseX * Math.cos(bg.angle) - bg.baseZ * Math.sin(bg.angle);
        const currentZ = bg.baseX * Math.sin(bg.angle) + bg.baseZ * Math.cos(bg.angle);
        const currentY = bg.baseY;

        const proj = project3D(currentX, currentY, currentZ, cx, cy, baseScale);
        if (!proj) return;

        const radius = bg.radius * proj.scale;

        ctx.save();
        // Atmospheric outer glow
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, radius * 2.2, 0, Math.PI * 2);
        const auraGrad = ctx.createRadialGradient(proj.px, proj.py, radius * 0.8, proj.px, proj.py, radius * 2.2);
        auraGrad.addColorStop(0, bg.glowColor);
        auraGrad.addColorStop(1, "transparent");
        ctx.fillStyle = auraGrad;
        ctx.globalAlpha = 0.55;
        ctx.fill();

        // Planet Body
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, radius, 0, Math.PI * 2);
        const sphereGrad = ctx.createRadialGradient(
          proj.px - radius * 0.35,
          proj.py - radius * 0.35,
          1,
          proj.px,
          proj.py,
          radius
        );
        sphereGrad.addColorStop(0, "#ffffff");
        sphereGrad.addColorStop(0.35, bg.color);
        sphereGrad.addColorStop(1, "#030712");
        ctx.fillStyle = sphereGrad;
        ctx.globalAlpha = 0.85;
        ctx.fill();

        // Planetary Ring if present
        if (bg.hasRing) {
          ctx.beginPath();
          ctx.ellipse(proj.px, proj.py, radius * 2.4, radius * 0.7, rotXRef.current * 0.35, 0, Math.PI * 2);
          ctx.strokeStyle = bg.ringColor || "rgba(255, 255, 255, 0.35)";
          ctx.lineWidth = 1.6 * proj.scale;
          ctx.globalAlpha = 0.5;
          ctx.stroke();
        }

        // Faint mysterious name label
        ctx.font = `500 ${Math.max(8, Math.round(9 * proj.scale))}px 'Fira Code', monospace`;
        ctx.fillStyle = "rgba(226, 232, 240, 0.4)";
        ctx.textAlign = "center";
        ctx.fillText(bg.name, proj.px, proj.py + radius + 11 * proj.scale);
        ctx.restore();
      });

      // ----------------------------------------------------------------------
      // PASS E: 3D Floating Heart Emojis (💖, ✨, 💕, 🤍, 🌸 With 3D Drag Motion)
      // ----------------------------------------------------------------------
      heartsRef.current.forEach((heart) => {
        const hx = heart.baseX + Math.sin(time * heart.speed + heart.phase) * 22;
        const hy = heart.baseY + Math.cos(time * heart.speed * 1.2 + heart.phase) * 18;
        const hz = heart.baseZ + Math.sin(time * heart.speed * 0.8 + heart.phase) * 26;

        const proj = project3D(hx, hy, hz, cx, cy, baseScale);
        if (!proj) return;

        const pulse = 0.5 + 0.4 * Math.sin(time * 0.002 + heart.phase);
        const fontSize = Math.max(9, Math.round(14 * proj.scale));

        ctx.save();
        ctx.font = `${fontSize}px 'Plus Jakarta Sans', sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.globalAlpha = Math.max(0.2, Math.min(0.85, pulse * Math.min(1.2, proj.scale * 1.4)));
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(244, 63, 94, 0.7)";
        ctx.fillText(heart.emoji, proj.px, proj.py);
        ctx.restore();
      });

      // ----------------------------------------------------------------------
      // PASS F: Deep Solar Radiance & 3D Rotating Solar Flare Rays
      // ----------------------------------------------------------------------
      const sunProj = project3D(0, 0, 0, cx, cy, baseScale);
      if (sunProj) {
        ctx.save();
        const baseSunSize = 32 * sunProj.scale;
        const coronaPulse = 1 + 0.08 * Math.sin(time * 0.0016);
        const coronaRadius = baseSunSize * 3.8 * coronaPulse;

        // Radiant multi-stop solar corona
        const coronaGrad = ctx.createRadialGradient(
          sunProj.px,
          sunProj.py,
          baseSunSize * 0.6,
          sunProj.px,
          sunProj.py,
          coronaRadius
        );
        coronaGrad.addColorStop(0, "rgba(255, 255, 255, 0.75)");
        coronaGrad.addColorStop(0.25, "rgba(56, 189, 248, 0.5)");
        coronaGrad.addColorStop(0.55, "rgba(139, 92, 246, 0.25)");
        coronaGrad.addColorStop(0.8, "rgba(244, 63, 94, 0.12)");
        coronaGrad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(sunProj.px, sunProj.py, coronaRadius, 0, Math.PI * 2);
        ctx.fillStyle = coronaGrad;
        ctx.globalAlpha = 0.85;
        ctx.fill();

        // 12 3D Solar Flare Rays rotating with camera perspective
        const rayCount = 12;
        ctx.lineWidth = 1.4 * sunProj.scale;
        for (let r = 0; r < rayCount; r++) {
          const rayAngle = (r / rayCount) * Math.PI * 2 + time * 0.0004 + rotYRef.current * 0.3;
          const rayLength = baseSunSize * (2.4 + 0.8 * Math.sin(time * 0.002 + r * 1.4));
          const rx2 = sunProj.px + Math.cos(rayAngle) * rayLength;
          const ry2 = sunProj.py + Math.sin(rayAngle) * rayLength * Math.cos(rotXRef.current * 0.5);

          ctx.beginPath();
          ctx.moveTo(sunProj.px, sunProj.py);
          ctx.lineTo(rx2, ry2);
          ctx.strokeStyle = r % 2 === 0 ? "rgba(56, 189, 248, 0.22)" : "rgba(251, 191, 36, 0.22)";
          ctx.stroke();
        }
        ctx.restore();
      }

      // ----------------------------------------------------------------------
      // PASS G: 3D Inclined Keplerian Elliptical Orbit Trails (8 Planets)
      // ----------------------------------------------------------------------
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
          if (!proj) continue;

          if (i === 0) {
            ctx.moveTo(proj.px, proj.py);
          } else {
            ctx.lineTo(proj.px, proj.py);
          }
        }

        ctx.strokeStyle = isHovered
          ? "rgba(56, 189, 248, 0.75)"
          : "rgba(255, 255, 255, 0.09)";
        ctx.lineWidth = isHovered ? 2.2 : 1;
        ctx.setLineDash(isHovered ? [] : [4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // ----------------------------------------------------------------------
      // PASS H: 3D Foreground Solar System Project Planets (Sorted by Depth)
      // ----------------------------------------------------------------------
      const bodies: ProjectedBody[] = [];

      // Add Central Sun
      if (sunProj) {
        bodies.push({
          type: "sun",
          x: sunProj.px,
          y: sunProj.py,
          z: sunProj.pz,
          size: 28 * sunProj.scale,
          scale: sunProj.scale,
          alpha: 1,
        });
      }

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
        if (!proj) return;

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

      // Sort bodies from back (lowest z) to front (highest z)
      bodies.sort((a, b) => a.z - b.z);

      // Determine if any planet is in front of the sun (higher pz = closer to camera)
      // Throttled: only evaluate every 6 frames to avoid hammering React state
      depthCheckCounterRef.current += 1;
      if (depthCheckCounterRef.current >= 6) {
        depthCheckCounterRef.current = 0;
        const sunBody = bodies.find((b) => b.type === "sun");
        const sunPz = sunBody ? sunBody.z : 0;
        const anyPlanetInFront = bodies.some(
          (b) => b.type === "planet" && b.z > sunPz
        );
        if (anyPlanetInFront !== medallionBehindRef.current) {
          medallionBehindRef.current = anyPlanetInFront;
          setMedallionBehind(anyPlanetInFront);
        }
      }

      // Render sorted bodies
      bodies.forEach((body) => {
        if (body.type === "sun") {
          // Sun body exists in bodies[] purely for depth sorting.
          // The HTML medallion div is the visual center — we only draw a very
          // faint pulsing glow ring here so there is NO opaque fill covering the photo.
          if (medallionBehindRef.current) {
            // When photo is behind planets, draw a subtle placeholder glow
            ctx.save();
            const glowGrad = ctx.createRadialGradient(
              body.x, body.y, 0,
              body.x, body.y, body.size * 1.2
            );
            glowGrad.addColorStop(0, "rgba(56, 189, 248, 0.18)");
            glowGrad.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.arc(body.x, body.y, body.size * 1.2, 0, Math.PI * 2);
            ctx.fillStyle = glowGrad;
            ctx.fill();
            ctx.restore();
          }
          // When photo is on top (default), draw nothing — photo covers this area
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
          ctx.shadowBlur = isHovered ? 32 : 14;
          ctx.shadowColor = planet.glowColor;
          ctx.globalAlpha = isHovered ? 0.95 : body.alpha * 0.75;
          ctx.fill();

          // Planet Sphere Gradient (Day/Night 3D Lighting)
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
            ctx.strokeStyle = "rgba(226, 232, 240, 0.65)";
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
      targetZoomRef.current = Math.max(0.45, Math.min(2.5, targetZoomRef.current + zoomDelta));
      setZoomLevel(targetZoomRef.current);
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

    // Handle 3D rotation if dragging with smooth target refs
    if (isDraggingRef.current) {
      const deltaX = e.clientX - lastMousePosRef.current.x;
      const deltaY = e.clientY - lastMousePosRef.current.y;
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };

      targetRotYRef.current += deltaX * 0.006;
      targetRotXRef.current = Math.max(-0.2, Math.min(1.4, targetRotXRef.current + deltaY * 0.006));
      setRotY(targetRotYRef.current);
      setRotX(targetRotXRef.current);
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
      if (!proj) return;

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

      targetRotYRef.current += deltaX * 0.007;
      targetRotXRef.current = Math.max(-0.2, Math.min(1.4, targetRotXRef.current + deltaY * 0.007));
      setRotY(targetRotYRef.current);
      setRotX(targetRotXRef.current);
    } else if (e.touches.length === 2 && touchStartRef.current.dist) {
      const newDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scaleDelta = (newDist - touchStartRef.current.dist) * 0.004;
      touchStartRef.current.dist = newDist;
      targetZoomRef.current = Math.max(0.45, Math.min(2.5, targetZoomRef.current + scaleDelta));
      setZoomLevel(targetZoomRef.current);
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

      {/* Center 3D Dual-Sided Celestial Medallion */}
      {(() => {
        const yawDeg = (rotY * 180) / Math.PI;
        const pitchDeg = (rotX * 180) / Math.PI - 55;
        const isFacingBack = Math.cos(rotY) < 0;

        return (
          <div className={`absolute pointer-events-none flex flex-col items-center justify-center transition-[z-index] ${medallionBehind ? "z-[5]" : "z-20"}`}>
            {/* 3D Perspective Wrapper */}
            <div
              className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center"
              style={{ perspective: "1000px" }}
            >
              {/* Outer 3D Cosmic Accretion Rings */}
              <div
                ref={ring1Ref}
                className="absolute -inset-5 rounded-full border border-cyan-400/30 animate-spin [animation-duration:24s] pointer-events-none"
                style={{
                  transform: `rotateX(${pitchDeg * 0.7}deg) rotateZ(15deg)`,
                  transformStyle: "preserve-3d",
                }}
              />
              <div
                ref={ring2Ref}
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
                ref={medallionWrapperRef}
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

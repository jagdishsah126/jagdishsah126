"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectPlanet } from "../../types";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { playWarpSound } from "../../utils/audio";
import HyperspaceWarp from "../cosmic/HyperspaceWarp";
import ProjectModal from "../ui/ProjectModal";
import HomeTab from "../tabs/HomeTab";
import { FileText, Compass } from "lucide-react";

export default function HomeView() {
  const [isWarping, setIsWarping] = useState<boolean>(true);
  const [warpLabel, setWarpLabel] = useState<string>("WARPING INTO JAGDISH UNIVERSE");
  const [isInitialEntrance, setIsInitialEntrance] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<ProjectPlanet | null>(null);

  // Initial entrance hyperspace sequence, skipped when the visitor asks for less motion.
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsWarping(false);
      setIsInitialEntrance(false);
      setWarpLabel("");
      return;
    }

    playWarpSound();

    const timer = setTimeout(() => {
      setIsWarping(false);
      setIsInitialEntrance(false);
      setWarpLabel("");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hyperspace Warp Light Speed Streak Overlay */}
      <HyperspaceWarp
        isWarping={isWarping}
        label={warpLabel}
        isInitialEntrance={isInitialEntrance}
      />

      {/* Top Floating Glass Command Bar */}
      <header className="sticky top-0 z-30 w-full px-4 py-3 backdrop-blur-md bg-space-void/40 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-2.5 group text-left">
            <span className="relative block w-8 h-8 rounded-full overflow-hidden border border-cyan-400/50 shadow-[0_0_10px_rgba(56,189,248,0.3)]">
              <Image
                src={PORTFOLIO_DATA.personal.avatarImg}
                alt="Jagdish Sah"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="text-xs font-bold text-white block group-hover:text-cyan-300 transition-colors">
                Jagdish Sah
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 block">
                jagdishsah.com.np
              </span>
            </span>
          </Link>

          {/* Quick Header Navigation Links */}
          <div className="flex items-center gap-2">
            <Link
              href="/about/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-violet-400" />
              <span>Journey</span>
            </Link>

            <Link
              href="/cv/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-xs font-mono font-semibold text-cyan-300 transition-all shadow-[0_0_12px_rgba(56,189,248,0.2)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Official CV</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex-1 w-full">
        <HomeTab onSelectProject={setSelectedProject} />
      </div>

      {/* Project Architecture Inspection Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

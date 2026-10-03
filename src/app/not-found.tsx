"use client";

import React, { useState } from "react";
import Link from "next/link";
import CosmicCanvas from "../components/cosmic/CosmicCanvas";
import ProjectModal from "../components/ui/ProjectModal";
import { ProjectPlanet } from "../types";
import { ArrowLeft, Compass, Sparkles, Home, FileText } from "lucide-react";

export default function NotFound() {
  const [selectedProject, setSelectedProject] = useState<ProjectPlanet | null>(null);

  return (
    <div className="fixed inset-0 w-screen h-screen z-50 bg-[#02040a] overflow-hidden select-none">
      {/* 3D Full-Screen Interactive Planetarium Canvas */}
      <CosmicCanvas
        onSelectProject={(project) => setSelectedProject(project)}
        isAlwaysFullscreen={true}
      />

      {/* Floating 404 Galactic Command HUD */}
      <div className="absolute top-5 sm:top-8 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-xl pointer-events-none">
        <div className="pointer-events-auto p-4 sm:p-5 rounded-2xl bg-black/85 border border-rose-500/40 backdrop-blur-xl shadow-[0_0_40px_rgba(244,63,94,0.3)] text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono mb-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span className="font-bold">TRAJECTORY 404 • UNCHARTED COSMIC SECTOR</span>
          </div>

          <h2 className="text-lg sm:text-2xl font-bold text-white mb-1.5 leading-snug">
            You Have Drifted Beyond Charted Coordinates
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-sans mb-4 leading-relaxed max-w-md mx-auto">
            The link you entered does not exist, but you are now in <span className="text-cyan-300 font-semibold">Free Flight Sandbox Mode</span>. Drag to orbit, scroll to zoom, or click planets to inspect systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-white/10 font-mono text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-200 font-semibold transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)] group"
            >
              <Home className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-violet-400" />
              <span>Journey</span>
            </Link>

            <Link
              href="/cv"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official CV</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Architecture Modal Inspection */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

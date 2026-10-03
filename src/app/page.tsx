"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TabType, ProjectPlanet } from "../types";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { playWarpSound, playClickSound } from "../utils/audio";
import HyperspaceWarp from "../components/cosmic/HyperspaceWarp";
import GlassDock from "../components/navigation/GlassDock";
import ProjectModal from "../components/ui/ProjectModal";

import HomeTab from "../components/tabs/HomeTab";
import JourneyTab from "../components/tabs/JourneyTab";
import ProjectsTab from "../components/tabs/ProjectsTab";
import NepseTab from "../components/tabs/NepseTab";
import DigitalSpacesTab from "../components/tabs/DigitalSpacesTab";
import CvTab from "../components/tabs/CvTab";
import ContactTab from "../components/tabs/ContactTab";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, Compass, Sparkles } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [isWarping, setIsWarping] = useState<boolean>(true);
  const [warpLabel, setWarpLabel] = useState<string>("WARPING INTO JAGDISH UNIVERSE");
  const [isInitialEntrance, setIsInitialEntrance] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<ProjectPlanet | null>(null);

  // Initial Entrance Hyperspace Sequence on First Load
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

  const handleTabChange = (newTab: TabType) => {
    if (newTab === activeTab) return;

    // Trigger Hyperspace Warp Sequence with destination label
    setIsInitialEntrance(false);
    setWarpLabel(`WARPING TO ${newTab.toUpperCase()}`);
    setIsWarping(true);
    playWarpSound();

    setTimeout(() => {
      setActiveTab(newTab);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }, 220);

    setTimeout(() => {
      setIsWarping(false);
    }, 550);
  };

  const handleSelectProject = (project: ProjectPlanet) => {
    setSelectedProject(project);
  };

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
          <button
            onClick={() => handleTabChange("home")}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-400/50 shadow-[0_0_10px_rgba(56,189,248,0.3)]">
              <Image
                src={PORTFOLIO_DATA.personal.avatarImg}
                alt="Jagdish Sah"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-bold text-white block group-hover:text-cyan-300 transition-colors">
                Jagdish Sah
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 block">
                jagdishsah.com.np
              </span>
            </div>
          </button>

          {/* Quick Header Navigation Links */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleTabChange("journey")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-violet-400" />
              <span>Journey</span>
            </button>

            <button
              onClick={() => handleTabChange("cv")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-xs font-mono font-semibold text-cyan-300 transition-all shadow-[0_0_12px_rgba(56,189,248,0.2)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Official CV</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Tab View Controller with Smooth Interstellar Transitions */}
      <div className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="w-full"
          >
            {activeTab === "home" && (
              <HomeTab onSelectProject={handleSelectProject} onSelectTab={handleTabChange} />
            )}
            {activeTab === "journey" && <JourneyTab />}
            {activeTab === "projects" && <ProjectsTab onSelectProject={handleSelectProject} />}
            {activeTab === "nepse" && <NepseTab />}
            {activeTab === "spaces" && <DigitalSpacesTab />}
            {activeTab === "cv" && <CvTab />}
            {activeTab === "contact" && <ContactTab />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistent Glass Navigation Dock */}
      <GlassDock activeTab={activeTab} onSelectTab={handleTabChange} />

      {/* Project Architecture Inspection Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

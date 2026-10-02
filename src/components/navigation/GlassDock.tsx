"use client";

import React, { useState, useEffect } from "react";
import { TabType } from "../../types";
import { toggleAudio, isAudioEnabled, playClickSound } from "../../utils/audio";
import {
  Sparkles,
  Compass,
  FolderGit2,
  TrendingUp,
  Boxes,
  FileText,
  Radio,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion } from "framer-motion";

interface GlassDockProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export default function GlassDock({ activeTab, onSelectTab }: GlassDockProps) {
  const [audioOn, setAudioOn] = useState(true);

  useEffect(() => {
    setAudioOn(isAudioEnabled());
  }, []);

  const handleAudioToggle = () => {
    const next = toggleAudio();
    setAudioOn(next);
  };

  const navItems: { id: TabType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "home", label: "Hub", icon: Sparkles },
    { id: "journey", label: "Journey", icon: Compass },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "nepse", label: "NEPSE", icon: TrendingUp },
    { id: "spaces", label: "Spaces", icon: Boxes },
    { id: "cv", label: "CV", icon: FileText },
    { id: "contact", label: "Transmit", icon: Radio },
  ];

  return (
    <nav
      aria-label="Cosmic Dock Navigation"
      className="dock-container fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[96vw] md:max-w-2xl w-auto"
    >
      <div className="flex items-center gap-1 md:gap-2 p-1.5 md:p-2 rounded-2xl bg-space-card/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                if (!isActive) {
                  playClickSound();
                  onSelectTab(item.id);
                }
              }}
              className={`relative px-2.5 md:px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? "text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDockTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 border border-cyan-400/40 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className={`w-4 h-4 ${isActive ? "text-cyan-300 scale-110" : ""}`} />
              <span className="hidden sm:inline font-mono text-[11px]">{item.label}</span>
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-5 bg-white/10 mx-0.5" />

        {/* Audio Mute/Unmute Toggle */}
        <button
          onClick={handleAudioToggle}
          title={audioOn ? "Mute Cosmic Audio" : "Enable Cosmic Audio"}
          className={`p-2 rounded-xl text-xs transition-all ${
            audioOn
              ? "text-cyan-300 hover:bg-cyan-500/10"
              : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
          }`}
        >
          {audioOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>
    </nav>
  );
}

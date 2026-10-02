"use client";

import React from "react";
import { ProjectPlanet, TabType } from "../../types";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import CosmicCanvas from "../cosmic/CosmicCanvas";
import { playClickSound } from "../../utils/audio";
import {
  Compass,
  FileText,
  TrendingUp,
  FolderGit2,
  MapPin,
  Sparkles,
  ArrowRight,
  Activity,
  Code2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

interface HomeTabProps {
  onSelectProject: (project: ProjectPlanet) => void;
  onSelectTab: (tab: TabType) => void;
}

export default function HomeTab({ onSelectProject, onSelectTab }: HomeTabProps) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Header */}
      <section className="text-center max-w-4xl px-4 pt-4 md:pt-8 mb-2">
        {/* Origin & Location Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-card border border-white/10 text-xs font-mono text-cyan-300 mb-4 shadow-sm backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>Roots in Mirchaiya, Siraha • Studying in Pokhara, Nepal</span>
        </div>

        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-none">
          <span className="cosmic-gradient-text">Jagdish Sah</span>
        </h1>

        {/* Supporting Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-6 leading-relaxed">
          Computer Engineering Student, Imaginative Builder, and disciplined NEPSE Analyst & Trader.
        </p>

        {/* Guiding Cosmic Motto */}
        <div className="relative max-w-2xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-violet-950/20 to-emerald-950/20 border border-white/10 backdrop-blur-md mb-6">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guiding Principle</span>
          </div>
          <blockquote className="text-sm md:text-base text-slate-200 italic font-sans leading-relaxed">
            &ldquo;{personal.motto}&rdquo;
          </blockquote>
        </div>

        {/* Quick Action Teleports */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              playClickSound();
              onSelectTab("projects");
            }}
            className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs md:text-sm shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-all flex items-center gap-2 group"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Explore 8 Projects</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              playClickSound();
              onSelectTab("journey");
            }}
            className="py-2.5 px-5 rounded-xl bg-space-card hover:bg-space-card-hover border border-white/10 text-slate-200 font-semibold text-xs md:text-sm backdrop-blur-md transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-violet-400" />
            <span>Read Journey</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              onSelectTab("cv");
            }}
            className="py-2.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-cyan-300 font-semibold text-xs md:text-sm backdrop-blur-md transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Official CV</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              onSelectTab("nepse");
            }}
            className="py-2.5 px-5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold text-xs md:text-sm backdrop-blur-md transition-all flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            <span>NEPSE Observatory</span>
          </button>
        </div>
      </section>

      {/* The 8-Planet Project Solar System Canvas */}
      <section className="w-full relative max-w-6xl my-2">
        <div className="text-center mb-1">
          <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
            ✦ Interactive Planetary Orbital Canvas • Hover to inspect or click to view ✦
          </span>
        </div>
        <CosmicCanvas onSelectProject={onSelectProject} />
      </section>

      {/* Real-Time "Now" Status Beacon & Key Metrics */}
      <section className="w-full max-w-5xl px-4 my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Living "Now" Status Beacon */}
          <div className="cosmic-glass p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <h3 className="text-sm font-mono font-semibold tracking-wider text-slate-200 uppercase">
                  Living Status • Now
                </h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                Active Transmission
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-white/5">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Academics</span>
                  <span>{personal.nowStatus.academics}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-white/5">
                <Code2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Active Build</span>
                  <span>{personal.nowStatus.building}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-white/5">
                <Activity className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">AI & Research</span>
                  <span>{personal.nowStatus.exploring}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-white/5">
                <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Financial Markets</span>
                  <span>{personal.nowStatus.trading}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Verified Credentials & Academic Accolades */}
          <div className="cosmic-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-mono font-semibold tracking-wider text-slate-200 uppercase">
                  Verified Academic & Technical Credentials
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 block">SEE Examination</span>
                  <span className="text-lg font-bold text-cyan-300">3.65 GPA</span>
                  <span className="text-[11px] text-slate-400 block">Sagarmatha HSS, Siraha</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 block">+2 Science</span>
                  <span className="text-lg font-bold text-violet-300">3.69 GPA</span>
                  <span className="text-[11px] text-slate-400 block">Prasadi Academy, KTM</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 block">Engineering Status</span>
                  <span className="text-lg font-bold text-emerald-300">3rd Sem</span>
                  <span className="text-[11px] text-slate-400 block">IOE WRC (Zero Backlogs)</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 block">GitHub Dimensions</span>
                  <span className="text-lg font-bold text-amber-300">5 Spaces</span>
                  <span className="text-[11px] text-slate-400 block">Targeted Separation</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Domain: jagdishsah.com.np</span>
              <button
                onClick={() => {
                  playClickSound();
                  onSelectTab("cv");
                }}
                className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
              >
                <span>View Full CV</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

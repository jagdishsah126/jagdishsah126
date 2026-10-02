"use client";

import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import {
  Compass,
  Heart,
  Bot,
  Languages,
  MapPin,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function JourneyTab() {
  const { personal, journey } = PORTFOLIO_DATA;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Tab Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>The Path Across Nepal</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
          Roots, Curiosity & <span className="cosmic-gradient-text">Journey</span>
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From the southern plains of Siraha and the forests of Bardiya to the academic corridors of
          Kathmandu and the engineering labs of Pokhara.
        </p>
      </div>

      {/* Special Tribute Card to his Father */}
      <div className="relative mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-space-card to-space-card border border-amber-500/30 backdrop-blur-xl shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-2.5 text-xs font-mono text-amber-300 uppercase tracking-wider mb-2">
          <Heart className="w-4 h-4 text-amber-400 fill-amber-400/20" />
          <span>The Foundational Spark</span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {personal.fatherTribute.title}
        </h3>

        <p className="text-sm md:text-base text-slate-200 leading-relaxed font-sans mb-4">
          {personal.fatherTribute.description}
        </p>

        <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 font-poetic text-amber-200 text-lg md:text-xl">
          &ldquo;Science is not merely memorizing formulas; it is the courage to observe reality honestly, ask why, and test your understanding through evidence.&rdquo;
        </div>
      </div>

      {/* Cosmic Journey Visual Timeline */}
      <div className="relative border-l-2 border-cyan-500/20 ml-4 md:ml-8 pl-6 md:pl-10 space-y-10 mb-12">
        {journey.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Orbital Node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-space-void border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              <div className="w-2 h-2 rounded-full bg-cyan-300 group-hover:scale-150 transition-transform" />
            </div>

            {/* Timeline Card */}
            <div className="cosmic-glass p-6 group-hover:border-cyan-400/40 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {step.period}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                  {step.badge}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-1">{step.title}</h4>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3">
                <MapPin className="w-3.5 h-3.5 text-violet-400" />
                <span>{step.location}</span>
                {step.score && (
                  <span className="ml-2 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                    {step.score}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">{step.description}</p>

              {/* Learnings Chips */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {step.learnings.map((item, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lower Row: Languages & AI Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Languages Card */}
        <div className="cosmic-glass p-6">
          <div className="flex items-center gap-2 mb-4">
            <Languages className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
              Multilingual Spectrum
            </h3>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {personal.languages.map((lang) => (
              <div
                key={lang.name}
                className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-slate-200 block text-sm">{lang.name}</span>
                  <span className="text-[11px] text-cyan-300">{lang.role}</span>
                </div>
                <span className="text-[10px] text-slate-400 text-right max-w-[160px]">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Human-AI Partnership Card */}
        <div className="cosmic-glass p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Bot className="w-4 h-4 text-violet-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                {personal.aiPhilosophy.title}
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {personal.aiPhilosophy.description}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-500/20 text-xs font-mono text-violet-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
            <span>Pair programming with Antigravity CLI, Cursor CLI, Gemini, Claude & Zara.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

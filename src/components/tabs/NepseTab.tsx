"use client";

import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import {
  TrendingUp,
  LineChart,
  Database,
  ShieldAlert,
  ArrowUpRight,
  ExternalLink,
  Github,
  Zap,
} from "lucide-react";

export default function NepseTab() {
  const { nepse } = PORTFOLIO_DATA;

  const nepseTools = [
    {
      name: "nepse-floorsheet-archive",
      role: "Autonomous Public Data Pipeline",
      desc: "Captures 100% of daily transaction records from Nepal Stock Exchange into structured, version-controlled open CSV datasets.",
      github: "https://github.com/jagdishsah126/nepse-floorsheet-archive",
      dataDir: "https://github.com/jagdishsah126/nepse-floorsheet-archive/tree/main/Floorsheet",
      status: "Active & Public",
    },
    {
      name: "Nepse_Data",
      role: "Quantitative Market Screener",
      desc: "Personal analytical dashboard analyzing broker concentration, smart money accumulation, and momentum breakouts without commercial subscriptions.",
      github: "https://github.com/DayaSah/Nepse_Data",
      status: "Active (Migrating to V2)",
    },
    {
      name: "My_Nepse_Diary",
      role: "Granular Portfolio Ledger & Journal",
      desc: "Behavioral and financial trading log recording trade setups, profit/loss, broker distribution, and SEBON fees. Ready for intraday/short-selling.",
      github: "https://github.com/DayaSah/My_Nepse_Diary",
      status: "Active & Private",
    },
    {
      name: "Floorsheet_cockroachlabs",
      role: "Distributed Cloud Database Pipeline",
      desc: "Experimental data extraction pipeline collecting floorsheet trades and synchronizing with CockroachDB distributed cloud clusters.",
      github: "https://github.com/DayaSah/Floorsheet_cockroachlabs",
      status: "Research Lab",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Quantitative Market Intelligence</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
          NEPSE Analysis & <span className="aurora-gradient-text">Trading Observatory</span>
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {nepse.summary}
        </p>
      </div>

      {/* Trading Horizon Banner */}
      <div className="cosmic-glass p-6 md:p-8 mb-10 border-emerald-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
              Active Strategy
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{nepse.tradingStyle}</h3>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed">
              Disciplined swing entries guided by volume surges, broker accumulation concentration, and
              structural price breakouts rather than speculative social chatter.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-3 shrink-0">
            <Zap className="w-6 h-6 text-emerald-400" />
            <div>
              <span className="text-xs font-mono text-emerald-300 block font-semibold">
                Objective
              </span>
              <span className="text-[11px] font-mono text-slate-300">
                1:3+ Risk-to-Reward Execution
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Four Core Pillars */}
      <div className="mb-12">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
          <LineChart className="w-4 h-4 text-emerald-400" />
          <span>Core Analytical Pillars</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nepse.philosophyPoints.map((pillar, i) => (
            <div key={i} className="cosmic-glass p-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 block mb-1">
                  Pillar 0{i + 1}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tooling Suite */}
      <div className="mb-12">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
          <Database className="w-4 h-4 text-cyan-400" />
          <span>Proprietary Tooling & Data Pipelines</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nepseTools.map((tool, idx) => (
            <div key={idx} className="cosmic-glass p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white font-mono">{tool.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-emerald-300 border border-emerald-500/20">
                    {tool.status}
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-300 block mb-2">{tool.role}</span>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{tool.desc}</p>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                {tool.github && (
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}
                {tool.dataDir && (
                  <a
                    href={tool.dataDir}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 px-3 py-1.5 rounded-lg border border-cyan-400/30 transition-all"
                  >
                    <span>View CSV Archive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* V2 Roadmap & Future Vision */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-950/30 via-space-card to-cyan-950/30 border border-violet-500/20 backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-widest mb-2">
          <ShieldAlert className="w-4 h-4 text-violet-400" />
          <span>V2 Architecture Roadmap</span>
        </div>
        <h4 className="text-lg font-bold text-white mb-2">
          Preparing for Intraday Trading & Short-Selling
        </h4>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
          {nepse.v2Vision}
        </p>
      </div>
    </div>
  );
}

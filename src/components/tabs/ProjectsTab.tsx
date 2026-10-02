"use client";

import React, { useState } from "react";
import { ProjectPlanet } from "../../types";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { playClickSound } from "../../utils/audio";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Search,
} from "lucide-react";

interface ProjectsTabProps {
  onSelectProject: (project: ProjectPlanet) => void;
}

export default function ProjectsTab({ onSelectProject }: ProjectsTabProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filters = [
    { id: "all", label: "All Planets (8)" },
    { id: "flagship", label: "Flagship / CV" },
    { id: "data", label: "NEPSE & Data" },
    { id: "web", label: "Web & PWA" },
    { id: "system", label: "System Utilities" },
    { id: "academic", label: "Academic & Creative" },
  ];

  const filteredProjects = PORTFOLIO_DATA.planets.filter((planet) => {
    // Category match
    let matchesCategory = true;
    if (selectedFilter === "flagship") matchesCategory = Boolean(planet.isFlagship);
    else if (selectedFilter === "data") matchesCategory = planet.category === "data";
    else if (selectedFilter === "web") matchesCategory = planet.category === "web";
    else if (selectedFilter === "system") matchesCategory = planet.category === "system" || planet.category === "extension";
    else if (selectedFilter === "academic") matchesCategory = planet.category === "academic" || planet.category === "creative";

    // Search query match
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      planet.name.toLowerCase().includes(q) ||
      planet.tagline.toLowerCase().includes(q) ||
      planet.techStack.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>The 8 Celestial Projects</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
          Engineering & <span className="cosmic-gradient-text">Project Constellation</span>
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Every project is built to solve an authentic friction point—from autonomous NEPSE floorsheet
          archiving to offline hostel mess management and low-overhead Linux desktop utilities.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-space-card/70 border border-white/10 backdrop-blur-md">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                playClickSound();
                setSelectedFilter(f.id);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedFilter === f.id
                  ? "bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search tech or project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-space-card/70 border border-white/10 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 backdrop-blur-md"
          />
        </div>
      </div>

      {/* Bento Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((planet) => (
          <article
            key={planet.id}
            onClick={() => {
              playClickSound();
              onSelectProject(planet);
            }}
            className="cosmic-glass p-6 flex flex-col justify-between cursor-pointer group hover:border-cyan-400/40 transition-all hover:-translate-y-1"
          >
            <div>
              {/* Planetary Badge & Status */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  style={{ color: planet.color }}
                  className="text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {planet.codename}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                  {planet.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {planet.name}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                {planet.tagline}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {planet.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
              <span className="text-xs font-mono text-cyan-400 group-hover:underline flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Inspect Architecture</span>
              </span>

              <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {planet.liveUrl && (
                  <a
                    href={planet.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all"
                    title="Open Live App"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {planet.githubUrl && (
                  <a
                    href={planet.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

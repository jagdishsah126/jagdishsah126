"use client";

import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { Boxes, ExternalLink, Github, Sparkles, FolderGit2 } from "lucide-react";

export default function DigitalSpacesTab() {
  const { spaces } = PORTFOLIO_DATA;

  /** Non-GitHub profiles, listed so crawlers can associate every public identity with the name. */
  const socialProfiles = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jagdishsah/", handle: "in/jagdishsah" },
    { name: "Instagram", url: "https://www.instagram.com/jagdish___sah/", handle: "@jagdish___sah" },
    { name: "Facebook", url: "https://www.facebook.com/kingdaya.happy", handle: "@kingdaya" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
          <Boxes className="w-3.5 h-3.5" />
          <span>Intentional Architectural Separation</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
          The 5 Digital <span className="cosmic-gradient-text">GitHub Dimensions</span>
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Rather than dumping every prototype, college assignment, financial experiment, and AI script
          into one confusing profile, my work is intentionally partitioned by purpose.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {spaces.map((space) => (
          <div
            key={space.id}
            className="cosmic-glass p-6 flex flex-col justify-between hover:border-cyan-400/40 transition-all hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {space.role}
                </span>
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${space.color}`}>
                  {space.badge}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-1 font-mono">
                @{space.account}
              </h2>
              <p className="text-xs font-mono text-slate-400 mb-3">{space.focus}</p>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                {space.description}
              </p>

              {/* Notable Repositories */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Notable Repositories & Work
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {space.notableRepos.map((repo) => (
                    <span
                      key={repo}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1"
                    >
                      <FolderGit2 className="w-3 h-3 text-cyan-400" />
                      <span>{repo}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Action Link */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={space.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 group"
              >
                <Github className="w-4 h-4 text-slate-300 group-hover:text-white" />
                <span>Explore github.com/{space.account}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Social Profiles */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Same Builder, Other Networks</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Social <span className="cosmic-gradient-text">Profiles</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {socialProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="cosmic-glass p-4 flex items-center justify-between hover:border-cyan-400/40 transition-all hover:-translate-y-1 group"
            >
              <div>
                <span className="text-sm font-bold text-white block group-hover:text-cyan-300 transition-colors">
                  {profile.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400">{profile.handle}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

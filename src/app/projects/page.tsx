import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ProjectsView from "../../components/views/ProjectsView";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumb, OG_IMAGE, projectItemList } from "../../utils/schema";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { ArrowLeft, Sparkles, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects — Jagdish Sah | 8 Engineering Systems",
  description:
    "Eight projects by Jagdish Sah: autonomous NEPSE data pipelines, offline PWA tools, Linux utilities and agentic AI systems.",
  alternates: { canonical: "https://jagdishsah.com.np/projects/" },
  openGraph: {
    title: "Projects — Jagdish Sah",
    description:
      "Autonomous NEPSE data pipelines, offline PWA tools, Linux utilities and agentic AI systems.",
    url: "https://jagdishsah.com.np/projects/",
    images: [OG_IMAGE],
  },
};

export default function ProjectsPage() {
  return (
    <div className="w-full flex flex-col items-center pt-4">
      <JsonLd data={breadcrumb([{ name: "Hub", path: "/" }, { name: "Projects", path: "/projects/" }])} />
      <JsonLd data={projectItemList(PORTFOLIO_DATA.planets)} />

      <div className="w-full max-w-4xl px-4 mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition-all group shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Jagdish Universe Hub</span>
        </Link>

        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>jagdishsah.com.np/projects</span>
        </span>
      </div>

      <div className="w-full max-w-4xl px-4 mb-4">
        <a
          href="https://url.jagdishsah.com.np/"
          className="group flex items-center justify-between gap-3 rounded-2xl bg-space-card/70 backdrop-blur-md border border-white/10 px-5 py-3 transition-colors hover:bg-space-card-hover"
        >
          <span className="text-xs text-slate-300">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-0.5">
              Full index
            </span>
            22 live projects across four accounts, one page
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 shrink-0">
            <span className="hidden sm:inline">url.jagdishsah.com.np</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </div>

      <ProjectsView />
    </div>
  );
}

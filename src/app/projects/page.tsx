import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ProjectsView from "../../components/views/ProjectsView";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumb, OG_IMAGE, projectItemList } from "../../utils/schema";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { ArrowLeft, Sparkles } from "lucide-react";

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

      <ProjectsView />
    </div>
  );
}

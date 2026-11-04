import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import DigitalSpacesTab from "../../components/tabs/DigitalSpacesTab";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumb, OG_IMAGE } from "../../utils/schema";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Spaces — Jagdish Sah | GitHub Presence Map",
  description:
    "The five GitHub spaces of Jagdish Sah, separated by purpose: main profile, data pipelines, academic work, experiments and AI agents.",
  alternates: { canonical: "https://jagdishsah.com.np/spaces/" },
  openGraph: {
    title: "Digital Spaces — Jagdish Sah",
    description:
      "Five purposeful GitHub spaces: profile, data pipelines, academic work, experiments and AI agents.",
    url: "https://jagdishsah.com.np/spaces/",
    images: [OG_IMAGE],
  },
};

export default function SpacesPage() {
  return (
    <div className="w-full flex flex-col items-center pt-4">
      <JsonLd data={breadcrumb([{ name: "Hub", path: "/" }, { name: "Digital Spaces", path: "/spaces/" }])} />

      <div className="w-full max-w-4xl px-4 mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition-all group shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Jagdish Universe Hub</span>
        </Link>

        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>jagdishsah.com.np/spaces</span>
        </span>
      </div>

      <DigitalSpacesTab />
    </div>
  );
}

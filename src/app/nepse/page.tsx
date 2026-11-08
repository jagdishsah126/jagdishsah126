import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import NepseTab from "../../components/tabs/NepseTab";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumb, ogImage } from "../../utils/schema";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "NEPSE Analysis — Jagdish Sah | Research & Tooling",
  description:
    "NEPSE market analysis by Jagdish Sah: floorsheet data pipelines, a swing trading framework and quantitative tooling for Nepal's stock exchange.",
  alternates: { canonical: "https://jagdishsah.com.np/nepse/" },
  openGraph: {
    title: "NEPSE Analysis — Jagdish Sah",
    description:
      "Floorsheet data pipelines, swing trading framework and quantitative tooling for Nepal's stock exchange.",
    url: "https://jagdishsah.com.np/nepse/",
    images: [ogImage("nepse", "NEPSE Analysis — floorsheet pipelines and broker tracking")],
  },
};

export default function NepsePage() {
  return (
    <div className="w-full flex flex-col items-center pt-4">
      <JsonLd data={breadcrumb([{ name: "Hub", path: "/" }, { name: "NEPSE Analysis", path: "/nepse/" }])} />

      <div className="w-full max-w-4xl px-4 mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition-all group shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Jagdish Universe Hub</span>
        </Link>

        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>jagdishsah.com.np/nepse</span>
        </span>
      </div>

      <NepseTab />
    </div>
  );
}

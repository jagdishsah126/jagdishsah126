import React from "react";
import type { Metadata } from "next";
import CvTab from "../../components/tabs/CvTab";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Official CV — Jagdish Sah | Computer Engineering & NEPSE Data Analyst",
  description:
    "Official Curriculum Vitae of Jagdish Sah. Undergraduate Computer Engineering student at TU IOE WRC Pokhara, roots in Siraha. Education, technical capabilities, and project portfolio.",
  alternates: {
    canonical: "https://jagdishsah.com.np/cv",
  },
};

export default function CvPage() {
  return (
    <div className="w-full flex flex-col items-center pt-4">
      {/* Return to Hub Banner */}
      <div className="no-print w-full max-w-4xl px-4 mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition-all group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Jagdish Universe Hub</span>
        </Link>

        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>jagdishsah.com.np/cv</span>
        </span>
      </div>

      <CvTab />
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import JourneyTab from "../../components/tabs/JourneyTab";
import Link from "next/link";
import { ArrowLeft, Sparkles, Compass, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "About & Journey — Jagdish Sah | From Bishnupur, Siraha to IOE WRC Pokhara",
  description:
    "Explore the origins, personal journey, and academic milestones of Jagdish Sah. From childhood roots in Bishnupur, Siraha to +2 Science at Prasadi Academy and Computer Engineering at TU IOE WRC Pokhara, Nepal.",
  alternates: {
    canonical: "https://jagdishsah.com.np/about",
  },
  openGraph: {
    title: "About & Journey — Jagdish Sah",
    description:
      "Explore the personal roots, academic journey, and engineering story of Jagdish Sah across Nepal.",
    url: "https://jagdishsah.com.np/about",
    siteName: "Jagdish Universe",
    type: "profile",
    images: [
      {
        url: "/ProfilePicFormal.jpg",
        width: 1125,
        height: 1395,
        alt: "Jagdish Sah Formal Portrait",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center pt-4">
      {/* Return to Hub Navigation Header */}
      <div className="w-full max-w-4xl px-4 mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition-all group shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Jagdish Universe Hub</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/cv"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-xs font-mono text-cyan-300 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Official CV</span>
          </Link>

          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>jagdishsah.com.np/about</span>
          </span>
        </div>
      </div>

      {/* Main Journey Content */}
      <JourneyTab />
    </div>
  );
}

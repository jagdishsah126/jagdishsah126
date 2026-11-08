import React from "react";
import type { Metadata } from "next";
import CvTab from "../../components/tabs/CvTab";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumb, ogImage, profilePage } from "../../utils/schema";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "CV — Jagdish Sah | Computer Engineering & NEPSE",
  description:
    "Curriculum Vitae of Jagdish Sah: Computer Engineering undergraduate at TU IOE WRC Pokhara, NEPSE data analyst, and builder of autonomous pipelines.",
  alternates: {
    canonical: "https://jagdishsah.com.np/cv/",
  },
  openGraph: {
    title: "CV — Jagdish Sah | Computer Engineering & NEPSE",
    description:
      "Computer Engineering undergraduate at TU IOE WRC Pokhara, NEPSE data analyst, and builder of autonomous pipelines.",
    url: "https://jagdishsah.com.np/cv/",
    siteName: "Jagdish Universe",
    type: "profile",
    images: [ogImage("cv", "Curriculum Vitae — Jagdish Sah, Computer Engineering at IOE WRC")],
  },
};

export default function CvPage() {
  return (
    <div className="w-full flex flex-col items-center pt-4">
      <JsonLd
        data={profilePage(
          "CV of Jagdish Sah",
          "/cv/",
          "Curriculum Vitae of Jagdish Sah, Computer Engineering student at TU IOE WRC Pokhara."
        )}
      />
      <JsonLd data={breadcrumb([{ name: "Hub", path: "/" }, { name: "Official CV", path: "/cv/" }])} />

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

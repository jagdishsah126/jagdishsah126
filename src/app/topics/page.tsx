import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumb, ogImage, topicItemList } from "../../utils/schema";
import { TOPICS } from "../../data/topics";
import { ArrowLeft, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Topics — Jagdish Sah | NEPSE, Code and Life",
  description:
    "Five sections by Jagdish Sah: NEPSE tools, my market view, my trading strategy, life in Nepal, and a computer engineering career.",
  alternates: { canonical: "https://jagdishsah.com.np/topics/" },
  openGraph: {
    title: "Topics — Jagdish Sah",
    description:
      "NEPSE tools, market views, trading strategy, life and career — written from Nepal.",
    url: "https://jagdishsah.com.np/topics/",
    images: [ogImage("topics", "Topics — NEPSE, code, life and career")],
  },
};

/** Full class strings, not interpolation: Tailwind only emits classes it can see. */
const ACCENT_CLASSES: Record<string, { text: string; border: string; glow: string }> = {
  cyan: { text: "text-cyan-300", border: "border-cyan-400/30", glow: "hover:shadow-cyan-glow" },
  violet: { text: "text-violet-300", border: "border-violet-400/30", glow: "hover:shadow-violet-glow" },
  emerald: { text: "text-emerald-300", border: "border-emerald-400/30", glow: "hover:shadow-emerald-glow" },
  amber: { text: "text-amber-300", border: "border-amber-400/30", glow: "hover:shadow-amber-glow" },
  rose: { text: "text-rose-300", border: "border-rose-400/30", glow: "hover:shadow-cyan-glow" },
};

export default function TopicsPage() {
  return (
    <div className="w-full flex flex-col items-center pt-4">
      <JsonLd data={breadcrumb([{ name: "Hub", path: "/" }, { name: "Topics", path: "/topics/" }])} />
      <JsonLd data={topicItemList(TOPICS)} />

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
          <span>jagdishsah.com.np/topics</span>
        </span>
      </div>

      <div className="w-full max-w-4xl px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
          Topics
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mb-8">
          Five sections: the tooling behind my NEPSE work, how I read the market,
          the rules I trade by, where I come from, and what I am building toward.
          Written from Pokhara, Nepal.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOPICS.map((topic) => {
            const accent = ACCENT_CLASSES[topic.accent];
            return (
              <li key={topic.slug}>
                <Link
                  href={`/topics/${topic.slug}/`}
                  className={`group flex h-full flex-col justify-between rounded-2xl bg-space-card/70 backdrop-blur-md border ${accent.border} p-5 transition-all hover:bg-space-card-hover ${accent.glow}`}
                >
                  <div>
                    <h2 className={`text-lg font-bold mb-1.5 ${accent.text}`}>
                      {topic.title}
                    </h2>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {topic.tagline}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 group-hover:text-white transition-colors">
                    <span>
                      {topic.posts.length === 0
                        ? "Section"
                        : `${topic.posts.length} ${topic.posts.length === 1 ? "post" : "posts"}`}
                    </span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

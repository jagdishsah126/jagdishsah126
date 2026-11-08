import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactTab from "../../components/tabs/ContactTab";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumb, ogImage } from "../../utils/schema";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Jagdish Sah — Email, GitHub & Direct",
  description:
    "Reach Jagdish Sah for engineering opportunities, NEPSE data collaborations or agentic AI projects. Email, GitHub and direct contact.",
  alternates: { canonical: "https://jagdishsah.com.np/contact/" },
  openGraph: {
    title: "Contact Jagdish Sah",
    description:
      "Open for engineering opportunities, NEPSE data collaborations and agentic AI projects.",
    url: "https://jagdishsah.com.np/contact/",
    images: [ogImage("contact", "Contact Jagdish Sah")],
  },
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center pt-4">
      <JsonLd data={breadcrumb([{ name: "Hub", path: "/" }, { name: "Contact", path: "/contact/" }])} />

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
          <span>jagdishsah.com.np/contact</span>
        </span>
      </div>

      <ContactTab />
    </div>
  );
}

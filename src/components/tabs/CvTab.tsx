"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { playClickSound } from "../../utils/audio";
import {
  Printer,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Eye,
} from "lucide-react";

export default function CvTab() {
  const { personal, education, skills, planets } = PORTFOLIO_DATA;
  const [paperMode, setPaperMode] = useState(false);

  const handlePrint = () => {
    playClickSound();
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const flagshipProjects = planets.filter((p) => p.isFlagship);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* CV Actions Bar (No Print) */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-space-card/80 border border-white/10 backdrop-blur-md mb-8">
        <div>
          <span className="text-xs font-mono text-cyan-300 block">Recruiter Standard Curriculum Vitae</span>
          <span className="text-xs text-slate-400">Exportable as pixel-perfect vector A4 PDF</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle Screen Paper Mode */}
          <button
            onClick={() => {
              playClickSound();
              setPaperMode(!paperMode);
            }}
            className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-all flex items-center gap-1.5"
            title="Toggle Paper Preview"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{paperMode ? "Cosmic Mode" : "Paper Mode"}</span>
          </button>

          {/* Print / Save PDF Button */}
          <button
            onClick={handlePrint}
            className="py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-mono font-bold shadow-[0_4px_16px_rgba(56,189,248,0.35)] transition-all flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Download PDF / Print</span>
          </button>
        </div>
      </div>

      {/* The Printable CV Document Container */}
      <div
        className={`cv-printable-area transition-colors duration-200 rounded-3xl p-6 md:p-10 border ${
          paperMode
            ? "bg-white text-slate-900 border-slate-300 shadow-2xl"
            : "cosmic-glass text-slate-100 border-white/15 shadow-2xl"
        }`}
      >
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-8 border-b border-current/10">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              {personal.name}
            </h1>
            <p
              className={`text-sm md:text-base font-semibold font-mono mb-4 ${
                paperMode ? "text-blue-700" : "text-cyan-300"
              }`}
            >
              Computer Engineering Student & NEPSE Market Data Analyst
            </p>

            {/* Contact Details List */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs font-mono opacity-80">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{personal.location}</span>
              </span>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:underline">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>{personal.email}</span>
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{personal.phone}</span>
              </span>
              <a
                href={`https://${personal.domain}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:underline"
              >
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span>{personal.domain}</span>
              </a>
              <a
                href={personal.githubMain}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:underline"
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span>github.com/Jagdishsah126</span>
              </a>
            </div>
          </div>

          {/* Formal Profile Photo */}
          <div className="relative w-28 h-36 rounded-2xl overflow-hidden border-2 border-current/20 shrink-0 shadow-md">
            <Image
              src={personal.formalPhoto}
              alt="Jagdish Sah Formal Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Executive Summary */}
        <section className="py-6 border-b border-current/10">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider mb-2 opacity-60">
            Executive Summary
          </h2>
          <p className="text-sm md:text-base leading-relaxed opacity-90 font-sans">
            Undergraduate Computer Engineering student at Tribhuvan University, IOE WRC Pokhara,
            combining systems programming, autonomous data pipeline architecture, and quantitative
            NEPSE financial analysis. Pioneer in human-agent AI pair programming, with demonstrable
            offline-first web utilities and version-controlled data pipelines running in production.
          </p>
        </section>

        {/* Education Section */}
        <section className="py-6 border-b border-current/10">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider mb-4 opacity-60 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </h2>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="cv-card p-4 rounded-xl border border-current/10 bg-current/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-base font-bold">{edu.degree}</h3>
                  <span className="text-xs font-mono opacity-80">{edu.period}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2 opacity-80">
                  <span>
                    {edu.institution} • {edu.location}
                  </span>
                  {edu.score && (
                    <span className="font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Score: {edu.score}
                    </span>
                  )}
                  {edu.status && (
                    <span className="font-semibold text-cyan-400">{edu.status}</span>
                  )}
                </div>

                <ul className="space-y-1 text-xs opacity-90">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="opacity-50 mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Taxonomy */}
        <section className="py-6 border-b border-current/10">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider mb-4 opacity-60 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {skills.map((category) => (
              <div
                key={category.title}
                className="cv-card p-3.5 rounded-xl border border-current/10 bg-current/5"
              >
                <h4 className="font-mono font-bold mb-2 opacity-75">{category.title}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="cv-badge px-2 py-0.5 rounded text-[11px] font-mono border border-current/15 bg-current/5"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Flagship Production Projects */}
        <section className="py-6 border-b border-current/10">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider mb-4 opacity-60 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>Featured Software & Data Projects</span>
          </h2>

          <div className="space-y-4">
            {flagshipProjects.map((p) => (
              <div key={p.id} className="cv-card p-4 rounded-xl border border-current/10 bg-current/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold">{p.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-current/20">
                      {p.planetType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono opacity-80">
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="hover:underline">
                        Live Demo
                      </a>
                    )}
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs md:text-sm mb-2 opacity-90 leading-relaxed font-sans">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {p.techStack.map((t) => (
                    <span
                      key={t}
                      className="cv-badge px-1.5 py-0.5 rounded text-[10px] font-mono border border-current/15 bg-current/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1 text-xs opacity-80">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer & Verification */}
        <footer className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono opacity-60">
          <span>Official CV of Jagdish Sah • jagdishsah.com.np</span>
          <span>Verified Accurate as of October 2026</span>
        </footer>
      </div>
    </div>
  );
}

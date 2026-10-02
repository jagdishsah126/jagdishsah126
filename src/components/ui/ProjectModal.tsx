"use client";

import React from "react";
import { ProjectPlanet } from "../../types";
import { playClickSound } from "../../utils/audio";
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: ProjectPlanet | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto cosmic-glass p-6 md:p-8 z-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-cyan-400/30"
        >
          {/* Close button */}
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <span
              style={{ color: project.color }}
              className="text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              {project.codename} • Solar Orbit #{project.solarIndex}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
              {project.status}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
            {project.name}
          </h2>
          <p className="text-sm md:text-base text-cyan-300 font-mono mb-6">{project.tagline}</p>

          {/* Body Description */}
          <div className="mb-6 space-y-4">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Overview</h3>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">{project.description}</p>
          </div>

          {/* Key Highlights */}
          <div className="mb-6">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Key Engineering Highlights
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Technologies & Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(56,189,248,0.35)] flex items-center justify-center gap-2"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { FLAGSHIPS } from "@/data/portfolio";
import Reveal from "./Reveal";

const EXPLORER = [
  {
    id: "pipeline",
    label: "Pipeline",
    kicker: "Layer 01 — Extraction",
    title: "A scraper that never misses a session",
    body: "A scheduled GitHub Action wakes after market close, pulls the complete floorsheet for the day, normalises the columns, and commits the result. No server to babysit, no vendor to pay.",
  },
  {
    id: "data",
    label: "Archive",
    kicker: "Layer 02 — Storage",
    title: "Version-controlled, human-readable data",
    body: "Every trading day lands as a dated CSV in the repository. Git history doubles as an audit log, and anyone can clone the last three years of NEPSE transactions.",
  },
  {
    id: "access",
    label: "Access",
    kicker: "Layer 03 — Distribution",
    title: "Open by default",
    body: "The archive exists because the data was already public — just locked behind paid terminals. Publishing it as CSV removes the paywall for students, journalists, and independent analysts.",
  },
  {
    id: "impact",
    label: "Impact",
    kicker: "Layer 04 — Outcome",
    title: "A floor for market research",
    body: "Broker concentration, delivery ratios, and accumulation patterns become computable by anyone. That is the difference between trading on rumour and trading on records.",
  },
];

export default function Flagships() {
  const [active, setActive] = useState(EXPLORER[0].id);
  const current = EXPLORER.find((item) => item.id === active) ?? EXPLORER[0];
  const [main, ...rest] = FLAGSHIPS;

  return (
    <section id="flagships" className="section shell">
      <div className="rule" aria-hidden="true">
        <span>02 / SYSTEMS</span>
        <i />
        <span>INDEX 02 — 04</span>
      </div>

      <Reveal className="section-head" delay={40}>
        <span className="section-kicker">Flagship Deployments</span>
        <h2 className="section-title">
          Built to keep running <span className="metal">without me.</span>
        </h2>
        <p className="section-desc">
          Three systems in production use: one autonomous data pipeline, one offline
          product, one native utility.
        </p>
      </Reveal>

      <Reveal delay={70}>
        <article className="card flagship-main">
          <div>
            <span className="flagship-badge">
              <span aria-hidden="true">●</span> Core System
            </span>
            <h3 className="flagship-title">{main.name}</h3>
            <p className="flagship-desc">{main.description}</p>

            <div className="metrics">
              {main.metric.map((metric) => (
                <div className="metric" key={metric.label}>
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="chips" style={{ marginTop: 16 }}>
              {main.techStack.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={main.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
              style={{ marginTop: 18 }}
            >
              View repository →
            </a>
          </div>

          <div className="explorer">
            <div className="explorer-head">
              <span>System Anatomy</span>
              <span>04 layers</span>
            </div>
            <div className="explorer-tabs" role="tablist" aria-label="System layers">
              {EXPLORER.map((item) => (
                <button
                  key={item.id}
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={active === item.id}
                  aria-controls="explorer-panel"
                  className="explorer-tab"
                  onClick={() => setActive(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              className="explorer-panel"
              id="explorer-panel"
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
            >
              <div className="explorer-kicker">{current.kicker}</div>
              <h4 className="explorer-title">{current.title}</h4>
              <p className="explorer-body">{current.body}</p>
            </div>
          </div>
        </article>
      </Reveal>

      <div className="flagship-grid">
        {rest.map((project, index) => (
          <Reveal key={project.id} delay={110 + index * 60}>
            <article className="card flagship-card">
              <span className="flagship-badge">
                <span aria-hidden="true">●</span> {project.categoryLabel}
              </span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="chips">
                {project.techStack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.liveUrl ?? project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                {project.liveUrl ? "Open live app →" : "View repository →"}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

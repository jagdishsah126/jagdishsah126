"use client";

import { useMemo, useState } from "react";
import { FILTERS, PROJECTS } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Matrix() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    const active = FILTERS.find((item) => item.id === filter);
    if (!active || active.id === "all") return PROJECTS;
    return PROJECTS.filter((project) => active.match.includes(project.category));
  }, [filter]);

  return (
    <section id="matrix" className="section shell">
      <div className="rule" aria-hidden="true">
        <span>03 / MATRIX</span>
        <i />
        <span>INDEX 03 — 04</span>
      </div>

      <Reveal className="section-head" delay={40}>
        <span className="section-kicker">Engineering Index</span>
        <h2 className="section-title">
          Eight systems, <span className="metal">one orbit.</span>
        </h2>
        <p className="section-desc">
          Data pipelines, offline apps, native tools, and experiments — each named after
          a planet in the order it was built.
        </p>
      </Reveal>

      <div className="filters" role="group" aria-label="Filter projects">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            className="filter"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="bento" aria-live="polite">
        {visible.map((project, index) => (
          <Reveal as="article" key={project.id} delay={index * 45} className="card bento-card">
            <div className="bento-top">
              <span className="bento-cat">{project.categoryLabel}</span>
              <span className="bento-id">
                {project.codename.toUpperCase()} / {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="bento-title">{project.name}</h3>
            <p className="bento-desc">{project.description}</p>

            <div className="bento-foot">
              {project.techStack.slice(0, 3).map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
              <a
                href={project.liveUrl ?? project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-metric"
                aria-label={`Open ${project.name}`}
              >
                {project.status} →
              </a>
            </div>
          </Reveal>
        ))}

        {visible.length === 0 && <p className="empty">No systems in this orbit.</p>}
      </div>
    </section>
  );
}

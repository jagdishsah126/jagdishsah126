"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "flagships", label: "Systems" },
  { id: "matrix", label: "Matrix" },
  { id: "contact", label: "Contact" },
];

export default function NavDock() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = ["hero", ...LINKS.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="dock-wrap">
      <nav className="dock" aria-label="Main navigation">
        <a href="#hero" className="brand" aria-label="Jagdish Sah — home">
          <span className="brand-mark">JS</span>
          <span className="brand-name">JAGDISH</span>
        </a>

        <div className="dock-links">
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} data-active={active === link.id}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="dock-status">
          <span className="pulse" aria-hidden="true" />
          <span>OPEN TO WORK</span>
        </div>

        <a href="#contact" className="dock-cta">
          TRANSMIT
        </a>
      </nav>
    </header>
  );
}

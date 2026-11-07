"use client";

import { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  const [toast, setToast] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const showToast = () => {
    setToast(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(false), 2400);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      showToast();
    } catch {
      const input = document.createElement("textarea");
      input.value = PROFILE.email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      try {
        document.execCommand("copy");
        showToast();
      } finally {
        document.body.removeChild(input);
      }
    }
  };

  return (
    <section id="contact" className="section shell">
      <div className="rule" aria-hidden="true">
        <span>04 / CONTACT</span>
        <i />
        <span>INDEX 04 — 04</span>
      </div>

      <Reveal delay={40}>
        <div className="card contact">
          <div className="contact-inner">
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" />
              {PROFILE.availability}
            </span>

            <h2 className="contact-title">
              Let&apos;s build something <span className="metal">that outlives the demo.</span>
            </h2>
            <p className="contact-sub">
              Internships, freelance data work, or a system that needs an owner — the
              inbox is open.
            </p>

            <div className="email-row">
              <span className="email-text">{PROFILE.email}</span>
              <button type="button" className="copy-btn" onClick={copy}>
                Copy address
              </button>
            </div>

            <div className="socials">
              <a
                className="social"
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                className="social"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="social"
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
              <a className="social" href={`mailto:${PROFILE.email}`}>
                Email ↗
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="toast" data-show={toast} role="status" aria-live="polite">
        <b>✓</b> Copied — {PROFILE.email}
      </div>
    </section>
  );
}

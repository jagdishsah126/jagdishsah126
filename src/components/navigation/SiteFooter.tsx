import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "../../data/portfolioData";

/**
 * Site-wide crawlable footer.
 *
 * This exists for two reasons:
 *  1. The dock navigation renders links, but a text footer gives every page a
 *     plain-HTML path to every other page, which is what crawlers weight most.
 *  2. It is a server component, so the links are in the initial HTML payload.
 */
const SECTIONS = [
  { href: "/", label: "Hub" },
  { href: "/about/", label: "About & Journey" },
  { href: "/projects/", label: "Projects" },
  { href: "/nepse/", label: "NEPSE Analysis" },
  { href: "/topics/", label: "Topics" },
  { href: "/spaces/", label: "Digital Spaces" },
  { href: "/cv/", label: "Official CV" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print relative z-10 mt-16 border-t border-white/10 bg-black/30 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm font-bold text-white mb-1">
              {PORTFOLIO_DATA.personal.name}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Computer Engineering student at IOE WRC Pokhara and NEPSE market
              analyst, from Bishnupur, Siraha, Nepal.
            </p>
          </div>

          <nav aria-label="Site sections">
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
              Sections
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {SECTIONS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
              Elsewhere
            </p>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={PORTFOLIO_DATA.personal.githubMain}
                  rel="me noopener"
                  className="text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
          <span>
            © {year} Jagdish Sah · {PORTFOLIO_DATA.personal.domain}
          </span>
          <span>Built with Next.js · Released under the MIT License</span>
        </div>
      </div>
    </footer>
  );
}

import { PROFILE, STATS } from "@/data/portfolio";

const HUD = [
  {
    index: "01",
    tag: "DATA",
    title: "Autonomous Pipelines",
    desc: "Scheduled extraction that commits real market data to public archives — no subscription, no manual run.",
  },
  {
    index: "02",
    tag: "WEB",
    title: "Offline-First Apps",
    desc: "Client-side software that keeps working when the network does not.",
  },
  {
    index: "03",
    tag: "MARKETS",
    title: "NEPSE Intelligence",
    desc: "Broker-flow and floorsheet analysis translated into disciplined, rules-based positioning.",
  },
];

const STACK = ["Python", "Next.js", "TypeScript", "Pandas", "FastAPI", "Linux"];

export default function Hero() {
  return (
    <section id="hero" className="hero shell">
      <div className="hero-wordmark" aria-hidden="true">
        <svg viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="wordmark-metal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff7dc" />
              <stop offset="38%" stopColor="#d8b45a" />
              <stop offset="62%" stopColor="#6f551d" />
              <stop offset="100%" stopColor="#f3d98b" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="190"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight="700"
            fontSize="240"
            letterSpacing="-12"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#wordmark-metal)"
            opacity="0.32"
          >
            PORTFOLIO
          </text>
        </svg>
      </div>

      <div className="hero-stage">
        <div className="hero-left">
          <p className="hero-script">Hello, I&apos;m</p>
          <h1 className="hero-name metal">JAGDISH</h1>

          <div className="hero-role">
            <span className="dot" aria-hidden="true" />
            <span>{PROFILE.role}</span>
          </div>

          <p className="hero-desc">
            {PROFILE.tagline} <strong>BCT at IOE WRC Pokhara</strong>, building from
            Bishnupur, Siraha — currently shipping autonomous market data systems.
          </p>

          <div className="hero-actions">
            <a href="#flagships" className="btn btn-gold">
              Explore Systems
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a Conversation
            </a>
          </div>

          <div className="hero-stats">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-portrait">
          <img
            src="/media/github-avatar.webp"
            alt="Portrait of Jagdish Sah"
            className="portrait-img"
            width={460}
            height={460}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="portrait-badge">
            <i aria-hidden="true" />
            <span>SIGNAL ACTIVE</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hud-stack">
            {HUD.map((item) => (
              <article className="hud" key={item.index}>
                <div className="hud-head">
                  <b>{item.index}.</b>
                  <span>{item.tag}</span>
                </div>
                <h2 className="hud-title">{item.title}</h2>
                <p className="hud-desc">{item.desc}</p>
              </article>
            ))}
            <div className="chips" aria-label="Core stack">
              {STACK.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

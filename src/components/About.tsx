import { PRINCIPLES, PROFILE } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section shell">
      <div className="rule" aria-hidden="true">
        <span>01 / ABOUT</span>
        <i />
        <span>INDEX 01 — 04</span>
      </div>

      <Reveal className="section-head" delay={40}>
        <span className="section-kicker">Engineer Profile</span>
        <h2 className="section-title">
          Roots in Siraha. <span className="metal">Patterns in the data.</span>
        </h2>
        <p className="section-desc">
          I am a computer engineering student at IOE WRC Pokhara who builds tools for
          problems I actually have: missing market data, unreliable connectivity, and
          software that asks for too much.
        </p>
      </Reveal>

      <Reveal delay={90}>
        <div className="card about-grid">
          <div className="about-copy">
            <p>
              My family home is in <strong>Bishnupur, Siraha</strong>. I spent early
              childhood in Bardiya, where my father taught science — the first place I
              learned that a question is worth more than an answer. Schooling at
              Sagarmatha HSS in Mirchaiya, then <strong>+2 Science at Prasadi Academy</strong>{" "}
              in Lalitpur, then engineering in Pokhara.
            </p>
            <p>
              Today I work across three surfaces: <strong>data engineering</strong> for the
              Nepal Stock Exchange, <strong>offline-first web apps</strong> that hold up
              without a server, and <strong>human–AI pair programming</strong> — using
              agents to expand what one person can design and verify.
            </p>
            <blockquote className="quote">“{PROFILE.motto}”</blockquote>
          </div>

          <ul className="principles">
            {PRINCIPLES.map((item) => (
              <li className="principle" key={item.index}>
                <span className="principle-index">{item.index}</span>
                <div>
                  <h3 className="principle-title">{item.title}</h3>
                  <p className="principle-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

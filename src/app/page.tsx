import About from "@/components/About";
import Contact from "@/components/Contact";
import Flagships from "@/components/Flagships";
import Hero from "@/components/Hero";
import Matrix from "@/components/Matrix";
import NavDock from "@/components/NavDock";
import { PROFILE } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="page">
      <NavDock />
      <main>
        <Hero />
        <About />
        <Flagships />
        <Matrix />
        <Contact />
      </main>

      <footer className="footer shell">
        <div className="footer-inner">
          <span>
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.domain}
          </span>
          <span>
            Built with Next.js · Cosmic Metallic ·{" "}
            <a href="#hero">Back to top ↑</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

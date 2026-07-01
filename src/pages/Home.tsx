import { Link } from "react-router-dom";
import { Reveal, Counter, Marquee } from "../components/ui";
import { homeStats } from "../data/about";

export default function Home() {
  return (
    <section>
      <div className="wrap hero">
        <Reveal className="hero-top">
          <div className="avatar">
            <img src="/profile.jpg" alt="Anastasia Kryazhkova"
              onError={(e) => {
                const t = e.currentTarget; t.style.display = "none";
                (t.nextElementSibling as HTMLElement).style.display = "flex";
              }} />
            <span className="ini" style={{ display: "none" }}>AK</span>
          </div>
          <div className="status"><span className="dot"></span> Open to new roles · 2026</div>
        </Reveal>

        <Reveal>
          <h1 className="disp">Anastasia<span className="l2">Kryazhkova</span></h1>
        </Reveal>

        <div className="hero-meta">
          <Reveal>
            <div className="role">Cybersecurity · GRC · AI Governance</div>
            <p className="sub">Three years building a public institution's security and risk capability from the ground up — from the threat-hunting trenches to AI governance to the infrastructure layer.</p>
          </Reveal>
          <Reveal className="hero-cta">
            <Link className="btn solid" to="/projects">
              View projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <Link className="btn ghost" to="/about">My story</Link>
          </Reveal>
        </div>
      </div>

      <Marquee />

      <div className="wrap section">
        <div className="stat-row">
          {homeStats.map((s, i) => (
            <Reveal className="stat" key={i}>
              <div className="v"><Counter value={s.value} suffix={s.suffix} /></div>
              <div className="k">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

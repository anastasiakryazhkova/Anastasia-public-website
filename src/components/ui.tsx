import { useEffect, useRef, useState, ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

/* Fade-up on scroll into view */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

/* Count-up number, animates once on mount */
export function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(value); return; }
    const dur = 1500, start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  const fmt = (x: number) => (x >= 1000 ? x.toLocaleString() : String(x));
  return <>{prefix}{fmt(n)}{suffix}</>;
}

/* Scrolling keyword marquee */
export function Marquee() {
  const words = ["Technology Risk", "AI Governance", "Threat Hunting", "ISO 27001", "EU AI Act", "Third-Party Risk", "FOIPPA · GDPR", "STRAs"];
  return (
    <div className="marquee">
      <div className="track">
        {[...words, ...words].map((w, i) => (<span key={i}>{w}</span>))}
      </div>
    </div>
  );
}

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Let's talk", cta: true },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <header className="floatnav">
        <NavLink className="navbrand" to="/">AK<sup>©</sup></NavLink>
        <nav className="navbar">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => `${l.cta ? "cta" : ""} ${isActive ? "active" : ""}`.trim()}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button className={`navburger ${open ? "open" : ""}`} onClick={() => setOpen((o) => !o)}>
          <span>Menu</span>
          <span className="bars"><span></span><span></span><span></span></span>
        </button>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end}
            className={({ isActive }) => (isActive ? "active" : "")}>
            {l.label} <span>↗</span>
          </NavLink>
        ))}
      </div>
    </>
  );
}

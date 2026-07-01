import { Reveal } from "../components/ui";
import { focusAreas, strengths } from "../data/about";

function Icon({ name }: { name: string }) {
  const p = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 } as const;
  switch (name) {
    case "check": return <svg {...p}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>;
    case "robot": return <svg {...p}><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M9 8V6a3 3 0 016 0v2M9 14h.01M15 14h.01" /></svg>;
    case "people": return <svg {...p}><circle cx="9" cy="9" r="3" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5M16 6a3 3 0 010 6" /></svg>;
    case "gear": return <svg {...p}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2" /></svg>;
    case "lock": return <svg {...p}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></svg>;
    default: return <svg {...p}><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /></svg>;
  }
}

export default function About() {
  return (
    <>
      <div className="wrap pad page-head">
        <Reveal><div className="num">01 — About</div></Reveal>
        <Reveal><h1 className="disp">Who I am.</h1></Reveal>
      </div>

      <div className="wrap about-grid">
        <Reveal className="lead">I fix the system, not just the symptom.</Reveal>
        <Reveal className="about-body">
          <p>I'm a cybersecurity and GRC analyst who has spent three years building the Legislative Assembly of British Columbia's security and risk capabilities from the ground up — beginning in threat and vulnerability management, expanding into AI governance and privacy, and now owning infrastructure-layer controls.</p>
          <p>The throughline is turning <strong>complex regulatory requirements</strong> — ISO/IEC&nbsp;27001, NIST SP&nbsp;800-53, FOIPPA, GDPR — into controls that actually work, and building tooling that scales. That meant an in-house STRA platform covering 75+ systems and driving the remediation of <strong>10,000+ vulnerabilities</strong>.</p>
          <div className="quote">I didn't start in governance. I started where controls break in practice — then moved upstream.</div>
          <p>From there I leaned into the frontier: a custom AI assessment framework mapped to the <strong>EU AI Act, NIST AI RMF, and AIUC-1</strong>, applied across 10+ AI tools, plus three production Copilot agents shipped to legal and privacy teams. Today I work the infrastructure layer — network security, cloud baselines, PKI, and backup/DR controls.</p>
          <p>I'm deepening the legal side through an <strong>LL.M. in Privacy, Cybersecurity &amp; Data Management</strong> at Maastricht University — because the next decade of risk work lives at the intersection of technology, law, and AI.</p>
        </Reveal>
      </div>

      <div className="wrap section">
        <Reveal className="shead">
          <div className="eyebrow">Focus areas</div>
          <h2 className="disp" style={{ marginTop: 14 }}>Where I do my best work.</h2>
        </Reveal>
        <div className="focus-grid">
          {focusAreas.map((f, i) => (
            <Reveal className="focus" key={i}>
              <div className="ic"><Icon name={f.icon} /></div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section dark">
        <div className="wrap">
          <Reveal className="shead">
            <div className="eyebrow" style={{ color: "rgba(236,232,224,.7)" }}>Beyond the frameworks</div>
            <h2 className="disp" style={{ marginTop: 14 }}>Professional strengths.</h2>
          </Reveal>
          <div className="strengths">
            {strengths.map((s, i) => (
              <Reveal className="strength" key={i}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <p>{s}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

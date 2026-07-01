import { useState } from "react";
import { Reveal } from "../components/ui";
import { llmCourses, bscCourses, certs, skillBand } from "../data/education";

type Tab = "llm" | "bsc" | "cert";

export default function Education() {
  const [tab, setTab] = useState<Tab>("llm");

  return (
    <>
      <div className="wrap pad page-head">
        <Reveal><div className="num">04 — Education</div></Reveal>
        <Reveal><h1 className="disp">What I studied.</h1></Reveal>
      </div>

      <div className="wrap" style={{ paddingBottom: "clamp(50px,7vw,90px)" }}>
        <Reveal>
          <div className="tabs" role="tablist">
            <button className={`tab ${tab === "llm" ? "active" : ""}`} onClick={() => setTab("llm")}>LL.M. — Maastricht</button>
            <button className={`tab ${tab === "bsc" ? "active" : ""}`} onClick={() => setTab("bsc")}>BSc — Computer Science</button>
            <button className={`tab ${tab === "cert" ? "active" : ""}`} onClick={() => setTab("cert")}>Certifications</button>
          </div>

          {tab === "llm" && (
            <div className="panel active">
              <div className="panel-top">
                <h3>Advanced Master in Privacy, Cybersecurity &amp; Data Management (LL.M.)</h3>
                <div className="meta"><div className="y">2026 – 2028 · In Progress</div><div className="loc">Maastricht University · NL</div></div>
              </div>
              <p className="lead">A two-year, part-time LL.M. run by the Faculty of Law's <a href="https://www.maastrichtuniversity.nl/education/master/programmes/advanced-master-privacy-cybersecurity-and-data-management-llm" target="_blank" rel="noopener noreferrer">European Centre on Privacy and Cybersecurity (ECPC)</a> — 60 ECTS bridging law, technology, ethics, governance, and management, delivered through blended seminar blocks in Maastricht and Brussels alongside full-time work.</p>
              <h5>Curriculum areas</h5>
              <div className="course-grid">
                {llmCourses.map((c, i) => (
                  <div className="course" key={i}><span className="n">{c.n}</span><div><b>{c.title}</b>{c.desc}</div></div>
                ))}
              </div>
              <h5>Focus</h5>
              <div className="tags">
                {["EU AI Act", "GDPR & ePrivacy", "NIS / Cyber Law", "ISO 27005 · FAIR", "Data Governance"].map((t) => (
                  <span className="tag2" key={t}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {tab === "bsc" && (
            <div className="panel active">
              <div className="panel-top">
                <h3>Bachelor of Science — Computer Science</h3>
                <div className="meta"><div className="y">2021 – 2024</div><div className="loc">Thompson Rivers University · BC</div></div>
              </div>
              <p className="lead">A full computer-science foundation spanning programming, systems, theory, and mathematics — the technical grounding under every risk decision I make today.</p>
              <h5>Core coursework</h5>
              <div className="course-grid">
                {bscCourses.map((c, i) => (
                  <div className="course" key={i}><span className="n">{c.n}</span><div><b>{c.title}</b>{c.desc}</div></div>
                ))}
              </div>
              <h5>Languages &amp; tools</h5>
              <div className="tags">
                {["Python", "Java", "C / C++", "SQL", "Git", "Linux"].map((t) => (<span className="tag2" key={t}>{t}</span>))}
              </div>
            </div>
          )}

          {tab === "cert" && (
            <div className="panel active">
              <div className="panel-top">
                <h3>Certifications &amp; continuous learning</h3>
                <div className="meta"><div className="y">Microsoft · ISACA</div><div className="loc">in progress</div></div>
              </div>
              <p className="lead">Vendor and industry credentials that back the hands-on work — with the next ones already underway.</p>
              <div className="cert-list">
                {certs.map((c, i) => (
                  <div className="cert" key={i}>
                    <span className={`badge ${c.kind}`}>{c.badge}</span>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Reveal>

        <div className="skill-band">
          {skillBand.map((s, i) => (
            <Reveal className="scard" key={i}>
              <h4>{s.title}</h4>
              <ul>{s.items.map((it, j) => (<li key={j}>{it}</li>))}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

import { useMemo, useState } from "react";
import { Reveal } from "../components/ui";
import { ProjectModal } from "../components/ProjectModal";
import { projects, TILE, Project } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);

  const cats = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.cat)))], []);
  const count = (c: string) => (c === "All" ? projects.length : projects.filter((p) => p.cat === c).length);

  return (
    <>
      <div className="wrap pad page-head">
        <Reveal><div className="num">03 — Projects</div></Reveal>
        <Reveal><h1 className="disp">Selected work.</h1></Reveal>
      </div>

      <div className="wrap">
        <Reveal className="filters">
          {cats.map((c) => (
            <button key={c} className={`filter ${active === c ? "active" : ""}`} onClick={() => setActive(c)}>
              {c}<span className="c">{count(c)}</span>
            </button>
          ))}
        </Reveal>

        <div className="pgrid">
          {projects.map((p, i) => {
            const hidden = active !== "All" && p.cat !== active;
            const tile = TILE[p.cat] || "#15151A";
            return (
              <article key={p.id} className={`card ${hidden ? "hide" : ""}`} onClick={() => setOpen(p)}>
                <div className="thumb" style={{ background: tile }}>
                  <div className="deco"></div>
                  <div className="deco two"></div>
                  <div className="idx">{String(i + 1).padStart(2, "0")}</div>
                  <div className="cat">{p.cat}</div>
                </div>
                <div className="body">
                  <h3>{p.title}</h3>
                  <p className="blurb">{p.blurb}</p>
                  <div className="kpis">{p.kpis.map((k, j) => (<span className="kpi" key={j}>{k}</span>))}</div>
                  <div className="more">
                    View case
                    <span className="arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </>
  );
}

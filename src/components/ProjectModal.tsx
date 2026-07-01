import { useEffect } from "react";
import { Project, TILE } from "../data/projects";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (project) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <div className={`ov ${project ? "open" : ""}`} role="dialog" aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="closeb" aria-label="Close" onClick={onClose}>&times;</button>
        {project && (
          <>
            <div className="modal-top" style={{ background: TILE[project.cat] || "#15151A" }}>
              <div className="deco"></div>
              <div className="cat">Project · {project.type}</div>
              <h3>{project.title}</h3>
            </div>
            <div className="modal-body">
              <div className="mblock">
                <h4>The Problem</h4>
                <p>{project.problem}</p>
              </div>
              <div className="mstat-row">
                {project.stats.map((s, i) => (
                  <div className="mstat" key={i}><div className="v">{s[0]}</div><div className="k">{s[1]}</div></div>
                ))}
              </div>
              <div className="mblock">
                <h4>What I Built</h4>
                <ul>{project.built.map((b, i) => (<li key={i}>{b}</li>))}</ul>
              </div>
              <div className="mblock">
                <h4>Stack &amp; Frameworks</h4>
                <div className="chips">{project.stack.map((s, i) => (<span className="chip" key={i}>{s}</span>))}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

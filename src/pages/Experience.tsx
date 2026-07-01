import { Reveal } from "../components/ui";
import { roles } from "../data/experience";

export default function Experience() {
  return (
    <>
      <div className="wrap pad page-head">
        <Reveal><div className="num">02 — Experience</div></Reveal>
        <Reveal><h1 className="disp">What I've done.</h1></Reveal>
      </div>
      <div className="wrap" style={{ paddingBottom: "clamp(50px,7vw,90px)" }}>
        {roles.map((r, i) => (
          <Reveal className="role" key={i}>
            <div className="role-head">
              <div className="rt">
                <h3>{r.title}</h3>
                <div className="org">{r.org}</div>
              </div>
              <div className="when">
                <div className="d">{r.date}</div>
                <div className="loc">{r.loc}</div>
              </div>
            </div>
            <table className="duties">
              <tbody>
                {r.duties.map((d, j) => (
                  <tr key={j}>
                    <td className="area">{d.area}</td>
                    <td className="detail" dangerouslySetInnerHTML={{ __html: d.detail }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        ))}
      </div>
    </>
  );
}

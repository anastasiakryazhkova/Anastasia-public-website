import { Reveal } from "../components/ui";

export default function Contact() {
  return (
    <section>
      <div className="contact">
        <div className="ring a"></div>
        <div className="ring b"></div>
        <div className="wrap">
          <Reveal className="status"><span className="dot"></span> Open to new roles · 2026</Reveal>
          <Reveal>
            <h2>Let's build something<br />that needs <em>real</em> risk thinking.</h2>
          </Reveal>
          <Reveal>
            <a className="bigmail" href="mailto:anastasiakryazhkova19@gmail.com">
              anastasiakryazhkova19@gmail.com
              <span className="ar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </span>
            </a>
          </Reveal>
          <Reveal className="cgrid">
            <div className="cg"><div className="l">LinkedIn</div><a className="v" href="https://www.linkedin.com/in/anaanastasia-kryazhkova/" target="_blank" rel="noopener noreferrer">in/anaanastasia-kryazhkova ↗</a></div>
            <div className="cg"><div className="l">Phone</div><div className="v">+1 236-313-2290</div></div>
            <div className="cg"><div className="l">Location</div><div className="v">British Columbia, Canada</div></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

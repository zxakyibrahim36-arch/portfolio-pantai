import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { Bubbles } from "./Decor";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="proyek" className="section sea">
      <Bubbles />
      <div className="container">
        <SectionHead
          eyebrow="Proyek"
          title="Karya-Karya Pilihan"
          subtitle="Beberapa proyek yang saya banggakan — klik untuk melihat demo atau kodenya."
        />

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 110} className="card project">
              <div className="project-cover" style={{ background: p.gradient }}>
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="chips">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Demo ↗
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    Kode ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

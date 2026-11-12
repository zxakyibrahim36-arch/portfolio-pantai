import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Shark from "./Shark";
import { languages, skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skill" className="section foam">
      <div className="container">
        <SectionHead
          eyebrow="Keahlian"
          title="Bahasa & Teknologi yang Saya Kuasai"
          subtitle="Bahasa pemrograman, framework, database, dan tools yang saya pakai sehari-hari."
        />

        <div className="skills-top">
          <div className="lang-grid">
            {languages.map((l, i) => (
              <Reveal key={l.name} delay={i * 70} className="card lang">
                <div className="lang-row">
                  <strong>{l.name}</strong>
                  <span>{l.level}%</span>
                </div>
                <div
                  className="bar"
                  role="progressbar"
                  aria-label={`${l.name} ${l.level}%`}
                  aria-valuenow={l.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ "--w": `${l.level}%` }}
                >
                  <span aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="skills-shark">
            <Shark accessory="laptop" size={230} className="bob" />
            <p>Ngoding sambil dengar ombak</p>
          </Reveal>
        </div>

        <div className="groups">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90} className="card group">
              <h3>
                {g.title}
              </h3>
              <ul className="chips">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

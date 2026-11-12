import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { Starfish, Shell } from "./Decor";
import { education, certifications, achievements } from "../data/portfolio";

export default function Education() {
  return (
    <section id="pendidikan" className="section sand">
      <Starfish className="deco d1" color="#ffb067" />
      <Shell className="deco d3" />

      <div className="container">
        <SectionHead
          eyebrow="Pendidikan"
          title="Pendidikan, Lomba & Prestasi"
          subtitle="Bekal belajar yang terus saya tambah."
        />

        <div className="edu-grid">
          <Reveal className="card edu-col">
            <h3>Pendidikan</h3>
            <ul className="edu-list">
              {education.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  {(e.place || e.period) && (
                    <span>{[e.place, e.period].filter(Boolean).join(" · ")}</span>
                  )}
                  {e.note && <small>{e.note}</small>}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="card edu-col">
            <h3>Sertifikat & Lomba</h3>
            <ul className="edu-list">
              {certifications.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}</strong>
                  <span>{[c.issuer, c.year].filter(Boolean).join(" · ")}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240} className="card edu-col">
            <h3>Prestasi</h3>
            <ul className="edu-list plain">
              {achievements.map((a) => (
                <li key={a.href}>
                  {a.text}
                  <a href={a.href} target="_blank" rel="noreferrer">
                    {a.source}
                  </a>
                  .
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

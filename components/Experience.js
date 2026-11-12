import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { Shell } from "./Decor";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="pengalaman" className="section sand-soft">
      <div className="container">
        <SectionHead
          eyebrow="Pengalaman"
          title="Perjalanan Karier Saya"
          subtitle="Tempat-tempat yang pernah saya singgahi sambil membangun produk digital."
        />

        <ol className="timeline">
          {experiences.map((e, i) => (
            <Reveal key={e.company + e.period} as="li" delay={i * 120} className="t-item">
              <Shell className="t-dot" color={i % 2 ? "#ffd6a5" : "#ffb7a5"} />
              <div className="card t-card">
                <div className="t-head">
                  <h3>{e.role}</h3>
                  <span className="t-period">{e.period}</span>
                </div>
                {(e.company || e.location) && (
                  <p className="t-company">
                    {e.company}
                    {e.location && <> · <em>{e.location}</em></>}
                  </p>
                )}
                <ul className="t-points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {e.tech.length > 0 && (
                  <ul className="chips">
                    {e.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

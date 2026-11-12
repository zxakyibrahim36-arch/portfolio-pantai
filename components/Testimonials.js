import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { testimonials } from "../data/portfolio";

export default function Testimonials() {
  return (
    <section id="testimoni" className="section foam">
      <div className="container">
        <SectionHead eyebrow="Penyemangat" title="Kata Mereka" subtitle="Kata-kata penyemangat dari guru-guru saya." />

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="card testi">
              <span className="quote-mark">“</span>
              <p>{t.quote}</p>
              <div className="testi-who">
                <span className="avatar">{t.name[0]}</span>
                <div>
                  <strong>{t.name}</strong>
                  {t.role && <small>{t.role}</small>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Shark from "./Shark";
import { Shell, Starfish } from "./Decor";
import { about, profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="tentang" className="section sand">
      <Shell className="deco d1" />
      <Starfish className="deco d2" />
      <Shell className="deco d3" color="#ffd6a5" />

      <div className="container">
        <SectionHead eyebrow="Tentang Saya" title="Kenalan dulu, yuk!" subtitle="Sedikit cerita tentang siapa saya dan apa yang saya kerjakan." />

        <div className="about-grid">
          <Reveal className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="info-list">
              <li>{profile.location}</li>
              <li>{profile.email}</li>
            </ul>
          </Reveal>

          <Reveal delay={150} className="about-side">
            <div className="shark-card">
              <Shark accessory="book" size={210} className="bob" />
              <p>“Belajar itu seperti ombak — datang terus, tinggal ikut berselancar.”</p>
            </div>
          </Reveal>
        </div>

        <div className="facts">
          {about.facts.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="card fact">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

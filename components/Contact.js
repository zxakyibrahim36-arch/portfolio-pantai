import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Shark from "./Shark";
import ContactForm from "./ContactForm";
import { Shell, Starfish } from "./Decor";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="kontak" className="section sand-deep">
      <Shell className="deco d1" color="#ff9f8f" />
      <Starfish className="deco d2" />
      <Shell className="deco d3" color="#ffd6a5" />

      <div className="container">
        <SectionHead
          eyebrow="Kontak"
          title="Yuk, Ngobrol Bareng!"
          subtitle="Punya proyek, ide, atau sekadar ingin menyapa? Kirim pesan — saya senang mendengarnya."
        />

        <div className="contact-grid">
          <Reveal className="contact-info">
            <div className="card">
              <ul className="info-list big">
                <li>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
                </li>
                <li>
                  {profile.location}
                </li>
              </ul>
              <ul className="socials">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contact-shark">
              <Shark accessory="coffee" size={190} className="bob" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ContactForm email={profile.email} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Shark from "./Shark";
import ProfilePhoto from "./ProfilePhoto";
import RoleRotator from "./RoleRotator";
import WaveStack from "./WaveStack";
import { Sun, Cloud } from "./Decor";
import { profile, stats } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="sun-wrap" aria-hidden="true">
        <Sun />
      </div>
      <Cloud className="cloud c1" />
      <Cloud className="cloud c2" />
      <Cloud className="cloud c3" />

      <div className="container hero-grid">
        <div className="hero-text">
          <h1>
            Saya <span className="grad">{profile.name}</span>
          </h1>
          <p className="role">
            Seorang <RoleRotator roles={profile.roles} />
          </p>
          <p className="lead">{profile.tagline}</p>

          <div className="cta">
            <a href="#proyek" className="btn btn-primary">
              Lihat Proyek
            </a>
            <a href="#kontak" className="btn btn-ghost">
              Hubungi Saya
            </a>
            {profile.cv && (
              <a href={profile.cv} className="btn btn-sun" download>
                Unduh CV
              </a>
            )}
          </div>

          <ul className="stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <ProfilePhoto src={profile.photo} alt={`Foto ${profile.name}`} />
          <div className="hero-shark">
            <Shark accessory="sunglasses" size={170} className="bob" />
          </div>
          <span className="float-badge b1">Code & Coffee</span>
          <span className="float-badge b2">Ride the Wave</span>
        </div>
      </div>

      <WaveStack>
        <div className="swimmer s1">
          <Shark accessory="hat" size={120} className="bob" />
        </div>
        <div className="swimmer s2">
          <Shark accessory="headphones" size={90} className="bob" />
        </div>
      </WaveStack>
    </section>
  );
}

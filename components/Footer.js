import WaveDivider from "./WaveDivider";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <WaveDivider from="var(--sand-deep)" to="var(--deep)" />
      <div className="footer-body">
        <p>
          © {new Date().getFullYear()} {profile.name}. Dibuat dengan Next.js, di tepi pantai.
        </p>
        <a href="#beranda" className="to-top">
          ↑ Kembali ke atas
        </a>
      </div>
    </footer>
  );
}

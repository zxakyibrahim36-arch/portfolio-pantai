import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="sec-head">
      <span className="pill">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}

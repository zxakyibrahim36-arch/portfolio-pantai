// Pembatas antar section berupa ombak. Bergerak sendiri + bergeser saat di-scroll.
export default function WaveDivider({ from, to, reverse = false }) {
  return (
    <div className="wave-divider" style={{ "--from": from, "--to": to }} aria-hidden="true">
      <div
        className="wave-layer"
        style={{ "--c": to, "--o": 0.45, "--dur": "20s", "--k": reverse ? 0.3 : -0.3, "--shape": "var(--shape-b)", height: "100%" }}
      >
        <i />
      </div>
      <div
        className="wave-layer"
        style={{ "--c": to, "--o": 1, "--dur": "14s", "--k": reverse ? -0.5 : 0.5, "--shape": "var(--shape-a)", height: "72%", animationDirection: reverse ? "reverse" : "normal" }}
      >
        <i />
      </div>
    </div>
  );
}

// Tumpukan ombak laut di bagian bawah hero (laut -> busa -> pasir).
const layers = [
  { c: "#8fdcee", o: 0.85, h: 230, dur: 24, k: -0.25, shape: "a", rev: false },
  { c: "#55c6e0", o: 0.95, h: 185, dur: 17, k: 0.35, shape: "b", rev: true },
  // ---- hiu berenang di sini (di antara ombak) ----
  { c: "#2fb0d0", o: 1, h: 140, dur: 13, k: -0.5, shape: "a", rev: false },
  { c: "#ffffff", o: 0.8, h: 96, dur: 19, k: 0.4, shape: "b", rev: true },
  { c: "#fff1cf", o: 1, h: 66, dur: 16, k: -0.3, shape: "a", rev: false },
];

function Layer({ l }) {
  return (
    <div
      className="wave-layer"
      style={{
        "--c": l.c,
        "--o": l.o,
        "--dur": `${l.dur}s`,
        "--k": l.k,
        "--shape": `var(--shape-${l.shape})`,
        height: l.h,
        animationDirection: l.rev ? "reverse" : "normal",
      }}
    >
      <i />
    </div>
  );
}

export default function WaveStack({ children }) {
  return (
    <div className="wave-stack" aria-hidden="true">
      <Layer l={layers[0]} />
      <Layer l={layers[1]} />
      {children}
      {layers.slice(2).map((l, i) => (
        <Layer key={i} l={l} />
      ))}
    </div>
  );
}

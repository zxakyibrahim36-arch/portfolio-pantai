// Dekorasi pantai: matahari, awan, kerang, bintang laut, gelembung.

export function Sun() {
  const rays = Array.from({ length: 14 }, (_, i) => i * (360 / 14));
  return (
    <svg viewBox="-110 -110 220 220" className="sun" aria-hidden="true">
      <defs>
        <radialGradient id="sunGlow">
          <stop offset="0%" stopColor="#fff6c2" />
          <stop offset="100%" stopColor="#ffd84d" />
        </radialGradient>
      </defs>
      <circle r="100" fill="#fff3b0" opacity=".35" />
      <g className="sun-rays">
        {rays.map((a) => (
          <line
            key={a}
            x1="0"
            y1="-66"
            x2="0"
            y2="-92"
            stroke="#ffc93c"
            strokeWidth="7"
            strokeLinecap="round"
            transform={`rotate(${a})`}
          />
        ))}
      </g>
      <circle r="54" fill="url(#sunGlow)" />
    </svg>
  );
}

export function Cloud({ className = "" }) {
  return (
    <svg viewBox="0 0 200 90" className={className} aria-hidden="true">
      <g fill="#ffffff" opacity=".92">
        <circle cx="60" cy="56" r="30" />
        <circle cx="100" cy="40" r="36" />
        <circle cx="144" cy="56" r="28" />
        <rect x="40" y="56" width="124" height="30" rx="15" />
      </g>
    </svg>
  );
}

export function Shell({ className = "", color = "#ffb7a5" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="24" y="54" width="16" height="7" rx="3" fill="#f59a85" />
      <path d="M32 6 C14 8 4 26 6 44 C8 54 20 58 32 58 C44 58 56 54 58 44 C60 26 50 8 32 6Z" fill={color} />
      <path
        d="M32 58 L12 20 M32 58 L22 12 M32 58 L32 8 M32 58 L42 12 M32 58 L52 20"
        stroke="#fff"
        strokeOpacity=".65"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Starfish({ className = "", color = "#ff9a76" }) {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 === 0 ? 27 : 12;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    return `${(32 + r * Math.cos(a)).toFixed(1)},${(32 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <polygon points={pts} fill={color} stroke={color} strokeWidth="6" strokeLinejoin="round" />
      <g fill="#fff" opacity=".7">
        <circle cx="32" cy="20" r="2" />
        <circle cx="32" cy="32" r="2.4" />
        <circle cx="22" cy="38" r="2" />
        <circle cx="42" cy="38" r="2" />
      </g>
    </svg>
  );
}

export function Bubbles() {
  const list = [
    { l: "6%", s: 14, d: 0, t: 9 },
    { l: "18%", s: 22, d: 3, t: 12 },
    { l: "34%", s: 10, d: 1, t: 8 },
    { l: "52%", s: 18, d: 5, t: 11 },
    { l: "68%", s: 12, d: 2, t: 10 },
    { l: "82%", s: 24, d: 4, t: 13 },
    { l: "93%", s: 14, d: 6, t: 9 },
  ];
  return (
    <div className="bubbles" aria-hidden="true">
      {list.map((b, i) => (
        <span
          key={i}
          style={{ left: b.l, width: b.s, height: b.s, animationDelay: `${b.d}s`, animationDuration: `${b.t}s` }}
        />
      ))}
    </div>
  );
}

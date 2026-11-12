// Maskot hiu Ombak dengan warna dan pola khas; aksesori dapat diganti.
export default function Shark({ accessory = "none", size = 180, className = "", title = "Hiu Ombak" }) {
  const body = "#45bdc7";
  const dark = "#167c91";
  const belly = "#fff0c8";

  return (
    <svg
      className={`shark ${className}`}
      width={size}
      height={size * 0.9}
      viewBox="0 0 200 180"
      role="img"
      aria-label={title}
    >
      {/* Ekor bercabang dan sirip berujung koral menjadi ciri khas Hiu Ombak. */}
      <path d="M36 88 L8 58 L16 91 L5 121 L43 108Z" fill={dark} />
      <path d="M16 91 L9 68 L29 91Z" fill="#ff927e" />
      <path d="M92 32 L116 -2 L138 36Z" fill={dark} />
      <path d="M108 18 L116 -2 L126 25Z" fill="#ff927e" />
      <path d="M70 118 L48 152 L96 134Z" fill={dark} />
      <path d="M150 112 L176 140 L134 134Z" fill={dark} />
      <path
        d="M28 94 C31 59 59 37 96 31 C135 24 165 41 180 67 C188 82 182 102 165 116 C147 133 119 141 88 139 C51 137 28 120 28 94Z"
        fill={body}
      />
      <path d="M48 109 C63 135 132 146 164 111 C146 129 78 135 48 109Z" fill={belly} />
      <path d="M151 74 q6 8 0 16 M159 72 q6 8 0 16 M167 74 q5 7 0 14" stroke={dark} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M49 60 Q58 53 67 57 M49 71 Q57 66 64 68" stroke="#a8edf0" strokeWidth="4" fill="none" strokeLinecap="round" />
      <g className="eyes">
        <circle cx="84" cy="72" r="12" fill="#fff" />
        <circle cx="122" cy="72" r="12" fill="#fff" />
        <circle cx="86" cy="74" r="6.5" fill="#1d3442" />
        <circle cx="124" cy="74" r="6.5" fill="#1d3442" />
        <circle cx="88" cy="71.5" r="2.2" fill="#fff" />
        <circle cx="126" cy="71.5" r="2.2" fill="#fff" />
      </g>
      <circle cx="68" cy="96" r="7" fill="#ff927e" opacity=".62" />
      <circle cx="140" cy="96" r="7" fill="#ff927e" opacity=".62" />
      <path d="M76 96 Q105 120 139 96 Q111 106 76 96Z" fill="#174b60" />
      <path d="M98 108 Q108 115 119 107 Q110 119 98 108Z" fill="#ff927e" />
      <path d="M84 98 Q108 105 132 98" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />

      {accessory === "sunglasses" && (
        <g>
          <rect x="68" y="60" width="32" height="24" rx="9" fill="#1d3442" />
          <rect x="108" y="60" width="32" height="24" rx="9" fill="#1d3442" />
          <rect x="98" y="66" width="12" height="4" fill="#1d3442" />
          <path d="M72 64 l10 -2" stroke="#ffffff" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" />
          <path d="M112 64 l10 -2" stroke="#ffffff" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {accessory === "laptop" && (
        <g transform="translate(52 118)">
          <rect width="96" height="56" rx="7" fill="#2d4a5e" />
          <rect x="6" y="6" width="84" height="44" rx="3" fill="#bfeaf7" />
          <text x="48" y="36" textAnchor="middle" fontSize="20" fontWeight="700" fill="#17435a" fontFamily="monospace">
            {"</>"}
          </text>
          <rect x="-8" y="56" width="112" height="8" rx="4" fill="#cfd8dc" />
        </g>
      )}

      {accessory === "book" && (
        <g transform="translate(56 120)">
          <path d="M0 6 Q44 -6 88 6 V52 Q44 42 0 52Z" fill="#3b82c4" />
          <path d="M44 4 V48" stroke="#fff" strokeWidth="3" />
          <path d="M8 18 H36 M8 28 H36 M52 18 H80 M52 28 H80" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".8" />
        </g>
      )}

      {accessory === "coffee" && (
        <g transform="translate(120 122)">
          <rect width="38" height="40" rx="8" fill="#fff" stroke="#17435a" strokeWidth="3" />
          <path d="M38 12 q16 2 0 20" fill="none" stroke="#17435a" strokeWidth="4" />
          <rect x="3" y="3" width="32" height="10" rx="4" fill="#8a5a3c" />
          <path className="steam" d="M12 -4 q-5 -8 0 -14 M24 -4 q-5 -8 0 -14" stroke="#17435a" strokeOpacity=".4" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      )}

      {accessory === "hat" && (
        <g>
          <ellipse cx="108" cy="32" rx="58" ry="10" fill="#f2c46d" />
          <path d="M72 32 Q72 2 108 2 Q144 2 144 32Z" fill="#f7d68b" />
          <path d="M74 28 Q108 36 142 28 V22 Q108 30 74 22Z" fill="#ff7a6b" />
        </g>
      )}

      {accessory === "headphones" && (
        <g>
          <path d="M60 78 Q60 22 112 22 Q164 22 164 78" fill="none" stroke="#2d4a5e" strokeWidth="7" strokeLinecap="round" />
          <rect x="50" y="68" width="18" height="34" rx="8" fill="#ff7a6b" />
          <rect x="156" y="68" width="18" height="34" rx="8" fill="#ff7a6b" />
        </g>
      )}
    </svg>
  );
}

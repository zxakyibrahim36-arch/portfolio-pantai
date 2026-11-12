"use client";

import { useState } from "react";

// Menampilkan foto profil dari public/profile.jpg.
// Jika file belum ada, tampil avatar sementara.
export default function ProfilePhoto({ src, alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="photo-wrap">
      <div className="photo-ring" />
      <div className="photo-frame">
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} onError={() => setFailed(true)} />
        ) : (
          <svg viewBox="0 0 200 200" className="photo-placeholder" role="img" aria-label="Foto profil sementara">
            <defs>
              <linearGradient id="phBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#bfeaf7" />
                <stop offset="1" stopColor="#ffe9b0" />
              </linearGradient>
            </defs>
            <rect width="200" height="200" fill="url(#phBg)" />
            <circle cx="100" cy="78" r="36" fill="#17435a" opacity=".85" />
            <path d="M28 200 C28 140 64 118 100 118 C136 118 172 140 172 200Z" fill="#17435a" opacity=".85" />
            <text x="100" y="188" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">
              taruh foto: public/profile.jpg
            </text>
          </svg>
        )}
      </div>
    </div>
  );
}

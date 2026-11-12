"use client";

import { useEffect } from "react";

// Menyimpan posisi scroll ke CSS variable --sy supaya ombak, matahari,
// dan awan bisa bergeser mengikuti scroll (parallax).
export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const update = () => {
      root.style.setProperty("--sy", String(Math.round(window.scrollY)));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

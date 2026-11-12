"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const firstName = profile.name.split(" ")[0];

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#beranda" className="brand" onClick={() => setOpen(false)}>
          <span>{firstName}</span>
        </a>

        <button className="nav-toggle" aria-label="Buka menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

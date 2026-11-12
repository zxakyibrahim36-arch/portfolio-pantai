import "./globals.css";
import { profile } from "../data/portfolio";

export const metadata = {
  title: `${profile.name} — Portofolio Programmer`,
  description: profile.tagline,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7fd6ea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

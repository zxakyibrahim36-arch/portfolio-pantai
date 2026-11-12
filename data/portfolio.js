// ============================================================
//  EDIT FILE INI SAJA untuk mengganti seluruh isi portofolio.
//  Semua data di bawah adalah CONTOH — ganti dengan data kamu.
// ============================================================

export const profile = {
  name: "ZAKY DAFFA IBRAHIM",
  roles: ["Full-Stack Developer", "Web Developer", "Software Engineer", "Problem Solver"],
  tagline:
    "Saya membangun aplikasi web yang cepat, rapi, dan menyenangkan dipakai — dari tampilan yang ceria sampai server yang tangguh.",
  photo: "/profile.jpg", // taruh foto kamu di folder public/ dengan nama profile.jpg
  cv: "", // contoh: "/cv.pdf" (taruh file di public/). Kosongkan untuk menyembunyikan tombol CV.
  email: "zxakyibrahim@gmail.com",
  phone: "+62 812-0000-0000",
  location: "Bogor, Jawa Barat, Indonesia",
  socials: [
    { label: "GitHub", href: "https://github.com/username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/username" },
    { label: "Instagram", href: "https://instagram.com/username" },
    { label: "Twitter / X", href: "https://x.com/username" },
  ],
};

export const stats = [
  { value: "3", label: "Tahun pengalaman" },
];

export const about = {
  paragraphs: [
    "Halo! Saya seorang programmer yang suka mengubah ide menjadi produk digital yang nyata. Saya terbiasa mengerjakan proyek dari nol: merancang arsitektur, membuat antarmuka, membangun API, sampai deploy ke server.",
    "Saya percaya kode yang baik itu mudah dibaca, mudah dirawat, dan bermanfaat bagi penggunanya. Saya senang belajar teknologi baru dan berbagi ilmu dengan sesama developer.",
    "Di luar coding, saya suka menjelajah pantai, ngopi sambil baca dokumentasi, dan mencoba resep-resep baru.",
  ],
  facts: [
    { title: "Fokus", text: "Web app, REST API, dan dashboard" },
    { title: "Sedang dipelajari", text: "System design & cloud native" },
    { title: "Bahasa", text: "Indonesia (native), Inggris (aktif)" },
    { title: "Bahan bakar", text: "Kopi susu & musik lo-fi" },
  ],
};

// level: 0 - 100
export const languages = [
  { name: "JavaScript", level: 92, color: "#f7c948" },
  { name: "TypeScript", level: 85, color: "#3b82c4" },
  { name: "Python", level: 78, color: "#4f9d69" },
  { name: "PHP", level: 74, color: "#7c83c9" },
  { name: "Java", level: 66, color: "#e8743b" },
  { name: "Go", level: 55, color: "#2bb5d6" },
  { name: "SQL", level: 84, color: "#e0646b" },
  { name: "HTML & CSS", level: 94, color: "#ef7f4d" },
];

export const skillGroups = [
  {
    title: "Framework & Library",
    items: ["Next.js", "React", "Node.js", "Express", "Laravel", "Tailwind CSS", "Django", "Flutter"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Prisma"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git & GitHub", "Docker", "Linux", "Nginx", "CI/CD", "AWS", "Vercel", "Postman"],
  },
  {
    title: "Desain & Lainnya",
    items: ["Figma", "REST API", "GraphQL", "Unit Testing", "Agile / Scrum"],
  },
];

export const experiences = [
  {
    role: "Full-Stack Developer",
    company: "SMK AK Nusa Bangsa",
    period: "Jun 2024 — 2026",
    points: [
      "Membuat website dan aplikasi mobile.",
      "Membuat sistem data perpustakaan.",
      "Membuat aplikasi mobile belanja online.",
    ],
    tech: [],
  },
  {
    role: "PT",
    company: "?",
    period: "Nov 2026 — 2027",
    points: ["?"],
    tech: [],
  },
];

export const projects = [
  {
    title: "SeaCommerce",
    gradient: "linear-gradient(135deg,#7fd6ea,#2fb0d0)",
    description: "Toko online lengkap dengan keranjang, pembayaran, dan panel admin.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Jeda — Habit Tracker",
    gradient: "linear-gradient(135deg,#ffe08a,#ffb347)",
    description: "Aplikasi pelacak kebiasaan dengan statistik mingguan dan pengingat harian.",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Pantai API Gateway",
    gradient: "linear-gradient(135deg,#b9e6c9,#4f9d69)",
    description: "Gateway API dengan rate limiting, autentikasi JWT, dan logging terpusat.",
    tech: ["Go", "Redis", "Docker"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Kelas Online LMS",
    gradient: "linear-gradient(135deg,#ffb7a5,#ff7a6b)",
    description: "Platform belajar daring: kursus, kuis, sertifikat otomatis, dan forum diskusi.",
    tech: ["Laravel", "MySQL", "Vue"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Cuaca Pantai",
    gradient: "linear-gradient(135deg,#a8d8ff,#5aa9e6)",
    description: "Aplikasi mobile prakiraan cuaca & tinggi ombak untuk pecinta pantai.",
    tech: ["Flutter", "Firebase"],
    demo: "#",
    repo: "#",
  },
  {
    title: "DataKu Dashboard",
    gradient: "linear-gradient(135deg,#d9c8ff,#8f7ae0)",
    description: "Dashboard analitik interaktif dengan grafik real-time dan ekspor laporan.",
    tech: ["Python", "Django", "PostgreSQL"],
    demo: "#",
    repo: "#",
  },
];

export const education = [
  {
    title: "SMK Nusa Bangsa",
    place: "PPLG (Pengembangan Perangkat Lunak dan Gim)",
  },
];

export const certifications = [
  {
    title: "Lomba Poster bertema Internet of Things (IoT)",
    issuer: "Universitas Ibn Khaldun Bogor (UIKA)",
  },
];

export const achievements = [
  {
    text: "Bogor Innovation Award: membuat game “Absorbed: The Lost Lab” yang diadopsi oleh Dinas Kota Bogor dan diberitakan ",
    source: "Radar Bogor",
    href: "https://radarbogor.jawapos.com/kota-bogor/2609160068/gim-kimia-ciptaan-smk-ak-nusa-bangsa-bogor-bawa-siswa-masuk-ke-laboratorium-yang-hilang",
  },
];

export const testimonials = [
  {
    quote: "Semangat, Zaky!",
    name: "Bu Pitri",
    role: "Wali Kelas",
  },
  {
    quote: "Zaky pasti bisa.",
    name: "Ibu Titik",
  },
  {
    quote: "Zaky harus kuat sekarang.",
    name: "Bu Endah",
  },
];

export const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#skill", label: "Skill" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#proyek", label: "Proyek" },
  { href: "#pendidikan", label: "Pendidikan" },
  { href: "#kontak", label: "Kontak" },
];

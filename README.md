# Portofolio Programmer — Tema Pantai Pagi

Portofolio Next.js (App Router) bertema pantai pagi yang cerah: ombak bergerak otomatis dan bergeser saat di-scroll, matahari, awan, pasir, kerang, bintang laut, dan hiu kartun orisinal.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:3000
npm run build    # build produksi
npm start        # jalankan hasil build
```

## Cara mengganti isi

1. **Semua data** (nama, skill, pengalaman, proyek, pendidikan, kontak) ada di satu file: `data/portfolio.js`.
2. **Foto profil**: taruh fotomu di `public/profile.jpg` (rasio persegi paling bagus). Sebelum ada foto, tampil avatar sementara.
3. **CV**: taruh file di `public/cv.pdf`, lalu isi `cv: "/cv.pdf"` di `data/portfolio.js`. Tombol "Unduh CV" muncul otomatis.
4. **Warna tema**: ubah variabel di bagian atas `app/globals.css` (`--sand`, `--sea`, `--deep`, `--sun`, dst.).
5. **Hiu**: komponen `components/Shark.js`. Aksesori: `sunglasses`, `laptop`, `book`, `coffee`, `hat`, `headphones`.

## Deploy

Paling mudah lewat [Vercel](https://vercel.com): push ke GitHub, lalu import repositori.

## Catatan

Hiu pada web ini adalah karakter orisinal buatan sendiri, bukan karakter berhak cipta.

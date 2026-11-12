"use client";

import { useState } from "react";

// Form sederhana: membuka aplikasi email pengguna (mailto) — tanpa backend.
export default function ContactForm({ email }) {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.nama} (via portofolio)`);
    const body = encodeURIComponent(`${form.pesan}\n\n— ${form.nama}\n${form.email}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className="card contact-form" onSubmit={onSubmit}>
      <label>
        Nama
        <input name="nama" required value={form.nama} onChange={onChange} placeholder="Nama kamu" />
      </label>
      <label>
        Email
        <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="kamu@email.com" />
      </label>
      <label>
        Pesan
        <textarea name="pesan" required rows={5} value={form.pesan} onChange={onChange} placeholder="Ceritakan proyekmu..." />
      </label>
      <button type="submit" className="btn btn-primary">
        Kirim Pesan
      </button>
      {sent && <p className="form-note">Aplikasi email kamu akan terbuka. Terima kasih!</p>}
    </form>
  );
}

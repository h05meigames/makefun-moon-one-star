import { mkdirSync, writeFileSync } from "node:fs";

// The Moon Gets One Star — one-star review of the Moon, max 120 chars.
//
// REVISI v2 (final) — perbaikan genuine atas draf v1:
// - Keluhan spesifik & mengejutkan: Bulan menghilang berhari-hari lalu
//   kembali dengan bentuk berbeda setiap malam (fase Bulan) — bukan
//   klise kawah/keju/terang.
// - Punchline mendarat di akhir: "somehow I'm the crazy one" — plesetan
//   "lunatic" (dari luna/Bulan), hanya masuk akal untuk Bulan.
// - Membaca seperti ulasan asli: rating bintang + keluhan + alasan
//   kenapa Bulan pantas dapat satu bintang.
// - Setiap kata bekerja; tidak ada frasa generik yang bisa ditempel ke
//   produk lain.
//
// REVISI v3 (reviser) — SATU cacat nyata pada v2, diperbaiki:
// - Cacat: punchline terkubur. v2 berakhir "...and somehow I'm the crazy
//   one for noticing." — tawa ("I'm the crazy one", plesetan lunatic)
//   mendarat di tengah kalimat, lalu baris berakhir pada kata datar
//   "noticing" yang hanya menjelaskan; baris menguap, bukan mendarat.
//   "crazy one" juga generik — bisa ditempel ke produk apa pun.
// - Perbaikan: potong ekor "for noticing", akhiri baris tepat pada kata
//   punchline "lunatic" (dari Latin luna = Bulan) — punchline yang hanya
//   masuk akal untuk Bulan, dan kata terakhir baris adalah tawanya.
//   Grievance (menghilang, kembali beda bentuk) tetap utuh sebagai setup.
const review =
  "★☆☆☆☆ Disappears for days, comes back a different shape every night, and somehow I'm the lunatic.";

// Tulis teks entry persis seperti yang dinilai: tanpa newline di akhir,
// supaya jumlah karakter file sama dengan jumlah karakter baris.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");

console.log(review);
console.log(`characters: ${[...review].length}`);

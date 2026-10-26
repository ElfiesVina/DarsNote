# DarsNote starter

Prototipe antarmuka mobile-first untuk DarsNote. Saat ini transkrip yang tampil adalah data demo/manual, **belum merekam audio dan belum terhubung ke AI**.

## Kebutuhan
- Node.js 20.9 atau lebih baru
- npm
- Editor kode, misalnya VS Code

## Jalankan di komputer
1. Ekstrak ZIP ini.
2. Buka terminal di folder `darsnote-starter`.
3. Jalankan:

   ```bash
   npm install
   npm run dev
   ```

4. Buka `http://localhost:3000`.

Untuk membuka dari HP Android yang berada di jaringan Wi-Fi yang sama, jalankan `npm run dev -- --hostname 0.0.0.0`, lalu buka alamat IP lokal komputer dengan port `3000`. Ini hanya untuk pengembangan lokal.

## Tahap berikutnya
1. Buat backend route untuk membuat sesi transkripsi dengan aman.
2. Integrasikan streaming audio dan event transkrip.
3. Tampilkan partial transcript dan final transcript tanpa menggandakan teks.
4. Kirim segmen final ke layanan terjemahan/penjelasan.
5. Tambahkan penyimpanan sesi dan dukungan PWA.

## Keamanan
- Jangan pernah menaruh API key di komponen frontend atau variabel `NEXT_PUBLIC_*`.
- Gunakan HTTPS untuk deployment dan akses mikrofon.
- Minta izin sebelum merekam, tampilkan status rekaman dengan jelas, dan beri kontrol berhenti.
- Periksa kebijakan kampus dan persetujuan dosen sebelum merekam kuliah.

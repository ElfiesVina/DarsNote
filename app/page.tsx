"use client";

import { useState } from "react";

type Segment = { id: number; arabic: string; translation: string; note: string };

const demoSegments: Segment[] = [
  {
    id: 1,
    arabic: "اليوم سنتحدث عن مفهوم الاقتصاد الإسلامي وأهم المبادئ التي يقوم عليها.",
    translation: "Hari ini kita akan membahas konsep ekonomi Islam dan prinsip-prinsip utama yang menjadi dasarnya.",
    note: "مفهوم (mafhum) berarti konsep/pengertian. يقوم عليها berarti 'yang menjadi dasar/fondasinya'.",
  },
  {
    id: 2,
    arabic: "لازم نفهم الفرق بين الربح والفائدة في هذا السياق.",
    translation: "Kita perlu memahami perbedaan antara keuntungan dan bunga dalam konteks ini.",
    note: "لازم adalah ungkapan umum yang berarti 'perlu/harus'. الربح = keuntungan; الفائدة = bunga/manfaat, bergantung konteks.",
  },
];

export default function Home() {
  const [recording, setRecording] = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showNotes, setShowNotes] = useState(true);
  const [segments, setSegments] = useState(demoSegments);
  const [draft, setDraft] = useState("");

  function addDemoSegment() {
    const value = draft.trim();
    if (!value) return;
    setSegments((current) => [
      ...current,
      {
        id: Date.now(),
        arabic: value,
        translation: "Terjemahan akan dihasilkan oleh layanan AI setelah integrasi backend.",
        note: "Penjelasan istilah akan muncul setelah integrasi AI. Untuk sekarang, ini adalah prototipe tampilan.",
      },
    ]);
    setDraft("");
  }

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="DarsNote beranda">
          <span className="brand-mark">د</span>
          <span>Dars<span className="brand-accent">Note</span></span>
        </a>
        <span className="pill"><span className="status-dot" /> PROTOTIPE</span>
      </header>

      <section className="intro">
        <p className="eyebrow">ASISTEN KULIAH BILINGUAL</p>
        <h1>Pahami kuliah.<br /><span>Satu kalimat demi satu.</span></h1>
        <p className="intro-copy">Transkrip Arab, terjemahan Indonesia, dan penjelasan istilah dalam satu tempat.</p>
      </section>

      <section className="session-card">
        <div className="session-head">
          <div>
            <p className="eyebrow">SESI BELAJAR</p>
            <h2>Catatan kuliah baru</h2>
          </div>
          <span className="live-badge"><span className={recording ? "pulse-dot active" : "pulse-dot"} />{recording ? "SIMULASI AKTIF" : "BELUM MEREKAM"}</span>
        </div>
        <label className="field-label" htmlFor="course">Nama mata kuliah</label>
        <input id="course" className="text-input" placeholder="Contoh: الاقتصاد الإسلامي" />
        <div className="record-row">
          <button className={recording ? "record-button recording" : "record-button"} onClick={() => setRecording(!recording)}>
            <span className="mic-icon">{recording ? "■" : "🎙"}</span>
            {recording ? "Hentikan simulasi" : "Mulai sesi"}
          </button>
          <p className="record-hint">{recording ? "Ini hanya status simulasi — audio belum direkam." : "Transkripsi mikrofon akan diaktifkan pada tahap berikutnya."}</p>
        </div>
        <div className="settings-row">
          <label className="toggle-label">
            <input type="checkbox" checked={showTranslation} onChange={(e) => setShowTranslation(e.target.checked)} />
            <span>Terjemahan Indonesia</span>
          </label>
          <label className="toggle-label">
            <input type="checkbox" checked={showNotes} onChange={(e) => setShowNotes(e.target.checked)} />
            <span>Istilah sulit</span>
          </label>
        </div>
      </section>

      <section className="transcript-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TRANSKRIP LANGSUNG</p>
            <h2>Materi perkuliahan</h2>
          </div>
          <span className="segment-count">{segments.length} segmen demo</span>
        </div>

        <div className="notice">
          <span className="notice-icon">ⓘ</span>
          <p>Contoh di bawah adalah teks demo, bukan hasil rekaman. Integrasi speech-to-text akan kita bangun setelah fondasi tampilan siap.</p>
        </div>

        <div className="segments">
          {segments.map((segment, index) => (
            <article className="segment" key={segment.id}>
              <div className="segment-meta"><span>KALIMAT {index + 1}</span><span className="language-tag">AR → ID</span></div>
              <p className="arabic-text" lang="ar" dir="rtl">{segment.arabic}</p>
              {showTranslation && <div className="translation"><span className="small-label">TERJEMAHAN</span><p>{segment.translation}</p></div>}
              {showNotes && <div className="note-box"><span className="bulb">✦</span><div><span className="small-label">PAHAMI ISTILAH</span><p>{segment.note}</p></div></div>}
            </article>
          ))}
        </div>

        <div className="demo-input">
          <label htmlFor="demoText" className="field-label">Coba tambahkan teks Arab secara manual</label>
          <textarea id="demoText" dir="rtl" lang="ar" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="اكتب جملة عربية هنا..." rows={2} />
          <button className="secondary-button" onClick={addDemoSegment} disabled={!draft.trim()}>Tambah contoh kalimat</button>
        </div>
      </section>

      <footer>
        <span className="footer-mark">د</span>
        <p>DarsNote <span>·</span> Dibangun untuk membantu memahami, bukan sekadar mencatat.</p>
      </footer>
    </main>
  );
}

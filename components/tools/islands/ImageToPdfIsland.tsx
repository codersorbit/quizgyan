"use client";

import { useEffect, useRef, useState } from "react";
import { useLang, LangToggle, tri } from "@/components/tools/islands/_shared";
import {
  PAGE_PT,
  MARGIN_PT,
  pageDimensions,
  contentRect,
  fitRect,
  fillCrop,
  move,
  type PageSize,
  type Orientation,
} from "@/lib/tools/logic/pdfLayout";

const CAP = 1600; // max long-side px for embedded rasters (keeps PDF size sane)

interface Item {
  id: string;
  file: File;
  url: string;
}

let counter = 0;

export default function ImageToPdfIsland() {
  const [lang, setLang] = useLang();
  const [items, setItems] = useState<Item[]>([]);
  const [size, setSize] = useState<PageSize>("a4");
  const [orientation, setOrientation] = useState<Orientation>("auto");
  const [mode, setMode] = useState<"fit" | "fill">("fit");
  const [marginKey, setMarginKey] = useState("small");
  const [quality, setQuality] = useState(0.8);
  const [docName, setDocName] = useState("submission");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [msg, setMsg] = useState<string | null>(null);
  const dragIndex = useRef<number | null>(null);

  useEffect(() => () => { items.forEach((it) => URL.revokeObjectURL(it.url)); }, [items]);

  function addFiles(files: FileList | File[]) {
    const incoming = Array.from(files);
    const images = incoming.filter((f) => f.type.startsWith("image/"));
    if (images.length < incoming.length) {
      setMsg(tri(lang, "Some files were skipped — only images can be added.", "कुछ फ़ाइलें छोड़ दी गईं — केवल छवियाँ जोड़ी जा सकती हैं।", "কিছু ফাইল বাদ গেছে — শুধু ছবি যোগ করা যায়।"));
    } else {
      setMsg(null);
    }
    const next = images.map((f) => ({ id: `i${++counter}`, file: f, url: URL.createObjectURL(f) }));
    setItems((prev) => [...prev, ...next]);
  }

  function removeItem(id: string) {
    setItems((prev) => {
      const it = prev.find((x) => x.id === id);
      if (it) URL.revokeObjectURL(it.url);
      return prev.filter((x) => x.id !== id);
    });
  }
  function reorder(from: number, to: number) {
    setItems((prev) => move(prev, from, to));
  }

  async function generate() {
    if (!items.length || busy) return;
    setBusy(true);
    setProgress(0);
    setMsg(null);
    try {
      const { jsPDF } = await import("jspdf");
      const margin = MARGIN_PT[marginKey] ?? MARGIN_PT.small;
      let doc: InstanceType<typeof jsPDF> | null = null;

      for (let i = 0; i < items.length; i += 1) {
        const bmp = await createImageBitmap(items[i].file, { imageOrientation: "from-image" });
        const page = pageDimensions(size, orientation, bmp.width, bmp.height);
        if (!doc) doc = new jsPDF({ unit: "pt", format: [page.w, page.h] });
        else doc.addPage([page.w, page.h]);
        const content = contentRect(page.w, page.h, margin);

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;
        let place = content;

        if (mode === "fill") {
          const crop = fillCrop(bmp.width, bmp.height, content.w, content.h);
          const s = Math.max(crop.sw, crop.sh) > CAP ? CAP / Math.max(crop.sw, crop.sh) : 1;
          canvas.width = Math.max(1, Math.round(crop.sw * s));
          canvas.height = Math.max(1, Math.round(crop.sh * s));
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(bmp, crop.sx, crop.sy, crop.sw, crop.sh, 0, 0, canvas.width, canvas.height);
        } else {
          const s = Math.max(bmp.width, bmp.height) > CAP ? CAP / Math.max(bmp.width, bmp.height) : 1;
          canvas.width = Math.max(1, Math.round(bmp.width * s));
          canvas.height = Math.max(1, Math.round(bmp.height * s));
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(bmp, 0, 0, canvas.width, canvas.height);
          place = fitRect(content, canvas.width, canvas.height);
        }

        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        doc.addImage(dataUrl, "JPEG", place.x, place.y, place.w, place.h);
        bmp.close();
        setProgress(Math.round(((i + 1) / items.length) * 100));
        await new Promise((r) => setTimeout(r, 0)); // yield so the bar repaints
      }

      doc!.save(`${docName.trim() || "submission"}.pdf`);
    } catch {
      setMsg(tri(lang, "Could not build the PDF. Try fewer or smaller images.", "PDF नहीं बन सका। कम या छोटी छवियाँ आज़माएँ।", "PDF তৈরি করা গেল না। কম বা ছোট ছবি চেষ্টা করো।"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-ink">{tri(lang, "Combine images into one PDF", "छवियों को एक PDF में मिलाएँ", "ছবিগুলো এক PDF-এ মেলাও")}</span>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <p className="rounded-xl bg-green/10 px-3 py-2 text-sm font-semibold text-green">
        🔒 {tri(lang, "Your files never leave your device — the PDF is built in your browser.", "आपकी फ़ाइलें आपके डिवाइस से बाहर नहीं जातीं — PDF आपके ब्राउज़र में बनती है।", "তোমার ফাইল ডিভাইস ছেড়ে যায় না — PDF তোমার ব্রাউজারেই তৈরি হয়।")}
      </p>

      {/* Upload */}
      <label
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files); }}
        className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-line bg-card px-4 py-6 text-center transition hover:border-cobalt"
      >
        <span className="text-2xl" aria-hidden>📄</span>
        <span className="text-sm font-semibold text-ink">{tri(lang, "Add pages — tap to choose, or drop images", "पन्ने जोड़ें — चुनने के लिए टैप करें, या छवियाँ छोड़ें", "পাতা যোগ করো — বেছে নিতে ট্যাপ করো, বা ছবি ছাড়ো")}</span>
        <span className="text-xs text-muted">JPG · PNG · WEBP</span>
        <input type="file" accept="image/*" multiple className="sr-only" onChange={(e) => { if (e.target.files?.length) addFiles(e.target.files); e.currentTarget.value = ""; }} />
      </label>

      {msg && <p aria-live="polite" className="rounded-xl bg-sun/15 px-3 py-2 text-sm text-ink">{msg}</p>}

      {items.length > 0 && (
        <>
          {/* Page list */}
          <section>
            <h3 className="mb-2 text-sm font-semibold text-ink">{tri(lang, "Pages", "पन्ने", "পাতা")} ({items.length}) — <span className="font-normal text-muted">{tri(lang, "drag or use the arrows to reorder", "क्रम बदलने के लिए खींचें या तीर इस्तेमाल करें", "ক্রম বদলাতে টানো বা তীর ব্যবহার করো")}</span></h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {items.map((it, i) => (
                <li
                  key={it.id}
                  draggable
                  onDragStart={() => { dragIndex.current = i; }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => { if (dragIndex.current !== null) reorder(dragIndex.current, i); dragIndex.current = null; }}
                  className="relative rounded-xl border border-line bg-card p-2"
                >
                  <span className="absolute left-2 top-2 rounded-full bg-ink/80 px-2 py-0.5 text-xs font-bold text-white">{i + 1}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.url} alt={`${tri(lang, "Page", "पन्ना", "পাতা")} ${i + 1}`} className="h-28 w-full rounded-lg object-cover" />
                  <div className="mt-1 flex items-center justify-between">
                    <div className="flex gap-1">
                      <button type="button" aria-label={tri(lang, "Move up", "ऊपर ले जाएँ", "উপরে নাও")} disabled={i === 0} onClick={() => reorder(i, i - 1)} className="grid h-7 w-7 place-items-center rounded-full border border-line text-muted disabled:opacity-30 hover:border-cobalt hover:text-cobalt">↑</button>
                      <button type="button" aria-label={tri(lang, "Move down", "नीचे ले जाएँ", "নিচে নাও")} disabled={i === items.length - 1} onClick={() => reorder(i, i + 1)} className="grid h-7 w-7 place-items-center rounded-full border border-line text-muted disabled:opacity-30 hover:border-cobalt hover:text-cobalt">↓</button>
                    </div>
                    <button type="button" aria-label={tri(lang, "Remove", "हटाएँ", "সরাও")} onClick={() => removeItem(it.id)} className="grid h-7 w-7 place-items-center rounded-full border border-line text-coral hover:border-coral">✕</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Options */}
          <section className="card border p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">{tri(lang, "Page size", "पृष्ठ आकार", "পৃষ্ঠার আকার")}</span>
                <select value={size} onChange={(e) => setSize(e.target.value as PageSize)} className="w-full rounded-xl border border-line bg-white px-2 py-2 text-ink">
                  <option value="a4">A4</option>
                  <option value="letter">Letter</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">{tri(lang, "Orientation", "दिशा", "দিক")}</span>
                <select value={orientation} onChange={(e) => setOrientation(e.target.value as Orientation)} className="w-full rounded-xl border border-line bg-white px-2 py-2 text-ink">
                  <option value="auto">{tri(lang, "Auto", "स्वतः", "অটো")}</option>
                  <option value="portrait">{tri(lang, "Portrait", "पोर्ट्रेट", "পোর্ট্রেট")}</option>
                  <option value="landscape">{tri(lang, "Landscape", "लैंडस्केप", "ল্যান্ডস্কেপ")}</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">{tri(lang, "Margins", "हाशिये", "মার্জিন")}</span>
                <select value={marginKey} onChange={(e) => setMarginKey(e.target.value)} className="w-full rounded-xl border border-line bg-white px-2 py-2 text-ink">
                  <option value="none">{tri(lang, "None", "कोई नहीं", "নেই")}</option>
                  <option value="small">{tri(lang, "Small", "छोटा", "ছোট")}</option>
                  <option value="medium">{tri(lang, "Medium", "मध्यम", "মাঝারি")}</option>
                  <option value="large">{tri(lang, "Large", "बड़ा", "বড়")}</option>
                </select>
              </label>
              <div className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">{tri(lang, "Fit", "फ़िट", "ফিট")}</span>
                <div className="inline-flex w-full rounded-xl border border-line bg-cream p-0.5 text-sm">
                  <button type="button" aria-pressed={mode === "fit"} onClick={() => setMode("fit")} className={`flex-1 rounded-lg py-1.5 font-semibold transition ${mode === "fit" ? "bg-cobalt text-white" : "text-muted"}`}>{tri(lang, "Fit", "फ़िट", "ফিট")}</button>
                  <button type="button" aria-pressed={mode === "fill"} onClick={() => setMode("fill")} className={`flex-1 rounded-lg py-1.5 font-semibold transition ${mode === "fill" ? "bg-cobalt text-white" : "text-muted"}`}>{tri(lang, "Fill", "भरें", "ভরাট")}</button>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">{tri(lang, "File name", "फ़ाइल नाम", "ফাইলের নাম")}</span>
                <input value={docName} onChange={(e) => setDocName(e.target.value)} className="w-full rounded-xl border border-line bg-white px-3 py-2 text-ink" />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-ink">{tri(lang, "Image quality", "छवि गुणवत्ता", "ছবির মান")} · {Math.round(quality * 100)}%</span>
                <input type="range" min={0.4} max={0.95} step={0.05} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-full accent-cobalt" aria-label={tri(lang, "Image quality", "छवि गुणवत्ता", "ছবির মান")} />
              </label>
            </div>
          </section>

          {busy && (
            <div aria-live="polite">
              <div className="h-2 w-full overflow-hidden rounded-full bg-line">
                <div className="h-full bg-cobalt transition-all" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-1 text-center text-xs text-muted">{tri(lang, "Building PDF", "PDF बन रही है", "PDF তৈরি হচ্ছে")}… {progress}%</p>
            </div>
          )}

          <button type="button" onClick={() => void generate()} disabled={busy} className="btn-candy cobalt w-full disabled:opacity-50">
            {busy ? tri(lang, "Working…", "हो रहा है…", "চলছে…") : `⬇ ${tri(lang, "Make PDF", "PDF बनाएँ", "PDF বানাও")} (${items.length})`}
          </button>
        </>
      )}
    </div>
  );
}

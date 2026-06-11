"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang, LangToggle, tri } from "@/components/tools/islands/_shared";
import {
  PRESETS,
  resolvePx,
  containBox,
  searchQuality,
  type ImgFormat,
  type Dimensions,
} from "@/lib/tools/logic/imageResize";

const VIEW = 280; // display long-side of the crop viewport (CSS px)
const WORK_MAX = 3000; // memory guard: downscale working copy beyond this long side

type Mode = "preset" | "custom";
type Fit = "fill" | "fit";
type Unit = "px" | "cm";

interface Profile {
  width: number;
  height: number;
  minKB: number;
  maxKB: number;
  format: ImgFormat;
}

function presetLabel(id: string, lang: "en" | "hi" | "bn"): string {
  switch (id) {
    case "passport": return tri(lang, "Passport-style photo (3.5 × 4.5 cm)", "पासपोर्ट-शैली फ़ोटो (3.5 × 4.5 cm)", "পাসপোর্ট-ধাঁচের ছবি (3.5 × 4.5 cm)");
    case "form-photo": return tri(lang, "Form photo (200 × 230 px)", "फ़ॉर्म फ़ोटो (200 × 230 px)", "ফর্ম ছবি (200 × 230 px)");
    case "signature": return tri(lang, "Signature (140 × 60 px)", "हस्ताक्षर (140 × 60 px)", "স্বাক্ষর (140 × 60 px)");
    default: return id;
  }
}

function encodeBlob(canvas: HTMLCanvasElement, format: ImgFormat, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("encode failed"))), `image/${format}`, quality);
  });
}

export default function PhotoSignatureResizerIsland({
  initialMode,
  initialPreset,
  initialMinKB,
  initialMaxKB,
  initialKeepSize,
}: {
  initialMode?: Mode;
  initialPreset?: string;
  initialMinKB?: number;
  initialMaxKB?: number;
  initialKeepSize?: boolean;
} = {}) {
  const [lang, setLang] = useLang();

  const [bitmap, setBitmap] = useState<ImageBitmap | null>(null);
  const [srcDims, setSrcDims] = useState<Dimensions>({ width: 0, height: 0 });
  const [fileName, setFileName] = useState("image");
  const [msg, setMsg] = useState<string | null>(null);

  const [mode, setMode] = useState<Mode>(initialMode ?? "preset");
  const [presetId, setPresetId] = useState(initialPreset ?? PRESETS[0].id);
  const [unit, setUnit] = useState<Unit>("px");
  const [cw, setCw] = useState("200");
  const [ch, setCh] = useState("230");
  const [dpi, setDpi] = useState("300");
  const [minKB, setMinKB] = useState(initialMinKB != null ? String(initialMinKB) : "20");
  const [maxKB, setMaxKB] = useState(initialMaxKB != null ? String(initialMaxKB) : "50");
  const [format, setFormat] = useState<ImgFormat>("jpeg");
  const [keepSize, setKeepSize] = useState(initialKeepSize ?? false);

  const [fit, setFit] = useState<Fit>("fill");
  const [flatten, setFlatten] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [processing, setProcessing] = useState(false);
  const [out, setOut] = useState<{ url: string; bytes: number; width: number; height: number; note: string } | null>(null);

  const previewRef = useRef<HTMLCanvasElement | null>(null);
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  // When "keep original size" is on, the target is simply the source dimensions —
  // the tool then only compresses to the KB band (no resize, no crop).
  const useSrc = mode === "custom" && keepSize && !!bitmap;
  const effFit: Fit = keepSize ? "fit" : fit;

  const profile: Profile = (() => {
    if (mode === "preset") {
      const p = PRESETS.find((x) => x.id === presetId) ?? PRESETS[0];
      const d = resolvePx(p);
      return { width: d.width, height: d.height, minKB: p.minKB, maxKB: p.maxKB, format: p.format };
    }
    if (useSrc) {
      return { width: srcDims.width, height: srcDims.height, minKB: Math.max(0, Number(minKB) || 0), maxKB: Math.max(1, Number(maxKB) || 1), format };
    }
    const d = resolvePx(unit === "cm" ? { cm: { width: Number(cw), height: Number(ch) }, dpi: Number(dpi) } : { px: { width: Number(cw), height: Number(ch) } });
    return { width: d.width, height: d.height, minKB: Math.max(0, Number(minKB) || 0), maxKB: Math.max(1, Number(maxKB) || 1), format };
  })();

  const targetAspect = profile.width / profile.height;
  const view = targetAspect >= 1 ? { w: VIEW, h: Math.round(VIEW / targetAspect) } : { w: Math.round(VIEW * targetAspect), h: VIEW };

  const coverScale = bitmap ? Math.max(view.w / srcDims.width, view.h / srcDims.height) : 1;

  const clampOffset = useCallback(
    (o: { x: number; y: number }, z: number) => {
      if (!bitmap) return o;
      const scale = coverScale * z;
      const iw = srcDims.width * scale;
      const ih = srcDims.height * scale;
      return {
        x: Math.min(0, Math.max(view.w - iw, o.x)),
        y: Math.min(0, Math.max(view.h - ih, o.y)),
      };
    },
    [bitmap, coverScale, srcDims, view.w, view.h],
  );

  /* ---------- load file (EXIF-corrected, memory-guarded) ---------- */
  const loadFile = useCallback(async (file: File) => {
    setMsg(null);
    setOut(null);
    if (!file.type.startsWith("image/")) {
      setMsg(tri(lang, "That's not an image file. Please choose a JPG, PNG or WEBP.", "यह छवि फ़ाइल नहीं है। कृपया JPG, PNG या WEBP चुनें।", "এটি ছবি ফাইল নয়। অনুগ্রহ করে JPG, PNG বা WEBP বেছে নাও।"));
      return;
    }
    setFileName(file.name.replace(/\.[^.]+$/, "") || "image");
    try {
      let bmp = await createImageBitmap(file, { imageOrientation: "from-image" });
      // memory guard: downscale a very large working copy
      const long = Math.max(bmp.width, bmp.height);
      if (long > WORK_MAX) {
        const s = WORK_MAX / long;
        const w = Math.round(bmp.width * s);
        const h = Math.round(bmp.height * s);
        const tmp = document.createElement("canvas");
        tmp.width = w;
        tmp.height = h;
        tmp.getContext("2d")!.drawImage(bmp, 0, 0, w, h);
        bmp.close();
        bmp = await createImageBitmap(tmp);
      }
      setBitmap((prev) => {
        prev?.close();
        return bmp;
      });
      setSrcDims({ width: bmp.width, height: bmp.height });
      setZoom(1);
      setOffset({ x: 0, y: 0 });
    } catch {
      setMsg(tri(lang, "Could not read that image. Try a different file.", "यह छवि नहीं पढ़ी जा सकी। कोई और फ़ाइल आज़माएँ।", "ছবিটি পড়া গেল না। অন্য ফাইল চেষ্টা করো।"));
    }
  }, [lang]);

  // re-centre offset whenever the source/target/zoom changes
  useEffect(() => {
    setOffset((o) => clampOffset(o, zoom));
  }, [clampOffset, zoom, presetId, mode, cw, ch, unit, dpi]);

  /* ---------- live preview ---------- */
  useEffect(() => {
    const canvas = previewRef.current;
    if (!canvas || !bitmap) return;
    canvas.width = view.w;
    canvas.height = view.h;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, view.w, view.h);
    if (effFit === "fit") {
      const { dw, dh, dx, dy } = containBox(srcDims.width, srcDims.height, view.w, view.h);
      ctx.drawImage(bitmap, dx, dy, dw, dh);
    } else {
      const scale = coverScale * zoom;
      ctx.drawImage(bitmap, offset.x, offset.y, srcDims.width * scale, srcDims.height * scale);
    }
    ctx.strokeStyle = "rgba(15,42,92,0.35)";
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, view.w - 1, view.h - 1);
  }, [bitmap, view.w, view.h, effFit, zoom, offset, coverScale, srcDims]);

  /* ---------- crop interactions (pointer + keyboard) ---------- */
  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (effFit !== "fill" || !bitmap) return;
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  }
  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drag.current) return;
    const nx = drag.current.ox + (e.clientX - drag.current.x);
    const ny = drag.current.oy + (e.clientY - drag.current.y);
    setOffset(clampOffset({ x: nx, y: ny }, zoom));
  }
  function onPointerUp() {
    drag.current = null;
  }
  function onKeyDown(e: React.KeyboardEvent<HTMLCanvasElement>) {
    if (effFit !== "fill") return;
    const step = 8;
    if (e.key === "ArrowLeft") setOffset((o) => clampOffset({ x: o.x + step, y: o.y }, zoom));
    else if (e.key === "ArrowRight") setOffset((o) => clampOffset({ x: o.x - step, y: o.y }, zoom));
    else if (e.key === "ArrowUp") setOffset((o) => clampOffset({ x: o.x, y: o.y + step }, zoom));
    else if (e.key === "ArrowDown") setOffset((o) => clampOffset({ x: o.x, y: o.y - step }, zoom));
    else if (e.key === "+" || e.key === "=") changeZoom(zoom + 0.1);
    else if (e.key === "-") changeZoom(zoom - 0.1);
    else return;
    e.preventDefault();
  }
  function changeZoom(z: number) {
    const nz = Math.min(4, Math.max(1, Math.round(z * 100) / 100));
    setZoom(nz);
    setOffset((o) => clampOffset(o, nz));
  }

  /* ---------- process to target + KB band ---------- */
  const upscaling = bitmap ? srcDims.width < profile.width || srcDims.height < profile.height : false;

  async function process() {
    if (!bitmap) return;
    if (!(profile.width > 0 && profile.height > 0)) {
      setMsg(tri(lang, "Please enter a valid width and height.", "कृपया मान्य चौड़ाई और ऊँचाई दर्ज करें।", "অনুগ্রহ করে সঠিক প্রস্থ ও উচ্চতা দাও।"));
      return;
    }
    setProcessing(true);
    setMsg(null);
    try {
      const minBytes = profile.minKB * 1024;
      const maxBytes = profile.maxKB * 1024;
      let w = profile.width;
      let h = profile.height;
      let blob: Blob | null = null;
      let note = "ok";

      for (let attempt = 0; attempt < 4; attempt += 1) {
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d")!;
        if (flatten || profile.format === "jpeg") {
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, w, h);
        }
        if (effFit === "fit") {
          const { dw, dh, dx, dy } = containBox(srcDims.width, srcDims.height, w, h);
          ctx.drawImage(bitmap, dx, dy, dw, dh);
        } else {
          const scale = coverScale * zoom;
          const sx = -offset.x / scale;
          const sy = -offset.y / scale;
          const sw = view.w / scale;
          const sh = view.h / scale;
          ctx.drawImage(bitmap, sx, sy, sw, sh, 0, 0, w, h);
        }

        if (profile.format === "png") {
          blob = await encodeBlob(canvas, "png");
          note = blob.size > maxBytes ? "above-max" : blob.size < minBytes ? "below-min" : "ok";
          break;
        }
        const res = await searchQuality((q) => encodeBlob(canvas, profile.format, q).then((b) => b.size), minBytes, maxBytes);
        if (res.note === "above-max" && attempt < 3) {
          w = Math.max(1, Math.round(w * 0.82));
          h = Math.max(1, Math.round(h * 0.82));
          continue;
        }
        blob = await encodeBlob(canvas, profile.format, res.quality);
        note = res.note;
        break;
      }

      if (!blob) throw new Error("no blob");
      setOut((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return { url: URL.createObjectURL(blob!), bytes: blob!.size, width: w, height: h, note };
      });
      if (note === "above-max") {
        setMsg(tri(lang, `Could not get under ${profile.maxKB} KB at this size. Smallest reached: ${Math.round(blob.size / 1024)} KB at ${w}×${h}. Try a smaller size or a higher KB limit.`, `इस आकार में ${profile.maxKB} KB से कम नहीं ला सके। न्यूनतम: ${Math.round(blob.size / 1024)} KB (${w}×${h})। छोटा आकार या अधिक KB सीमा आज़माएँ।`, `এই আকারে ${profile.maxKB} KB-র নিচে আনা গেল না। সর্বনিম্ন: ${Math.round(blob.size / 1024)} KB (${w}×${h})। ছোট আকার বা বেশি KB সীমা চেষ্টা করো।`));
      } else if (note === "below-min") {
        setMsg(tri(lang, `The image is simple, so it compresses below ${profile.minKB} KB (${Math.round(blob.size / 1024)} KB). That is usually fine — most forms only set an upper limit.`, `छवि सरल है, इसलिए यह ${profile.minKB} KB से नीचे (${Math.round(blob.size / 1024)} KB) सिकुड़ती है। आम तौर पर ठीक है।`, `ছবিটি সরল, তাই ${profile.minKB} KB-র নিচে (${Math.round(blob.size / 1024)} KB) সংকুচিত হয়। সাধারণত এটি ঠিক আছে।`));
      }
    } catch {
      setMsg(tri(lang, "Something went wrong while processing. Try again.", "प्रोसेसिंग में कुछ गड़बड़ हुई। फिर कोशिश करें।", "প্রক্রিয়াকরণে সমস্যা হয়েছে। আবার চেষ্টা করো।"));
    } finally {
      setProcessing(false);
    }
  }

  const ext = profile.format === "jpeg" ? "jpg" : profile.format;

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-ink">{tri(lang, "Resize a photo or signature", "फ़ोटो या हस्ताक्षर का आकार बदलें", "ছবি বা স্বাক্ষরের আকার বদলাও")}</span>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      <p className="rounded-xl bg-green/10 px-3 py-2 text-sm font-semibold text-green">
        🔒 {tri(lang, "Your file never leaves your device — everything happens in your browser.", "आपकी फ़ाइल आपके डिवाइस से बाहर नहीं जाती — सब कुछ आपके ब्राउज़र में होता है।", "তোমার ফাইল ডিভাইস ছেড়ে কোথাও যায় না — সবকিছু তোমার ব্রাউজারেই হয়।")}
      </p>

      {/* Upload */}
      <label
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) void loadFile(f); }}
        className="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-line bg-card px-4 py-6 text-center transition hover:border-cobalt"
      >
        <span className="text-2xl" aria-hidden>📷</span>
        <span className="text-sm font-semibold text-ink">{tri(lang, "Tap to choose, or drop an image here", "चुनने के लिए टैप करें, या यहाँ छवि छोड़ें", "বেছে নিতে ট্যাপ করো, বা এখানে ছবি ছাড়ো")}</span>
        <span className="text-xs text-muted">JPG · PNG · WEBP</span>
        <input type="file" accept="image/*" className="sr-only" onChange={(e) => { const f = e.target.files?.[0]; if (f) void loadFile(f); }} />
      </label>

      {msg && <p aria-live="polite" className="rounded-xl bg-sun/15 px-3 py-2 text-sm text-ink">{msg}</p>}

      {bitmap && (
        <>
          {/* Profile */}
          <section className="card border p-4">
            <div className="mb-3 inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Target type", "लक्ष्य प्रकार", "লক্ষ্য ধরন")}>
              <button type="button" aria-pressed={mode === "preset"} onClick={() => setMode("preset")} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${mode === "preset" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Common presets", "सामान्य प्रीसेट", "সাধারণ প্রিসেট")}</button>
              <button type="button" aria-pressed={mode === "custom"} onClick={() => setMode("custom")} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${mode === "custom" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Custom (from your form)", "कस्टम (आपके फ़ॉर्म से)", "কাস্টম (তোমার ফর্ম থেকে)")}</button>
            </div>

            {mode === "preset" ? (
              <div className="space-y-2">
                <label htmlFor="rs-preset" className="block text-sm font-semibold text-ink">{tri(lang, "Choose a profile", "एक प्रोफ़ाइल चुनें", "একটি প্রোফাইল বেছে নাও")}</label>
                <select id="rs-preset" value={presetId} onChange={(e) => setPresetId(e.target.value)} className="w-full rounded-xl border border-line bg-white px-3 py-2 text-ink">
                  {PRESETS.map((p) => (<option key={p.id} value={p.id}>{presetLabel(p.id, lang)} · {p.minKB}–{p.maxKB} KB</option>))}
                </select>
                <p className="text-xs text-muted">⚠️ {tri(lang, "These are typical values — always confirm the exact size and KB limit against your own form's instructions.", "ये सामान्य मान हैं — सटीक आकार और KB सीमा अपने फ़ॉर्म के निर्देशों से अवश्य मिलाएँ।", "এগুলো সাধারণ মান — সঠিক আকার ও KB সীমা নিজের ফর্মের নির্দেশের সঙ্গে মিলিয়ে নাও।")}</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <label className="col-span-2 flex items-center gap-2 rounded-xl bg-cobalt-soft/50 px-3 py-2 text-sm sm:col-span-3">
                  <input type="checkbox" checked={keepSize} onChange={(e) => setKeepSize(e.target.checked)} className="h-4 w-4 accent-cobalt" />
                  <span className="font-semibold text-ink">{tri(lang, "Keep original size (just compress to the KB limit)", "मूल आकार रखें (केवल KB सीमा तक कंप्रेस करें)", "মূল আকার রাখো (শুধু KB সীমায় কম্প্রেস করো)")}</span>
                </label>
                {!keepSize && (
                  <>
                    <label className="col-span-2 flex items-center gap-2 text-sm sm:col-span-3">
                      <span className="font-semibold text-ink">{tri(lang, "Units", "इकाई", "একক")}:</span>
                      <button type="button" aria-pressed={unit === "px"} onClick={() => setUnit("px")} className={`rounded-full px-3 py-1 text-sm font-semibold ${unit === "px" ? "bg-cobalt text-white" : "border border-line text-muted"}`}>px</button>
                      <button type="button" aria-pressed={unit === "cm"} onClick={() => setUnit("cm")} className={`rounded-full px-3 py-1 text-sm font-semibold ${unit === "cm" ? "bg-cobalt text-white" : "border border-line text-muted"}`}>cm</button>
                    </label>
                    <Field label={tri(lang, "Width", "चौड़ाई", "প্রস্থ")} value={cw} onChange={setCw} />
                    <Field label={tri(lang, "Height", "ऊँचाई", "উচ্চতা")} value={ch} onChange={setCh} />
                    {unit === "cm" && <Field label={tri(lang, "DPI", "DPI", "DPI")} value={dpi} onChange={setDpi} />}
                  </>
                )}
                <Field label={tri(lang, "Min KB", "न्यूनतम KB", "সর্বনিম্ন KB")} value={minKB} onChange={setMinKB} />
                <Field label={tri(lang, "Max KB", "अधिकतम KB", "সর্বোচ্চ KB")} value={maxKB} onChange={setMaxKB} />
                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-ink">{tri(lang, "Format", "फ़ॉर्मेट", "ফরম্যাট")}</span>
                  <select value={format} onChange={(e) => setFormat(e.target.value as ImgFormat)} className="w-full rounded-xl border border-line bg-white px-2 py-2 text-ink">
                    <option value="jpeg">JPG</option>
                    <option value="png">PNG</option>
                    <option value="webp">WEBP</option>
                  </select>
                </label>
              </div>
            )}
            <p className="mt-2 text-sm text-muted">{tri(lang, "Output", "आउटपुट", "আউটপুট")}: <strong>{profile.width > 0 ? `${profile.width} × ${profile.height} px` : tri(lang, "original size", "मूल आकार", "মূল আকার")}</strong> · {profile.format.toUpperCase()} · {profile.minKB}–{profile.maxKB} KB</p>
          </section>

          {/* Crop */}
          <section className="card border p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              {keepSize ? (
                <p className="text-sm text-muted">{tri(lang, "Original dimensions kept — the image is not cropped.", "मूल आयाम रखे गए — छवि नहीं काटी जाती।", "মূল মাপ রাখা হয়েছে — ছবি কাটা হয় না।")}</p>
              ) : (
                <div className="inline-flex rounded-full border border-line bg-cream p-0.5" role="group" aria-label={tri(lang, "Fit mode", "फ़िट मोड", "ফিট মোড")}>
                  <button type="button" aria-pressed={fit === "fill"} onClick={() => setFit("fill")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${fit === "fill" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Fill (crop)", "भरें (काटें)", "ভরাট (কাটো)")}</button>
                  <button type="button" aria-pressed={fit === "fit"} onClick={() => setFit("fit")} className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${fit === "fit" ? "bg-cobalt text-white" : "text-muted hover:text-cobalt"}`}>{tri(lang, "Fit (whole image)", "फ़िट (पूरी छवि)", "ফিট (পুরো ছবি)")}</button>
                </div>
              )}
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="checkbox" checked={flatten} onChange={(e) => setFlatten(e.target.checked)} className="h-4 w-4 accent-cobalt" />
                {tri(lang, "White background", "सफ़ेद पृष्ठभूमि", "সাদা পটভূমি")}
              </label>
            </div>

            <div className="mt-3 flex flex-col items-center gap-3">
              <canvas
                ref={previewRef}
                tabIndex={0}
                role="application"
                aria-label={tri(lang, "Crop preview — drag, or use arrow keys to move and + / − to zoom", "क्रॉप पूर्वावलोकन — खींचें, या तीर कुंजियों से हिलाएँ और + / − से ज़ूम करें", "ক্রপ প্রিভিউ — টেনে সরাও, বা তীর কী দিয়ে সরাও আর + / − দিয়ে জুম করো")}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onKeyDown={onKeyDown}
                style={{ width: view.w, height: view.h, touchAction: "none", cursor: effFit === "fill" ? "grab" : "default" }}
                className="rounded-xl border border-line bg-white shadow-sm outline-none focus:ring-2 focus:ring-cobalt"
              />
              {effFit === "fill" && (
                <label className="flex w-full max-w-xs items-center gap-2 text-sm">
                  <span className="font-semibold text-ink">{tri(lang, "Zoom", "ज़ूम", "জুম")}</span>
                  <input type="range" min={1} max={4} step={0.05} value={zoom} onChange={(e) => changeZoom(Number(e.target.value))} className="flex-1 accent-cobalt" aria-label={tri(lang, "Zoom", "ज़ूम", "জুম")} />
                  <span className="w-10 text-right tabular-nums text-muted">{zoom.toFixed(2)}×</span>
                </label>
              )}
            </div>

            {upscaling && (
              <p className="mt-2 text-xs text-coral">⚠️ {tri(lang, "Your image is smaller than the target size, so it may look blurry when enlarged.", "आपकी छवि लक्ष्य आकार से छोटी है, इसलिए बड़ा करने पर धुंधली दिख सकती है।", "তোমার ছবি লক্ষ্য আকারের চেয়ে ছোট, তাই বড় করলে ঝাপসা দেখাতে পারে।")}</p>
            )}

            <button type="button" onClick={() => void process()} disabled={processing} className="btn-candy cobalt mt-4 w-full disabled:opacity-50">
              {processing ? tri(lang, "Processing…", "प्रोसेस हो रहा है…", "প্রক্রিয়া চলছে…") : tri(lang, "Resize & compress", "आकार बदलें और कंप्रेस करें", "আকার বদলাও ও কম্প্রেস করো")}
            </button>
          </section>

          {/* Output */}
          {out && (
            <section className="card border p-4" aria-live="polite">
              <h3 className="font-display text-lg font-bold text-ink">{tri(lang, "Result", "परिणाम", "ফলাফল")}</h3>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={out.url} alt={tri(lang, "Resized result", "बदला हुआ परिणाम", "পরিবর্তিত ফল")} className="rounded-lg border border-line" style={{ maxWidth: 160, maxHeight: 200 }} />
                <div className="text-sm">
                  <p><span className="font-semibold text-ink">{tri(lang, "Size", "आकार", "আকার")}:</span> {out.width} × {out.height} px</p>
                  <p><span className="font-semibold text-ink">{tri(lang, "File size", "फ़ाइल आकार", "ফাইল আকার")}:</span> <span className={out.note === "ok" ? "text-green" : "text-coral"}>{(out.bytes / 1024).toFixed(1)} KB</span></p>
                  <a href={out.url} download={`${fileName}-${out.width}x${out.height}.${ext}`} className="btn-candy cobalt mt-2 inline-block">⬇ {tri(lang, "Download", "डाउनलोड", "ডাউনলোড")}</a>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-ink">{label}</span>
      <input type="number" inputMode="decimal" min={0} value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-line bg-white px-3 py-2 text-ink outline-none focus:ring-2 focus:ring-cobalt" />
    </label>
  );
}

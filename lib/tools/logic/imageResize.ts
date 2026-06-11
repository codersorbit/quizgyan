// Pure helpers for the photo/signature resizer: unit maths, fit/fill geometry,
// and the JPEG-quality search loop. No DOM here — the Canvas glue lives in the
// island, and the quality search takes an injected encoder so it stays testable.

export type ImgFormat = "jpeg" | "png" | "webp";

export interface Dimensions {
  width: number;
  height: number;
}

export function cmToPx(cm: number, dpi: number): number {
  return Math.round((cm / 2.54) * dpi);
}
export function pxToCm(px: number, dpi: number): number {
  return Math.round(((px / dpi) * 2.54) * 100) / 100;
}

export function aspectRatio({ width, height }: Dimensions): number {
  return height === 0 ? 0 : width / height;
}

/**
 * Source rectangle to copy when filling a target of `targetAspect` (cover):
 * the largest centred rect of the source that matches the target aspect ratio.
 */
export function coverRect(srcW: number, srcH: number, targetAspect: number): { sx: number; sy: number; sw: number; sh: number } {
  const srcAspect = srcW / srcH;
  let sw: number;
  let sh: number;
  if (srcAspect > targetAspect) {
    // source is wider → crop the sides
    sh = srcH;
    sw = Math.round(srcH * targetAspect);
  } else {
    // source is taller → crop top/bottom
    sw = srcW;
    sh = Math.round(srcW / targetAspect);
  }
  const sx = Math.round((srcW - sw) / 2);
  const sy = Math.round((srcH - sh) / 2);
  return { sx, sy, sw, sh };
}

/** For "fit" (letterbox): size of the image placed inside the target, centred. */
export function containBox(srcW: number, srcH: number, targetW: number, targetH: number): { dw: number; dh: number; dx: number; dy: number } {
  const scale = Math.min(targetW / srcW, targetH / srcH);
  const dw = Math.round(srcW * scale);
  const dh = Math.round(srcH * scale);
  return { dw, dh, dx: Math.round((targetW - dw) / 2), dy: Math.round((targetH - dh) / 2) };
}

export interface QualitySearch {
  quality: number;
  bytes: number;
  withinBand: boolean;
  note: "ok" | "below-min" | "above-max";
}

/**
 * Find the highest JPEG/WEBP quality whose encoded size is ≤ maxBytes, then
 * report whether that size also clears minBytes. `encode(q)` returns byte size.
 */
export async function searchQuality(
  encode: (quality: number) => Promise<number>,
  minBytes: number,
  maxBytes: number,
  qMin = 0.05,
  qMax = 0.95,
  iters = 8,
): Promise<QualitySearch> {
  const atLow = await encode(qMin);
  if (atLow > maxBytes) {
    return { quality: qMin, bytes: atLow, withinBand: false, note: "above-max" };
  }
  let lo = qMin;
  let hi = qMax;
  let bestQ = qMin;
  let bestBytes = atLow;
  for (let i = 0; i < iters; i += 1) {
    const mid = (lo + hi) / 2;
    const bytes = await encode(mid);
    if (bytes <= maxBytes) {
      bestQ = mid;
      bestBytes = bytes;
      lo = mid;
    } else {
      hi = mid;
    }
  }
  const withinBand = bestBytes >= minBytes && bestBytes <= maxBytes;
  return { quality: bestQ, bytes: bestBytes, withinBand, note: bestBytes < minBytes ? "below-min" : "ok" };
}

/* ----------------------------- Target profiles --------------------------- */
// VERIFY: these are TYPICAL values, not official per-exam specifications, which
// change by year and portal. Always confirm against your own form's instructions.
// The Custom profile is what makes the tool universally correct.

export interface ResizePreset {
  id: string;
  kind: "photo" | "signature";
  /** Fixed pixel target, OR a cm target resolved with `dpi`. */
  px?: Dimensions;
  cm?: Dimensions;
  dpi?: number;
  minKB: number;
  maxKB: number;
  format: ImgFormat;
}

export const PRESETS: ResizePreset[] = [
  // VERIFY — passport-style photo, 3.5 × 4.5 cm at 300 DPI.
  { id: "passport", kind: "photo", cm: { width: 3.5, height: 4.5 }, dpi: 300, minKB: 20, maxKB: 100, format: "jpeg" },
  // VERIFY — common online-form photo profile.
  { id: "form-photo", kind: "photo", px: { width: 200, height: 230 }, minKB: 20, maxKB: 50, format: "jpeg" },
  // VERIFY — common online-form signature profile.
  { id: "signature", kind: "signature", px: { width: 140, height: 60 }, minKB: 10, maxKB: 20, format: "jpeg" },
];

/** Resolve a preset (or custom cm/px) to concrete output pixels. */
export function resolvePx(p: { px?: Dimensions; cm?: Dimensions; dpi?: number }): Dimensions {
  if (p.px) return { width: Math.max(1, Math.round(p.px.width)), height: Math.max(1, Math.round(p.px.height)) };
  if (p.cm && p.dpi) return { width: cmToPx(p.cm.width, p.dpi), height: cmToPx(p.cm.height, p.dpi) };
  return { width: 1, height: 1 };
}

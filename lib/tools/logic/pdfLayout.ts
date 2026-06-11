// Pure geometry for laying images onto PDF pages. Points (pt) throughout.
// jsPDF lives only in the island (lazy-loaded); this stays DOM-free and testable.

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export type PageSize = "a4" | "letter";
export type Orientation = "portrait" | "landscape" | "auto";

/** Portrait page dimensions in points. */
export const PAGE_PT: Record<PageSize, { w: number; h: number }> = {
  a4: { w: 595.28, h: 841.89 },
  letter: { w: 612, h: 792 },
};

/** Margin presets in points (1 pt = 1/72 inch). */
export const MARGIN_PT: Record<string, number> = {
  none: 0,
  small: 18,
  medium: 36,
  large: 54,
};

/** Page dimensions for a size + orientation (auto resolves from the image). */
export function pageDimensions(size: PageSize, orientation: Orientation, imgW: number, imgH: number): { w: number; h: number } {
  const base = PAGE_PT[size];
  let landscape: boolean;
  if (orientation === "auto") landscape = imgW > imgH;
  else landscape = orientation === "landscape";
  return landscape ? { w: base.h, h: base.w } : { w: base.w, h: base.h };
}

/** The printable area inside the margins. */
export function contentRect(pageW: number, pageH: number, margin: number): Rect {
  const m = Math.max(0, Math.min(margin, Math.min(pageW, pageH) / 2 - 1));
  return { x: m, y: m, w: Math.max(1, pageW - 2 * m), h: Math.max(1, pageH - 2 * m) };
}

/** Largest centred rect of the image that fits inside `content` (letterbox). */
export function fitRect(content: Rect, imgW: number, imgH: number): Rect {
  const scale = Math.min(content.w / imgW, content.h / imgH);
  const w = imgW * scale;
  const h = imgH * scale;
  return { x: content.x + (content.w - w) / 2, y: content.y + (content.h - h) / 2, w, h };
}

/**
 * For "fill": the source crop rectangle (in image pixels) whose aspect matches
 * the content area, so the placed image covers the whole printable area.
 */
export function fillCrop(imgW: number, imgH: number, contentW: number, contentH: number): { sx: number; sy: number; sw: number; sh: number } {
  const target = contentW / contentH;
  const src = imgW / imgH;
  let sw: number;
  let sh: number;
  if (src > target) {
    sh = imgH;
    sw = Math.round(imgH * target);
  } else {
    sw = imgW;
    sh = Math.round(imgW / target);
  }
  return { sx: Math.round((imgW - sw) / 2), sy: Math.round((imgH - sh) / 2), sw, sh };
}

export function move<T>(arr: T[], from: number, to: number): T[] {
  if (to < 0 || to >= arr.length || from < 0 || from >= arr.length) return arr;
  const next = arr.slice();
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

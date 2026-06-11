// Pure helpers for the random picker / group maker. Seeded RNG so a given
// configuration reproduces the same groups (config is URL-synced in the island).

/** Forgiving roster parse: split on new lines or commas, trim, drop blanks. */
export function parseNames(text: string): string[] {
  return text
    .split(/[\n,]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/* ----------------------------- seeded RNG ------------------------------- */
function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i += 1) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}
function mulberry32(a: number): () => number {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function rngFor(seed: string): () => number {
  return mulberry32(xmur3(seed)());
}

/** Fisher–Yates with a seeded RNG (does not mutate the input). */
export function seededShuffle<T>(arr: readonly T[], seed: string): T[] {
  const out = arr.slice();
  const rng = rngFor(seed);
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Pick one random index from `count` items. */
export function pickIndex(count: number, rng: () => number): number {
  if (count <= 0) return -1;
  return Math.floor(rng() * count);
}

export type GroupMode = "count" | "size";

/**
 * Distribute names into balanced groups (sizes differ by at most one).
 * mode "count": exactly `value` groups. mode "size": groups of about `value`.
 */
export function makeGroups(names: readonly string[], mode: GroupMode, value: number, seed: string): string[][] {
  const n = names.length;
  if (n === 0) return [];
  const v = Math.max(1, Math.floor(value) || 1);
  const groupCount = mode === "count" ? Math.min(v, n) : Math.max(1, Math.ceil(n / v));
  const shuffled = seededShuffle(names, seed);
  const groups: string[][] = Array.from({ length: groupCount }, () => []);
  shuffled.forEach((name, i) => {
    groups[i % groupCount].push(name);
  });
  return groups;
}

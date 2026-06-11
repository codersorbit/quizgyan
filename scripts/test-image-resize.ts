// Run with: npx tsx scripts/test-image-resize.ts
import { cmToPx, pxToCm, coverRect, containBox, searchQuality, resolvePx } from "../lib/tools/logic/imageResize";

let failed = 0;
function eq(label: string, got: unknown, want: unknown) {
  if (JSON.stringify(got) !== JSON.stringify(want)) {
    failed += 1;
    console.error(`✗ ${label}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`);
  } else console.log(`✓ ${label}`);
}

// unit maths
eq("3.5cm @300dpi", cmToPx(3.5, 300), 413);
eq("4.5cm @300dpi", cmToPx(4.5, 300), 531);
eq("px→cm round-trip-ish", pxToCm(413, 300), 3.5);
eq("resolve cm preset", resolvePx({ cm: { width: 3.5, height: 4.5 }, dpi: 300 }), { width: 413, height: 531 });
eq("resolve px preset", resolvePx({ px: { width: 200, height: 230 } }), { width: 200, height: 230 });

// cover (fill) — wide source into square target → crop sides
eq("cover wide→square", coverRect(400, 200, 1), { sx: 100, sy: 0, sw: 200, sh: 200 });
// tall source into square target → crop top/bottom
eq("cover tall→square", coverRect(200, 400, 1), { sx: 0, sy: 100, sw: 200, sh: 200 });

// contain (fit) — wide source into square target → letterbox top/bottom
eq("contain wide→square", containBox(400, 200, 100, 100), { dw: 100, dh: 50, dx: 0, dy: 25 });

// quality search with a synthetic encoder: bytes grow ~linearly with quality
async function run() {
  const encode = (q: number) => Promise.resolve(Math.round(10000 + q * 90000)); // 10k..100k bytes
  const r1 = await searchQuality(encode, 20000, 50000, 0.05, 0.95, 12);
  eq("search lands ≤ max", r1.bytes <= 50000, true);
  eq("search within band", r1.withinBand, true);

  // band unreachable (too big even at low q)
  const big = (q: number) => Promise.resolve(Math.round(200000 + q * 100000));
  const r2 = await searchQuality(big, 20000, 50000);
  eq("above-max note", r2.note, "above-max");
  eq("above-max not within", r2.withinBand, false);

  // file too simple to reach min
  const small = (q: number) => Promise.resolve(Math.round(1000 + q * 2000));
  const r3 = await searchQuality(small, 20000, 50000);
  eq("below-min note", r3.note, "below-min");

  if (failed) {
    console.error(`\n${failed} failed.`);
    process.exit(1);
  }
  console.log("\nAll image-resize assertions passed.");
}
run();

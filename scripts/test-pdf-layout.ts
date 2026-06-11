// Run with: npx tsx scripts/test-pdf-layout.ts
import { pageDimensions, contentRect, fitRect, fillCrop, move, PAGE_PT } from "../lib/tools/logic/pdfLayout";

let failed = 0;
function eq(label: string, got: unknown, want: unknown) {
  if (JSON.stringify(got) !== JSON.stringify(want)) {
    failed += 1;
    console.error(`✗ ${label}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`);
  } else console.log(`✓ ${label}`);
}

eq("a4 portrait", pageDimensions("a4", "portrait", 100, 200), PAGE_PT.a4);
eq("a4 landscape", pageDimensions("a4", "landscape", 100, 200), { w: PAGE_PT.a4.h, h: PAGE_PT.a4.w });
eq("auto picks landscape for wide", pageDimensions("a4", "auto", 400, 200), { w: PAGE_PT.a4.h, h: PAGE_PT.a4.w });
eq("auto picks portrait for tall", pageDimensions("a4", "auto", 200, 400), PAGE_PT.a4);

eq("content rect", contentRect(600, 800, 36), { x: 36, y: 36, w: 528, h: 728 });
eq("margin clamps", contentRect(100, 100, 9999).w >= 1, true);

// fit a wide image into a square content → letterbox top/bottom
eq("fit wide", fitRect({ x: 0, y: 0, w: 100, h: 100 }, 400, 200), { x: 0, y: 25, w: 100, h: 50 });

// fill crop: wide image to square content → crop sides
eq("fill crop wide", fillCrop(400, 200, 100, 100), { sx: 100, sy: 0, sw: 200, sh: 200 });

// reorder
eq("move down", move([1, 2, 3], 0, 1), [2, 1, 3]);
eq("move up", move([1, 2, 3], 2, 1), [1, 3, 2]);
eq("move out of range is no-op", move([1, 2, 3], 0, 5), [1, 2, 3]);

if (failed) {
  console.error(`\n${failed} failed.`);
  process.exit(1);
}
console.log("\nAll pdf-layout assertions passed.");

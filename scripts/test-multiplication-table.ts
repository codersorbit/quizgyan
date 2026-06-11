// Run with: npx tsx scripts/test-multiplication-table.ts
import { singleTable, chartGrid, booklet, clampInt } from "../lib/tools/logic/multiplicationTable";

let failed = 0;
function eq(label: string, got: unknown, want: unknown) {
  if (JSON.stringify(got) !== JSON.stringify(want)) {
    failed += 1;
    console.error(`✗ ${label}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`);
  } else console.log(`✓ ${label}`);
}

const t7 = singleTable(7, 10);
eq("single length", t7.length, 10);
eq("single first", t7[0], { a: 7, b: 1, product: 7 });
eq("single last", t7[9], { a: 7, b: 10, product: 70 });
eq("upTo clamps to 30", singleTable(3, 99).length, 30);
eq("upTo clamps to 1", singleTable(3, 0).length, 1);

eq("chart 3x3", chartGrid(3, 3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
eq("chart row count", chartGrid(12, 12).length, 12);

eq("booklet count", booklet(2, 4, 5).length, 3);
eq("booklet order tolerant", booklet(4, 2, 5).map((x) => x.n), [2, 3, 4]);
eq("booklet capped at 30", booklet(1, 100, 10).length, 30);
eq("booklet rows", booklet(5, 5, 12)[0].rows.length, 12);

eq("clamp finite", clampInt(7.9, 1, 30), 7);
eq("clamp NaN → min", clampInt(NaN, 2, 30), 2);

if (failed) {
  console.error(`\n${failed} failed.`);
  process.exit(1);
}
console.log("\nAll multiplication-table assertions passed.");

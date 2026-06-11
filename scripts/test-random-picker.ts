// Run with: npx tsx scripts/test-random-picker.ts
import { parseNames, seededShuffle, makeGroups, pickIndex, rngFor } from "../lib/tools/logic/randomPicker";

let failed = 0;
function eq(label: string, got: unknown, want: unknown) {
  if (JSON.stringify(got) !== JSON.stringify(want)) {
    failed += 1;
    console.error(`✗ ${label}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`);
  } else console.log(`✓ ${label}`);
}

// parse
eq("parse lines", parseNames("Asha\nBob\n\n  Cara "), ["Asha", "Bob", "Cara"]);
eq("parse commas", parseNames("Asha, Bob\nCara"), ["Asha", "Bob", "Cara"]);
eq("parse empty", parseNames("   \n  "), []);

// shuffle is deterministic for a seed and preserves the multiset
const names = ["a", "b", "c", "d", "e", "f", "g", "h"];
eq("shuffle deterministic", seededShuffle(names, "s1"), seededShuffle(names, "s1"));
eq("shuffle preserves set", seededShuffle(names, "s1").slice().sort(), names.slice().sort());
eq("different seed differs", JSON.stringify(seededShuffle(names, "s1")) !== JSON.stringify(seededShuffle(names, "s2")), true);

// groups by count: balanced, no loss
const g3 = makeGroups(names, "count", 3, "k");
eq("count groups n", g3.length, 3);
eq("count balanced sizes", g3.map((x) => x.length).sort(), [2, 3, 3]);
eq("count no loss", g3.flat().slice().sort(), names.slice().sort());

// groups by size: ceil(n/size) groups, balanced
const g4 = makeGroups(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], "size", 4, "k");
eq("size groups count = ceil(10/4)", g4.length, 3);
eq("size balanced", g4.map((x) => x.length).sort(), [3, 3, 4]);

// edge cases
eq("more groups than names clamps", makeGroups(["a", "b"], "count", 5, "k").length, 2);
eq("empty names → no groups", makeGroups([], "count", 3, "k"), []);

// pickIndex within range
const rng = rngFor("p");
let inRange = true;
for (let i = 0; i < 100; i += 1) {
  const idx = pickIndex(5, rng);
  if (idx < 0 || idx > 4) inRange = false;
}
eq("pickIndex in range", inRange, true);
eq("pickIndex empty → -1", pickIndex(0, rng), -1);

if (failed) {
  console.error(`\n${failed} failed.`);
  process.exit(1);
}
console.log("\nAll random-picker assertions passed.");

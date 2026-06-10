/**
 * Generates the static JSON data files into public/ before each build.
 * Run automatically via the "prebuild" npm script. This keeps the daily pool
 * and search index as plain static files, so the site works on ANY static
 * host (including `next build` with `output: export`) — no API routes needed.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { allChallengeMcqs, buildSearchIndex } from "@/lib/content";
import { buildWorksheetBank, bankStats } from "@/lib/tools/worksheet-bank";

mkdirSync("public", { recursive: true });

const pool = allChallengeMcqs();
const index = buildSearchIndex();
const worksheetBank = buildWorksheetBank();

writeFileSync("public/daily-pool.json", JSON.stringify(pool));
writeFileSync("public/search-index.json", JSON.stringify(index));
writeFileSync("public/worksheet-bank.json", JSON.stringify(worksheetBank));

const ws = bankStats(worksheetBank);
console.log(
  `[gen-data] wrote public/daily-pool.json (${pool.length} questions) and public/search-index.json (${index.length} chapters)`,
);
console.log(
  `[gen-data] wrote public/worksheet-bank.json (${ws.questions} questions across ${ws.chapters} chapters; mcq ${ws.byType.mcq}, short ${ws.byType.short}, long ${ws.byType.long}, hots ${ws.byType.hots})`,
);

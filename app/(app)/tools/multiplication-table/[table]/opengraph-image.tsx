import { ogCard, OG_SIZE } from "@/lib/tools/og";

export const alt = "StudyMatic multiplication table";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  const out: { table: string }[] = [];
  for (let n = 2; n <= 30; n += 1) out.push({ table: `table-of-${n}` });
  return out;
}

export default async function Og({ params }: { params: Promise<{ table: string }> }) {
  const { table } = await params;
  const m = /^table-of-(\d+)$/.exec(table);
  const n = m ? Number(m[1]) : 0;
  return ogCard({
    icon: "✖️",
    title: `Table of ${n}`,
    subtitle: `${n} × 1 to ${n} × 20 — free to read & print`,
    urlPath: "studymatic.in/tools",
  });
}

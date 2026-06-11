import { ogCard, OG_SIZE } from "@/lib/tools/og";

export const alt = "Resize image online";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return [10, 20, 50, 100, 200, 500].map((kb) => ({ target: `resize-to-${kb}kb` }));
}

export default async function Og({ params }: { params: Promise<{ target: string }> }) {
  const { target } = await params;
  const m = /^resize-to-(\d+)kb$/.exec(target);
  const kb = m ? Number(m[1]) : 0;
  return ogCard({
    icon: "🖼️",
    title: `Resize Image to ${kb} KB`,
    subtitle: "Compress in your browser — no upload",
    urlPath: "studymatic.in/tools",
  });
}

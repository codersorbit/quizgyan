import { ImageResponse } from "next/og";
import { TOOLS, getTool } from "@/lib/tools/registry";

export const alt = "StudyMatic free student tool";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export default async function Og({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  const name = tool?.name.en ?? "Free Tools";
  const icon = tool?.icon ?? "🧮";
  const short = tool?.short.en ?? "Free, forever — no login, no ads.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fffdf6 0%, #eaf0ff 100%)",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#3257f0", fontSize: 34, fontWeight: 700 }}>
          <span>✦ StudyMatic</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 120 }}>{icon}</div>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.05 }}>{name}</div>
          <div style={{ fontSize: 34, color: "#5b6072" }}>{short}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#5b6072" }}>
          <span>studymatic.in/tools</span>
          <span style={{ color: "#1faf6b", fontWeight: 700 }}>Free · No login · No ads</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

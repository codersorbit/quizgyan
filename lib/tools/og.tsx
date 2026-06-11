import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Render a StudyMatic-branded 1200×630 OG card. Mirrors the tool [slug] card. */
export function ogCard(opts: { icon: string; title: string; subtitle: string; urlPath: string }) {
  const { icon, title, subtitle, urlPath } = opts;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #faf6ee 0%, #eaeef6 100%)",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#0f2a5c", fontSize: 34, fontWeight: 700 }}>
          <span>✦ StudyMatic</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 120 }}>{icon}</div>
          <div style={{ fontSize: 68, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 34, color: "#5b6a85" }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#5b6a85" }}>
          <span>{urlPath}</span>
          <span style={{ color: "#1faf6b", fontWeight: 700 }}>Free · No login · No ads</span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}

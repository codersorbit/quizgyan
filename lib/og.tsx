import { site } from "@/lib/site";

const C = {
  cream: "#fbf6ee",
  ink: "#1f1b18",
  muted: "#5b554f",
  cobalt: "#3257f0",
  cobaltSoft: "#e8edff",
  amber: "#ffb300",
  coral: "#ff5d73",
  green: "#1faf6b",
  greenSoft: "#e7f6ef",
};

const domain = site.url.replace(/^https?:\/\//, "");

export const OG_SIZE = { width: 1200, height: 630 };

function clamp(s: string, n: number): string {
  const t = (s ?? "").trim();
  return t.length > n ? t.slice(0, n - 1).trimEnd() + "…" : t;
}

function brandEl() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
      <div
        style={{
          display: "flex",
          width: "64px",
          height: "64px",
          borderRadius: "18px",
          backgroundColor: C.cobalt,
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: "36px",
          fontWeight: 800,
        }}
      >
        Q
      </div>
      <div style={{ display: "flex", fontSize: "34px", fontWeight: 800, color: C.ink }}>
        {site.name}
      </div>
    </div>
  );
}

function kickerEl(text: string, color: string) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div
        style={{
          display: "flex",
          height: "14px",
          width: "56px",
          borderRadius: "999px",
          backgroundColor: C.amber,
        }}
      />
      <div
        style={{ display: "flex", fontSize: "26px", fontWeight: 700, color, letterSpacing: "3px" }}
      >
        {text}
      </div>
    </div>
  );
}

function pillEl(key: string, text: string, bg: string, fg: string) {
  return (
    <div
      key={key}
      style={{
        display: "flex",
        padding: "10px 22px",
        borderRadius: "999px",
        backgroundColor: bg,
        color: fg,
        fontWeight: 700,
        fontSize: "26px",
      }}
    >
      {text}
    </div>
  );
}

const outerStyle = {
  width: "1200px",
  height: "630px",
  display: "flex",
  flexDirection: "column" as const,
  backgroundColor: C.cream,
  padding: "60px",
  justifyContent: "space-between" as const,
  fontFamily: "sans-serif",
};

export function questionCard(opts: {
  q: string;
  chapter?: string;
  cls?: string;
  subject?: string;
}) {
  const text = clamp(opts.q, 190);
  const fontSize = text.length > 130 ? 46 : text.length > 80 ? 56 : 64;
  const subjectName =
    opts.subject === "maths" ? "Maths" : opts.subject === "science" ? "Science" : opts.subject;

  const footer = [];
  if (opts.cls) footer.push(pillEl("cls", `Class ${opts.cls}`, C.cobaltSoft, C.cobalt));
  if (subjectName) footer.push(pillEl("sub", subjectName, C.greenSoft, C.green));
  footer.push(
    <div key="dom" style={{ display: "flex", color: C.muted, fontWeight: 700, fontSize: "26px" }}>
      {domain}/daily
    </div>,
  );

  return (
    <div style={outerStyle}>
      {brandEl()}
      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        {kickerEl("QUESTION OF THE DAY", C.coral)}
        <div
          style={{
            display: "flex",
            fontSize: `${fontSize}px`,
            fontWeight: 800,
            color: C.ink,
            lineHeight: 1.12,
            maxWidth: "1080px",
          }}
        >
          {text}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>{footer}</div>
    </div>
  );
}

export function resultCard(opts: {
  score: number;
  total: number;
  percent: number;
  streak?: number;
  best?: number;
}) {
  const msg =
    opts.percent >= 80 ? "Brilliant!" : opts.percent >= 50 ? "Nice work!" : "Keep going!";

  const footer = [];
  if (opts.streak && opts.streak > 0) {
    footer.push(pillEl("streak", `${opts.streak}-day streak`, C.greenSoft, C.green));
  }
  if (opts.best && opts.best > 0) {
    footer.push(pillEl("best", `Best: ${opts.best}`, C.cobaltSoft, C.cobalt));
  }
  footer.push(
    <div key="dom" style={{ display: "flex", color: C.muted, fontWeight: 700, fontSize: "26px" }}>
      Play today at {domain}/daily
    </div>,
  );

  return (
    <div style={outerStyle}>
      {brandEl()}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {kickerEl("DAILY CHALLENGE", C.cobalt)}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "150px",
              fontWeight: 800,
              color: C.cobalt,
              lineHeight: 1,
            }}
          >
            {opts.percent}%
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "44px",
              fontWeight: 700,
              color: C.ink,
              paddingBottom: "18px",
            }}
          >
            {opts.score} / {opts.total} correct
          </div>
        </div>
        <div style={{ display: "flex", fontSize: "40px", fontWeight: 700, color: C.coral }}>
          {msg}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>{footer}</div>
    </div>
  );
}

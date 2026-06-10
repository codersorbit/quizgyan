import { ImageResponse } from "next/og";
import { getChapter, getClass, getSubject, parseClassId } from "@/lib/content";
import { chapterToQuestions } from "@/lib/tools/logic/worksheet";
import { worksheetLandingParams, MIN_LANDING_QUESTIONS } from "@/lib/tools/worksheet-bank";

export const alt = "StudyMatic worksheet with answers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { board: string; classId: string; subject: string; chapter: string };

export function generateStaticParams() {
  return worksheetLandingParams().map((p) => ({
    board: p.board,
    classId: `class-${p.classId}`,
    subject: p.subject,
    chapter: p.chapter,
  }));
}

export default async function Og({ params }: { params: Promise<Params> }) {
  const p = await params;
  const board = p.board === "wbbpe" ? "wbbpe" : "cbse";
  const classId = parseClassId(p.classId);
  const chapter = getChapter(classId, p.subject, p.chapter, board);
  const cls = getClass(classId, board);
  const subj = getSubject(classId, p.subject, board);

  const title = chapter?.title ?? "Worksheet";
  const line = `${cls?.label ?? `Class ${classId}`} · ${subj?.name ?? p.subject}`;
  const count = chapter ? chapterToQuestions(chapter).length : 0;
  const countLabel = count >= MIN_LANDING_QUESTIONS ? `${count} questions · with answer key` : "with answer key";

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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#0f2a5c", fontSize: 32, fontWeight: 700 }}>
          <span>✦ StudyMatic</span>
          <span style={{ fontSize: 26, color: "#5b6a85" }}>{board === "wbbpe" ? "WBBPE" : "CBSE"}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 30, color: "#5b6a85", fontWeight: 600 }}>{line}</div>
          <div style={{ fontSize: 66, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 40, fontWeight: 700, color: "#e63946" }}>Worksheet (with Answers)</div>
          <div style={{ fontSize: 30, color: "#5b6a85" }}>{countLabel}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#5b6a85" }}>
          <span>studymatic.in</span>
          <span style={{ color: "#1faf6b", fontWeight: 700 }}>Free · No login · No ads</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

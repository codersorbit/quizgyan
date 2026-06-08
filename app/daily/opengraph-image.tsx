import { ImageResponse } from "next/og";
import { allChallengeMcqs } from "@/lib/content";
import { pickOne, todayStrTz } from "@/lib/daily";
import { questionCard, OG_SIZE } from "@/lib/og";

export const alt = "StudyMatic — Question of the Day";
export const size = OG_SIZE;
export const contentType = "image/png";
// Rendered at request time so the preview shows the actual question for the day.
export const dynamic = "force-dynamic";

export default function Image() {
  // Crawlers don't send a timezone, so default to IST (the audience's timezone)
  // rather than the server's UTC, so the preview matches what Indian students see.
  const today = todayStrTz(330);
  const q = pickOne(allChallengeMcqs(), `qotd:${today}`);
  const card = q
    ? questionCard({ q: q.q, chapter: q.chapterTitle, cls: q.classId, subject: q.subject })
    : questionCard({ q: "A fresh CBSE question, every single day." });
  return new ImageResponse(card, { ...size });
}

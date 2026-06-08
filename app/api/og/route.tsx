import { ImageResponse } from "next/og";
import { allChallengeMcqs } from "@/lib/content";
import { pickOne, todayStrTz } from "@/lib/daily";
import { questionCard, resultCard, OG_SIZE } from "@/lib/og";

// Rendered on demand (e.g. for share images). Needs a server runtime.
export const dynamic = "force-dynamic";

function num(v: string | null, fallback = 0): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

const isDate = (s: string | null): s is string => !!s && /^\d{4}-\d{2}-\d{2}$/.test(s);

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") ?? "question";

  if (type === "result") {
    const total = num(searchParams.get("total"), 10);
    const score = num(searchParams.get("score"), 0);
    const percent = num(
      searchParams.get("pct"),
      total > 0 ? Math.round((score / total) * 100) : 0,
    );
    const streak = num(searchParams.get("streak"), 0);
    const best = num(searchParams.get("best"), 0);
    return new ImageResponse(resultCard({ score, total, percent, streak, best }), { ...OG_SIZE });
  }

  // Question card. If explicit content is passed, render it exactly (this is how
  // the in-app share buttons guarantee the image matches what the user saw).
  const explicit = searchParams.get("q");
  if (explicit) {
    return new ImageResponse(
      questionCard({
        q: explicit,
        chapter: searchParams.get("c") ?? undefined,
        cls: searchParams.get("cls") ?? undefined,
        subject: searchParams.get("sub") ?? undefined,
      }),
      { ...OG_SIZE },
    );
  }

  // Otherwise compute the question of the day for the given date (or IST today).
  const dateParam = searchParams.get("date");
  const day = isDate(dateParam) ? dateParam : todayStrTz(330);
  const q = pickOne(allChallengeMcqs(), `qotd:${day}`);
  return new ImageResponse(
    questionCard(
      q
        ? { q: q.q, chapter: q.chapterTitle, cls: q.classId, subject: q.subject }
        : { q: "A fresh CBSE question, every single day." },
    ),
    { ...OG_SIZE },
  );
}

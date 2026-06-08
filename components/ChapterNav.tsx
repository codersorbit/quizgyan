import Link from "next/link";
import type { Chapter } from "@/lib/types";
import { chapterUrl } from "@/lib/content";

export function ChapterNav({
  prev,
  next,
  related,
}: {
  prev?: Chapter;
  next?: Chapter;
  related: Chapter[];
}) {
  return (
    <div className="mt-12">
      {(prev || next) && (
        <div className="grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link
              href={chapterUrl(prev.classId, prev.subject, prev.slug)}
              className="card group p-4 transition hover:border-cobalt"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">← Previous</span>
              <span className="mt-1 block font-display font-semibold text-ink group-hover:text-cobalt">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={chapterUrl(next.classId, next.subject, next.slug)}
              className="card group p-4 text-right transition hover:border-cobalt"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-muted">Next →</span>
              <span className="mt-1 block font-display font-semibold text-ink group-hover:text-cobalt">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-8">
          <h2 className="font-display text-lg font-bold">Related chapters</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={chapterUrl(r.classId, r.subject, r.slug)}
                className="card p-4 transition hover:border-cobalt"
              >
                <span className="font-display font-semibold text-ink">{r.title}</span>
                <span className="mt-0.5 block text-sm text-muted">Class {r.classId}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

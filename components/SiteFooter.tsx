import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-card/60">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span aria-hidden className="grid h-8 w-8 place-items-center rounded-xl bg-cobalt text-base">💡</span>
              <span className="font-display text-lg font-bold">{site.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.description}</p>
          </div>
          <nav className="text-sm">
            <p className="mb-2 font-display font-semibold text-ink">Explore</p>
            <ul className="space-y-1.5 text-muted">
              <li><Link href="/cbse" className="hover:text-cobalt">All classes</Link></li>
              <li><Link href="/notes" className="hover:text-cobalt">Notes</Link></li>
              <li><Link href="/mcqs" className="hover:text-cobalt">MCQ quizzes</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-t border-line pt-6 text-sm text-muted">
          Built by{" "}
          <span className="font-semibold text-ink">{site.author.name}</span>, a student at{" "}
          <a
            href={site.author.schoolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cobalt hover:underline"
          >
            {site.author.school}
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

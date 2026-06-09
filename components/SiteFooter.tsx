import Link from "next/link";
import { site } from "@/lib/site";
import { CLASSES, classUrl } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 glass border-t">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center">
        <Link href="/" className="inline-flex items-center gap-2">
          <span aria-hidden className="grid h-8 w-8 place-items-center rounded-xl bg-linear-to-br from-cobalt to-violet text-base">💡</span>
          <span className="font-display text-lg font-bold brand-gradient">{site.name}</span>
        </Link>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">{site.description}</p>

        <nav className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-muted">
          <Link href="/cbse" className="hover:text-cobalt">All classes</Link>
          <Link href="/notes" className="hover:text-cobalt">Revision notes</Link>
          <Link href="/mcqs" className="hover:text-cobalt">MCQ quizzes</Link>
          <Link href="/daily" className="hover:text-cobalt">Daily challenge</Link>
        </nav>

        <nav className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-sm text-muted">
          {CLASSES.map((c) => (
            <Link key={c.id} href={classUrl(c.id)} className="hover:text-cobalt">
              {c.label}
            </Link>
          ))}
        </nav>

        <div className="mx-auto mt-8 max-w-md border-t border-line pt-6 text-sm text-muted">
          © {year} {site.name}. Built by{" "}
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

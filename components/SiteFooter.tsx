import Link from "next/link";
import { site } from "@/lib/site";
import { CLASSES, classUrl } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-card/60">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span aria-hidden className="grid h-8 w-8 place-items-center rounded-xl bg-cobalt text-base">💡</span>
              <span className="font-display text-lg font-bold">{site.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.description}</p>
          </div>

          <nav className="text-sm">
            <p className="mb-3 font-display font-semibold text-ink">Classes</p>
            <ul className="space-y-1.5 text-muted">
              {CLASSES.map((c) => (
                <li key={c.id}>
                  <Link href={classUrl(c.id)} className="hover:text-cobalt">{c.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="text-sm">
            <p className="mb-3 font-display font-semibold text-ink">Study</p>
            <ul className="space-y-1.5 text-muted">
              <li><Link href="/cbse" className="hover:text-cobalt">All classes</Link></li>
              <li><Link href="/notes" className="hover:text-cobalt">Revision notes</Link></li>
              <li><Link href="/mcqs" className="hover:text-cobalt">MCQ quizzes</Link></li>
              <li><Link href="/daily" className="hover:text-cobalt">Daily challenge</Link></li>
            </ul>
          </nav>

          <div className="text-sm">
            <p className="mb-3 font-display font-semibold text-ink">About</p>
            <p className="leading-relaxed text-muted">
              Free CBSE study tools, made by a student. No login, no ads, and it works on any phone.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-muted">
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

import Link from "next/link";
import { site } from "@/lib/site";
import { CLASSES, classUrl } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center">
        <Link href="/" className="inline-flex items-center gap-2">
          <span aria-hidden className="relative grid h-8 w-8 place-items-center rounded-full bg-white/10 text-base text-sun">✦<span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-sun" /></span>
          <span className="font-fun text-xl text-white">{site.name}</span>
        </Link>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">{site.description}</p>

        <nav className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/75">
          <Link href="/cbse" className="hover:text-white">All classes</Link>
          <Link href="/notes" className="hover:text-white">Revision notes</Link>
          <Link href="/mcqs" className="hover:text-white">MCQ quizzes</Link>
          <Link href="/daily" className="hover:text-white">Daily challenge</Link>
        </nav>

        <nav className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-sm text-white/55">
          {CLASSES.map((c) => (
            <Link key={c.id} href={classUrl(c.id)} className="hover:text-white">
              {c.label}
            </Link>
          ))}
        </nav>

        <div className="mx-auto mt-8 max-w-md border-t border-white/15 pt-6 text-sm text-white/60">
          © {year} {site.name}. Built with 💛 by{" "}
          <span className="font-semibold text-white">{site.author.name}</span>, a student at{" "}
          <a
            href={site.author.schoolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sun hover:underline"
          >
            {site.author.school}
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

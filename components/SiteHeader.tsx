import Link from "next/link";
import { site } from "@/lib/site";
import { DailyNavLink } from "@/components/DailyNavLink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-2xl bg-cobalt text-lg shadow-sm"
          >
            💡
          </span>
          <span className="font-display text-xl font-bold text-ink">
            {site.name}
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-semibold text-muted">
          <Link href="/cbse" className="rounded-full px-3 py-1.5 hover:bg-cobalt-soft hover:text-cobalt">
            Classes
          </Link>
          <DailyNavLink />
          <Link href="/notes" className="rounded-full px-3 py-1.5 hover:bg-cobalt-soft hover:text-cobalt">
            Notes
          </Link>
          <Link href="/mcqs" className="rounded-full px-3 py-1.5 hover:bg-cobalt-soft hover:text-cobalt">
            MCQs
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";
import { DailyNavLink } from "@/components/DailyNavLink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 glass border-b shadow-sm">
      <div className="mx-auto max-w-5xl px-4 py-2.5">
        <Link href="/" className="flex items-center justify-center gap-2">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-2xl bg-linear-to-br from-cobalt to-violet text-lg shadow-md shadow-cobalt/25"
          >
            💡
          </span>
          <span className="font-display text-xl font-bold brand-gradient">{site.name}</span>
          <span className="hidden text-xs font-medium text-muted sm:inline">
            · {site.tagline}
          </span>
        </Link>
        <nav className="mt-1.5 flex items-center justify-center gap-1 text-sm font-semibold text-muted">
          <Link href="/#boards" className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-cobalt">
            Boards
          </Link>
          <Link href="/cbse" className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-cobalt">
            Classes
          </Link>
          <DailyNavLink />
          <Link href="/notes" className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-cobalt">
            Notes
          </Link>
          <Link href="/mcqs" className="rounded-full px-3 py-1.5 transition hover:bg-white/70 hover:text-cobalt">
            MCQs
          </Link>
        </nav>
      </div>
    </header>
  );
}

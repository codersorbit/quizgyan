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
            className="relative grid h-9 w-9 place-items-center rounded-full bg-pink-soft text-lg text-pink"
          >
            ✦
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-sun" />
          </span>
          <span className="font-fun text-2xl brand-gradient">{site.name}</span>
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

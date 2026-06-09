import Link from "next/link";
import { BOARDS } from "@/lib/boards";
import { allAuthoredChapters } from "@/lib/content";

/** Two-card board selector (CBSE available, WBBPE coming soon). */
export function BoardChooser() {
  // All current authored content belongs to CBSE.
  const cbseChapters = allAuthoredChapters().length;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {BOARDS.map((b) => {
        const available = b.status === "available";
        return (
          <Link
            key={b.key}
            href={b.href}
            className="card group relative overflow-hidden p-6 transition hover:-translate-y-1"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl"
              style={{ backgroundColor: `${b.accent}33` }}
            />
            <div className="relative flex items-start gap-4">
              <span
                aria-hidden
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-3xl shadow-md"
                style={{ background: `linear-gradient(135deg, ${b.accent}, ${b.accent}bb)` }}
              >
                {b.emoji}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-xl font-bold text-ink group-hover:text-cobalt">
                    {b.name}
                  </h3>
                  {available ? (
                    <span className="chip bg-green/15 text-green">Available</span>
                  ) : (
                    <span className="chip bg-amber/20 text-ink">Coming soon</span>
                  )}
                </div>
                <p className="text-sm font-medium text-ink/80">{b.fullName}</p>
                <p className="mt-0.5 text-sm font-semibold text-cobalt">{b.medium}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.blurb}</p>
                <p className="mt-3 text-sm font-semibold text-ink">
                  {available ? `${cbseChapters} chapters ready →` : "See what's coming →"}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

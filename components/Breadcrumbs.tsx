import Link from "next/link";
import type { Crumb } from "@/lib/seo";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="font-semibold text-ink">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-cobalt">
                  {c.name}
                </Link>
              )}
              {!last && <span aria-hidden className="text-line">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

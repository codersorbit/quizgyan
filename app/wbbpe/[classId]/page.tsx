import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getClass,
  classParams,
  parseClassId,
  classUrl,
  subjectUrl,
  getAuthoredInSubject,
} from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const BOARD = "wbbpe";

export function generateStaticParams() {
  return classParams(BOARD);
}

type Params = Promise<{ classId: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { classId } = await params;
  const cls = getClass(parseClassId(classId), BOARD);
  if (!cls) return {};
  const title = `WBBPE ${cls.label} — বাংলা মাধ্যম নোট ও কুইজ (আমার বই)`;
  return buildMetadata({ title, description: cls.blurb, path: classUrl(cls.id, BOARD) });
}

export default async function WbbpeClassPage({ params }: { params: Params }) {
  const { classId } = await params;
  const cls = getClass(parseClassId(classId), BOARD);
  if (!cls) notFound();

  const path = classUrl(cls.id, BOARD);
  const title = `WBBPE ${cls.label}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "WBBPE", path: "/wbbpe" },
    { name: cls.label, path },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(title, cls.blurb, path)]} />
      <Breadcrumbs crumbs={crumbs} />
      <span className="chip glass text-green">📗 বাংলা মাধ্যম · আমার বই</span>
      <h1 className="mt-3 font-display text-3xl font-bold text-ink">WBBPE {cls.label}</h1>
      <p className="mt-2 max-w-2xl text-muted">{cls.blurb}</p>

      <h2 className="mt-8 font-display text-xl font-bold text-ink">বিষয় (Subjects)</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cls.subjects.map((s) => {
          const ready = getAuthoredInSubject(cls.id, s.key, BOARD).length;
          return (
            <Link
              key={s.key}
              href={subjectUrl(cls.id, s.key, BOARD)}
              className="card group flex items-center gap-4 p-5 transition hover:-translate-y-1"
            >
              <span
                aria-hidden
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl text-white shadow-sm"
                style={{ backgroundColor: s.color }}
              >
                {s.icon}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg font-bold text-ink group-hover:text-cobalt">
                  {s.name}
                </span>
                <span className="block text-sm text-muted">
                  {s.chapters.length} অধ্যায়
                  {ready > 0 ? ` · ${ready}টি তৈরি` : " · শীঘ্রই আসছে"}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/wbbpe";
const TITLE = "WBBPE Bengali Medium — Primary Classes (Class 1 fully live — আমার বই)";
const DESC =
  "West Bengal Board of Primary Education (WBBPE) Bengali-medium study material on StudyMatic — notes, quizzes and practice starting from Class 1 — বাংলা, গণিত ও ইংরেজি, all now live.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

const PLANNED = [
  {
    name: "বাংলা",
    en: "Bangla (First language)",
    emoji: "📖",
    ready: true,
    href: "/wbbpe/class-1/bengali",
  },
  {
    name: "গণিত",
    en: "Ganit / Mathematics",
    emoji: "➗",
    ready: true,
    href: "/wbbpe/class-1/maths",
  },
  { name: "ইংরেজি", en: "English (Second language)", emoji: "✏️", ready: true, href: "/wbbpe/class-1/english" },
];

export default function WbbpeHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "WBBPE", path: PATH },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(TITLE, DESC, PATH)]} />
      <Breadcrumbs crumbs={crumbs} />

      <section className="relative overflow-hidden rounded-[2rem] glass border p-8 text-center shadow-xl sm:p-12">
        <span aria-hidden className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-green/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-20 right-[-2rem] h-64 w-64 rounded-full bg-cobalt/20 blur-3xl" />
        <span aria-hidden className="pointer-events-none absolute -bottom-16 left-[-2rem] h-56 w-56 rounded-full bg-amber/20 blur-3xl" />
        <div className="relative">
          <span className="chip glass text-green">📗 Bengali medium · বাংলা মাধ্যম</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            WBBPE <span className="brand-gradient">Primary</span>
          </h1>
          <p className="mx-auto mt-1 font-display text-lg text-muted">
            পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            We&apos;re expanding StudyMatic to the West Bengal Board of Primary Education, in
            Bengali medium, starting from Class 1 — built from the integrated book ‘আমার বই’
            (Amar Boi), which combines Bangla, English and Ganit — all three subjects are now live.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/wbbpe/class-1/maths"
              className="rounded-full bg-linear-to-r from-cobalt to-violet px-6 py-3 font-semibold text-white shadow-lg shadow-cobalt/25 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              শুরু করো — Class 1 গণিত
            </Link>
            <Link
              href="/cbse"
              className="rounded-full border border-white/60 bg-white/55 px-6 py-3 font-semibold text-ink backdrop-blur transition hover:text-cobalt"
            >
              Explore CBSE
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-ink">Class 1 — all subjects live (আমার বই)</h2>
          <p className="mx-auto mt-1 max-w-xl text-muted">
            শ্রেণি ১ · বাংলা, গণিত ও ইংরেজি — তিনটি বিষয়ই এখন পড়া যাবে।
          </p>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {PLANNED.map((s) =>
            s.ready && s.href ? (
              <Link
                key={s.en}
                href={s.href}
                className="card group p-5 text-center transition hover:-translate-y-1"
              >
                <div className="text-3xl" aria-hidden>{s.emoji}</div>
                <div className="mt-2 font-display text-lg font-bold text-ink group-hover:text-cobalt">
                  {s.name}
                </div>
                <div className="text-sm text-muted">{s.en}</div>
                <span className="chip mt-3 inline-flex bg-green/15 text-green">তৈরি · পড়া যাবে</span>
              </Link>
            ) : (
              <div key={s.en} className="card p-5 text-center opacity-90">
                <div className="text-3xl" aria-hidden>{s.emoji}</div>
                <div className="mt-2 font-display text-lg font-bold text-ink">{s.name}</div>
                <div className="text-sm text-muted">{s.en}</div>
                <span className="chip mt-3 inline-flex bg-amber/20 text-ink">Coming soon</span>
              </div>
            ),
          )}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          More primary classes will follow Class 1, all in the same notes-plus-quiz format — in
          Bengali.
        </p>
      </section>
    </>
  );
}

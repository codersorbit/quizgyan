import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getChapter,
  getClass,
  getSubject,
  getAdjacent,
  resolveRef,
  chapterParams,
  parseClassId,
  chapterUrl,
  subjectUrl,
} from "@/lib/content";
import {
  buildMetadata,
  breadcrumbLd,
  webPageLd,
  faqLd,
  learningResourceLd,
} from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Quiz } from "@/components/Quiz";
import { ChapterNav } from "@/components/ChapterNav";

const BOARD = "wbbpe";

export function generateStaticParams() {
  return chapterParams(BOARD);
}

type Params = Promise<{ classId: string; subject: string; chapter: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { classId, subject, chapter } = await params;
  const ch = getChapter(parseClassId(classId), subject, chapter, BOARD);
  if (!ch) return {};
  return buildMetadata({
    title: ch.seoTitle,
    description: ch.metaDescription,
    path: chapterUrl(ch.classId, ch.subject, ch.slug, BOARD),
    type: "article",
  });
}

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-10 scroll-mt-20">
      <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function WbbpeChapterPage({ params }: { params: Params }) {
  const { classId, subject, chapter } = await params;
  const id = parseClassId(classId);
  const ch = getChapter(id, subject, chapter, BOARD);
  const cls = getClass(id, BOARD);
  const subj = getSubject(id, subject, BOARD);
  if (!ch || !cls || !subj) notFound();

  const path = chapterUrl(ch.classId, ch.subject, ch.slug, BOARD);
  const { prev, next } = getAdjacent(ch);
  const related = ch.related
    .map(resolveRef)
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "WBBPE", path: "/wbbpe" },
    { name: cls.label, path: `/wbbpe/class-${id}` },
    { name: subj.name, path: subjectUrl(id, subject, BOARD) },
    { name: ch.title, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(crumbs),
          webPageLd(ch.seoTitle, ch.metaDescription, path),
          learningResourceLd(ch, path),
          faqLd(ch.faq),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <header className="flex items-start gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/cards/crest-${subj.key}.svg`}
          alt=""
          aria-hidden
          className="h-14 w-14 shrink-0 rounded-2xl shadow-md shadow-cobalt/15"
        />
        <div className="min-w-0">
          <span className="chip glass text-green">
            WBBPE · {cls.label} · {subj.name} · অধ্যায় {ch.order}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
            {ch.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{ch.overview}</p>
          {ch.lessonPlanPdf && (
            <a
              href={ch.lessonPlanPdf}
              download
              className="btn-candy sun mt-4 text-sm"
            >
              📄 শিক্ষকের লেসন প্ল্যান (PDF) ডাউনলোড
            </a>
          )}
        </div>
      </header>

      {/* On-page nav */}
      <nav aria-label="এই পাতায়" className="mt-6 flex flex-wrap gap-2 text-sm">
        {[
          ["নোট", "#notes"],
          ["কুইজ", "#quiz"],
          ["অনুশীলন", "#practice"],
          ["রিভিশন", "#revision"],
          ["প্রশ্নোত্তর", "#faq"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="chip glass text-muted transition hover:text-cobalt"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* NOTES */}
      <div id="notes" className="scroll-mt-20">
        <Section title="শেখার লক্ষ্য">
          <ul className="grid gap-2">
            {ch.objectives.map((o, i) => (
              <li key={i} className="flex gap-2.5 text-ink">
                <span aria-hidden className="mt-1 text-cobalt">✓</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="মূল ধারণা">
          <div className="grid gap-4">
            {ch.concepts.map((c, i) => (
              <div key={i} className="card p-5">
                <h3 className="font-display text-lg font-bold text-ink">{c.heading}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {ch.formulas.length > 0 && (
          <Section title="জরুরি সূত্র">
            <div className="grid gap-3 sm:grid-cols-2">
              {ch.formulas.map((f, i) => (
                <div key={i} className="card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {f.name}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-cobalt">
                    {f.formula}
                  </p>
                  {f.note && <p className="mt-1 text-sm text-muted">{f.note}</p>}
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section title="শব্দার্থ ও সংজ্ঞা">
          <dl className="grid gap-3">
            {ch.definitions.map((d, i) => (
              <div key={i} className="rounded-2xl border border-white/60 bg-white/55 p-4 shadow-sm backdrop-blur">
                <dt className="font-display font-bold text-ink">{d.term}</dt>
                <dd className="mt-0.5 leading-relaxed text-muted">{d.meaning}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="সমাধানসহ উদাহরণ">
          <div className="grid gap-4">
            {ch.examples.map((e, i) => (
              <div key={i} className="card p-5">
                <p className="font-semibold text-ink">
                  <span className="text-cobalt">প্রশ্ন {i + 1}.</span> {e.problem}
                </p>
                <p className="mt-2 leading-relaxed text-muted">
                  <span className="font-semibold text-ink">সমাধান: </span>
                  {e.solution}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {ch.commonMistakes.length > 0 && (
          <Section title="যে ভুলগুলো এড়াব">
            <ul className="grid gap-2">
              {ch.commonMistakes.map((m, i) => (
                <li key={i} className="flex gap-2.5 text-ink">
                  <span aria-hidden className="mt-1 text-coral">✕</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      {/* QUIZ */}
      <Section id="quiz" title={`${ch.title} — কুইজ`}>
        <p className="mb-4 text-muted">
          {ch.mcqs.length}টি প্রশ্ন, সঙ্গে সঙ্গে উত্তর মিলিয়ে দেখো।
        </p>
        <Quiz
          mcqs={ch.mcqs}
          title={`${ch.title} (WBBPE ${cls.label})`}
          storageKey={`${BOARD}-${ch.classId}-${ch.subject}-${ch.slug}`}
        />
      </Section>

      {/* PRACTICE */}
      <Section id="practice" title="অনুশীলন প্রশ্ন">
        <div className="grid gap-6">
          <PracticeGroup title="সংক্ষিপ্ত প্রশ্ন" items={ch.shortQuestions} />
          <PracticeGroup title="বড়ো প্রশ্ন" items={ch.longQuestions} />
          <PracticeGroup title="একটু ভেবে" items={ch.hots} />
        </div>
      </Section>

      {/* REVISION */}
      <Section id="revision" title="দ্রুত রিভিশন">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card p-5">
            <h3 className="font-display font-bold text-ink">রিভিশন নোট</h3>
            <ul className="mt-2 grid gap-1.5 text-sm text-muted">
              {ch.revisionNotes.map((n, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-cobalt">•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-display font-bold text-ink">মনে রাখার কথা</h3>
            <ul className="mt-2 grid gap-1.5 text-sm text-muted">
              {ch.keyTakeaways.map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-amber">★</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="প্রশ্নোত্তর">
        <div className="grid gap-3">
          {ch.faq.map((f, i) => (
            <details key={i} className="card p-4 [&_summary]:cursor-pointer">
              <summary className="font-display font-semibold text-ink">{f.q}</summary>
              <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <ChapterNav prev={prev} next={next} related={related} />
    </>
  );
}

function PracticeGroup({
  title,
  items,
}: {
  title: string;
  items: { q: string; a: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <div className="mt-2 grid gap-2.5">
        {items.map((it, i) => (
          <details key={i} className="rounded-2xl border border-white/60 bg-white/55 p-4 shadow-sm backdrop-blur [&_summary]:cursor-pointer">
            <summary className="font-semibold text-ink">{it.q}</summary>
            <p className="mt-2 leading-relaxed text-muted">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

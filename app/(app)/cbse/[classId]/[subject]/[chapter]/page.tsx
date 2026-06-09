import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getChapter,
  getClass,
  getSubject,
  getAdjacent,
  resolveRef,
  allChapterParams,
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

export function generateStaticParams() {
  return allChapterParams();
}

type Params = Promise<{ classId: string; subject: string; chapter: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { classId, subject, chapter } = await params;
  const ch = getChapter(parseClassId(classId), subject, chapter);
  if (!ch) return {};
  return buildMetadata({
    title: ch.seoTitle,
    description: ch.metaDescription,
    path: chapterUrl(ch.classId, ch.subject, ch.slug),
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

export default async function ChapterPage({ params }: { params: Params }) {
  const { classId, subject, chapter } = await params;
  const id = parseClassId(classId);
  const ch = getChapter(id, subject, chapter);
  const cls = getClass(id);
  const subj = getSubject(id, subject);
  if (!ch || !cls || !subj) notFound();

  const path = chapterUrl(ch.classId, ch.subject, ch.slug);
  const { prev, next } = getAdjacent(ch);
  const related = ch.related
    .map(resolveRef)
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "CBSE", path: "/cbse" },
    { name: cls.label, path: `/cbse/class-${id}` },
    { name: subj.name, path: subjectUrl(id, subject) },
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
          <span className="chip glass text-cobalt">
            Class {ch.classId} · {subj.name} · Chapter {ch.order}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
            {ch.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{ch.overview}</p>
        </div>
      </header>

      {/* On-page nav */}
      <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-2 text-sm">
        {[
          ["Notes", "#notes"],
          ["Quiz", "#quiz"],
          ["Practice", "#practice"],
          ["Revision", "#revision"],
          ["FAQ", "#faq"],
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
        <Section title="Learning objectives">
          <ul className="grid gap-2">
            {ch.objectives.map((o, i) => (
              <li key={i} className="flex gap-2.5 text-ink">
                <span aria-hidden className="mt-1 text-cobalt">✓</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Key concepts">
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
          <Section title="Important formulas">
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

        <Section title="Key definitions">
          <dl className="grid gap-3">
            {ch.definitions.map((d, i) => (
              <div key={i} className="rounded-2xl border border-white/60 bg-white/55 p-4 shadow-sm backdrop-blur">
                <dt className="font-display font-bold text-ink">{d.term}</dt>
                <dd className="mt-0.5 leading-relaxed text-muted">{d.meaning}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Solved examples">
          <div className="grid gap-4">
            {ch.examples.map((e, i) => (
              <div key={i} className="card p-5">
                <p className="font-semibold text-ink">
                  <span className="text-cobalt">Q{i + 1}.</span> {e.problem}
                </p>
                <p className="mt-2 leading-relaxed text-muted">
                  <span className="font-semibold text-ink">Solution: </span>
                  {e.solution}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Common mistakes to avoid">
          <ul className="grid gap-2">
            {ch.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2.5 text-ink">
                <span aria-hidden className="mt-1 text-coral">✕</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* QUIZ */}
      <Section id="quiz" title={`${ch.title} — MCQ Quiz`}>
        <p className="mb-4 text-muted">
          {ch.mcqs.length} questions with instant feedback. Use number keys 1–4 to answer.
        </p>
        <Quiz
          mcqs={ch.mcqs}
          title={`${ch.title} (Class ${ch.classId})`}
          storageKey={`${ch.classId}-${ch.subject}-${ch.slug}`}
        />
      </Section>

      {/* PRACTICE */}
      <Section id="practice" title="Practice questions">
        <div className="grid gap-6">
          <PracticeGroup title="Short answer" items={ch.shortQuestions} />
          <PracticeGroup title="Long answer" items={ch.longQuestions} />
          <PracticeGroup title="HOTS (Higher Order Thinking)" items={ch.hots} />
        </div>
      </Section>

      {/* REVISION */}
      <Section id="revision" title="Quick revision">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card p-5">
            <h3 className="font-display font-bold text-ink">Revision notes</h3>
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
            <h3 className="font-display font-bold text-ink">Key takeaways</h3>
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
      <Section id="faq" title="Frequently asked questions">
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

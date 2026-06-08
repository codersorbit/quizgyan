import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getClass,
  allClassParams,
  parseClassId,
  classUrl,
} from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { SubjectCard } from "@/components/cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return allClassParams();
}

type Params = Promise<{ classId: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { classId } = await params;
  const cls = getClass(parseClassId(classId));
  if (!cls) return {};
  const title = `CBSE ${cls.label} — Notes, MCQs & Quizzes`;
  const desc = `${cls.label} CBSE study material: chapter-wise notes, MCQ quizzes and practice questions for ${cls.subjects
    .map((s) => s.name)
    .join(", ")}.`;
  return buildMetadata({ title, description: desc, path: classUrl(cls.id) });
}

export default async function ClassPage({ params }: { params: Params }) {
  const { classId } = await params;
  const cls = getClass(parseClassId(classId));
  if (!cls) notFound();

  const path = classUrl(cls.id);
  const title = `CBSE ${cls.label}`;
  const desc = cls.blurb;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "CBSE", path: "/cbse" },
    { name: cls.label, path },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(title, desc, path)]} />
      <Breadcrumbs crumbs={crumbs} />
      <h1 className="font-display text-3xl font-bold text-ink">CBSE {cls.label}</h1>
      <p className="mt-2 max-w-2xl text-muted">{cls.blurb}</p>
      <h2 className="mt-8 font-display text-xl font-bold text-ink">Subjects</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {cls.subjects.map((s) => (
          <SubjectCard key={s.key} classId={cls.id} subject={s} />
        ))}
      </div>
    </>
  );
}

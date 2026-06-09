import type { Metadata } from "next";
import { CLASSES } from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { ClassImageCard } from "@/components/cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/cbse";
const TITLE = "CBSE Classes 1 & 6–10 — Notes, MCQs & Quizzes";
const DESC =
  "Browse CBSE study material for Class 1 and Classes 6, 7, 8, 9 and 10. Chapter-wise notes, MCQ quizzes and practice questions for Maths, Science, Social Science and English.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function CbseHub() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "CBSE Classes", path: PATH },
  ];
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), webPageLd(TITLE, DESC, PATH)]} />
      <Breadcrumbs crumbs={crumbs} />
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-ink">CBSE Classes</h1>
        <p className="mx-auto mt-2 max-w-2xl text-muted">
          Choose a class to see its subjects and chapters. Class 1 and Classes 6–10 are
          available now, and we&apos;re adding more chapter by chapter.
        </p>
      </div>
      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CLASSES.map((cls, i) => (
          <ClassImageCard key={cls.id} cls={cls} index={i} />
        ))}
      </div>
    </>
  );
}

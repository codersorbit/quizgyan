import type { Metadata } from "next";
import { CLASSES } from "@/lib/content";
import { buildMetadata, breadcrumbLd, webPageLd } from "@/lib/seo";
import { ClassCard } from "@/components/cards";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

const PATH = "/cbse";
const TITLE = "CBSE Classes 6 to 10 — Notes, MCQs & Quizzes";
const DESC =
  "Browse CBSE study material for Classes 6, 7, 8, 9 and 10. Chapter-wise notes, MCQ quizzes and practice questions for Maths, Science, Social Science and English.";

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
      <h1 className="font-display text-3xl font-bold text-ink">CBSE Classes</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Choose a class to see its subjects and chapters. We&apos;re starting with Classes 6–10,
        where most CBSE exam preparation happens.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {CLASSES.map((cls, i) => (
          <ClassCard key={cls.id} cls={cls} index={i} />
        ))}
      </div>
    </>
  );
}

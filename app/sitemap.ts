import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import {
  ALL_CLASSES,
  allAuthoredChapters,
  classUrl,
  subjectUrl,
  chapterUrl,
} from "@/lib/content";
import { TOOLS, toolUrl } from "@/lib/tools/registry";
import { worksheetLandingParams, worksheetSubjectParams } from "@/lib/tools/worksheet-bank";
import { worksheetLandingUrl, worksheetSubjectUrl } from "@/lib/tools/worksheet-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string) => `${site.url}${path === "/" ? "" : path}`;

  const staticPages: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: u("/cbse"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: u("/wbbpe"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: u("/daily"), lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: u("/notes"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: u("/mcqs"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Class + subject pages across every board (CBSE and WBBPE).
  const classPages: MetadataRoute.Sitemap = ALL_CLASSES.map((c) => ({
    url: u(classUrl(c.id, c.board)),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const subjectPages: MetadataRoute.Sitemap = ALL_CLASSES.flatMap((c) =>
    c.subjects.map((s) => ({
      url: u(subjectUrl(c.id, s.key, c.board)),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  );

  // Chapter pages — use each chapter's own board so URLs are correct.
  const chapterPages: MetadataRoute.Sitemap = allAuthoredChapters().map((c) => ({
    url: u(chapterUrl(c.classId, c.subject, c.slug, c.board ?? "cbse")),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Tools hub + each tool page.
  const toolsPages: MetadataRoute.Sitemap = [
    { url: u("/tools"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...TOOLS.map((t) => ({
      url: u(toolUrl(t.slug)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // Programmatic CGPA variant pages: 4.0 → 10.0 in 0.1 steps (61 pages).
  const cgpaVariantPages: MetadataRoute.Sitemap = [];
  for (let i = 40; i <= 100; i++) {
    const v = (i / 10).toFixed(1);
    cgpaVariantPages.push({
      url: u(`${toolUrl("cgpa-to-percentage")}/${v}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  // Programmatic multiplication pages: table-of-2 … table-of-30 (29) + chart.
  const multiplicationVariantPages: MetadataRoute.Sitemap = [];
  for (let n = 2; n <= 30; n++) {
    multiplicationVariantPages.push({
      url: u(`${toolUrl("multiplication-table")}/table-of-${n}`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }
  multiplicationVariantPages.push({
    url: u(`${toolUrl("multiplication-table")}/printable-chart`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.55,
  });
  console.log(`[sitemap] multiplication variant pages: ${multiplicationVariantPages.length}`);

  // Programmatic resizer landing pages: resize-to-{10,20,50,100,200,500}kb + passport.
  const resizerVariantPages: MetadataRoute.Sitemap = [];
  for (const kb of [10, 20, 50, 100, 200, 500]) {
    resizerVariantPages.push({
      url: u(`${toolUrl("photo-signature-resizer")}/resize-to-${kb}kb`),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }
  resizerVariantPages.push({
    url: u(`${toolUrl("photo-signature-resizer")}/passport-size-photo`),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.55,
  });
  console.log(`[sitemap] resizer variant pages: ${resizerVariantPages.length}`);

  // Programmatic worksheet landing pages (one per qualifying chapter) and the
  // per-subject roll-ups. Counts are logged below for the Phase-3 report.
  const worksheetChapterPages: MetadataRoute.Sitemap = worksheetLandingParams().map((p) => ({
    url: u(worksheetLandingUrl(p.board, p.classId, p.subject, p.chapter)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  const worksheetSubjectPages: MetadataRoute.Sitemap = worksheetSubjectParams().map((p) => ({
    url: u(worksheetSubjectUrl(p.board, p.classId, p.subject)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.55,
  }));
  console.log(
    `[sitemap] worksheet landing pages: ${worksheetChapterPages.length} chapters + ${worksheetSubjectPages.length} subject roll-ups`,
  );

  return [
    ...staticPages,
    ...classPages,
    ...subjectPages,
    ...chapterPages,
    ...toolsPages,
    ...cgpaVariantPages,
    ...multiplicationVariantPages,
    ...resizerVariantPages,
    ...worksheetChapterPages,
    ...worksheetSubjectPages,
  ];
}

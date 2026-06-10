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

  return [
    ...staticPages,
    ...classPages,
    ...subjectPages,
    ...chapterPages,
    ...toolsPages,
    ...cgpaVariantPages,
  ];
}

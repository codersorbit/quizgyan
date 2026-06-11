export type BoardStatus = "available" | "coming-soon";

export type Board = {
  key: string;
  /** Short label, e.g. "CBSE". */
  name: string;
  /** Full name spelled out. */
  fullName: string;
  /** Medium of instruction. */
  medium: string;
  /** Hub URL for the board. */
  href: string;
  status: BoardStatus;
  blurb: string;
  /** Brand accent (hex) for the board card. */
  accent: string;
  emoji: string;
};

export const BOARDS: Board[] = [
  {
    key: "cbse",
    name: "CBSE",
    fullName: "Central Board of Secondary Education",
    medium: "English medium",
    href: "/cbse",
    status: "available",
    blurb:
      "NCERT-aligned notes, MCQ quizzes and a daily challenge for Class 1 and Classes 6–10.",
    accent: "#0f2a5c",
    emoji: "📘",
  },
  {
    key: "wbbpe",
    name: "WBBPE",
    fullName: "West Bengal Board of Primary Education",
    medium: "Bengali medium · বাংলা মাধ্যম",
    href: "/wbbpe",
    status: "available",
    blurb:
      "প্রাথমিক বাংলা মাধ্যম — notes, quizzes and practice for primary classes in Bengali (বাংলা, গণিত ও ইংরেজি), built from আমার বই.",
    accent: "#1faf6b",
    emoji: "📗",
  },
];

export function getBoard(key: string): Board | undefined {
  return BOARDS.find((b) => b.key === key);
}

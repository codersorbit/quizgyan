import { ogCard, OG_SIZE } from "@/lib/tools/og";

export const alt = "Printable multiplication chart";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Og() {
  return ogCard({
    icon: "✖️",
    title: "Multiplication Chart 1–12",
    subtitle: "Free printable times-table chart",
    urlPath: "studymatic.in/tools",
  });
}

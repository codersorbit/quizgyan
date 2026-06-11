import { ogCard, OG_SIZE } from "@/lib/tools/og";

export const alt = "Passport-size photo maker";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Og() {
  return ogCard({
    icon: "🖼️",
    title: "Passport-Size Photo",
    subtitle: "3.5 × 4.5 cm — private, in your browser",
    urlPath: "studymatic.in/tools",
  });
}

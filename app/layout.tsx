import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { organizationLd, websiteLd } from "@/lib/seo";
import { StreakMigration } from "@/components/StreakMigration";
import TopNav from "@/components/home/TopNav";
import FooterSection from "@/components/home/FooterSection";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  verification: { google: site.gscVerification },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* React 19 hoists these font links into <head>. No build-time fetch. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Bagel+Fat+One&family=Chewy&family=Pacifico&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css"
        />
        <JsonLd data={[websiteLd(), organizationLd()]} />
        <StreakMigration />
        <TopNav />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}

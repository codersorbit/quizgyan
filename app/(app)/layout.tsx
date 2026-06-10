// Site chrome (TopNav + FooterSection) now lives in the root layout so every
// page shares the homepage's header, footer and overall feel. This layout only
// constrains content width and clears the fixed TopNav (~76px tall).
export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-5xl px-4 pt-24 pb-14">{children}</main>
  );
}

"use client";
export default function TopNav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 md:px-12 py-5 bg-white border-b border-black/5"
      style={{ zIndex: 9999 }}
    >
      <a
        href="/"
        className="flex items-center gap-2 text-[#1A1A1A] whitespace-nowrap cursor-pointer"
      >
        <span className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#FFE9F2] text-[#FF6FB5]">
          <i className="ri-shining-2-fill text-lg" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FFD500] border-2 border-white" />
        </span>
        <span
          className="text-2xl md:text-[26px] leading-none"
          style={{ fontFamily: "'Bagel Fat One', cursive", letterSpacing: "0.02em" }}
        >
          StudyMatic
        </span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-[#1A1A1A]/75 text-sm">
        <a href="/cbse" className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap cursor-pointer">CBSE</a>
        <a href="/wbbpe" className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap cursor-pointer">WBBPE</a>
        <a href="/daily" className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap cursor-pointer">Daily</a>
        <a href="#boards" className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap cursor-pointer">All classes</a>
      </nav>
      <a
        href="/cbse"
        className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-4 py-2 text-sm text-white hover:bg-[#FF6FB5] transition-colors whitespace-nowrap cursor-pointer"
      >
        Start learning
        <i className="ri-arrow-right-up-line w-4 h-4 flex items-center justify-center" />
      </a>
      <a
        href="/cbse"
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-black/15 text-[#1A1A1A] cursor-pointer"
        aria-label="Browse classes"
      >
        <i className="ri-menu-line" />
      </a>
    </header>
  );
}

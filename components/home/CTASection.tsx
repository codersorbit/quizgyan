"use client";
export default function CTASection() {
  return (
    <section id="contact" className="bg-white pb-20 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#E63946] min-h-[340px] md:min-h-[400px] flex items-center">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD500]/15 rounded-full -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-white/10 rounded-full translate-y-1/2" />
          <i className="ri-shining-2-fill absolute top-10 left-10 text-[#FFD500]/40 text-3xl" />
          <i className="ri-shining-2-fill absolute bottom-12 left-1/2 text-white/30 text-xl" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full px-8 md:px-14 py-10 md:py-0">
            {/* Left text */}
            <div>
              <span
                className="inline-block text-xs tracking-[0.3em] uppercase text-white/80 mb-4"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                ★ Ready to start?
              </span>
              <h2
                className="text-3xl md:text-[40px] text-white leading-[1.1] mb-6"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                Pick your class and open your first chapter — it’s{" "}
                <span className="text-[#FFD500]">free, forever</span>.
              </h2>
              <a
                href="/cbse"
                className="inline-flex items-center gap-2 bg-white text-[#E63946] hover:bg-[#FFD500] hover:text-[#0F2A5C] px-7 py-3.5 rounded-full text-sm transition-colors whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                <i className="ri-arrow-right-line text-base" />
                Browse classes
              </a>
            </div>

            {/* Right photo */}
            <div className="relative h-[260px] md:h-[400px] hidden md:block">
              <img
                src="https://readdy.ai/api/search-image?query=Two%20happy%20cheerful%20preschool%20kids%20sitting%20together%20on%20floor%20laughing%20and%20playing%20with%20colorful%20toys%20and%20toy%20cars%2C%20wearing%20clean%20white%20school%20uniform%20shirts%2C%20bright%20joyful%20smiles%2C%20isolated%20cutout%20on%20solid%20pure%20red%20background%2C%20professional%20childhood%20studio%20portrait%20photography%2C%20vibrant%20natural%20soft%20lighting%2C%20sharp%20focus%2C%20simple%20clean%20background%20kindergarten%20education%20theme&width=900&height=900&seq=cta-kids-01&orientation=squarish"
                alt="Happy kids playing"
                className="absolute right-0 bottom-0 h-full w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
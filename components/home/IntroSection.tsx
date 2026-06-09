"use client";
export default function IntroSection() {
  return (
    <section id="story" className="relative bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left: copy */}
        <div className="order-2 md:order-1">
          <span
            className="inline-block text-xs tracking-[0.3em] uppercase text-[#E63946] mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            ★ Welcome to StudyMatic
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#0F2A5C] leading-[1.05] mb-6"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            Understand it. <br />
            Then quiz it.
          </h2>
          <p
            className="text-[#3A4A6B] text-base md:text-[17px] leading-relaxed mb-8 max-w-lg"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 400 }}
          >
            Every chapter becomes clear notes and a quick, friendly quiz — in English and বাংলা. We just hand you the questions and watch the “aha!” happen.
          </p>
          <a
            href="/cbse"
            className="inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#c92d3a] text-white px-7 py-3.5 rounded-full text-sm transition-colors whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            Browse classes
            <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
          </a>
        </div>

        {/* Right: photo with playful shapes */}
        <div className="order-1 md:order-2 relative h-[420px] md:h-[520px]">
          {/* Yellow burst shape */}
          <div
            className="absolute top-4 right-2 w-[78%] h-[78%] bg-[#FFD500]"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 18%, 80% 11%, 78% 32%, 95% 42%, 80% 56%, 92% 73%, 70% 73%, 64% 95%, 50% 80%, 36% 95%, 30% 73%, 8% 73%, 20% 56%, 5% 42%, 22% 32%, 20% 11%, 39% 18%)",
            }}
          />
          {/* Red half-circle */}
          <div className="absolute bottom-6 left-2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#E63946]" />
          {/* Photo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://readdy.ai/api/search-image?query=Happy%20joyful%20toddler%20kid%20boy%20holding%20colorful%20pencils%20and%20paintbrushes%2C%20wearing%20clean%20white%20school%20uniform%20shirt%2C%20laughing%20with%20bright%20smile%2C%20isolated%20cutout%20on%20solid%20pure%20clean%20white%20background%2C%20professional%20studio%20portrait%2C%20vibrant%20cheerful%20educational%20preschool%20kindergarten%20photography%2C%20natural%20soft%20lighting%2C%20sharp%20focus%2C%20high%20resolution%20childhood%20portrait%20photography%20with%20simple%20minimal%20background&width=900&height=1100&seq=intro-kid-01&orientation=portrait"
              alt="Happy preschool kid with paintbrush"
              className="relative z-10 max-h-[480px] w-auto object-contain object-bottom"
            />
          </div>
          {/* Doodly sticker badge */}
          <div className="absolute top-6 left-6 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-[#FFD500] flex items-center justify-center z-20 rotate-[-12deg]">
            <div className="text-center leading-none">
              <span
                className="block text-[#E63946] text-xs"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
              >
                always
              </span>
              <span
                className="block text-[#0F2A5C] text-lg"
                style={{ fontFamily: "'Bagel Fat One', cursive" }}
              >
                free
              </span>
            </div>
          </div>
          {/* Tiny stars */}
          <i className="ri-shining-2-fill absolute top-2 right-12 text-[#E63946] text-2xl" />
          <i className="ri-shining-2-fill absolute bottom-12 right-4 text-[#0F2A5C] text-xl" />
        </div>
      </div>
    </section>
  );
}
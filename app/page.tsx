import TopNav from "@/components/home/TopNav";
import HeroMaskSection from "@/components/home/HeroMaskSection";
import IntroSection from "@/components/home/IntroSection";
import StagesSection from "@/components/home/StagesSection";
import EduTechSection from "@/components/home/EduTechSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import EnglishProgramSection from "@/components/home/EnglishProgramSection";
import ClassesSection from "@/components/home/ClassesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import FooterSection from "@/components/home/FooterSection";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <div className="relative bg-[#FFD500]">
        <HeroMaskSection />
        <div className="relative z-[40]">
          <IntroSection />
          <StagesSection />
          <EduTechSection />
          <ProgramsSection />
          <EnglishProgramSection />
          <ClassesSection />
          <TestimonialsSection />
          <CTASection />
          <FooterSection />
        </div>
      </div>
    </>
  );
}

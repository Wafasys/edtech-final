import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ProgramsSection from "./ProgramsSection";
import TutorsSection from "./TutorsSection";
import QuoteSection from "./QuoteSection";
import BlogSection from "./BlogSection";

export default function HomePage() {
  return (
    <div className="design-file">
      <div className="design-file-child"></div>
      <HeroSection />
      <main className="frame-main">
        <ServicesSection />
        <ProgramsSection />
        <TutorsSection />
        <QuoteSection />
        <BlogSection />
      </main>
    </div>
  );
}

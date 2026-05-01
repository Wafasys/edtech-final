import HeroSection from "./HeroSection";
import ProgramsSection from "./ProgramsSection";
import ServicesSection from "./ServicesSection";
import TutorsSection from "./TutorsSection";
import QuoteSection from "./QuoteSection";
import BlogSection from "./BlogSection";

export default function HomePage() {
  return (
    <div className="design-file">
      <div className="design-file-child"></div>
      <HeroSection />
      <main className="frame-main">
        <ProgramsSection />
        <ServicesSection />
        <TutorsSection />
        <QuoteSection />
        <BlogSection />
      </main>
    </div>
  );
}

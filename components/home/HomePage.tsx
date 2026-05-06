import HeroSection from "./HeroSection";
import ProgramsSection from "./ProgramsSection";
import ServicesSection from "./ServicesSection";
import TutorsSection from "./TutorsSection";
import QuoteSection from "./QuoteSection";
import BlogSection from "./BlogSection";

export default function HomePage() {
  return (
    <div className="hp-page">
      <HeroSection />
      <ProgramsSection />
      <ServicesSection />
      <TutorsSection />
      <QuoteSection />
      <BlogSection />
    </div>
  );
}

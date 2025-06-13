import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SkillsMatrix } from "@/components/sections/skills-matrix";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsCarousel } from "@/components/sections/certifications-carousel";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ContactForm } from "@/components/sections/contact-form";
import { ChatAssistantWidget } from "@/components/sections/chat-assistant-widget";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsMatrix />
        <ProjectsSection />
        <CertificationsCarousel />
        <TechStackSection />
        <ContactForm />
      </main>
      <ChatAssistantWidget />
      <Footer />
      {/* Analytics & Insights Integration: 
          A real implementation would involve integrating a third-party analytics service 
          like Google Analytics, Plausible, or Vercel Analytics. 
          This typically involves adding a script to the layout and potentially tracking specific events.
          Example placeholder: <AnalyticsScript /> 
      */}
    </div>
  );
}

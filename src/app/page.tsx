import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <Footer />
    </main>
  );
}

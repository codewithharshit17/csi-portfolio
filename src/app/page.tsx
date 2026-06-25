import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-wrapper bg-[#0c0c0c] text-[#D7E2EA] font-sans overflow-x-clip min-h-screen">
      <ScrollyCanvas />
      <AboutSection />
      <SkillsSection />
      <Projects />
      <Footer />
    </main>
  );
}

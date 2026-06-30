import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (//encapsulate the entire page in a main tag with a background color of #0c0c0c and text color of #D7E2EA, font family of sans-serif, overflow-x set to clip, minimum height of screen, and position relative
    <main className="main-wrapper bg-[#0c0c0c] text-[#D7E2EA] font-sans overflow-x-clip min-h-screen relative">
      <AnimatedBackground />
      <ScrollyCanvas />
      <AboutSection />
      <SkillsSection />
      <Projects />
      <Footer />
    </main>
  );
}

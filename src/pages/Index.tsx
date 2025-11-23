import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EventsSection from "@/components/sections/EventsSection";
import JoinSection from "@/components/sections/JoinSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EventsSection />
        <JoinSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

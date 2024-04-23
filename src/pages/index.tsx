import AboutMeSection from "@/components/AboutMeSection";
import Header from "@/components/Common/Header";
import HubsSection from "@/components/HubsSection";
import LandingSection from "@/components/LandingSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

function Home() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
        <AboutMeSection />
        <SkillsSection />
        <HubsSection />
        <ProjectSection />
      </main>
    </>
  );
}

export default Home;

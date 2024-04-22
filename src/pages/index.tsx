import AboutMeSection from "@/components/AboutMeSection";
import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";
import SkillsSection from "@/components/SkillsSection";

function Home() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
        <AboutMeSection />
        <SkillsSection />
      </main>
    </>
  );
}

export default Home;

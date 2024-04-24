import AboutMeSection from "@/components/AboutMeSection";
import Header from "@/components/Common/Header";
import HubsSection from "@/components/HubsSection";
import LandingSection from "@/components/LandingSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import useScrollToSection from "@/hooks/useScrollToSection";

function Home() {
  const {
    scrollToSection,
    LandingSectionRef,
    AboutMeSectionRef,
    SkillsSectionRef,
    HubsSectionRef,
    ProjectSectionRef,
  } = useScrollToSection();

  return (
    <>
      <Header onClick={scrollToSection} />
      <main>
        <LandingSection ref={LandingSectionRef} />
        <AboutMeSection ref={AboutMeSectionRef} />
        <SkillsSection ref={SkillsSectionRef} />
        <HubsSection ref={HubsSectionRef} />
        <ProjectSection ref={ProjectSectionRef} />
        {/* <CareerSection /> */}
      </main>
    </>
  );
}

export default Home;

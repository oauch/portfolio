import { useRef } from "react";

const HEADER_HEIGHT = 90;

function useScrollToSection() {
  const LandingSectionRef = useRef<HTMLDivElement>(null);
  const AboutMeSectionRef = useRef<HTMLDivElement>(null);
  const SkillsSectionRef = useRef<HTMLDivElement>(null);
  const HubsSectionRef = useRef<HTMLDivElement>(null);
  const ProjectSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    switch (index) {
      case 0:
        return window.scrollTo({
          top: LandingSectionRef.current?.offsetTop! - HEADER_HEIGHT,
          behavior: "smooth",
        });
      case 1:
        return window.scrollTo({
          top: AboutMeSectionRef.current?.offsetTop! - HEADER_HEIGHT,
          behavior: "smooth",
        });
      case 2:
        return window.scrollTo({
          top: SkillsSectionRef.current?.offsetTop! - HEADER_HEIGHT,
          behavior: "smooth",
        });
      case 3:
        return window.scrollTo({
          top: HubsSectionRef.current?.offsetTop! - HEADER_HEIGHT,
          behavior: "smooth",
        });
      case 4:
        return window.scrollTo({
          top: ProjectSectionRef.current?.offsetTop! - HEADER_HEIGHT,
          behavior: "smooth",
        });
    }
  };
  return {
    LandingSectionRef,
    AboutMeSectionRef,
    SkillsSectionRef,
    HubsSectionRef,
    ProjectSectionRef,
    scrollToSection,
  };
}

export default useScrollToSection;

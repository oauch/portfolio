import Flex from "@/components/Common/Flex";
import ProjectInfo from "@/components/Project/ProjectInfo";
import ProjectName from "@/components/Project/ProjectName";
import { COLORS } from "@/styles/colors";
import { TabletSize } from "@/styles/mediaQuery";
import styled from "@emotion/styled";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ProjectWrapperProps {
  project: {
    NAME: string;
    DATE: string;
    HEADCOUNT: number;
    GITHUB: string;
    URL: string;
    SKILLS: string[];
    IMAGES: { src: StaticImageData; alt: string }[];
  };
  children: ReactNode;
}

function ProjectWrapper({ project, children }: ProjectWrapperProps) {
  const { NAME, DATE, HEADCOUNT, IMAGES, SKILLS, GITHUB, URL } = project;
  return (
    <Wrapper isRow={false} justify="end" gap={20}>
      <ProjectName name={NAME} date={DATE} headCount={HEADCOUNT} />
      <ProjectInWrapper align="start" gap={30}>
        <ProjectInfo
          images={IMAGES}
          skills={SKILLS}
          github={GITHUB}
          url={URL}
        />
        <Flex isRow={false} align="start" gap={20}>
          {children}
        </Flex>
      </ProjectInWrapper>
    </Wrapper>
  );
}

export default ProjectWrapper;

const Wrapper = styled(Flex)`
  width: 1200px;
  padding: 30px;
  border-radius: 20px;
  background-color: ${COLORS.WHITE};

  ${TabletSize} {
    width: 100%;
  }
`;

const ProjectInWrapper = styled(Flex)`
  ${TabletSize} {
    flex-direction: column;
    align-items: center;
  }
`;

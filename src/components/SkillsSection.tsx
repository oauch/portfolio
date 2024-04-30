import Flex from "@/components/Common/Flex";
import Section from "@/components/Common/Section";
import SectionTitle from "@/components/Common/SectionTitle";
import Skills from "@/components/Skill/Skills";
import useScrollY from "@/hooks/useScrollY";
import { COLORS } from "@/styles/colors";
import { MobileSize } from "@/styles/mediaQuery";

import styled from "@emotion/styled";
import { useMotionValueEvent } from "framer-motion";
import { forwardRef } from "react";

const animate = { x: 0, opacity: 1 };
const leftInitial = { x: -100, opacity: 0 };
const rightInitial = { x: 100, opacity: 0 };

const SkillsSection = forwardRef<HTMLElement, {}>(function (_, ref) {
  const { scrollY, scrollAnimation, scrollAnimation2 } = useScrollY();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 750) {
      scrollAnimation.start(animate);
      scrollAnimation2.start(animate);
    } else {
      scrollAnimation.start(leftInitial);
      scrollAnimation2.start(rightInitial);
    }
  });
  return (
    <Section ref={ref} bgColor={COLORS.GREEN_1A}>
      <SectionTitle title="Skills" color={COLORS.SKILLS} />
      <SkillWrapper>
        <Skills name={"FrontEnd"} animation={scrollAnimation} />
        <Flex isRow={false} gap={20}>
          <Skills name={"Version Control"} animation={scrollAnimation2} />
          <Skills name={"Communication"} animation={scrollAnimation2} />
        </Flex>
      </SkillWrapper>
    </Section>
  );
});

export default SkillsSection;

const SkillWrapper = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 25px;

  ${MobileSize} {
    flex-direction: column;
    align-items: center;
  }
`;

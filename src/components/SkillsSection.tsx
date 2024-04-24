import Section from "@/components/Common/Section";
import Text from "@/components/Common/Text";
import { USER } from "@/fillMe";
import { COLORS } from "@/styles/colors";

import ImgWrapper from "@/components/Skill/ImgWrapper";
import Skills from "@/components/Skill/Skills";
import useScrollY from "@/hooks/useScrollY";
import styled from "@emotion/styled";
import { motion, useMotionValueEvent } from "framer-motion";
import Flex from "./Common/Flex";

const animate = { x: 0, opacity: 1 };
const leftInitial = { x: -100, opacity: 0 };
const rightInitial = { x: 100, opacity: 0 };

function SkillsSection() {
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
    <Section bgColor={COLORS.SKILLS_BG}>
      <Text fs={4.5} fw={800} color={COLORS.SKILLS}>
        Skills
      </Text>
      <SkillWrapper>
        <motion.div animate={scrollAnimation}>
          <Skills name={"FrontEnd"}>
            <ImgWrapper items={USER.SKILLS.FRONT_END} />
          </Skills>
        </motion.div>
        <Flex isRow={false} gap={20}>
          <motion.div animate={scrollAnimation2}>
            <Skills name={"Version Control"}>
              <ImgWrapper items={USER.SKILLS.VERSION} />
            </Skills>
          </motion.div>
          <motion.div animate={scrollAnimation2}>
            <Skills name={"Communication"}>
              <ImgWrapper items={USER.SKILLS.COMMUNICATION} />
            </Skills>
          </motion.div>
        </Flex>
      </SkillWrapper>
    </Section>
  );
}

export default SkillsSection;

const SkillWrapper = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 25px;
`;

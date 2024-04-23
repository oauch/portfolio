import Section from "@/components/Common/Section";
import Text from "@/components/Common/Text";
import { USER } from "@/fillMe";
import { COLORS } from "@/styles/colors";

import ImgWrapper from "@/components/Skill/ImgWrapper";
import Skills from "@/components/Skill/Skills";
import styled from "@emotion/styled";
import Flex from "./Common/Flex";

function SkillsSection() {
  return (
    <Section height={700} bgColor={COLORS.SKILLS_BG}>
      <Text fs={4.5} fw={800} color={COLORS.SKILLS}>
        Skills
      </Text>
      <SkillWrapper>
        <Skills name={"FrontEnd"}>
          <ImgWrapper items={USER.SKILLS.FRONT_END} />
        </Skills>
        <Flex isRow={false} gap={20}>
          <Skills name={"Version Control"}>
            <ImgWrapper items={USER.SKILLS.VERSION} />
          </Skills>
          <Skills name={"Communication"}>
            <ImgWrapper items={USER.SKILLS.COMMUNICATION} />
          </Skills>
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

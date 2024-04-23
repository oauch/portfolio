import Section from "@/components/Common/Section";
import Text from "@/components/Common/Text";
import { User } from "@/fillMe";
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
          <ImgWrapper items={User.skills.frontEnd} />
        </Skills>
        <Flex isRow={false} gap={20}>
          <Skills name={"Version Control"}>
            <ImgWrapper items={User.skills.version} />
          </Skills>
          <Skills name={"Communication"}>
            <ImgWrapper items={User.skills.communication} />
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

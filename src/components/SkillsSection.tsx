import Section from "@/components/Section";
import Text from "@/components/Text";
import { User } from "@/fillMe";
import { COLORS } from "@/styles/colors";

import ImgWrapper from "@/components/ImgWrapper";
import Skills from "@/components/Skills";
import styled from "@emotion/styled";

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
        <Skills name={"Version Control"}>
          <ImgWrapper items={User.skills.version} />
        </Skills>
        <Skills name={"Communication"}>
          <ImgWrapper items={User.skills.communication} />
        </Skills>
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

import Flex from "@/components/Flex";
import Text from "@/components/Text";
import { COLORS } from "@/styles/colors";
import { DefaultProps } from "@/types/default";
import styled from "@emotion/styled";

interface SkillsProps extends DefaultProps {
  name: string;
}

function Skills({ name, children }: SkillsProps) {
  return (
    <Wrapper>
      <InWrapper>
        <Title fs={2.8} fw={600} color={COLORS.SKILLS_TITLE}>
          {name}
        </Title>
        {children}
      </InWrapper>
    </Wrapper>
  );
}

export default Skills;

const Wrapper = styled(Flex)`
  margin-top: 30px;
`;

const InWrapper = styled.div`
  padding: 15px;
  border-radius: 15px;
  background-color: ${COLORS.WHITE};
`;

const Title = styled(Text)`
  border-bottom: 2px outset ${COLORS.WHITE};
`;

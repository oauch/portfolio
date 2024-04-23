import Flex from "@/components/Common/Flex";
import Text from "@/components/Common/Text";
import { COLORS } from "@/styles/colors";
import { DefaultProps } from "@/types/default";
import styled from "@emotion/styled";

interface SkillsProps extends DefaultProps {
  name: string;
}

function Skills({ name, children }: SkillsProps) {
  return (
    <Flex>
      <InWrapper>
        <Title fs={2.8} fw={600} color={COLORS.SKILLS_TITLE}>
          {name}
        </Title>
        {children}
      </InWrapper>
    </Flex>
  );
}

export default Skills;

const InWrapper = styled.div`
  padding: 15px;
  border-radius: 15px;
  background-color: ${COLORS.WHITE};
  box-shadow: 3px 3px 3px 3px ${COLORS.GRAY};
`;

const Title = styled(Text)`
  border-bottom: 2px outset ${COLORS.WHITE};
`;

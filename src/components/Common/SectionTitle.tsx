import Text from "@/components/Common/Text";
import { MobileSize } from "@/styles/mediaQuery";
import styled from "@emotion/styled";

interface SectionTitleProps {
  title: string;
  color?: string;
}

function SectionTitle({ title, color }: SectionTitleProps) {
  return (
    <Wrapper fs={4.5} fw={800} color={color}>
      {title}
    </Wrapper>
  );
}

export default SectionTitle;

const Wrapper = styled(Text)`
  ${MobileSize} {
    font-size: 4rem;
  }
`;

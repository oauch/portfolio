import { COLORS } from "@/styles/colors";
import { SectionProps } from "@/types/section";
import styled from "@emotion/styled";

function Section({ children, ...props }: SectionProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Section;

const Wrapper = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height}px;
  border-radius: 20px;
  background-color: ${({ bgColor = COLORS.WHITE }) => bgColor};
`;

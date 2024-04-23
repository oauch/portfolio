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
  padding: 20px;
  gap: 50px;
  height: ${({ height }) => height}px;
  background-color: ${({ bgColor = COLORS.WHITE }) => bgColor};
`;

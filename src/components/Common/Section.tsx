import { COLORS } from "@/styles/colors";
import { SectionProps } from "@/types/section";
import styled from "@emotion/styled";

function Section({ children, ...props }: SectionProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Section;

const Wrapper = styled.section<SectionProps>`
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 80px 20px;
  background-color: ${({ bgColor = COLORS.WHITE }) => bgColor};
`;

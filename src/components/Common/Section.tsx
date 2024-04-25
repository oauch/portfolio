import { COLORS } from "@/styles/colors";
import { SectionProps } from "@/types/section";
import styled from "@emotion/styled";
import { forwardRef } from "react";

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, ...props },
  ref
) {
  return (
    <Wrapper ref={ref} {...props}>
      {children}
    </Wrapper>
  );
});

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
  overflow: hidden;
`;

import { FlexProps } from "@/types/flex";
import { AlignCovert, JustifyConvert } from "@/utils/covert";
import styled from "@emotion/styled";

function Flex({ children, ...props }: FlexProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Flex;

const Wrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ isRow = true }) => (isRow ? "row" : "column")};
  justify-content: ${({ justify = "center" }) => JustifyConvert(justify)};
  align-items: ${({ align = "center" }) => AlignCovert(align)};
  gap: ${({ gap }) => gap && `${gap}px`};
`;

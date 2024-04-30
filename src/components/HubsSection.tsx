import Flex from "@/components/Common/Flex";
import Section from "@/components/Common/Section";
import SectionTitle from "@/components/Common/SectionTitle";
import HubsLink from "@/components/Hubs/HubLink";
import { USER } from "@/fillMe";
import { COLORS } from "@/styles/colors";
import { MobileSize } from "@/styles/mediaQuery";

import styled from "@emotion/styled";
import { forwardRef } from "react";

const HubsSection = forwardRef<HTMLElement, {}>(function (_, ref) {
  return (
    <Section ref={ref} bgColor={COLORS.BLACK}>
      <SectionTitle title="Hubs" color={COLORS.WHITE} />
      <HubsWrapper gap={30}>
        <HubsLink path={USER.HUBS.GITHUB}>
          <li>프로젝트 소스 코드</li>
          <li>알고리즘 문제 풀이 소스 코드</li>
        </HubsLink>
        <HubsLink path={USER.HUBS.BLOG}>
          <li>공부한 내용 정리</li>
          <li>이슈 발생시, 오류 해결 방법</li>
        </HubsLink>
      </HubsWrapper>
    </Section>
  );
});

export default HubsSection;

const HubsWrapper = styled(Flex)`
  ${MobileSize} {
    flex-direction: column;
  }
`;

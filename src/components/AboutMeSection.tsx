import Flex from "@/components/Common/Flex";
import Section from "@/components/Common/Section";
import SectionTitle from "@/components/Common/SectionTitle";
import Text from "@/components/Common/Text";
import { USER } from "@/fillMe";
import useMario from "@/hooks/useMario";
import { COLORS } from "@/styles/colors";
import { MobileSize } from "@/styles/mediaQuery";

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const InfoData = [
  { 이름: USER.NAME },
  { 생년월일: USER.BIRTH },
  { 연락처: USER.EMAIL },
];

const AboutMeSection = forwardRef<HTMLElement, {}>(function (_, ref) {
  const { initial, scrollAnimation } = useMario(300);
  return (
    <Section bgColor={COLORS.GRAY_F5} ref={ref}>
      <SectionTitle title="About Me" />
      <InfoWrapper justify="between">
        {InfoData.map((obj) =>
          Object.entries(obj).map(([key, value]) => (
            <Info key={key} initial={initial} animate={scrollAnimation}>
              <Title fs={3} fw={600}>
                {key}
              </Title>
              <Text fs={2.5}>{value}</Text>
            </Info>
          ))
        )}
      </InfoWrapper>
    </Section>
  );
});
export default AboutMeSection;

const InfoWrapper = styled(Flex)`
  width: 100%;

  ${MobileSize} {
    flex-direction: column;
    gap: 50px;
  }
`;

const Info = styled(motion.div)`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MobileSize} {
    width: 100%;
  }
`;

const Title = styled(Text)`
  margin-bottom: 10px;
`;

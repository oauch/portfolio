import Flex from "@/components/Common/Flex";
import Section from "@/components/Common/Section";
import SectionTitle from "@/components/Common/SectionTitle";
import Text from "@/components/Common/Text";
import { USER } from "@/fillMe";
import useMario from "@/hooks/useMario";
import { COLORS } from "@/styles/colors";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

const InfoData = [
  { 이름: USER.NAME },
  { 생년월일: USER.BIRTH },
  { 연락처: USER.EMAIL },
];

function AboutMeSection() {
  const { initial, scrollAnimation } = useMario(300);
  return (
    <Section bgColor={COLORS.GRAY_F5}>
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
}
export default AboutMeSection;

const InfoWrapper = styled(Flex)`
  width: 100%;
`;

const Info = styled(motion.div)`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Text)`
  margin-bottom: 10px;
`;

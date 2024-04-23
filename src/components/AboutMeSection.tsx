import Flex from "@/components/Common/Flex";
import Section from "@/components/Common/Section";
import Text from "@/components/Common/Text";
import { USER } from "@/fillMe";

import styled from "@emotion/styled";

const InfoData = [
  { 이름: USER.NAME },
  { 생년월일: USER.BIRTH },
  { 연락처: USER.EMAIL },
];

function AboutMeSection() {
  return (
    <Section height={350}>
      <Text fs={4.5} fw={800}>
        About Me
      </Text>
      <InfoWrapper justify="between">
        {InfoData.map((obj) =>
          Object.entries(obj).map(([key, value]) => (
            <Info key={key} isRow={false} align="center">
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

const Info = styled(Flex)`
  width: 33.33%;
`;

const Title = styled(Text)`
  margin-bottom: 10px;
`;

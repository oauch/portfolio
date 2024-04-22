import Flex from "@/components/Flex";
import Section from "@/components/Section";
import Text from "@/components/Text";
import { User } from "@/fillMe";

import styled from "@emotion/styled";

const InfoData = [
  { 이름: User.name },
  { 생년월일: User.birth },
  { 연락처: User.email },
];

function AboutMeSection() {
  return (
    <Wrapper height={350}>
      <Text fs={4.5} fw={800}>
        About Me
      </Text>
      <InfoWrapper justify="between">
        {InfoData.map((obj) =>
          Object.entries(obj).map(([key, value]) => (
            <Info key={key} isCol={false} align="center">
              <Title fs={3} fw={600}>
                {key}
              </Title>
              <Text fs={2.5}>{value}</Text>
            </Info>
          ))
        )}
      </InfoWrapper>
    </Wrapper>
  );
}
export default AboutMeSection;

const Wrapper = styled(Section)`
  padding: 20px;
  gap: 50px;
`;

const InfoWrapper = styled(Flex)`
  width: 100%;
`;

const Info = styled(Flex)`
  width: 33.33%;
`;

const Title = styled(Text)`
  margin-bottom: 10px;
`;

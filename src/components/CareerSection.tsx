import Flex from "@/components/Common/Flex";
import Section from "@/components/Common/Section";
import SectionTitle from "@/components/Common/SectionTitle";
import Text from "@/components/Common/Text";
import FDS from "@/images/FDS.avif";
import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";
import Image from "next/image";

function CareerSection() {
  return (
    <Section bgColor={COLORS.GRAY_F5}>
      <SectionTitle title="Career" color={COLORS.BLACK} />
      <Flex align="start">
        <ImageWrapper>
          <CompanyImg src={FDS} alt="FDS" />
        </ImageWrapper>
        <Content isRow={false} align="start" gap={10}>
          <Text fs={2.5} fw={600}>
            파이낸셜데이타시스템
          </Text>
          <Text fs={2} color={COLORS.GRAY_6C}>
            2022.08 - 2023.08
          </Text>
          <Text fs={1.5}>2022.08 - 2023.08</Text>
        </Content>
      </Flex>
    </Section>
  );
}

export default CareerSection;

const ImageWrapper = styled(Flex)`
  width: 250px;
  height: 250px;
  margin-right: 20px;
  border: 1px solid ${COLORS.GRAY};
  border-radius: 100%;
  background-color: ${COLORS.WHITE};
`;

const CompanyImg = styled(Image)`
  width: 90%;
  height: fit-content;
`;

const Content = styled(Flex)`
  padding-left: 20px;
  border-left: 2px solid ${COLORS.GRAY};
`;

import Flex from "@/components/Common/Flex";
import Section from "@/components/Common/Section";
import Text from "@/components/Common/Text";
import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Velog from "../../public/icons/Velog.svg";
import GitHub from "../../public/images/GitHubLogo.png";

function HubsSection() {
  return (
    <Section bgColor={COLORS.BLACK}>
      <Text fs={4.5} fw={800} color={COLORS.WHITE}>
        Hubs
      </Text>
      <Flex gap={30}>
        <motion.article whileHover={{ scale: 1.1 }}>
          <HubWrapper
            href="https://github.com/oauch"
            target="_blank"
            rel="noreferrer"
          >
            <Image width={200} src={GitHub} alt={"GitHub"} />
            <Text fs={2.5}>소스 코드 저장소</Text>
            <DescriptionUl>
              <li>프로젝트 소스 코드</li>
              <li>알고리즘 문제 풀이 소스 코드</li>
            </DescriptionUl>
          </HubWrapper>
        </motion.article>
        <motion.article whileHover={{ scale: 1.1 }}>
          <HubWrapper
            href="https://velog.io/@oauch/posts"
            target="_blank"
            rel="noreferrer"
          >
            <Image width={150} src={Velog} alt={"Velog"} />
            <br />
            <Text fs={2.5}>블로그</Text>
            <DescriptionUl>
              <li>공부한 내용 정리</li>
              <li>이슈 발생시, 오류 해결 방법</li>
            </DescriptionUl>
          </HubWrapper>
        </motion.article>
      </Flex>
    </Section>
  );
}

export default HubsSection;

const HubWrapper = styled(Link)`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding: 20px;
  border-radius: 20px;
  background-color: ${COLORS.WHITE};
`;

const DescriptionUl = styled.ul`
  margin-top: 15px;
  font-size: 1.5rem;
`;

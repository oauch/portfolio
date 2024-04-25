import Flex from "@/components/Common/Flex";
import Section from "@/components/Common/Section";
import SectionTitle from "@/components/Common/SectionTitle";
import Text from "@/components/Common/Text";
import ProjectWrapper from "@/components/Project/ProjectWrapper";
import { USER } from "@/fillMe";
import useMario from "@/hooks/useMario";
import { COLORS } from "@/styles/colors";
import { MobileSize } from "@/styles/mediaQuery";

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const ProjectSection = forwardRef<HTMLElement, {}>(function (_, ref) {
  const { initial, scrollAnimation } = useMario(2000);
  const { PROJECT } = USER;
  return (
    <Section ref={ref} bgColor="#4F6F52">
      <SectionTitle title="Project" color={COLORS.PROJECT} />
      <motion.div initial={initial} animate={scrollAnimation}>
        <Flex isRow={false} gap={30}>
          {/* 포트폴리오 */}
          <ProjectWrapper project={PROJECT.PORTFOLIO}>
            <Description fs={1.6} lineH={40}>
              <Title>👻 포트폴리오 사이트</Title>
              <br />
              현재 보고 있는 사이트가 해당 프로젝트입니다. CSS-in-JS인
              <Accent> Emotion</Accent>으로 개발을 진행하였습니다.
            </Description>
            <Description fs={1.6} lineH={40}>
              <Title>💡 알게된 점</Title>
              <br />
              프로젝트를 진행하면서 <Accent>props로 ref</Accent>를 내려주면서
              오류를 만났는데 <Accent>forwardRef</Accent>를 사용해야 해결할 수
              있다는 것을 프로젝트를 진행하면서 알게 되었습니다.
            </Description>
            <Description fs={1.6} lineH={40}>
              <Title>👍🏻 좋았던 점</Title>
              <br />
              Style-Components와 달리 Emotion을 사용하면 컴포넌트에 props를
              넘겨줄 때 <Accent>$</Accent>를 하지 않아도 된다는 점이 가장
              좋았습니다. 그리고 그외 기능은 모두 같아서 쉽게 사용할 수
              있었습니다.
            </Description>
          </ProjectWrapper>
          {/* Jawstify */}
          <ProjectWrapper project={PROJECT.JAWSTIFY}>
            <Description fs={1.6} lineH={40}>
              <Title>
                🦈 스마트하게 나의 일정을 칸반보드로 관리할 수 있는 플랫폼
              </Title>
              <br />
              <Accent>Next.js</Accent>와 <Accent>TypeScript</Accent>를
              프로젝트에 처음 적용 해보았던 프로젝트 프로젝트를 진행하면서 해당
              기술들이 어떤 역할을 하는지 알게 되었습니다.
            </Description>
            <Description fs={1.6} lineH={40}>
              <Title>💡 알게된 점</Title>
              <br />
              API로 받아오면 값이 컴포넌트에 렌더링 되지 않는 이슈를 만난 적이
              있습니다. 그래서 useState를 통해 각 API 호출이나 응답에 setter로
              값을 주고{" "}
              <Accent>state로 useEffect로 렌더링을 일일이 해줬던 경험</Accent>
              이 있습니다.
              <br />
              프로젝트가 끝난 후, 리팩토링을 통해
              <Accent> React-Query</Accent>
              를 사용하면 <br />
              쉽게 해결할 수 있다는 것을 알게 되었습니다.
            </Description>
            <Description fs={1.6} lineH={40}>
              <Title>👍🏻 좋았던 점</Title>
              <br />
              개발 중일 때는 <Accent>디스코드음성 채팅방 입장</Accent>
              입니다. 개발 중일 때 음성 채팅방에 머무르면서, 서로에게 개발에
              대한 동기 유발하고, 문제점 / 오류들에 대해서 실시간으로 피드백을
              받을 수 있었습니다.
            </Description>
          </ProjectWrapper>
          {/* 롤링폴링 */}
          <ProjectWrapper project={PROJECT.ROLLING}>
            <Description fs={1.6} lineH={40}>
              <Title>
                📝 추억의 롤링 페이퍼를 웹상에서도 즐길 수 있는 플랫폼
              </Title>
              <br />
              <Accent>HTML / CSS / JS</Accent>와 <Accent>React</Accent>를 배우고
              시작한 첫 프로젝트
              <br />
            </Description>
            <Description fs={1.6} lineH={40}>
              <Title>💡 알게된 점</Title>
              <br />
              <Accent>코드 리뷰</Accent>의 중요성을 알게 되었습니다.
              <br />
              개발이 완료된 컴포넌트들이 완벽하게 만들었다고 생각해서 PR을
              올렸는데 막상 코드 리뷰를 진행하면서
              <Accent> 기능적인 부분 / 스타일적인 </Accent>
              요소에서 부족한 부분, 개선하면 좋을 부분들을 팀원들이
              알려주었습니다. 코드 리뷰를 통해 내가 발견하지 못한 부분은
              팀원들의 도움을 받을 수 있다는 것을 알게 되었습니다.
            </Description>
            <Description fs={1.6} lineH={40}>
              <Title>👍🏻 좋았던 점</Title>
              <br />
              <Accent>git</Accent> 사용에 대해서 학습하였고
              <Accent> github</Accent>를 통해 팀원들과
              <Accent> 협업하는 방법 </Accent>을 알았습니다. 기술적으로는 모르는
              부분이 있다면 질의응답을 해주었고 함께 성장할 수 있었습니다. 함께
              성장한다고 느꼈던 부분은 내가 잘 아는 부분이라는 가정에서 동료에게
              설명해주면서 동료도 지식을 얻어가지만, 본인도 공부를 한 번 더 하게
              된다고 느꼈습니다.
              <br />
              또한, 협업할 때 사람을 대하는 자세도 배울 수 있었습니다. 본인이
              적용하고 싶은 기술이나 패키지가 있다면 사람들을 설득할만한 근거를
              제시하고 의견을 나누는 것이었습니다. 협업에서 주로 사용하였던 도구{" "}
              <Accent>Discord</Accent> /<Accent> Github Discussions</Accent>
            </Description>
          </ProjectWrapper>
        </Flex>
      </motion.div>
    </Section>
  );
});

export default ProjectSection;

const Title = styled.strong`
  font-size: 2rem;

  ${MobileSize} {
    font-size: 1.5rem;
  }
`;

const Description = styled(Text)`
  ${MobileSize} {
    font-size: 1.4rem;
  }
`;

const Accent = styled.strong`
  font-weight: 700;
  color: ${COLORS.RED};
`;

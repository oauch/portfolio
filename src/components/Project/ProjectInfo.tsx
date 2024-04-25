import Flex from "@/components/Common/Flex";
import Text from "@/components/Common/Text";
import { COLORS } from "@/styles/colors";
import { MobileSize, TabletSize } from "@/styles/mediaQuery";
import { ImagesProps } from "@/types/image";

import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ProjectInfoProps {
  images: ImagesProps[];
  skills: Array<string>;
  github: string;
  url: string;
}

function ProjectInfo({ images, skills, github, url }: ProjectInfoProps) {
  const Skills = (values: Array<string>) => {
    return values.join(", ");
  };
  const JoinSkills = Skills(skills);
  return (
    <Flex isRow={false} align="center" gap={30}>
      <SwiperWrapper
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2500 }}
        modules={[Pagination, Autoplay]}
      >
        {images.map((val) => (
          <SwiperSlide key={val.alt}>
            <Image
              fill
              sizes="100%"
              src={val.src}
              alt={val.alt}
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
      <SkillWrapper isRow={false} gap={40}>
        <Text fs={1.8} fw={800} lineH={40}>
          <Title>✅ 기술 스택</Title>
          <br />
          {JoinSkills}
        </Text>
        <Link href={github} target="_blank" rel="noreferrer">
          <Url>🔗 GitHub</Url>
        </Link>
        <Link href={url} target="_blank" rel="noreferrer">
          <Url>🔗 배포 사이트</Url>
        </Link>
      </SkillWrapper>
    </Flex>
  );
}

export default ProjectInfo;

const SwiperWrapper = styled(Swiper)`
  width: 600px;
  height: 350px;
  border-radius: 15px;

  ${MobileSize} {
    width: 300px;
    height: 180px;
  }
`;

const Title = styled.strong`
  font-size: 2rem;
`;

const Url = styled.strong`
  font-size: 2rem;
  color: ${COLORS.SKILLS_TITLE};

  &:hover {
    opacity: 0.8;
    transition: all 0.15s ease-in;
  }
`;

const SkillWrapper = styled(Flex)`
  ${TabletSize} {
    gap: 20px;
  }
`;

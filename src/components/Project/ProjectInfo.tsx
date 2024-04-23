import Flex from "@/components/Common/Flex";
import Text from "@/components/Common/Text";
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
  const Skills = (skills: Array<string>) => {
    return skills.join(" / ");
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
            <Image fill src={val.src} alt={val.alt} />
          </SwiperSlide>
        ))}
      </SwiperWrapper>
      <Flex isRow={false} gap={50}>
        <Text fs={1.8} fw={800} lineH={40}>
          <Title>✅ 적용 기술</Title>
          <br />
          {JoinSkills}
        </Text>
        <Link href={github} target="_blank" rel="noreferrer">
          <Title>🔗 GitHub</Title>
        </Link>
        <Link href={url} target="_blank" rel="noreferrer">
          <Title>🔗 배포 사이트</Title>
        </Link>
      </Flex>
    </Flex>
  );
}

export default ProjectInfo;

const SwiperWrapper = styled(Swiper)`
  width: 600px;
  height: 350px;
  border-radius: 15px;
`;

const Title = styled.strong`
  font-size: 2rem;
`;

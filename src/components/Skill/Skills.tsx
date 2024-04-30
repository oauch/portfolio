import Flex from "@/components/Common/Flex";
import Text from "@/components/Common/Text";
import ImgWrapper from "@/components/Skill/ImgWrapper";
import { USER } from "@/fillMe";
import { COLORS } from "@/styles/colors";
import { DefaultProps } from "@/types/default";
import styled from "@emotion/styled";
import { AnimationControls, motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface SkillsProps extends DefaultProps {
  name: string;
  animation: AnimationControls;
}

function Skills({ animation, name }: SkillsProps) {
  let items: { src: StaticImageData; alt: string }[] | null | undefined;
  switch (name) {
    case "FrontEnd":
      items = USER.SKILLS.FRONT_END;
      break;
    case "Version Control":
      items = USER.SKILLS.VERSION;
      break;
    case "Communication":
      items = USER.SKILLS.COMMUNICATION;
      break;
    default:
      items = null;
      break;
  }
  return (
    <motion.div animate={animation}>
      <Flex>
        <InWrapper>
          <Title fs={2.8} fw={600} color={COLORS.GREEN_4F}>
            {name}
          </Title>
          <ImgWrapper items={items!} />
        </InWrapper>
      </Flex>
    </motion.div>
  );
}

export default Skills;

const InWrapper = styled.div`
  padding: 15px;
  border-radius: 15px;
  background-color: ${COLORS.WHITE};
  box-shadow: 3px 3px 3px 3px ${COLORS.GRAY};
`;

const Title = styled(Text)`
  border-bottom: 2px outset ${COLORS.WHITE};
`;

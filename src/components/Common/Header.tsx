import Flex from "@/components/Common/Flex";
import { USER } from "@/fillMe";
import useScrollY from "@/hooks/useScrollY";
import { COLORS } from "@/styles/colors";

import styled from "@emotion/styled";
import { motion, useMotionValueEvent } from "framer-motion";

const headers = [
  { title: "About Me", scrollIndex: 1 },
  { title: "Skills", scrollIndex: 2 },
  { title: "Hubs", scrollIndex: 3 },
  { title: "Project", scrollIndex: 4 },
  // { title: "Career", scrollIndex: 5 },
];

interface HeaderProps {
  onClick: (index: number) => void;
}

function Header({ onClick }: HeaderProps) {
  const { scrollY, scrollAnimation } = useScrollY();

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 910
      ? scrollAnimation.start({
          color: COLORS.BLACK,
          backgroundColor: COLORS.WHITE,
        })
      : scrollAnimation.start({
          color: COLORS.WHITE,
          backgroundColor: COLORS.BLACK,
        });
  });

  return (
    <Wrapper
      animate={scrollAnimation}
      initial={{ color: COLORS.WHITE, backgroundColor: COLORS.BLACK }}
    >
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Text onClick={() => onClick(0)}>{USER.NAME}의 포트폴리오</Text>
      </motion.button>
      <Flex gap={50}>
        {headers.map((val) => (
          <motion.button
            key={val.title}
            onClick={() => onClick(val.scrollIndex)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Text>{val.title}</Text>
          </motion.button>
        ))}
      </Flex>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled(motion.nav)`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
  z-index: 9999;
`;

const Text = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

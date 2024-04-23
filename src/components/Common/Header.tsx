import Flex from "@/components/Common/Flex";
import { User } from "@/fillMe";
import { COLORS } from "@/styles/colors";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

const headers = [
  { title: "About Me", scrollIndex: 1 },
  { title: "Skills", scrollIndex: 2 },
  { title: "Hubs", scrollIndex: 3 },
  { title: "Project", scrollIndex: 5 },
  { title: "Career", scrollIndex: 4 },
];

function Header() {
  return (
    <Wrapper>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Text
          onClick={() => {
            console.log("홈");
          }}
        >
          {User.name}의 포트폴리오
        </Text>
      </motion.button>
      <Flex gap={50}>
        {headers.map((val) => (
          <motion.button
            key={val.title}
            onClick={() => console.log(val.title)}
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

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
  background-color: ${COLORS.WHITE};
`;

const Text = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${COLORS.BLACK};
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

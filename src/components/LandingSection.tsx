import Section from "@/components/Section";
import Text from "@/components/Text";
import { User } from "@/fillMe";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typingWord = `론트엔드 개발자 ${User.name}`;

function LandingSection() {
  const [word, setWord] = useState("프");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWord(word + typingWord[count]); // 이전 set한 문자 + 다음 문자
      setCount(count + 1); // 개수 만큼 체크
    }, 135);

    // 문자열 체크를 통해 setInterval을 해제해야 무한 반복을 막을 수 있다.
    if (count === typingWord.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  }, [word]);

  return (
    <Section height={950} bgColor="#000">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Text fs={50} fw={700} color="#fff" align="center">
          안녕하세요
          <br />
          {word}
        </Text>
      </motion.div>
      <Text
        fs={25}
        color="#fff"
        align="right"
        letterS={2}
        lineH={40}
        style={{ marginTop: "20px" }}
      >
        규칙적인 삶을 좋아하고, 빠른 변화가 없더라도
        <br />
        꾸준하게 하는 것을 좋아합니다.
      </Text>
    </Section>
  );
}

export default LandingSection;

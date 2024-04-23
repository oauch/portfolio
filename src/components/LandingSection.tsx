import Section from "@/components/Common/Section";
import Text from "@/components/Common/Text";
import { USER } from "@/fillMe";
import { COLORS } from "@/styles/colors";

import { motion } from "framer-motion";
import useTyping from "./hooks/useTyping";

function LandingSection() {
  const { word } = useTyping(`FE 개발자 ${USER.NAME}`);
  return (
    <Section height={950} bgColor={COLORS.BLACK}>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <Text fs={5} fw={700} color={COLORS.WHITE} align="center">
          안녕하세요
          <br />
          {word}
        </Text>
        <Text
          fs={2.5}
          color={COLORS.WHITE}
          align="right"
          letterS={2}
          lineH={40}
          style={{ marginTop: "20px" }}
        >
          {USER.README}
        </Text>
      </motion.div>
    </Section>
  );
}

export default LandingSection;

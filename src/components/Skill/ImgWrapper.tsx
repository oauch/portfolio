import Flex from "@/components/Common/Flex";
import { ImagesProps } from "@/types/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImgWrapperProps {
  items: ImagesProps[];
}

function ImgWrapper({ items }: ImgWrapperProps) {
  const chunkSize = 3; // 한 번에 보여줄 아이템 수
  const numChunks = Math.ceil(items.length / chunkSize); // 전체 청크 수

  return (
    <>
      {Array.from({ length: numChunks }, (_, index) => {
        const start = index * chunkSize;
        const end = start + chunkSize;
        const slicedItems = items.slice(start, end);

        return (
          <SvgWrapper gap={20} key={index}>
            {slicedItems.map((val) => (
              <motion.button whileHover={{ scale: 1.1 }} key={val.alt}>
                <Image width={80} height={80} src={val.src} alt={val.alt} />
              </motion.button>
            ))}
          </SvgWrapper>
        );
      })}
    </>
  );
}

export default ImgWrapper;

const SvgWrapper = styled(Flex)`
  padding-top: 20px;
`;

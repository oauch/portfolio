import Text from "@/components/Common/Text";
import { USER } from "@/fillMe";
import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface HubsLinkProps {
  path: {
    width: number;
    src: StaticImageData;
    title: string;
    name: string;
    href: string;
  };
  children: ReactNode;
}

function HubsLink({ path, children }: HubsLinkProps) {
  const { width, src, title, name, href } = path;
  return (
    <motion.article whileHover={{ scale: 1.1 }}>
      <Wrapper href={href} target="_blank" rel="noreferrer">
        <Image width={width} src={src} alt={name} />
        {path === USER.HUBS.BLOG ? <br /> : <></>}
        <Text fs={2.5}>{title}</Text>
        <DescriptionUl>{children}</DescriptionUl>
      </Wrapper>
    </motion.article>
  );
}

export default HubsLink;

const Wrapper = styled(Link)`
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

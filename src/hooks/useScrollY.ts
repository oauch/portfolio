import { useAnimation, useScroll } from "framer-motion";

function useScrollY() {
  const { scrollY } = useScroll();
  const scrollAnimation = useAnimation();
  const scrollAnimation2 = useAnimation();
  return { scrollY, scrollAnimation, scrollAnimation2 };
}

export default useScrollY;

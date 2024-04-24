import useScrollY from "@/hooks/useScrollY";
import { useMotionValueEvent } from "framer-motion";

const initial = { y: 100, opacity: 0 };
const animate = { y: 0, opacity: 1 };

function useMario(Y: number) {
  const { scrollY, scrollAnimation } = useScrollY();

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > Y
      ? scrollAnimation.start(animate)
      : scrollAnimation.start(initial);
  });
  return { scrollAnimation, initial };
}

export default useMario;

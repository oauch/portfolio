import Text from "@/components/Common/Text";
import { COLORS } from "@/styles/colors";

interface ProjectNameProps {
  name: string;
  date: string;
  headCount?: number;
}

function ProjectName({ name, date, headCount }: ProjectNameProps) {
  return (
    <>
      <Text fs={3} fw={700}>
        {name}
      </Text>
      <Text fs={1.5} color={COLORS.GRAY}>
        {headCount ? date + ` (${headCount}인 개발)` : date}
      </Text>
    </>
  );
}

export default ProjectName;

import Text from "@/components/Common/Text";

interface SectionTitleProps {
  title: string;
  color?: string;
}

function SectionTitle({ title, color }: SectionTitleProps) {
  return (
    <Text fs={4.5} fw={800} color={color}>
      {title}
    </Text>
  );
}

export default SectionTitle;

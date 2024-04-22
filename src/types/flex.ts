import { DefaultProps } from "@/types/default";

type JustifyContents =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "between"
  | "around";
type AlignItems = "start" | "end" | "center";

interface FlexProps extends DefaultProps {
  isRow?: boolean;
  justify?: JustifyContents;
  align?: AlignItems;
  gap?: number;
}

export type { AlignItems, FlexProps, JustifyContents };

import { DefaultProps } from "@/types/default";

type FONT_WEIGHT =
  | 400
  | 500
  | 600
  | 700
  | 800
  | "bold"
  | "bolder"
  | "lighter"
  | "normal";

interface TextProps extends DefaultProps {
  fs?: number;
  fw?: FONT_WEIGHT;
  font?: string;
  color?: string;
  align?: string;
  lineH?: number;
  letterS?: number;
}

export type { TextProps };

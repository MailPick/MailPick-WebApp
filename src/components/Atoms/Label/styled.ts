import tw, { styled,css } from "twin.macro";
import { Size } from "@/types/style.type";
import { ReactNode } from "react";

type CSSUnit = "px" | "em" | "rem" | "%";
type FontSize = Size | `${number}${CSSUnit}`;

export interface LabelProps {
  fontSize: FontSize;
  fontBold?: boolean;
  tagType?: React.ElementType;
  children:ReactNode;
}


const fontSizeStyle = (fontSize: FontSize) => css`
  ${fontSize === "sm" && tw`text-sm`}
  ${fontSize === "md" && tw`text-base`}
  ${fontSize === "lg" && tw`text-lg`}
  ${typeof fontSize === "string" && `font-size: ${fontSize};`}
`;

const fontBoldStyle = (fontBold: boolean) => css`
  ${fontBold && tw`font-bold`}
`;

export const StyledLabel = styled.span<LabelProps>`
  ${({ fontSize }) => fontSizeStyle(fontSize)}
  ${({ fontBold }) => fontBold && fontBoldStyle(fontBold)}
`;



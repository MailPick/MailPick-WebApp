import tw,{styled, css} from "twin.macro";
import { TextProps } from "./Text";

export const fontWeightObj = {
  light: tw`font-light`,
  regular:tw`font-normal`,
  medium: tw`font-medium`,
  semibold:tw`font-semibold`,
  bold: tw`font-bold`
} as const

export const StyledText = styled.p<TextProps>(({
  fontSize,
  fontWeight,
  color})=>[
  css`
    font-size: ${typeof fontSize === 'number' ? 
      `${fontSize}px` : 
      (fontSize || '1rem')
    };
    ${color ? `color:${color}`:""};
  `,
  fontWeight && fontWeightObj[fontWeight],
  tw`p-0 m-0 leading-[20px]`
])
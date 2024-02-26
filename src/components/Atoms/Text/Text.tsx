import tw,{css} from "twin.macro";
import styled from "styled-components";

interface TextProps{
  fontSize : string | number;
  fontBold? : boolean;
  children : React.ReactNode;
}

export const Text = ({fontSize, fontBold, children, ...props}:TextProps) => (
  <StyledText fontSize={fontSize} fontBold={fontBold} {...props}>
    {children}
  </StyledText>
)

export const StyledText = styled.p<TextProps>(({fontSize,fontBold})=>[
  css`
    font-size: ${typeof fontSize === 'number' ? `${fontSize}px` : (fontSize || '1rem')};
  `,
  fontBold && tw`font-bold`
])
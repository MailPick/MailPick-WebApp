import { StyledText } from "./styled";
import { fontWeightObj } from "./styled";

export interface TextProps{
  fontSize : string | number;
  fontWeight? : FontWeight;
  color?:string;
  children : React.ReactNode;
}
type FontWeight= keyof typeof fontWeightObj

export const Text = ({
  fontSize, 
  fontWeight, 
  color, 
  children, 
  ...props
}:TextProps) => (
  <StyledText 
    fontSize={fontSize} 
    fontWeight={fontWeight} 
    color={color} 
    {...props}
  >
    {children}
  </StyledText>
)


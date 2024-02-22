import styled from "styled-components";
import {buttonVariants,buttonSize,baseStyle,ButtonVariant,ButtonSize} from "./styled";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children:React.ReactNode;
  variant?: ButtonVariant;
  size:ButtonSize;
} 

const StyledButton = styled.button<ButtonProps>(({ variant, size }) => [
  baseStyle,
  size && buttonSize[size],
  variant && buttonVariants[variant]
]);

export const Button:React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  ...rest
}) => {
  return(
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  )
}




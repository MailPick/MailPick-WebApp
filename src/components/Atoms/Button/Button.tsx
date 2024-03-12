import {StyledButton} from "./styled";
export type ButtonVariant = "primary" | "danger" | "warning" | "success" | "default";
export type ButtonSize = "sm"|"md"|"lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children:React.ReactNode;
  variant?: ButtonVariant;
  size?:ButtonSize;
} 

const Button = ({
  children,
  variant = "default",
  size = "md",
  ...rest
}:ButtonProps) => {
  return(
    <StyledButton variant={variant} size={size} {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button;




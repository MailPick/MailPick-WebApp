
import tw from "twin.macro"
import styled from "styled-components";

const buttonVariants = {
  primary: tw`text-white bg-blue-500`,
  success: tw`text-white bg-green-500`,
  danger: tw`text-white bg-red-500`,
  warning: tw`text-white bg-amber-500`,
  default: tw`text-white bg-gray-500`
} 

type ButtonVariant = keyof typeof buttonVariants;

const StyledButton = styled.button<{ variant: ButtonVariant }>(({ variant }) => [
  tw`px-6 py-4 rounded-full`,
  variant && buttonVariants[variant], 
]);

interface ButtonProps {
  label:string
  variant: ButtonVariant
  onClick?: () => void
} 

export const Button = ({
  label,
  variant,
  onClick
}:ButtonProps) => {
  return(
    <StyledButton variant={variant} onClick={onClick}>
      {label}
    </StyledButton>
  )
}



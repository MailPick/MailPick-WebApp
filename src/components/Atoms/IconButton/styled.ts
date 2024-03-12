import tw, { styled } from 'twin.macro';

interface StyledIconButtonProps {
  $isActive?: boolean;
}

export const StyledIconButton = styled.div<StyledIconButtonProps>`
  ${tw`
    flex 
    items-center 
    justify-center 
    w-[36px] h-[36px] 
    rounded-md 
    `
  }
  
  &:hover {
    ${tw`bg-gray-300/50`}
  }
  &:active {
    ${tw`text-blue-500 bg-blue-500/20`}
  }
  
  ${({ $isActive }) => $isActive?tw`text-blue-500 bg-blue-500/20` : tw`text-gray-500`}
`;
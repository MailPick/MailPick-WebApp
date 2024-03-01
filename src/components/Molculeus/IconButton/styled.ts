import tw, { styled } from 'twin.macro';

interface StyledIconButtonProps {
  $isActive?: boolean;
}

export const StyledIconButton = styled.div<StyledIconButtonProps>`
  ${tw`
    flex 
    items-center 
    justify-center 
    w-[32px] h-[32px] 
    rounded-md 
    `
  }
  
  color:#3C3C3C;
  &:active {
    ${tw`text-blue-500 bg-blue-500/20`}
  }
  
  ${({ $isActive }) => $isActive?tw`text-blue-500 bg-blue-500/20` : tw`text-gray-800`}
`;
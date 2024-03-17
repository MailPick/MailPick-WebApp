import tw, { styled } from 'twin.macro';

interface StyledIconButtonProps {
  width?:string;
  height?:string;
  $isActive?: boolean;
}

export const StyledIconButton = styled.div<StyledIconButtonProps>`
  ${tw`
    flex 
    items-center 
    justify-center 
    rounded-md 
    select-none
  `}
  width: ${({ width }) => width || '36px'};
  height: ${({ height }) => height || '36px'};
  &:hover {
    /* ${tw`bg-gray-300/50`} */
  }
  &:active {
    ${tw`text-blue-500 bg-blue-500/20`}
  }
  
  ${({ $isActive }) => $isActive ? tw`text-blue-500 bg-blue-500/20` : tw`text-gray-400`}
`;
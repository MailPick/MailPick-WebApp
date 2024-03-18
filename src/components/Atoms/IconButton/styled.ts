import tw, { styled } from 'twin.macro';

interface StyledIconButtonProps {
  $width?:string;
  $height?:string;
  $padding?:string;
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
  width: ${({ $width }) => $width || '44px'};
  height: ${({ $height }) => $height || '44px'};
  padding: ${({ $padding }) => $padding};
  &:hover {
    /* ${tw`bg-gray-300/50`} */
  }
  &:active {
    ${tw`text-blue-500 bg-blue-500/20`}
  }
  
  ${({ $isActive }) => $isActive ? tw`text-blue-500 bg-blue-500/20` : tw`text-gray-400`}
`;
import { StyledText } from "@/components/Atoms/Text/styled";
import tw,{styled, css} from "twin.macro";
import Text from "@/components/Atoms/Text";

interface IsActiveProps {
  $isActive?: boolean;
}

export const CardContainer = styled.div<IsActiveProps>`
  ${tw`
    bg-white 
    flex 
    rounded-lg
    pl-[8px] 
    overflow-hidden 
    select-none
    relative
    w-[352px]
    h-[100px]
  `}
  ${({$isActive}) => $isActive && tw`bg-blue-500 text-white`}
  
`;

export const VerticalBox = tw.div`pl-[4px] pr-[4px] pt-[8px]`;
export const AvatarBox = tw.div`pr-[8px] pt-[12px]`;
export const EmailBox = tw.div`flex flex-col pt-[12px] pr-[20px]`
export const TimeBox =tw.div`absolute right-[12px] top-[12px]`
  
export const Time=styled(Text)<IsActiveProps>`
  ${tw`text-gray-600`}
  ${({$isActive}) => $isActive && tw`text-white`}
`

const truncatingTextStyles = (lineClamp = 1) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lineClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name = styled(StyledText)`
  ${truncatingTextStyles(1)}
`;

export const Title = styled(StyledText)`
  ${truncatingTextStyles(1)}
`;

export const Content = styled(StyledText)`
  ${tw`m-0 overflow-hidden`}
  ${truncatingTextStyles(2)}
`;

  




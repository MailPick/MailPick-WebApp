import { StyledText } from "@/components/Atoms/Text/styled";
import tw,{styled, css} from "twin.macro";


export const CardContainer = styled.div`
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
  &:active {
    ${tw`text-white bg-blue-500`}
  }
`;

export const VerticalBox = tw.div`pl-1.5 pr-1.5 pt-3`;
export const AvatarBox = tw.div`pr-2 pt-4`;
export const EmailBox = tw.div`flex flex-col pt-5 pr-2`
export const TimeBox = tw.div`absolute right-2 top-2`

const truncatingTextStyles = (lineClamp = 1) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lineClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name = styled(StyledText)`
  ${tw`pb-1`}
  ${truncatingTextStyles(1)}
`;

export const Title = styled(StyledText)`
  ${tw`pb-1`}
  ${truncatingTextStyles(1)}
`;

export const Content = styled(StyledText)`
  ${tw`m-0 overflow-hidden`}
  ${truncatingTextStyles(2)}
`;

  




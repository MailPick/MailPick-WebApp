import tw,{styled} from "twin.macro"
interface ContainerProps{
  $isExpanded?:boolean
}
export const SideBarContainer = styled.div<ContainerProps>`
  ${tw`flex 
  flex-col
  shrink-0
  items-center 
  gap-[8px] 
  pt-[52px] 
  overflow-y-auto
  max-h-screen
  w-[80px]
  static
  `
  
  }
  ${({$isExpanded}) => $isExpanded && tw`w-[220px] absolute pl-[18px] h-full bg-gray-main z-50 transition duration-200 items-start`}

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 10px;
  }
`
export const StyledHr = tw.hr`w-[66px] h-[2px] bg-gray-50 rounded-md`
export const Hr = tw(StyledHr)``
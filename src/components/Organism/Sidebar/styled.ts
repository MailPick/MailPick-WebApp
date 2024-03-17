import tw,{styled} from "twin.macro"
export const Container = styled.div`
  ${tw`flex 
  flex-col 
  items-center 
  gap-[16px] 
  pt-[52px] 
  w-[80px]
  overflow-y-auto
  max-h-screen`}
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 10px;
  }
`
export const Hr = tw.hr`w-[66px] h-[2px] bg-gray-50 rounded-md`
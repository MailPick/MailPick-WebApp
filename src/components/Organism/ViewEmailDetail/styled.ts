import tw,{styled} from "twin.macro"
import { Container } from "../ViewEmailList/styled"
import Text from "@/components/Atoms/Text"
import IconButton from "@/components/Atoms/IconButton"

export const DetailContainer = styled(Container)`
  ${tw`
    w-[732px]
    pl-[20px]
    pt-[20px]
    ml-0
    overflow-y-auto
  `}
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #EBEBEB;
    border-radius: 10px;
  }
`

export const EmailNavArea = tw.div`
  flex
  items-center
  w-full
  justify-between
  shadow-card
  rounded-[100px]
  bg-[#fff]
  px-[36px]
  py-[22px]
  mb-[32px]
`
export const SenderInfo = tw.div`
  flex
  gap-[12px]
  items-center
`

export const FromToArea= tw.div`
  
`
export const EmailHeaderArea = tw.div`
  px-[16px]
  mb-[12px]
`

export const Subject=tw(Text)`
  mb-[4px]
  leading-[26px]
  
`

export const EmailBodyArea = tw.div`
  px-[16px]
`

export const EmailBody = tw.div``

export const MailNavButton = tw(IconButton)`
  w-[40px]
  h-[40px]
`

export const AfterButtonArea = tw.div`
  flex
`

export const BeforeButtonArea = tw.div`
  flex
`

export const ButtonArea = tw.div`
  flex gap-x-[36px]
`

export const FromEmailText = tw(Text)`inline-block whitespace-nowrap select-none hover:bg-blue-500/20`
export const ToEmailText = tw(Text)`inline-block select-none hover:bg-blue-500/20`
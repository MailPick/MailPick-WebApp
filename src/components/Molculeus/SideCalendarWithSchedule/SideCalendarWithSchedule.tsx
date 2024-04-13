import Calendar from "@/components/Atoms/Calendar";
import { Container } from "@/components/Organism/ViewEmailList/styled";
import tw, { styled } from "twin.macro";
import { StyledHr } from "@/components/Organism/Sidebar/styled";

const SideCalendarWithSchedule  = () => {
  return(
    <StyledContainer>
      <Calendar/>
    </StyledContainer>
  )
}
export default SideCalendarWithSchedule;


export const StyledContainer = styled(Container)`
  ${
  tw`flex flex-col
  w-full
  overflow-y-auto  
  grow-[2]
  px-[28px]
  py-[24px]
  overflow-x-hidden
  `}
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 10px;
  }
  `
  

export const Hr = tw(StyledHr)`
  w-[300px]
  h-[1px]
  mx-[18px]
`

// const Dot = tw.div`
//   w-[8px]
//   h-[8px]
//   bg-blue-500
//   rounded-full
//   absolute
// `


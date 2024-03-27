import { Container } from "@/components/Organism/ViewEmailList/styled";
import tw from "twin.macro";
// import { Hr } from "@/components/Organism/Sidebar/styled";
import "@/styles/SideCalendar.css"
const SideCalendar = () => {
  return(
    <SideCalendarContainer>
      <div tw="h-[320px]">
        Hello World
      </div>
    </SideCalendarContainer>
  )
}
export default SideCalendar;


const SideCalendarContainer = tw(Container)`
  flex flex-col
  w-full
  overflow-y-auto  
  grow-[2]
  px-[20px]
  py-[20px]
  `


// const StyledHr = tw(Hr)`
//   w-[300px]
//   h-[1px]
//   mx-[18px]
// `

// const Dot = tw.div`
//   w-[8px]
//   h-[8px]
//   bg-blue-500
//   rounded-full
//   absolute
// `


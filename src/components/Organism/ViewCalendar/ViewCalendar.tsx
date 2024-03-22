import { Container } from "../ViewEmailList/styled";
import tw from "twin.macro";
const ViewCalendar = () => (
  <CalendarContainer>
    디테일한 캘린더넣을거임
  </CalendarContainer>
)


export default ViewCalendar;

const CalendarContainer=tw(Container)`
  w-[calc(100%-100px)]
`
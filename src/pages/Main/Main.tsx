import Sidebar from "@/components/Organism/Sidebar";
import tw, { styled } from "twin.macro";
import ViewEmailList from "@/components/Organism/ViewEmailList";
import ViewEmailDetail from "@/components/Organism/ViewEmailDetail";
import { useIsExpandedStore, useSelectTopButtonStore } from "@/store/selectSectionStore";
import ViewCalendar from "@/components/Organism/ViewCalendar/ViewCalendar";
import EmailScheduleSummary from "@/components/Molculeus/EmailScheduleSummary";
import SideCalendarWithSchedule from "@/components/Molculeus/SideCalendarWithSchedule/SideCalendarWithSchedule";
const Main = () => {
  const {selectTopButton} = useSelectTopButtonStore();
  const {isExpanded} = useIsExpandedStore();
  return(
    <MainContainer>
      <SidebarContainer isExpanded={isExpanded}>
        <Sidebar/>
      </SidebarContainer>
        { selectTopButton != "calendar" ? (
          <>
            <MainContent isExpanded={isExpanded}>
              <ViewEmailList/>
              <ViewEmailDetail/>
            </MainContent>
            <SideContent>
              <EmailScheduleSummary/>
              <SideCalendarWithSchedule/>
            </SideContent>
          </>
          ): (
          <>
            <ViewCalendar/>
          </>
          )
        }
    </MainContainer>
  )
}

interface IsExpandedProps{
  isExpanded:boolean;
}
const MainContainer = tw.div`
  flex 
  flex-row
  bg-gray-main
  min-w-[1600px]
  h-screen
  `
const MainContent = styled.div<IsExpandedProps>(({isExpanded})=>[tw`
  flex 
  flex-row
  grow
  `,
  isExpanded && tw`pl-[80px]`
])

const SidebarContainer = styled.div<IsExpandedProps>(({isExpanded})=>[
  tw`flex
  flex-col
  shrink-0
  items-center
  gap-[8px]
  pt-[52px]
  overflow-y-auto
  max-h-screen
  w-[80px]
  static
  transition-width
  duration-200 
  ease-in-out
  z-50
  `,
  isExpanded ? tw`
    flex
    flex-col
    px-[18px] 
    h-full 
    bg-gray-main 
    items-start 
    w-[220px]
    overflow-x-hidden
    fixed
    left-0
    `:tw`w-[80px] transition-shadow duration-200 ease-in-out`
])

const SideContent = tw.div`
  flex 
  flex-col 
  gap-[20px]
  min-w-[336px]
  max-w-[336px]
  mt-[28px]
  pr-[20px]
  overflow-y-hidden
  h-[calc(100vh-62px)]
  rounded-lg
  overflow-x-hidden
  `
export default Main;
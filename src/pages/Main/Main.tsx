import Sidebar from "@/components/Organism/Sidebar";
import tw, { styled } from "twin.macro";
import ViewEmailList from "@/components/Organism/ViewEmailList";
import ViewEmailDetail from "@/components/Organism/ViewEmailDetail";
import { useSelectSectionStore, useSelectTopButtonStore } from "@/store/selectSectionStore";
import ViewCalendar from "@/components/Organism/ViewCalendar/ViewCalendar";
import EmailScheduleSummary from "@/components/Molculeus/EmailScheduleSummary";
import SideCalendar from "@/components/Molculeus/SideCalendar/SideCalendar";
const Main = () => {
  const {selectSection} = useSelectSectionStore();
  const {selectTopButton} = useSelectTopButtonStore();
  console.log("main select",selectSection);
  return(
    <MainContainer>
      <Sidebar/>
        { selectTopButton != "calendar" ? (
          <>
            <MainContent>
              <ViewEmailList/>
              <ViewEmailDetail/>
            </MainContent>
            <SideContent>
              <EmailScheduleSummary/>
              <SideCalendar/>
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
const MainContainer = tw.div`
  flex 
  flex-row
  bg-gray-main
  min-w-[1600px]
  `
const MainContent = styled.div`
  ${tw`
  flex 
  flex-row
  grow
`}
`
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
import Sidebar from "@/components/Organism/Sidebar";
import tw, { styled } from "twin.macro";
import ViewEmailList from "@/components/Organism/ViewEmailList";
import ViewEmailDetail from "@/components/Organism/ViewEmailDetail";
import { useSelectSectionStore, useSelectTopButtonStore } from "@/store/selectSectionStore";
import ViewCalendar from "@/components/Organism/ViewCalendar/ViewCalendar";
const Main = () => {
  const {selectSection} = useSelectSectionStore();
  const {selectTopButton} = useSelectTopButtonStore();
  console.log("main select",selectSection);
  return(
    <Container>
      <Sidebar/>
        { selectTopButton != "calendar" ? (
          <MainContent>
            <ViewEmailList/>
            <ViewEmailDetail/>
          </MainContent>
          ): (
          <>
            <ViewCalendar/>
          </>
          )
        }
    </Container>
  )
}
const Container = tw.div`flex w-full overflow-x-auto min-h-screen bg-gray-main static`
const MainContent = styled.div`
  ${tw`flex  relative w-full z-0`}
`
export default Main;
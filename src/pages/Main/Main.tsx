import Sidebar from "@/components/Organism/Sidebar";
import tw from "twin.macro";
import ViewEmailList from "@/components/Organism/ViewEmailList";
import ViewEmailDetail from "@/components/Organism/ViewEmailDetail";
const Main = () => {
  return(
    <Container>
      <Sidebar/>
      <ViewEmailList/>
      <ViewEmailDetail/>
    </Container>
  )
}
const Container = tw.div`flex w-full min-h-screen `
export default Main;
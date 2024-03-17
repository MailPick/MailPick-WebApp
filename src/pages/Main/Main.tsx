import Sidebar from "@/components/Organism/Sidebar";
import tw from "twin.macro";
import ViewEmailList from "@/components/Organism/ViewEmailList";
const Main = () => {
  return(
    <Container>
      <Sidebar/>
      <ViewEmailList/>
    </Container>
  )
}
const Container = tw.div`flex w-full min-h-screen `
export default Main;
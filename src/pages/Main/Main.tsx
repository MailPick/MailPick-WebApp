import Sidebar from "@/components/Organism/Sidebar";
import EmailListCard from "@/components/Organism/EmailListCard";
import tw from "twin.macro";
import { useState } from "react";
const Main = () => {
  const [selectedSection, setSelectedSection] = useState("inbox");
  return(
    <Container>
      <Sidebar setSelectedSection={setSelectedSection}/>
      <EmailListCard selectedSection={selectedSection}/>
    </Container>
  )
}
const Container = tw.div`flex flex-row w-full min-h-screen`
export default Main;
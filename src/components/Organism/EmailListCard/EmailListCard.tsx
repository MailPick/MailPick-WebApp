import tw from "twin.macro";
import Inbox from "@/components/Molculeus/Inbox/Inbox";

interface Props{
  selectedSection?:string;
}

const EmailListCard = ({selectedSection}:Props) => {  
  return(
    <Container>
      <Header>
        
      </Header>
      <div>
        <Input type="text" placeholder="Search Email"/>
      </div>
      <CardList>
        {selectedSection === "inbox" && <Inbox/>}
        {selectedSection === "sent" && <div>sent</div>}
        {selectedSection === "draft" && <div>draft</div>}
        {selectedSection === "trash" && <div>trash</div>}
      </CardList>
    </Container>
  )
} 
//
const Container = tw.div`
  flex 
  flex-col
  pt-[36px]
  pl-[16px]
  pr-[16px]
  w-[384px] 
  h-[calc(100vh-62px)]
  bg-white
  rounded-lg
  shadow-lg
  mt-[28px]
  mb-[28px]
`
const Header = tw.div`
  flex justify-between
`
const Input = tw.input`
  w-[200px]
  h-[32px]
  rounded-lg
  border-2
  border-gray-200
  focus:border-gray-400
  pl-[12px]
  pr-[12px]
  outline-none
`

const CardList = tw.div`
  flex
  flex-col
  gap-1
  overflow-y-auto
  // h-[calc(100vh-62px-36px-32px-32px)]
`
export default EmailListCard;
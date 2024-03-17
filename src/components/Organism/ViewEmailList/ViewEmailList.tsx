import MailBox from "@/components/Molculeus/MailBox";
import { Container, Header, Input, CardList, RefreshIcon, FilterIcon, Title,InputArea } from "./styled";
import { useState } from "react";
import { useSelectSectionStore } from "@/store/selectSectionStore";
import UserInboxMail from "@/components/Molculeus/UserInboxMail";


//이메일 데이터가 필요하다. 근데 inbox만
const ViewEmailList = () => {  
  const [userInput, setUserInput] = useState("");
  const {selectSection} = useSelectSectionStore();
  const getValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }
  console.log("select",selectSection)
  return(
    <Container>
      <Header>
        {selectSection === "inbox" && <Title fontSize="16px" fontWeight="semibold">받은 편지함 - 모든메일</Title>}
        {selectSection === "sent" && <Title fontSize="16px" fontWeight="semibold">보낸 편지함 - 모든메일</Title>}
        {selectSection === "pin" && <Title fontSize="16px" fontWeight="semibold">고정 편지함 - 모든메일</Title>}
        {selectSection === "draft" && <Title fontSize="16px" fontWeight="semibold">임시보관함 - 모든메일</Title>}
        {selectSection === "trash" && <Title fontSize="16px" fontWeight="semibold">휴지통 - 모든메일</Title>}
        {selectSection && <Title fontSize="16px" fontWeight="semibold">{selectSection}</Title>}
        <RefreshIcon id="refresh" width="40px" height="40px"/>
        <FilterIcon id="filter" width="40px" height="40px"/>
      </Header>
      <InputArea>
        <Input type="text" placeholder="Search" onChange={getValue}/>
      </InputArea>
      <CardList>
        {selectSection === "inbox" && <MailBox userInput={userInput} queryKey={"inbox"} endPoint={"inbox"}/>}
        {selectSection === "sent" && <MailBox userInput={userInput} queryKey={"sent"} endPoint={"sent"}/>}
        {selectSection === "pin" && <MailBox userInput={userInput} queryKey={"pin"} endPoint={"pin"}/>}
        {selectSection === "draft" && <MailBox userInput={userInput} queryKey={"draft"} endPoint={"draft"}/>}
        {selectSection === "trash" && <MailBox userInput={userInput} queryKey={"trash"} endPoint={"trash"}/>}
        {/* 이메일데이터의 To데이터와 일치해야함 */}
        {selectSection && <UserInboxMail userInput={userInput}/>}
      </CardList>
    </Container>
  )
} 


export default ViewEmailList;
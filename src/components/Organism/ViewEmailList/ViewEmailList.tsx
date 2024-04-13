import MailBox from "@/components/Molculeus/MailBox";
import { ViewEmailListContainer, Header, Input, CardList, RefreshIcon, FilterIcon, Title,InputArea } from "./styled";
import { useState } from "react";
import { useSelectSectionStore } from "@/store/selectSectionStore";
import UserInboxMail from "@/components/Molculeus/UserInboxMail";
import { useAccountStore } from "@/store/accountStore";

//이메일 데이터가 필요하다. 근데 inbox만
const ViewEmailList = () => {  
  const [userInput, setUserInput] = useState("");
  const {selectSection} = useSelectSectionStore();
  const {account} = useAccountStore();
  const getValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }
  const hasMatchingAccount = account.some(acc => acc.account === selectSection);

  return(
    <ViewEmailListContainer>
      <Header>
        {selectSection === "inbox" && <Title fontSize="16px" fontWeight="semibold">받은 편지함 - 모든메일</Title>}
        {selectSection === "sent" && <Title fontSize="16px" fontWeight="semibold">보낸 편지함 - 모든메일</Title>}
        {selectSection === "pin" && <Title fontSize="16px" fontWeight="semibold">고정 편지함 - 모든메일</Title>}
        {selectSection === "draft" && <Title fontSize="16px" fontWeight="semibold">임시보관함 - 모든메일</Title>}
        {selectSection === "trash" && <Title fontSize="16px" fontWeight="semibold">휴지통 - 모든메일</Title>}
        {hasMatchingAccount && <Title fontSize="16px" fontWeight="semibold">{selectSection}</Title> }
        <RefreshIcon id="refresh" />
        <FilterIcon id="filter"/>
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
        {hasMatchingAccount && <UserInboxMail userInput={userInput}/>}
      </CardList>
    </ViewEmailListContainer>
  )
} 


export default ViewEmailList;
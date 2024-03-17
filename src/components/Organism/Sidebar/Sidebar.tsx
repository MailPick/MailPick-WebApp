import IconButton from "@/components/Atoms/IconButton";
import { Container,Hr } from "./styled"
import TextIconButton from "@/components/Atoms/TextIconButton/TextIconButton";
import useAccountQuery from "@/hooks/useAccountQuery";
import { AccountType } from "@/types/data.type";
import { useSelectSectionStore } from "@/store/selectSectionStore";

const Sidebar = () => {
  const {data} = useAccountQuery();
  const {selectSection, setSelectSection} = useSelectSectionStore();
  const handleClick = (id:string) => {
    setSelectSection(id);
  }
  
  return (
    <Container>
      <IconButton id="hamburger" onClick={()=>{handleClick("menu")}} isActive={selectSection == "menu"}/>
      <IconButton id="calendarBlank" onClick={()=>{handleClick("calendar")}} isActive={selectSection == "calendar"}/>
      <Hr/>
      <IconButton id="notePencil" onClick={()=>{handleClick("mail")}} isActive={selectSection == "mail"}/>
      <IconButton id="biInbox" onClick={()=>{handleClick("inbox")}} isActive={selectSection == "inbox"}/>
      <IconButton id="paperPlaneTilt" onClick={()=>handleClick("sent")} isActive={selectSection == "sent"}/>
      <IconButton id="pushPin" onClick={()=>handleClick("pin")} isActive={selectSection == "pin"}/>
      <IconButton id="file" onClick={()=>handleClick("draft")} isActive={selectSection == "draft"}/>
      <IconButton id="trash" onClick={()=>{handleClick("trash")}} isActive={selectSection == "trash"}/>
      {
        data && data.map((account:AccountType) => {
          return (
            <div key={account.userId}>
            <TextIconButton 
              email={account.account}
              identifyColor={account.identifyColor}
              onClick={()=>{handleClick(account.account)}}
              isActive={selectSection == account.account}
            />
            </div>
        )})
      }
    </Container>
  );
};

export default Sidebar;


import { SideBarContainer} from "./styled"
import IconButton from "@/components/Atoms/IconButton";
import { Hr } from "./styled"
import TextIconButton from "@/components/Atoms/TextIconButton/TextIconButton";
import useAccountQuery from "@/hooks/useAccountQuery";
import { AccountType } from "@/types/data.type";
import { useSelectSectionStore, useSelectTopButtonStore } from "@/store/selectSectionStore";
import { useState } from "react";
import tw, { styled } from "twin.macro";

const Sidebar = () => {
  const {data} = useAccountQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const {selectTopButton,setSelectTopButton} = useSelectTopButtonStore();
  const {selectSection, setSelectSection} = useSelectSectionStore();
  const handleClickMail = () => window.electron.ipcRenderer.send('open-mailbox');
  const handleSectionChange = (id:string, isTopButton = false) => {
    if (isTopButton) {
      setSelectTopButton(id);
      setSelectSection("");
    } else {
      setSelectSection(id);
      setSelectTopButton("");
    }
  };
  return (
    <SideBarContainer $isExpanded={isExpanded}>
      <IconButton id="hamburger" onClick={()=>{setIsExpanded(!isExpanded)}} isActive={isExpanded===true}/>
      {
        isExpanded == false?(
          <>
          <IconButton id="calendarBlank" onClick={()=>{handleSectionChange("calendar",true)}} isActive={selectTopButton == "calendar"}/>
          <Hr/>
          <IconButton id="notePencil" onClick={handleClickMail}/>
          <IconButton id="biInbox" onClick={()=>{handleSectionChange("inbox")}} isActive={selectSection == "inbox"}/>
          <IconButton id="paperPlaneTilt" onClick={()=>handleSectionChange("sent")} isActive={selectSection == "sent"}/>
          <IconButton id="pushPin" onClick={()=>handleSectionChange("pin")} isActive={selectSection == "pin"}/>
          <IconButton id="file" onClick={()=>handleSectionChange("draft")} isActive={selectSection == "draft"}/>
          <IconButton id="trash" onClick={()=>{handleSectionChange("trash")}} isActive={selectSection == "trash"}/>
          {
            data && data.map((account:AccountType) => {
              return (
                <div key={account.userId}>
                <TextIconButton 
                  email={account.account}
                  identifyColor={account.identifyColor}
                  onClick={()=>{handleSectionChange(account.account)}}
                  isActive={selectSection == account.account}
                  
                />
                </div>
            )})
          }
          </>
      ):(
        <ExpandedIconArea>
        <OpenIconButton 
          id="calendarBlank" 
          text="캘린더" 
          onClick={()=>{handleSectionChange("calendar",true)}} 
          isActive={selectTopButton == "calendar"}
          
        />
        <OpenIconButton 
          id="biInbox" 
          text="받은 편지함" 
          onClick={()=>{handleSectionChange("inbox")}} 
          isActive={selectSection == "inbox"}
        />
        <OpenIconButton 
          id="paperPlaneTilt" 
          text="보낸 편지함" 
          onClick={()=>{handleSectionChange("sent")}} 
          isActive={selectSection == "sent"}
          
          
        />
        <OpenIconButton 
          id="pushPin" 
          text="고정 편지함" 
          onClick={()=>{handleSectionChange("pin")}} 
          isActive={selectSection == "pin"}
          
        />
        <OpenIconButton 
          id="file" 
          text="임시보관함" 
          onClick={()=>{handleSectionChange("draft")}} 
          isActive={selectSection == "draft"}
          
        />
        <OpenIconButton 
          id="trash" 
          text="휴지통" 
          onClick={()=>{handleSectionChange("trash")}} 
          isActive={selectSection == "trash"}
          
        />
        {
            data && data.map((account:AccountType) => {
              return (
                <div key={account.userId}>
                <OpenTextIconButton 
                  email={account.account}
                  identifyColor={account.identifyColor}
                  onClick={()=>{handleSectionChange(account.account)}}
                  isActive={selectSection == account.account}
                  text={account.account}        
                  fontSize="16px"
                />
                </div>
            )})
          }
        </ExpandedIconArea>
      )
      }      
    </SideBarContainer>
  );
};

const OpenIconButton = tw(IconButton)`[> svg]:(w-[20px] h-[20px]) w-[160px] flex gap-[12px] items-center justify-start p-[8px]`;
const OpenTextIconButton = tw(TextIconButton)`w-[200px] flex gap-[12px] items-center justify-start p-[10px] `;
const ExpandedIconArea = styled.div``
export default Sidebar;


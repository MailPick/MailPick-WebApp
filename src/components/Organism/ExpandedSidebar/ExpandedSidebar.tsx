import tw from "twin.macro";
import { AccountType } from "@/types/data.type";
import IconButton from "@/components/Atoms/IconButton";
import TextIconButton from "@/components/Atoms/TextIconButton/TextIconButton";
interface ExpandedSidebarProps {
  isExpanded:boolean;
  selectTopButton:string;
  selectSection:string;
  handleSectionChange:(id:string, isTopButton?:boolean)=>void;
  data
}

const ExpandedSidebar = ({
  selectTopButton,
  selectSection,
  handleSectionChange,
  data
}:ExpandedSidebarProps) => {
  return(
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

export default ExpandedSidebar;

const OpenIconButton = tw(IconButton)`[> svg]:(w-[20px] h-[20px]) w-[160px] flex gap-[12px] items-center justify-start p-[8px]`;
const OpenTextIconButton = tw(TextIconButton)`w-[200px] flex gap-[12px] items-center justify-start p-[10px] `;
const ExpandedIconArea = tw.div``
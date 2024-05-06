import IconButton from "@/components/Atoms/IconButton"
import TextIconButton from "@/components/Atoms/TextIconButton/TextIconButton"
import { AccountType } from "@/types/data.type"
import tw from "twin.macro"
import { StyledHr } from "../Sidebar/styled"
interface FoldSidebarProps {
  data:AccountType[]
  selectSection:string
  selectTopButton:string
  handleClickMail:()=>void
  handleSectionChange:(id:string, isTopButton?:boolean)=>void
}
const FoldSidebar = ({
  data,
  handleClickMail,
  handleSectionChange,
  selectSection,
  selectTopButton
}:FoldSidebarProps) => {
  return(
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
  )
  
}

export default FoldSidebar;

export const Hr = tw(StyledHr)``
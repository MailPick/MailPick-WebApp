import IconButton from "@/components/Atoms/IconButton";
import { Container,Hr } from "./styled"
import TextIconButton from "@/components/Atoms/TextIconButton/TextIconButton";
import useAccountQuery from "@/hooks/useAccountQuery";
import { AccountType } from "@/types/data.type";

interface Props{
  setSelectedSection:(section:string)=>void;
}

const Sidebar = ({setSelectedSection}:Props) => {
  const {data} = useAccountQuery();
  return (
    <Container>
      <IconButton id="hamburger"/>
      <IconButton id="calendarBlank"/>
      <Hr/>
      <IconButton id="notePencil"/>
      <IconButton id="biInbox" onClick={()=>setSelectedSection("inbox")}/>
      <IconButton id="paperPlaneTilt" onClick={()=>setSelectedSection("sent")}/>
      <IconButton id="pushPin" onClick={()=>setSelectedSection("pin")}/>
      <IconButton id="file"/>
      <IconButton id="trash"/>
      {
        data && data.map((account:AccountType) => {
          return (
            <div key={account.userId}>
            <TextIconButton 
              email={account.account}
              identifyColor={account.identifyColor}
            />
            </div>
        )})
      }
    </Container>
  );
};

export default Sidebar;


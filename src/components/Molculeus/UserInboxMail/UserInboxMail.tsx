import { useEmailQuery } from "@/hooks/useEmailQuery";
import EmailList from "../EmailList/EmailList";
import { useSelectSectionStore } from "@/store/selectSectionStore";
import { EmailType } from "@/types/data.type";
interface Props{
  userInput:string;
}

const UserInboxMail = ({userInput}:Props) => {
  const { data: emails } = useEmailQuery(["inbox"], "inbox");
  const selectSection = useSelectSectionStore(state=>state.selectSection);
  const filteredEmails = emails?.filter((emails:EmailType) => emails.to === selectSection);
  return (
    <EmailList emails={filteredEmails} userInput={userInput}/>  
  );
};

export default UserInboxMail;



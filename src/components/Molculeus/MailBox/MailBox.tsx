import { useEmailQuery } from "@/hooks/useEmailQuery";
import EmailList from "../EmailList/EmailList";

interface Props{
  userInput:string;
  endPoint:string;
  queryKey:string;
}

const MailBox = ({userInput,endPoint,queryKey}:Props) => {
  const { data: emails } = useEmailQuery([`${queryKey}`], `${endPoint}`);
  return (
    <EmailList emails={emails} userInput={userInput}/>  
  );
};


export default MailBox;



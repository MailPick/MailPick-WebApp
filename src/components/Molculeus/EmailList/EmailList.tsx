import { EmailType } from "@/types/data.type";
import { useAccountStore } from "@/store/accountStore";
import EmailCard from "../EmailCard";
import { groupEmailsByDate,formatDateForEmailCard } from "@/services/dateHelper";
import { DateGroupTitle } from "./styled";
import { useActiveEmailStore } from "@/store/activeEmailStore";
interface Props{
  emails: EmailType[];
  userInput: string;
}

const EmailList = ({emails,userInput}:Props) => {
  const {activeEmail,setActiveEmail} = useActiveEmailStore();
  const filteredEmails = emails?.filter((email: EmailType) => {
    const searchQuery = userInput.toLowerCase();
    return  email.from.toLowerCase().includes(searchQuery) ||
            email.subject.toLowerCase().includes(searchQuery) ||
            email.body.plain.toLowerCase().includes(searchQuery);
  });
  const accounts = useAccountStore((state) => state.account);
  const findIdentifyColor = (emailTo:string) => {
    const accountMatch = accounts.find((account) => account.account === emailTo);
    return accountMatch ? accountMatch.identifyColor : undefined;
  };
  const emailsGroupedByDate = groupEmailsByDate(filteredEmails);

  return(
    <>
      {Object.entries(emailsGroupedByDate).map(([dateGroup, emails]) => (
        <div key={dateGroup}>
          <DateGroupTitle fontSize={"12px"} fontWeight={"semibold"}>
            {dateGroup}
          </DateGroupTitle>
          {emails.map((email: EmailType) => {
            const identifyColor = findIdentifyColor(email.to);
            const formattedDate = formatDateForEmailCard(email.date);
            return (
              <div key={email.uid}>
                <EmailCard 
                  from={email.from}
                  subject={email.subject}
                  plain={email.body.plain}
                  date={formattedDate}
                  email={email.from}
                  verticalColor={identifyColor || 'defaultColor'}
                  onClick={() => setActiveEmail(email)}
                  isActive={email.uid === activeEmail?.uid}
                />
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default EmailList;
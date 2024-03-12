import { useEmailQuery } from "@/hooks/useEmailQuery";
import EmailCard from "@/components/Molculeus/EmailCard/EmailCard";
import { EmailType } from "@/types/data.type";
import { useAccountStore } from "@/store/accountStore";
import {groupEmailsByDate, formatDateForEmailCard,} from "@/services/dateHelper";
const Inbox = () => {
  const { data: emails } = useEmailQuery(["inbox"], "inbox");
  const accounts = useAccountStore((state) => state.account);

  const findIdentifyColor = (emailTo:string) => {
    const accountMatch = accounts.find((account) => account.account === emailTo);
    return accountMatch ? accountMatch.identifyColor : undefined;
  };
  
  const emailsGroupedByDate = groupEmailsByDate(emails);
  return (
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
                />
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};


export default Inbox;

import tw from "twin.macro";
import { StyledText } from "@/components/Atoms/Text/styled";

const DateGroupTitle =tw(StyledText)`
  px-[10px]
  py-[4px]
  text-gray-400
`

import { useActiveEmailStore } from "@/store/activeEmailStore";
import Avatar from "@/components/Atoms/Avatar";
import { Time } from "@/components/Molculeus/EmailCard/styled";
import { formatDateForEmailDetail } from "@/services/dateHelper";
import DOMPurify from "dompurify";
import {DetailContainer,EmailNavArea, SenderInfo, FromToArea, FromEmailText,ToEmailText,ButtonArea,AfterButtonArea,BeforeButtonArea,MailNavButton,Subject,EmailBody,EmailHeaderArea,EmailBodyArea} from './styled'


const ViewEmailDetail = () => {
  const {activeEmail} = useActiveEmailStore();
  const formattedDate = activeEmail?.date && formatDateForEmailDetail(activeEmail.date);
  const sanitizedHTML = activeEmail?.body.html && DOMPurify.sanitize(activeEmail.body.html);
  const formattedFrom = activeEmail?.from?.replace(/<[^>]*>/g, "");
  return(
    <>
      {
        activeEmail && (
          <DetailContainer>
            <EmailNavArea>
              <SenderInfo>
                <Avatar email={activeEmail.from} boxWidth="40px" boxHeight="40px" boxPadding="4px" svgWidth="32px" svgHeight="32px" pngWidth="26px" pngHeight="26px"/>
                <FromToArea>
                  <FromEmailText fontSize="16px" fontWeight={"bold"}>{formattedFrom}</FromEmailText><br/>
                  <ToEmailText fontSize="14px" fontWeight={"medium"}>To : {activeEmail.to}</ToEmailText>
                </FromToArea>
              </SenderInfo>
              <ButtonArea>
                <AfterButtonArea>
                  <MailNavButton id="forward" svgWidth="20px" svgHeight="20px"/>
                  <MailNavButton id="doubleForward" svgWidth="20px" svgHeight="20px"/>
                  <MailNavButton id="reply" svgWidth="20px" svgHeight="20px"/>
                </AfterButtonArea>
                <BeforeButtonArea>
                  <MailNavButton id="archive" svgWidth="20px" svgHeight="20px"/>
                  <MailNavButton id="snooze" svgWidth="20px" svgHeight="20px"/>
                  <MailNavButton id="pushPin" svgWidth="20px" svgHeight="20px"/>
                  <MailNavButton id="more" svgWidth="20px" svgHeight="20px"/>
                </BeforeButtonArea>
              </ButtonArea>
            </EmailNavArea>
            <EmailHeaderArea>
              <Subject fontSize="22px" fontWeight={"bold"}>{activeEmail.subject}</Subject>
              <Time fontSize="12px" fontWeight={"light"}>{formattedDate}</Time>
            </EmailHeaderArea>
            <EmailBodyArea>
              {sanitizedHTML && (<EmailBody dangerouslySetInnerHTML={{__html: sanitizedHTML}}/>)}
            </EmailBodyArea>
          </DetailContainer>
        )
      }
    </>
  )
}


export default ViewEmailDetail;
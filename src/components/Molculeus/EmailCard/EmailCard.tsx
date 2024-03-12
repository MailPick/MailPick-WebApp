import { 
  CardContainer,
  Name,
  Title,
  Content,
  VerticalBox,
  AvatarBox,
  EmailBox,
  TimeBox,
} from "./styled";
import Vertical from "@/components/Atoms/VerticalBar";
import Avatar from "@/components/Atoms/Avatar";
import Text from "@/components/Atoms/Text";
import tw from "twin.macro";

interface Props{
  from:string;
  subject:string;
  plain:string;
  date:string;
  email:string;
  emailIconUrl?:string;
  verticalColor:string;
}

const EmailCard = ({
  from,
  subject,
  plain,
  date,
  email,
  emailIconUrl,
  verticalColor,
}:Props) => {
  return(
    <CardContainer>
      <VerticalBox>
        <Vertical color={verticalColor}/>
      </VerticalBox>
      <AvatarBox> 
        <Avatar email={email} emailIconUrl={emailIconUrl}/>
      </AvatarBox>
      <EmailBox>
        <Name fontSize="14px" fontWeight={"semibold"}>{from}</Name>
        <Title fontSize="12px" fontWeight={"medium"}>{subject}</Title>
        <Content fontSize="12px" fontWeight={"regular"}>{plain}</Content>
      </EmailBox>
      <TimeBox>
        <Time fontSize="12px" fontWeight="light">{date}</Time>
      </TimeBox>
    </CardContainer>
  )
}
const Time=tw(Text)`text-gray-500`
export default EmailCard;
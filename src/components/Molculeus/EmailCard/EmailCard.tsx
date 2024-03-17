import { 
  CardContainer,
  Name,
  Title,
  Content,
  VerticalBox,
  AvatarBox,
  EmailBox,
  TimeBox,
  Time
} from "./styled";
import Vertical from "@/components/Atoms/VerticalBar";
import Avatar from "@/components/Atoms/Avatar";

export interface Props{
  from:string;
  subject:string;
  plain:string;
  date:string;
  email:string;
  emailIconUrl?:string;
  verticalColor:string;
  isActive?:boolean;
  onClick?: () => void;
}

const EmailCard = ({
  from,
  subject,
  plain,
  date,
  email,
  emailIconUrl,
  verticalColor,
  onClick,
  isActive = false
}:Props) => {
  return(
    <CardContainer $isActive={isActive} onClick={onClick}>
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
        <Time fontSize="12px" fontWeight="light" $isActive={isActive}>{date}</Time>
      </TimeBox>
    </CardContainer>
  )
}

export default EmailCard;
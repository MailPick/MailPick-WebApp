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

interface Props{
  name:string;
  title:string;
  content:string;
  email:string;
  emailIconUrl?:string;
  verticalColor:string;
  time:string;
}

const EmailCard = ({
  name,
  title,
  content,
  email,
  emailIconUrl,
  verticalColor,
  time
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
        <Name fontSize="14px" fontWeight={"semibold"}>{name}</Name>
        <Title fontSize="12px" fontWeight={"medium"}>{title}</Title>
        <Content fontSize="12px" fontWeight={"regular"}>{content}</Content>
      </EmailBox>
      <TimeBox>
        <Time fontSize="12px" fontWeight="light">{time}</Time>
      </TimeBox>
    </CardContainer>
  )
}

export default EmailCard;
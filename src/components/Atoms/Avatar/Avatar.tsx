import Icon from "../Icon/Icon";
import { EmailIconBox, Img, ImgBox } from "./styled";
import useEmailIcon from "@/hooks/useEmailIcon";

interface AvatarProp {
  emailIconUrl?: string;
  email:string
}

const Avatar = ({
  emailIconUrl,
  email
  }:AvatarProp) => {
  const emailIconId = useEmailIcon(email)
  return(
    <>
    {
      emailIconUrl ? (
        <ImgBox>
          <Img src={emailIconUrl}/>
        </ImgBox>
      ):(
        <EmailIconBox>
          <Icon id={emailIconId} width="28" height="28"/>
        </EmailIconBox>
      )
    }
    </>
  )
}

export default Avatar; 
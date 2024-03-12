import Icon from "../Icon";
import { EmailIconBox, Img, ImgBox } from "./styled";
import useEmailIcon from "@/hooks/useEmailIcon";

interface AvatarProp {
  emailIconUrl?: string;
  email:string;
  width?:string;
  height?:string;
}

const Avatar = ({
  emailIconUrl,
  email,
  width,
  height
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
          <Icon id={emailIconId} width={width} height={height}/>
        </EmailIconBox>
      )
    }
    </>
  )
}

export default Avatar; 
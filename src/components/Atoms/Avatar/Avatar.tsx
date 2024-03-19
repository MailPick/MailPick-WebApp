import Icon from "../Icon";
import { EmailIconBox, Img, ImgBox } from "./styled";
import useEmailIcon from "@/hooks/useEmailIcon";

interface AvatarProp {
  emailIconUrl?: string;
  email:string;
  boxPadding?:string;
  boxWidth?:string;
  boxHeight?:string;
  pngWidth?:string;
  pngHeight?:string;
  svgWidth?:string;
  svgHeight?:string;
}

const Avatar = ({
  emailIconUrl,
  email,
  boxWidth = "32px",
  boxHeight = "32px",
  boxPadding = "2px",
  pngWidth,
  pngHeight,
  svgWidth,
  svgHeight,
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
        <EmailIconBox $boxWidth={boxWidth} $boxHeight={boxHeight} $boxPadding={boxPadding}>
          {["naver", "google", "daum.png"].includes(emailIconId) ? (
            <Icon
              id={emailIconId}
              svgWidth={svgWidth}
              svgHeight={svgHeight}
              pngWidth={pngWidth}
              pngHeight={pngHeight}
            />
          ) : (
            <div tw="text-xl text-gray-400">{emailIconId}</div> 
          )}
        </EmailIconBox>
      )
    }
    </>
  )
}

// const TextIcon = tw(StyledText)`text-gray-400 text-lg`

export default Avatar; 
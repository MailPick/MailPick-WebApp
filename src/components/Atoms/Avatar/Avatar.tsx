import Icon from "../Icon/Icon";
import { Box, Img } from "./styled";
import useEmailIcon from "@/hooks/useEmailIcon";
interface AvatarProp {
  imageUrl?: string;
  email:string
  alt?:string
}

//이미지 url이 있으면 이미지보여주고 이미지 url이 없으면 email로고보여줌
const Avatar:React.FC<AvatarProp> = ({imageUrl,email, alt}) => {
  const iconId = useEmailIcon(email)
  return(
    <Box>
      {
        imageUrl === "" ? (
          <Icon id={iconId} width="30" height="30"/>
        ) : (
          <Img src={imageUrl} alt={alt}/>
        )
      }
    </Box>
  )
}

export default Avatar; 
import Icon from "../Icon";
import { IconId } from "../Icon/Icon";
import { StyledIconButton } from "./styled";
import Text from "../Text";
export interface IconButtonProps {
  id: IconId;
  padding?:string;
  onClick?: () => void;
  isActive?: boolean;
  text?:string;
}

const IconButton = ({
  id,
  onClick,
  isActive = false,
  text,
  ...props
  }:IconButtonProps ) => {
  return(
    <StyledIconButton onClick={onClick} $isActive={isActive} {...props}>
      <Icon id={id}/>
      {text && (<Text fontSize="12px" fontWeight="light">{text}</Text>)}
    </StyledIconButton>
  )
}
export default IconButton;










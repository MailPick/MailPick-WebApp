import Icon from "../Icon";
import { IconId } from "../Icon/Icon";
import { StyledIconButton } from "./styled";
export interface IconButtonProps {
  id: IconId;
  width?: string;
  height?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const IconButton = ({
  id,
  onClick,
  isActive = false,
  ...props
  }:IconButtonProps ) => {
  return(
    <StyledIconButton onClick={onClick} $isActive={isActive} {...props}>
      <Icon id={id}/>
    </StyledIconButton>
  )
}
export default IconButton;










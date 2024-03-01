import Icon from "@/components/Atoms/Icon/Icon"
import { IconId } from '../../Atoms/Icon/Icon';
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
  width,
  height,
  onClick,
  isActive = false
  }:IconButtonProps ) => {
  return(
    <StyledIconButton onClick={onClick} $isActive={isActive}>
      <Icon id={id} width={width} height={height}/>
    </StyledIconButton>
  )
}
export default IconButton;










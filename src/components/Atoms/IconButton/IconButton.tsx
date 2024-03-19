import Icon from "../Icon";
import { IconId } from "../Icon/Icon";
import { StyledIconButton } from "./styled";
export interface IconButtonProps {
  id: IconId;
  padding?:string;
  svgWidth?: string;
  svgHeight?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const IconButton = ({
  id,
  onClick,
  isActive = false,
  svgWidth,
  svgHeight,
  ...props
  }:IconButtonProps ) => {
  return(
    <StyledIconButton onClick={onClick} $isActive={isActive}{...props}>
      <Icon id={id} svgWidth={svgWidth} svgHeight={svgHeight}/>
    </StyledIconButton>
  )
}
export default IconButton;










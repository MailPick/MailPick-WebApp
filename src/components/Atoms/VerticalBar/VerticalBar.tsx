import { StyledVertical } from "./styled";

export interface VerticalProps {
  color: string;
}

const Vertical = ({color, ...props}:VerticalProps) => {
  return <StyledVertical color={color} {...props}/>
}


export default Vertical;
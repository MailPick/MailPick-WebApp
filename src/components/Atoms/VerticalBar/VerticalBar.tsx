import tw, {styled,css} from "twin.macro";

interface VerticalProps {
  color: string;
}

//받은유저이메일에따라 색이 바뀜, 그리고 그계정에대한 색을 변경하면 바도 색이 바뀜
const Vertical = ({color, ...props}:VerticalProps) => {
  return <StyledVertical color={color} {...props}/>
}

const StyledVertical = styled.div<VerticalProps>(
  ({ color }:VerticalProps) => css`
    ${tw`w-2 h-20 rounded-full`}
    background-color: ${color};
  `
);

export default Vertical;
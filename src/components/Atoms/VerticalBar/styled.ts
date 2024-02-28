import tw,{styled,css} from "twin.macro";
import { VerticalProps } from "./VerticalBar";

export const StyledVertical = styled.div<VerticalProps>(
  ({ color }:VerticalProps) => css`
    ${tw`w-[4px] h-[80px] rounded-full`}
    background-color: ${color};
  `
);

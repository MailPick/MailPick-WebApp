import tw, { styled } from "twin.macro";
import { StyledIconButton } from "../IconButton/styled";

/**
 * api에서 받아온 이메일을 받아서 첫글자를 가져와서 보여주는 컴포넌트
 */

interface Props {
  email: string;
  onClick?: () => void;
  isActive?: boolean;
  identifyColor?: string;
}
const getEmailFirstText = (email: string) => {
  const domain = email.split("@")[1];
  if (!domain) return null; // 이메일 형식이 올바르지 않은 경우를 대비한 검사
  const firstChar = domain[0].toLowerCase(); // 도메인의 첫 글자를 소문자로 변환
  const domainMap: { [key: string]: string } = {
    a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G",
    h: "H", i: "I", j: "J", k: "K", l: "L", m: "M", n: "N",
    o: "O", p: "P", q: "Q", r: "R", s: "S", t: "T", u: "U",
    v: "V", w: "W", x: "X", y: "Y", z: "Z"
  };
  return domainMap[firstChar] || null;
};

interface StyledTextProps {
  identifyColor?: string;
}
const StyledText = styled.p<StyledTextProps>`
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot?#iefix') format('embedded-opentype'),
          url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff2') format('woff2'),
          url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff') format('woff'),
          url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.ttf') format("truetype");
    font-display: swap;
} 
  ${tw`text-[20px] select-none p-0 m-0`}
  color: ${({ identifyColor }) => identifyColor || 'black'};
  font-family: 'GmarketSans', sans-serif;
`;

const TextIconButton = ({
  email,
  onClick,
  isActive = false,
  identifyColor,
  ...props
}:Props) => {
  const emailFirstText = getEmailFirstText(email);

  return(
    <StyledIconButton onClick={onClick} $isActive={isActive} {...props}>
      <StyledText identifyColor={identifyColor}>
        {emailFirstText}
      </StyledText>
    </StyledIconButton>
  )
}






export default TextIconButton; 
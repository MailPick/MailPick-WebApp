import tw,{styled} from "twin.macro";
interface EmailIconBoxProps{
  $boxWidth?:string;
  $boxHeight?:string;
  $boxPadding?:string;
}

export const EmailIconBox = styled.div<EmailIconBoxProps>`
${tw`
  flex 
  justify-center 
  items-center 
  rounded-full 
  border-none
  overflow-hidden
  bg-gray-50
`}
  ${({$boxWidth})=>$boxWidth && `width:${$boxWidth};`}
  ${({$boxHeight})=>$boxHeight && `height:${$boxHeight};`}
  ${({$boxPadding})=>$boxPadding && `padding:${$boxPadding};`}
`;

export const ImgBox = tw.div`
  w-[32px]
  h-[32px]
  overflow-hidden
  rounded-full
  border-none
`

export const Img = tw.img`
  w-full
  h-full
  object-cover
`
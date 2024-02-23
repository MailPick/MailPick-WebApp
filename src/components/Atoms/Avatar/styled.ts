import tw from "twin.macro";

export const EmailIconBox = tw.div`
  flex 
  justify-center 
  items-center 
  rounded-full 
  w-8
  h-8
  p-1
  border-none
  overflow-hidden
  bg-gray-100
`;

export const ImgBox = tw.div`
  w-8
  h-8
  overflow-hidden
  rounded-full
  border-none
`

export const Img = tw.img`
  w-full
  h-full
  object-cover
`
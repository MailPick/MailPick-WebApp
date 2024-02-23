import tw from "twin.macro";

export const Box = tw.div`
  flex 
  justify-center 
  items-center 
  rounded-full 
  w-10
  h-10
  p-1
  border-none
  overflow-hidden
  bg-gray-200
`;

export const Img = tw.img`
  w-full
  h-full
  object-cover
`
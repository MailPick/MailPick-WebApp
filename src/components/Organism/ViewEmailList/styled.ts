import Text from '@/components/Atoms/Text'
import IconButton from '@/components/Atoms/IconButton'
import tw, { styled } from 'twin.macro'

export const Container = tw.div`
  bg-white
  rounded-lg
  shadow-lg
`

export const ViewEmailListContainer = tw(Container)`
  flex 
  flex-col
  shrink-0
  pt-[36px]
  pl-[16px]
  pr-[8px]
  w-[384px]
  mr-[20px]
  mt-[28px]
  mb-[20px]
  h-[calc(100vh-62px)]
`

export const Header = tw.div`
  flex
  justify-start
  items-center
  pr-[12px]
  mb-[16px]
`
export const Input = tw.input`
  w-[344px]
  h-[28px]
  rounded-[20px]
  bg-gray-50
  pl-[36px]
  py-[6px]
  outline-none
  bg-search
  bg-no-repeat
  bg-left-16
`

export const CardList = styled.div`
  ${tw`flex flex-col gap-[4px] overflow-y-auto overflow-x-hidden`}
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #EBEBEB;
    border-radius: 10px;
  }
`;

export const Title = tw(Text)`
  pl-[8px]
`
export const InputArea = tw.div`mb-[8px] pl-[4px]`

export const RefreshIcon = styled(IconButton)`
  @keyframes rotateCounterClockwise {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-270deg);
    }
  }
  ${tw`ml-auto w-[40px] h-[40px] [> svg]:(w-[20px] h-[20px])`}
  
  & svg{
    ${tw`transition duration-500 ease-in-out transform`}
  }
  &:hover svg{
    animation: rotateCounterClockwise 0.5s ease-in-out forwards;
  }
`
export const FilterIcon = tw(IconButton)`
  w-[40px] h-[40px] 
  [> svg]:(w-[20px] h-[20px])
`
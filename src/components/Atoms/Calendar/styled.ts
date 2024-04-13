import tw,{styled} from "twin.macro"
import Text from "../Text"
import IconButton from "../IconButton"

export const CalendarContainer = tw.div`
  min-h-[320px] w-full flex flex-col
`
  export const Header = tw.div`flex items-center justify-between mb-[12px]`
    export const YearWithArrow = tw.div`flex items-center gap-[4px]`
      export const Year = tw(Text)`select-none`
    export const ArrowArea = tw.div`flex`
    export const RightArrowIconBtn = tw(IconButton)`[> svg]:(w-[7px] h-[13px]) w-[32px] h-[32px] px-[8px] py-[5px] rounded-full gap-[10px]`
    export const LeftArrowIconBtn = tw(RightArrowIconBtn)`[> svg]:rotate-180 `
    
    export const PlusWithExpansion = tw.div`flex items-center`
      export const PlusIconBtn = tw(IconButton)`[> svg]:(w-[16px] h-[16px]) rounded-full w-[32px] h-[32px] p-[8px]`
      export const ExpansionIconBtn = tw(IconButton)`[> svg]:(w-[20px] h-[16px]) rounded-full w-[32px] h-[32px] py-[8px] px-[6px]`

export const DayOfTheWeek = tw.div`grid grid-cols-7 `
export const Body = tw.div`grid grid-rows-1`

export const Week = tw.div`grid grid-cols-7 justify-items-center select-none`
export const DatesText = tw(Text)`flex justify-center items-center w-[40px] h-[40px] select-none`

interface CellProps{
  $isDisabled? : boolean;
  $isSelected? : boolean;
  $isNotValid? : boolean;
  $isValid? : boolean;
  $isSunday? : boolean;
}

export const DateCell = styled.div<CellProps>(({$isNotValid,$isSunday})=>[
  tw`flex items-center justify-center relative w-[40px] h-[44px] px-[8px] py-[10px]`,
  $isSunday && !$isNotValid && tw`text-red-400`
])
export const InnerCircle = styled.div<CellProps>(({$isDisabled, $isSelected,$isNotValid,$isValid})=>[
  tw`w-[24px] h-[24px] rounded-full flex items-center justify-center p-[2px]`,
  $isDisabled && tw`text-gray-100`,
  $isSelected && tw`bg-blue-500 text-white`,
  $isNotValid && tw`text-gray-300`,
  $isValid && tw`hover:bg-blue-100`
])

export const Dot = tw.div`w-[4px] h-[4px] bg-blue-500 rounded-full absolute bottom-[2px]`
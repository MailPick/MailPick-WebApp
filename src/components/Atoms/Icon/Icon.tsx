//svg sprilt 방식
export const IconId = {
  BiInbox:"biInbox",
  File:"file",
  Hamburger:"hamburger",
  List1:"list1",
  List2:"list2",
  PaperPlaneTilt:"paperPlaneTilt",
  PushPin:"pushPin",
  Trash:"trash",
  User:"user",
  Naver:"naver",
  Google:"google",
  Daum:"daum"
} as const

export type IconId = typeof IconId[keyof typeof IconId]

interface SvgIconProps extends React.SVGProps<SVGSVGElement>{
  id : IconId;
  width? : string;
  height? : string;
}

const Icon = ({
  id,
  width = "24px",
  height = "24px",
  ...props
}:SvgIconProps) => {
  return(
    <svg width={width} height={height} fill="currentColor"{...props}>
      <use href={`#${id}`}/>
    </svg>
  )
}

export default Icon;
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

type IconId = typeof IconId[keyof typeof IconId]

interface SvgIconProps {
  id : IconId;
  width : string;
  height : string;
}

const Icon:React.FC<SvgIconProps> = ({
  id,
  width,
  height,
  ...props
}) => {
  return(
    <svg width={width} height={height} {...props}>
      <use href={`#${id}`} />
    </svg>
  )
}

export default Icon;
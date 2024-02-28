//svg sprilt 방식
/**Todo
 * 마우스 올려놓을때 배경색 blue div로 있어야함
 */
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

const Icon = ({
  id,
  width,
  height,
  ...props
}:SvgIconProps) => {
  return(
    <svg width={width} height={height} {...props}>
      <use href={`#${id}`} />
    </svg>
  )
}

export default Icon;
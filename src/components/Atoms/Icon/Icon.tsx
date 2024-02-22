//svg sprilt 방식
const IconId = {
  BiInbox:"bi-inbox",
  File:"file",
  List:"list",
  List1:"list-1",
  List2:"list-2",
  PaperPlannerTilt:"paper-planer-tilt",
  PushPin:"push-pin",
  Trash:"trash"
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
      <use href={`#${id}`} fill="currentColor"/>
    </svg>
  )
}

export default Icon;
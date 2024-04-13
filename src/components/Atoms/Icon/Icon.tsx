import { styled } from "twin.macro";

//svg sprilt 방식
export const IconId = {
  BiInbox:"biInbox",
  File:"file",
  Hamburger:"hamburger",
  PaperPlaneTilt:"paperPlaneTilt",
  PushPin:"pushPin",
  Trash:"trash",
  User:"user",
  Naver:"naver",
  Google:"google",
  CalendarBlank:"calendarBlank",
  NotePencil:"notePencil",
  Filter:"filter",
  Refresh:"refresh",
  Search:"search",
  Archive:"archive",
  DoubleForward:"doubleForward",
  Forward:"forward",
  Reply:"reply",
  Snooze:"snooze",
  More:"more",
  Arrow:"arrow",
  Plus:"plus",
  Expansion:"expansion",
  Daum:"daum.png",
} as const

export type IconId = typeof IconId[keyof typeof IconId]

interface IconProps{
  id : IconId | string;
  pngWidth? : string;
  pngHeight? : string;
  space?:string;
}

const Icon = ({
  id,
  pngWidth = "22px",
  pngHeight = "22px",
  ...props
}:IconProps) => {
  const [name, ext] = id.split(".");
  if(ext === "png"){
    return(
      <Png 
        src={`/src/assets/png/${name}.png`}
        alt={name}
        width={pngWidth}
        height={pngHeight}
        {...props}
      />
    )
  }
  else{
    return(
      <svg fill="currentColor" {...props}>
        <use href={`#${name}`}/>
      </svg>
    )
  }
}

const Png = styled.img(({ width, height }) => [
  { width: width, height: height },
]);
export default Icon;
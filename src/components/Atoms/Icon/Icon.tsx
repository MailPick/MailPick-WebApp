import { styled } from "twin.macro";

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
  CalendarBlank:"calendarBlank",
  NotePencil:"notePencil",
  Daum:"daum.png"  
} as const

export type IconId = typeof IconId[keyof typeof IconId]

interface IconProps{
  id : IconId;
  width? : string;
  height? : string;
  pngWidth? : string;
  pngHeight? : string;
  space?:string;
}

const Icon = ({
  id,
  width = "24px",
  height = "24px",
  pngWidth = "20px",
  pngHeight = "20px",
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
      <svg width={width} height={height} fill="currentColor"{...props}>
        <use href={`#${name}`}/>
      </svg>
    )
  }
}

const Png = styled.img(({ width, height }) => [
  { width: width, height: height },
]);
export default Icon;
import { createGlobalStyle } from "styled-components";
import { GlobalStyles as BaseStyles} from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;`,
    width: "100vw",
    minHeight: "100vh",
    margin:0,
    padding:0,
    overflowY: "hidden"
  },
  "#root":{
    width: "100vw",
    minHeight: "100vh",
  },
  ".hidden":{
    display:"none"
  }
})

const GlobalStyles = () => {
  return(
    <>
      <BaseStyles/>
      <CustomStyles/>
    </>
  )
}

export default GlobalStyles
import { createGlobalStyle } from "styled-components";
import { GlobalStyles as BaseStyles} from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    
    maxHeight: "100vh",
  },
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
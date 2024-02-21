import { ReactNode } from "react";
import tw from "twin.macro"

const SpinnerDiv = tw.div`flex items-center justify-center`;
const SpinnerSVG = tw.svg`w-5 h-5 mr-3 -ml-1 text-white animate-spin`;
const SpinnerCircle = tw.circle`opacity-25`;
const SpinnerPath = tw.path`opacity-75`;

export const Spinner = ({children}:{children:ReactNode}) => {
  return (
    <SpinnerDiv>
      <SpinnerSVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <SpinnerCircle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <SpinnerPath fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </SpinnerSVG>
      {children}
    </SpinnerDiv>
  )
}



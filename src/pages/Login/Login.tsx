import tw from "twin.macro";
import Text from "@/components/Atoms/Text";
import NaverLogin from "./NaverLogin";
import GoogleLogin from "./GoogleLogin";
import KakaoLogin from "./KakaoLogin";
const Login = () => {
  return (
    <LoginContainer>
      <Logo></Logo>
      <Title fontSize="32px" fontWeight="bold">MailPick</Title>
      <LoginBtnArea>
        <GoogleLogin/>
        <NaverLogin />
        <KakaoLogin/>
      </LoginBtnArea>
    </LoginContainer>
  )
}

export const LoginContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center
  h-screen
  w-screen  
  select-none
`

export const LoginBtnArea = tw.div`
  flex
  flex-col
  gap-[8px]
  mt-[48px]
  
`

export const Title = tw(Text)`
  text-blue-500
`

export const Logo = tw.div`
  w-[32px] h-[32px]
  rounded-full
  bg-blue-100
  mb-[16px]
`


export default Login; 
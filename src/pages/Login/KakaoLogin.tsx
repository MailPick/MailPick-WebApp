import Icon from "@/components/Atoms/Icon";
import Text from "@/components/Atoms/Text";
import { useEffect } from "react";
import tw from "twin.macro";

const {Kakao} = window;

const KakaoLogin = () => {
  const initKakao = () => {
    if(Kakao && !Kakao.isInitialized()){
      Kakao.init(import.meta.env.VITE_KAKAO_JS_KEY)
    }
  }  
  useEffect(()=>{
    initKakao()
  },[])

  const kakoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:5173/main",
    })
  }
  
  return(
    <KakaoLoginBtn onClick={kakoLoginHandler}>
      <KaKaoIcon id="kakao"/>
      <KakaoLoginTitle fontSize="16px" fontWeight="medium">카카오로 계속하기</KakaoLoginTitle>
    </KakaoLoginBtn>
  )
} 
      
export default KakaoLogin;

const KakaoLoginBtn = tw.div`
  flex
  items-center
  w-[360px]
  h-[56px]
  px-[20px]
  py-[16px]
  bg-[#FFE812]
  rounded-[14px]
  gap-[79px]
`

const KaKaoIcon = tw(Icon)`
  w-[24px]
  h-[24px]
`

const KakaoLoginTitle = tw(Text)`
  
`
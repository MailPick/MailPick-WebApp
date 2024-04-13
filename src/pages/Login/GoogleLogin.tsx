import { useEffect,useRef, useState } from "react";
import useScript from "@/hooks/useScript";
import tw from "twin.macro";
import Icon from "@/components/Atoms/Icon";
import Text from "@/components/Atoms/Text";

const postLoginToken = async (idToken:string) => {
  const API_URL = import.meta.env.VITE_DEV_SERVER_URL
  const path = "/main" //백엔드 api url
  console.log("postLoginToken", idToken)
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method:"POST",
      credentials:"include",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(idToken)
    })
    if(!res.ok) throw new Error("postLoginToken Error")
    return true;
  }
  catch(e){
    console.log("postLoginToken Error", e);
    return false;
  }
}



const GoogleLogin = ({
  text = "sign_with"
})=>{
  const [isLogin , setIsLogin] = useState(false)

  const onGoogleSignIn = async res => {
    const {credential} = res;
    const result = await postLoginToken(credential)
    setIsLogin(result)
  }

  useEffect(()=>{
    if(!isLogin) return;
    window.electron.ipcRenderer.send('login-successful')
  },[isLogin])
  const googleSignInButton = useRef(null);
  
  useScript("https://accounts.google.com/gsi/client",()=>{
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: onGoogleSignIn
    });

    window.google.accounts.id.renderButton(
      googleSignInButton.current,
      { theme: "filled_blue", size: "large", text, width:"360" }
    )
  })
  const handleGoogleLogin = () => {
      const button = document.querySelector('[aria-labelledby="button-label"]')
      if(button instanceof HTMLElement)
        button.click()
  }

  return (
    <>
    <GoogleSignInBtn ref={googleSignInButton}/>
      <GoogleLoginBtn onClick={handleGoogleLogin}>
        <GoogleIcon id="google"/>
        <GoogleLoginTitle fontSize="16px" fontWeight="medium">Google로 계속하기</GoogleLoginTitle>
      </GoogleLoginBtn>
    </>
  )
}

export default GoogleLogin;

const GoogleSignInBtn = tw.div`
  hidden
`
const GoogleLoginBtn = tw.button`
  flex
  items-center
  w-[360px]
  h-[56px]
  px-[18px]
  py-[18px]
  bg-[#FFFFFF]
  rounded-[14px]
  gap-[75px]
  shadow-[0px 0px 4px 0px rgba(0, 0, 0, 0.10);]
`

const GoogleIcon = tw(Icon)`
  w-[24px] h-[24px]
`
const GoogleLoginTitle = tw(Text)`
  
`
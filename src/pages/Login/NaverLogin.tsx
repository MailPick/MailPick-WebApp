import Icon from "@/components/Atoms/Icon";
import Text from "@/components/Atoms/Text";
import { useEffect, useRef, useState } from "react";
import tw from 'twin.macro';



const NaverLogin = () => {
  const [userInfo, setUserInfo] = useState();
  const naverRef = useRef<HTMLDivElement>(null); // ref 타입 지정
  const {naver} = window;
  console.log(userInfo)
  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = import.meta.env.VITE_NAVER_CALLBACK_URL;
  
  const initializeNaverLogin = () => {
    if (naver) { // naver 객체 존재 확인
      const naverLogin = new naver.LoginWithNaverId({
        clientId: NAVER_CLIENT_ID,
        callbackUrl: NAVER_CALLBACK_URL,
        isPopup: true,
        loginButton: { color: "green", type: 3, height: 55 },
        callbackHandle: true,
      });
      naverLogin.init();
      naverLogin.getLoginStatus((status: boolean) => {
        if (status) {
          const userInfo = naverLogin.user;
          setUserInfo(userInfo);
          console.log(userInfo);
          window.location.href = "/main";
          window.electron.ipcRenderer.send('login-successful')
        }
      });
    }
  }

  const userAccessToken = () => {
    window.location.href.includes('access_token') && getToken();
  }

  const getToken = () => {
    const token = window.location.href.split('=')[1].split('&')[0];
    console.log(token)
  }

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  const handleNaverLogin = () => {
    if (naverRef.current) {
      const firstChild = naverRef.current.children[0];
      if (firstChild instanceof HTMLElement) {
        firstChild.click();
      }
    }
  }

  return (
    <>
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>
        <NaverIcon id="naver"/>
        <NaverLoginTitle fontSize="16px" fontWeight="medium">네이버로 계속하기</NaverLoginTitle>
      </NaverLoginBtn>
    </>
  )
}

export default NaverLogin;

const NaverIdLogin = tw.div`
	hidden
`;

const NaverLoginBtn = tw.button`
	flex
	items-center
	w-[360px]
	h-[56px]
  px-[24px]
  py-[20px]
	bg-[#03c75a]
	rounded-[14px]
  gap-[82px]
`;

const NaverIcon = tw(Icon)`
	w-[16px]
	h-[16px]
`;

const NaverLoginTitle = tw(Text)`
  text-white
`;

export {};

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        on: (channel: string, func: (...args: unknown[]) => void) => void;
        send: (channel: string, ...args: unknown[]) => void;
        // 필요한 경우 다른 ipcRenderer 메서드들도 여기에 추가할 수 있습니다.
      };
    };
    naver?: {
      // 생성자 시그니처 추가
      LoginWithNaverId: new (options: any) => {
        init: () => void;
        getLoginStatus: (callback: (status: boolean) => void) => void;
        user: any; // user의 타입을 더 구체적으로 정의할 수 있습니다.
      };
    };
    google?:any;
    Kakao?:any;
  }
}
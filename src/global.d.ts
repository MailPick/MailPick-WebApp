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
  }
}
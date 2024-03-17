import {create} from 'zustand';

import { EmailType } from '@/types/data.type';

interface EmailState {
  activeEmail: EmailType | null; 
  setActiveEmail: (activeEmail: EmailType | null) => void;
}

//초기값 activeEmail inbox 처음걸로 선택해야할듯
export const useActiveEmailStore = create<EmailState>((set) => ({
  activeEmail: null, // 초기 상태를 null로 설정
  setActiveEmail: (activeEmail) => set({activeEmail}),
}));



import {create} from 'zustand';

type Store = {
  isEmailSummarySuccess: boolean;
  setIsEmailSummarySuccess: (isEmailSummarySuccess:boolean) => void;
  isEmailSummaryPending: boolean;
  setIsEmailSummaryPending: (isEmailSummaryPending:boolean) => void;
};


export const useEmailSummaryStore = create<Store>((set) => ({
  isEmailSummarySuccess: false,
  isEmailSummaryPending: false,
  setIsEmailSummarySuccess: (isEmailSummarySuccess) => set({isEmailSummarySuccess}),
  setIsEmailSummaryPending: (isEmailSummaryPending) => set({isEmailSummaryPending}),
  resetEmailSummary: () => set({isEmailSummarySuccess: false,isEmailSummaryPending: false}),
}));




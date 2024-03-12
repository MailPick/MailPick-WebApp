import {create} from 'zustand';

type Account = {
  userId:string;
  account:string;
  identifyColor:string;
}

type Store = {
  account: Account[];
  setAccount: (account: Account[]) => void;
};

export const useAccountStore = create<Store>((set) => ({
  account: [],
  setAccount: (account) => set({account}),
}));



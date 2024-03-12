import {create} from 'zustand';

type Email = {
  uid: string;
  from: string;
  to: string;
  subject: string;
  body: {
    plain: string;
    html: string;
  };
  flags: string;
  date: string;  
};

type Store = {
  email: Email[];
  setEmail: (email: Email[]) => void;
};
export const useEmailStore = create<Store>((set) => ({
  email: [],
  setEmail: (email) => set({email}),
}));



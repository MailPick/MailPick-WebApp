import {create} from 'zustand';

interface SelectStore {
  selectSection: string;
  setSelectSection: (selectSection: string) => void;
}

export const useSelectSectionStore = create<SelectStore>((set) => ({
  selectSection: 'inbox',
  setSelectSection: (selectSection) => set({selectSection}),
}));
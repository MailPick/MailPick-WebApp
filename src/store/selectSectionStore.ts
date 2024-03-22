import {create} from 'zustand';

interface SelectStore {
  selectSection: string;
  setSelectSection: (selectSection: string) => void;
}

interface SelectTopButton{
  selectTopButton: string;
  setSelectTopButton: (topbutton: string) => void;
}

export const useSelectSectionStore = create<SelectStore>((set) => ({
  selectSection: 'inbox',
  setSelectSection: (selectSection) => set({selectSection}),
}));

export const useSelectTopButtonStore = create<SelectTopButton>((set) => ({
  selectTopButton: "",
  setSelectTopButton: (selectTopButton) => set({selectTopButton}),
}));


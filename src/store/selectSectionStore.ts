import {create} from 'zustand';

interface SelectStore {
  selectSection: string;
  setSelectSection: (selectSection: string) => void;
}

interface SelectTopButton{
  selectTopButton: string;
  setSelectTopButton: (topbutton: string) => void;
}

interface IsExpanded {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export const useSelectSectionStore = create<SelectStore>((set) => ({
  selectSection: 'inbox',
  setSelectSection: (selectSection) => set({selectSection}),
}));

export const useSelectTopButtonStore = create<SelectTopButton>((set) => ({
  selectTopButton: "",
  setSelectTopButton: (selectTopButton) => set({selectTopButton}),
}));

export const useIsExpandedStore = create<IsExpanded>((set) => ({
  isExpanded: false,
  setIsExpanded: (isExpanded) => set({isExpanded}),
}));


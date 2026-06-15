import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { createThemingSlice } from "./slices/theming.slice";
import { createLanguageSlice } from "./slices/language.slice";

export type ThemeModesTypes = "light" | "dark" | "system";
export type LanguagesTypes = "en" | "de" | "es";

export interface Store {
  theme: ThemeModesTypes;
  setTheme: (theme: ThemeModesTypes) => void;
  language: LanguagesTypes;
  setLanguage: (language: LanguagesTypes) => void;
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      ...createThemingSlice(set),
      ...createLanguageSlice(set),
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useStore;

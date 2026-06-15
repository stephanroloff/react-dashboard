import type { Store } from "../store";

export const createLanguageSlice = (
  set: (partial: Partial<Store> | ((state: Store) => Partial<Store>)) => void,
) => ({
  language: "en" as const,
  setLanguage: (language: Store["language"]) => {
    set({ language });
  },
});

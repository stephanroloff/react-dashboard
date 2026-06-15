import type { Store } from "../store";

export const createThemingSlice = (
  set: (partial: Partial<Store> | ((state: Store) => Partial<Store>)) => void,
) => ({
  theme: "light" as const,
  setTheme: (theme: Store["theme"]) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark", "system");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    set({ theme });
  },
});

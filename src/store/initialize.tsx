import useStore from "./store.tsx";
import i18n from "../translations/i18n.ts";

export function initializeStore() {
  // Get the state of the store
  const { theme, language } = useStore.getState();

  // Change the language of the application
  i18n.changeLanguage(language);

  // Set the theme of the application
  const root = window.document.documentElement;
  root.classList.add(theme);
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
}

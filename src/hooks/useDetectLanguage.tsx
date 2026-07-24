import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useStore, { type LanguagesTypes } from "@/store/store";

function useDetectLanguage() {
  const { language, setLanguage } = useStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (language !== "system") return;

    const systemLanguage = navigator.language.split("-")[0];
    const supported = ["en", "de", "es"] as const;
    const detected = supported.includes(
      systemLanguage as (typeof supported)[number],
    )
      ? (systemLanguage as LanguagesTypes)
      : "en";

    i18n.changeLanguage(detected);
    setLanguage(detected);
  }, [language, i18n, setLanguage]);
}

export default useDetectLanguage;

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import enFlag from "../../assets/en.svg";
import esFlag from "../../assets/es.svg";
import deFlag from "../../assets/de.svg";
import i18n from "../../translations/i18n";
import useStore, { type LanguagesTypes } from "@/store/store.tsx";

export function LanguageSwitcher() {
  const { language, setLanguage } = useStore();

  const handleLanguageChange = (language: LanguagesTypes) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <img
            src={
              language === "en" ? enFlag : language === "de" ? deFlag : esFlag
            }
            alt="Language"
            className="size-4"
          />
          <span className="text-black dark:text-white">
            {language === "en"
              ? "English"
              : language === "de"
                ? "German"
                : "Spanish"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[100px]">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          <img src={enFlag} alt="English" className="size-4" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("de")}>
          <img src={deFlag} alt="German" className="size-4" />
          German
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("es")}>
          <img src={esFlag} alt="Spanish" className="size-4" />
          Spanish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

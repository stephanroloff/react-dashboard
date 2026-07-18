import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import useStore, { type LanguagesTypes } from "@/store/store";
import supabase from "@/supabase/connect";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { language, setLanguage } = useStore();
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  if (language === "system") {
    const systemLanguage = navigator.language.split("-")[0];
    if (
      systemLanguage === "en" ||
      systemLanguage === "de" ||
      systemLanguage === "es"
    ) {
      i18n.changeLanguage(systemLanguage);
      setLanguage(systemLanguage as LanguagesTypes);
    } else {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email: "s.roloff01@gmail.com",
      password: "xsBK4CRACqPGp4xQu-jbRPk9",
    });

    if (error) {
      console.error("Error al registrarse", error);
      return;
    }

    navigate("/");
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">{t("signupForm.title")}</h1>
          <p className="text-sm text-balance text-muted-foreground">
            {t("signupForm.description")}
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">{t("signupForm.fullName")}</FieldLabel>
          <Input id="name" type="text" placeholder="John Doe" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">{t("signupForm.email")}</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
          {/* <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email
            with anyone else.
          </FieldDescription> */}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">{t("signupForm.password")}</FieldLabel>
          <Input id="password" type="password" required />
          <FieldDescription>
            {t("signupForm.passwordDescription")}
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">
            {t("signupForm.confirmPassword")}
          </FieldLabel>
          <Input id="confirm-password" type="password" required />
          <FieldDescription>
            {t("signupForm.confirmPasswordDescription")}
          </FieldDescription>
        </Field>
        <Field>
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            {t("signupForm.signUp")}
          </Button>
        </Field>
        <Field>
          <FieldDescription className="px-6 text-center">
            {t("signupForm.alreadyHaveAccount")}{" "}
            <a href="/login" className="text-blue-500">
              {t("signupForm.loginHere")}
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}

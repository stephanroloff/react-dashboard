import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import useDetectLanguage from "@/hooks/useDetectLanguage";
import { signUpSchema, type SignUpSchema } from "@/schemas/signUpSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/supabase/signUp";
import { CardSmall } from "../Card";
import { useNavigate } from "react-router";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useDetectLanguage();

  const onSubmit = async (data: SignUpSchema) => {
    const { error } = await signUp(data);
    if (error) {
      setError("root", { message: error.message });
      throw new Error(error.message);
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <FieldGroup>
        {!isSubmitSuccessful ? (
          <>
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className="text-2xl font-bold">{t("signupForm.title")}</h1>
              <p className="text-sm text-balance text-muted-foreground">
                {t("signupForm.description")}
              </p>
            </div>

            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="name">
                    {t("signupForm.fullName")}
                  </FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder=""
                    required
                    {...field}
                  />
                  <FieldError>{errors.name?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="email">
                    {t("signupForm.email")}
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...field}
                  />
                  <FieldError>{errors.email?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="password">
                    {t("signupForm.password")}
                  </FieldLabel>
                  <Input id="password" type="password" required {...field} />
                  <FieldError>{errors.password?.message}</FieldError>
                </Field>
              )}
            />

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="confirm-password">
                    {t("signupForm.confirmPassword")}
                  </FieldLabel>
                  <Input
                    id="confirm-password"
                    type="password"
                    required
                    {...field}
                  />
                  <FieldDescription>
                    {t("signupForm.confirmPasswordDescription")}
                  </FieldDescription>
                  <FieldError>{errors.confirmPassword?.message}</FieldError>
                </Field>
              )}
            />
            <Field>
              <Button type="submit" disabled={isSubmitting}>
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
          </>
        ) : (
          <>
            <CardSmall className="w-full bg-green-300/10 border-green-400 border-1 py-4 px-2 my-6 text-lg">
              <div className="flex justify-center flex-col text-center">
                {t("signupForm.accountCreated")}
                <Button
                  onClick={() => navigate("/login")}
                  className="mt-4 mx-auto"
                >
                  {t("signupForm.loginHere")}
                </Button>
              </div>
            </CardSmall>
          </>
        )}
        {errors.root && (
          <CardSmall className="w-full bg-red-300/10 border-red-400 border-1 py-4 px-2 my-6 text-lg">
            <div className="flex justify-center flex-col text-center">
              {errors.root.message}
            </div>
          </CardSmall>
        )}
      </FieldGroup>
    </form>
  );
}

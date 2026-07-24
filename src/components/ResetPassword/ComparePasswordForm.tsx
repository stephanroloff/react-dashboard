import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useTranslation } from "react-i18next";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  comparePasswordsSchema,
  type ComparePasswordsSchema,
} from "@/schemas/comparePasswordsSchema";
import { useNavigate } from "react-router";
import { CardSmall } from "../Card";
import { updateUserPassword } from "@/supabase/updateUserPassword";

export function ComparePasswordForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ComparePasswordsSchema>({
    resolver: zodResolver(comparePasswordsSchema(t)),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: ComparePasswordsSchema) => {
    const { error } = await updateUserPassword(data);

    if (error && error.code === "same_password") {
      setError("root", { message: t("comparePasswordForm.samePasswordError") });
      throw new Error(error.message);
    }
    if (error) {
      setError("root", { message: error.message });
      throw new Error(error.message);
    }
    navigate("/");
  };

  return (
    <form
      className={className}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <FieldGroup>
        {!isSubmitSuccessful ? (
          <>
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className="text-2xl font-bold">
                {t("comparePasswordForm.title")}
              </h1>
              <p className="text-sm text-balance text-muted-foreground">
                {t("comparePasswordForm.description")}
              </p>
            </div>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="password">
                    {t("loginForm.password")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder={t("comparePasswordForm.passwordPlaceholder")}
                    required
                    className="bg-background"
                  />
                  <FieldError>{errors.password?.message}</FieldError>
                </Field>
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="confirmPassword">
                    {t("comparePasswordForm.confirmPassword")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="confirmPassword"
                    type="password"
                    placeholder={t(
                      "comparePasswordForm.confirmPasswordPlaceholder",
                    )}
                    required
                    className="bg-background"
                  />
                  <FieldError>{errors.confirmPassword?.message}</FieldError>
                </Field>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {t("comparePasswordForm.resetPassword")}
            </Button>
          </>
        ) : (
          <>
            <CardSmall className="w-full bg-green-300/10 border-green-400 border-1 py-4 px-2 my-6 text-lg">
              {t("comparePasswordForm.passwordChangedSuccessfully")}
            </CardSmall>
            <Button type="button" onClick={() => navigate("/login")}>
              {t("comparePasswordForm.goToLoginPage")}
            </Button>
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

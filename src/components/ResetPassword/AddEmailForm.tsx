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
import { resetPasswordForEmail } from "@/supabase/resetPasswordForEmail";
import { CardSmall } from "../Card";
import { resetEmailSchema } from "@/schemas/resetEmail";
import type { ResetEmailSchema } from "@/schemas/resetEmail";

export function AddEmailForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ResetEmailSchema>({
    resolver: zodResolver(resetEmailSchema(t)),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ResetEmailSchema) => {
    const error = await resetPasswordForEmail(data.email);
    if (error) {
      setError("root", { message: error.message });
      throw new Error(error.message);
    }
  };

  return (
    <form
      className={className}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">{t("addEmailForm.title")}</h1>
          <p className="text-sm text-balance text-muted-foreground">
            {t("addEmailForm.description")}
          </p>
        </div>
        {!isSubmitSuccessful ? (
          <>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="email">
                    {t("loginForm.email")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    required
                    className="bg-background"
                  />
                  <FieldError>{errors.email?.message}</FieldError>
                </Field>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {t("addEmailForm.sendEmail")}
            </Button>
          </>
        ) : (
          <>
            <CardSmall className="w-full bg-green-300/10 border-green-400 border-1 py-4 px-2 my-6 text-lg">
              {t("addEmailForm.passwordResetLinkSent")}
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

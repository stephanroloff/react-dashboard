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
import { CardSmall } from "../Card";
import { scaffoldFormSchema } from "@/schemas/scaffoldFormSchema.tsx";
import type { ScaffoldFormSchema } from "@/schemas/scaffoldFormSchema.tsx";

export function ScaffoldForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    // setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ScaffoldFormSchema>({
    resolver: zodResolver(scaffoldFormSchema(t)),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: ScaffoldFormSchema) => {
    console.log(data.email);
  };
  // const onSubmit = async (data: ScaffoldFormSchema) => {
  //   console.log(data);
  //   // const error = await resetPasswordForEmail(data.email);
  //   // if (error) {
  //   //   setError("root", { message: error.message });
  //   //   throw new Error(error.message);
  //   // }
  // };

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
              {t("General.success")}
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

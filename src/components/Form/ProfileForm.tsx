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
import {
  profileFormSchema,
  type ProfileFormSchema,
} from "@/schemas/profileFormSchema";
import { usePostUserName } from "@/supabase/user/usePostUserName";

export function ProfileForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  const { mutate } = usePostUserName();
  const {
    handleSubmit,
    control,
    // setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema(t)),
    defaultValues: { name: "" },
  });

  const onSubmit = async (data: ProfileFormSchema) => {
    mutate({ name: data.name });
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
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="name">
                    {t("profileForm.name")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="bg-background"
                  />
                  <FieldError>{errors.name?.message}</FieldError>
                </Field>
              )}
            />
            {/* <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Field>
                  <FieldLabel htmlFor="email">
                    {t("profileForm.email")}
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
            /> */}
            <Button type="submit" disabled={isSubmitting}>
              {t("profileForm.save")}
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

import { z } from "zod";
import type { TFunction } from "i18next";
import { passwordSchema } from "./passwordSchema";
import { emailSchema } from "./emailSchema";

export const signUpSchema = (t: TFunction) => {
  return z
    .object({
      name: z.string().min(1, { message: t("signupForm.nameError") }),
      email: emailSchema(t),
      password: passwordSchema(t),
      confirmPassword: passwordSchema(t),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("comparePasswordForm.passwordMismatch"),
      path: ["confirmPassword"],
    });
};

export type SignUpSchema = z.infer<ReturnType<typeof signUpSchema>>;

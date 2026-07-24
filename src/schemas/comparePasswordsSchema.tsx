import { z } from "zod";
import type { TFunction } from "i18next";
import { passwordSchema } from "./passwordSchema";

export const comparePasswordsSchema = (t: TFunction) =>
  z
    .object({
      password: passwordSchema(t),
      confirmPassword: passwordSchema(t),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("comparePasswordForm.passwordMismatch"),
      path: ["confirmPassword"],
    });

export type ComparePasswordsSchema = z.infer<
  ReturnType<typeof comparePasswordsSchema>
>;

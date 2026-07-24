import { z } from "zod";
import type { TFunction } from "i18next";
import { passwordSchema } from "./passwordSchema";
import { emailSchema } from "./emailSchema";

export const loginSchema = (t: TFunction) => {
  return z.object({
    email: emailSchema(t),
    password: passwordSchema(t),
  });
};

export type LoginSchema = z.infer<ReturnType<typeof loginSchema>>;

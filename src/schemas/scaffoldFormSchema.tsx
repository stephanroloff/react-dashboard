import { z } from "zod";
import type { TFunction } from "i18next";
import { emailSchema } from "./emailSchema";

export const scaffoldFormSchema = (t: TFunction) => {
  return z.object({
    email: emailSchema(t),
  });
};

export type ScaffoldFormSchema = z.infer<ReturnType<typeof scaffoldFormSchema>>;

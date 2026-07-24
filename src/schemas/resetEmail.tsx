import { z } from "zod";
import type { TFunction } from "i18next";
import { emailSchema } from "./emailSchema";

export const resetEmailSchema = (t: TFunction) =>
  z.object({
    email: emailSchema(t),
  });

export type ResetEmailSchema = z.infer<ReturnType<typeof resetEmailSchema>>;

import { z } from "zod";
import type { TFunction } from "i18next";

export const profileFormSchema = (t: TFunction) => {
  return z.object({
    name: z.string().min(1, { message: t("profileForm.nameRequired") }),
  });
};

export type ProfileFormSchema = z.infer<ReturnType<typeof profileFormSchema>>;

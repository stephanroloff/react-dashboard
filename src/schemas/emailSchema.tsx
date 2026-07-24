import { z } from "zod";
import type { TFunction } from "i18next";

export const emailSchema = (t: TFunction) =>
  z
    .string()
    .trim()
    .toLowerCase()
    .pipe(z.email({ message: t("loginForm.emailError") }));

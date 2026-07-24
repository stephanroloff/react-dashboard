import { z } from "zod";
import type { TFunction } from "i18next";

export const passwordSchema = (t: TFunction) =>
  z
    .string()
    .trim()
    .min(8, { message: t("comparePasswordForm.passwordMinLength") })
    .regex(/[A-Z]/, {
      message: t(
        "comparePasswordForm.passwordMustContainAtLeastOneUppercaseLetter",
      ),
    })
    .regex(/[a-z]/, {
      message: t(
        "comparePasswordForm.passwordMustContainAtLeastOneLowercaseLetter",
      ),
    })
    .regex(/[0-9]/, {
      message: t("comparePasswordForm.passwordMustContainAtLeastOneNumber"),
    })
    .regex(/[!@#$%^&*]/, {
      message: t(
        "comparePasswordForm.passwordMustContainAtLeastOneSpecialCharacter",
      ),
    });

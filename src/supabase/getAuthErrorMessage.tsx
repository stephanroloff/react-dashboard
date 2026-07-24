import type { TFunction } from "i18next";
import type { AuthError } from "@supabase/supabase-js";

export const getAuthErrorMessage = (error: AuthError, t: TFunction) =>
  t(`authErrors.${error.code ?? "default"}`, {
    defaultValue: t("authErrors.default"),
  });

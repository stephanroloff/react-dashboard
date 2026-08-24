import supabase from "./connect";
import type { SignUpSchema } from "@/schemas/signUpSchema";

export const signUp = async (data: SignUpSchema) => {
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  return { error };
};

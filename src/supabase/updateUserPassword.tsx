import supabase from "./connect";

export const updateUserPassword = async (data: { password: string }) => {
  const { error } = await supabase.auth.updateUser({
    password: data.password,
  });

  return { error };
};

import { useMutation } from "@tanstack/react-query";
import supabase from "../connect";
import { useGetAuthUser } from "@/supabase/user/useGetAuthUser";

export function usePostUserName() {
  const { data: authUser } = useGetAuthUser();
  const id = authUser?.id;
  return useMutation({
    mutationFn: async ({ name }: { name: string }) => {
      const { error } = await supabase
        .from("users")
        .update({ name })
        .eq("id", id);

      if (error) throw error;
    },
  });
}

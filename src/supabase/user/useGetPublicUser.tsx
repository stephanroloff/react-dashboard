import supabase from "../connect";
import { useQuery } from "@tanstack/react-query";
import { useGetAuthUser } from "./useGetAuthUser";

// Important: Getting the user from the public database, not the auth database.
export function useGetPublicUser() {
  const { data: authUser } = useGetAuthUser();
  const id = authUser?.id;

  return useQuery({
    enabled: !!id,
    queryKey: ["public-user", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", id);

      if (error) throw error;

      return data[0];
    },
  });
}

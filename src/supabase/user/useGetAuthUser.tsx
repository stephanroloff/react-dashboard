import supabase from "../connect";
import { useQuery } from "@tanstack/react-query";

// Important: Getting the user from the auth database, not the public database.
export function useGetAuthUser() {
  return useQuery({
    queryKey: ["auth-user"],
    queryFn: async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) throw error;

      return user;
    },
  });
}

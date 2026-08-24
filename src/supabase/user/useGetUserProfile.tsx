import supabase from "../connect";
import { useGetUser } from "./useGetUser.tsx";
import { useQuery } from "@tanstack/react-query";

export function useGetUserProfile() {
  const { data: user } = useGetUser();
  const id = user?.id;
  return useQuery({
    queryKey: ["user-profile", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });
}

import supabase from "./connect";
import { useQuery } from "@tanstack/react-query";

export function useGetUsers() {
  return useQuery({
    queryKey: ["users", 1],
    queryFn: async () => {
      const { data, error } = await supabase.from("users").select("*");

      if (error) throw error;

      return data;
    },
  });
}

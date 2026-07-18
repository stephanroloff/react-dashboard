import supabase from "./connect";
import { useQuery } from "@tanstack/react-query";

export function useGetUser(id: number) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", id);

      if (error) throw error;

      return data?.[0] ?? null;
    },
  });
}

import supabase from "@/supabase/connect";
import { useNavigate } from "react-router";

export function useLogOut() {
  const navigate = useNavigate();

  return async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };
}

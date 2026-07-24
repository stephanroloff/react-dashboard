import supabase from "@/supabase/connect";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";

export const useAuthSession = () => {
  const [authSession, setAuthSession] = useState<Session | null>(null);
  const [isRecovery, setIsRecovery] = useState<boolean | null>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (_event === "PASSWORD_RECOVERY") setIsRecovery(true);
      if (_event === "SIGNED_OUT") setIsRecovery(false);
      if (_event === "USER_UPDATED") setIsRecovery(false); // Password already changed
      setAuthSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return { authSession, isRecovery };
};

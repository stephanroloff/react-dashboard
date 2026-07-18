import supabase from "@/supabase/connect";
import { useState, useEffect } from "react";
import type { Session } from "@supabase/supabase-js";

export const useAuthSession = () => {
  const [authSession, setAuthSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error(error);
        return;
      }
      setAuthSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { authSession };
};

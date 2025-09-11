import { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { googleLoginAction } from "@/actions/auth.actions";
import { useAuth } from "@/contexts/AuthContext";

export const useGoogleLogin = (code: string | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const auth = useAuth();

  const googleLogin = useCallback(async () => {
    if (!code) return;
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    try {
      const result = await googleLoginAction(code);

      if (result.success && result.user) {
        auth.login(result.user);
        router.push("/");
        setIsSuccess(true);
      } else if (result.error) {
        setError(result.error);
      } else {
        setError("An unknown error occurred.");
      }
    } catch (e) {
      console.error(e);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [code, auth, router]);

  useEffect(() => {
    if (code) {
      googleLogin();
    }
  }, [googleLogin, code]);
  return {
    isSuccess,
    isLoading,
    error,
  };
};

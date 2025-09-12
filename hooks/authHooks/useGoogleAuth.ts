import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import { googleAuthAction } from "@/actions/auth.actions";
import { useAuth } from "@/contexts/AuthContext";

export const useGoogleAuth = (redirectUrl?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const auth = useAuth();

  const googleAuth = useCallback(
    async (access_token: string) => {
      if (!access_token) return;
      setIsLoading(true);
      setError(null);
      setIsSuccess(false);
      try {
        const result = await googleAuthAction(access_token);

        if (result.success && result.user) {
          auth.login(result.user);
          router.push(redirectUrl ? redirectUrl : "/");
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
    },
    [auth, router, redirectUrl]
  );

  return {
    isSuccess,
    isLoading,
    error,
    googleAuth,
  };
};

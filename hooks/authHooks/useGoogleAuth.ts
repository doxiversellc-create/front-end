import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/AuthContext";
import { clientHttpClient } from "@/lib/api/client";
import { getErrorMessage } from "@/lib/utils";
import { googleAuthResponse } from "@/types/auth.types";

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
        const url = "/auth/google/";
        const body = JSON.stringify({ access_token });
        const response = await clientHttpClient<googleAuthResponse>(url, {
          body,
          method: "POST",
        });
        setIsSuccess(true);
        auth.login(response.user);
        router.push(redirectUrl ? redirectUrl : "/");
      } catch (e) {
        console.error(e);
        setError(getErrorMessage(e, "An unexpected error occurred. Please try again."));
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

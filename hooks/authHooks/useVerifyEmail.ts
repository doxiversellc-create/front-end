import { useCallback, useEffect, useState } from "react";

import { verifyEmailAction } from "@/actions/auth.actions";

export const useVerifyEmail = (token: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const verifyEmail = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const result = await verifyEmailAction(token);

      if (result.success) {
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
  }, [token]);

  useEffect(() => {
    if (token) {
      verifyEmail();
    }
  }, [token, verifyEmail]);

  return {
    isLoading,
    error,
    isSuccess,
    verifyEmail,
  };
};

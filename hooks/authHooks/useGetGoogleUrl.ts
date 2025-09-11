import { useCallback, useEffect, useState } from "react";

import { getGoogleAuthURLAction } from "@/actions/auth.actions";

export const useGetGoogleUrl = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authUrl, setAuthUrl] = useState<string | null>(null);

  const getGoogleUrl = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getGoogleAuthURLAction();

      if (result.AuthUrl) {
        setAuthUrl(result.AuthUrl);
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
  }, []);

  useEffect(() => {
    getGoogleUrl();
  }, [getGoogleUrl]);

  return {
    isLoading,
    error,
    authUrl,
  };
};

import { useCallback, useState } from "react";

import { newsletterSubsribeAction } from "@/actions/marketing.actions";

const useNewsletterSubscribe = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const newsletterSubscribe = useCallback(async (email: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await newsletterSubsribeAction(email);

      if (result.success) {
        setSuccess(true);
      } else if (result.error) {
        setError(result.error);
      } else {
        setError("An unknown error occurred.");
      }
    } catch (err: unknown) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { newsletterSubscribe, isLoading, error, success };
};

export default useNewsletterSubscribe;

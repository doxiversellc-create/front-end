import { useState } from "react";

import { forgotPasswordAction } from "@/actions/auth.actions";
import { ForgotPasswordPayload } from "@/types/auth.types";

export const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendResetLink = async (data: ForgotPasswordPayload) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const result = await forgotPasswordAction(data);

      if (result.success && result.message) {
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
  };

  return {
    isLoading,
    error,
    isSuccess,
    sendResetLink,
  };
};

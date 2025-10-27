import { useState } from "react";

import { resetPasswordAction } from "@/actions/auth.actions";
import { ResetPasswordPayload } from "@/types/auth.types";

export const useResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const resetPassword = async (data: ResetPasswordPayload) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const result = await resetPasswordAction(data);
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
  };

  return {
    isLoading,
    error,
    isSuccess,
    resetPassword,
  };
};

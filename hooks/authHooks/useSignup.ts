import { useState } from "react";

import { signupAction } from "@/actions/auth.actions";
import { SignupPayload } from "@/types/auth.types";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const signup = async (data: SignupPayload) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    try {
      const result = await signupAction(data);

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
    isSuccess,
    signup,
    error,
  };
};

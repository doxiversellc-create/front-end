import { useState } from "react";

import { useRouter } from "next/navigation";

import { signupAction } from "@/actions/auth.actions";
import { SignupPayload } from "@/types/auth.types";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const signup = async (data: SignupPayload) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signupAction(data);

      if (result.success && result.user) {
        router.push("/login");
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
    signup,
    error,
  };
};

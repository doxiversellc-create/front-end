import { useState } from "react";

import { useRouter } from "next/navigation";

import { loginAction } from "@/actions/auth.actions";
import { useAuth } from "@/contexts/AuthContext";
import { LoginPayload } from "@/types/auth.types";

export const useLogin = (previousPath?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const auth = useAuth();

  const login = async (data: LoginPayload) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await loginAction(data);

      if (result.success && result.user) {
        auth.login(result.user);

        router.push(previousPath ? previousPath : "/");
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
    login,
    error,
  };
};

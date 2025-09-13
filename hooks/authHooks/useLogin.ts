import { useState } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/AuthContext";
import { clientHttpClient } from "@/lib/api/client";
import { getErrorMessage } from "@/lib/utils";
import { LoginPayload, LoginResponse } from "@/types/auth.types";

export const useLogin = (previousPath?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const auth = useAuth();

  const login = async (data: LoginPayload) => {
    setIsLoading(true);
    setError(null);

    try {
      const url = "/auth/login/";
      const body = JSON.stringify(data);
      const response = await clientHttpClient<LoginResponse>(url, {
        body,
        method: "POST",
      });

      auth.login(response.user);
      router.push(previousPath ? previousPath : "/");
    } catch (e) {
      console.error(e);
      setError(getErrorMessage(e, "Invalid email or password"));
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

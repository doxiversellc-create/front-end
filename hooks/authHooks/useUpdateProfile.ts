import { useState } from "react";

import { updateProfileAction } from "@/actions/auth.actions";
import { useAuth } from "@/contexts/AuthContext";
import { UpdateProfilePayload } from "@/types/auth.types";

export const useUpdateProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const auth = useAuth();

  const updateProfile = async (data: UpdateProfilePayload) => {
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    try {
      const result = await updateProfileAction(data);
      if (result.success && result.user) {
        setIsSuccess(true);
        auth.login(result.user);
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
    updateProfile,
    error,
  };
};

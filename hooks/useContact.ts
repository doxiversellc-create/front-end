import { useCallback, useState } from "react";

import { ContactData } from "@/types/marketing.types";

interface ApiError {
  message: string;
}
const useContact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const sendContactData = useCallback(async (contactData: ContactData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/auth/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        // Type assertion to handle potential error structure from the API
        const errorData = (await response.json()) as ApiError;
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
      }

      setSuccess(true);
    } catch (err: unknown) {
      // 3. Type-safe error handling
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      setSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { sendContactData, isLoading, error, success };
};

export default useContact;

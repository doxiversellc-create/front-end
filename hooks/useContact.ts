import { useCallback, useState } from "react";

import { contactUsAction } from "@/actions/marketing.actions";
import { ContactData } from "@/types/marketing.types";

const useContact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const sendContactData = useCallback(async (contactData: ContactData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await contactUsAction(contactData);

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

  return { sendContactData, isLoading, error, success };
};

export default useContact;

import { useCallback, useState } from "react";

import { submitToolAction } from "@/actions/vendor.action";
import { SubmitToolPayload } from "@/types/vendor.types";

const useSubmitTool = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const submitTool = useCallback(async (toolData: SubmitToolPayload) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await submitToolAction(toolData);

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

  return { submitTool, isLoading, error, success };
};

export default useSubmitTool;

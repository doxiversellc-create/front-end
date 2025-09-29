import { useCallback, useEffect, useState } from "react";

import { getVendorToolsAction } from "@/actions/vendor.action";
import { VendorTool } from "@/types/vendor.types";

const useFetchMyTools = (isLoggedIn: boolean) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<VendorTool[]>([]);

  const fetchMyTools = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getVendorToolsAction();

      if (result.success && result.tools) {
        setData(result.tools);
      } else if (result.error) {
        setError(result.error);
      } else {
        setError("An unknown error occurred.");
      }
    } catch (err: unknown) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchMyTools();
    }
  }, [fetchMyTools, isLoggedIn]);
  return { isLoading, error, data };
};

export default useFetchMyTools;

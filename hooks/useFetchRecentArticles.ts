import { useCallback, useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import { getResearchArticles } from "@/actions/research.action";
import { ResearchArticle } from "@/types/research.types";

const useFetchRecentArticles = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ResearchArticle[]>([]);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || undefined;
  const search = searchParams.get("search") || undefined;

  const fetchRecentArticles = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getResearchArticles({ page, search });

      if (result.success && result.articles) {
        setData(result.articles);
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
  }, [page, search]);

  useEffect(() => {
    fetchRecentArticles();
  }, [fetchRecentArticles]);

  return { data, isLoading, error };
};

export default useFetchRecentArticles;

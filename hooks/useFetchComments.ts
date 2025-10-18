import { useCallback, useEffect, useState } from "react";

import { getBlogArticleComments } from "@/actions/blogs.actions";
import { ArticleComment } from "@/types/blogs.types";

const useFetchComments = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ArticleComment[]>([]);

  const fetchArticleComments = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getBlogArticleComments({ id });
      if (result.success && result.comments) {
        setData(result.comments);
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
  }, [id]);

  useEffect(() => {
    fetchArticleComments();
  }, [fetchArticleComments]);

  return { data, isLoading, error };
};

export default useFetchComments;

import { useCallback, useState } from "react";

import { deleteCommentAction } from "@/actions/blogs.actions";

const useDeleteComment = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const deleteComment = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    try {
      const result = await deleteCommentAction({ id });
      if (result.success) {
        setIsSuccess(true);
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

  return { isSuccess, deleteComment, isLoading, error };
};

export default useDeleteComment;

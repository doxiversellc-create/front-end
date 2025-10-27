import { useCallback, useState } from "react";

import { editCommentAction } from "@/actions/blogs.actions";

const useEditComment = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const editComment = useCallback(async (content: string, commentId: string) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    try {
      const result = await editCommentAction({ id: commentId, content });

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
  }, []);

  return { isSuccess, editComment, isLoading, error };
};

export default useEditComment;

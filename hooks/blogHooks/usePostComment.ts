import { useCallback, useState } from "react";

import { postCommentAction } from "@/actions/blogs.actions";

const usePostComment = (blogId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postComment = useCallback(
    async (content: string) => {
      setIsLoading(true);
      setError(null);
      setIsSuccess(false);
      try {
        const result = await postCommentAction({ id: blogId, content });
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
    },
    [blogId]
  );

  return { isSuccess, postComment, isLoading, error };
};

export default usePostComment;

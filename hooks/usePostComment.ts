import { useCallback, useState } from "react";

import { editCommentAction, postCommentAction } from "@/actions/blogs.actions";

const usePostComment = (id: string, isEditing: boolean) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postComment = useCallback(
    async (content: string) => {
      setIsLoading(true);
      setError(null);
      setIsSuccess(false);
      try {
        const result = isEditing
          ? await editCommentAction({ id, content })
          : await postCommentAction({ id, content });
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
    [id, isEditing]
  );

  return { isSuccess, postComment, isLoading, error };
};

export default usePostComment;

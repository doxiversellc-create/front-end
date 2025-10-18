import { useState } from "react";

import { toast } from "sonner";

import { likeArticleAction } from "@/actions/blogs.actions";
import { useAuth } from "@/contexts/AuthContext";

interface UseLikeBlogArticleProps {
  articleId: string;
  isLikedByUser: boolean;
  likes: number;
}

const useLikeBlogArticle = ({ articleId, isLikedByUser, likes }: UseLikeBlogArticleProps) => {
  const [isLiked, setIsLiked] = useState(isLikedByUser);
  const [optimisticLikes, setOptimisticLikes] = useState(likes);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const likeArticle = async () => {
    if (!isAuthenticated) {
      toast.info("Login or create an account to like articles");
      return;
    }

    setIsLoading(true);

    setOptimisticLikes(prev => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(prev => !prev);

    const result = await likeArticleAction({ id: articleId });

    if (result.error) {
      setIsLiked(isLikedByUser);
      setOptimisticLikes(likes);
      toast.error("Could not like article");
    }

    setIsLoading(false);
  };

  return { likeArticle, isLiked, isLoading, optimisticLikes };
};

export default useLikeBlogArticle;

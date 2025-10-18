import { useState } from "react";

import { toast } from "sonner";

import { likeArticleAction } from "@/actions/blogs.actions";
import { useAuth } from "@/contexts/AuthContext";

interface useLikeBlogArticleProps {
  articleId: string;
  isLikedByUser: boolean;
}
const useLikeBlogArticle = ({ articleId, isLikedByUser }: useLikeBlogArticleProps) => {
  const [isLiked, setIsLiked] = useState(isLikedByUser);
  const { isAuthenticated } = useAuth();
  const [isLoading, setisLoading] = useState(false);

  const likeArticle = async () => {
    setisLoading(false);
    if (!isAuthenticated) {
      toast.info("Login or Create an account to like articles");
      return;
    }

    setIsLiked(prev => !prev);
    const result = await likeArticleAction({ id: articleId });

    if (result.error) {
      setIsLiked(isLikedByUser);
      toast.error("Could not like article");
    }
    setisLoading(false);
  };

  return {
    likeArticle,
    isLiked,
    isLoading,
  };
};

export default useLikeBlogArticle;

import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import useLikeBlogArticle from "@/hooks/useLikeBlogArticle";
import { cn } from "@/lib/utils";

interface ArticleLikeButtonProps {
  likes: number;
  isLikedByUser: boolean;
  articleId: string;
}
const ArticleLikeButton = ({ isLikedByUser, likes, articleId }: ArticleLikeButtonProps) => {
  const { isLiked, isLoading, likeArticle, optimisticLikes } = useLikeBlogArticle({
    articleId,
    isLikedByUser,
    likes,
  });

  return (
    <Button size="sm" variant="outline" onClick={likeArticle} disabled={isLoading}>
      <Heart className={cn("size-5", isLiked && "like-button fill-primary text-primary")} />
      {optimisticLikes}
    </Button>
  );
};

export default ArticleLikeButton;

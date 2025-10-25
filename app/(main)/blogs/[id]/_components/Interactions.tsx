"use client";
import { MessageCircleMore } from "lucide-react";

import { Button } from "@/components/ui/button";
import ArticleLikeButton from "./ArticleLikeButton";

interface InteractionsProps {
  articleId: string;
  likes: number;
  comments: number;
  isLikedByUser: boolean;
}
export default function Interactions({
  comments,
  articleId,
  likes,
  isLikedByUser,
}: InteractionsProps) {
  const handleCommentsScroll = () => {
    const FIXED_HEADER_HEIGHT = 70;
    const element = document.getElementById("comments");

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;

      const offsetPosition = elementPosition + window.scrollY - FIXED_HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex items-center gap-4">
      <ArticleLikeButton articleId={articleId} likes={likes} isLikedByUser={isLikedByUser} />
      <Button size={"sm"} variant={"outline"} onClick={handleCommentsScroll}>
        <MessageCircleMore className="size-5" /> {comments}
      </Button>
    </div>
  );
}

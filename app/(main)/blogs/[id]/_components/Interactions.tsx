"use client";
import { Bookmark, Heart, MessageCircleMore } from "lucide-react";

import { Button } from "@/components/ui/button";

interface InteractionsProps {
  likes: number;
  comments: number;
}
export default function Interactions({ comments, likes }: InteractionsProps) {
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
      <Button size={"sm"} variant={"outline"}>
        <Heart className="size-5" /> {likes}
      </Button>
      <Button size={"sm"} variant={"outline"} onClick={handleCommentsScroll}>
        <MessageCircleMore className="size-5" /> {comments}
      </Button>
      <Button size={"sm"} variant={"outline"}>
        <Bookmark className="size-5" />
      </Button>
    </div>
  );
}

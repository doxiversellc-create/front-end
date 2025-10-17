import { Bookmark, Heart, MessageCircleMore } from "lucide-react";

import { Button } from "@/components/ui/button";

interface InteractionsProps {
  likes: number;
  comments: number;
}
export default function Interactions({ comments, likes }: InteractionsProps) {
  return (
    <div className="flex items-center gap-4">
      <Button size={"sm"} variant={"outline"}>
        <Heart className="size-5" /> {likes}
      </Button>
      <Button size={"sm"} variant={"outline"}>
        <MessageCircleMore className="size-5" /> {comments}
      </Button>
      <Button size={"sm"} variant={"outline"}>
        <Bookmark className="size-5" />
      </Button>
    </div>
  );
}

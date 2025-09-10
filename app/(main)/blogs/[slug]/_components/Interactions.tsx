import { Bookmark, Heart, MessageCircleMore } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Interactions() {
  return (
    <div className="flex items-center gap-4">
      <Button size={"sm"} variant={"outline"}>
        <Heart className="size-5" /> 85
      </Button>
      <Button size={"sm"} variant={"outline"}>
        <MessageCircleMore className="size-5" /> 13
      </Button>
      <Button size={"sm"} variant={"outline"}>
        <Bookmark className="size-5" />
      </Button>
    </div>
  );
}

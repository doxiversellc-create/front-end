import { FormEvent, useEffect, useState } from "react";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import usePostComment from "@/hooks/usePostComment";

interface CommentInputProps {
  articleId: string;
}
const CommentInput = ({ articleId }: CommentInputProps) => {
  const { error, isLoading, isSuccess, postComment } = usePostComment(articleId);
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (content.trim().length < 5) {
      toast.info("Comment too short");
    }
    postComment(content);
  };

  useEffect(() => {
    if (error) {
      toast.error("Failed to post commet.", { description: error });
    }
    if (isSuccess) {
      toast.success("Comment posted");
    }
  }, [error, isSuccess]);
  return (
    <div className="mb-8 flex gap-3">
      {/* <Image
        src="/avatar.png"
        alt="Your avatar"
        className="h-10 w-10 flex-shrink-0 rounded-full"
        width={40}
        height={40}
      /> */}
      <form className="flex-1" onSubmit={handleSubmit}>
        <Textarea
          value={content}
          minLength={5}
          onChange={e => setContent(e.target.value)}
          placeholder="Add to discussion..."
          className="bg-background text-foreground border-border min-h-[110px] w-full rounded-lg border p-4"
        />
        <Button
          className="hover:bg-primary hover:text-primary-foreground mt-4 w-full rounded-xl"
          variant="outline"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : "Post Comment"}
        </Button>
      </form>
    </div>
  );
};

export default CommentInput;

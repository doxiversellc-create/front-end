import { FormEvent, useEffect } from "react";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import usePostComment from "@/hooks/usePostComment";

interface CommentInputProps {
  articleId: string;
  commentContent: string;
  setCommentContent: (_content: string) => void;
  editingCommentId: number | null;
  stopEditingComment: () => void;
}
const CommentInput = ({
  articleId,
  commentContent,
  setCommentContent,
  editingCommentId,
  stopEditingComment,
}: CommentInputProps) => {
  const isEditing = editingCommentId !== null;
  const { error, isLoading, isSuccess, postComment } = usePostComment(articleId, isEditing);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (commentContent.trim().length < 5) {
      toast.info("Comment too short");
    }
    postComment(commentContent);
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
          value={commentContent}
          minLength={5}
          onChange={e => setCommentContent(e.target.value)}
          placeholder="Add to discussion..."
          className="bg-background text-foreground border-border min-h-[110px] w-full rounded-lg border p-4"
        />
        {isEditing ? (
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="hover:bg-primary hover:text-primary-foreground mt-4 rounded-xl"
              variant="outline"
              type="submit"
              disabled={isLoading}
              onClick={() => {
                // setContent("");
                stopEditingComment();
              }}
            >
              Cancel Edit
            </Button>
            <Button
              className="hover:bg-primary hover:text-primary-foreground mt-4 rounded-xl"
              variant="outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="animate-spin" /> : "Edit Comment"}
            </Button>
          </div>
        ) : (
          <Button
            className="hover:bg-primary hover:text-primary-foreground mt-4 w-full rounded-xl"
            variant="outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Post Comment"}
          </Button>
        )}
      </form>
    </div>
  );
};

export default CommentInput;

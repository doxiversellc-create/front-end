import { FormEvent, useEffect } from "react";

import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import useEditComment from "@/hooks/blogHooks/useEditComment";
import usePostComment from "@/hooks/blogHooks/usePostComment";

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
  const { error, isLoading, isSuccess, postComment } = usePostComment(articleId);
  const {
    error: editError,
    isLoading: editIsLoading,
    isSuccess: editSuccess,
    editComment,
  } = useEditComment();

  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (commentContent.trim().length < 5) {
      toast.info("Comment too short");
    }
    if (isEditing && editingCommentId) {
      editComment(commentContent, editingCommentId.toString());
      return;
    }
    postComment(commentContent);
  };

  useEffect(() => {
    if (error) {
      toast.error("Failed to post comment.", { description: error });
    }
    if (editError) {
      toast.error("Failed to edit comment.", { description: editError });
    }
    if (editSuccess) {
      toast.success("Comment edited.", { description: editSuccess });
      setCommentContent("");
      router.refresh();
    }
    if (isSuccess) {
      toast.success("Comment posted");
      setCommentContent("");
      router.refresh();
    }
  }, [error, isSuccess, editError, editSuccess, setCommentContent, router]);
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
              disabled={editIsLoading}
              onClick={() => {
                setCommentContent("");
                stopEditingComment();
              }}
            >
              Cancel Edit
            </Button>
            <Button
              className="hover:bg-primary hover:text-primary-foreground mt-4 rounded-xl"
              variant="outline"
              type="submit"
              disabled={editIsLoading}
            >
              {editIsLoading ? <Loader2 className="animate-spin" /> : "Edit Comment"}
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

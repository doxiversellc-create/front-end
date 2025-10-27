"use client";

import { useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ArticleComment } from "@/types/blogs.types";
import CommentCard from "./CommentCard";
import CommentInput from "./CommentInput";

export const NoAuthState = () => {
  const pathname = usePathname();
  const loginHref = `/login?next=${pathname}`;

  return (
    <div className="border-border flex w-full flex-col items-center justify-center rounded-lg border-2 p-6 text-center">
      <p className="text-muted-foreground mt-2 text-sm">
        Please login or create an account to leave a comment.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Button variant="outline" asChild size="sm">
          <Link href={loginHref}>Login</Link>
        </Button>
        <Button asChild size="sm">
          <Link href={`/signup`}>Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

interface CommentsSectionProps {
  articleId: string;
  comments: ArticleComment[] | undefined;
}
export default function CommentsSection({ articleId, comments }: CommentsSectionProps) {
  const { isAuthenticated } = useAuth();

  const commentInputRef = useRef<HTMLDivElement>(null);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [commentContent, setCommentContent] = useState("");

  const startEditingComment = (commentId: number, content: string) => {
    if (!isAuthenticated && !commentInputRef.current) return;
    setEditingCommentId(commentId);
    setCommentContent(content);
    if (commentInputRef.current) {
      const yOffset = -100; // your offset in px
      const y = commentInputRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const stopEditingComment = () => {
    setEditingCommentId(null);
    setCommentContent("");
  };

  const renderComments = () => {
    if (!comments)
      return (
        <div className="text-muted-foreground flex h-44 w-full items-center justify-center">
          <p>Failed to load comments</p>
        </div>
      );
    if (comments && comments.length == 0) return;
    return (
      <div className="grid grid-cols-1 space-y-2 rounded-2xl border">
        {comments.map((comment, index) => (
          <div key={comment.id}>
            <CommentCard comment={comment} startEditingComment={startEditingComment} />
            {comments.length - 1 != index && <div className="bg-border h-px w-full" />}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="comments" className="border-border mt-12 border-t pt-8">
      <h2 className="text-foreground mb-6 text-xl font-bold lg:text-2xl">
        Top comments ({comments ? comments.length : 0})
      </h2>

      {/* Comment Input */}
      {isAuthenticated ? (
        <div ref={commentInputRef}>
          <CommentInput
            articleId={articleId}
            commentContent={commentContent}
            editingCommentId={editingCommentId}
            stopEditingComment={stopEditingComment}
            setCommentContent={setCommentContent}
          />
        </div>
      ) : (
        <div className="mb-8">
          <NoAuthState />
        </div>
      )}

      {renderComments()}
      {comments && comments.length > 3 && (
        <div className="mt-8 flex items-center justify-center">
          <Button variant="outline" className="w-fit">
            Load more <ChevronDownIcon className="size-5" />
          </Button>
        </div>
      )}
    </section>
  );
}

"use client";
import { Edit, EllipsisVertical, Trash } from "lucide-react";

import { CustomImage } from "@/components/CustomImage";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { formatBlogDate } from "@/lib/utils";
import { ArticleComment } from "@/types/blogs.types";

interface CommentCardProps {
  comment: ArticleComment;
  startEditingComment: (_commentId: number, _content: string) => void;
}
const CommentCard = ({ comment, startEditingComment }: CommentCardProps) => {
  const { user } = useAuth();
  return (
    <Card key={comment.id} className="border-0 p-3 md:p-5">
      <div className="flex gap-3">
        <CustomImage
          placeHolder="/user-placeholder.svg"
          src={comment.author.profile_image}
          alt={`${comment.author} avatar`}
          className="h-10 w-10 flex-shrink-0 rounded-full"
          width={40}
          height={40}
        />
        <div className="flex-1">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex w-full items-center gap-2">
              <div className="flex w-full flex-col">
                <div className="flex w-full justify-between">
                  <div className="flex items-center gap-2">
                    <h4 className="text-foreground text-lg font-semibold">
                      {comment.author.first_name} {comment.author.last_name}
                    </h4>
                    <span className="text-muted-foreground text-sm">•</span>
                    <span className="text-muted-foreground text-sm">
                      {formatBlogDate(comment.created_at)}
                    </span>
                  </div>
                </div>
                <span className="text-muted-foreground text-sm">@{comment.author.username}</span>
              </div>
            </div>
            {user && user.id === comment.author.id && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => startEditingComment(comment.id, comment.content)}
                  >
                    <Edit /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <p className="text-foreground mb-3 leading-relaxed">{comment.content}</p>
          {/* <button className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm">
                  {comment.replies} replies <ChevronDownIcon className="size-5" />
                </button> */}
        </div>
      </div>
    </Card>
  );
};

export default CommentCard;

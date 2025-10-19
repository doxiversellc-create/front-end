import Image from "next/image";

import { Card } from "@/components/ui/card";
import { formatBlogDate } from "@/lib/utils";
import { ArticleComment } from "@/types/blogs.types";

interface CommentCardProps {
  comment: ArticleComment;
}
const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <Card key={comment.id} className="border-0 p-3 md:p-5">
      <div className="flex gap-3">
        <Image
          src={"/user-placeholder.svg"}
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
                    <h4 className="text-foreground text-lg font-semibold">{comment.author}</h4>
                    <span className="text-muted-foreground text-sm">•</span>
                    <span className="text-muted-foreground text-sm">
                      {formatBlogDate(comment.created_at)}
                    </span>
                  </div>
                  <div className="float-start hidden h-full items-start md:flex">
                    {/* {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon
                              key={index}
                              className={cn(
                                "text-primary-foreground size-5",
                                index < comment.rating ? "fill-primary" : "fill-muted"
                              )}
                            />
                          ))} */}
                  </div>
                </div>
                {/* <span className="text-muted-foreground text-sm">{comment.handle}</span> */}
              </div>
            </div>
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

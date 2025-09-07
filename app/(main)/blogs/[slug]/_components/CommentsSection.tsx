/* eslint-disable react/no-array-index-key */
"use client";

import Image from "next/image";

import { ChevronDownIcon, StarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface Comment {
  id: number;
  author: string;
  handle: string;
  avatar: string;
  timestamp: string;
  content: string;
  replies: number;

  rating: number;
}
const comments: Comment[] = [
  {
    id: 1,
    author: "Ralph Edwards",
    handle: "@ralph.edwards",
    avatar: "/avatar.png",
    timestamp: "2 weeks ago",
    content:
      "It's amazing how AI can detect early signs of depression and anxiety just by analyzing voice patterns. Technology is truly shaping the future of mental health!",
    replies: 5,
    rating: 4,
  },
  {
    id: 2,
    author: "Brooklyn Simmons",
    handle: "@ralph.edwards",
    avatar: "/avatar.png",
    timestamp: "2 weeks ago",
    content:
      "This is fascinating! It's incredible to see how AI can analyze human voices to detect early signs of depression and anxiety. While the technology sounds promising, I wonder how accurate these tools are in real-world scenarios and how privacy is handled. What do you think — should AI play a bigger role in mental health diagnosis?",
    replies: 2,
    rating: 5,
  },
  {
    id: 3,
    author: "Leslie Alexander",
    handle: "@ralph.edwards",
    avatar: "/avatar.png",
    timestamp: "2 weeks ago",
    content:
      "If used responsibly, this innovation could save countless lives by spotting problems before they get worse. I'm excited to see where this goes!",
    replies: 2,
    rating: 3,
  },
];

export default function CommentsSection() {
  return (
    <div className="border-border mt-12 border-t pt-8">
      <h2 className="text-foreground mb-6 text-xl font-bold lg:text-2xl">
        Top comments ({comments.length})
      </h2>

      {/* Comment Input */}
      <div className="mb-8 flex gap-3">
        <Image
          src="/avatar.png"
          alt="Your avatar"
          className="h-10 w-10 flex-shrink-0 rounded-full"
          width={40}
          height={40}
        />
        <div className="flex-1">
          <Textarea
            placeholder="Add To discussion..."
            className="bg-background text-foreground border-border min-h-[110px] w-full rounded-lg border p-4"
          />
          <Button
            className="hover:bg-primary hover:text-primary-foreground mt-4 w-full rounded-xl"
            variant="outline"
          >
            Post Comment
          </Button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-5">
        {comments.map(comment => (
          <Card key={comment.id} className="p-3 md:p-5">
            <div className="flex gap-3">
              <Image
                src={comment.avatar}
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
                            {comment.author}
                          </h4>
                          <span className="text-muted-foreground text-sm">•</span>
                          <span className="text-muted-foreground text-sm">{comment.timestamp}</span>
                        </div>
                        <div className="float-start hidden h-full items-start md:flex">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon
                              key={index}
                              className={cn(
                                "text-primary-foreground size-5",
                                index < comment.rating ? "fill-primary" : "fill-muted"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-muted-foreground text-sm">{comment.handle}</span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground mb-3 leading-relaxed">{comment.content}</p>
                <button className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm">
                  {comment.replies} replies <ChevronDownIcon className="size-5" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Button variant="outline" className="w-fit">
          Load more <ChevronDownIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
}

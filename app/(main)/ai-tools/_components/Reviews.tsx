"use client";

import Image from "next/image";

import { StarIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Review = {
  avatar: string | null;
  name: string;
  date: string;
  rating: number;
  content: string;
};

type ReviewsProps = {
  reviews: Review[];
};

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className="space-y-6">
      {reviews.map(review => (
        <Card key={review.name} className="p-3 md:p-5">
          <div className="flex gap-3">
            {/* Avatar Initials */}
            <div className="bg-secondary flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
              {review?.avatar ? (
                <Image
                  src={review.avatar}
                  alt={`${review.name} avatar`}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-secondary-foreground text-sm font-medium">
                  {review.name
                    .split(" ")
                    .map(n => n[0])
                    .join("")
                    .toUpperCase()}
                </span>
              )}
            </div>
            <div className="flex-1">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <div className="flex w-full flex-col">
                    <div className="flex w-full justify-between">
                      <div className="flex items-center gap-2">
                        <h4 className="text-foreground text-lg font-semibold">{review.name}</h4>
                        <span className="text-muted-foreground text-sm">•</span>
                        <span className="text-muted-foreground text-sm">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="float-start hidden h-full items-start md:flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <StarIcon
                            key={index}
                            className={cn(
                              "text-primary-foreground size-5",
                              index < review.rating ? "fill-primary" : "fill-muted"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-foreground mb-3 leading-relaxed">{review.content}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

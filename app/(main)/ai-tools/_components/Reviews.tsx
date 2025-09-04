"use client";

import { useState } from "react";

import Image from "next/image";

import { ChevronDown, ChevronUp, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

type Review = {
  avatar: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  content: string;
};

type ReviewsProps = {
  reviews: Review[];
};

export default function Reviews({ reviews }: ReviewsProps) {
  const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});

  const toggleReview = (index: number) => {
    setExpandedReviews(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={review.name} className="pb-6">
          <div className="flex gap-12 sm:flex-row flex-col flex-wrap">
            {/* Avatar Initials */}
            <div className="flex gap-4 ">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center overflow-hidden">
                {review.avatar ? (
                  <Image
                    src={review.avatar}
                    alt={`${review.name} avatar`}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
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
              <div>
                <span className="font-medium text-foreground">{review.name}</span>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>

            {/* Review Content */}
            <div className="flex-1">
              {/* Rating Stars */}
              <div className="flex justify-between items-center">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i <= review.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </div>

              {/* Review Content with Read More */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {expandedReviews[index] ? review.content : `${review.content.substring(0, 120)}...`}
              </p>
              {review.content.length > 120 && (
                <Button
                  variant="link"
                  className="text-sm text-muted-foreground mt-2 underline cursor-pointer"
                  onClick={() => toggleReview(index)}
                >
                  {expandedReviews[index] ? (
                    <>
                      <span>Read Less</span>
                      <ChevronUp />
                    </>
                  ) : (
                    <>
                      <span>Read More</span>
                      <ChevronDown />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

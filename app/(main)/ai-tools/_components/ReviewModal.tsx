/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

import { CheckCircle2 } from "lucide-react";

import { addReviewAction } from "@/actions/review.actions"; // path to your server action
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ReviewModalProps {
  open: boolean;
  onOpenChange: (_open: boolean) => void;
  toolId: string;
}

export default function ReviewModal({ open, onOpenChange, toolId }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await addReviewAction({ ai_tool: toolId, rating, review });
      setReview("");
      setRating(0);
      onOpenChange(false); // close review modal
      setShowSuccessModal(true); // show success modal
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Write your review</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground text-sm">
            Your review helps others learn about great AI tools. Please note that your review will
            be moderated before it is published.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
            {/* Rating stars */}
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`h-8 w-8 text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </button>
              ))}
            </div>
            {/* Review textarea */}
            <textarea
              className="border-input focus:border-primary w-full resize-none rounded-md border p-2 text-sm focus:outline-none"
              rows={4}
              placeholder="Write your review here..."
              value={review}
              onChange={e => setReview(e.target.value)}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            {review.trim().length < 5 ? (
              <p className="text-muted-foreground text-xs">
                Review should be more than 5 characters.
              </p>
            ) : (
              <div className="h-3.5" />
            )}
            <Button
              type="submit"
              disabled={loading || rating < 1 || review.trim().length < 5}
              className="w-full"
            >
              {loading ? "Posting..." : "Post review"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="flex flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center sm:max-w-md">
          <DialogHeader className="flex flex-col items-center space-y-2">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
            <DialogTitle className="text-xl font-semibold">Review Submitted!</DialogTitle>
          </DialogHeader>

          <p className="text-muted-foreground text-sm">
            Your review has been submitted successfully and is pending approval.
          </p>

          <Button
            size="sm"
            className="mt-4 w-full sm:w-auto"
            onClick={() => setShowSuccessModal(false)}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

"use client";

import { useState } from "react";

import { AuthModal } from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import ReviewModal from "./../_components/ReviewModal"; // import your modal

export default function ReviewButton({ toolId }: { toolId: string }) {
  const { user } = useAuth();
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  if (!user) {
    return (
      <AuthModal
        trigger={<Button className="rounded-full px-6 py-3 text-sm">Submit Review</Button>}
        title="Sign up to Leave a Review"
        description="Join 350,000+ professionals using our platform to adopt AI tools and skills."
      />
    );
  }

  return (
    <>
      <Button className="rounded-full px-6 py-3 text-sm" onClick={() => setIsReviewOpen(true)}>
        Submit Review
      </Button>

      {/* Render the ReviewModal */}
      <ReviewModal open={isReviewOpen} onOpenChange={setIsReviewOpen} toolId={toolId} />
    </>
  );
}

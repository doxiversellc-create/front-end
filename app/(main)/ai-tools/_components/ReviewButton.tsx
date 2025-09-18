"use client";

import { AuthModal } from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function ReviewButton() {
  const { user } = useAuth();

  return user ? (
    <Button className="rounded-full px-6 py-3 text-sm">Submit Review</Button>
  ) : (
    <AuthModal
      trigger={<Button className="rounded-full px-6 py-3 text-sm">Submit Review</Button>}
      title="Sign up to Leave a Review"
      description="Join 350,000+ professionals using our platform to adopt AI tools and skills."
    />
  );
}

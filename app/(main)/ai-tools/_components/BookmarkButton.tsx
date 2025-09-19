"use client";

import { useState } from "react";

import { Bookmark } from "lucide-react";

import { addBookmarkAction, removeBookmarkAction } from "@/actions/review.actions";
import { AuthModal } from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

export default function BookmarkButton({
  isBookmarked,
  count,
  toolId,
}: {
  isBookmarked: boolean;
  count: number;
  toolId: number;
}) {
  const { user } = useAuth();
  const [optimisticBookmarked, setOptimisticBookmarked] = useState<boolean>(isBookmarked);
  const [optimisticCount, setOptimisticCount] = useState<number>(count);
  const [loading, setLoading] = useState<boolean>(false);

  const handleToggle = async () => {
    if (!user) return; // modal handles unauthenticated
    // Add
    if (!optimisticBookmarked) {
      setOptimisticBookmarked(true);
      setOptimisticCount(c => c + 1);
      setLoading(true);
      try {
        await addBookmarkAction(toolId);
      } catch {
        setOptimisticBookmarked(false);
        setOptimisticCount(c => Math.max(0, c - 1));
      } finally {
        setLoading(false);
      }
      return;
    }

    // Remove
    setOptimisticBookmarked(false);
    setOptimisticCount(c => Math.max(0, c - 1));
    setLoading(true);
    try {
      await removeBookmarkAction(toolId);
    } catch {
      setOptimisticBookmarked(true);
      setOptimisticCount(c => c + 1);
    } finally {
      setLoading(false);
    }
  };

  const button = (
    <div className="flex items-center gap-1">
      <Button
        variant="outline"
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full",
          optimisticBookmarked && "bg-primary hover:bg-primary/90 text-white"
        )}
        onClick={handleToggle}
        disabled={loading}
      >
        <Bookmark
          className={cn("h-5 w-5", optimisticBookmarked ? "fill-current" : "stroke-current")}
        />
      </Button>
      <span className="text-muted-foreground text-lg">{optimisticCount}</span>
    </div>
  );

  return user ? (
    button
  ) : (
    <AuthModal
      trigger={button}
      title="Sign up to Save Tools"
      description="Create an account to bookmark and manage your favorite tools."
    />
  );
}

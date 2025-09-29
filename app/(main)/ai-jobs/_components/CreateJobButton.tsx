"use client";
import { Plus } from "lucide-react";

import JobSubmissionModal from "@/app/(main)/ai-jobs/_components/JobSubmissionModal";
import { Category } from "@/app/(main)/ai-jobs/page";
import { AuthModal } from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function CreateJobButton({ categories }: { categories: Category[] }) {
  const { user } = useAuth();
  if (!user)
    return (
      <AuthModal
        description="Please log in to your account to continue and post a job listing."
        title="Login to Post a Job"
        trigger={
          <Button className="flex w-full items-center gap-2 md:w-auto">
            <Plus className="h-4 w-4" />
            Post a Job
          </Button>
        }
        key="create job"
      />
    );
  return (
    <JobSubmissionModal categories={categories}>
      <Button className="flex w-full items-center gap-2 md:w-auto">
        <Plus className="h-4 w-4" />
        Post a Job
      </Button>
    </JobSubmissionModal>
  );
}

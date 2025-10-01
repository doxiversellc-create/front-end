import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold">Job Not Found</h2>
      <p className="text-muted-foreground mt-2">
        The job you’re looking for doesn’t exist or may have been removed.
      </p>
      <Button asChild className="mt-4">
        <Link href="/jobs">Back to Jobs</Link>
      </Button>
    </div>
  );
}

"use client";
import { useEffect } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  reset,
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Caught in Global Error Boundary:", error);
  }, [error]);
  return (
    <html>
      <body>
        <section className="relative px-4 md:px-6 lg:px-8">
          <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b to-transparent" />
          <section className="container mx-auto flex max-w-md flex-col items-center py-24 text-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            <span className="bg-background text-foreground z-10 w-fit rounded-full border px-4 py-1 text-sm font-medium">
              Error
            </span>
            <h1 className="font-outfit mt-5 text-4xl font-medium tracking-tight md:text-6xl">
              Something Went Wrong
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-md text-center md:max-w-xl md:text-lg lg:max-w-2xl">
              An unexpected error occurred. We&apos;ve been notified and are looking into it.
            </p>
            <div className="mt-6 flex gap-4">
              <Button onClick={() => reset()} variant="outline">
                Try again
              </Button>
              <Button asChild>
                <Link href="/">Go to Homepage</Link>
              </Button>
            </div>
          </section>
        </section>
      </body>
    </html>
  );
}

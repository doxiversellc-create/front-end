import React from "react";

import { cn } from "@/lib/utils";

// this component is used to display the section header/badge in different pages and sections for example in the home page in the, in the Top Categories section, we have used this component, and show the Top Categories title, etc.
export default function SectionHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-inter bg-background/90 inline-flex items-center rounded-full border px-4 py-2 text-xs font-medium shadow-sm backdrop-blur-sm md:text-sm lg:px-5",
        className
      )}
    >
      {children}
    </div>
  );
}

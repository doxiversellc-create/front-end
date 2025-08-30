import React from "react";

import { cn } from "@/lib/utils";

// this component is used to display the section header/badge in different sections for example in the home page in the, in the Top Categories section, we have used this component, and show the Top Categories title, etc.
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
        "inline-flex items-center font-inter bg-background/90 backdrop-blur-sm rounded-full px-4 lg:px-5 py-2 text-xs md:text-sm font-medium border shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

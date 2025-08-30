import React from "react";

import { cn } from "@/lib/utils";

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
      )}>
      {children}
    </div>
  );
}

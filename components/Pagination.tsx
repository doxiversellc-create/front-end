/* eslint-disable no-unused-vars */
"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  className,
  variant = "outline",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const getPages = (current: number, total: number) => {
    const pages: (number | "...")[] = [];
    const delta = 2;

    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      pages.push(i);
    }

    if (current - delta > 2) pages.unshift("...");
    if (current + delta < total - 1) pages.push("...");

    pages.unshift(1);
    if (total > 1) pages.push(total);

    return pages;
  };

  return (
    <div className={cn("mt-12 flex items-center justify-between gap-2", className)}>
      {/* Desktop Pagination */}
      <div className="hidden w-full items-center justify-between gap-2 sm:flex">
        {/* Prev Button */}
        <Button
          variant={variant}
          size="sm"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="gap-1 rounded-full pr-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {getPages(currentPage, totalPages).map(page =>
            page === "..." ? (
              <span key={`ellipsis-${page}`} className="text-muted-foreground px-2">
                ...
              </span>
            ) : (
              <Button
                key={page}
                variant={currentPage === page ? "outline" : "ghost"}
                size="sm"
                onClick={() => handlePageChange(page as number)}
                className="h-9 w-9 rounded-full p-0"
              >
                {page}
              </Button>
            )
          )}
        </div>

        {/* Next Button */}
        <Button
          variant={variant}
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="gap-1 rounded-full pl-3"
        >
          <span>Next</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Pagination */}
      <div className="flex w-full flex-col items-center gap-2 sm:hidden">
        {/* Page numbers centered */}
        <div className="flex items-center gap-1">
          {getPages(currentPage, totalPages).map(page =>
            page === "..." ? (
              <span key={`ellipsis-mobile-${page}`} className="text-muted-foreground px-2">
                ...
              </span>
            ) : (
              <Button
                key={page}
                variant={currentPage === page ? "outline" : "ghost"}
                size="sm"
                onClick={() => handlePageChange(page as number)}
                className="h-9 w-9 rounded-full p-0"
              >
                {page}
              </Button>
            )
          )}
        </div>

        {/* Prev / Next buttons spaced apart */}
        <div className="flex w-full justify-between px-4">
          <Button
            variant={variant}
            size="sm"
            disabled={currentPage === 1}
            className="rounded-full pr-3"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          <Button
            variant={variant}
            size="sm"
            disabled={currentPage === totalPages}
            className="rounded-full"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4 p-0" />
          </Button>
        </div>
      </div>
    </div>
  );
}

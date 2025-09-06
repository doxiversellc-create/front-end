"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Pagination } from "../../../../components/Pagination";

interface BlogPaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function BlogPagination({ totalPages, currentPage }: BlogPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    // Scroll to top when page changes (only for paginated pages, not landing page)
    if (currentPage > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  if (totalPages <= 1) {
    return null;
  }

  // For landing page (currentPage = 0), don't highlight any page
  const displayCurrentPage = currentPage === 0 ? 0 : currentPage;

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4">
      <Pagination
        className="mt-16"
        totalPages={totalPages}
        currentPage={displayCurrentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

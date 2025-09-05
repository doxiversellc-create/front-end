"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import { Pagination } from "../../../components/Pagination";

interface BlogPaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function BlogPagination({ totalPages, currentPage }: BlogPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paginationRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (paginationRef.current && currentPage > 1) {
      const yOffset = -40; // offset for sticky header
      const y = paginationRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [currentPage]);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div ref={paginationRef} className="w-full max-w-[1200px] mx-auto px-4">
      <Pagination
        className="mt-16"
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

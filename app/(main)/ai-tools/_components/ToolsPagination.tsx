"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { Pagination } from "@/components/Pagination";

interface ToolsPaginationProps {
  totalPages: number;
}
const ToolsPagination = ({ totalPages }: ToolsPaginationProps) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const router = useRouter();
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return (
    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
  );
};

export default ToolsPagination;

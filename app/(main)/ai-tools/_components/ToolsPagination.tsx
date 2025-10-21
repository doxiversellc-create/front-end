"use client";
import { useRouter } from "next/navigation";

import { Pagination } from "@/components/Pagination";

const ToolsPagination = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const router = useRouter();
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return <Pagination totalPages={1} currentPage={currentPage} onPageChange={handlePageChange} />;
};

export default ToolsPagination;

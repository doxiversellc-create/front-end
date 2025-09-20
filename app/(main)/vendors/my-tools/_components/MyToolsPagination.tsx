"use client";

import { useRouter } from "next/navigation";

import { Pagination } from "@/components/Pagination";

interface MyToolsPaginationProps {
  totalPages: number;
  currentPage: number;
}
const MyToolsPagination = ({ currentPage, totalPages }: MyToolsPaginationProps) => {
  const router = useRouter();
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams();
    if (page > 1) {
      params.set("page", page.toString());
      router.push(`/vendors/my-tools?${params.toString()}`);
    } else {
      router.push(`/vendors/my-tools`);
    }
  };
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MyToolsPagination;

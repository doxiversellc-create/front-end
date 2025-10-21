"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { SubCategory } from "@/types/tools.types";

export default function CategoryFilter({
  categories,
  subCategory,
  category,
}: {
  categories: SubCategory[];
  category: string;
  subCategory: string;
}) {
  const [currentSubCategory, setCurrentSubCategory] = useState(subCategory);
  const router = useRouter();

  const handleCategoryChange = (id: number | "all") => {
    setCurrentSubCategory(String(id));
    router.push(`?category=${category}&subCategory=${id}&page=1`, { scroll: false });
  };

  return (
    <>
      {/* Other categories */}
      {categories.map((category: SubCategory) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id)}
          className={`rounded-full border px-4 py-1.5 font-medium whitespace-nowrap transition-all duration-200 ${
            currentSubCategory === String(category.id)
              ? "bg-primary text-primary-foreground border-primary shadow-md"
              : "bg-secondary/40 text-foreground hover:bg-secondary/60 border-border"
          }`}
        >
          {category.name}
        </button>
      ))}
    </>
  );
}

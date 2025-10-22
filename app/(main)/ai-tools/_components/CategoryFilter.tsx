"use client";
import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { SubCategory } from "@/types/tools.types";

export default function CategoryFilter({
  subCategories,
  subCategory,
  category,
}: {
  subCategories: SubCategory[];
  category: string;
  subCategory: string;
}) {
  const [currentSubCategory, setCurrentSubCategory] = useState(subCategory);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (id: string | "all", name: string) => {
    if (id === currentSubCategory) return;
    setCurrentSubCategory(id);

    router.push(`/ai-tools?category=${category}&subCategory=${id}&page=1&categoryName=${name}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("categoryName")) {
      return;
    }
    const categoryName =
      subCategories.find(cat => String(cat.id) === String(currentSubCategory))?.name || "";

    if (!categoryName) return;

    params.set("categoryName", categoryName);
    router.replace(`?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subCategories, currentSubCategory, router, category, subCategory]);

  return (
    <div className="flex flex-wrap gap-2">
      {subCategories.map(cat => (
        <button
          key={cat.id}
          onClick={() => handleCategoryChange(cat.id.toString(), cat.name)}
          className={`rounded-full border px-4 py-1.5 font-medium whitespace-nowrap transition-all duration-200 ${
            currentSubCategory === String(cat.id)
              ? "bg-primary text-primary-foreground border-primary shadow-md"
              : "bg-secondary/40 text-foreground hover:bg-secondary/60 border-border"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

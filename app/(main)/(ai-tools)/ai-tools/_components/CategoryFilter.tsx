"use client";

import { useCallback, useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils"; // if you use clsx or shadcn’s cn helper
import { SubCategory } from "@/types/tools.types";

interface CategoryFilterProps {
  subCategories: SubCategory[];
  category: string;
  subCategory: string;
}

export default function CategoryFilter({
  subCategories,
  category,
  subCategory,
}: CategoryFilterProps) {
  const [currentSubCategory, setCurrentSubCategory] = useState(subCategory);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setCurrentSubCategory(subCategory);
  }, [subCategory]);

  const handleCategoryChange = useCallback(
    (id: string, name: string) => {
      if (id === currentSubCategory) return;

      setCurrentSubCategory(id);

      const params = new URLSearchParams(searchParams.toString());
      params.set("category", category);
      params.set("subCategory", id);
      params.set("page", "1");
      params.set("categoryName", name);

      router.replace(`/ai-tools?${params.toString()}`, { scroll: false });
    },
    [category, currentSubCategory, router, searchParams]
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("categoryName")) return;

    const categoryName = subCategories.find(
      cat => String(cat.id) === String(currentSubCategory)
    )?.name;

    if (!categoryName) return;

    params.set("categoryName", categoryName);
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [subCategories, currentSubCategory, router, searchParams]);

  return (
    <div className="flex flex-wrap gap-2">
      {subCategories.map(cat => {
        const isActive = currentSubCategory === String(cat.id);

        return (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id.toString(), cat.name)}
            className={cn(
              "rounded-full border px-4 py-1.5 font-medium whitespace-nowrap transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-secondary/40 text-foreground hover:bg-secondary/60 border-border"
            )}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}

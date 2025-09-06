"use client";
import { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";

const JobFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showSearch, setShowSearch] = useState(false);

  const activeFilter = searchParams.get("filter") || "recent";
  const query = searchParams.get("q") || "";

  const filters = [
    { id: "recent", label: "Most Recent" },
    { id: "saved", label: "Saved" },
  ];

  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mb-8 border-b">
      <div className="flex items-center space-x-6">
        {filters.map(filter => (
          <div
            key={filter.id}
            onClick={() => updateParams("filter", filter.id)}
            className={`relative cursor-pointer pb-3 transition-colors ${
              activeFilter === filter.id
                ? "text-foreground text-lg font-semibold after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[3px] after:bg-black"
                : "text-muted-foreground hover:text-foreground text-lg font-medium"
            }`}
          >
            {filter.label}
          </div>
        ))}

        <div className="ml-auto flex max-w-xs flex-1 items-center sm:max-w-none">
          {!showSearch ? (
            <button
              onClick={() => setShowSearch(true)}
              className="text-muted-foreground hover:text-foreground flex h-10 w-10 items-center justify-center pb-3"
            >
              <Search className="text-foreground h-5 w-5" />
            </button>
          ) : (
            <div className="relative mb-1 flex w-full items-center sm:w-64">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
              <Input
                placeholder="Search jobs..."
                className="w-full rounded-full pr-10 pl-10 sm:w-64"
                defaultValue={query}
                autoFocus
                onChange={e => updateParams("q", e.target.value)}
              />
              <button
                onClick={() => {
                  setShowSearch(false);
                  updateParams("q", null);
                }}
                className="text-muted-foreground hover:text-foreground absolute right-1 flex h-8 w-8 items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobFilters;

"use client";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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
                ? "text-foreground font-semibold text-lg after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-black"
                : "text-muted-foreground text-lg font-medium hover:text-foreground"
            }`}
          >
            {filter.label}
          </div>
        ))}

        <div className="flex items-center ml-auto flex-1 max-w-xs sm:max-w-none">
          {!showSearch ? (
            <button
              onClick={() => setShowSearch(true)}
              className="h-10 w-10 pb-3 flex items-center justify-center text-muted-foreground hover:text-foreground"
            >
              <Search className="h-5 w-5 text-foreground " />
            </button>
          ) : (
            <div className="relative flex items-center w-full mb-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                className="pl-10 pr-10 w-full sm:w-64 rounded-full"
                defaultValue={query}
                autoFocus
                onChange={e => updateParams("q", e.target.value)}
              />
              <button
                onClick={() => {
                  setShowSearch(false);
                  updateParams("q", null);
                }}
                className="absolute right-1 h-8 w-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
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

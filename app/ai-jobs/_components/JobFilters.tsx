"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const JobFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showSearch, setShowSearch] = useState(false);

  // Read current filter & query from URL
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
    // Reset to first page on filter/search change
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center space-x-4 mb-4">
        {filters.map(filter => (
          <Button
            key={filter.id}
            variant="ghost"
            className={`relative pb-2 px-0 hover:bg-transparent ${
              activeFilter === filter.id
                ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand"
                : "text-muted-foreground"
            }`}
            onClick={() => updateParams("filter", filter.id)}
          >
            {filter.label}
          </Button>
        ))}

        <div className="flex items-center ml-4">
          {!showSearch ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(true)}
              className="h-10 w-10"
            >
              <Search className="h-4 w-4" />
            </Button>
          ) : (
            <div className="relative flex items-center">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                className="pl-10 pr-10 w-64"
                defaultValue={query}
                autoFocus
                onChange={e => updateParams("q", e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setShowSearch(false);
                  updateParams("q", null);
                }}
                className="absolute right-1 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobFilters;

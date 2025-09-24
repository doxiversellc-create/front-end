"use client";

import { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Briefcase, Filter, MapPin, Search, SortAsc, Tag, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { Category } from "../page";

interface JobFiltersProps {
  categories: Category[];
}

const JobFilters = ({ categories }: JobFiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Get current filter values
  const search = searchParams.get("search") || "";
  const job_type = searchParams.get("job_type") || "all";
  const location = searchParams.get("location") || "";
  const category = searchParams.get("category") || "all";
  const ordering = searchParams.get("ordering") || "-created_at";

  const jobTypes = [
    { value: "full_time", label: "Full-time" },
    { value: "part_time", label: "Part-time" },
    { value: "contract", label: "Contract" },
    { value: "internship", label: "Internship" },
    { value: "freelance", label: "Freelance" },
    { value: "all", label: "All Types" },
  ];

  const orderingOptions = [
    { value: "-created_at", label: "Most Recent" },
    { value: "created_at", label: "Oldest First" },
    { value: "title", label: "Title A-Z" },
    { value: "-title", label: "Title Z-A" },
    { value: "company_name", label: "Company A-Z" },
    { value: "-company_name", label: "Company Z-A" },
  ];

  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    // If "all" or empty → remove param instead of sending
    if (!value || value === "" || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    // Reset pagination
    params.set("page", "1");

    router.push(`?${params.toString()}`);
  };

  const FiltersForm = () => (
    <div className="flex flex-wrap items-center gap-4">
      {/* Category */}
      <div className="flex min-w-[180px] items-center gap-2">
        <Tag className="text-muted-foreground h-4 w-4" />
        <Select value={category} onValueChange={v => updateParams("category", v)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(cat => (
              <SelectItem key={cat.id} value={cat.id.toString()}>
                {cat.name} ({cat.job_count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Job Type */}
      <div className="flex min-w-[140px] items-center gap-2">
        <Briefcase className="text-muted-foreground h-4 w-4" />
        <Select value={job_type} onValueChange={v => updateParams("job_type", v)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            {jobTypes.map(type => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="flex min-w-[160px] items-center gap-2">
        <MapPin className="text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Location"
          className="w-full"
          value={location}
          onChange={e => updateParams("location", e.target.value)}
        />
      </div>

      {/* Ordering */}
      <div className="flex min-w-[160px] items-center gap-2">
        <SortAsc className="text-muted-foreground h-4 w-4" />
        <Select value={ordering} onValueChange={v => updateParams("ordering", v)}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {orderingOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <div className="relative max-w-[400px] flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search jobs, companies, or keywords..."
            className="pr-10 pl-10"
            value={search}
            onChange={e => updateParams("search", e.target.value)}
          />
          {search && (
            <button
              onClick={() => updateParams("search", null)}
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Mobile Filters Button */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-2xl p-4">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <FiltersForm />
                <Button className="w-full" onClick={() => setMobileOpen(false)}>
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className="hidden w-full flex-wrap items-center gap-4 md:flex">
        <FiltersForm />
      </div>
    </div>
  );
};

export default JobFilters;

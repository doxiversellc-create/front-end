"use client";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Briefcase, Filter, MapPin, Search, SortAsc, Tag, X } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

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

  // Current URL values
  const search = searchParams.get("search") || "";
  const job_type = searchParams.get("job_type") || "all";
  const location = searchParams.get("location") || "";
  const category = searchParams.get("category") || "all";
  const ordering = searchParams.get("ordering") || "-created_at";

  // Local state for debounced inputs
  const [searchInput, setSearchInput] = useState(search);
  const [locationInput, setLocationInput] = useState(location);
  const [categoryInput, setCategoryInput] = useState(category);
  const [jobTypeInput, setJobTypeInput] = useState(job_type);
  const [orderingInput, setOrderingInput] = useState(ordering);

  const jobTypes = [
    { value: "all", label: "All Types" },
    { value: "full_time", label: "Full-time" },
    { value: "part_time", label: "Part-time" },
    { value: "contract", label: "Contract" },
    { value: "internship", label: "Internship" },
    { value: "freelance", label: "Freelance" },
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
    if (!value || value === "" || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  // Debounced updates
  const debouncedUpdateSearch = useDebouncedCallback((value: string) => {
    updateParams("search", value.trim() || null);
  }, 200);

  const debouncedUpdateLocation = useDebouncedCallback((value: string) => {
    updateParams("location", value.trim() || null);
  }, 200);

  const debouncedUpdateCategory = useDebouncedCallback((value: string) => {
    updateParams("category", value);
  }, 0);

  const debouncedUpdateJobType = useDebouncedCallback((value: string) => {
    updateParams("job_type", value);
  }, 0);

  const debouncedUpdateOrdering = useDebouncedCallback((value: string) => {
    updateParams("ordering", value);
  }, 0);

  // Keep inputs in sync with URL when navigating back/forward
  useEffect(() => setSearchInput(search), [search]);
  useEffect(() => setLocationInput(location), [location]);
  useEffect(() => setCategoryInput(category), [category]);
  useEffect(() => setJobTypeInput(job_type), [job_type]);
  useEffect(() => setOrderingInput(ordering), [ordering]);

  const FiltersForm = () => (
    <div className="flex flex-wrap items-center gap-4">
      {/* Category - debounced */}
      <div className="flex min-w-[180px] items-center gap-2">
        <Tag className="text-muted-foreground h-4 w-4" />
        <Select
          value={categoryInput}
          onValueChange={v => {
            setCategoryInput(v);
            debouncedUpdateCategory(v);
          }}
        >
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

      {/* Job Type - debounced */}
      <div className="flex min-w-[140px] items-center gap-2">
        <Briefcase className="text-muted-foreground h-4 w-4" />
        <Select
          value={jobTypeInput}
          onValueChange={v => {
            setJobTypeInput(v);
            debouncedUpdateJobType(v);
          }}
        >
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

      {/* Location - debounced */}
      <div className="flex min-w-[160px] items-center gap-2">
        <MapPin className="text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Location"
          className="w-full"
          value={locationInput}
          onChange={e => {
            setLocationInput(e.target.value);
            debouncedUpdateLocation(e.target.value);
          }}
        />
        {locationInput && (
          <button
            onClick={() => {
              setLocationInput("");
              updateParams("location", null);
            }}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Ordering - debounced */}
      <div className="flex min-w-[160px] items-center gap-2">
        <SortAsc className="text-muted-foreground h-4 w-4" />
        <Select
          value={orderingInput}
          onValueChange={v => {
            setOrderingInput(v);
            debouncedUpdateOrdering(v);
          }}
        >
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
      {/* Search Bar - debounced */}
      <div className="flex items-center gap-2">
        <div className="relative max-w-[400px] flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search jobs, companies, or keywords..."
            className="pr-10 pl-10"
            value={searchInput}
            onChange={e => {
              setSearchInput(e.target.value);
              debouncedUpdateSearch(e.target.value);
            }}
          />
          {searchInput && (
            <button
              onClick={() => {
                setSearchInput("");
                updateParams("search", null);
              }}
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

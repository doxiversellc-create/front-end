"use client";

import type React from "react";
import { useState } from "react";

import { Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (_query: string) => void;
  placeholder?: string;
  className?: string;
  ref: React.Ref<HTMLInputElement>;
  onFocus?: () => void;
}

export function SearchBar({
  onSearch,
  placeholder = "Search by tool, category, or keyword...",
  className,
  ref,
  onFocus,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const debouncedSearch = useDebouncedCallback((searchQuery: string) => {
    onSearch(searchQuery);
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="relative">
        <Input
          ref={ref}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={onFocus}
          placeholder={placeholder}
          className="bg-background/90 shadow-border/20 focus:ring-primary w-full rounded-full border py-6 pr-2 pl-4 text-base shadow-lg focus:border-transparent focus:ring-2 sm:py-7 md:pl-8"
        />
        <button
          type="submit"
          className="text-muted-foreground/70 hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 p-1.5 transition-colors"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}

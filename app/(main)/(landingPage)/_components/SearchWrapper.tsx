/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";

import { fetcher } from "@/lib/fetcher";
import { SearchBar } from "./SearchBar";
import { SearchResult, SearchResults } from "./SearchResults";

export default function SearchWrapper() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setShowResults(true);

    try {
      const { data } = await fetcher<SearchResult>(
        `/search?limit=10&q=${encodeURIComponent(query)}&search_type=all`
      );
      setSearchResults(data?.results || []);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Show results on input focus
  const handleInputFocus = () => {
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative container mx-auto py-8 md:px-4">
      <div className="mx-auto max-w-2xl">
        <SearchBar ref={inputRef} onFocus={handleInputFocus} onSearch={handleSearch} />
      </div>

      {searchQuery && showResults && (
        <div
          ref={resultsRef}
          className="bg-background/95 absolute top-[80px] left-0 z-[100000] max-h-[450px] w-full max-w-full translate-x-0 overflow-y-auto rounded-xl border shadow-lg backdrop-blur-sm md:top-[90px] md:left-1/2 md:max-w-2xl md:-translate-x-1/2"
        >
          <SearchResults results={searchResults} isLoading={isLoading} searchQuery={searchQuery} />
        </div>
      )}
    </div>
  );
}

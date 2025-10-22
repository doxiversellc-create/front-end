"use client";
import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";

const FDASearch = () => {
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(currentSearch);
  const debouncedValue = useDebounce(search);
  const router = useRouter();

  useEffect(() => {
    if (debouncedValue !== currentSearch) {
      const params = new URLSearchParams(searchParams);
      if (!debouncedValue) {
        params.delete("search");
      } else {
        params.set("search", debouncedValue);
      }
      router.push(`?${params.toString()}`, { scroll: false });
    }
  }, [debouncedValue, currentSearch, searchParams, router]);

  return (
    <form onSubmit={e => e.preventDefault()} className="relative mx-auto max-w-md py-6">
      <Input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search device, company..."
        className="bg-muted-foreground/10 focus:ring-primary w-full rounded-full border py-6 pr-12 pl-8 text-base shadow-sm backdrop-blur-sm focus:border-transparent focus:ring-2"
      />
      <button className="bg-primary absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1.5 text-white">
        <Search className="h-6 w-6" />
      </button>
    </form>
  );
};

export default FDASearch;

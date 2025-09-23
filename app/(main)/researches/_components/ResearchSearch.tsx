"use client";
import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";

const ResearchSearch = () => {
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(currentSearch);
  const debouncedValue = useDebounce(search);
  const router = useRouter();
  useEffect(() => {
    if (debouncedValue !== currentSearch) {
      const params = new URLSearchParams();
      if (debouncedValue == "") {
        params.delete("search");
      } else {
        params.set("search", debouncedValue);
      }
      router.push(`?${params.toString()}`, { scroll: false });
    }
  });
  return (
    <div className="relative mx-auto mt-6 w-full max-w-[554px]">
      <Input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        variant={"rounded"}
        inputSize={"lg"}
        placeholder="What type of Research topics are you interested in?"
        className="bg-muted w-full border-0 py-2 pr-2 pl-5 md:pl-7"
      />
      <button className="bg-primary text-primary-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2">
        <Search />
      </button>
    </div>
  );
};

export default ResearchSearch;

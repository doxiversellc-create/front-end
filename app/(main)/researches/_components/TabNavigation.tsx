"use client";

import { useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ResearchTabValue } from "@/types/research.types";

interface TabNavigationProps {
  activeTab: ResearchTabValue;
}

const tabs = [
  {
    label: "Most Recent",
    value: "recent",
    animation: "slide-in-from-right-full",
  },
  {
    label: "Saved",
    value: "saved",
    animation: "slide-in-from-left-full",
  },
];

export default function TabNavigation({ activeTab }: TabNavigationProps) {
  const [activeTabState, setActiveTabState] = useState<ResearchTabValue>(activeTab);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onTabChange = (tab: ResearchTabValue) => {
    setActiveTabState(tab);

    const params = new URLSearchParams(searchParams.toString());

    if (tab === "recent") {
      params.delete("tab");
    } else {
      params.set("tab", tab);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mb-6 flex items-center justify-center gap-8 border-b md:mb-9">
      <div className="relative flex items-center gap-6">
        {tabs.map(tab => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value as ResearchTabValue)}
            className={`relative pb-2 font-bold transition-all duration-300 ${
              activeTabState === tab.value
                ? "text-foreground"
                : "text-muted-foreground/70 hover:text-foreground"
            }`}
          >
            {tab.label}
            {activeTabState === tab.value && (
              <div
                className={`bg-foreground animate-in ${tab.animation} absolute right-0 bottom-0 left-0 h-0.5 duration-300`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

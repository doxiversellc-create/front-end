"use client";
import { FC } from "react";

import { useRouter, useSearchParams } from "next/navigation";

interface SortProps {
  name: string;
  options: { label: string; value: string }[];
}

export const Sort: FC<SortProps> = ({ name, options }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentValue = searchParams.get(name) || options[0]?.value || "";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    params.set("page", "1"); // reset page when sort changes
    router.push(`?${params.toString()}`);
  };

  return (
    <select
      value={currentValue}
      onChange={e => handleChange(e.target.value)}
      className="px-1 py-1 text-sm font-semibold text-foreground"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

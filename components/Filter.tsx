"use client";

import { FC } from "react";

import { useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  name: string; // URL param name, e.g., "filter"
  options: { label: string; value: string }[];
}

export const Filter: FC<FilterProps> = ({ name, options }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentValue = searchParams.get(name) || options[0]?.value || "";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    params.set("page", "1"); // reset page when filter changes
    router.push(`?${params.toString()}`);
  };

  return (
    <select
      value={currentValue}
      onChange={e => handleChange(e.target.value)}
      className="px-3 py-1 text-sm"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

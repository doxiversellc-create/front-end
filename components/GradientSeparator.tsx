import React from "react";

interface GradientSeparatorProps {
  width?: string; // Tailwind width, e.g., "w-full"
  height?: string; // Tailwind height, e.g., "h-[1px]"
  color?: string; // Tailwind gradient color, e.g., "via-secondary-foreground/10"
  className?: string;
}

export const GradientSeparator: React.FC<GradientSeparatorProps> = ({
  width = "w-full",
  height = "h-[1px]",
  color = "via-secondary-foreground/10",
  className = "",
}) => {
  return (
    <div
      className={`${width} ${height} bg-gradient-to-r from-transparent ${color} to-transparent ${className}`}
    />
  );
};

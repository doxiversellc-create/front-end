// import React from "react";

// interface GradientSeparatorProps {
//   width?: string; // Tailwind width, e.g., "w-full"
//   height?: string; // Tailwind height, e.g., "h-[1px]"
//   color?: string; // Tailwind gradient color, e.g., "via-secondary-foreground/10"
//   className?: string;
// }

// export const GradientSeparator: React.FC<GradientSeparatorProps> = ({
//   width = "w-full",
//   height = "h-[1px]",
//   color = "via-secondary-foreground/10",
//   className = "",
// }) => {
//   return (
//     <div
//       className={`${width} ${height} bg-gradient-to-r from-transparent ${color} to-transparent ${className}`}
//     />
//   );
// };

import React from "react";

interface GradientSeparatorProps {
  width?: string; // Tailwind width, e.g., "w-full"
  height?: string; // Tailwind height, e.g., "h-[1px]"
  color?: string; // Tailwind gradient color, e.g., "from-transparent via-gray-400 to-transparent"
  className?: string;
  variant?: "gradient" | "dotted";
}

export const GradientSeparator: React.FC<GradientSeparatorProps> = ({
  width = "w-full",
  height = "h-[1px]",
  color = "from-transparent via-secondary-foreground/30 to-transparent",
  className = "",
  variant = "gradient",
}) => {
  if (variant === "dotted") {
    return (
      <div
        className={`${width} ${height} relative ${className}`}
        style={{
          borderTop: "1px dashed currentColor",
          WebkitMaskImage: "linear-gradient(to right, transparent, #d4d3d397, transparent)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: "linear-gradient(to right, transparent, #d4d3d3a7, transparent)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      />
    );
  }

  return <div className={`${width} ${height} bg-gradient-to-r ${color} ${className}`} />;
};

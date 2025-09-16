import { SubCategory } from "@/app/(main)/categories/page";

export default function CategoryFilter({
  categories,
  handleCategoryChange,
  subCategory,
}: {
  categories: SubCategory[];
  handleCategoryChange: (_id: number | "all") => void;
  subCategory: string;
}) {
  return (
    <>
      {/* Default "All" button */}
      <button
        key="all"
        onClick={() => handleCategoryChange("all")}
        className={`rounded-full border px-4 py-1.5 font-medium whitespace-nowrap transition-all duration-200 ${
          !subCategory || subCategory === "all"
            ? "bg-primary text-primary-foreground border-primary shadow-md"
            : "bg-secondary/40 text-foreground hover:bg-secondary/60 border-border"
        }`}
      >
        All
      </button>

      {/* Other categories */}
      {categories.map((category: SubCategory) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id)}
          className={`rounded-full border px-4 py-1.5 font-medium whitespace-nowrap transition-all duration-200 ${
            subCategory == String(category.id)
              ? "bg-primary text-primary-foreground border-primary shadow-md"
              : "bg-secondary/40 text-foreground hover:bg-secondary/60 border-border"
          }`}
        >
          {category.name}
        </button>
      ))}
    </>
  );
}

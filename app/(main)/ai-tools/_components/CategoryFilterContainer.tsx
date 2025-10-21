import { getAiToolSubCategories } from "@/actions/tools.actions";
import CategoryFilter from "./CategoryFilter";

interface CategoryFilterContainerProps {
  category: string;
  subCategory: string;
}
const CategoryFilterContainer = async ({ category, subCategory }: CategoryFilterContainerProps) => {
  const { SubCategories, error } = await getAiToolSubCategories({ category });

  if (error)
    return (
      <div className="flex w-full items-center justify-center py-10 text-center text-red-500">
        Failed to load sub categories.
      </div>
    );
  return (
    <CategoryFilter
      subCategories={SubCategories || []}
      category={category}
      subCategory={subCategory}
    />
  );
};

export default CategoryFilterContainer;

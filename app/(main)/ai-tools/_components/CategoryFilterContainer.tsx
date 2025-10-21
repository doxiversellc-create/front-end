import { getAiToolSubCategories } from "@/actions/tools.actions";
import CategoryFilter from "./CategoryFilter";

interface CategoryFilterContainerProps {
  category: string;
  subCategory: string;
}
const CategoryFilterContainer = async ({ category, subCategory }: CategoryFilterContainerProps) => {
  const { SubCategories } = await getAiToolSubCategories({ category });
  return (
    <CategoryFilter
      subCategories={SubCategories || []}
      category={category}
      subCategory={subCategory}
    />
  );
};

export default CategoryFilterContainer;

import { Badge } from "@/components/ui/badge";

interface CategoriesFilterProps {
  categories: string[];
}

export default function CategoriesFilter({ categories }: CategoriesFilterProps) {
  return (
    <div className="md:hidden w-full relative mb-4">
      <div className="overflow-x-auto">
        <div className="flex gap-3 pb-2 min-w-max">
          {categories.map(category => (
            <Badge
              key={category}
              variant="secondary"
              className="flex-shrink-0 text-sm font-normal bg-muted hover:bg-muted/80 text-muted-foreground whitespace-nowrap"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
      {/* Gradient fade overlay */}
      <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}

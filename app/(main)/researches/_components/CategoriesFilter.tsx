import { Badge } from "@/components/ui/badge";

interface CategoriesFilterProps {
  categories: string[];
}

export default function CategoriesFilter({ categories }: CategoriesFilterProps) {
  return (
    <div className="relative mb-4 w-full md:hidden">
      <div className="overflow-x-auto">
        <div className="flex min-w-max gap-3 pb-2">
          {categories.map(category => (
            <Badge
              key={category}
              variant="secondary"
              className="bg-muted hover:bg-muted/80 text-muted-foreground flex-shrink-0 text-sm font-normal whitespace-nowrap"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
      {/* Gradient fade overlay */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}

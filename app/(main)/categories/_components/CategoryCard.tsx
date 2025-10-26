import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Category } from "@/types/tools.types";

export default function CategoryCard({ category, order }: { category: Category; order: number }) {
  // const IconComponent = category.icon;

  return (
    <Card key={category.id} className="group gap-1 border-none bg-transparent pt-1 shadow-none">
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="border-primary text-primary font-outfit flex aspect-square h-10 w-10 items-center justify-center rounded-full border-4 text-xl font-semibold">
              {order}
            </div>
            <div>
              <CardTitle className="text-md font-inter text-foreground font-semibold">
                {category.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-1 text-sm">
                {category.short_description}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pl-22">
        <div className="mb-4 space-y-2">
          {category?.sub_categories?.map(subCategory => {
            const href = `/ai-tools?category=${category.id}&subCategory=${subCategory.id}&page=1`;
            return (
              <div key={subCategory.id} className="flex items-center gap-2">
                <div className="bg-muted-foreground aspect-square h-1.5 w-1.5 rounded-full" />
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground cursor-pointer text-sm underline transition-colors"
                >
                  {subCategory.name}
                </Link>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/ai-tools?category=${category.id}&subCategory=${category.sub_categories[0].id}&page=1`}
          className="text-primary hover:text-primary/80 group w-full items-center text-center text-sm font-medium underline transition-colors"
        >
          See All AI Tools
        </Link>
      </CardFooter>
    </Card>
  );
}

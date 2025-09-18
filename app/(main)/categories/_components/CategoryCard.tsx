import Link from "next/link";

import { Category } from "@/app/(main)/categories/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CategoryCard({ category }: { category: Category }) {
  // const IconComponent = category.icon;

  return (
    <Card key={category.id} className="group gap-1 border-none pt-1 shadow-none">
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="bg-muted flex aspect-square h-13 w-13 items-center justify-center rounded-full">
              {/* <IconComponent className="h-5 w-5" /> */}
            </div>
            <div>
              <CardTitle className="text-md font-inter text-foreground font-semibold">
                {category.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground/60 mt-1 text-sm">
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

import Link from "next/link";

import { type LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface CategoryProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tools: string[];
}

export default function CategoryCard({ category }: { category: CategoryProps }) {
  const IconComponent = category.icon;

  return (
    <Card key={category.id} className="group border-none shadow-none gap-1 pt-1">
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-13 w-13 items-center justify-center rounded-full bg-muted">
              <IconComponent className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-md font-semibold font-inter text-foreground ">
                {category.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground/60 mt-1">
                {category.description}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pl-20">
        <div className="space-y-2 mb-4">
          {category.tools.map(tool => {
            const href = `/ai-tools?category=${encodeURIComponent(category.title)}&page=1`;
            return (
              <div key={tool} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                <Link
                  href={href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer underline"
                >
                  {tool}
                </Link>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/ai-tools?category=${encodeURIComponent(category.title)}&page=1`}
          className="underline w-full text-center items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
        >
          See All AI Tools
        </Link>
      </CardFooter>
    </Card>
  );
}
